import { LibraryTableHeader } from './LibraryTableHeader';
import { LibraryTableRow } from './LibraryTableRow';
import PropTypes from 'prop-types';
import React from 'react';

export const LibraryTable = ({ library, removeLibrary }) => {
  return (<table className="table table-hover table-condensed table-striped">
    <LibraryTableHeader />
    <LibraryTableRow removeLibrary={removeLibrary} library={library} />
  </table>);
};

LibraryTable.propTypes = {
  removeLibrary: PropTypes.func.isRequired,
  library: PropTypes.array.isRequired
};
