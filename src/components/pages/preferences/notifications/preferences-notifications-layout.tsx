import { Separator } from '@/components/ui/separator.tsx';
import { NotificationsForm } from '@/components/pages/preferences/notifications/notifications-form.tsx';

export default function PreferencesNotificationsLayout() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
            </div>
            <Separator />
            <NotificationsForm />
        </div>
    );
}
