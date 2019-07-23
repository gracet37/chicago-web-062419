# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Farmer.create([{name: 'Idris Elba'}, {name: 'Helen Mirren'}, {name: 'Tom Hiddleston'}, {name: 'Tessa Thompson'}])

# REVIEW: What SQL is going to run as a result of this line?
Farmer.first.cows.create([{name: 'Brad', spots: 16}, {name: 'Eunice', spots: 23}])
