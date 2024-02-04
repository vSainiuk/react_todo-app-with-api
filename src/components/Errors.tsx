/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { TodoContext } from '../contexts/TodoContext';

export const Errors: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(TodoContext);

  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        { hidden: !errorMessage },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => {
          setErrorMessage('');
        }}
      />
      {errorMessage}
      {/* Unable to update a todo */}
    </div>
  );
};
