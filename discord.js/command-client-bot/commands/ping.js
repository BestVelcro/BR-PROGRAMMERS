module.exports = {
  name: 'ping',
  aliases: ['pang', 'peng', 'pong', 'pung'],
  run: (message, args) => {
    message.reply('pong!');
  }
}