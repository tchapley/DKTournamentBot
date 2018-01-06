exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  client.hearthstone.set("status", false);
  message.reply("Signup are now **closed**");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "close",
  category: "Hearthstone Tournament",
  description: "Close tournament signups",
  usage: "close"
};