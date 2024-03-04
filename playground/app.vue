<template>
  <div>
    Tdesign Nuxt module playground!
  </div>
  
  <t-divider>Basic</t-divider>
  <t-space>
    <t-button>Button</t-button>
  </t-space>

  <t-divider>Layout</t-divider>

  <t-divider>Data</t-divider>
  <t-space>
    <t-date-picker></t-date-picker>
  </t-space>
  <t-divider>Plugin</t-divider>
  <t-space>
    <t-button @click="handleDialog">DialogPlugin</t-button>
    <t-button @click="handleMessage">MessagePlugin</t-button>
    <t-button @click="handleNotify">NotifyPlugin</t-button>
    <t-button @click="handleLoading">LoadingPlugin</t-button>
  </t-space>

</template>

<script setup>
const handleDialog=()=>{
  const confirmDialog = DialogPlugin.confirm({
    header: '提交后不可再编辑会进入审批流程',
    body: '是否确认提交？',
    confirmBtn: {
      content: '提交',
      theme: 'primary',
      loading: false,
    },
    theme: 'warning',
    onConfirm: () => {
      confirmDialog.update({ confirmBtn: { content: '提交中', loading: true } });
      // confirmDialog.update({ confirmLoading: true });
      // confirmDialog.setConfirmLoading(true);
      const timer = setTimeout(() => {
        confirmDialog.update({ confirmBtn: { content: '提交', loading: false } });
        // confirmDialog.update({ confirmLoading: false });
        // confirmDialog.setConfirmLoading(false);
        confirmDialog.hide();
        clearTimeout(timer);
      }, 500);
    },
  });
}
const handleMessage=()=>{
  MessagePlugin.success("dfas");
}
const handleNotify=()=>{
  NotifyPlugin.info({
      title: '标题名称',
      content: '这是一条消息通知',
      duration: 0,
      closeBtn:true
    });
}
const handleLoading=()=>{
  const instance = LoadingPlugin({
    fullscreen: true,
    attach: 'body',
    preventScrollThrough: false,
  });
  const timer = setTimeout(() => {
    instance.hide();
    clearTimeout(timer);
  }, 1000);
}
</script>

