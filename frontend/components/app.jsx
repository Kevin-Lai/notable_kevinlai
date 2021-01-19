import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoctorIndexContainer from './doctors/doctor_index_container';

/// TODO: create the rest
// import DoctorShowContainer from './doctors/doctor_show_container';
// import CreateAppointmentFormContainer from './appointments/create_appointment_form_container';

const App = ({ children }) => (
  <div>
    <h2>Notable</h2>
    <Switch>
      <Route exact path="/" component={DoctorIndexContainer} />
      {/* <Route path="/appointments/new" component={CreateAppointmentFormContainer} />
      <Route exact path="/doctors/:doctorId" component={DoctorShowContainer} /> */}
    </Switch>
  </div>
);

export default App;