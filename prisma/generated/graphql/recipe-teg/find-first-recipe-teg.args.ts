import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegWhereInput } from './recipe-teg-where.input';
import { Type } from 'class-transformer';
import { RecipeTegOrderByWithRelationInput } from './recipe-teg-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeTegScalarFieldEnum } from './recipe-teg-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeTegArgs {

    @Field(() => RecipeTegWhereInput, {nullable:true})
    @Type(() => RecipeTegWhereInput)
    where?: RecipeTegWhereInput;

    @Field(() => [RecipeTegOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeTegOrderByWithRelationInput>;

    @Field(() => RecipeTegWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeTegWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeTegScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeTegScalarFieldEnum}`>;
}
