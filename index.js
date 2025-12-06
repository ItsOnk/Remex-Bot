import { Client, GatewayIntentBits, Collection, MessageFlags } from "discord.js";
import "dotenv/config";
import { loadCommands } from "./handlers/commandHandler.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

client.commands = new Collection();

client.once("clientReady", async () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  await loadCommands(client);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command)
    return interaction.reply({ content: "❌ Command not found.", ephemeral: true });

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    interaction.reply({ content: "⚠️ Command error.", ephemeral: true });
  }
});

client.login(process.env.TOKEN);
