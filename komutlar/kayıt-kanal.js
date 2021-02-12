const discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Bir kanal belrit!')

db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const embed = new discord.MessageEmbed()
.setTitle(`Kayıt kanalını başarı ile ayarladım!`)
.setDescription(`Kayıt kanal başarı ile <#${kanal.id}> olarak ayarlandı!`)
return message.channel.send(embed)

};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['kayıtkanal']


};
exports.help = {
name : "kayıt-kanal"


}