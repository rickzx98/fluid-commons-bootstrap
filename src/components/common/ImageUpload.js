import Dropzone from 'react-dropzone';
import React from 'react';
import PropTypes from 'prop-types';
import '../../images/upload-image.png';
export class ImageUpload extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.onDrop = this.onDropFiles.bind(this);
    this.inputProps = {
      name: prop.name
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
      <h4>{this.props.label}</h4>
      <Dropzone multiple={false}
                accept="image/jpeg, image/png"
                onDrop={this.onDrop}
                className="book">
        <img src={this.state.file ? this.state.file.preview : '/upload-image.png'}/>
      </Dropzone>
      <input {...this.inputProps} type="hidden"/>
    </div>);
  }
}

ImageUpload.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

