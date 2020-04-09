const { MessageEmbed } = require('discord.js'); 	

module.exports = {
    name: "płacz",
    aliases: ["płaku"],
    category: "emotions",
    description: "płak płak płak",
    run: async (client, message, args) => {

		if (message.deletable) message.delete();
		
			const embed = new MessageEmbed()
			    .setDescription(args.slice(1).join(" ")) 												// Opis kosmetyczny
				.setColor("#B90702") 																	// Ustawienie koloru w formacie HEX
				.setTimestamp() 																		// Ustawienie czasu widoczności
				//.setImage("https://vignette.wikia.nocookie.net/darling-in-the-franxx/images/b/b3/Zero_Two_appearance.jpg/revision/latest?cb=20180807204943")
				.setImage("https://gifimage.net/wp-content/uploads/2018/11/zero-two-crying-gif-3.gif")																																							 // Obraz
                .setAuthor(message.author.username);												 	// Użytkownik który to napisał

			message.channel.send(embed); 																// Wysłanie embed
    }
}