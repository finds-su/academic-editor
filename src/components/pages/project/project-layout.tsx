import { Tabs, TabsContent } from '@/components/ui/tabs.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button.tsx';
import WysiwygEditor from '@/components/common/wysiwyg-editor.tsx';

export default function ProjectLayout() {
    const {t} = useTranslation()
    const {id} = useParams()
    return <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue={id} className="h-full space-y-6">
            <TabsContent value="new" className="border-none p-0 outline-none">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <div className="flex flex-wrap flex-row gap-2 justify-end">
                            <Input className='p-[17px] md:w-[500px] text-[17px]'
                                   type="text"
                                   placeholder={t("project.createNew.titlePlaceholder")} />
                            <Button className='flex-none'>{t('project.createNew.save')}</Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{t("project.createNew.description")}</p>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                    <WysiwygEditor />
                </div>
            </TabsContent>
        </Tabs>
    </div>
}