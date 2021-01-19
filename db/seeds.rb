# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doctor.delete_all
Appointment.delete_all

d1 = Doctor.create!(
    email: 'hibbert@notablehealth.com',
    first_name: "Julius",
    last_name: "Hibbert"
)

d2 = Doctor.create!(
    email: 'krieger@notablehealth.com',
    first_name: "Algemop",
    last_name: "Krieger"
)

d3 = Doctor.create!(
    email: 'riviera@notablehealth.com',
    first_name: "Nick",
    last_name: "Riviera"
)

#  patient_first_name :string           not null
#  patient_last_name  :string           not null
#  date               :string           not null
#  time               :string           not null
#  kind               :string           not null
#  doctor_id          :integer          not null

a1 = Appointment.create!(
    patient_first_name: 'Sterling',
    patient_last_name: 'Archer',
    date: '05/09/2018',
    time: '8:00AM',
    kind: 'New Patient',
    doctor_id: d2.id
)