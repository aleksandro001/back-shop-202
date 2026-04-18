import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegWhereInput } from './recipe-teg-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRecipeTegArgs {

    @Field(() => RecipeTegWhereInput, {nullable:true})
    @Type(() => RecipeTegWhereInput)
    where?: RecipeTegWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
