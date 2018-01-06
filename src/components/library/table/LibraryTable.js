import React from 'react';
import PropTypes from 'prop-types';
import {LibraryTableHeader}from './LibraryTableHeader';
import {LibraryTableRow} from './LibraryTableRow';
export const LibraryTable = ({library})=> {
  return (<table className="table table-hover table-condensed table-striped">
    <LibraryTableHeader/>
    <LibraryTableRow library={library}/>
  </table>)
};

LibraryTable.propTypes = {
  library: PropTypes.array.isRequired
};
