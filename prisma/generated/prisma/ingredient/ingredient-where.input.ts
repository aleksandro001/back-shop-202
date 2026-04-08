import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUnitFilter } from '../prisma/enum-unit-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';
import { Type } from 'class-transformer';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';

@InputType()
export class IngredientWhereInput {

    @Field(() => [IngredientWhereInput], {nullable:true})
    AND?: Array<IngredientWhereInput>;

    @Field(() => [IngredientWhereInput], {nullable:true})
    OR?: Array<IngredientWhereInput>;

    @Field(() => [IngredientWhereInput], {nullable:true})
    NOT?: Array<IngredientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumUnitFilter, {nullable:true})
    defaultUnit?: EnumUnitFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    @Type(() => RecipeListRelationFilter)
    recipes?: RecipeListRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    @Type(() => RecipeIngredientListRelationFilter)
    recipeIngredients?: RecipeIngredientListRelationFilter;
}
