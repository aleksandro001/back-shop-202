import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeTegCreateInput } from './recipe-teg-create.input';
import { RecipeTegUpdateInput } from './recipe-teg-update.input';

@ArgsType()
export class UpsertOneRecipeTegArgs {

    @Field(() => RecipeTegWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTegWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeTegCreateInput, {nullable:false})
    @Type(() => RecipeTegCreateInput)
    create!: RecipeTegCreateInput;

    @Field(() => RecipeTegUpdateInput, {nullable:false})
    @Type(() => RecipeTegUpdateInput)
    update!: RecipeTegUpdateInput;
}
