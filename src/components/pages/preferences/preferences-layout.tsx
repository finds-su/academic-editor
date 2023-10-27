import React from 'react';
import { Separator } from '@/components/ui/separator.tsx';
import { SidebarNav } from '@/components/pages/preferences/sidebar-nav.tsx';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import pages from '@/constants/pages.ts';

interface Props {
    children: React.ReactNode;
}

export default function PreferencesLayout() {
    const { t } = useTranslation();

    const sidebarNavItems = [
        {
            title: t('preferences.profile.header'),
            href: pages.preferencesProfile,
        },
        {
            title: t('preferences.account.header'),
            href: pages.preferencesAccount,
        },
        {
            title: t('preferences.appearance.header'),
            href: pages.preferencesAppearance,
        },
        {
            title: t('preferences.notifications.header'),
            href: pages.preferencesNotifications,
        },
        {
            title: t('preferences.display.header'),
            href: pages.preferencesDisplay,
        },
    ];

    return (
        <div className="hidden space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">{t('preferences.header')}</h2>
                <p className="text-muted-foreground">{t('preferences.description')}</p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-2xl">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
