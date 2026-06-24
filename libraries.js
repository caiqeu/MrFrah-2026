const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./json/config.json')
const mongoose = require('mongoose')
const { mongoPath } = require('./json/config.json')

module.exports = async() => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}

const token = '';
const config = require('./json/config.json');
const botage = require('./json/config.json')
const WOKcommands = require('wokcommands');
require('dotenv').config();
const { prefix } = require('./json/config.json')
const ytdl = require('ytdl-core')
