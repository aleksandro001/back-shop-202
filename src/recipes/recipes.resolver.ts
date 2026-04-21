import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AdminRecipesService } from './admin-recipes.service';
import { RecipeModel } from './models/recipe.model';
import { RecipeCreateInput } from './inputs/recipe.input';
import { CurrentUser } from 'src/auth/decorators/current-user-decorator';
import { Role } from 'prisma/generated/prisma/enums';
import { RecipesQueryInput } from './inputs/get-recipe-query.input';

@Resolver()
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly adminRecipesService: AdminRecipesService,
  ) {}

  @Query(() => [RecipeModel], {
    name: 'recipes',
  })
  getAll(@Args('input') input: RecipesQueryInput) {
    return this.recipesService.getAll(input);
  }
  @Query(() => RecipeModel, {
    name: 'recipeSlug',
  })
  getBySlug(@Args('slug') slug: string) {
    return this.recipesService.getBySlug(slug);
  }

  @Query(() => [RecipeModel], {
    name: 'adminRecipes',
  })
  @Auth(Role.ADMIN)
  getAllAdmin() {
    return this.adminRecipesService.getAll();
  }

  @Query(() => RecipeModel, {
    name: 'recipeModel',
  })
  @Auth(Role.ADMIN)
  getByID(@Args('id') id: string) {
    return this.adminRecipesService.getById(id);
  }

  @Mutation(() => RecipeModel)
  @Auth(Role.ADMIN)
  createIngredient(
    @CurrentUser('id') authorId: string,
    @Args('input') input: RecipeCreateInput,
  ) {
    return this.adminRecipesService.create(authorId, input);
  }

  @Mutation(() => RecipeModel)
  @Auth(Role.ADMIN)
  updateIngredient(
    @Args('id') id: string,
    @Args('input') input: RecipeCreateInput,
  ) {
    return this.adminRecipesService.update(id, input);
  }

  @Mutation(() => RecipeModel)
  @Auth(Role.ADMIN)
  deleteIngredientById(@Args('id') id: string) {
    return this.adminRecipesService.deleteById(id);
  }
}
