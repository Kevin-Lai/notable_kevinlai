import * as DoctorAPIUtil from "../util/doctor_api_util";

export const RECEIVE_DOCTORS = "RECEIVE_DOCTORS";
export const RECEIVE_DOCTOR = "RECEIVE_DOCTOR";
export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";

const receiveDoctors = (doctors) => {
    return {
        type: RECEIVE_DOCTORS,
        doctors
    }
}

const receiveDoctor = (doctor) => {
    return {
        type: RECEIVE_DOCTOR,
        doctor
    }
}

const receiveAppointment = (appointment) =>{
    return {
        type: RECEIVE_APPOINTMENT,
        appointment
    }
}

const removeAppointment = (appointmentId) =>{
    return {
        type: REMOVE_APPOINTMENT,
        appointmentId
    }
}


/*
1. getDoctors()
2. getDoctor(doctorId)
3. addAppointment(appointment)
4. deleteAppointment(appointmentId)
*/

export const getDoctors = () => {
    return (dispatch) => {
        return DoctorAPIUtil.getDoctors().then((doctors)=>{
            return dispatch(receiveDoctors(doctors))
        });
    }
}

export const getDoctor = (doctorId) => {
    return (dispatch) => {
        return DoctorAPIUtil.getDoctor(doctorId).then((doctor)=>{
            return dispatch(receiveDoctor(doctor))
        });
    }
}

export const addAppointment = (appointment) => {
    return (dispatch) => {
        return DoctorAPIUtil.addAppointment(appointment).then((appointment)=>{
            return dispatch(receiveAppointment(appointment))
        });
    }
}

export const deleteAppointment =(appointmentId)=>{
    return (dispatch) => {
        return DoctorAPIUtil.deleteAppointment(appointmentId).then(()=>{
            return dispatch(removeAppointment(appointmentId))
        });
    }
}
