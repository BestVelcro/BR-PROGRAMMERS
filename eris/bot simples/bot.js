var Eris = require('eris');

var bot = new Eris("token_do_seu_bot");
// Troque o token_do_seu_bot pelo token da conta do bot

bot.on("ready", () =>{// Evento: quando o bot estiver pronto
	console.log("I'm Ready!");// enviará no log "I'm Ready!"
});

bot.on("messageCreate", (msg) => {// Evento: quando uma mensagem for criada

if(msg.content.indexOf("ping") == 0){//Se o começo da mensagem for "ping"
bot.createMessage(msg.channel.id, "pong!");//envie a mensagem "pong!"
}

});

bot.connect();// conecta o bot para o Discord