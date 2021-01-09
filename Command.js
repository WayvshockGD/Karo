const Discord = require('discord.js')
const fs = require('fs')
const _Client_ = require('./src/KaroClient');
const Config = require('./src/Config');
const c = new Config()

class Command extends _Client_ {
    aliases;

    constructor() {
        super();

        const bot = this._client;
        const prefix = c.Prefix;

        bot.commands = new Discord.Collection();

        const folders = fs.readdirSync(c.commandDirectory);

        for (const category of folders) {
            const folder = fs.readdirSync(`./commands/${category}/`).filter(file => file.endsWith(".js"));
            for(const cmdFile of folder) {
                const command = require(`./commands/${category}/${cmdFile}`)
                bot.commands.set(command.name, command);
            }
        }

        bot.on('message', m => {
            //--------------------------------------------------------//
            if (m.content.includes("<@!" + c.ClientID + ">")
                || m.content.includes("<@" + c.ClientID + ">")) {
                return m.reply(`My prefix is \`${c.Prefix}\`.`)}
            //--------------------------------------------------------//

            if (!m.content.startsWith(prefix)) return;

            const args = m.content.slice(prefix.length).trim().split(/ +/);
            const cmd = args.shift().toLowerCase();
            const message = m;

            const command = bot.commands.get(cmd)
                || bot.commands.find(c => c.aliases && c.aliases.includes(cmd));

            if (!command) return;

            try {
                command.run(message, args, bot)
            } catch (error) {
                console.error(error)
                m.channel.send(`There was an error executing \`${command.name}\`.`).then(r => {})

                this.message = m;
            }
        })
    }
}

module.exports = Command;