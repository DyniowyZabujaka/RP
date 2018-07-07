const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith('*szuka ')) {
    const coin = ['Znalazłeś','Nie znalazłeś'];
    const random = Math.floor(Math.random()*2);
    message.channel.send(" | " +message.author +coin[random]);
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
    client.user.setGame("Życie", "https://www.twitch.tv/vami12");
                        
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
