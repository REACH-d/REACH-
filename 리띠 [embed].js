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

  member.addRole(guild.roles.find(role => role.name == "[USER]"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '^^리띠') {
    return message.reply('안녕! 나는 세계 최강 기요미 리띠!');
  }

  if(message.content == '^^embed') {
    let img = 'https://discordapp.com/channels/@me/748359778283159692/748743375921872937';
    let embed = new Discord.RichEmbed()
      .setTitle('𝑹𝑬𝑨𝑪𝑯')
      .setURL('https://discord.gg/vQBqvNp')
      .setAuthor('𝑹𝑬𝑨𝑪𝑯', img, 'https://discord.gg/vQBqvNp')
      .setThumbnail(img)
      .addBlankField()
      .addField('𝑹𝑬𝑨𝑪𝑯 Distribution Server', 'Welcome to 𝑹𝑬𝑨𝑪𝑯 Distributor Server!')
      .addField('Server Guides', '1. Our server is always honest.\n2. Our server is always kind.\n3. Our server has never had a problem.\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('𝑹𝑬𝑨𝑪𝑯', img)

    message.channel.send(embed)
  } else if(message.content == '^^embed2') {
    let helpImg = 'https://discordapp.com/channels/@me/748359778283159692/748743375921872937';
    let commandList = [
      {name: '^^embed', desc: '𝑹𝑬𝑨𝑪𝑯shop 홍보 embed'},
      {name: '^^embed2', desc: '리띠BOT 도움말'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('𝑹𝑬𝑨𝑪𝑯shop', helpImg)
      .setColor('#ff0000')
      .setFooter(`! 리띠BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('^^전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('^^전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);