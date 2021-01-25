const configCreator = require('../utils/createConfig')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: [
        '--headless'
      ]
    }
  }
})
