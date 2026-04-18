import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTegCreateManyInput } from './recipe-teg-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeTegArgs {

    @Field(() => [RecipeTegCreateManyInput], {nullable:false})
    @Type(() => RecipeTegCreateManyInput)
    data!: Array<RecipeTegCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
