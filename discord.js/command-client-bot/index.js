const { CommandClient } = require('../command-client');
const path = require('path');
const defaultConfig = {
  prefix: 'tc!',
  commandsPath: path.join(__dirname, '/commands'),
  token: 'token'
};

// Config reading
let config = defaultConfig;
try {
  const fileConfig = require('./config.json');
  config = Object.assign(defaultConfig, fileConfig);
} catch(e) {
  console.error(e);
}

// Initializing
const client = new CommandClient(config);

client.on('ready', function() {
  this.log(`Logado como ${client.user.tag}!`, 'MyBot');
});

client.login();