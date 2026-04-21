import { Field, InputType, Int } from '@nestjs/graphql';
import {
  ActivityLevel,
  Gender,
  NutritionGoal,
} from 'prisma/generated/prisma/enums';

@InputType()
export class ProfileUpdateInput {
  @Field(() => String, { nullable: true })
  fullName?: string;

  @Field(() => Gender, { nullable: true })
  gender?: Gender;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field(() => String, { nullable: true })
  bio?: string;
}

@InputType()
export class BodyMeasurementUpdateInput {
  @Field(() => Int, { nullable: true })
  heightCm?: number;

  @Field(() => Int, { nullable: true })
  weightKg?: number;

  @Field(() => Int, { nullable: true })
  goalWeightKg?: number;

  @Field(() => Int, { nullable: true })
  chestCm?: number;

  @Field(() => Int, { nullable: true })
  waistCm?: number;

  @Field(() => Int, { nullable: true })
  thighCm?: number;

  @Field(() => Int, { nullable: true })
  armCm?: number;

  @Field(() => ActivityLevel, { nullable: true })
  activityLevel?: ActivityLevel;

  @Field(() => NutritionGoal, { nullable: true })
  nutritionGoal?: NutritionGoal;
}

@InputType()
export class UserUpdateInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => ProfileUpdateInput, { nullable: true })
  profile?: ProfileUpdateInput;

  @Field(() => BodyMeasurementUpdateInput, { nullable: true })
  measurement?: BodyMeasurementUpdateInput;
}
