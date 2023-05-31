const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('skin')
	    .setDescription('Responds with a list of skins for chosen weapon')
	    .addStringOption(option =>
		    option.setName('skin')
			    .setDescription('Weapon name')),
    async execute(interaction) {
        if (interaction.member.roles.cache.has('1113017259875651594')) {
            const skin = interaction.options.getString("skin")

            var embedSkins = []

            // const skinEmbed = new EmbedBuilder()
            //     .setColor(0x0)
            //     .setTitle(skin)
            //     .setImage('https://i.imgur.com/AfFp7pu.png')



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
                        if (data["data"][i]["skins"][j]["displayName"] === skin) {
                            if (data["data"][i]["skins"][j]["chromas"].length === 1) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(skin + "(variant 1)")
                                ]

                            }
                            if (data["data"][i]["skins"][j]["chromas"].length === 2) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(skin + "(variant 1)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                                        .setTitle(skin + "(variant 2)")
                                ]
                            }
                            if (data["data"][i]["skins"][j]["chromas"].length === 3) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(skin + "(variant 1)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                                        .setTitle(skin + "(variant 2)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][2]["fullRender"])
                                        .setTitle(skin + "(variant 3)")
                                ]
                            }
                            if (data["data"][i]["skins"][j]["chromas"].length === 4) {
                                embedSkins = [
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                                        .setTitle(skin + "(variant 1)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                                        .setTitle(skin + "(variant 2)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][2]["fullRender"])
                                        .setTitle(skin + "(variant 3)"),
                                    new EmbedBuilder()
                                        .setColor(0x0)
                                        .setImage(data["data"][i]["skins"][j]["chromas"][3]["fullRender"])
                                        .setTitle(skin + "(variant 4)")
                                ]

                            }
                        }
                    }
                }















                // for(i=0; i<data["data"].length; i++) {
                //     for (j=0; j<data["data"][i]["skins"].length; j++) {
                //         if (data["data"][i]["skins"][j]["displayName"] === skin) {
                //             response = JSON.stringify(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                //             if (chroma = 1) {
                //                 response = JSON.stringify(data["data"][i]["skins"][j]["chromas"][0]["fullRender"])
                //             }
                //             if (chroma = 1) {
                //                 response = JSON.stringify(data["data"][i]["skins"][j]["chromas"][1]["fullRender"])
                //             }
                //             if (chroma = 2) {
                //                 response = JSON.stringify(data["data"][i]["skins"][j]["chromas"][2]["fullRender"])
                //             }
                //             if (chroma = 3) {
                //                 response = JSON.stringify(data["data"][i]["skins"][j]["chromas"][3]["fullRender"])
                //             }
                //             response = response.replace(/"/g, '')
                //             for (k=0; k<data["data"][i]["skins"][j]["chromas"].length; k++) {
                //                 variant = new ButtonBuilder()
                //                     .setCustomId('variant'+(k+1))
                //                     .setLabel('Variant'+" " + (k+1))
                //                     .setStyle(ButtonStyle.Secondary)
                //                 buttons.addComponents(variant)
                //             }
                //         }
                //     }
                // }
            }

            )
            console.log(embedSkins)

            interaction.reply({embeds: embedSkins})

            // interaction.reply({files: [{attachment: response, name: "skin.png"}], components:[buttons]})
        }

    }
}
