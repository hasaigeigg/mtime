export default {
    path: "/shopmowan",
    component: _ => import("@pages/shopmowan"),
    name: "shopmowan",
    props:true,
    meta:{
        requireAuth:false,
        Tab:true,
        Mor:true
    }
}