import { SlashCommandBuilder, PermissionFlagsBits,  MessageFlags } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Delete messages")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption(o =>
      o.setName("amount").setDescription("1–100").setRequired(true)
    ),

  async execute(interaction) {
    const count = interaction.options.getInteger("amount");
    await interaction.channel.bulkDelete(count, true);
    await interaction.reply({ content: `🧹 Deleted ${count} messages.`,flags: MessageFlags.Ephemeral });
  }
};
