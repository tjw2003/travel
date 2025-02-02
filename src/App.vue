<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Login</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
    </header>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  background-color: #f8f9fa;
  padding: 10px 0;
}

nav {
  margin: 0;
}

router-link {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

router-link.active {
  font-weight: bold;
}
</style>
