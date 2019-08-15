# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Api::V1::CalorieEntry.destroy_all

calorie_entries = Api::V1::CalorieEntry.create([
  {calorie: 580, note: "Poke Bar - Medium Poke Bowl"},
  {calorie: 208, note: "Taiyaki - Ice-cream cone"},
  {calorie: 800, note: "Taco Truck - Chicken Burrito"},
  {calorie: 266, note: "Vegetable Kofta"},
  {calorie: 304, note: "Kung Fu Tea - Passion fruit green tea with boba"},
  {calorie: 918, note: "Bodega down the block - Cheese burger with all the topings..."}
])