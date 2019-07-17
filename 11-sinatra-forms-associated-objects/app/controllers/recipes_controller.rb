class RecipesController < ApplicationController

  get "/recipes" do
    @recipes = Recipe.all
    erb :"recipes/index.html"
  end

  get "/recipes/new" do
    @users = User.all
    @ingredients = Ingredient.all
    erb :"recipes/new.html"
  end

  post "/recipes" do
    if params["user"]
      @user = User.create(params["user"])
    end


    @recipe = Recipe.new(params["recipe"])
    if @recipe.save
      redirect "/recipes/#{@recipe.id}"
    else
      redirect "/recipes/new"
    end
  end

  get "/recipes/:id" do
    @recipe = Recipe.find(params[:id])
    @ingredients = @recipe.ingredients
    erb :"recipes/show.html"
  end
end
