import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import pages from '@/constants/pages.ts';
import { FileIcon, FilePlusIcon, ListBulletIcon, PlusCircledIcon, ReaderIcon } from '@radix-ui/react-icons';
import React from 'react';

export type Playlist = (typeof recentProjects)[number];

export const recentProjects = [
    'Курсовая по БД',
    'Отчет по алгоритмам',
    'ВКР',
    'Очень очень очень очень очень очень очень длинное название',
    'Куросая работа по большим данным',
    'Куросая работа по большим данным',
    'Куросая работа по большим данным',
    'Куросая работа по большим данным',
    'Куросая работа по большим данным',
    'Куросая работа по большим данным',
    'Куросая работа по большим данным',
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    recentProjects: Playlist[];
}

export function Sidebar({ className, recentProjects }: SidebarProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const handelProjectsClick = () => {
        navigate(pages.projects);
    };

    const handelNewProjectClick = () => {
        navigate(pages.project + 'new');
    };

    const handelDocxClick = () => {
        navigate(pages.docx);
    };

    const handelPandocClick = () => {
        navigate(pages.pandoc);
    };

    const handelXelatexClick = () => {
        navigate(pages.xelatex);
    };

    const handelOverleafClick = () => {
        navigate(pages.overleaf);
    };

    return (
        <div className={cn('pb-12', className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{t('sidebar.projects')}</h2>
                    <div className="space-y-1">
                        <Button
                            onClick={handelProjectsClick}
                            variant={location.pathname === pages.projects ? 'secondary' : 'ghost'}
                            className="w-full justify-start"
                        >
                            <ListBulletIcon className="mr-2 h-4 w-4" stroke="currentColor" strokeWidth={0.5} />
                            {t('sidebar.projectList')}
                        </Button>
                        <Button onClick={handelNewProjectClick} variant="default" className="w-full justify-start">
                            <FilePlusIcon className="mr-2 h-4 w-4" />
                            {t('sidebar.createProject')}
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{t('sidebar.integrations')}</h2>
                    <div className="space-y-1">
                        <Button
                            onClick={handelDocxClick}
                            variant={location.pathname === pages.pandoc ? 'secondary' : 'ghost'}
                            className="w-full justify-start"
                        >
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            {t('sidebar.docx')}
                        </Button>
                        <Button
                            onClick={handelPandocClick}
                            variant={location.pathname === pages.pandoc ? 'secondary' : 'ghost'}
                            className="w-full justify-start"
                        >
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            {t('sidebar.pandoc')}
                        </Button>
                        <Button
                            onClick={handelXelatexClick}
                            variant={location.pathname === pages.xelatex ? 'secondary' : 'ghost'}
                            className="w-full justify-start"
                        >
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            {t('sidebar.xelatex')}
                        </Button>
                        <Button
                            onClick={handelOverleafClick}
                            variant={location.pathname === pages.overleaf ? 'secondary' : 'ghost'}
                            className="w-full justify-start"
                        >
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            {t('sidebar.overleaf')}
                        </Button>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="relative px-7 text-lg font-semibold tracking-tight whitespace-nowrap">
                        {t('sidebar.recentProjects')}
                    </h2>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1 p-2">
                            {recentProjects?.map((project, i) => (
                                <Button
                                    key={`${project}-${i}`}
                                    variant="ghost"
                                    className="w-full justify-start font-normal"
                                >
                                    <FileIcon className="mr-2 h-4 w-4" />
                                    {project}
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
