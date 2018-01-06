import {PageBody, PageHeader} from '../common/';
import React from 'react';
import PropTypes from 'prop-types';
import {LABEL_LIBRARY} from '../../labels/';
import {LibraryTable} from './table/LibraryTable';
import {LibraryControls} from './controls/LibraryControls';
export const LibraryPageBody = ({ajaxGlobal, library})=> {
  return (<div className="page library">
    <PageHeader loading={ajaxGlobal.started}
                spinIcon={false} iconName="bookmark"
                label={LABEL_LIBRARY}/>
    <PageBody>
      <span>
      <LibraryControls/>
      <LibraryTable library={library}/>
      </span>
    </PageBody>
  </div>);
};

LibraryPageBody.propTypes = {
  library: PropTypes.array.isRequired,
  ajaxGlobal: PropTypes.object.isRequired
};
