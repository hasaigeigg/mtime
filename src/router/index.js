import Vue from "vue";
import VueRouter from "vue-router";
import home from './home';
import find from './find';
import shopping from './shopping';
import shopmowan from './shopmowan';
import ticket from './ticket';
import mine from './mine';
import Cookies from 'js-cookie'

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
        shopmowan,
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
    if(to.path =="/mine/user"){
        if(Cookies.get("token")){
            console.log(1);
            next();
        }else{
            console.log(2);
            next("/mine/load");
        }
    }else{
        next();
    }
})

export default router;