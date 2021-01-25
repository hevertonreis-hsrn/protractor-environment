const configCreator = require('../utils/createConfig')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless'
      ]
    }
  }
})
