import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUncheckedCreateNestedManyWithoutIngredientInput } from '../recipe/recipe-unchecked-create-nested-many-without-ingredient.input';

@InputType()
export class IngredientUncheckedCreateWithoutRecipeIngredientsInput {

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

    @Field(() => RecipeUncheckedCreateNestedManyWithoutIngredientInput, {nullable:true})
    recipes?: RecipeUncheckedCreateNestedManyWithoutIngredientInput;
}
