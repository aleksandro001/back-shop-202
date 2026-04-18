import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeTegCountAggregate } from './recipe-teg-count-aggregate.output';
import { RecipeTegMinAggregate } from './recipe-teg-min-aggregate.output';
import { RecipeTegMaxAggregate } from './recipe-teg-max-aggregate.output';

@ObjectType()
export class AggregateRecipeTeg {

    @Field(() => RecipeTegCountAggregate, {nullable:true})
    _count?: RecipeTegCountAggregate;

    @Field(() => RecipeTegMinAggregate, {nullable:true})
    _min?: RecipeTegMinAggregate;

    @Field(() => RecipeTegMaxAggregate, {nullable:true})
    _max?: RecipeTegMaxAggregate;
}
