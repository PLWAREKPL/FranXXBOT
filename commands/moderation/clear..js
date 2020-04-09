

module.exports = {
    name: "clear",
    aliases: ["clear"],
    category: "moderation",
    description: "Czyszczę brud z tego świata...",
    run: async (client, message, args) => {

        if (message.deleteable) {
            message.delete();
        }


        // Jeśli ktoś nie ma uprawnień
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Nie możesz być czyścicielem robaku...").then(n => message.delete(5000));
        }

        // Jeśli ktoś chce usunąc 0 wiadomości
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Na chuj komu usuwać 0 wiadomości?").then(m => message.delete(5000));
        }

        // Wiadomości, których nie da się usunąć
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Każdy ma swoje ograniczenia, nawet ja nie mogę tego usunąć...").then(m => message.delete(5000));
        }

        let deleteAmount;
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Dowody zostały zniszczone 😈😈😈`))
            .catch(err => message.reply(`Nie udało mi się :c ${err}`));

    }
}