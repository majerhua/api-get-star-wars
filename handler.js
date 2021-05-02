"use strict";
const { Specie } = require("./models/specie");

module.exports.hello = async (event) => {
  const species = await Specie.findAll();

  return {
    statusCode: 200,
    body: JSON.stringify({
      species,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
