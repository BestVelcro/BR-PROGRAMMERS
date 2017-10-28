exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    let user = message.mentions.users.first() || message.author; // Pega a menção ou, se não houver menção, de quem executou o comando.
    if (usuario.id == message.author.id) { // Se não houver menção manda a informação do usuário que executou o comando.
        const embed = new Discord.RichEmbed()
            .setAuthor(`Seu Perfil`, message.author.avatarURL) // Coloca como título "Seu Perfil" e a imagem do autor em miniatura
            .addField(`Nome: `, `${message.author.username} (#${message.author.tag})`) // Nome e a tag do autor
            .addField('ID: ', `${message.author.id}`) // ID do autor
            .addField('Data de criação: ', `${message.author.createdAt}`) // Data de criação da conta (em inglês)
            .setThumbnail(message.author.avatarURL) // Imagem do autor no canto superior direito
           message.channel.send({embed: embed}) // Envia a embed
            
     } else if (usuario.id !== message.author.id) { // Se houver menção manda o avatar do usuário mencionado.
         const embed = new Discord.RichEmbed()
            .setAuthor(`Perfil de ${user.username}`, user.avatarURL) // Coloca como título "Perfil de <nome>" e a imagem do mencionado em miniatura
            .addField(`Nome: `, `${user.username} (#${user.tag})`) // Nome e a tag do usuário mencionado.
            .addField('ID: ', `${user.id}`) // ID do usuário
            .addField('Data de criação: ', `${user.createdAt}`) // Data de criação da conta (em inglês)
            .setThumbnail(user.avatarURL) // Imagem do usuário no canto superior direito
           message.channel.send({embed: embed}) // Envia a embed
        }
    }
