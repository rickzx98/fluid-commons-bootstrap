import * as actions from '../../actions/BookActions';

import { FluidForm } from './';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.thisOnSubmit = this.onSubmit.bind(this);
    this.thisOnFailed = this.onFailed.bind(this);
  }
  onSubmit(parameter) {
    const { name } = parameter;
    console.log('name', name());
  }
  onFailed(error) {
    this.setState({ message: error.error.message });
    console.log(this.state);
  }
  render() {
    return (<div><h1>Sample Page</h1>
      {this.state.message || ''}
      <button type="button" onClick={() => {
        FluidForm.submit('sampleForm');
      }}>Submit</button>
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
