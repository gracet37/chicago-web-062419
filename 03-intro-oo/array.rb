require_relative "animal"
require_relative "randoms/robot"

class Array
  def cheer
    puts "WOOHOOOOOO"
  end
end

[1, 2, 3, 4, 5].length
[:a, :b, :c].cheer

p "abc" * 99

p $species
