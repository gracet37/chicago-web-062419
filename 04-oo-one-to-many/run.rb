require_relative "user"
require_relative "tweet"
require "pry"


mom_one = User.new("matcha_mom")

mom_one.post_tweet("it's a good day to dilute some leaves")

matcha_two = User.new("matcha_mom")

matcha_two.post_tweet("loving this # matcha")

# matcha.tweets.pop

p matcha_two.tweets

puts User.all
# p Tweet.all

mom_one.tweets
# binding.pry
