export function install (hook, vm) {
    hook.mounted(function () {
        if(!window.$docsify.baiduTjId){
            console.warn("[docsify-baidu-tj] baiduTjId not config")
            return ;
        }
        var id = window.$docsify.baiduTjId;
        var host = window.location.host;
        // if(host.startsWith("localhost") || host.startsWith("127.0.0.1")){
        //     console.warn("[docsify-baidu-tj] local ip not collect")
        //     return ;
        // }
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?"+id;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        console.info(id)
        console.info("docsify-baidu-tj init success!")
    })
  }