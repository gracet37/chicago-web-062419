class DonutsController < ApplicationController

  def new
    @donut = Donut.new
  end

  def create
    @donut = Donut.new(donut_params)
    if @donut.valid?
      flash[:message] = "Successfully made new donut!"
      @donut.save
      redirect_to donut_path(@donut)
      # /donuts/1
    else
      flash[:message] = @donut.errors.full_messages
      redirect_to new_donut_path
      #/donuts/new
    end
  end

  def index
    @donuts = Donut.all
  end

  def show
    @donut = Donut.find(params[:id])
  end

  private

  def donut_params
    params.require(:donut).permit(:flavor,:price,:sprinkles)
  end
end
