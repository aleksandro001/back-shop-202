import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTegScalarWhereInput } from './recipe-teg-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeTegUpdateManyMutationInput } from './recipe-teg-update-many-mutation.input';

@InputType()
export class RecipeTegUpdateManyWithWhereWithoutRecipesInput {

    @Field(() => RecipeTegScalarWhereInput, {nullable:false})
    @Type(() => RecipeTegScalarWhereInput)
    where!: RecipeTegScalarWhereInput;

    @Field(() => RecipeTegUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeTegUpdateManyMutationInput)
    data!: RecipeTegUpdateManyMutationInput;
}
