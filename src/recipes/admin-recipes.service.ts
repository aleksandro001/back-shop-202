import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RecipeCreateInput } from './inputs/recipe.input';

@Injectable()
export class AdminRecipesService {
  constructor(private readonly prisma: PrismaService) {}

  // pagination filtering ( category, searchTerm(name, description, ingredient) ), sorting (default by date, recommended(likes), popularity(likes))
  getAll() {
    return this.prisma.ingredient.findMany();
  }

  // admin only
  async getById(id: string) {
    const recipe = await this.prisma.ingredient.findUnique({ where: { id } });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }

  create(
    authorId: string,
    {
      recipeSteps,
      nutritionFact,
      ingredients,
      tags,
      ...data
    }: RecipeCreateInput,
  ) {
    return this.prisma.recipe.create({
      data: {
        ...data,
        author: { connect: { id: authorId } },
        ...(nutritionFact && {
          nutritionFact: {
            create: nutritionFact,
          },
        }),
        ...(!!nutritionFact && {
          nutritionFact: {
            create: nutritionFact,
          },
        }),
        recipeSteps: {
          create: recipeSteps,
        },
        ...(!!ingredients?.length && {
          recipeIngredients: {
            create: ingredients.map(({ ingredientId, quantity, unit }) => ({
              ingredient: {
                connect: { id: ingredientId },
              },
              quantity,
              unit,
            })),
          },
        }),
        ...(!!tags?.length && {
          tags: {
            connectOrCreate: tags.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        }),
      },
    });
  }

  update(
    id: string,
    {
      recipeSteps,
      nutritionFact,
      ingredients,
      tags,
      ...data
    }: RecipeCreateInput,
  ) {
    return this.prisma.recipe.update({
      where: { id },
      data: {
        ...data,
        ...(nutritionFact && {
          nutritionFact: {
            upsert: {
              create: nutritionFact,
              update: nutritionFact,
            },
          },
        }),
        ...(recipeSteps && {
          recipeSteps: {
            deleteMany: {},
            create: recipeSteps,
          },
        }),
        ...(ingredients && {
          recipeIngredients: {
            deleteMany: {},
            create: ingredients.map(({ ingredientId, quantity, unit }) => ({
              ingredient: {
                connect: { id: ingredientId },
              },
              quantity,
              unit,
            })),
          },
        }),
        ...(tags && {
          tags: {
            set: [],
            connectOrCreate: tags.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        }),
      },
    });
  }

  deleteById(id: string) {
    return this.prisma.ingredient.delete({ where: { id } });
  }
}
