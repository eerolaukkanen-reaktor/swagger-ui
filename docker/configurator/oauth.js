const translator = require("./translator")
const indent = require("./helpers").indent

const oauthBlockSchema = {
  OAUTH_CLIENT_ID: {
    type: "string",
    name: "clientId"
  },
  OAUTH_CLIENT_SECRET: {
    type: "string",
    name: "clientSecret",
    onFound: () => console.warn("Swagger UI warning: don't use `OAUTH_CLIENT_SECRET` in production!")
  },
  OAUTH_REALM: {
    type: "string",
    name: "realm"
  },
  OAUTH_APP_NAME: {
    type: "string",
    name: "appName"
  },
  OAUTH_SCOPE_SEPARATOR: {
    type: "string",
    name: "scopeSeparator"
  },
  OAUTH_SCOPES: {
    type: "string",
    name: "scopes"
  },
  OAUTH_ADDITIONAL_PARAMS: {
    type: "object",
    name: "additionalQueryStringParams"
  },
  OAUTH_USE_PKCE: {
    type: "boolean",
    name: "usePkceWithAuthorizationCodeGrant"
  },
  OAUTH_USE_BASIC_AUTHENTICATION_WITH_ACCESS_CODE_GRANT: {
    type: "boolean",
    name: "useBasicAuthenticationWithAccessCodeGrant",
  }
}

module.exports = function oauthBlockBuilder(env) {
  const translatorResult = translator(env, { schema: oauthBlockSchema })

  if(translatorResult) {
    return (
      `ui.initOAuth({
${indent(translatorResult, 2)}
})`)
  }

  return ``
}
