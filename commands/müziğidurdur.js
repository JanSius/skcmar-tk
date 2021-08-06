const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        return message.channel.send(`🎵 Müzik Başarıyla Durduruldu`);
    }

    return [message.delete(), utils.timed_msg('⚠ Herhangi Bir Müzik Çalınmıyor.', 5000)];
    
};

module.exports.help = {
    name: 'müziğidurdur',
    aliases: []
};

// mert senin amk