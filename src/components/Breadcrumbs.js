import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Interactive from 'react-interactive';
import s from '../styles/style';

const breadCrumbTitles = {
  '': 'Home',
  example: 'Example',
  steps: 'Steps',
  '1': 'Step 1',
  '2': 'Step 2',
  '3': 'Step 3',
  '4': 'Step 4',
  '5': 'Step 5',
  '6': 'Step 6',
  '7': 'Step 7',
  '8': 'Step 8',
  '9': 'Step 9',
  '10': 'Step 10',
  '11': 'Step 11',
  '12': 'Step 12',
  '13': 'Step 13',
  '14': 'Step 14'
}

function BreadcrumbsItem({ match }) {
  const title = breadCrumbTitles[match.url.split('/').slice(-1)];
  const to = title === undefined ? '/' : match.url;

  return (
    <span>
      <Interactive
        as={Link}
        to={to}
      >{title || 'Page Not Found'}</Interactive>
      {!match.isExact && title && ' / '}
      {title &&
        <Route path={`${match.url === '/' ? '' : match.url}/:path`} component={BreadcrumbsItem} />
      }
    </span>
  );
}

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
};

export default function Breadcrumbs() {
  return (
    <Route path="/" component={BreadcrumbsItem} />
  );
}