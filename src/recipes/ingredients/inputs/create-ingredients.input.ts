import { Field, InputType } from "@nestjs/graphql";
import { Unit } from "prisma/generated/graphql/prisma/unit.enum";

@InputType()
export class IngredientCreateInput {


    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Unit, {nullable:true})
    defaultUnit!: `${Unit}`;
  }