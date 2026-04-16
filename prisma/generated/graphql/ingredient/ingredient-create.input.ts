import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeCreateNestedManyWithoutIngredientInput } from '../recipe/recipe-create-nested-many-without-ingredient.input';
import { RecipeIngredientCreateNestedManyWithoutIngredientInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-ingredient.input';

@InputType()
export class IngredientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Unit, {nullable:false})
    defaultUnit!: `${Unit}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedManyWithoutIngredientInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutIngredientInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutIngredientInput, {nullable:true})
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput;
}
