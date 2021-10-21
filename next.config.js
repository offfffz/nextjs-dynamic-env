module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    MY_ENV: process.env.MY_ENV
  },
  publicRuntimeConfig: {
    MY_ENV: process.env.MY_ENV
  },
}