import React from 'react';
import Snackbar from '../../../components/Snackbar';
import { Type } from '../../../components/Snackbar/styles';

interface Message {
    type: Type;
    text: string;
}

interface SnackbarContextInterface {
    error: (text: string) => void;
    warning: (text: string) => void;
    info: (text: string) => void;
    success: (text: string) => void;
}

const SnackbarContext = React.createContext<SnackbarContextInterface>(
    {} as SnackbarContextInterface,
);

export const useSnackbar = () => React.useContext(SnackbarContext);

export const SnackbarProvider: React.FC = ({ children }) => {
    const [message, setMessage] = React.useState<Message>({} as Message);

    const Context = React.useMemo(
        () => ({
            error: (text: string) => setMessage({ text, type: 'error' }),
            warning: (text: string) => setMessage({ text, type: 'warning' }),
            success: (text: string) => setMessage({ text, type: 'success' }),
            info: (text: string) => setMessage({ text, type: 'info' }),
        }),
        [setMessage],
    );

    return (
        <SnackbarContext.Provider value={Context}>
            {children}
            <Snackbar
                type={message.type}
                message={message.text}
                visible={!!message.text}
                onDismiss={() => setMessage({} as Message)}
            />
        </SnackbarContext.Provider>
    );
};
