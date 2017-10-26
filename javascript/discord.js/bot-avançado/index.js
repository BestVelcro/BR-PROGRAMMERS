const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = 'PREFIXO';

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(arquivo => {
    let FuncaodoEvento = require(`./eventos/${arquivo}`);
    let  = arquivo.split(".")[0];
    client.on(arquivo, (...args) => FuncaodoEvento.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let comando = message.content.split(" ")[0];
  comando = comando.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  try {
    let ArquivoComando = require(`./comandos/${comando}.js`);
    ArquivoComando.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});

client.login("TOKEN");