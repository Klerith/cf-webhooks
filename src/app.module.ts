import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';


@Module({

  imports: [GithubModule]
})
export class AppModule {}
