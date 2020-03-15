const core = require('@actions/core');
const { GitHub, context } = require("@actions/github");
const axios = require('axios');
const stats = require("../../../audits/ch-2.json");

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
          type: 'challenge-2',
          numTotalTests, 
          numPassedTests, 
          numPendingTests,
          numTotalTestSuites, 
          numPassedTestSuites
        };

        const apiBase = core.getInput('api-base');
        const { result } = await axios.post(`${apiBase}/entry-tests`, {report});
        console.log(result); 

      } catch (error) {
        core.setFailed(error.message);
        //TODO possible to post a comment on the PR at this point?
      }
};

run();
