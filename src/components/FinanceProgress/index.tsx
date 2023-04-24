import React, { memo } from 'react'
import * as Progress from 'react-native-progress';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import theme from '../../styles/theme';

interface IProgress {
  progress: number;
}

const FinanceProgress: React.FC<IProgress> = ({progress}: IProgress) => {
  return (
    <Progress.Bar
    color={theme.colors.initialGradientColor}
    progress={progress}
    width={wp(90)}
    borderWidth={0}
  />
  )
}

export default memo(FinanceProgress);