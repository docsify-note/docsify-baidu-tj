export function install (hook, vm) {
    hook.mounted(function () {
        console.info("docsify-baidu-tj init success!")
        console.info(window.$docsify.bdtj)
        console.info(vm)
    })
  }