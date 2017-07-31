import React from 'react';
import {LABEL_TITLE, LABEL_AUTHOR, LABEL_PUBLISHER, LABEL_ISBN, LABEL_SUBJECT, LABEL_LCCN, LABEL_OCLC, LABEL_GO} from '../../labels/';
import {CollapseHeader, TextInput, ResponsiveButton, Loading} from '../common/';
import {GoogleBooks} from '../../api/google-books/';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export const SearchFilter = ({onSearchFilterChange, onSearchFilterSubmit, googleBooks, ajaxGlobal})=> {
  return (<CollapseHeader panelStyle="panel panel-default"
                          heading={<h4><FontAwesome size="lg" fixedWidth={true} name="search"/>&nbsp;Search Filter</h4>}>
    <form onChange={onSearchFilterChange} onSubmit={onSearchFilterSubmit} name="searchBooks">
      <div className="col-sm-12"><TextInput value={googleBooks.query[GoogleBooks.TITLE]} label={LABEL_TITLE}
                                            name={GoogleBooks.TITLE}/></div>
      <div className="col-sm-6">
        <TextInput value={googleBooks.query[GoogleBooks.AUTHOR]}
                   label={LABEL_AUTHOR} name={GoogleBooks.AUTHOR}/>
        <TextInput value={googleBooks.query[GoogleBooks.PUBLISHER]}
                   label={LABEL_PUBLISHER} name={GoogleBooks.PUBLISHER}/>
        <TextInput value={googleBooks.query[GoogleBooks.SUBJECT]}
                   label={LABEL_SUBJECT} name={GoogleBooks.SUBJECT}/>
      </div>
      <div className="col-sm-6">
        <TextInput value={googleBooks.query[GoogleBooks.ISBN]}
                   label={LABEL_ISBN} name={GoogleBooks.ISBN}/>
        <TextInput value={googleBooks.query[GoogleBooks.LCCN]}
                   label={LABEL_LCCN} name={GoogleBooks.LCCN}/>
        <TextInput value={googleBooks.query[GoogleBooks.OCLC]}
                   label={LABEL_OCLC} name={GoogleBooks.OCLC}/>
      </div>
      <div className="btn-group btn-group-md col-sm-12 clear-fix">
        {ajaxGlobal.started ? <div className="pull-right"><Loading /></div> :
          <ResponsiveButton delay={200} className="btn btn-warning pull-right" type="submit" label={LABEL_GO} icon={
          <FontAwesome name="filter" size="lg" fixedWidth={true}/>
          }/>}
      </div>
    </form>
  </CollapseHeader>);
};

SearchFilter.propTypes = {
  ajaxGlobal: PropTypes.object.isRequired,
  googleBooks: PropTypes.object.isRequired,
  onSearchFilterChange: PropTypes.func.isRequired,
  onSearchFilterSubmit: PropTypes.func.isRequired
};
