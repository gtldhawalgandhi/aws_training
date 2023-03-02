exports.handler = function (event, context) {
    console.log(JSON.stringify(event, null, 2))

    context.done()
};