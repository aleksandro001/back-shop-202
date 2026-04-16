import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateManyIngredientInput } from './recipe-create-many-ingredient.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeCreateManyIngredientInputEnvelope {

    @Field(() => [RecipeCreateManyIngredientInput], {nullable:false})
    @Type(() => RecipeCreateManyIngredientInput)
    data!: Array<RecipeCreateManyIngredientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
