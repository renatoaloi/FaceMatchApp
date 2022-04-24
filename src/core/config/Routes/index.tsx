import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../../../modules/dashboard/Routes';
//import OnBoard from '~/modules/onboard/routes';

const Routes = () => {
    const linking = {
        prefixes: ['facematch://'],
    };

    return (
        <NavigationContainer linking={linking}>
            <Dashboard />
            {/* {isAuthenticated ? <Dashboard /> : <OnBoard />} */}
        </NavigationContainer>

    );
};

export default Routes;
