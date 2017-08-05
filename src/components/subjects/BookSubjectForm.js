import { getFirstIndicatorSelector, getSubjectHeadingsForDropdown } from '../../selectors/subjectSelectors';

import { LABEL_TYPE_OF_HEADING } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';
import { Selector } from '../common/';
import { Subject } from '../../api/subjects';

export const BookSubjectForm = ({ onChange, subjectFields, subjectHeadings, managedSubject }) => {
    return (<form className="form container-fluid">
        <Selector onChange={onChange} name={Subject.TYPE_OF_HEADINGS}
            label={LABEL_TYPE_OF_HEADING}
            value={managedSubject.subjectCode} options={getSubjectHeadingsForDropdown(subjectHeadings)} />
        {managedSubject.subjectCode && <Selector value={managedSubject.data[Subject.FIRST_INDICATOR]} onChange={onChange} name={Subject.FIRST_INDICATOR}
            {...getFirstIndicatorSelector(managedSubject.subjectCode) } />}
    </form>);
};

BookSubjectForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    subjectHeadings: PropTypes.array.isRequired,
    subjectFields: PropTypes.object.isRequired,
    managedSubject: PropTypes.object.isRequired
}