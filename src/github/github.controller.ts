import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { GithubService } from './github.service';
import { GitHubEvent, GitHubPayload } from 'src/interfaces/github.interface';
import { GithubGuard } from 'src/guards/github.guard';

@Controller('github')
export class GithubController {
  
  constructor(private readonly githubService: GithubService) {}



  @Post()
  @UseGuards( GithubGuard )
  webhookHandler(
    @Headers('x-github-event') githubEvent: GitHubEvent,
    @Headers('X-Hub-Signature-256') signature: string,
    @Body() body: GitHubPayload,
  ) {

    console.log({ signature  });


    // console.log({ githubEvent });
    this.githubService.handlePayload( githubEvent, body );


    return {  githubEvent }
  }




}
