class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :email, null:false
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.timestamps
    end
    add_index :doctors, :email, unique:true
  end
end
