import { Body, Controller, Headers, Post } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  
  constructor(private readonly githubService: GithubService) {}



  @Post()
  webhookHandler(
    @Headers('x-github-event') githubEvent: string,
    @Body() body: any,
  ) {

    console.log({ githubEvent });


    return {  githubEvent }
  }




}
