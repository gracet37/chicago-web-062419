class PokemonsController < ApplicationController

  def create
    @trainer = Trainer.find(params[:trainer_id])
    if @trainer.pokemons.length < 6
      @newPokemon = Pokemon.randomPokemon(params[:trainer_id])
      if @newPokemon.save
        render json: @newPokemon
      end
    else
      render json: { errors: "error", code: 400, message: "Trainer's team is full" }, status: 400
    end
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.delete
    render json: { message: "Successfully deleted"}
  end
end
