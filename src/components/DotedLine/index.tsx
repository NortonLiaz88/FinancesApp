import Svg, {G, Rect} from 'react-native-svg';
import theme from '../../styles/theme';

interface Props {
    dashes: number[];
    spacing: number;
}

export const DotedLine: React.FC<Props> = ({dashes, spacing}) => {
  return (
    <>
      <Svg height="11" width="100%">
        <G>
          {dashes.map((_, index) => (
            <Rect
              key={index}
              x="11"
              y="10"
              width="10"
              height="1"
              fill={theme.colors.endGradientColor}
              translateX={spacing * index}
            />
          ))}
        </G>
      </Svg>
    </>
  );
};
