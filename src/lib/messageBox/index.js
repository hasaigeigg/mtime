import  MessageBoxView from "./index.vue";
import Vue from "vue";

export default (()=>{
    let defaultVal = {
        title:"详情",
        content:"结果",
        ok:function(){}
    }

    let MessageBoxFn = Vue.extend(MessageBoxView);
    return (options)=>{


        for(var key in options){
            defaultVal[key] = options[key];
        }


        let messageBoxVm = new MessageBoxFn({
            el:document.createElement("div"),
            data:{
                title:defaultVal.title,
                content:defaultVal.content
            },
            methods:{
                handleOk(){
                    document.body.removeChild(messageBoxVm.$mount().$el)
                    defaultVal && defaultVal.ok()
                },
                handleClose(){
                    document.body.removeChild(messageBoxVm.$mount().$el)
                }
            }  
        })

        document.body.appendChild(messageBoxVm.$mount().$el);
    }
})()