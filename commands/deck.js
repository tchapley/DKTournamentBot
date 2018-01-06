exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (client.hearthstone.has("players")) {
    let players = client.hearthstone.get("players");


    if (!(message.author.id in players)) { message.channel.send("You are not signed up. Use !signup to join the tournament"); }

    let player = players[message.author.id];
    if (args[0] === "add") {
      if (player.decks.length < 2) {
        player.decks.push(args[1]);
        players[message.author.id] = player;
        client.hearthstone.set("players", players);
        message.reply("Deck added");
      } else {
        message.reply("You've already added two decks. Remove one before adding another");
      }
    } else if (args[0] === "remove") {
      if (player.decks.length > 0) {
        let foundDeck = false;
        for (let i = 0; i < player.decks.length; i++) {
          if (args[1].toLowerCase() === player.decks[i].toLowerCase()) {
            console.log(args[1]);
            foundDeck = true;
            player.decks.splice(i, 1);
            players[message.author.id] = player;
            client.hearthstone.set("players", players);
            message.reply("Deck removed");
          }
        }

        if (!foundDeck) {
          message.reply("Could not find deck");
        }
      } else {
        message.reply("You don't have any decks to remove");
      }
    } else {
      message.reply("Incorrect argument received. Type !help for more info");
    }

    // if (message.author.id in players) {
    //   let player = players[message.author.id];
    //   if (player.decks.length < 2 && player.decks.length >= 0) {
    //     if (args[0] === "add") {
    //       player.decks.push(args[1]);
    //       players[message.author.id] = player;
    //       client.hearthstone.set("players", players);
    //       message.reply("Deck successfully added");
    //     }
    //   } else if (player.decks.length > 0) {
    //     if (args[0] === "remove") {
    //       let foundDeck = false;
    //       for (let i = 0; i < player.decks.length; i++) {
    //         if (args[1].toLowerCase() === player.decks[i].toLowerCase()) {
    //           console.log(args[1]);
    //           foundDeck = true;
    //           player.decks.splice(i, 1);
    //           message.reply("Removed deck");
    //         }
    //       }
    //     }
    //   } else {
    //     message.reply("What are you trying to do?");
    //   }
    // }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "deck",
  category: "Hearthstone Tournament",
  description: "Manage your decks",
  usage: "deck [action] [deck name]"
};