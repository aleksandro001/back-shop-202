import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionFactUpdateOneWithoutRecipeNestedInput } from '../nutrition-fact/nutrition-fact-update-one-without-recipe-nested.input';
import { RecipeTegUpdateManyWithoutRecipesNestedInput } from '../recipe-teg/recipe-teg-update-many-without-recipes-nested.input';
import { RecipeStepUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-update-many-without-recipe-nested.input';
import { RecipeIngredientUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-recipe-nested.input';
import { LikeUpdateManyWithoutRecipeNestedInput } from '../like/like-update-many-without-recipe-nested.input';
import { CommentUpdateManyWithoutRecipeNestedInput } from '../comment/comment-update-many-without-recipe-nested.input';
import { IngredientUpdateOneWithoutRecipesNestedInput } from '../ingredient/ingredient-update-one-without-recipes-nested.input';

@InputType()
export class RecipeUpdateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionFactUpdateOneWithoutRecipeNestedInput, {nullable:true})
    nutritionFact?: NutritionFactUpdateOneWithoutRecipeNestedInput;

    @Field(() => RecipeTegUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: RecipeTegUpdateManyWithoutRecipesNestedInput;

    @Field(() => RecipeStepUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeIngredientUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutRecipeNestedInput;

    @Field(() => IngredientUpdateOneWithoutRecipesNestedInput, {nullable:true})
    ingredient?: IngredientUpdateOneWithoutRecipesNestedInput;
}
