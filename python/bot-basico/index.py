# Primeiro temos de importar os essenciais usados no bot
import discord
import asyncio

# Iniciando uma nova instância de "Client"
client = discord.Client() # podemos por o nome da variavel do que quiser, porém eu prefiro client

@client.event
async def on_ready():
	'''Isso vai ser executado toda vez que o bot ligar'''
	print("Eu estou vivo!")
	print("Meu nome é {} e meu id foi definido como {}.".format(client.user.name, client.user.id))
	print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

@client.event
async def on_message():
	'''Isso vai ser executado toda vez que uma mensagem for recebida'''
	if message.content.startswith("!ping"): # se a mensagem do usuário começar com !ping faça:
		await client.send_message(mesage.channel, "Pong!") # espere envie a mensagem "Pong!"

		'''await = espere (espera todos os comandos executarem para depois esse executalo, se usassemos
		await codigo1
		await codigo2
		ele executaria na ordem que está [código1 ---> código2])'''

client.run("token") # Liga o bot