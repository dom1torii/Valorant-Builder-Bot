const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('skin')
	    .setDescription('Responds with a list of skins for chosen weapon')
	    .addStringOption(option =>
		    option.setName('skin')
			    .setDescription('Weapon name')),
    async execute(interaction) {
            const skin = interaction.options.getString("skin")

            var embedSkins = []
            let response = ""
            const buttons = new ActionRowBuilder()
            await fetch('https://valorant-api.com/v1/weapons', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(data => data.json())
            .then(data => {
                for (i=0; i<data["data"].length; i++) {
                    for (j=0; j<data["data"][i]["skins"].length; j++) {
                        if (data["data"][i]["skins"][j]["displayName"].toLowerCase() === skin.toLowerCase()) {
                            if (data["data"][i]["skins"][j]["chromas"].length === 1) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 1)")
                                ]

                            }
                            if (data["data"][i]["skins"][j]["chromas"].length === 2) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(skin + " (variant 1)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 2)")
                                ]
                            }
                            if (data["data"][i]["skins"][j]["chromas"].length === 3) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 1)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 2)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][2]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 3)")
                                ]
                            }
                            if (data["data"][i]["skins"][j]["chromas"].length === 4) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 1)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 2)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][2]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 3)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][3]["fullRender"])
                                        .setTitle(data["data"][i]["skins"][j]["displayName"] + " (variant 4)")
                                ]

                            }
                        }
                    }
                }
            }

            )
            if (embedSkins.length>0) {
                await interaction.reply({embeds: embedSkins})
            }




    }
}
