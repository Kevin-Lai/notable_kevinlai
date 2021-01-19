import {
    RECEIVE_DOCTORS,
    RECEIVE_DOCTOR,
    RECEIVE_APPOINTMENT,
    REMOVE_APPOINTMENT,
} from '../actions/doctor_actions';
  
const DoctorsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
  
    switch (action.type) {
        case RECEIVE_DOCTORS:
            //debugger
            newState = action.doctors;
            return newState;
        case RECEIVE_DOCTOR:
            newState[action.doctor.id] = action.doctor;
            return newState;
        case RECEIVE_APPOINTMENT:
            newState[action.appointment.id] = action.appointment;
            return newState;
        case REMOVE_APPOINTMENT:
            delete newState[action.appointmentId];
            return newState;    
        default:
            return state;
    }
}
  
export default DoctorsReducer;