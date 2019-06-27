class Tweet
  attr_reader :user, :message

  @@all = []

  def self.all
    @@all
  end

  def initialize(message, user)
    # message: string of the tweet message
    @message = message
    # user: user instance
    @user = user
    @@all << self
  end

  def username
    self.user.username
  end
end
