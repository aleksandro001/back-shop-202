import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Role } from "prisma/generated/prisma/enums";

export interface IAuthTokenData {
  id: string;
  role: Role;
}

export type TCurrentUser = Omit<UserModel, 'password'> | null | undefined;

export type TRequestWithUser = {
  user?: TCurrentUser;
};

export type TGqlContextWithUser = {
  req: TRequestWithUser;
};

registerEnumType(Role, { name: 'Role' });
@ObjectType()
export class UserModel {
  @Field()
  id: string;
  @Field()
  email: string;
  @Field(() => Role)
  role: Role;
}

@ObjectType()
export class AuthResponse {
  @Field(() => UserModel)
  user: UserModel
  @Field()
  accessToken: string
}
