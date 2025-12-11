
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GIST_TOKEN });

export default async function updateGist(client) {
  
  console.log("Running updateGist...");

  
  
    const data = {
        status: "online",
        ping: client.ws.ping,
        uptime: Math.floor(client.uptime / 1000) + "s",
        guilds: client.guilds.cache.size,
        version: "v1.0.0"
    };

    await octokit.gists.update({
        gist_id: process.env.GIST_ID,
        files: {
            "botstatus.json": {
                content: JSON.stringify(data, null, 2)
            }
        }
    });

    console.log("Updated Gist!");
}
