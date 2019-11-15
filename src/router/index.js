import Vue from "vue";
import VueRouter from "vue-router";
import home from './home';
import find from './find';
import shopping from './shopping';
import ticket from './ticket';
import mine from './mine';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        find,
        shopping,
        ticket,
        mine,
        {
            path:'/sou',
            name:'sou',
            component:_=>import("@pages/sou"),
            meta:{
                Tab:true
            }
        },
        {
            path:'/city',
            name:'city',
            component:_=>import("@pages/city"),
        },
        {
            path:'/detailmovie/:id',
            name:'detailmovie',
            component:_=>import("@pages/detailsmovie"),
            props:true
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requireAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}});
        }
    }else{
        next();
    }
})

export default router;