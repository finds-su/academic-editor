import { Theme } from '@radix-ui/themes';
import * as Toast from '@radix-ui/react-toast';
import { Toaster } from '@/components/ui/toaster.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';

interface Props {
    children: React.ReactNode
}

export default function Providers(props: Props) {
    return <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <Toast.Provider swipeDirection="right">
            {props.children}
            <Toaster />
        </Toast.Provider>
    </ThemeProvider>
}