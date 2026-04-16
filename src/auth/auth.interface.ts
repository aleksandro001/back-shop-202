import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from 'prisma/generated/graphql/user/user.model';
import type { User as PrismaUser } from 'prisma/generated/prisma/client';

export type { UserModel };

export type TAuthTokenData = Pick<PrismaUser, 'id' | 'role'>;

export type TCurrentUser = Omit<PrismaUser, 'password'> | null | undefined;

export type TRequestWithUser = {
  user?: TCurrentUser;
};

export type TGqlContextWithUser = {
  req: TRequestWithUser;
};

@ObjectType()
export class AuthResponse {
  @Field(() => UserModel)
  user!: UserModel;

  @Field()
  accessToken!: string;
}
