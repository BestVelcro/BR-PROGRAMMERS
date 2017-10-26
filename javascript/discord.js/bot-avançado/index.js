// Modulos
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

// Edite
const prefix = 'PREFIXO'; // Adicione aqui o seu prefixo


// Incializador dos Eventos
fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let evento = require(`./eventos/${file}`);
    let NomeEvento = file.split(".")[0];
    client.on(NomeEvento, (...args) => evento.run(client, ...args));
  });
});


// Incializador dos Comandos
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

// Edite
client.login("TOKEN"); // Adcione seu token aqui
