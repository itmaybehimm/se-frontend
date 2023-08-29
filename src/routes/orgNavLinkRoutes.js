import {
    HomeIcon,
    UserIcon,
    InboxInIcon,
    PencilAltIcon,
} from "@heroicons/react/solid"

export const orgNavLinkRoutes = [
    {
        index: 1,
        path: "/org",
        name: "Home",
        icon: <HomeIcon className="h-6 w-6" />,
        exact: true,
    },
    {
        index: 2,
        path: "/org/create",
        name: "Create Event",
        icon: <PencilAltIcon className="h-6 w-6" />,
    },
    {
        index: 3,
        path: "/org/profile",
        name: "Profile",
        icon: <UserIcon className="h-6 w-6" />,
    },
    {
        index: 5,
        path: "/org/requests",
        name: "Requests",
        icon: <InboxInIcon className="h-6 w-6" />,
    },
]
