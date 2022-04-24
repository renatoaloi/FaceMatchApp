import React from 'react';
import {
    DrawerScreenProps,
    DrawerNavigationProp,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import DrawerContent from '../../../components/DrawerContent';
import { Home } from '../../../pages/Home';
import { Groups } from '../../../pages/Groups';
import { People } from '../../../pages/People';
import { Faces } from '../../../pages/Faces';
import { Train } from '../../../pages/Train';
import { Recog } from '../../../pages/Recog';

// type CommonParams = {
//     initial?: boolean;
//     params?: {
//         [key: string]: any;
//         screen?: string;
//     };
// };

export type DrawerParamList = {
    Home: undefined;
    Groups: undefined;
    People: undefined;
    Faces: undefined;
    Train: undefined;
    Recog: undefined;
};

export type DrawerHomeRoute = DrawerScreenProps<DrawerParamList, 'Home'>;
export type DrawerGroupsRoute = DrawerScreenProps<DrawerParamList, 'Groups'>;

// usage with useNavigation<here>
export type DrawerNavigationHomeProp = DrawerNavigationProp<DrawerParamList>;

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
    const theme = useTheme();
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: theme.colors.primary,
                },
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Groups" component={Groups} />
            <Drawer.Screen name="People" component={People} />
            <Drawer.Screen name="Faces" component={Faces} />
            <Drawer.Screen name="Train" component={Train} />
            <Drawer.Screen name="Recog" component={Recog} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
