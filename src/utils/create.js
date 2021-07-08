//创建指定实例并挂载在body上
//vue-loader会把template转换成rander函数
import Vue from "vue"
export default function create(component,props){
    //0.先创建vue实例
    const vm = new Vue({
        render(h){
            //rander方法提供给我们一个h方法
            return h(component,{props})
        }
    }).$mount()
    console.log("组件实例",vm.$root)
    //1.vm帮我们创建了组件实例
    //2通过$children获取该组件的实例
    const comp =vm.$children[0]
    //3追加至body
    document.body.appendChild(vm.$el)
    //4清理函数
    comp.remove = ()=>{
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    //5返回该组件的实例
    console.log("返回的实例",comp)
    return comp
}