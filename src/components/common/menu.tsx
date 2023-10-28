import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '../ui/menubar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import pages from '@/constants/pages.ts';
import { IconJarLogoIcon } from '@radix-ui/react-icons';
import AboutAppDialog from '@/components/common/about-app-dialog.tsx';
import React, { useState } from 'react';
import { appWindow } from '@tauri-apps/api/window';

export function Menu() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isOpenAboutApp, setOpenAboutApp] = useState(false)

    const handleAppClick = () => {
        navigate(pages.index);
    };

    const handlePreferencesClick = () => {
        navigate(pages.preferencesProfile);
    };

    const handleHideEditorClick = () => {
        appWindow.minimize()
    }

    const handleQuitEditorClick = () => {
        appWindow.close()
    }

    const handleCreateNewProjectClick = () => {
        navigate(pages.project + "new/")
    }

    return (
        <>
            <AboutAppDialog open={isOpenAboutApp} onOpenChange={(value) => setOpenAboutApp(value)} />
            <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
                <MenubarMenu>
                    <MenubarTrigger onClick={handleAppClick} className="font-bold">
                        <IconJarLogoIcon />
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="font-bold">
                        <span className="hidden md:block">{t('menu.app')}</span>
                        <span className="md:hidden">{t('menu.shortApp')}</span>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => setOpenAboutApp(open => !open)}>{t('submenu.aboutApp')}</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={handlePreferencesClick}>
                            {t('submenu.preferences')} <MenubarShortcut>⌘,</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={handleHideEditorClick}>
                            {t('submenu.hideEditor')} <MenubarShortcut>⌘H</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={handleQuitEditorClick}>
                            {t('submenu.quitEditor')} <MenubarShortcut>⌘Q</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="relative">{t('menu.file')}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarSub>
                            <MenubarSubTrigger>{t('submenu.new')}</MenubarSubTrigger>
                            <MenubarSubContent className="w-[230px]">
                                <MenubarItem onClick={handleCreateNewProjectClick}>
                                    {t('submenu.newProject')} <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>
                            Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Close Window <MenubarShortcut>⌘W</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>Library</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Update Cloud Library</MenubarItem>
                                <MenubarItem>Update Genius</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Organize Library...</MenubarItem>
                                <MenubarItem>Export Library...</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Import Playlist...</MenubarItem>
                                <MenubarItem disabled>Export Playlist...</MenubarItem>
                                <MenubarItem>Show Duplicate Items</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Get Album Artwork</MenubarItem>
                                <MenubarItem disabled>Get Track Names</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>
                            Import... <MenubarShortcut>⌘O</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>Burn Playlist to Disc...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{' '}
                        </MenubarItem>
                        <MenubarItem>Convert</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Page Setup...</MenubarItem>
                        <MenubarItem disabled>
                            Print... <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>{t('menu.edit')}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem disabled>
                            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem disabled>
                            Cut <MenubarShortcut>⌘X</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                            Copy <MenubarShortcut>⌘C</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                            Paste <MenubarShortcut>⌘V</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Select All <MenubarShortcut>⌘A</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                            Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Smart Dictation...{' '}
                            <MenubarShortcut>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                                    <circle cx="17" cy="7" r="5" />
                                </svg>
                            </MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Emoji & Symbols{' '}
                            <MenubarShortcut>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>{t('menu.view')}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
                        <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem inset disabled>
                            Show Status Bar
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Hide Sidebar</MenubarItem>
                        <MenubarItem disabled inset>
                            Enter Full Screen
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="hidden md:block">{t('menu.account')}</MenubarTrigger>
                    <MenubarContent forceMount>
                        <MenubarLabel inset>Switch Account</MenubarLabel>
                        <MenubarSeparator />
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Manage Famliy...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Account...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
