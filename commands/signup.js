exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  if (client.hearthstone.has("status") && client.hearthstone.get("status")) {
    if (!client.hearthstone.has("players")) {
      let players = {};
      players[message.author.id] = { name: message.author.username, decks: [] };
      client.hearthstone.set("players", players);
      // message.channel.send(JSON.stringify(client.hearthstone.get("players")));
      message.channel.send("You are now signed up. Good luck!");
    } else {
      let players = client.hearthstone.get("players");

      if (message.author.id in players) {
        message.channel.send("You are already signed up. Good luck!");
      } else {
        players[message.author.id] = { name: message.author.username, decks: [] };
        client.hearthstone.set("players", players);
        // message.channel.send(JSON.stringify(client.hearthstone.get("players")));
        message.channel.send("You are now signed up. Good luck!");
      }
    }
  } else {
    message.channel.send("Signups are **closed**");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "signup",
  category: "Hearthstone Tournament",
  description: "Signup to the Hearthstone tournament",
  usage: "signup"
};