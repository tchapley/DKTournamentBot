exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  client.hearthstone.set("status", true);
  message.reply("Signup are now **open**");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "open",
  category: "Hearthstone Tournament",
  description: "Open tournament signups",
  usage: "open"
};