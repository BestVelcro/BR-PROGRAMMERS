/*
 * Simples require da lib do discord.js, porém está usando desestruturação para evitar o `require('discord.js').Client`.
 * @ver http://exploringjs.com/es6/ch_destructuring.html
 */
const { Client } = require('discord.js');

/*
 * Instancia um novo cliente.
 */
const client = new Client();

/*
 * Listener pro evento "ready" que é emitido quando o bot se conectar com a api do discord.
 * Neste caso o callback fará um simples console.log para avisar que o bot conectou com sucesso, exibindo o user 
 */
client.on('ready', () => { // Quando o bot estiver pronto
  console.log(`Logado como ${client.user.tag}!`);
});

/*
 * Este listener vai escutar o evento "message" que é emitido
 * quando uma mensagem é enviada para um servidor que o seu bot está.
 * Se a mensagem começar com "++ping" o bot vai responder com um "pong!".
 */
client.on('message', (msg) => {
  if (message.content.startsWith('++ping')) {
    message.reply('Pong!');
  }
});

/*
 * Instanciando novo client, simplesmente troque o TOKEN pelo token do seu bot (dur).
 */
client.login('TOKEN');