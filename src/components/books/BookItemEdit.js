import { LABEL_ADD_SUBJECT, LABEL_BOOK_INFORMATION, LABEL_BOOK_SUBJECTS, LABEL_SAVE } from '../../labels/';

import { BookInformation } from './edit-page/BookInformation';
import { ConnectSubjectsPage } from '../../containers/BookSubjectPage';
import PropTypes from 'prop-types';
import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

export class BookItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectTab = this.onSelect.bind(this);
    }
    componentWillMount() {
        this.setState({});
    }
    onSelect(selectedKey) {
        this.setState({ selectedKey });
    }
    render() {
        return (
            <form onChange={(event) => {
                event.preventDefault();
                this.props.onChange(event.target);
            }} className="form container-fluid">
                <div className="col-sm-12 form-group">
                    <button className="btn btn-primary" type="submit">{LABEL_SAVE}</button>
                    {this.state.selectedKey === 'bookSubjects' ? <button className="btn btn-success" type="button">{LABEL_ADD_SUBJECT}</button> : ''}
                </div>
                <Tabs onSelect={this.onSelectTab} id="bookItemEditTabs" defaultActiveKey={'bookInfo'}>
                    <Tab title={LABEL_BOOK_INFORMATION} eventKey={'bookInfo'}><BookInformation /></Tab>
                    <Tab title={LABEL_BOOK_SUBJECTS} eventKey={'bookSubjects'}><ConnectSubjectsPage /></Tab>
                </Tabs>
            </form>);
    }
}

BookItemEdit.propTypes = {
    onChange: PropTypes.func.isRequired
};