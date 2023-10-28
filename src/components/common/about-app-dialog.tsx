import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';

interface Props {
    open: boolean;
    onOpenChange: (value: boolean) => void;
}

export default function AboutAppDialog(props: Props) {
    const { t } = useTranslation();

    return (
        <Dialog open={props.open} onOpenChange={(open) => props.onOpenChange(!open)}>
            <DialogContent
                onClickCloseButton={(e) => {
                    e.preventDefault();
                    props.onOpenChange(false);
                }}
                onPointerDownOutside={(e) => {
                    e.preventDefault();
                    props.onOpenChange(!props.open);
                }}
            >
                <DialogHeader>
                    <DialogTitle>{t('aboutApp.header')}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="py-4">{t('aboutApp.description')}</div>
                <DialogFooter></DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
