// steps/steps.jsx

'use client';

import React from 'react';
import FirstStep from './firstStep/firstStep';
import SecondStep from './secondStep/secondStep';
import ThirdStep from './thirdStep/thirdStep';
import FourthStep from './fourthStep/fourthStep';

function Steps({ activeStep, handleNext }) {
    const renderActiveStep = (step) => {
        console.log("Rendering step:", step);
        switch (step) {
            case 1:
                return <FirstStep step={step} />;
            case 2:
                return <SecondStep step={step} handleNext={handleNext} />;
            case 3:
                return <ThirdStep step={step} />;
            case 4:
                return <FourthStep />;
            // case 5:
            //     return <FifthStep />;
            // case 6:
            //     return <SixthStep />;
            // case 7:
            //     return <SeventhStep />;
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <div>
            {renderActiveStep(activeStep)}
        </div>
    );
}

export default Steps;
