import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ResetPasswordInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  token!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  newPassword!: string;
}
