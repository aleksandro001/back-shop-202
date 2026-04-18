import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTegWhereInput } from './recipe-teg-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class RecipeTegWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [RecipeTegWhereInput], {nullable:true})
    AND?: Array<RecipeTegWhereInput>;

    @Field(() => [RecipeTegWhereInput], {nullable:true})
    OR?: Array<RecipeTegWhereInput>;

    @Field(() => [RecipeTegWhereInput], {nullable:true})
    NOT?: Array<RecipeTegWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
