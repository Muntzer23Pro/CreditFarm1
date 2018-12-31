const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`Mortazaa مش نصاب`);
}, 30)
})

client.login("NTI3OTI3ODc5MTY2ODUzMTIw.Dwtp3w.lS1-Kxp3o_Ib9WuRKgopaAS8phY");
