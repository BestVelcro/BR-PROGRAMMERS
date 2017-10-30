const Jimp = require("Jimp") // Carrega o modulo do jimp

Jimp.read("https://i.imgur.com/JvdZwSZ.pngs", function (err, img) { // Le a imagem da url
	if (err) throw err; // Se tiver algum erro ele dira no console
		Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function (font) { // Carrega a fonte do texto 
			img.print(font, 283, 137, "Olá mundo"); // Escreve "Olá mundo" na imagem
			img.write("placa.png"); // Salva a imagem
		})
	});
console.log("Processo feito")
