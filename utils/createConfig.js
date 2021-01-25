const { browser } = require('protractor')

module.exports = providConfig => {
  const defaultCofig = {
    baseUrl: '',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
    },
    jasmineNodeOpts: { random: true }
  }

  return Object.assign(
    {},
    defaultCofig,
    providConfig
  )
}
