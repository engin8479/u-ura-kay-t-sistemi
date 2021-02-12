const discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Bir rol belirt!')

db.set(`kayıtrol_${message.guild.id}`, rol.id)
const embed = new discord.MessageEmbed()
.setTitle(`Kayıt rolü başarı ile ayarladım!`)
.setDescription(`Kayıt rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
return message.channel.send(embed)

};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['kayıtrol']


};
exports.help = {
name : "kayıt-rol"


}