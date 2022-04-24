import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { DrawerHomeRoute } from '../../modules/dashboard/routes/DrawerNavigator';
import Container from '../../layouts/Dashboard';
import { GroupsPage } from '../../components/Groups';


// refreshControl={
//     <RefreshControl
//         refreshing={loading}
//         onRefresh={getGroups}
//     />
// }

export const Groups = ({ navigation }: DrawerHomeRoute) => {
    return (
        <React.Fragment>
            <Container title="FaceMatch (Grupo de Pessoas)" back>
                <GroupsPage />
            </Container>
        </React.Fragment>
    );
};
