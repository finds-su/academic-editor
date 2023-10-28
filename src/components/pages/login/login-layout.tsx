import { UserAuthForm } from '@/components/pages/login/user-auth-form.tsx';
import { useTranslation } from 'react-i18next';
import { IconJarLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

export default function LoginLayout() {
    const { t } = useTranslation();

    return (
        <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <IconJarLogoIcon className='className="h-6 w-6"' />
                    <span className="pl-2">{t('menu.app')}</span>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">{t('login.createAccount')}</h1>
                        <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        {t('login.continueClicking')}{' '}
                        <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                            {t('login.termsOfUse')}
                        </a>{' '}
                        {t('login.and')}{' '}
                        <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
                            {t('login.privacy')}
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
