import Vue from "vue";


Vue.filter("toUrl",(url,categoryId1)=>{
    return url.split(("=")[1],categoryId1);
})