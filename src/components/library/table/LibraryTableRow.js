import { FontAwesome, ResponsiveButton } from '../../common/';
import { LABEL_DELETE, LABEL_EDIT } from '../../../labels/';

import { Library } from '../../../api/library/';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

export const LibraryTableRow = ({ library, removeLibrary }) => {
  return (<tbody>
    {library.map(lib => (
      <tr key={lib[Library.LIBRARY_ID]}>
        <td>{lib[Library.NAME]}</td>
        <td>{lib[Library.DEPARTMENT]}</td>
        <td><div>
          <Link className="btn btn-primary btn-xs" to={'/library/' + lib[Library.LIBRARY_ID]}>
            <FontAwesome name="pencil-square-o" size="lg" fixedWidth={true} />
            <span className="hidden-xs">{LABEL_EDIT}</span></Link>
          &nbsp;
          <ResponsiveButton onClick={() => { removeLibrary(lib); }}
            className="btn btn-danger btn-xs" label={LABEL_DELETE} icon={
              <FontAwesome name="trash" size="lg" fixedWidth={true} />
            } />
        </div></td>
      </tr>
    ))}
  </tbody>);
};
LibraryTableRow.propTypes = {
  removeLibrary: PropTypes.func.isRequired,
  library: PropTypes.array.isRequired
};
