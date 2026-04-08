import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUnitFieldUpdateOperationsInput } from '../prisma/enum-unit-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUncheckedUpdateManyWithoutIngredientNestedInput } from '../recipe/recipe-unchecked-update-many-without-ingredient-nested.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-ingredient-nested.input';

@InputType()
export class IngredientUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUnitFieldUpdateOperationsInput, {nullable:true})
    defaultUnit?: EnumUnitFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RecipeUncheckedUpdateManyWithoutIngredientNestedInput, {nullable:true})
    @Type(() => RecipeUncheckedUpdateManyWithoutIngredientNestedInput)
    recipes?: RecipeUncheckedUpdateManyWithoutIngredientNestedInput;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput)
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput;
}
