class Api::AppointmentsController < ApplicationController
    # [:create, :update, :destroy]

    def create
        @appointment = Appointment.new(appointment_params)

        if @appointment.save
            
        else
            render json: @appointment.errors.full_messages, status: 422
        end

    end

    def update

    end

    def destroy
        @appointment = Appointment.find_by(id: params[:id])

        if @appointment.destroy

        else
            render json: @appointment.errors.full_messages, status: 422
        end
    end

    private
    def appointment_params
        #  patient_first_name :string           not null
        #  patient_last_name  :string           not null
        #  date               :string           not null
        #  time               :string           not null
        #  kind               :string           not null
        #  doctor_id          :integer          not null
        
        params.require(:appointment).permit(:patient_first_name, :patient_last_name, :date, :time, :kind, :doctor_id)
    end

end
