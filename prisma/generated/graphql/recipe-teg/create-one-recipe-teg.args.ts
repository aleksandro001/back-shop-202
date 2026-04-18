import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegCreateInput } from './recipe-teg-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeTegArgs {

    @Field(() => RecipeTegCreateInput, {nullable:false})
    @Type(() => RecipeTegCreateInput)
    data!: RecipeTegCreateInput;
}
