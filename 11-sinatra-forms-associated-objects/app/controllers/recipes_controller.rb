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
    @recipe = Recipe.new(params["recipe"])

    if @recipe.valid?
      if params["user"]
        new_user = User.create(params["user"])
        @recipe.user = new_user
      end
      if params["ingredient"]
        new_ingredient = Ingredient.create(params["ingredient"])
        @recipe.ingredients << new_ingredient
      end
      @recipe.save
      redirect "/recipes/#{@recipe.id}"
    else
      @errors = @recipe.errors.full_messages
      p @errors
      @users = User.all
      @ingredients = Ingredient.all
      erb :"/recipes/new.html"
    end
  end

  get "/recipes/:id" do
    @recipe = Recipe.find(params[:id])
    @ingredients = @recipe.ingredients
    erb :"recipes/show.html"
  end

  get "/recipes/:id/edit" do
    if Recipe.exists?(params[:id])
      @recipe = Recipe.find(params[:id])
      @users = User.all
      @ingredients = Ingredient.all
      erb :"recipes/edit.html"
    else
      redirect "/recipes"
    end
  end

  patch "/recipes/:id" do
    @recipe = Recipe.find(params[:id])
    @recipe.update(params["recipe"])
    redirect "/recipes/#{@recipe.id}"
  end
end
