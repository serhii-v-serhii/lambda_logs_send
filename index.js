const AWS = require('aws-sdk');

module.exports = (body, FunctionName, region = 'us-west-2') => {
    const config = new AWS.Config({ region });
    const lambdaLog = new AWS.Lambda(config);

    return new Promise((resolve, reject) => {
        lambdaLog.invoke({
            FunctionName,
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify({ body })
        }, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};
