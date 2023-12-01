import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { DiscordService } from './services/discord.service';


@Module({

  imports: [GithubModule],

  providers: [DiscordService]
})
export class AppModule {}
