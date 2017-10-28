# Vamos importar o básico
import discord # Importando a package do Discord

from discord.ext import commands

import config # Importando o arquivo config.py

zekeeh = commands.Bot(command_prefix = "$", description="Um bot feito em python usando discord.py[discord.ext.commands]") # Aqui pode por o nome que quiser na variável, porém eu recomendo client ou o nome de teu bot

@zekeeh.event
async def on_ready():
	'''Vai ser executado toda vez que o bot ligar'''
	print("Estou vivo!")
	print("{0}\n{1}\n{2}".format(zekeeh.user.id, zekeeh.user.name, "-------------"))

@zekeeh.command()
async def ping(): # Comando Ping
	"""
	Vai responder a mensagem com um 'Pong'
	"""
	await zekeeh.reply("Pong!")

zekeeh.run(config.TOKEN)