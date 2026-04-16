import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutIngredientInput } from './recipe-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutIngredientInput } from './recipe-create-or-connect-without-ingredient.input';
import { RecipeCreateManyIngredientInputEnvelope } from './recipe-create-many-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedManyWithoutIngredientInput {

    @Field(() => [RecipeCreateWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeCreateWithoutIngredientInput)
    create?: Array<RecipeCreateWithoutIngredientInput>;

    @Field(() => [RecipeCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutIngredientInput>;

    @Field(() => RecipeCreateManyIngredientInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyIngredientInputEnvelope)
    createMany?: RecipeCreateManyIngredientInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}
