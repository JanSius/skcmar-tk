const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, lütfen önce bir sesli kanala giriş yapın!`, `${config.prefix}durdur`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Herhangi Bir Müzik Çalınmıyor.', 5000)];

    queue.musics = [];
    message.member.voiceChannel.leave()

};

module.exports.help = {
    name: 'durdur',
    aliases: ['leave']
};