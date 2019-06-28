class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def likers
    likes.map do |like|
      like.user
    end
  end

  def liker_names
    likes.map do |like|
      like.user.username
    end
  end

  def likes
    Like.all.select do |like|
      like.tweet == self
    end
  end
end
