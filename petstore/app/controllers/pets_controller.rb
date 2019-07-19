class PetsController < ApplicationController

  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find_by(id: params[:id])
  end

  def new

  end

  def create
    # pet = Pet.new(name: params[:pet][:name], height: params[:pet][:height])
    pet = Pet.new(pet_params)

    pet.save
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit([:height, :name, :breed])
  end
end
