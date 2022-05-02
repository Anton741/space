import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import React from 'react';

import dictionary from './dictionary';

const resolveIconId = name => {
  return pathOr('', [name, 'id'], dictionary);
};

const Icon = props => {
  const { className, name, ...rest } = props;

  return (
    <svg className={className} {...rest}
    >
      <use xlinkHref={`#${resolveIconId(name)}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
