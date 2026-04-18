import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTegWhereInput } from './recipe-teg-where.input';

@InputType()
export class RecipeTegListRelationFilter {

    @Field(() => RecipeTegWhereInput, {nullable:true})
    every?: RecipeTegWhereInput;

    @Field(() => RecipeTegWhereInput, {nullable:true})
    some?: RecipeTegWhereInput;

    @Field(() => RecipeTegWhereInput, {nullable:true})
    none?: RecipeTegWhereInput;
}
