import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../recipe.enum';
import { RecipeTegModel } from './recipe-teg.model';
import { RecipeStepModel } from './recipe-step.model';
import { RecipeIngredientModel } from './recipe-ingredient.model';
import { NutritionFactModel } from './nutrition-fact.model';

@ObjectType()
export class RecipeModel {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  calories!: number;

  @Field(() => Int, { nullable: false })
  cookingTime!: number;

  @Field(() => Difficulty, { nullable: false })
  difficulty!: `${Difficulty}`;

  @Field(() => NutritionFactModel, { nullable: true })
  nutritionFact?: NutritionFactModel | null;

  @Field(() => [RecipeTegModel], { nullable: true })
  tags?: Array<RecipeTegModel>;

  @Field(() => [RecipeStepModel], { nullable: true })
  recipeSteps?: Array<RecipeStepModel>;

  @Field(() => [RecipeIngredientModel], { nullable: true })
  recipeIngredients?: Array<RecipeIngredientModel>;

  @Field(() => Int, { nullable: true })
  likes?: number;

  // @Field(() => [Comment], {nullable:true})
  // comments?: Array<Comment>;
}
