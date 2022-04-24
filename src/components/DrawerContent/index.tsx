import React from 'react';
import { StyleSheet } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Avatar, Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { dashboardRoutes } from '../../modules/dashboard/Menu';
import { useSnackbar } from '../../core/context/Snackbar';
import { Icon, Footer, Gradient, Section } from './styles';

const DrawerContent = (props: DrawerContentComponentProps) => {
    const { index, routeNames } = props.state;
    const route = routeNames[index];

    const snackbar = useSnackbar();

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scrollView}>
            <Gradient>
                <Section>
                    {dashboardRoutes.map((item, key) => (
                        <DrawerItem
                            key={key}
                            label={item.label}
                            focused={route === item.route}
                            onPress={() => props.navigation.navigate(item.route)}
                            icon={({ focused, size }) => (
                                <Icon name={item.icon} size={size} focused={focused} />
                            )}
                            activeBackgroundColor="rgba(128, 0, 192, 0.12)"
                            labelStyle={styles.drawerItemLabel}
                            style={styles.drawerItem}
                        />
                    ))}
                </Section>
                <Footer>
                    <DrawerItem
                        label="Sair"
                        onPress={() => { }}
                        icon={({ size }) => <Icon name="exit-to-app" size={size} />}
                        activeBackgroundColor="rgba(128, 0, 192, 0.12)"
                        labelStyle={styles.drawerItemLabel}
                        style={styles.drawerItem}
                    />
                </Footer>
            </Gradient>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        minHeight: '100%',
    },
    drawerItem: {
        borderRadius: 20,
        paddingVertical: 0,
        marginVertical: 1,
        height: RFValue(40),
    },
    drawerItemLabel: {
        color: 'white',
        marginTop: -RFValue(3),
    },
    user: {
        marginTop: -RFValue(4),
        paddingVertical: RFValue(30),
        backgroundColor: 'rgba(51, 51, 51, 0.08)',
    },
    userTitle: {
        color: 'white',
        fontWeight: '500',
        fontSize: RFValue(16),
        paddingLeft: RFValue(15),
    },
    userSubtitle: {
        color: 'white',
        opacity: 0.56,
        paddingLeft: RFValue(15),
    },
});

export default DrawerContent;
