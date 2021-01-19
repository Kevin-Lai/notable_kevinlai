import { connect } from 'react-redux';
import { getDoctors } from '../../actions/doctor_actions';
import DoctorIndex from './doctor_index';

const mstp = (state) =>{
    // debugger
    return {
        doctors: Object.values(state.doctors)
    }
}

const mdtp = (dispatch) => {
    return {
        getDoctors: () => dispatch(getDoctors())
    }
}

export default connect(mstp, mdtp)(DoctorIndex);