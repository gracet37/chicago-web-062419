class Api::V1::CalorieEntriesController < ApplicationController
  before_action :set_api_v1_calorie_entry, only: [:show, :update, :destroy]

  # GET /api/v1/calorie_entries
  def index
    @api_v1_calorie_entries = Api::V1::CalorieEntry.all

    render json: @api_v1_calorie_entries
  end

  # GET /api/v1/calorie_entries/1
  def show
    render json: @api_v1_calorie_entry
  end

  # POST /api/v1/calorie_entries
  def create
    @api_v1_calorie_entry = Api::V1::CalorieEntry.new(api_v1_calorie_entry_params)

    if @api_v1_calorie_entry.save
      render json: @api_v1_calorie_entry, status: :created, location: @api_v1_calorie_entry
    else
      render json: @api_v1_calorie_entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/calorie_entries/1
  def update
    if @api_v1_calorie_entry.update(api_v1_calorie_entry_params)
      render json: @api_v1_calorie_entry
    else
      render json: @api_v1_calorie_entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/calorie_entries/1
  def destroy
    @api_v1_calorie_entry = @api_v1_calorie_entry.destroy
    render json: @api_v1_calorie_entry
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_calorie_entry
      @api_v1_calorie_entry = Api::V1::CalorieEntry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_v1_calorie_entry_params
      params.require(:api_v1_calorie_entry).permit(:calorie, :note)
    end
end
