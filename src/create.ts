import { ENV, KY } from "../deps.ts"
import { GlobalApplicationCommand } from "../@types/index.d.ts"

const BOT_TOKEN = ENV.require("BOT_TOKEN")
const Application_ID = ENV.require("Application_ID")

const url = `https://discord.com/api/v10/applications/${Application_ID}/commands`;

const headers = {
    Authorization: `Bot ${BOT_TOKEN}`
}

const body:GlobalApplicationCommand = {
    name: "test",
    description: "Response pong!",
}

try {
    await KY.post(url, {headers:headers, json: body }).json()
} catch (e) {
    console.log("error");
    console.error(e)
    Deno.exit()
}

console.log("success");