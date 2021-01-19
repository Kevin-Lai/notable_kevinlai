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
require 'test_helper'

class AppointmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
