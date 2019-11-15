export default {
    path: "/mine",
    component: _ => import("@pages/mine"),
    name: "mine",
    meta: {
        flag: false,
        requireAuth: false,
        Tab: true
    },
    children: [
        {
            path: "/mine",
            redirect: "/mine/load"
        },

        {
            path: "load",
            component: _ => import("@components/mineload"),
            name: "load",
            meta: {
                flag: false,
                requireAuth: false,
                Tab: true
            },
        },
        {
            path: "zhuce",
            component: _ => import("@components/minezhuce"),
            name: "zhuce",
            meta: {
                flag: false,
                requireAuth: false,
                Tab: true
            },
        }


    ]

}