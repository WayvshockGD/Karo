const Discord = require('discord.js');
const Config = require('./Config');
const c = new Config();

class karoClient {

    constructor() {

        this._client = new Discord.Client({
            ws: { properties: { $browser: "Discord iOS" }},
            fetchAllMembers: false,
            disableMentions: "everyone",
            partials: ["REACTION", "MESSAGE", "GUILD_MEMBER"]
        })


        //--------------------------------------------------------//
        this._client.on('ready', () => {

            let Status = [
                `${this._client.users.cache.size} users`,
                "Servers",
                "for " + c.Prefix + "help"
            ]

            setInterval(() => {
                this._client.user.setPresence({ status: 'online', activity:
                    { name: Status[Math.floor(Math.random() * Status.length)],
                        type: "WATCHING" }}).then(r => {})

            }, 15000);
        })
        //--------------------------------------------------------//
        this._client.login(c.Token).then(r => {})
    }
}

module.exports = karoClient;