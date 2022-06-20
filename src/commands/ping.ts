import { ApplicationCommandInteraction, MessageComponentInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function ping(interaction:any):InteractionResponse {
  // コマンドの情報を取得
  //const data = interaction.data
  // コマンドの送信者の情報を取得
  //const member = interaction.member

  // レスポンス本体
  const res: InteractionResponse = {
      // Type 4 reponds with the below message retaining the user's
      // input at the top.
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `pong!\n${JSON.stringify(interaction)}`,
      }
    }
  return res;
}