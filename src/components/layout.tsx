import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Menu } from '@/components/common/menu.tsx';

export default function Layout() {
    return (
        <>
            <Menu />
            <main>
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar playlists={playlists} className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
