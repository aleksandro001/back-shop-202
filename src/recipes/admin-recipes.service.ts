import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
  
    // create(data: IngredientCreateInput) {
    //   return this.prisma.ingredient.create({
    //     data
    //   });
    // }
  
    // update(id: string, data: IngredientCreateInput) {
    //   return this.prisma.ingredient.update({
    //     where: { id },
    //     data
    //   });
    // }
  
    deleteById(id: string) {
      return this.prisma.ingredient.delete({ where: { id } });
    }
  
}
