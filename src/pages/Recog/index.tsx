import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { DrawerHomeRoute } from '../../modules/dashboard/routes/DrawerNavigator';
import Container from '../../layouts/Dashboard';
import { RecogPage } from '../../components/Recog';

export const Recog = ({ navigation }: DrawerHomeRoute) => {
    return (
        <React.Fragment>
            <Container title="FaceMatch (Identificar)" back>
                <RecogPage />
            </Container>
        </React.Fragment>
    );
};
