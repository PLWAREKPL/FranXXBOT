module.exports = {
    name: "ping",
    category: "info",
    description: "Pokazuje ping i opóźnienie API",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Odbijanie...`);

    msg.edit(`💤Pong💤\nTwój ping to: ${Math.floor(msg.createdAt - message.createdAt)}ms\nOpóźnienie API: ${Math.round(client.ws.ping)}ms\n💤Pong💤`); // Obliczanie pingu
    }

}
