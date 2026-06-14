import {
    FiHome,
    FiPlay,
    FiSliders,
    FiSend,
    FiSearch,
    FiHeart,
    FiPlus,
    FiUser,
    FiMenu,
    FiGrid,
} from "react-icons/fi";

import {
    HiHome,
    HiPlay,
    HiOutlineAdjustments,
    HiPaperAirplane,
    HiSearch,
    HiHeart,
    HiPlus,
    HiUser,
    HiMenu,
    HiViewGrid,
} from "react-icons/hi";

export const sidebarData = [
    {
        id: 1,
        icon: <FiHome size={28} />,
        activeIcon: <HiHome size={28} />,
        text: "Welcome",
    },
    {
        id: 2,
        icon: <FiPlay size={28} />,
        activeIcon: <HiPlay size={28} />,
        text: "Reels",
    },
    {
        id: 3,
        icon: <FiSliders size={28} />,
        activeIcon: <HiOutlineAdjustments size={28} />,
        text: "Filters",
    },
    {
        id: 4,
        icon: <FiSend size={28} />,
        activeIcon: <HiPaperAirplane size={28} />,
        text: "Messages",
    },
    {
        id: 5,
        icon: <FiSearch size={28} />,
        activeIcon: <HiSearch size={28} />,
        text: "Research",
    },
    {
        id: 6,
        icon: <FiHeart size={28} />,
        activeIcon: <HiHeart size={28} />,
        text: "Notifications",
    },
    {
        id: 7,
        icon: <FiPlus size={28} />,
        activeIcon: <HiPlus size={28} />,
        text: "Create",
    },
    {
        id: 8,
        icon: <FiUser size={28} />,
        activeIcon: <HiUser size={28} />,
        text: "Profile",
    },
];

export const lastSidebarItems = [
    {
        id: 9,
        icon: <FiMenu size={28} />,
        activeIcon: <HiMenu size={28} />,
        text: "More",
    },
    {
        id: 10,
        icon: <FiGrid size={28} />,
        activeIcon: <HiViewGrid size={28} />,
        text: "Other Meta Applications",
    },
];