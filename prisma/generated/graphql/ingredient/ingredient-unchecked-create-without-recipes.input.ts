import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-ingredient.input';

@InputType()
export class IngredientUncheckedCreateWithoutRecipesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput;
}
