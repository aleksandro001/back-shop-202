import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-recipe-nested.input';
import { CommentUncheckedUpdateManyWithoutRecipeNestedInput } from '../comment/comment-unchecked-update-many-without-recipe-nested.input';
import { LikeUncheckedUpdateManyWithoutRecipeNestedInput } from '../like/like-unchecked-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUncheckedUpdateWithoutRecipeStepsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    cookingTime?: number;

    @Field(() => String, {nullable:true})
    difficulty?: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    ingredientId?: string;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutRecipeNestedInput;
}
