module.exports = function(message) {
  if(message.author.bot) {
    return;
  }

  if(message.content.startsWith(this.config.prefix)) {
    let fullCmd = message.content.split(/\s+/g).filter(a => a).map(s => s.trim());
    let args = fullCmd.slice(1);
    let cmd = fullCmd[0].substring(this.config.prefix.length).toLowerCase();
    let command = this.commands.find(c => c.name.toLowerCase() == cmd || c.aliases.includes(cmd));

    /*
    if(command && this.canRun(command, message, args)) {
      command._run(message, args);
    }
    */
    if(command) {
      this.runCommand(command, message, args);
    }
  }
}