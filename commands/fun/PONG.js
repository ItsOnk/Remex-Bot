import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check bot status"),

  async execute(interaction) {
    await interaction.reply("🏓 Renex Bot is alive.");
  }
};
