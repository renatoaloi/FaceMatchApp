import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { DrawerHomeRoute } from '../../modules/dashboard/routes/DrawerNavigator';
import Container from '../../layouts/Dashboard';
import { TrainPage } from '../../components/Train';


// refreshControl={
//     <RefreshControl
//         refreshing={loading}
//         onRefresh={getGroups}
//     />
// }

export const Train = ({ navigation }: DrawerHomeRoute) => {
    return (
        <React.Fragment>
            <Container title="FaceMatch (Treinamento)" back>
                <TrainPage />
            </Container>
        </React.Fragment>
    );
};
