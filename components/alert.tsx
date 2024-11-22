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
        <div className="p-4 bg-purple-100/80 text-purple-500">
          <Container>
            <div className="text-center text-lg before:inline-block before:w-6 before:h-6 before:mr-2 before:exclamation">
              <p className="inline-block">
                3 December is the International Day of Persons with Disabilities
                #PositivelyPurple
              </p>
              <button
                type="button"
                className="font-bold underline inline-block ml-2"
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
