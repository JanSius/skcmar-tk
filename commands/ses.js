const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Herhangi Bir Şarkı Çalınmıyor.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`🎵 Şuanki Ses: **${queue.volume}/100w**`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, 0 ve 100 arasında bir sayı girmek zorundasın!`, `${config.prefix}volume <volume>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, 0 ve 100 arasında bir sayı girmek zorundasın!`, `${config.prefix}Ses <ses>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 Şuanki Ses Seviyesi**${queue.volume}/100**`);
};

module.exports.help = {
    name: 'ses-ayarla',
    aliases: ['ses']
};