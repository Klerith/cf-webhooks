import { Injectable } from '@nestjs/common';
import { GitHubEvent, GitHubIssue, GitHubPayload, GitHubStar } from 'src/interfaces/github.interface';
import { DiscordService } from 'src/services/discord.service';

@Injectable()
export class GithubService {

  constructor(
    private readonly discordService: DiscordService,
  ) {}


  public async handlePayload( event: GitHubEvent, payload: GitHubPayload ) {

    let message = '';

    switch( event )  {

      case 'star':
        message = this.handleStar( payload as GitHubStar )
      break;


      case 'issues':
        message = this.handleIssue( payload as GitHubIssue );

      break;



      default:
        message = `unknown event ${ event }`;

    }


    // console.log({message});
    await this.discordService.notify( message );

  }



  private handleStar( payload: GitHubPayload ) {

    const { action, sender, repository } = payload;
    return `User ${ sender.login } ${ action } star on ${ repository.full_name }`;

  }



  private handleIssue( payload: GitHubIssue ): string {

    const { action, issue, sender } = payload;

    if ( action === 'opened' ) {
      return `An issue was opened with this title ${ issue.title } by ${ sender.login }`;
    }

    if ( action === 'closed' ) {
      return `An issue was closed by ${ issue.user.login }`;
    }

    if ( action === 'reopened' ) {
      return `An issue was reopened by ${ issue.user.login }`;
    }


    return `Unhandled action for the issue event ${ action }`;


  }



}
