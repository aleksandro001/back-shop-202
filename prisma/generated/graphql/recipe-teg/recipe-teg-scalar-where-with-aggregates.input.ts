import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RecipeTegScalarWhereWithAggregatesInput {

    @Field(() => [RecipeTegScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeTegScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeTegScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeTegScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeTegScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeTegScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
