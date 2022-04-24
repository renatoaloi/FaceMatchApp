import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { DrawerHomeRoute } from '../../modules/dashboard/routes/DrawerNavigator';
import Container from '../../layouts/Dashboard';
import { FacesPage } from '../../components/Faces';

export const Faces = ({ navigation }: DrawerHomeRoute) => {
    return (
        <React.Fragment>
            <Container title="FaceMatch (Faces)" back>
                <FacesPage />
            </Container>
        </React.Fragment>
    );
};
