const { Events } = require('discord.js');

var chroma

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		} else if (interaction.isButton()) {

		} else if (interaction.isStringSelectMenu()) {
			// respond to the select menu
		}


        // const collector = interaction.channel.createMessageComponentCollector({ time: 3500 });
        // collector.on('collect', async i => {
        //     if(i.member.id != interaction.user.id) {
		// 		return i.reply({ content: `This interaction is not for you`, ephemeral: true})
        //     }
        //     if(i.customId == 'variant1') {
		// 		await i.deferUpdate();
		// 		skinVar = 1
        //     }

        //   });
	},
};

