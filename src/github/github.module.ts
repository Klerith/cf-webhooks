import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { DiscordService } from 'src/services/discord.service';

@Module({
  controllers: [GithubController],
  providers: [GithubService, DiscordService],
})
export class GithubModule {}
