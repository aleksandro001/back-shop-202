import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutIngredientInput } from './recipe-update-without-ingredient.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutIngredientInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeUpdateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutIngredientInput)
    data!: RecipeUpdateWithoutIngredientInput;
}
