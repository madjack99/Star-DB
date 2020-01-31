import React from 'react';

const withChildFunction = fn => WrappedComponent => {
  return props => {
    return <WrappedComponent {...props}>{fn}</WrappedComponent>;
  };
};

export default withChildFunction;
