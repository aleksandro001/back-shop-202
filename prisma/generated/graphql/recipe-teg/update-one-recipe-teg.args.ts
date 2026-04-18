import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegUpdateInput } from './recipe-teg-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';

@ArgsType()
export class UpdateOneRecipeTegArgs {

    @Field(() => RecipeTegUpdateInput, {nullable:false})
    @Type(() => RecipeTegUpdateInput)
    data!: RecipeTegUpdateInput;

    @Field(() => RecipeTegWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTegWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>;
}
