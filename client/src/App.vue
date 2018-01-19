<template>
  <div id="app">
    <Navi />
    <Flash />
    <router-view />
  </div>
</template>

<script>
import Navi from '@/components/Navi'
import Flash from '@/components/Flash'

export default {
  name: 'app',
  components: { Navi, Flash },
}
</script>

<style>
body {
  font-family: 'Nunito', sans-serif;
}

.success {
  background-color: #79BD9A;
}

.info {
  background-color: #00B4CC;
}

.danger {
  background-color: #C02942;
}

.warning {
  background-color: #ECD078;
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40vh;
  padding: 2em;
  border: solid;
  border-color: #343838;
  box-shadow: 10px 10px #343838; 
}

.card > * {
  margin: 10px;
}

input {
  padding: 12px;
}

h1, h4 {
  color: #343838;
}
</style>
