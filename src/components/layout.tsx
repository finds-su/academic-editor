import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Menu } from '@/components/common/menu.tsx';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';

export default function Layout() {
    return (
        <main className="h-screen overflow-auto static">
            <div className="absolute top-0 left-0">
                <Menu />
            </div>
            <div className="h-[36px]"></div>
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-5">
                        <div className="max-h-[calc(100vh-36px)] overflow-y-auto">
                            <Sidebar recentProjects={playlists} className="hidden lg:block" />
                        </div>
                        <div className="max-h-[calc(100vh-36px)] overflow-y-auto col-span-3 lg:col-span-4 lg:border-l">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
