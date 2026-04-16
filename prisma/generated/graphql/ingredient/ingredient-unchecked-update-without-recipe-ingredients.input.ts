import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeUncheckedUpdateManyWithoutIngredientNestedInput } from '../recipe/recipe-unchecked-update-many-without-ingredient-nested.input';

@InputType()
export class IngredientUncheckedUpdateWithoutRecipeIngredientsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Unit, {nullable:true})
    defaultUnit?: `${Unit}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUncheckedUpdateManyWithoutIngredientNestedInput, {nullable:true})
    recipes?: RecipeUncheckedUpdateManyWithoutIngredientNestedInput;
}
