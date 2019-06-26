class Animal
  # attr_reader :species
  # attr_writer :species

  def initialize(species_arg)
    p "in the initialize"
    @species = species_arg
    $species = "cool one"
  end

  def species
    @species
  end

  def species=(new_species)
    @species = new_species
  end

  # def set_species(new_species)
  #   @species = new_species
  #   puts "species is currently #{species}"
  # end
  p $species
end

# ClassName.new wiill create a new instance of that class
lion = Animal.new("cat")
python = Animal.new("snake")
# p lion
# puts lion.species
lion.species = "bird"
# puts lion.species
# puts python.species
python.species = "coding language"
# puts python.species
p $species
