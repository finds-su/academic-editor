import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Menu } from '@/components/common/menu.tsx';
import { playlists, Sidebar } from '@/components/common/sidebar.tsx';
import { AlbumArtwork, listenNowAlbums, madeForYouAlbums } from '@/components/common/album-artwork.tsx';
import { PodcastEmptyPlaceholder } from '@/components/common/podcast-empty-placeholder.tsx';
import React from 'react';

export default function ProjectsLayout() {
    return <div className="h-full px-4 py-6 lg:px-8">Documents</div>;
}
