import React from 'react';
import {LABEL_NEW_LIBRARY} from '../../../labels/';
import {ResponsiveButton, FontAwesome} from '../../common/';
import {browserHistory} from 'react-router';


export const LibraryNewControl = () => {
  return (<ResponsiveButton
    onClick={onClick}
    icon={<FontAwesome name="plus" size="lg" fixedWidth={true}/>}
    className="btn btn-success" label={LABEL_NEW_LIBRARY}/>)
};

function onClick() {
  browserHistory.push('/library/new');
}
