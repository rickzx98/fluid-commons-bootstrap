import Iframe from 'react-iframe';
import React from 'react';
import ReactBootstrapDatePicker from 'react-bootstrap-date-picker';
import ReactFontAwesome from 'react-fontawesome';
import ReactImg from 'react-image';
import ReactLoading from 'react-loading';

export { CancelModalBody } from './CancelModalBody';
export { CancelModalFooter } from './CancelModalFooter';
export { BackButton } from './BackButton';
export { SearchSelector } from './SearchSelector';
export { Selector } from './Selector';
export { TextInput } from './TextInput';
export { CollapseHeader } from './CollapseHeader';
export { FormGroup } from './FormGroup';
export { Header } from './Header';
export { TextArea } from './TextArea';
export { ListForm } from './ListForm';
export { ResponsiveButton } from './ResponsiveButton';
export { DeleteModalBody } from './DeleteModalBody';
export { ImageUpload } from './ImageUpload';
export { PageHeader } from './PageHeader';
export { PageBody } from './PageBody';
export const Img = ReactImg;
export const Loading = () => {
  return (<ReactLoading type="spin" color="#E67E22" height={39} width={39} delay={100} />);
};
export const LoadingBalls = () => {
  return (<ReactLoading className="margin-auto" type="balls" color="#E67E22" height={39} width={50} delay={100} />)
}
export const IFrame = Iframe;
export const FontAwesome = ReactFontAwesome;
export const DatePicker = ReactBootstrapDatePicker;
