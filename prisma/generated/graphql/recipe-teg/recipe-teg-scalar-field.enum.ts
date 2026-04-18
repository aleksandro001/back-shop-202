import { registerEnumType } from '@nestjs/graphql';

export enum RecipeTegScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeTegScalarFieldEnum, { name: 'RecipeTegScalarFieldEnum', description: undefined })
