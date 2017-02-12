import React from 'react';
import FilterLink from '../containers/FilterLink';
import VisibilityTypes from '../enum/VisibilityTypes';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={VisibilityTypes.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={VisibilityTypes.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={VisibilityTypes.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;