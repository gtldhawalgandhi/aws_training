const AWS = require('aws-sdk');

const domain = 'YOUR_ELASTIC_SEARCH_DOMAIN';

const region = 'eu-west-1';

function getStreamResponse(res, callback) {
    console.log(`${res.statusCode} ${res.statusMessage}`);
    let responseBody = '';
    res.on('data', chunk => {
        responseBody += chunk;
    });
    res.on('end', () => {
        callback({
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            body: JSON.parse(responseBody),
        });
    });
}

async function getItem(path) {
    try {
        const a = await esQuery('GET', path);
        console.log(a);
    } catch (err) {
        console.error(`====> ${err.message}`);
    }
}

const buildRequest = (method, path, body = null) => {
    const url = `https://@${domain}`;
    console.log(`url: ${url}`);
    const endpoint = new AWS.Endpoint(url);

    const request = new AWS.HttpRequest(endpoint, region);

    request.method = method;
    request.path += path;
    request.headers.host = domain;
    request.headers['Content-Type'] = 'application/json';

    if (body) {
        request.body = body;
    }

    return request;
};

const prepareCredentials = async (request) => {
    AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
    const signer = new AWS.Signers.V4(request, 'es');
    signer.addAuthorization(AWS.config.credentials, new Date());
}

async function esQuery(method, path, body = null) {

    // 1.
    const request = buildRequest(method, path, body);
    
    // 2.
    prepareCredentials(request);

    // 3.
    const client = new AWS.HttpClient();
    let response = {};

    console.debug(`Request method: ${method} path: ${path} body: ${body}`);

    try {
        // 4.
        response = await new Promise((resolve, reject) =>
            client.handleRequest(request, null, res => getStreamResponse(res, resolve), err => reject(err))
        );
    } catch (error) {
        console.error(`Error when calling Elasticsearch service: ${error}`);
        throw error;
    }

    if (response.statusCode < 200 || response.statusCode > 207) {
        console.error(`Response body: ${JSON.stringify(response, null, 2)}`);
        const error = new Error(`Error processing ES query: ${response.statusCode} ${response.statusMessage}`);
        error.statusCode = response.statusCode;
        error.statusMessage = response.statusMessage;
        throw error;
    } else {
        console.debug(`Response body: ${JSON.stringify(response, null, 2)}`);
    }

    return response.body;
}

(async function () {
    await getItem('gateway/employees/1');
})();
