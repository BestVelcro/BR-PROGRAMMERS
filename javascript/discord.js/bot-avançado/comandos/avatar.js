exports.run = (client, message, args) => {
 const Discord = require("discord.js")
 let usuario = message.mentions.users.first() || message.author; // Pega a menção ou, se não houver menção, de quem executou o comando.
        if (usuario.id == message.author.id) { // Se não houver menção manda o avatar do autor.
        const embed = new Discord.RichEmbed()
             .setTitle('O seu avatar:')
             .setImage(message.author.avatarURL); // Avatar do autor
        message.channel.send({embed: embed}) // Envia a embed. 
        
        } else if (usuario.id !== message.author.id) { // Se houver menção manda o avatar do usuário mencionado.
            const embed = new Discord.RichEmbed()
            .setTitle(`Avatar de ${user.username}:`)
            .setImage(user.avatarURL); // Avatar do usuário mencionado
            message.channel.send({embed: embed}) // Envia a embed.
        }
}
