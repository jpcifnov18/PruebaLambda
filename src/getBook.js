const AWS = require("aws-sdk");

const getBook = async (event)=>
{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters 
    const result = await dynamodb.get(
    {
        TableName: "TaskTable",
        Key: 
        {
            id
        }
    }).promise()
    const book = result.Item
    return {
        status: 200,
        body: book
    }

}

module.exports = {  
    getBook
}