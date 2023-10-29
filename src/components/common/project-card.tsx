import { PlusCircledIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '../ui/context-menu';

export interface ProjectPreview {
    id: number;
    title: string;
    previewHref: string;
}

export const recentProjects: ProjectPreview[] = [
    {
        id: 1,
        title: 'Курсовая по БД',
        previewHref: '/document-example.jpeg',
    },
    {
        id: 2,
        title: 'Отчет по алгоритмам',
        previewHref: '/document-example.jpeg',
    },
    {
        id: 3,
        title: 'React Rendezvous',
        previewHref: '/document-example.jpeg',
    },
    {
        id: 4,
        title: 'ВКР',
        previewHref: '/document-example.jpeg',
    },
    {
        id: 5,
        title: 'Очень очень очень очень очень очень очень длинное название',
        previewHref: '/document-example.jpeg',
    },
    {
        id: 6,
        title: 'Куросая работа по большим данным',
        previewHref: '/document-example.jpeg',
    },
];

export const madeForYouAlbums: ProjectPreview[] = [
    {
        id: 7,
        title: 'Thinking Components',
        previewHref: 'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
    },
    {
        id: 8,
        title: 'Functional Fury',
        previewHref: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    },
    {
        id: 9,
        title: 'React Rendezvous',
        previewHref: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
    },
    {
        id: 10,
        title: 'Stateful Symphony',
        previewHref: 'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
    },
    {
        id: 11,
        title: 'Async Awakenings',
        previewHref: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    },
    {
        id: 12,
        title: 'The Art of Reusability',
        previewHref: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    },
];

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
    project: ProjectPreview;
    aspectRatio?: 'portrait' | 'square';
    width?: number;
    height?: number;
}

export function ProjectCard({
    project,
    aspectRatio = 'portrait',
    width,
    height,
    className,
    ...props
}: AlbumArtworkProps) {
    return (
        <div className={cn('space-y-3', className)} {...props}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className="overflow-hidden rounded-md">
                        <img
                            src={project.previewHref}
                            alt={project.title}
                            width={width}
                            height={height}
                            className={cn(
                                'h-auto w-auto object-cover transition-all hover:scale-105',
                                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
                            )}
                        />
                    </div>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-40">
                    <ContextMenuItem>Add to Library</ContextMenuItem>
                    <ContextMenuSub>
                        <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                            <ContextMenuItem>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                New Playlist
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            {recentProjects.map((project) => (
                                <ContextMenuItem key={project.id}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                                    </svg>
                                    {project.title}
                                </ContextMenuItem>
                            ))}
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Play Next</ContextMenuItem>
                    <ContextMenuItem>Play Later</ContextMenuItem>
                    <ContextMenuItem>Create Station</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Like</ContextMenuItem>
                    <ContextMenuItem>Share</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{project.title}</h3>
                {/*<p className="text-xs text-muted-foreground">{album.artist}</p>*/}
            </div>
        </div>
    );
}
