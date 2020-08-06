import React, { Component } from 'react';
import Signup from '../components/Forms/Signup';
import './LoginReg.scss';

class Registration extends React.Component {
    render(){
      return (
        <section>
          <Signup />
        </section>
      )
    }
  }

export default Registration;