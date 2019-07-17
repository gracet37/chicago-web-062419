RecipeIngredient.destroy_all
Ingredient.destroy_all
Recipe.destroy_all

10.times do
  Ingredient.create(name: Faker::Food.ingredient)
end

5.times do
  User.create(username: Faker::Internet.username)
end
