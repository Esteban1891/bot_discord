const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
});

client.on("message", (message) => {
    if (message.content.startsWith("-e")) {
        message.channel.send("te amo esteban");
    }

});

client.login("NzQ2NjEyODQ5ODYxOTg0Mjc2.X0C3Zg.lUSsBkNsO5sisrx4ZdyYfK4-dxc");