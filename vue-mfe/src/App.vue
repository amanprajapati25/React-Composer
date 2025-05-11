<template>
  <div class="vue-container">
    <h2>Vue Micro Frontend</h2>
    <p>This component is built with Vue and exposed through both single-spa and Module Federation</p>
    
    <div>
      <p>Counter: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1;
    }
  }
};
</script>

<style scoped>
.vue-container {
  border: 2px solid green;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}
</style>