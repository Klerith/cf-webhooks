import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordService {

  private readonly discordWebhookUrl = 'https://discord.com/api/webhooks/1179929234802737212/CmJWX9buK6JMcun1_oDZQtfVcm95lHIqAp1LltrJPQlSOt-eO_4EhbYl7yPx8Xw-yLTP';


  async notify( message: string ) {

    const body = {
      content: message,
    }


    const resp = await fetch( this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( body ),
    } );

    if ( !resp.ok ) {
      console.log( 'Error sending message to discord' );
      return false;
    }

    return true;


  }


}
