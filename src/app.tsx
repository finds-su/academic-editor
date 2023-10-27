import React, { useState } from 'react';
import IndexLayout from '@/components/pages/index/index-layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '@/components/common/menu.tsx';
import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import pages from '@/constants/pages.ts';
import AboutLayout from '@/components/pages/about/about-layout.tsx';
import PreferencesLayout from '@/components/pages/preferences/preferences-layout.tsx';
import DocumentsLayout from '@/components/pages/documents/documents-layout.tsx';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-5">
                        <Sidebar playlists={playlists} className="hidden lg:block" />
                        <div className="col-span-3 lg:col-span-4 lg:border-l">
                            <Routes>
                                <Route path="*" element={<IndexLayout />} />
                                <Route path={pages.about} element={<AboutLayout />} />
                                <Route path={pages.preferences} element={<PreferencesLayout />} />
                                <Route path={pages.documents} element={<DocumentsLayout />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
