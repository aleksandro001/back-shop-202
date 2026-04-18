import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTegCreateWithoutRecipesInput } from './recipe-teg-create-without-recipes.input';
import { Type } from 'class-transformer';
import { RecipeTegCreateOrConnectWithoutRecipesInput } from './recipe-teg-create-or-connect-without-recipes.input';
import { RecipeTegUpsertWithWhereUniqueWithoutRecipesInput } from './recipe-teg-upsert-with-where-unique-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';
import { RecipeTegUpdateWithWhereUniqueWithoutRecipesInput } from './recipe-teg-update-with-where-unique-without-recipes.input';
import { RecipeTegUpdateManyWithWhereWithoutRecipesInput } from './recipe-teg-update-many-with-where-without-recipes.input';
import { RecipeTegScalarWhereInput } from './recipe-teg-scalar-where.input';

@InputType()
export class RecipeTegUpdateManyWithoutRecipesNestedInput {

    @Field(() => [RecipeTegCreateWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegCreateWithoutRecipesInput)
    create?: Array<RecipeTegCreateWithoutRecipesInput>;

    @Field(() => [RecipeTegCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<RecipeTegCreateOrConnectWithoutRecipesInput>;

    @Field(() => [RecipeTegUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<RecipeTegUpsertWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [RecipeTegWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTegWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTegWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTegWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTegWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTegWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTegWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTegWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTegUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<RecipeTegUpdateWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [RecipeTegUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<RecipeTegUpdateManyWithWhereWithoutRecipesInput>;

    @Field(() => [RecipeTegScalarWhereInput], {nullable:true})
    @Type(() => RecipeTegScalarWhereInput)
    deleteMany?: Array<RecipeTegScalarWhereInput>;
}
