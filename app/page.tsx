'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Progress } from '@/components/ui/progress';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

function DropdownMenuDemo({ className }: { className?: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Dropdown</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className={cn('w-56', className)}
                align="start"
            >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            Invite users
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function DrawerSimple({ className }: { className?: string }) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent className={cn('h-80', className)}>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                        This action cannot be undone.
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function SelectDemo({ className }: { className?: string }) {
    return (
        <div
            className="flex justify-center self-start pt-6 w-full"
            style={{
                all: 'revert',
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                paddingTop: '1.5rem',
                width: '100%',
                fontSize: '14px',
                lineHeight: '1.5',
                letterSpacing: 'normal',
            }}
        >
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className={className}>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

function Buttons({ className }: { className?: string }) {
    return (
        <div className={cn('flex items-center gap-4 flex-wrap', className)}>
            <Button>Hello World</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
        </div>
    );
}

function Breadcrumbs() {
    return (
        <div className="w-full p-6 flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1">
                                <BreadcrumbEllipsis className="size-4" />
                                <span className="sr-only">Toggle menu</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>
                                    Documentation
                                </DropdownMenuItem>
                                <DropdownMenuItem>Themes</DropdownMenuItem>
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

function DialogDemo({ className }: { className?: string }) {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className={cn('sm:max-w-[425px]', className)}>
                    <DialogHeader>
                        <DialogTitle className="dark:text-white">
                            Edit profile
                        </DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="name"
                                className="text-right dark:text-white"
                            >
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="username"
                                className="text-right dark:text-white"
                            >
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

function InputDemo() {
    return (
        <div className="flex justify-center">
            <Input
                type="email"
                placeholder="Email"
                className="w-full max-w-sm"
            />
        </div>
    );
}

function SwitchDemo() {
    return (
        <div className="flex items-center space-x-2 dark:text-white">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    );
}

function ProgressDemo() {
    const [progress, setProgress] = useState(13);
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="flex justify-center self-start pt-6 w-full"
            style={{
                all: 'revert',
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                paddingTop: '1.5rem',
                width: '100%',
                fontSize: '14px',
                lineHeight: '1.5',
                letterSpacing: 'normal',
            }}
        >
            <Progress value={progress} className="w-[200px]" />
        </div>
    );
}

function SonnerDemo() {
    return (
        <Button
            variant="outline"
            onClick={() =>
                toast('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                    action: {
                        label: 'Undo',
                        onClick: () => console.log('Undo'),
                    },
                    classNames: {
                        description: '!text-foreground/80',
                    },
                })
            }
        >
            Show Toast
        </Button>
    );
}

function TextareaDemo() {
    return (
        <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="message" className="dark:text-white">
                Your message
            </Label>
            <Textarea
                placeholder="Type your message here."
                id="message"
                className="dark:text-white"
            />
            <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
            </p>
        </div>
    );
}

const tabs = [
    {
        name: 'Explore',
        value: 'explore',
        content: (
            <>
                Discover{' '}
                <span className="text-foreground font-semibold">
                    fresh ideas
                </span>
                , trending topics, and hidden gems curated just for you. Start
                exploring and let your curiosity lead the way!
            </>
        ),
    },
    {
        name: 'Favorites',
        value: 'favorites',
        content: (
            <>
                All your{' '}
                <span className="text-foreground font-semibold">favorites</span>{' '}
                are saved here. Revisit articles, collections, and moments you
                love, any time you want a little inspiration.
            </>
        ),
    },
    {
        name: 'Surprise Me',
        value: 'surprise',
        content: (
            <>
                <span className="text-foreground font-semibold">Surprise!</span>{' '}
                Here&apos;s something unexpected—a fun fact, a quirky tip, or a
                daily challenge. Come back for a new surprise every day!
            </>
        ),
    },
];

function TabsDemo() {
    return (
        <div className="w-full max-w-md">
            <Tabs defaultValue="explore">
                <TabsList>
                    {tabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map(tab => (
                    <TabsContent
                        key={tab.value}
                        value={tab.value}
                        className="mt-6"
                    >
                        <div className="min-h-[100px] flex items-start">
                            <p className="text-muted-foreground text-sm">
                                {tab.content}
                            </p>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white font-sans dark:bg-black py-16">
                <div className="p-8">
                    <Buttons />
                </div>
                <div className="p-8">
                    <Breadcrumbs />
                </div>
                <div className="p-8">
                    <DialogDemo />
                </div>
                <div className="p-8">
                    <DrawerSimple />
                </div>
                <div className="p-8">
                    <DropdownMenuDemo />
                </div>
                <div className="p-8">
                    <InputDemo />
                </div>
                <div className="p-8">
                    <ProgressDemo />
                </div>
                <div className="p-8">
                    <SelectDemo />
                </div>
                <div className="p-8">
                    <SonnerDemo />
                </div>
                <div className="p-8">
                    <SwitchDemo />
                </div>
                <div className="p-8">
                    <TabsDemo />
                </div>
                <div className="p-8">
                    <TextareaDemo />
                </div>
            </div>
            <div className="dark flex flex-col items-center justify-center font-sans bg-black py-16">
                <div className="p-8">
                    <Buttons className="" />
                </div>
                <div className="p-8">
                    <Breadcrumbs />
                </div>
                <div className="p-8">
                    <DialogDemo className="dark" />
                </div>
                <div className="p-8">
                    <DrawerSimple className="dark" />
                </div>
                <div className="p-8">
                    <DropdownMenuDemo className="dark" />
                </div>
                <div className="p-8">
                    <InputDemo />
                </div>
                <div className="p-8">
                    <ProgressDemo />
                </div>
                <div className="p-8">
                    <SelectDemo className="dark" />
                </div>
                <div className="p-8">
                    <SonnerDemo />
                </div>
                <div className="p-8">
                    <SwitchDemo />
                </div>
                <div className="p-8">
                    <TabsDemo />
                </div>
                <div className="p-8">
                    <TextareaDemo />
                </div>
            </div>
        </>
    );
}
