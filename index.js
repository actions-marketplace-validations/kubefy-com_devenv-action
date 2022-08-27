const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios')

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const API_URL = core.getInput('devenv-api');
  const CLIENTSECRETKEYID = core.getInput('client-secret-key-id');
  const CLIENTSECRETKEY = core.getInput('client-secret-key');
  console.log(`Hello ${nameToGreet}!`);
  console.log("*****************",API_URL,CLIENTSECRETKEYID,CLIENTSECRETKEY)
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload)
  console.log(`The event payload: ${payload}`);
  axios.post(API_URL, payload)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
} catch (error) {
  core.setFailed(error.message);
}