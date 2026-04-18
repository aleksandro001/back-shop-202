import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeTegCountOrderByAggregateInput } from './recipe-teg-count-order-by-aggregate.input';
import { RecipeTegMaxOrderByAggregateInput } from './recipe-teg-max-order-by-aggregate.input';
import { RecipeTegMinOrderByAggregateInput } from './recipe-teg-min-order-by-aggregate.input';

@InputType()
export class RecipeTegOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeTegCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeTegCountOrderByAggregateInput;

    @Field(() => RecipeTegMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeTegMaxOrderByAggregateInput;

    @Field(() => RecipeTegMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeTegMinOrderByAggregateInput;
}
