import Vue from 'vue';
import HeaderFan from './headerfan';
import BScroll from './bscroll';

let componentMap = [
    HeaderFan,
    BScroll
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item);
})
