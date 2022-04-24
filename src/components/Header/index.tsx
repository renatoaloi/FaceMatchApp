import React from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TopBar, Badge, Notification, styles } from './styles';

export type MenuProps = {
    icon: string;
    title: string;
    onPress: () => void;
};

export interface HeaderProps {
    title: string;
    back?: boolean;
    edit?: boolean;
    share?: boolean;
    drawer?: boolean;
    remove?: boolean;
    notifications?: boolean;
    onEdit?: () => void;
    onShare?: () => void;
    onRemove?: () => void;
    onNotification?: () => void;
    menu?: Array<MenuProps>;
}

const Header = ({
    title,
    back,
    edit,
    share,
    drawer,
    remove,
    notifications,
    onEdit = () => { },
    onShare = () => { },
    onRemove = () => { },
    onNotification = () => { },
    menu,
}: HeaderProps) => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [menuLayout, setMenuLayout] = React.useState<LayoutRectangle>(
        {} as LayoutRectangle,
    );

    const navigation = useNavigation();

    const handleDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
    const handleBack = () => navigation.goBack();
    const handleEdit = () => onEdit();
    const handleShare = () => onShare();
    const handleNotification = () => onNotification();

    const handleMenuItemClick = (item: MenuProps) => {
        item.onPress();
        setShowMenu(false);
    };

    return (
        <TopBar>
            {drawer && (
                <Appbar.Action icon="dehaze" color="white" onPress={handleDrawer} />
            )}

            {back && (
                <Appbar.Action icon="arrow-back" color="white" onPress={handleBack} />
            )}

            <Appbar.Content title={title} color="white" />

            {edit && <Appbar.Action icon="edit" color="white" onPress={handleEdit} />}

            {remove && (
                <Appbar.Action icon="delete" color="white" onPress={onRemove} />
            )}

            {menu && (
                <React.Fragment>
                    <Appbar.Action
                        onLayout={(event: LayoutChangeEvent) => {
                            setMenuLayout(event.nativeEvent.layout);
                        }}
                        icon="more-vert"
                        color="white"
                        onPress={() => setShowMenu(true)}
                    />
                    <Menu
                        visible={showMenu}
                        onDismiss={() => setShowMenu(false)}
                        contentStyle={styles.menuContent}
                        anchor={{
                            x: menuLayout.x + 32,
                            y: menuLayout.y * 7,
                        }}>
                        {menu.map((item, index) => (
                            <Menu.Item
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                onPress={() => handleMenuItemClick(item)}
                            />
                        ))}
                    </Menu>
                </React.Fragment>
            )}

            {share && (
                <Appbar.Action icon="share" color="white" onPress={handleShare} />
            )}

            {notifications && (
                <Notification>
                    <Badge visible={true} size={8} />
                    <Appbar.Action
                        icon="notifications"
                        color="white"
                        onPress={handleNotification}
                    />
                </Notification>
            )}
        </TopBar>
    );
};

export default Header;
