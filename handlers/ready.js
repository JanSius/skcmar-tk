const {token} = require('../settings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            bot.user.setActivity('Dance!', {type: 'LISTENING'});
            bot.user.setStatus('mobile');
            console.log('Ben Müzik Çalmaya Hazırım!!');
        });
    }
    
};
