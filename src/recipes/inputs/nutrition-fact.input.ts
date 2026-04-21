import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class NutritionFactUpdateInput {
  @Field(() => Float, { nullable: false })
  protein!: number;

  @Field(() => Float, { nullable: false })
  fats!: number;

  @Field(() => Float, { nullable: false })
  carbohydrates!: number;

  @Field(() => Float, { nullable: false })
  fiber!: number;
}
