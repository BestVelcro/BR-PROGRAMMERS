const { Client } = require('discord.js');
const fs = require('fs');
const path = require('path');
const defaultCommand = require('./commands/default_command.js');
const commandListener = require('./listeners/message.js');

module.exports = class CommandClient extends Client {
  
  constructor(config = {}) {
    config.clientOptions = config.clientOptions || {};
    super(config.clientOptions);
    
    this.config = config;
    this.commands = [];
    
    if(config.commandsPath) {
      this.initializeCommands(config.commandsPath);
    }
    
    this.initializeListeners();
  }
  
  login(token) {
    token = token || this.config.token;
    super.login(token);
  }
  
  
  /*
   *  HELPERS
   */
  log(...args) {
    if(args.length < 1) {
      return;
    }
    
    let message = args[0];
    let tags = args.slice(1);
    
    if(tags.length > 0) {
      let text = tags.map(t => `[${t}]`);
      text.push(message);
      console.log(text.join(' '));
    } else {
      console.log(`[CommandClient] ${message}`)
    }
  }
  
  logError(message) {
    this.log(message, 'CommandClient', 'ErrorLog');
  }
  
  
  /*
   *  COMMANDS
   */
  addCommand(commandOrigin, alternativeName = 'Unknown') {
    const command = this.parseCommand(commandOrigin, alternativeName);
    if(command) {
      this.commands.push(command);
      return true;
    }
    return false;
  }
  
  runCommand(command, message, args) {
    command.run(message, args);
  }
  
  parseCommand(commandOrigin, alternativeName) {
    if(!commandOrigin) {
      return;
    }
    
    const command = Object.assign(defaultCommand.object, commandOrigin);
    const name = command.name || alternativeName;
    const cmdProps = defaultCommand.properties;
    
    Object.keys(cmdProps).forEach(key => {
      const prop = cmdProps[key];
      if(prop.required && !command[key]) {
        throw new Error(`Missing property ${name}:${key}`);
      }
      
      if(
        (prop.type && typeof command[key] !== prop.type)
        ||
        (prop.check && !prop.check(command[key]))
      ) {
        throw new Error(`Invalid property type: ${name}:${key}`);
      }
    });
    
    if(this.commands.find(c => c.name === command.name)) {
      throw new Error(`There is already a command with this name: ${name}`);
    }
    
    return command;
  }
  
  
  /*
   *  INITIALIZERS
   */
  initializeCommands(dirPath) {
    try {
      fs.readdirSync(dirPath).forEach(file => {
        if(file.endsWith('.js')) {
          if(this.addCommand(require(path.resolve(dirPath, file)), file)) {
            this.log(`${file} loaded.`)
          }
        } else if(fs.statSync(file).isDirectory()) {
          this.initializeCommands(path.resolve(dirPath, file));
        }
      });
    } catch(e) {
      this.logError(e);
    }
  }
  
  initializeListeners() {
    this.on('message', commandListener);
  }
  
}