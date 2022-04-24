import React from 'react';
import { DrawerHomeRoute } from '../../modules/dashboard/routes/DrawerNavigator';
import Container from '../../layouts/Dashboard';
import { HomePage } from '../../components/Home';

export const Home = ({ navigation }: DrawerHomeRoute) => {
    return (
        <React.Fragment>
            <Container title="FaceMatch" drawer>
                <HomePage navigation={navigation} />
            </Container>
        </React.Fragment>
    );
};
