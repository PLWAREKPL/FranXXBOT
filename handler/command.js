const  { readdirSync }  = require("fs"); // Importowanie reddirSync, odpowiada za foldery i inne gówno

const  ascii  = require("ascii-table"); // Importowanie ascii, tabelki, słynne kody ascii fekiety, tak są tu potrzebne

let table = new ascii("Commands");
table.setHeading("Command", "Load status"); // Ustawienie tabelki

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js")); // Filtrowanie plików sprawiające, że tylko zmienne z .js będą pobierane

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`); // Pobieranie pliku

            if (pull.name) {                                        // Jeśli komenda ma nazwę w kodzie to zarejestruj ją jako nazwę pliku
                client.commands.set(pull.name, pull);
                table.addRow(file, '✔️')
            } else {
                table.addRow(file, '❌ -> brakuje czegoś??');
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases))
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name)); // Jeśli plik ma aliasy, albo jest na liście to zarejestruj go do kolekcji plików (folder)

        }
    });
    console.log(table.toString()); // Wyświetlanie wszystkich komend w logach
};
