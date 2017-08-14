import { FontAwesome, ResponsiveButton, SearchSelector, Selector } from '../../common/';
import { LABEL_ADD_MORE, LABEL_CANCEL, LABEL_SUBJECT_FIELD } from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const SubjectFieldTable = ({ data, subjectOptions,
  onChange, fields, isNewField, newField, cancelField,
  selectSubjectField, removeField, fieldOptions }) => {
  return (
    <table className="table width100pc no-padding">
      <thead>
        <tr>
          <th>{' '}</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) =>
          (
            <tr key={`${field.value}_${index}`}>
              <td className="padding-left-15px" width="3%">
                <ResponsiveButton onClick={() => {
                  removeField(index);
                }}
                  icon={<FontAwesome name="close" size="lg" fixedWidth={true} />}
                  className="btn btn-danger btn-xs"
                  label={''} />
              </td>
              <td>
                <SearchSelector key={`${field.value}_${index}`}
                  labelKey="label"
                  multiple={field.repeatable}
                  label={field.label}
                  name={field.value}
                  value={data[field.value]}
                  options={subjectOptions}
                  onChange={onChange} />
              </td>
            </tr>))}
      </tbody>
      <tfoot>
        <tr><td colSpan={2}>
          {isNewField && <Selector
            onChange={selectSubjectField}
            label={LABEL_SUBJECT_FIELD}
            name="subjectField"
            options={fieldOptions} />}
          <div className="btn-toolbar padding-left-15px">
            {!isNewField &&
              <ResponsiveButton onClick={newField} className="btn btn-success"
                icon={<FontAwesome name="plus" size="lg" fixedWidth={true} />}
                label={LABEL_ADD_MORE} />}
            {isNewField &&
              <ResponsiveButton onClick={cancelField} className="btn btn-danger"
                icon={<FontAwesome name="close" size="lg" fixedWidth={true} />}
                label={LABEL_CANCEL} />}
          </div>
        </td></tr>
      </tfoot>
    </table>);
};

SubjectFieldTable.propTypes = {
  data: PropTypes.object.isRequired,
  fieldOptions: PropTypes.array.isRequired,
  subjectOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  isNewField: PropTypes.bool.isRequired,
  newField: PropTypes.func.isRequired,
  cancelField: PropTypes.func.isRequired,
  selectSubjectField: PropTypes.func.isRequired,
  removeField: PropTypes.func.isRequired
};
