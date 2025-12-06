import fs from "fs";
import path from "path";
import { REST, Routes } from "discord.js";
import "dotenv/config";

export async function loadCommands(client) {
  const commands = [];
  const commandsPath = path.join(process.cwd(), "commands");

  for (const folder of fs.readdirSync(commandsPath)) {
    const folderPath = path.join(commandsPath, folder);
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"));

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const command = (await import(filePath)).default;

      client.commands.set(command.data.name, command);
      commands.push(command.data.toJSON());

      console.log(`✅ Loaded ${command.data.name}`);
    }
  }

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  await rest.put(
    Routes.applicationCommands(client.user.id),
    { body: commands }
  );

  console.log("✅ Slash commands registered");
}
