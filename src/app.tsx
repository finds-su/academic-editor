import React, { useState } from 'react';
import IndexLayout from '@/components/pages/index/index-layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '@/components/common/menu.tsx';
import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import pages from '@/constants/pages.ts';
import AboutLayout from '@/components/pages/about/about-layout.tsx';
import PreferencesLayout from '@/components/pages/preferences/preferences-layout.tsx';
import ProjectsLayout from '@/components/pages/documents/projects-layout.tsx';
import Layout from '@/components/layout.tsx';
import PreferencesProfileLayout from '@/components/pages/preferences/profile/preferences-profile-layout.tsx';
import PreferencesAccountLayout from '@/components/pages/preferences/account/preferences-account-layout.tsx';
import PreferencesAppearanceLayout from '@/components/pages/preferences/appearance/preferences-appearance-layout.tsx';
import PreferencesNotificationsLayout from '@/components/pages/preferences/notifications/preferences-notifications-layout.tsx';
import PreferencesDisplayLayout from '@/components/pages/preferences/display/preferences-display-layout.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="*" element={<IndexLayout />} />
                    <Route path={pages.about} element={<AboutLayout />} />
                    <Route element={<PreferencesLayout />}>
                        <Route path={pages.preferencesProfile} element={<PreferencesProfileLayout />} />
                        <Route path={pages.preferencesAccount} element={<PreferencesAccountLayout />} />
                        <Route path={pages.preferencesAppearance} element={<PreferencesAppearanceLayout />} />
                        <Route path={pages.preferencesNotifications} element={<PreferencesNotificationsLayout />} />
                        <Route path={pages.preferencesDisplay} element={<PreferencesDisplayLayout />} />
                    </Route>
                    <Route path={pages.projects} element={<ProjectsLayout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
