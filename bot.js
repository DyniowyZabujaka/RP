const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$clemcia')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **Clemcia - wierze w nas** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./clemciusia.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$sciernisko')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **BRACIA PIERDOLEC - ŚCIERNISKO** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./sciernisko.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$airhorn')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **Airhorn** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./Airhorn.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on('message', message => {
  if (message.content.toLowerCase().startsWith('$avatar <@')) {
    let username =  message.mentions.users.first()
    message.reply(username.avatarURL);
  	}
});	  

client.on('message', message => {
    if (message.content.startsWith('$potato')) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("Nie wykryto użytkownika");
    message.reply(`:potato: **Daje ziemniaka dla** ${user}! :potato:`);
  	}
});

client.on('message', message => {
    if (message.content.startsWith('$hug')) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("Nie wykryto użytkownika");
    message.reply(`**Przytula** ${user}! :heart:`);
    message.channel.sendFile('https://media0.giphy.com/media/EvYHHSntaIl5m/giphy.gif', 'ZabijSie.gif', 'testmessage');
  	}
});

client.on('message', message => {
    if (message.content.startsWith('$kiss')) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("Nie wykryto użytkownika");
    message.reply(`**Całuje** :revolving_hearts: ${user}! :revolving_hearts: `);
    message.channel.sendFile('https://media0.giphy.com/media/3o7buadz6hvdeqByco/giphy.gif', 'ZabijSie.gif', 'testmessage');
  	}
});


client.on('message', message => {
    if (message.content === '$avatar') {
    	message.reply(message.author.avatarURL);	
  	}
});

client.on('message', async message => {
    if (message.content.startsWith('$clear')) {
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":potato: Nie masz uprawnien :) :potato:")
        const args = message.content.slice(1).trim().split(/ +/g);
        console.log(args);
        const messagecount = parseInt(args[1], 10);
        console.log(messagecount);
        if (!messagecount || messagecount < 2 || messagecount > 200)
            return message.reply('Minimalna liczba wyczyszczenia to 2');
        let fetchmessage = await message.channel.fetchMessages({ count: messagecount });
        message.channel.bulkDelete(messagecount)
        message.channel.sendMessage("**Usunięto** "+messagecount)
    }
}); 

client.on('message', message => {
    if (message.content === '$invite') {
    	message.channel.sendMessage('https://discordapp.com/oauth2/authorize?&client_id=275037811718225920&scope=bot&permissions=12659727'); 
  	}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "say") {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie posiadasz uprawnienia MANAGE_MESSAGES")
   message.delete(1);
   message.channel.sendMessage(args.join("  "))
  }
});

client.on("guildMemberAdd", member => {
  let guild = member.guild;
    guild.defaultChannel.sendMessage(`:eggplant:**${member}** Właśnie dołączył na serwer! Zerknij do regulaminu i baw się dobrze. :eggplant:`);
    member.user.sendFile('https://i.imgur.com/V5vQrF3.png', 'TwojaStara.png', 'testmessage');
    member.user.sendMessage(`Witaj na serwerze **#TeamBakłażan** :hand_splayed:\n\nZalecamy zapoznać się z kanałem **#zasady-info**\n\nJako serwer oferujemy miłą atmosfere jak i częste konkursy.\n\nCała administracja życzy dobrej zabawy.\n\nhttps://discord.gg/tzEbMpq`);
});

client.on("guildMemberRemove", member => {
  let guild = member.guild;
    guild.defaultChannel.sendMessage(`:rage: **${member.user.username}** Opuścił nasze grono [*] :rage:`);
    
});
    
client.on('message', message => {
    if (message.content === '$8ball') {
      message.channel.send(':no_entry: | Użyj tego poprawnie: `$8ball <pytanie>`\n\n:no_entry: | Przykład: `$8ball Czy eli jest mądra?`\n\n:question: | Więcej komend znajdziesz pod: `$help`'); 
  	}
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "8ball ")) {
    const coin = ['Tak, definitywnie','Nope','Chyba żartujesz...','Tak','Pojebało cię','Nie','Lepiej by Ci teraz nie mówić','Zapytaj ponownie','Nie mogę teraz odpowiedziec', 'Jak najbardziej', 'Yeah', 'Haha dobry żart',];
    const random = Math.floor(Math.random()*12);
    message.channel.send(":8ball: | "+coin[random]);
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + "flip")) {
    const coin = ['Orzeł','Reszka'];
    const random = Math.floor(Math.random()*2);
    message.channel.send("**Wypadło na** | "+coin[random]);
  }
});

client.on('message', message => {
  if (message.content === prefix + 'dice') {
    message.channel.send({embed: {
  color: 16672492,
  description: Math.floor(Math.random() * 9) + 1,
  title: " ",
  author: {
  name: "Wylosowałeś", 
  icon_url: message.author.avatarURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": "https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640"
    },
}});
  }
});

client.on('message', message => {
  if (message.content === prefix + 'serverinfo') {
    message.channel.send({embed: {
  color: 3447003,
  description: (`**Nazwa serwera**: ${message.guild.name}\n\n**Wszystkie osoby**: ${message.guild.memberCount}\n\n**Data utworzenia**: ${message.guild.createdAt}\n\n**ID**: ${message.guild.id}\n\n**Role**: ${message.guild.roles.size}\n\n**Właściciel**: ${message.guild.owner}`),
  title: " ",
  author: {
  timestamp: new Date(),
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
    },
  name: message.guild.name, 
  icon_url: message.guild.iconURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": message.guild.iconURL
    },
}});
  }
});

client.on('message', message => {
  if (message.content === prefix + 'info') {
    message.channel.send({embed: {
  color: 10721349,
  description: (`Pełna nazwa ${message.author.username}\nTwoje ID: ${message.author.id}\nKonto stworzone: ${message.author.createdAt}`),
  title: " ",
  author: {
  timestamp: new Date(),
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
    },
  name: message.author.username, 
  icon_url: message.author.avatarURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": message.author.avatarURL
    },
}});
  }
});

client.on('message', message => {
  if (message.content === prefix + 'ping') {
    message.channel.send({embed: {
  color: 101981,
  description: (':ping_pong:  `' + `${Date.now() - message.createdTimestamp}` + ' ms`'),
  title: " ",
  author: {
  name: "Twój ping to", 
  icon_url: message.author.avatarURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": " "
    },
}});
  }
});

client.on('message', message => {
    if (message.content === '$random') {
    	message.channel.sendFile('https://source.unsplash.com/random', 'TwojaStara.png', 'testmessage');
  	}
});

client.on('message', message => {
    if (message.content === '$cat') {
    	message.channel.sendFile('http://thecatapi.com/api/images/get?format=src&type=gif', 'TwojaStara.gif', 'testmessage');
  	}
});

client.on("message", (message) => {
  // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "lenny")) {
    message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
    message.react(":lenny:304276195594207232");
  } else
  if (message.content.startsWith(prefix + "franio")) {
    message.channel.sendFile('https://i.imgur.com/FHxjllM.png', 'TwojaStara.png', 'testmessage');
    message.react("franciszek:383357843799277568")
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.react("oko:325409745278337024");
    message.channel.sendMessage(":mailbox: Sprawdz swoją skrzynke odbiorczą");
    message.author.sendMessage("chuj ci w dupe XD");
  }

});

// Set the bot's "Playing: " status (must be in an event!)
client.on("ready", () => {
    client.user.setGame("Clem jest fajna");
                        
});

// NOTE: CURRENTLY BROKEN IN DISCORD.JS 9 THROUGH 11.1. USE THIS INSTEAD:
client.on("ready", () => {
    client.user.setPresence({game: {name: "Clem jest fajna", type: 0}});
});

// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("dnd");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
