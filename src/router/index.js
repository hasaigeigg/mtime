import Vue from "vue";
import VueRouter from "vue-router";
import home from './home';
import find from './find';
import shopping from './shopping';
import ticket from './ticket';
import shopmowan from './shopmowan';

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
        shopmowan,
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine"),
            meta:{
                flag:false,
                requireAuth:false,
                Tab:true
            }
        },
        {
            path:'/sou',
            name:'sou',
            component:_=>import("@pages/sou"),
            meta:{
                Tab:true
            }
        },
        {
            path:'/shopsou',
            name:'shopsou',
            component:_=>import("@pages/shopsou"),
            meta:{
                Tab:true
            }
        },
        {
            path:'/shopdetail/:goodsId',
            name:'shopdetail',
            component:_=>import("@pages/shopdetail"),
            props:true,
            meta:{
                Tab:false
            }
        },
        {
            path:'/cart',
            name:'cart',
            component:_=>import("@pages/cart"),
            meta:{
                Tab:false
            }
        },
        
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