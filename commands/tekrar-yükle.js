const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {

    if (message.author.id !== "523792502986113044" && message.author.id !== '594524888686133248') return utils.timed_msg(utils.no_perm(`${message.author}, Komutu Tekrar Yüklemek İçin Yeterli Yetkin Bulunmuyor!`), 5000)

    let command = args[0];
    if (!command) return utils.timed_msg(utils.cmd_fail('Lütfen Yüklemek İçin Bir Komut Girin!', `${config.prefix}tekrar-yükle <komut>`), 5000)

    let response = await bot.unloadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    response = bot.loadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    return [message.delete(), utils.timed_msg(`Komut : ${command} Başarıyla Tekrar Yüklendi :ok_hand: !`, 5000)];
};

module.exports.help = {
    name: 'reload',
    aliases: []
};