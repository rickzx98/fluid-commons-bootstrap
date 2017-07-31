import ReactBootstrapDatePicker from 'react-bootstrap-date-picker';
import ReactImg from 'react-image';
import ReactLoading from 'react-loading';
import React from 'react';
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
export const DatePicker = ReactBootstrapDatePicker;
export { ResponsiveButton } from './ResponsiveButton';
export {DeleteModalBody} from './DeleteModalBody';
export {ImageUpload} from './ImageUpload';
export const Img = ReactImg;
export const Loading = ()=> {
  return <ReactLoading type="spin" color="#E67E22" height={39} width={39} delay={100}/>
};
