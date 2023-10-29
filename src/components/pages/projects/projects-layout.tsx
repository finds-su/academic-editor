import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectCard, recentProjects, madeForYouAlbums, ProjectPreview } from '@/components/common/project-card.tsx';
import { PodcastEmptyPlaceholder } from '@/components/common/podcast-empty-placeholder.tsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import pages from '@/constants/pages.ts';

export default function ProjectsLayout() {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const handleProjectNavigate = (project: ProjectPreview) => {
        return () => {
            navigate(pages.project + project.id)
        }
    }
    return (
        <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="music" className="h-full space-y-6">
                {/*<div className="space-between flex items-center">*/}
                {/*    <TabsList>*/}
                {/*        <TabsTrigger value="music" className="relative">*/}
                {/*            Music*/}
                {/*        </TabsTrigger>*/}
                {/*        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>*/}
                {/*        <TabsTrigger value="live" disabled>*/}
                {/*            Live*/}
                {/*        </TabsTrigger>*/}
                {/*    </TabsList>*/}
                {/*    <div className="ml-auto mr-4">*/}
                {/*        <Button>*/}
                {/*            <PlusCircledIcon className="mr-2 h-4 w-4" />*/}
                {/*            Add music*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <TabsContent value="music" className="border-none p-0 outline-none">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                {t('projects.recentlyOpened.header')}
                            </h2>
                            <p className="text-sm text-muted-foreground">{t('projects.recentlyOpened.description')}</p>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                        <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                                {recentProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        onClick={handleProjectNavigate(project)}
                                        project={project}
                                        className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={330}
                                    />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
                        <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                        <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                                {madeForYouAlbums.map((album) => (
                                    <ProjectCard
                                        key={album.title}
                                        project={album}
                                        className="w-[150px]"
                                        aspectRatio="square"
                                        width={150}
                                        height={150}
                                    />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </TabsContent>
                <TabsContent value="podcasts" className="h-full flex-col border-none p-0 data-[state=active]:flex">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
                            <p className="text-sm text-muted-foreground">Your favorite podcasts. Updated daily.</p>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <PodcastEmptyPlaceholder />
                </TabsContent>
            </Tabs>
        </div>
    );
}
