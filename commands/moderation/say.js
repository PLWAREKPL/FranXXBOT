const { MessageEmbed } = require('discord.js'); 	

module.exports = {
    name: "say",
    aliases: ["broadcast"],
    category: "moderation",
    description: "Piszę co rozkażesz, mój Władco...",
    run: async (client, message, args) => {

        if (message.deletable) message.delete();

		if (args.length < 0) return message.reply("Nie chcesz nic mówić? 🤔").then(m => m.delete(5000)); // Gdy użytkownik nic nie napisze


		if (args[0].toLowerCase() === "embed") { 														// Wykrycie prefixu embed
			const embed = new MessageEmbed()
			    .setDescription(args.slice(1).join(" ")) 												// Opis kosmetyczny
				.setColor("#B90702") 																	// Ustawienie koloru w formacie HEX
				.setTimestamp() 																		// Ustawienie czasu widoczności
				//.setImage("https://vignette.wikia.nocookie.net/darling-in-the-franxx/images/b/b3/Zero_Two_appearance.jpg/revision/latest?cb=20180807204943")
				.setImage("https://media1.tenor.com/images/e8967d27b05286415b56c1755bce712c/tenor.gif?itemid=15124586")																																							 // Obraz
                .setAuthor(message.author.username);												 	// Użytkownik który to napisał

			message.channel.send(embed); 																// Wysłanie embed
		} else {
			message.channel.send(args.join(" ")); 														// Jeśli użytkownik nic nie napisał to analogicznie nic się nie dzieje lol XD
		}
    }
}