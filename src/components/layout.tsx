import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Menu } from '@/components/common/menu.tsx';
import Providers from '@/components/providers.tsx';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function Layout() {
    return (
        <main className="h-screen overflow-auto static">
            <Providers>
                <div className="absolute top-0 left-0">
                    <Menu />
                </div>
                <div className="h-[36px]"></div>
                <div className="border-t">
                    <div className="bg-background">
                        <PanelGroup direction="horizontal">
                            <Panel defaultSize={20} minSize={1} className="max-h-[calc(100vh-36px)] hidden lg:block">
                                <div className="max-h-[calc(100vh-36px)] overflow-y-auto">
                                    <Sidebar recentProjects={playlists} />
                                </div>
                            </Panel>
                            <PanelResizeHandle className="hidden lg:block w-0.5 bg-secondary-foreground"/>
                            <Panel minSize={50}>
                                <div className="max-h-[calc(100vh-36px)] overflow-y-auto col-span-3 lg:col-span-4">
                                    <Outlet/>
                                </div>
                            </Panel>
                        </PanelGroup>
                        {/*<div className="grid lg:grid-cols-5">*/}
                            {/*<div className="max-h-[calc(100vh-36px)] overflow-y-auto">*/}
                            {/*    <Sidebar recentProjects={playlists} className="hidden lg:block" />*/}
                            {/*</div>*/}
                            {/*<div className="max-h-[calc(100vh-36px)] overflow-y-auto col-span-3 lg:col-span-4 lg:border-l">*/}
                            {/*    <Outlet />*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Providers>
        </main>
    );
}
