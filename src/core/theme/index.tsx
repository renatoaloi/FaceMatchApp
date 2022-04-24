import { PlatformOSType } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import { Fonts, Font } from 'react-native-paper/src/types';

// HelperText 12px/normal
// Caption 12px/normal
// Text 14px/normal
// Paragraph 14px/normal
// Subheading 16px/normal
// Title 20px/normal
// Headline 24px/normal

// https://reactnavigation.org/docs/themes

type FontType = {
  [platform in PlatformOSType | 'default']?: Partial<Fonts> & {
    bold: Font;
  };
};

// https://callstack.github.io/react-native-paper/fonts.html

const fontConfig: FontType = {
  default: {
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
  },
};

// https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.tsx

const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    buttonLinearGradient: ['#502eac', '#8484dd'],
    primary: '#502eac', // Purple Heart
    blueLight: '#8484dd', // Portage
    secondary: '#05d481', // Caribbean Green
    text: 'rgba(51, 51, 51, 0.56)',
    error: '#e57373',
    warning: '#ffb74d',
    info: '#4fc3f7',
    success: '#81c784',
  },
  fonts: configureFonts(fontConfig as any) as any,
};

export default theme;
