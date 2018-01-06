exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.length === 0) {
    if (client.hearthstone.has("status") && client.hearthstone.get("status")) {
      message.channel.send("Signups are **open**");
    } else {
      message.channel.send("Signups are **closed**");
    }
  } else if (args.length > 0 && args[0] === "players") {
    let players = client.hearthstone.get("players") || {};

    let output = `== Players ==`;
    if (Object.keys(players).length > 0) {
      for (let key in players) {
        const name = players[key].name;
        output += `\u200b\n\n= ${name} = \n`;
        let decks = players[key].decks;
        for (let i = 0; i < decks.length; i++) {
          const deck = decks[i];
          output += `Deck ${i+1} :: ${deck}\n`;
        }

        if (decks.length === 0) {
          output += `No decks have been added yet\n`;
        }
      }
      message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
    } else {
      message.channel.send("There are no players signed up");
    }
  } else {
    message.channel.send("Incorrect argument received. Type !help for more info");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "status",
  category: "Hearthstone Tournament",
  description: "View current status of signups",
  usage: "status [players]"
};