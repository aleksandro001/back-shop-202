import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class IngredientCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    content!: string;
  }
