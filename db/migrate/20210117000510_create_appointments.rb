class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :patient_first_name, null:false
      t.string :patient_last_name, null:false
      t.string :date, null:false
      t.string :time, null:false
      t.string :kind, null:false
      t.integer :doctor_id, null:false
      t.timestamps
    end
    add_index :appointments, :doctor_id
  end
end
