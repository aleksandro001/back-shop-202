import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeTegCountAggregate } from './recipe-teg-count-aggregate.output';
import { RecipeTegMinAggregate } from './recipe-teg-min-aggregate.output';
import { RecipeTegMaxAggregate } from './recipe-teg-max-aggregate.output';

@ObjectType()
export class RecipeTegGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RecipeTegCountAggregate, {nullable:true})
    _count?: RecipeTegCountAggregate;

    @Field(() => RecipeTegMinAggregate, {nullable:true})
    _min?: RecipeTegMinAggregate;

    @Field(() => RecipeTegMaxAggregate, {nullable:true})
    _max?: RecipeTegMaxAggregate;
}
