import '../../images/upload-image.png';

import Dropzone from 'react-dropzone';
import { Img } from './';
import PropTypes from 'prop-types';
import React from 'react';

export class ImageUpload extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.onDrop = this.onDropFiles.bind(this);
    this.inputProps = {
      name: prop.name,
      required: prop.required
    };
  }

  onDropFiles(accepted) {
    console.log('accepted', accepted);
    if (accepted) {
      this.setState({file: accepted[0]});
    }
  }

  render() {
    return (<div className="image-upload books">
      <h4>{this.props.required && <span className="text-danger">*&nbsp;</span>}{this.props.label}</h4>
      <Dropzone multiple={false}
                accept="image/jpeg, image/png"
                onDrop={this.onDrop}
                className="book">
        {this.state.file ? <Img src={this.state.file ? this.state.file.preview : '/upload-image.png'}/> :
          <Img src={[this.props.value, '/upload-image.png']}/>}
      </Dropzone>
      <input {...this.inputProps} type="hidden"/>
    </div>);
  }
}

ImageUpload.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  upload: PropTypes.func
};

