<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <aside class="sidebar">
      <nav>
        <RouterLink to="/" class="nav-icon">
          <span class="icon">🏠</span>
          <span class="tooltip">Extensions</span>
        </RouterLink>
      </nav>
    </aside>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 60px;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.nav-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  color: #ecf0f1;
  text-decoration: none;
}

.nav-icon .icon {
  font-size: 24px;
}

.nav-icon .tooltip {
  font-size: 12px;
  margin-top: 0.5rem;
  display: none;
}

.nav-icon:hover .tooltip {
  display: block;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>