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

            this._client.user.setPresence({ status: 'online', activity:
                    { name: c.Status, type: "WATCHING" }}).then(r => {})
        })
        //--------------------------------------------------------//
        this._client.login(c.Token).then(r => {})
    }
}

module.exports = karoClient;