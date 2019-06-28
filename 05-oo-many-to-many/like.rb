class Like
  attr_reader :user, :tweet

  @@all = []

  def self.all
    @@all
  end

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  # private
  # def give_out_my_ssn
  #   puts "MY SSN IS Etc"
  # end
end

# l = Like.new(nil, nil)
#
# l.give_out_my_ssn
