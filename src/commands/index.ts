import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"
import { ping } from "./ping.ts"

export function onApplicationCommand(interaction:ApplicationCommandInteraction):InteractionResponse {
  const data = interaction.data
  // 実行されたコマンド名
  // コマンドが増えた場合はこれで分岐すれば良い
  const commandName = data.name;

  const res = {ping}

  const command = res[commandName] || function(){
    return {
      type:InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content:"This command is unimplemented"
      }
    }
  }
  
  return command(interaction);
}