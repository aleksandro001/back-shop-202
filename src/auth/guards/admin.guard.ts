import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ForbiddenError } from '@nestjs/apollo';
import { Role } from 'prisma/generated/prisma/client';
import { TGqlContextWithUser } from '../auth.interface';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext<TGqlContextWithUser>().req.user;

    if (user?.role !== Role.ADMIN) {
      throw new ForbiddenError(
        'You do not have permission to access this resource',
      );
    }

    return true;
  }
}
