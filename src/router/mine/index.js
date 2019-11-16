export default {
    path: "/mine",
    component: _ => import("@pages/mine"),
    name: "mine",
    meta: {
        flag: false,
        requireAuth: false,
    },
    children: [
        {
            path: "/mine",
            redirect: "/mine/user"
        },

        {
            path: "user",
            component: _ => import("@components/mineuser"),
            name: "user",
            meta: {
                flag: false,
                requireAuth: false,
                top:false
            },
        },

        {
            path: "load",
            component: _ => import("@components/mineload"),
            name: "load",
            meta: {
                flag: false,
                requireAuth: false,
                top:true
            },
        },
        
        {
            path: "zhuce",
            component: _ => import("@components/minezhuce"),
            name: "zhuce",
            meta: {
                flag: false,
                requireAuth: false,
                top:true
            },
        }


    ]

}