import React from 'react';
import SignIn from './../components/Forms/SignIn';
import './LoginReg.scss';

class Login extends React.Component {
  render(){
    return (
      <section>
        <SignIn />
      </section>
    )
  }
}

export default Login;