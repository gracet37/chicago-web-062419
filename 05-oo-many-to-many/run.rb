require_relative './tweet.rb'
require_relative './user.rb'
require_relative './like.rb'
require 'pry'

dad = User.new("coffee_dad")

# post_tweet returns the tweet that's created
dad_tweet = dad.post_tweet("loving #this coffee")

luke = User.new("latte_lucas")

luke.like_tweet(dad_tweet)

p luke.liked_tweets
p dad_tweet.likers
