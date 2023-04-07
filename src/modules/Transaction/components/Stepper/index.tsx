import React, {useMemo, useState} from 'react';
import * as Progress from 'react-native-progress';
import {StepperWrapper} from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import theme from '../../../../styles/theme';
import { TransactionFirstStep } from '../FirstStep';

export const TransactionStepper = () => {
  const [step, setStep] = useState(1);
  const steps = 4;

  const stepProgress = useMemo(() => {
    const progress = step / steps;
    return progress;
  }, [step]);

  return (
    <StepperWrapper>
      <Progress.Bar
        color={theme.colors.initialGradientColor}
        progress={stepProgress}
        width={wp(90)}
        borderWidth={0}
      />
      {(() => {
        switch (step) {
          case 1:
            return <TransactionFirstStep />
        //   case 2:
        //     return <Playing handleClick={handleClick} />
        //   case 3:
        //     return <Won handleClick={handleClick} />
        //   case 4:
        //     return <Lost handleClick={handleClick} />
          default:
            return null
        }
      })()}
    </StepperWrapper>
  );
};
