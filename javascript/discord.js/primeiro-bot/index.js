const { Client } = require("discord.js"); // Mesma coisa de `require("discord.js").Client`
const client = new Client(); // Cria um novo client

client.on('ready', () => { // Quando o bot estiver pronto
  console.log(`Logado como ${client.user.tag}!`);
});

client.on('message', msg => { // Quando o bot receber uma mensagem
  if(message.content.startsWith("++ping")) { // Se a mensagem começar com "++ping", reponder com "Pong!"
    message.reply("Pong!");
  }
});

client.login('TOKEN');