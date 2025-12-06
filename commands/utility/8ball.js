import { SlashCommandBuilder } from "discord.js";
export default {
  data: new SlashCommandBuilder()
    .setName("8ball")
   .setDescription("Ask the magic 8-ball a question")

    .addStringOption(opt =>
      opt.setName("question")
         .setDescription("what do you want lol")
         .setRequired(true)
    ),

  async execute(interaction) {
  
    const q = interaction.options.getString("question");
   
    const answers = [
      "yes ig",
      "no",
      "Maybe",
      "Ask again later",
      "Definitely",
      "HELL NO, unjustfied just like that hairline",
      "100%.",
      "Not in a million years.",
      "No you and this guy stinks",
      "Ask when i feel like it"
    ];


        const pick = answers[Math.floor(Math.random() * answers.length)];

   
    await interaction.reply(`🎱 **Question:** ${q}\n**Answer:** ${pick}`);
  }
};



