import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeTegScalarWhereInput {

    @Field(() => [RecipeTegScalarWhereInput], {nullable:true})
    AND?: Array<RecipeTegScalarWhereInput>;

    @Field(() => [RecipeTegScalarWhereInput], {nullable:true})
    OR?: Array<RecipeTegScalarWhereInput>;

    @Field(() => [RecipeTegScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeTegScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
