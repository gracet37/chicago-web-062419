require './config/environment'

class ApplicationController < Sinatra::Base
  use Rack::MethodOverride

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  #Index
  get "/beans" do
    @beans = Bean.all
    erb :index
  end

  #New
  get "/beans/new" do
    erb :new
  end

  #Create
  post "/beans" do
    @bean = Bean.new
    @bean.name = params["name"]
    @bean.origin = params["origin"]
    @bean.roast = params["roast"]
    @bean.save
    redirect "/beans"
  end

  #Show
  get "/beans/:id" do
    @bean = Bean.find(params[:id])
    erb :show
  end

  #Edit
  get "/beans/:id/edit" do
    @bean = Bean.find(params[:id])
    erb :edit
  end

  #Update
  patch "/beans/:id" do
    params.delete("_method")
    @bean = Bean.find(params[:id])
    @bean.update(params)
    redirect "/beans/#{@bean.id}"
  end

  #Destroy
  delete "/beans/:id" do
    @bean = Bean.find(params[:id])
    @bean.destroy
    redirect "/beans"
  end

end
