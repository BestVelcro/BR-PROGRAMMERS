1°Exemplo de comandos simples em d.js

**message.author.avatarURL**
Pega o link do avatar da pessoa que mandou a mensagem

Explicação:
 message = mensagem
 author = autor 
 avatarURL= Link do Avatar

**message.content === " "**
Pega o conteudo da mensagem
 message = mensagem
 content = conteudo
 === " " = entre " " você bota ao que deve ser igual, por Exemplo
 ``message.content === "kkj"`` se o conteudo da mensagem for kkj ele vai executar o resto do comando

 Uso: ![](https://i.imgur.com/ygYa9lA.png)

 **message.content.startsWith(" ")**
 Dessa forma ele detecta CASO COMECE com o que você botou  entre " "
 
 Uso:  ![](https://i.imgur.com/AKJPISk.png)


Diferença entre ``message.channel.sendMessage(" ")`` e ``message.reply``

 ``message.channel.sendMessage(" ")`` = envia a mensagem no canal em que o comando foi feito.

 ``message.reply(" ")`` = Responde mencionando quem fez o comando.

2°Usando Embed

let embed = new Discord.RichEmbed()

**Você pode usar as seguintes coisas:**
 ![](https://i.imgur.com/x5WPBGe.png)

message.channel.send({embed})

3°Oq é args?

agrs = arguments = argumentos

args geralmente é usado para pegar a mensagem 
**apenas após a prefix e o nome do comando**, 
diferente de ``message.content`` que pega a mensagem inteira.

Agora por que usar isso? Veja agora.


4°Fazendo comandos com args

Vamos começar com o "say", o "say" pega a conteudo da mensagem **apos o a prefix e o comando**(ex: **ze.say** apenas isso aqui vai ser detectado).

Comando: ![](https://i.imgur.com/WpAAdc7.png)

Explicação: 

 ``let parts = message.content.split(' ');``

 ``message.content.split(' ')`` = Pega o conteudo da mensagem ate ter espaço(ex: ze.say <- so vai pegar isso)

 ``let argsJunto = message.content.split(" ").slice(1).join(' ')``

 ``message.content.split(" ").slice(1).join(' ')`` = Contrario do outro, pega o conteudo apos o espaço.

Usuarios normais do discord não conseguem mandar mensagem em embed **apenas bots**(aka selfbots), então por que não fazer o bot enviar em embed por ele?

 ![](https://i.imgur.com/PtJ5EWC.png)

5°Fazendo um Eval

**ESSA PARTE É TOTALMENTE CUSTOMIZAVEL,QUASE TODO MUNDO TEM UM TIPO DE EVAL DIFERENTE E ESSE É BEM SIMPLES, EU NÃO SOU RESPONSAVEL POR QUAISQUER TIPO DE DANO AO SEU BOT PELO USO DE EVAL.**

![](https://i.imgur.com/lindR6E.png)


O Eval serve para você testar e executar comandos no discord usando o bot. (ex: ze.eval message.channel.sendMessage("kek") )

6°Comando de Ping

não tem como enviar em texto pq é largo então vou deixar em link de download. Você vai precisar alterar um pouco

[Baixe aqui.](https://cdn.discordapp.com/attachments/298518634765221890/373497605122162689/ping.js)


7°Fazendo o bot usar emojis.

``message.react('👍')`` troque o 👍 pelo emoji para por mais de um vai ser tipo assim: ``message.react('👍').then(message.react('👎'))``

8°Fazendo um numero aleatorio.

``message.channel.send(Math.floor(Math.random() * 100))``

Para que você vai querer isso?

Bem nesse comando isso so serve para dar um numero aleatorio de 0 a 100 mas calculos podem e são necessarios para varias coisas
que você vai perceber ao meio do tempo.
