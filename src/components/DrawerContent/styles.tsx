import styled from 'styled-components/native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { List } from 'react-native-paper';

type IconProps = {
  focused?: boolean;
};

export const Icon = styled(MaterialIcons).attrs((props: IconProps) => ({
  opacity: props.focused ? 1 : 0.56,
})) <IconProps>`
  opacity: ${props => props.opacity};
  color: white;
`;

type GradientProps = { theme: ReactNativePaper.Theme } & LinearGradientProps;

export const Gradient = styled(LinearGradient).attrs(
  (props: GradientProps) => ({
    start: { x: 0, y: 0.5 },
    end: { x: 0, y: 1 },
    colors: ['#8000c0', '#8000fa'],
  }),
) <GradientProps>`
  flex: 1;
`;

export const Section = styled(List.Section)`
  margin-top: ${RFValue(25)}px;
`;

export const Footer = styled(List.Section)`
  margin-top: ${RFPercentage(10)}px;
`;
