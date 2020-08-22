const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
});

client.on("message", (message) => {
    if (message.content.startsWith("here your command for discord")) {
        message.channel.send("here responsive");
    }

});

client.login("here your token id");
