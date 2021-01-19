/*
1. getDoctors()
2. getDoctor(doctorId)
3. addAppointment(appointment)
4. deleteAppointment(appointmentId)
*/

export const getDoctors =()=>{
    //debugger
    return $.ajax({
        method: "GET",
        url: "api/doctors/"
    })
}

export const getDoctor =(doctorId)=>{
    return $.ajax({
        method: "GET",
        url: "api/doctors/" + doctorId
    })
}

export const addAppointment =(appointment)=>{
    return $.ajax({
        method: "POST",
        url: "api/appointments/",
        data: {appointment}
    })
}

export const deleteAppointment =(appointmentId)=>{
    return $.ajax({
        method: "DELETE",
        url: "api/appointments/" + appointmentId
    })
}