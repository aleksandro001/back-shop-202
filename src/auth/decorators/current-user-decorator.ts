import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type {
  TGqlContextWithUser,
  TCurrentUser,
  TRequestWithUser,
  UserModel,
} from '../auth.interface';



type CurrentUserKey = keyof UserModel;

export const CurrentUser = createParamDecorator<CurrentUserKey | undefined>(
  (data, ctx: ExecutionContext) => {
    let user: TCurrentUser = null;

    if (ctx.getType() === 'http') {
      user = ctx.switchToHttp().getRequest<TRequestWithUser>().user;
    } else {
      const context = GqlExecutionContext.create(ctx);
      user = context.getContext<TGqlContextWithUser>().req.user;
    }

    if (!user) return null;

    return data ? user[data] : user;
  },
);
