import { Separator } from '@/components/ui/separator.tsx';
import { ProfileForm } from '@/components/pages/preferences/profile/profile-form.tsx';

export default function PreferencesProfileLayout() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    );
}
