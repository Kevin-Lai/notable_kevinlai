json.array! @doctors do |doctor|
    json.extract! doctor, :id, :email, :first_name, :last_name, :appointments
end