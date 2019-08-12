class Pokemon < ApplicationRecord
  belongs_to :trainer

  def self.randomPokemon(trainer_id)
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    Pokemon.new(nickname: name, species: species, trainer_id: trainer_id)
  end
end
