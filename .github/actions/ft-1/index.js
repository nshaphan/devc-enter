const core = require('@actions/core');
const { GitHub, context } = require("@actions/github");
const axios = require('axios');
const stats = require("../../../__tests__/ft-1.json");

const run = async () => {
    try {        
        const repo = context.repo.repo;
        const owner = context.repo.owner;
        
        const {
          numTotalTestSuites, 
          numPassedTestSuites, 
          numTotalTests, 
          numPassedTests, 
          numPendingTests
        } = stats;

        const report = {
          repo, owner,
          numTotalTestSuites, 
          numPassedTestSuites, 
          numTotalTests, 
          numPassedTests, 
          numPendingTests,
          'isFeatureOne': true
        };

        const {data} = await axios.post('https://reqres.in/api/users', report);
        console.log(data);
        
      } catch (error) {
        core.setFailed(error.message);
      }
};

run();
