class Api::DoctorsController < ApplicationController
    # [:index, :create, :show]
    
    def index
        @doctors = Doctor.all
        render :index
    end

    def create
        @doctor = Doctor.new(doctor_params)

        if @doctor.save
            render :show
        else
            render json: @doctor.errors.full_messages, status: 422
        end

    end

    def show
        @doctor = Doctor.find_by(id: params[:id])

        if @doctor
            render :show
        else
            render json: @doctor.errors.full_messages, status: 404
        end
    end

    private
    def doctor_params
        params.require(:doctor).permit(:email, :first_name, :last_name)
    end

end
