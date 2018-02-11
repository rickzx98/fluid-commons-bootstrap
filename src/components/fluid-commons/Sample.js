import * as actions from '../../actions/BookActions';

import { FluidForm } from './';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnSubmit = this.onSubmit.bind(this);
    this.thisOnFailed = this.onFailed.bind(this);
  }
  onSubmit(parameter) {
    console.log('submit', parameter);
  }
  onFailed(message) {
    console.log('message', message);
  }
  render() {
    return (<div><h1>Sample Page</h1>
      <FluidForm
        name="sampleForm"
        onSubmit={this.thisOnSubmit}
        onFailed={this.thisOnFailed}
        specs={[{
          field: 'name',
          data: { require: true }
        }
        ]}>
        <input name="name" />
        <button type="submit" >Submit</button>
      </FluidForm>
    </div >);
  }
}

function mapStateToProps(state) {
  return {
    ajaxGlobal: state.ajaxGlobal,
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

Sample.propTypes = {
  books: PropTypes.array,
  actions: PropTypes.object.isRequired
};

export const ConnectSample = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);
