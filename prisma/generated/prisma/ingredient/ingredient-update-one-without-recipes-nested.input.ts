import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesInput } from './ingredient-create-without-recipes.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesInput } from './ingredient-create-or-connect-without-recipes.input';
import { IngredientUpsertWithoutRecipesInput } from './ingredient-upsert-without-recipes.input';
import { IngredientWhereInput } from './ingredient-where.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateToOneWithWhereWithoutRecipesInput } from './ingredient-update-to-one-with-where-without-recipes.input';

@InputType()
export class IngredientUpdateOneWithoutRecipesNestedInput {

    @Field(() => IngredientCreateWithoutRecipesInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesInput)
    create?: IngredientCreateWithoutRecipesInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesInput;

    @Field(() => IngredientUpsertWithoutRecipesInput, {nullable:true})
    @Type(() => IngredientUpsertWithoutRecipesInput)
    upsert?: IngredientUpsertWithoutRecipesInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    disconnect?: IngredientWhereInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    delete?: IngredientWhereInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateToOneWithWhereWithoutRecipesInput, {nullable:true})
    @Type(() => IngredientUpdateToOneWithWhereWithoutRecipesInput)
    update?: IngredientUpdateToOneWithWhereWithoutRecipesInput;
}
