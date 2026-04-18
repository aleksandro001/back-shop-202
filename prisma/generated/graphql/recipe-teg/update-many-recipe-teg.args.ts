import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegUpdateManyMutationInput } from './recipe-teg-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeTegWhereInput } from './recipe-teg-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRecipeTegArgs {

    @Field(() => RecipeTegUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeTegUpdateManyMutationInput)
    data!: RecipeTegUpdateManyMutationInput;

    @Field(() => RecipeTegWhereInput, {nullable:true})
    @Type(() => RecipeTegWhereInput)
    where?: RecipeTegWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
