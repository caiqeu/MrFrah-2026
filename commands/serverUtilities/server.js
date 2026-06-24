const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const app = require('express')()
const{Timers} = require('../variable')

module.exports = async (bot) => {
    app.get("/api/timers"), async(req,res) => {
        let Arr = []
        Timers.forEach(timer => {
            Arr.push()
        })
        res.send("Hi")
    }
    app.listen(8080)
}