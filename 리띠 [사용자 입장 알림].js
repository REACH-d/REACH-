const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ3OTcxNjc2NDc3NzE4NTQ5.X0Wo6A.V1Njo0ITzwfMlLkjQxOkqD4mfh4';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "안녕! 세계 최강 기요미 리띠샵에 온 것을 환영해!";
const byeChannelComment = "흐잉..T.T 다시 오실거죠..@_@?";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === '^^리띠') {
    message.reply('안녕! 나는 세계 최강 기요미 리띠!');
  }
});

client.login(token);