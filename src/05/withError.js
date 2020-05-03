import React from 'react';
import withStyles,{ css } from '../04/withStyles';

export default function(defaultMessage) {
  return WrappedComponent => {
    const { displayName, name: componentName } = WrappedComponent;
    const WrappedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMessage, styles, ...props }) {
      return (
        <>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div> }
        </>
      )
    }

    ComponentWithError.defaultProps = {
      errorMessage: defaultMessage,
    }

    ComponentWithError.displayName = `withError(${WrappedComponentName})`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}