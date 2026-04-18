import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegWhereInput } from './recipe-teg-where.input';
import { Type } from 'class-transformer';
import { RecipeTegOrderByWithAggregationInput } from './recipe-teg-order-by-with-aggregation.input';
import { RecipeTegScalarFieldEnum } from './recipe-teg-scalar-field.enum';
import { RecipeTegScalarWhereWithAggregatesInput } from './recipe-teg-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeTegCountAggregateInput } from './recipe-teg-count-aggregate.input';
import { RecipeTegMinAggregateInput } from './recipe-teg-min-aggregate.input';
import { RecipeTegMaxAggregateInput } from './recipe-teg-max-aggregate.input';

@ArgsType()
export class RecipeTegGroupByArgs {

    @Field(() => RecipeTegWhereInput, {nullable:true})
    @Type(() => RecipeTegWhereInput)
    where?: RecipeTegWhereInput;

    @Field(() => [RecipeTegOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeTegOrderByWithAggregationInput>;

    @Field(() => [RecipeTegScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeTegScalarFieldEnum}`>;

    @Field(() => RecipeTegScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeTegScalarWhereWithAggregatesInput;

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
