class Creature
  attr_reader :species, :age

  def initialize(species, age)
    @species = species
    @age = age
  end

  def adjusted_age
    if self.species == "canine"
      return @age * 7
    else
      return @age
    end
  end

  def getting_old?
    # if @species == "canine"
    #   temp_age = @age * 7
    # else
    #   temp_age = @age
    # end
    if self.adjusted_age > 70
      return true
    end
    false
  end
end

dog = Creature.new("canine", 13)
person = Creature.new("humanine", 71)

p dog.age

p person.age

p dog.getting_old?

p person.getting_old?
