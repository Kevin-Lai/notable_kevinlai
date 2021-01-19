# == Schema Information
#
# Table name: appointments
#
#  id                 :bigint           not null, primary key
#  patient_first_name :string           not null
#  patient_last_name  :string           not null
#  date               :string           not null
#  time               :string           not null
#  kind               :string           not null
#  doctor_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Appointment < ApplicationRecord
    validates :patient_first_name, :patient_last_name, presence:true
    validates :date, :time, :kind, presence: true

    belongs_to :doctor,
        foreign_key: :doctor_id,
        class_name: :Doctor

end
