import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutIngredientInput } from './recipe-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutIngredientInput } from './recipe-create-or-connect-without-ingredient.input';
import { RecipeUpsertWithWhereUniqueWithoutIngredientInput } from './recipe-upsert-with-where-unique-without-ingredient.input';
import { RecipeCreateManyIngredientInputEnvelope } from './recipe-create-many-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutIngredientInput } from './recipe-update-with-where-unique-without-ingredient.input';
import { RecipeUpdateManyWithWhereWithoutIngredientInput } from './recipe-update-many-with-where-without-ingredient.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUpdateManyWithoutIngredientNestedInput {

    @Field(() => [RecipeCreateWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeCreateWithoutIngredientInput)
    create?: Array<RecipeCreateWithoutIngredientInput>;

    @Field(() => [RecipeCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutIngredientInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutIngredientInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutIngredientInput>;

    @Field(() => RecipeCreateManyIngredientInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyIngredientInputEnvelope)
    createMany?: RecipeCreateManyIngredientInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutIngredientInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutIngredientInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutIngredientInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutIngredientInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
