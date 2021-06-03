import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoginWrapper from './Login.wrapper';
import {performLogin} from './Login.actions';

class LoginContainer extends PureComponent {
  // componentDidMount() {
  //   const { actions } = this.props;
  //   actions.login({ username: 'ankit@gmail.com', password: 'password' });
  // }

  render() {
    const { actions,data } = this.props;
    return <LoginWrapper data={data} actions={actions} />;
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  data: state.login.data,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    loginS: loginDetails => {
      return dispatch(performLogin(loginDetails));      
    },
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer),
);
