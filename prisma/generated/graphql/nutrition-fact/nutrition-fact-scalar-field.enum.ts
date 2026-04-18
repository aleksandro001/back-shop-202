import { registerEnumType } from '@nestjs/graphql';

export enum NutritionFactScalarFieldEnum {
    id = "id",
    protein = "protein",
    fats = "fats",
    carbohydrates = "carbohydrates",
    fiber = "fiber",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(NutritionFactScalarFieldEnum, { name: 'NutritionFactScalarFieldEnum', description: undefined })
