const discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
    let enginar = message.member
let guild = message.guild
let kontrol1 = db.fetch(`kayıtkanal_${message.guild.id}`)
if(!kontrol1) return message.channel.send('Lütfen ilk önce kayıt kanalını ayarla!')
let kontrol2 = db.fetch(`kayıtlog_${message.guild.id}`)
if(!kontrol2) return message.channel.send('Lütfen kayıt log kanalını ayarla!')
let kontrol3 = db.fetch(`kayıtrol_${message.guild.id}`)
if(!kontrol3) return message.channel.send('Lütfen kayıt rolünü ayarla!')


let isim = args[0];
let bsnick = args[1];
if (!isim) return message.channel.send(`Lütfen ismini gir!`)
if (!bsnick) return message.channel.send(`Lütfen Brawl Stars gir! \n Not: Eğer geçersiz isim girerseniz yetkililer tarafından ceza alırsını!`)

const embed2 = new discord.MessageEmbed()
.setTitle(`Bir kullanıcı başarı ile kayıt oldu!`)
.setDescription(`<@${message.author.id}> adlı kullanıcıya başarı ile kayıt oldu!`)
.setColor('RANDOM')
message.guild.channels.cache.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(embed2);

/////
const embed = new discord.MessageEmbed()
.setTitle(`${guild.name} adlı sunucuda başarı ile kayıt oldun!`)
.setColor('RANDOM')
enginar.send(embed)

setTimeout(function(){enginar.roles.add(db.fetch(`kayıtrol_${message.guild.id}`))},500)
enginar.setNickname(`${isim} × ${bsnick}`)
return message.channel.send('Başarı ile kayıt oldun!')






};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "kayıt",
    description: "dil",
    usage: "dil"
  };