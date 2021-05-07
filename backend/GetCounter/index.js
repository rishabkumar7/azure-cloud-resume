module.exports = async function (context) {
    context.log("JavaScript HTTP trigger function processed a request.");

    context.log(context.bindings.inputDocument);
    // For first time creation of record
    context.bindings.outputDocument = context.bindings.inputDocument || { id: "1", count: 0 };

    //Increment by 1
    context.bindings.outputDocument.count = context.bindings.outputDocument.count + 1;
    context.log(context.bindings.outputDocument);
    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
            "content-type": "application/json"
        },
        body: {
            id: context.bindings.outputDocument.id,
            count: context.bindings.outputDocument.count
        }
    };
}