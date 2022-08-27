# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `devenv-api-url`

**Required** Devenv API URL provided by Devenv Team.

## `devenv-client-secret-key-id`

**Required** Client Secret Key Id provided by Devenv Team.

## `devenv-client-secret-key`

**Required** Client Secret Key provided by Devenv Team.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  devenv-api-url: 'https://devenv.kubefy.io'
  devenv-client-secret-key-id: 'ZL8qiN0AA2CsbphtcBvdmBS3p'
  devenv-client-secret-key: 'C0DXruE0Ub1iAG1LJ0RGHmr98'