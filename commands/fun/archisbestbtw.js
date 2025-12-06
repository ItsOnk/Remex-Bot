import { SlashCommandBuilder } from "discord.js";

const quotes = [
  "I use Arch btw.",
  "Pacman never forgets.",
  "If it boots, don’t touch it.",
  "You broke it, didn’t you?",
];

export default {
  data: new SlashCommandBuilder()
    .setName("arch")
    .setDescription("Receive sacred Arch wisdom"),

  async execute(interaction) {
    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    await interaction.reply(pick);
  }
};
