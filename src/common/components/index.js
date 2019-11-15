import Vue from 'vue';
import HeaderFan from './headerfan';

let componentMap = [
    HeaderFan
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item);
})
