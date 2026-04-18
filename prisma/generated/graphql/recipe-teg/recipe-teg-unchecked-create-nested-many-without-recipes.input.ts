import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTegCreateWithoutRecipesInput } from './recipe-teg-create-without-recipes.input';
import { Type } from 'class-transformer';
import { RecipeTegCreateOrConnectWithoutRecipesInput } from './recipe-teg-create-or-connect-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';

@InputType()
export class RecipeTegUncheckedCreateNestedManyWithoutRecipesInput {

    @Field(() => [RecipeTegCreateWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegCreateWithoutRecipesInput)
    create?: Array<RecipeTegCreateWithoutRecipesInput>;

    @Field(() => [RecipeTegCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTegCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<RecipeTegCreateOrConnectWithoutRecipesInput>;

    @Field(() => [RecipeTegWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTegWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>>;
}
