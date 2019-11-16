import LoadingView from "./index.vue";
import Vue from "vue";
class JSLoading {
    constructor() {
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el: document.createElement("div"),
        })
        // this.createLoading();
    }

    createLoading() {
        document.body.appendChild(this.loadingVm.$mount().$el);
    }
    destroyLoading() {
        this.loadingVm.$mount().$el.remove();
            
        // this.loadingVm.$mount().$el.parentNode.removeChild(this.loadingVm.$mount().$el);
    }
}

export default new JSLoading();

//--------