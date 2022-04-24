import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from './core/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SnackbarProvider } from './core/context/Snackbar'
import Routes from './core/config/Routes'

export default () => {
    const settings = { icon: props => <Icon {...props} /> }
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <PaperProvider theme={theme} settings={settings}>
                    <SnackbarProvider>
                        <StatusBar
                            translucent
                            barStyle="light-content"
                            backgroundColor="rgba(51, 51, 51, 0.24)"
                        />
                        <Routes />
                    </SnackbarProvider>
                </PaperProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}