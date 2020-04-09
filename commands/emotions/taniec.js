const { MessageEmbed } = require('discord.js'); 	

module.exports = {
    name: "taniec",
    aliases: ["tany"],
    category: "emotions",
    description: "tańcz kiedy inni tańczą...",
    run: async (client, message, args) => {

		if (message.deletable) message.delete();
		
			const embed = new MessageEmbed()
			    .setDescription(args.slice(1).join(" ")) 												// Opis kosmetyczny
				.setColor("#B90702") 																	// Ustawienie koloru w formacie HEX
				.setTimestamp() 																		// Ustawienie czasu widoczności
				//.setImage("https://vignette.wikia.nocookie.net/darling-in-the-franxx/images/b/b3/Zero_Two_appearance.jpg/revision/latest?cb=20180807204943")
				.setImage("https://media1.tenor.com/images/d966251589bce4e5db91cfb5aa4277e6/tenor.gif?itemid=14732606")																																							 // Obraz
                .setAuthor(message.author.username);												 	// Użytkownik który to napisał

			message.channel.send(embed); 																// Wysłanie embed
    }
}