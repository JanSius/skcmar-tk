const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵 Müzik başarıyla devam ettirildi`);
    }

    return [message.delete(), utils.timed_msg('⚠ Herhangi birşey çalınmıyor.', 5000)];
    
};

module.exports.help = {
    name: 'devam-et',
    aliases: []
};