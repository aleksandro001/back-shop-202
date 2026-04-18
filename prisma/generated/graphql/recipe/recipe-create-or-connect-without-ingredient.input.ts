import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutIngredientInput } from './recipe-create-without-ingredient.input';

@InputType()
export class RecipeCreateOrConnectWithoutIngredientInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeCreateWithoutIngredientInput)
    create!: RecipeCreateWithoutIngredientInput;
}
