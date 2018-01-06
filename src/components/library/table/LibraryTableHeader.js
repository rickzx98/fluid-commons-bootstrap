import React from 'react';
import {LABEL_NAME, LABEL_DEPARTMENT} from '../../../labels/';

export const LibraryTableHeader = ()=> {
  return (<thead>
  <th>{LABEL_NAME}</th>
  <th>{LABEL_DEPARTMENT}</th>
  </thead>)
};
