import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeTegUpdateWithoutRecipesInput } from './recipe-teg-update-without-recipes.input';

@InputType()
export class RecipeTegUpdateWithWhereUniqueWithoutRecipesInput {

    @Field(() => RecipeTegWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTegWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeTegUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeTegUpdateWithoutRecipesInput)
    data!: RecipeTegUpdateWithoutRecipesInput;
}
