const { Client, Collection }  = require('discord.js'); 							// importowanie discord.js, collection
const { config }  = require("dotenv");     														// importowanie .env

const client = new Client({
	disableEveryone: true 																		// Wyłączenie możliwości oznaczania wszystkich na serwerze przez bota
});

client.commands = new Collection();																// Definicja komend
client.aliases  = new Collection();																// Definicja alisów



config({
	path: __dirname + "/.env" 																	// Plik konfiguracyjny
});

["command"].forEach(handler => {																// Wskazanie handlera, który pozwala uruchamiać zewnętrznie komendy
	require(`./handler/${handler}`)(client);
});


client.on("ready", () => {
	console.log(`I am now online, my name is ${client.user.username}`); 						// Debug, napisanie tekstu z nazwą

	client.user.setActivity("Administruje serwerem FranXX :)", {type:"WATCHING"}); 				// Ustawienie czynności bota wyświetlanej na discordzie
});

client.on("message", async message => {
	console.log(`${message.author.username} said: ${message.content}`); 						// Debug, zdobycie nazwy bota

	const prefix = "frx"

	if (message.author.bot) return;																// Sprawdzanie czy autorem wiadomości jest bot, jeśli tak to powrócić
	if (!message.guild) return;																	// --||-- jest członek serwera, jeśli nie to powrócić
	if (!message.content.startsWith(prefix)) return;											// --||-- wiadomość znaczyna się od prefixa, jeśli nie to powrócić
	if (!message.member) message.member = await message.guild.fetchMember(message);				// 

	const args = message.content.slice(prefix.length).trim().split(/ +/g);						// Definicja prefixu
	const cmd = args.shift().toLowerCase();														// Dalsza definicja

	if (cmd.lenght === 0) return;																// Jeśli długość komendy = 0, to nic nie rób (takie zabezpieczenie, żeby nie zbugować)
	let command = client.commands.get(cmd);
	if (!command) command = client.comamnds.get(client.aliases.get(get));

	if (command)
		command.run(client, message, args);
});

client.login(process.env.TOKEN); 																// Zalogowanie za pomocą tokenu, dostępnego w .env
