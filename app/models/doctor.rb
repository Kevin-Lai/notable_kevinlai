# == Schema Information
#
# Table name: doctors
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  first_name :string           not null
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Doctor < ApplicationRecord
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true

    has_many :appointments,
        foreign_key: :doctor_id,
        class_name: :Appointment

end
