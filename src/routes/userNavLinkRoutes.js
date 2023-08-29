import {
    HomeIcon,
    UserIcon,
    InboxInIcon,
} from "@heroicons/react/solid"

export const userNavLinkRoutes = [
    {
        index: 1,
        path: "/user",
        name: "Home",
        icon: <HomeIcon className="h-6 w-6" />,
        exact: true,
    },
    {
        index: 2,
        path: "/user/profile",
        name: "Profile",
        icon: <UserIcon className="h-6 w-6" />,
    },
    {
        index: 5,
        path: "/user/invitations",
        name: "Invitations",
        icon: <InboxInIcon className="h-6 w-6" />,
    },
]
