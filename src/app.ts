//Due to Hormony error run with --no-check flag
// deno run --no-check --allow-net index.ts
// Add to server using https://discord.com/oauth2/authorize?client_id=800345465828409365&scope=bot
// Glitch deno dir: /app/.deno/bin/deno
// Glitch denon dir: /app/.deno/bin/denon

import { Client, Intents, Message } from "https://deno.land/x/harmony/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = new Client();
client.connect(Deno.env.get("BOTTOKEN"), Intents.None);

client.on("ready", () => {
  console.log("ready");
});

client.on("messageCreate", (msg: Message) => {
  if (msg.content == "hi") {
    msg.channel.send("👺⚔🌟");
  }
});
