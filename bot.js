  
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

const {
  tokens,
  voice_channel,
  text_channel,
  your_server
} = require("./config.js");
const time = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const Discord = require("discord.js");
tokens.forEach(token => {
  const client = new Discord.Client();
  client.login(token);

  client.on("message", async message => {
    if (message.guild.id != your_server) return;
    if (
      message.author.id == "335645388323160064" && // تعديل مهم ايدي بوت الترحيب
      message.content.includes("-") ///  تعديل مهم رسالة الترحيب
    ) {
      setTimeout(() => {
        message.channel.send("**𝐖𝐄𝐋𝐂𝐎𝐌𝐄**"); /// تعديل مهم رسالة الترحيب
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " is ready!");
    client.guilds
      .get(your_server)
      .channels.get(voice_channel)
      .join();
  });

});
