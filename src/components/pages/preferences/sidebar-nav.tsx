import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigateButton = (href: string) => {
        return () => {
            navigate(href);
        };
    };

    return (
        <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
            {items.map((item) => (
                <div
                    key={item.href}
                    onClick={handleNavigateButton(item.href)}
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        location.pathname === item.href
                            ? 'bg-muted hover:bg-muted'
                            : 'hover:bg-transparent hover:underline',
                        'justify-start',
                    )}
                >
                    {item.title}
                </div>
            ))}
        </nav>
    );
}
