class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:edit, :update, :show]
  def new
    @doctor = Doctor.new
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to doctor_path(@doctor)
    else
      redirect_to new_doctor_path
    end
  end

  def edit
  end

  def update
    @doctor.update(doctor_params)
    redirect_to doctor_path(@doctor)
  end

  def show
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :specialty)
  end

  def find_doctor
    @doctor = Doctor.find(params[:id])
  end
end
