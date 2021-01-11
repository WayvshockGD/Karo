const Data = require('../../models/UserData');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "start",
    description: "Shows the balance of the person",
    aliases: ["start"],
    usage: 'start',
    async run(message, args, bot) {

        const data = await Data.findOne({
            ID: message.author.id
        });

        if (data) {
            await message.reply('You already started!');
        } else if (!data) {
            const earned = new MessageEmbed()
                .setDescription(message.author.username + " You have started with :moneybag:`500`:moneybag:")
                .setTimestamp()
                .setColor('GREEN')
            message.reply(earned)

            let newData = new Data({
                ID: message.author.id,
                Amount: "500",
                Bank: "0"
            })
            await newData.save()
        }
    }
}