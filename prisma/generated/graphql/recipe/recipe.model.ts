import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { NutritionFact } from '../nutrition-fact/nutrition-fact.model';
import { RecipeTeg } from '../recipe-teg/recipe-teg.model';
import { RecipeStep } from '../recipe-step/recipe-step.model';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';
import { Ingredient } from '../ingredient/ingredient.model';

@ObjectType()
export class Recipe {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:false})
    cookingTime!: number;

    @Field(() => String, {nullable:false})
    difficulty!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    ingredientId!: string | null;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => NutritionFact, {nullable:true})
    nutritionFact?: NutritionFact | null;

    @Field(() => [RecipeTeg], {nullable:true})
    tags?: Array<RecipeTeg>;

    @Field(() => [RecipeStep], {nullable:true})
    recipeSteps?: Array<RecipeStep>;

    @Field(() => [RecipeIngredient], {nullable:true})
    recipeIngredients?: Array<RecipeIngredient>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => Ingredient, {nullable:true})
    ingredient?: Ingredient | null;
}
