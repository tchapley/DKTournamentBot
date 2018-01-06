exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  let output = `== Tournament Rules ==\n`;
  output += `Tournament Bracket\n`;
  output += `Best of 3\n`;
  output += `Must win with both decks in each match\n`;
  output += `Prize is TBD\n`;
  output += `Schecule is TBD\n`;

  message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "rules",
  category: "Hearthstone Tournament",
  description: "Shows ping to the discord server",
  usage: "rules"
};