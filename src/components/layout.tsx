import { Sidebar } from '@/components/common/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Menu } from '@/components/common/menu.tsx';
import Providers from '@/components/providers.tsx';
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { ArrowLeftIcon, ArrowRightIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { IconButton } from '@/components/ui/iconButton.tsx';
import { recentProjects } from '@/components/common/album-artwork.tsx';
import ErrorBoundary from '@/components/common/error-boundary.tsx';

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
                                key="sidebar"
                                id="sidebar"
                                ref={sidebarPanel}
                                collapsible
                                onCollapse={handleSidebarCollapse}
                                defaultSize={20}
                                className="max-h-[calc(100vh-36px)] hidden lg:block"
                            >
                                <ErrorBoundary>
                                    <div className="max-h-[calc(100vh-36px)] overflow-y-auto">
                                        <Sidebar recentProjects={recentProjects} />
                                    </div>
                                </ErrorBoundary>
                            </Panel>
                            {!isSidebarCollapsed && (
                                <PanelResizeHandle className="hidden lg:block w-[1px] bg-border" />
                            )}
                            <Panel key="main" id="main" minSize={70}>
                                <ErrorBoundary>
                                    <div className="max-h-[calc(100vh-36px)] overflow-y-auto col-span-3 lg:col-span-4">
                                        <IconButton
                                            className="lg:mt-1 lg:ml-1 hidden lg:block"
                                            variant="ghost"
                                            size='sm'
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
                                        <div className="lg:-mt-7">
                                            <Outlet />
                                        </div>
                                    </div>
                                </ErrorBoundary>
                            </Panel>
                        </PanelGroup>
                    </div>
                </div>
            </Providers>
        </main>
    );
}
