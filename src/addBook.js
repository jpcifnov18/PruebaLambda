const { v4 } = require("uuid");
const AWS = require("aws-sdk");


const addBook = async (event) => {
  console.log("event: "+ event);
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { title, description } = JSON.parse(event.body);
  console.log(title);
  console.log(description);
  const createdAt = new Date()
  const id = v4()

  const newTask = {
    id,
    title,
    description,
    createdAt,
    done: false,
  };

  await dynamodb
    .put({
      TableName: "TaskTable",
      Item: newTask,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};
module.exports = {
    addBook,
}