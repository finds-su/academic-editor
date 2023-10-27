import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button.tsx';
import { useLocation } from 'react-router-dom';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const location = useLocation();

    return (
        <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
            {items.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        location.pathname === item.href
                            ? 'bg-muted hover:bg-muted'
                            : 'hover:bg-transparent hover:underline',
                        'justify-start',
                    )}
                >
                    {item.title}
                </a>
            ))}
        </nav>
    );
}
