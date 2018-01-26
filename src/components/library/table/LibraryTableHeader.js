import { LABEL_DEPARTMENT, LABEL_NAME } from '../../../labels/';

import React from 'react';

export const LibraryTableHeader = () => {
  return (<thead>
    <th>{LABEL_NAME}</th>
    <th>{LABEL_DEPARTMENT}</th>
    <th/>
  </thead>);
};
