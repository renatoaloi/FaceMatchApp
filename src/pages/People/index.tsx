import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { DrawerHomeRoute } from '../../modules/dashboard/routes/DrawerNavigator';
import Container from '../../layouts/Dashboard';
import { PeoplePage } from '../../components/People';

export const People = ({ navigation }: DrawerHomeRoute) => {
    return (
        <React.Fragment>
            <Container title="FaceMatch (Pessoas)" back>
                <PeoplePage />
            </Container>
        </React.Fragment>
    );
};
