import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import pages from '@/constants/pages.ts';
import PreferencesLayout from '@/components/pages/preferences/preferences-layout.tsx';
import ProjectsLayout from '@/components/pages/projects/projects-layout.tsx';
import Layout from '@/components/layout.tsx';
import PreferencesProfileLayout from '@/components/pages/preferences/profile/preferences-profile-layout.tsx';
import PreferencesAccountLayout from '@/components/pages/preferences/account/preferences-account-layout.tsx';
import PreferencesAppearanceLayout from '@/components/pages/preferences/appearance/preferences-appearance-layout.tsx';
import PreferencesNotificationsLayout from '@/components/pages/preferences/notifications/preferences-notifications-layout.tsx';
import PreferencesDisplayLayout from '@/components/pages/preferences/display/preferences-display-layout.tsx';
import { appWindow } from '@tauri-apps/api/window';
import XelatexLayout from '@/components/pages/xelatex/xelatex-layout.tsx';
import PandocLayout from '@/components/pages/pandoc/pandoc-layout.tsx';
import OverleafLayout from '@/components/pages/overleaf/overleaf-layout.tsx';
import ProjectLayout from '@/components/pages/project/project-layout.tsx';
import DocxLayout from '@/components/pages/docx/docx-layout.tsx';
import LoginLayout from '@/components/pages/login/login-layout.tsx';
import ErrorBoundary from '@/components/common/error-boundary.tsx';

function App() {

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path={pages.login} element={<LoginLayout />} />

                    <Route element={<Layout />}>
                        <Route path="*" element={<ProjectsLayout />} />
                        <Route element={<PreferencesLayout />}>
                            <Route path={pages.preferencesProfile} element={<PreferencesProfileLayout />} />
                            <Route path={pages.preferencesAccount} element={<PreferencesAccountLayout />} />
                            <Route path={pages.preferencesAppearance} element={<PreferencesAppearanceLayout />} />
                            <Route path={pages.preferencesNotifications} element={<PreferencesNotificationsLayout />} />
                            <Route path={pages.preferencesDisplay} element={<PreferencesDisplayLayout />} />
                        </Route>
                        <Route path={pages.projects} element={<ProjectsLayout />} />
                        <Route path={pages.project + ':id/'} element={<ProjectLayout />} />

                        <Route path={pages.docx} element={<DocxLayout />} />
                        <Route path={pages.pandoc} element={<PandocLayout />} />
                        <Route path={pages.xelatex} element={<XelatexLayout />} />
                        <Route path={pages.overleaf} element={<OverleafLayout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
