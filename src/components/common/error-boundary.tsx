import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';
import { ErrorInfo, ReactNode } from 'react';

function Fallback(props: FallbackProps) {
    const {t} = useTranslation()

    return (
        <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>{t("errorBoundary.header")}</AlertTitle>
            <AlertDescription>
                {t("errorBoundary.renderError")}
            </AlertDescription>
        </Alert>
    );
}

interface Props {
    children: ReactNode
}

const logError = (error: Error, info: ErrorInfo) => {
    console.log(error, info)
    // TODO Do something with the error, e.g. log to an external API
};

export default function ErrorBoundary(props: Props) {
    return <ReactErrorBoundary
        FallbackComponent={Fallback}
        onError={logError}
    >
        {props.children}
    </ReactErrorBoundary>;
}