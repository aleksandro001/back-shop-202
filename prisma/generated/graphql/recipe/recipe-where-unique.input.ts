import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { IngredientScalarRelationFilter } from '../ingredient/ingredient-scalar-relation-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';
import { RecipeStepListRelationFilter } from '../recipe-step/recipe-step-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';

@InputType()
export class RecipeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    calories?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cookingTime?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    difficulty?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredientId?: StringFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    author?: UserScalarRelationFilter;

    @Field(() => IngredientScalarRelationFilter, {nullable:true})
    ingredient?: IngredientScalarRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    recipeIngredients?: RecipeIngredientListRelationFilter;

    @Field(() => RecipeStepListRelationFilter, {nullable:true})
    recipeSteps?: RecipeStepListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: LikeListRelationFilter;
}
