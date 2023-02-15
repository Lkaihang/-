<template>
  <Tutorial/>
</template>

<script>
export default {

  //SSR 可以通过上下文信息抓取服务端内容
  //middleware:'auth',
  middleware(){
    console.log('middleware pages')
  },

  //参数有效性
  validate({params, query}){
    //校验业务
    console.log('validate');
    return true;
  },

  //读数据，返回给组件
  asyncData(context){
    //异步业务逻辑，读取服务端数据
    console.log('asyncData');
    return {
      b: 2
    }
  },

  //读数据 vuex
  fetch({store}){
    console.log('fetch');
  },

  //运行在SSR&&CSR

  beforeCreate(){
    console.log('beforeCreate');
  },

  created(){
    console.log('created');
  },

  //CSR 可以访问window this(指组件本身)
  beforeMount(){},
  mounted(){},
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},

  data(){
    return {
      a: 1
    }
  },

  name: 'IndexPage',
  
}
</script>
