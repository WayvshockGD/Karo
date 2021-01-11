const Data = require('../../models/UserData');
const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: "balance",
    description: "Shows the balance of the person",
    aliases: ["bal"],
    usage: 'balance',
    async run(message, args, bot) {
        let user = message.mentions.members.first() || message.member;

        const data = await Data.findOne({
            ID: user.id,
        });

        if (data) {
            const canvas = Canvas.createCanvas(700, 250);

            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage('./assets/images/CARD_BACKGROUND.jpg');
            const transparent = await Canvas.loadImage('./assets/images/half_transparent.jpg');

            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(transparent, 0, 0, 700, 250)

            ctx.strokeStyle = '#ffffff';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            ctx.font = '35px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Balance: | Bank:\n$${data.Amount}  |  0`, canvas.width / 2.9, canvas.height / 2.2);

            ctx.font = '20px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(user.displayName, 90, 50)

            const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg' }));
            ctx.drawImage(avatar, 100, 80, 100, 100);
            ctx.strokeStyle = '#ffffff';
            ctx.strokeRect(100, 80, 100, 100);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'card.png');

            await message.channel.send(attachment)
        } else if (!data) {
            message.channel.send(user.user.username + " didn't start earning anything yet." );
        }
    }
}