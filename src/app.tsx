import React, { useState } from 'react';
import IndexLayout from '@/components/pages/index/index-layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '@/components/common/menu.tsx';
import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { Button } from '@/components/ui/button.tsx';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator.tsx';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area.tsx';
import { AlbumArtwork, listenNowAlbums, madeForYouAlbums } from '@/components/common/album-artwork.tsx';
import { PodcastEmptyPlaceholder } from '@/components/common/podcast-empty-placeholder.tsx';

function App() {
    return (
        <div>
            <Menu />
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-5">
                        <Sidebar playlists={playlists} className="hidden lg:block" />
                        <div className="col-span-3 lg:col-span-4 lg:border-l">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="*" element={<IndexLayout />} />
                                </Routes>
                            </BrowserRouter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
