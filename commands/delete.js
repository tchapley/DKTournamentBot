exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  client.hearthstone.set("players", {});
  message.reply("Removed all players");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "delete",
  category: "Hearthstone Tournament",
  description: "Delete all players",
  usage: "delete"
};