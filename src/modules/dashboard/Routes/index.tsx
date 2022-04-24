import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../../pages/Home';
import { Groups } from '../../../pages/Groups';
import DrawerNavigator, { DrawerParamList } from './DrawerNavigator';
import { People } from '../../../pages/People';
import { Faces } from '../../../pages/Faces';
import { Train } from '../../../pages/Train';
import { Recog } from '../../../pages/Recog';

type StackParamList = {
    Dashboard: DrawerParamList;
    Home: undefined;
    Groups: undefined;
    People: undefined;
    Faces: undefined;
    Train: undefined;
    Recog: undefined;
};

//export type TermsOfUseRoute = StackScreenProps<StackParamList, 'TermsOfUse'>;

const Stack = createNativeStackNavigator<StackParamList>();

export default () => (
    <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ presentation: 'transparentModal' }}
        />
        <Stack.Screen
            name="Groups"
            component={Groups}
            options={{ presentation: 'transparentModal' }}
        />
        <Stack.Screen
            name="People"
            component={People}
            options={{ presentation: 'transparentModal' }}
        />
        <Stack.Screen
            name="Faces"
            component={Faces}
            options={{ presentation: 'transparentModal' }}
        />
        <Stack.Screen
            name="Train"
            component={Train}
            options={{ presentation: 'transparentModal' }}
        />
        <Stack.Screen
            name="Recog"
            component={Recog}
            options={{ presentation: 'transparentModal' }}
        />
    </Stack.Navigator>
);
