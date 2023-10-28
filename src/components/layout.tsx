import { recentProjects, Sidebar } from '@/components/common/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Menu } from '@/components/common/menu.tsx';
import Providers from '@/components/providers.tsx';
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { ArrowLeftIcon, ArrowRightIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { IconButton } from '@/components/ui/iconButton.tsx';

export default function Layout() {
    const sidebarPanel = useRef<ImperativePanelHandle>(null);
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    const expandSidebarPanel = () => {
        const panel = sidebarPanel.current;
        if (panel) {
            if (panel.getCollapsed()) {
                panel.expand();
                setSidebarCollapsed(false);
            } else {
                panel.collapse();
                setSidebarCollapsed(true);
            }
        }
    };

    const handleSidebarCollapse = () => {
        setSidebarCollapsed(true);
    };

    useEffect(() => {
        if (sidebarPanel.current) {
            setSidebarCollapsed(sidebarPanel.current.getCollapsed());
        }
    }, [sidebarPanel.current]);

    return (
        <main className="h-screen overflow-auto static">
            <Providers>
                <div className="absolute top-0 left-0">
                    <Menu />
                </div>
                <div className="h-[36px]"></div>
                <div className="border-t">
                    <div className="bg-background">
                        <PanelGroup direction="horizontal" autoSaveId="main-panels">
                            <Panel
                                id="sidebar"
                                ref={sidebarPanel}
                                collapsible
                                onCollapse={handleSidebarCollapse}
                                defaultSize={20}
                                className="max-h-[calc(100vh-36px)] hidden lg:block"
                            >
                                <div className="max-h-[calc(100vh-36px)] overflow-y-auto">
                                    <Sidebar recentProjects={recentProjects} />
                                </div>
                            </Panel>
                            {!isSidebarCollapsed && (
                                <PanelResizeHandle className="hidden lg:block w-0.5 bg-primary/20 hover:bg-primary/50" />
                            )}
                            <Panel id="main" minSize={70}>
                                <div className="max-h-[calc(100vh-36px)] overflow-y-auto col-span-3 lg:col-span-4">
                                    <IconButton
                                        className="mt-1 ml-1"
                                        variant="ghost"
                                        size={'sm'}
                                        onClick={expandSidebarPanel}
                                    >
                                        {isSidebarCollapsed ? (
                                            <ArrowRightIcon
                                                className="mr-2 h-4 w-4"
                                                stroke="currentColor"
                                                strokeWidth={0.5}
                                            />
                                        ) : (
                                            <ArrowLeftIcon
                                                className="mr-2 h-4 w-4"
                                                stroke="currentColor"
                                                strokeWidth={0.5}
                                            />
                                        )}
                                    </IconButton>
                                    <div className="-mt-7">
                                        <Outlet />
                                    </div>
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
