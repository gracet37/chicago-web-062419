require 'rest-client'
require 'json'
require 'pry'

# def welcome_user
puts "Welcome! Let's find you some books. Please enter a search term:"
input = gets.chomp

# need to change spaces to pluses in search string
# def prep_for_query
subbed_input = input.gsub(" ", "+")

# need to make connection "over the wire" to google books api

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{subbed_input}")
# p "*" * 99
# p response.code
# p response.headers.class
parsed_body = JSON.parse(response.body)

# def print_item_titles(response)
parsed_body["items"].each do |item|
  p item["volumeInfo"]["title"]
end
binding.pry
