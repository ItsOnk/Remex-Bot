import { SlashCommandBuilder } from "discord.js";
import fs from "fs";

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Show all commands"),

  async execute(interaction) {
    const folders = fs.readdirSync("./commands");
    let text = "📖 **Renex Bot Commands**\n\n";

    for (const folder of folders) {
      const files = fs.readdirSync(`./commands/${folder}`);
      text += `**${folder.toUpperCase()}**\n`;
      for (const file of files) {
        const name = file.replace(".js", "");
        text += `• \`/${name}\`\n`;
      }
      text += "\n";
    }

    await interaction.reply(text);
  }
};
