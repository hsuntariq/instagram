import React from "react";

const stories = [
    {
        id: 1,
        username: "your_story",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 2,
        username: "john_doe",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 3,
        username: "emma",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 4,
        username: "alex",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        id: 5,
        username: "sophia",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
        id: 6,
        username: "daniel",
        image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
        id: 7,
        username: "olivia",
        image: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
        id: 8,
        username: "michael",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        id: 9,
        username: "charlotte",
        image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
];

const Story = () => {
    return (
        <div className="w-full  bg-white rounded-lg p-4 ">
            <div className="flex gap-4 overflow-x-hidden scrollbar-hide">
                {stories.map( ( story ) => (
                    <div
                        key={story.id}
                        className="flex flex-col items-center min-w-[80px] cursor-pointer"
                    >
                        {/* Story Ring */}
                        <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                            <div className="bg-white p-[2px] rounded-full">
                                <img
                                    src={story.image}
                                    alt={story.username}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <span className="text-xs mt-2 max-w-[70px] truncate text-center">
                            {story.username}
                        </span>
                    </div>
                ) )}
            </div>
        </div>
    );
};

export default Story;