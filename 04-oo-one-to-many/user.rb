class User
  # def username
  #   @username
  # end
  attr_reader :username

  @@all = []

  # Class method, called by "User.all"
  def self.all
    @@all
  end

  def initialize(username)
    self.class
    if already_exists?(username)
      # keeping duplicate usernames from being created, to ensure I find only my own tweets and not someone else's with the same username
      # raise "sorry, that user already exists"
    end
    @username = username
    # @tweets = []
    @@all << self
  end

  def already_exists?(username)
    usernames = self.class.all.map do |user|
      user.username
    end
    usernames.include?(username)

    # existing_user = User.all.find do |user|
    #   user.username == username
    # end
    #
    # !!existing_user
  end

  def tweets
    # Tweet.all.select { |tweet| tweet.user.username == self.username}
    # So I want to access where all the tweets are
    all_tweets = Tweet.all
    # and look through all those tweets
    # and for each tweet
    my_tweets = all_tweets.select do |tweet|
      self.owns_tweet?(tweet)

      # # there will be a readable user
      # tweet_user = tweet.user
      # # and that user will have a username
      # username_to_check = tweet_user.username
      # # and I also have a username to match with it
      # my_username = self.username
      # # that's gonna be the condition I filter on
      # username_to_check == my_username
    end
    # I'll get the tweets that pertain to me only
    # and that's what I'll return
  end

  def name_but_louder
    @username.upcase
  end

  def owns_tweet?(tweet)
    @username == tweet.user.username
  end

  def post_tweet(message)
    new_tweet =  Tweet.new(message, self)
    # use message to create a new tweet
    # tweet also needs to know about this user, who is the one posting -- self will help

  end


end
