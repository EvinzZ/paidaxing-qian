<template>
  <div ref="editorContainer" style="min-height: 500px;"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue";
import * as monaco from "monaco-editor";

const codeContent = ref("");
const editorContainer = ref<any>(null);
const editor = ref<any>(null);
const editorTheme = ref<string>("vs-dark");

onMounted(() => {
  editor.value = monaco.editor.create(editorContainer.value, {
    value: "",
    theme: editorTheme.value, // 主题
    language: "java",
    folding: true, // 是否折叠
    foldingHighlight: true, // 折叠等高线
    foldingStrategy: "indentation", // 折叠方式  auto | indentation
    showFoldingControls: "always", // 是否一直显示折叠 always | mouseover
    disableLayerHinting: true, // 等宽优化
    emptySelectionClipboard: false, // 空选择剪切板
    selectionClipboard: false, // 选择剪切板
    automaticLayout: true, // 自动布局
    codeLens: false, // 代码镜头
    scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
    colorDecorators: true, // 颜色装饰器
    accessibilitySupport: "off", // 辅助功能支持  "auto" | "off" | "on"
    lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
    lineNumbersMinChars: 5, // 行号最小字符   number
    readOnly: false, //是否只读  取值 true | false
  });
  // 监听内容变化
  editor.value.onDidChangeModelContent((e) => {});
  console.log(editor.value, "监听内容变化");
  // 监听失去焦点事件
  editor.value.onDidBlurEditorText(() => {});
});
// 获取编辑框内容
function getCodeContext() {
  codeContent.value = toRaw(editor.value).getValue();
  return console.log(codeContent.value);
}
</script>

<style scoped>

</style>