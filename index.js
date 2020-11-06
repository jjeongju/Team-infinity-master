const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require('./Config.json');

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ti') {
    msg.channel.send('팀 인피니티');
  }
});

client.login(token);
