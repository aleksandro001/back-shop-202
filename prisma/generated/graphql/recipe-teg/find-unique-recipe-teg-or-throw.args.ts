import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeTegOrThrowArgs {

    @Field(() => RecipeTegWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTegWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>;
}
