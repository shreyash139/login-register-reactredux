import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterWrapper from './Register.wrapper';
import { performRegister} from './Register.actions';

class LoginContainer extends PureComponent {
  
  render() {
    const {loading, error, data, actions} = this.props
    return <RegisterWrapper loading={loading} error={error} data={data} actions={actions}/>;
  }
}

const mapStateToProps = state => ({
  loading: state.register.loading,
  error: state.register.error,
  data: state.register.data,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    register: regDetails => {
      return dispatch(performRegister(regDetails));
    },
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer),
);