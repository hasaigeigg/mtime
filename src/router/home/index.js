export default {
    path: "/home",
    component: _ => import("@pages/home"),
    name: "home",
    meta:{
        flag:true,
        requireAuth:false,
        Tab:true,
        Mor:true
    }
}