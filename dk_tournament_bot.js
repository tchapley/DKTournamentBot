const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "prefix") {
    if(message.author.id !== config.ownerID) return;

    config.prefix = args.shift();

    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  } else if (command === "ping") {
    message.channel.send("pong!");
  } else if (command === "foo") {
    message.channel.send("bar!");
  } else if (command === "asl") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }

});

client.login(config.token);