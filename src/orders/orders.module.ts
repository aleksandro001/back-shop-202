import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';

@Module({
  imports: [PrismaModule],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
