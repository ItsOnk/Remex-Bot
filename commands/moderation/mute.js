import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Timeout a user")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
    .addIntegerOption(o =>
      o.setName("minutes").setDescription("Time in minutes").setRequired(true)
    ),

  async execute(interaction) {
    const member = await interaction.guild.members.fetch(interaction.options.getUser("user").id);
    const minutes = interaction.options.getInteger("minutes");

    await member.timeout(minutes * 60000);
    await interaction.reply(`🔇 Timeout for ${minutes} minutes.`);
  }
};
