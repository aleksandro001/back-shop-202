import { Field, ObjectType } from '@nestjs/graphql';
import type { User as PrismaUser } from 'prisma/generated/prisma/client';
import { UserProfileModel } from 'src/users/models/user-profile.model';

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
  @Field(() => UserProfileModel)
  user!: UserProfileModel;

  @Field()
  accessToken!: string;
}
