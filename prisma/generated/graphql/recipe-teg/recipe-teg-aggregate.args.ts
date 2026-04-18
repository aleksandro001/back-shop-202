import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegWhereInput } from './recipe-teg-where.input';
import { Type } from 'class-transformer';
import { RecipeTegOrderByWithRelationInput } from './recipe-teg-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTegWhereUniqueInput } from './recipe-teg-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeTegCountAggregateInput } from './recipe-teg-count-aggregate.input';
import { RecipeTegMinAggregateInput } from './recipe-teg-min-aggregate.input';
import { RecipeTegMaxAggregateInput } from './recipe-teg-max-aggregate.input';

@ArgsType()
export class RecipeTegAggregateArgs {

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

    @Field(() => RecipeTegCountAggregateInput, {nullable:true})
    _count?: RecipeTegCountAggregateInput;

    @Field(() => RecipeTegMinAggregateInput, {nullable:true})
    _min?: RecipeTegMinAggregateInput;

    @Field(() => RecipeTegMaxAggregateInput, {nullable:true})
    _max?: RecipeTegMaxAggregateInput;
}
