import Container from './container';
import React, { useState } from 'react';

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="p-4 bg-yellow-100/80 text-yellow-700">
          <Container>
            <div className="text-center text-sm before:inline-block before:w-6 before:h-6 before:mr-2 before:exclamation">
              Currently working on{' '}
              <span className="font-medium">version 1.0</span> for a better user
              experience.{' '}
              <button
                type="button"
                className="font-bold underline"
                onClick={onDismiss}
              >
                Dismiss
              </button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Alert;
