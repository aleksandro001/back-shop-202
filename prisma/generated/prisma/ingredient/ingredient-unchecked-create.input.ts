import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeUncheckedCreateNestedManyWithoutIngredientInput } from '../recipe/recipe-unchecked-create-nested-many-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-ingredient.input';

@InputType()
export class IngredientUncheckedCreateInput {

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

    @Field(() => RecipeUncheckedCreateNestedManyWithoutIngredientInput, {nullable:true})
    @Type(() => RecipeUncheckedCreateNestedManyWithoutIngredientInput)
    recipes?: RecipeUncheckedCreateNestedManyWithoutIngredientInput;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput)
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput;
}
