<template>
  <div>
    this is a page
    <el-button @click="test">element</el-button>
  </div>
</template>

<script setup>
  import {testApi} from '@/api/home'
  function test(){
    testApi()
  }
</script>

<style>

</style>