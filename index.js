
const discord = require('discord.js');
const ytdl = require('ytdl-core');
const express = require('express');
const YouTube = require('simple-youtube-api');
const http = require("http");
const app = express();
const ready = require('./handlers/ready.js');
const message = require('./handlers/message.js');
const config = require('./settings/config.json');
const {YouTubeAPIKey} = require('./settings/credentials.json');
const utils = require('./global/utils');
const bot = new discord.Client();

app.listen(process.env.PORT);
app.get("/", (request, response) => {
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 5000);


require('./global/functions')(bot, utils, ytdl, config);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.youtube = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue = new Map() // Music Queue
bot.votes = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord);