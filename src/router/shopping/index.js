export default {
    path: "/shopping",
    component: _ => import("@pages/shopping"),
    name: "shopping",
    meta:{
        flag:true,
        requireAuth:false,
        Tab:true,
        Mor:true
    }
}