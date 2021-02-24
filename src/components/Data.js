import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'

export const Data = [
    {
        name: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome/>,
        options: [
            {
                name: 'Dashboard',
                path: '/overview/dashboard',
                icon: <AiIcons.AiFillDashboard/>
            },
            {
                name: 'Settings',
                path: '/overview/settings',
                icon: <AiIcons.AiFillSetting/>
            }
        ]

    },
    {
        name: 'Data',
        path: '/data',
        icon: <AiIcons.AiFillDatabase/>,
        options: [
            {
                name: 'Daily',
                path: '/data/daily',
                icon: <AiIcons.AiFillCalendar/>
            },
            {
                name: 'Weekly',
                path: '/data/weekly',
                icon: <AiIcons.AiFillCalendar/>
            },
            {
                name: 'Monthly',
                path: '/data/monthly',
                icon: <AiIcons.AiFillCalendar/>
            }
        ]

    },
    {
        name: 'Personal',
        path: '/personal',
        icon: <FaIcons.FaUserAlt/>,
        options: null
    },
    {
        name: 'Team',
        path: '/team',
        icon: <FaIcons.FaUserFriends/>,
        options: [
            {
                name: 'Messages',
                path: '/team/messages',
                icon: <AiIcons.AiFillMessage/>
            },
            {
                name: 'Tasks',
                path: '/team/tasks',
                icon: <AiIcons.AiFillCheckSquare/>
            },
            {
                name: 'Projects',
                path: '/team/projects',
                icon: <AiIcons.AiFillProject/>
            }
        ]

    },
    {
        name: 'Shop',
        path: '/shop',
        icon: <FaIcons.FaShoppingCart/>,
        options: null
    },
    {
        name: 'Support',
        path: '/support',
        icon: <AiIcons.AiFillQuestionCircle/>,
        options: null
    }
]