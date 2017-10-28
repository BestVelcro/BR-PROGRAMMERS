/*
 * Simples require da lib Eris.
 */
const Eris = require('eris');

/*
 * Instanciando novo client, simplesmente troque o token_do_seu_bot pelo token do seu bot (dur).
 */
const bot = new Eris('token_do_seu_bot');

/*
 * Listener pro evento "ready" que é emitido quando o bot se conectar com a api do discord.
 * Neste caso o callback fará um simples console.log para avisar que o bot conectou com sucesso.
 */
bot.on('ready', () => {
  console.log('Conectado =)');
});

/*
 * Este listener vai escutar o evento "messageCreate" que é emitido
 * quando uma mensagem é enviada para um servidor que o seu bot está.
 * Se a mensagem começar com "ping" o bot vai responder com um "pong!".
 */
bot.on('messageCreate', (msg) => {
  if (msg.content.indexOf('ping') == 0) {
    /*
     * createMessage é uma função que envia uma mensagem nova, recebe como parametros
     * o ID do canal que a mensagem deve ser enviada e o conteúdo da mensagem.
     */
    bot.createMessage(msg.channel.id, 'pong!');
  }
});

/*
 * Starta o bot.
 */
bot.connect();
