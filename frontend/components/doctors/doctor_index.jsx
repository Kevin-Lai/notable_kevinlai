import React from 'react';

class DoctorIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getDoctors();
    }

    render(){

        let doctorsList = this.props.doctors.map((doctor)=>{
            return (
                <li key={doctor.first_name + doctor.last_name}>
                    {doctor.last_name}, {doctor.first_name}
                    <ul>
                        {
                            doctor.appointments.map((appointment)=>{
                                return (
                                    <li key={doctor.id + appointment.patient_first_name + appointment.patient_last_name}>
                                        name: {appointment.patient_first_name + " " + appointment.patient_last_name}, 
                                        date: {appointment.date}, 
                                        time: {appointment.time}, 
                                        kind: {appointment.kind}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            )
        });

        return (
            <div>
                <h2>Physicians</h2>
                <ul>
                    {doctorsList}
                </ul>
            </div>
        )
    }
}

export default DoctorIndex;