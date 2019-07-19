class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  get "/books" do
    @books = Book.all
    erb :index
  end

  get "/books/:id" do
    @book = Book.find(params[:id])
    erb :show
  end

end
