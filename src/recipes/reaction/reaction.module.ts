import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReactionService } from './reaction.service';
import { ReactionResolver } from './reaction.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ReactionResolver, ReactionService],
})
export class ReactionModule {}
