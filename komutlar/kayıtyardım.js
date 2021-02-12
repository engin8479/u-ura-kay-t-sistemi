const Discord = require('discord.js');
const db = require('narcos-db')
exports.run = async (client, message, args) => {

  let engin = ("-")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("https://media1.tenor.com/images/998ca50ad73ed24e0200d9507cdb32e6/tenor.gif?itemid=17889959")
.setColor("RANDOM")
.setDescription(`Komutlarım;
\`${engin}\`**kayıt-log**: Kayıt log kanalı ayarlarsınız.
\`${engin}\`**kayıt-kanal**: Kayıt kanal ayarlarsınız.
\`${engin}\`**kayıt-rol**: Kullanıcı kayıt olunca verilecek rol ayarlarsınız.
\`${engin}\`**kayıt**: Kayıt olursunuz.`)
message.channel.send(yardım)



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'la yardım komutu nolabilir başka',
  usage: '!yardım işte '
};