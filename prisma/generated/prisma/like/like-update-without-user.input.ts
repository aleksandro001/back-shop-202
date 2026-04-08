import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutLikesNestedInput } from '../recipe/recipe-update-one-required-without-likes-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutLikesNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutLikesNestedInput;
}
