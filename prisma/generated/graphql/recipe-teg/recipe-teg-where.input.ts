import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class RecipeTegWhereInput {

    @Field(() => [RecipeTegWhereInput], {nullable:true})
    AND?: Array<RecipeTegWhereInput>;

    @Field(() => [RecipeTegWhereInput], {nullable:true})
    OR?: Array<RecipeTegWhereInput>;

    @Field(() => [RecipeTegWhereInput], {nullable:true})
    NOT?: Array<RecipeTegWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
