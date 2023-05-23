import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters([
            'websorketBestUrl'
        ])
    },
    befortCreate(){
        this.websortObserver = null
        this.eventTypes = ['onopen','onclose','onerror','onmessage']
    },
    created(){
        console.log('websorketBestUrl',this.websorketBestUrl)
        this.websortObserver = new WebSocket(this.websorketBestUrl)
        this.websortObserver.onmessage = (playLoad)=>{
            console.log('接受后端返回的值',playLoad)
        }
    },
    methods:{
        onEvent(){
            // this.eventTypes.forEach(eventType=>{

            // })
        },
        offEvent(){
            // this.eventTypes.forEach(eventType=>{
                
            // })
        },
        onmessage(playLoad){
            console.log('接受后端返回的值',playLoad)
            if(!playLoad){
                return 
            }


        },
        onerror(){}
    }
}