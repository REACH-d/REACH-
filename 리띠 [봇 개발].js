const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ3OTcxNjc2NDc3NzE4NTQ5.X0Wo6A.V1Njo0ITzwfMlLkjQxOkqD4mfh4';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '^^리띠') {
    message.reply('안녕! 나는 세계 최강 기요미 리띠!');
  }
});

client.login(token);