import PropTypes from 'prop-types';
import React from 'react';
import {Library} from '../../../api/library/';
export const LibraryTableRow = ({library})=> {
  return (<tbody>
  {library.map(lib => (
    <tr key={lib[Library.LIBRARY_ID]}>
      <td>{lib[Library.NAME]}</td>
      <td>{lib[Library.DEPARTMENT]}</td>
    </tr>
  ))}
  </tbody>);
};
LibraryTableRow.propTypes = {
  library: PropTypes.array.isRequired
};
