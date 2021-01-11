const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    description: "help command",
    aliases: ["commands"],
    usage: '',
    async run(message, args, bot) {

            const help = new MessageEmbed()

                .setTitle(bot.user.username + " command list")
                .setDescription('Economic \n[`start`, `balance`]\n\n' +
                    'core\n[`help`, `ping`]\n\n')
                .setTimestamp()
                .setColor('GREEN')
                .setAuthor(bot.user.username, bot.user.avatarURL() )
                .setTimestamp()

            await message.channel.send(help)
    }
}