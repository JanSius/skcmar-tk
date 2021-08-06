const discord = require('discord.js');
const {prefix} = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`-=- Yardım -=- <>: , []: İsteğe Bağlı`)
        .addField(`${prefix}oynat <müzik/url>`, 'İstediğiniz şarkıyı çalabilirsiniz!')
        .addField(`${prefix}arama-yap <müzik>`, 'Top10 İçin Youtube Araması Yaparsınız')
        .addField(`${prefix}atla`, 'Müziği Atlarsınız (Müziği Atlamak İçin 3 oy gerekldir)')
        .addField(`${prefix}ses [ses-seviyesi]`, 'Çalınan Şarkının ses Seviyesini **1** ile **100** arasında değişirsiniz')
        .addField(`${prefix}müziğidurdur`, 'Bir Daha Oynatmak Üzere Müziği Durdurursunuz')
        .addField(`${prefix}devam-et`,'Müziği-Durdur Komutuyla durdurduğnuz müzikten devam edersiniz')
        .addField(`${prefix}durdur`, 'Bir Daha Kaldığı Yerden Devam Etmemek Üzere Müziği Kapatır ve Odadan Çıkar')
        .addField(`${prefix}tekrar-yükle <komut>`, 'Komutu Yeniden Yüklemeye Yarar');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'yardım',
    aliases: []
};