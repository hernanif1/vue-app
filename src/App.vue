<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useExtensionsStore } from './stores/extensions';
import { computed, onMounted } from 'vue';
import router from "./router";

const store = useExtensionsStore();
onMounted(() => {
  store.setExtensions([
    { name: 'Correção online', description: 'Corrija textos online', installed: false, internalUrl: '/corrrecao-online', externalAppUrl: 'https://example.com/', icon: '🔧' },
  ]);
});

const installedExtensions = computed(() => store.extensions.filter(extension => extension.installed));
const currentExtension = computed(() => {
  return store.extensions.find(extension => {
    console.log('router.currentRoute.value.path', router.currentRoute.value.path);
    console.log('extension.internalUrl', extension.internalUrl);
   return  extension.internalUrl === router.currentRoute.value.path
  });
});
</script>

<template>
  <div class="app-container">
    <aside class="sidebar">
      <nav>
        <RouterLink to="/" class="nav-icon">
          <span class="icon">🏠</span>
          <span class="tooltip">Extensions</span>
        </RouterLink>

        <div v-for="extension in installedExtensions" :key="extension.name" class="nav-icon">
          <RouterLink :to="extension.internalUrl" class="nav-icon">
            <span class="icon">{{ extension.icon }}</span>
            <span class="tooltip">{{ extension.name }}</span>
          </RouterLink>
        </div>
      </nav>
    </aside>

    <main class="main-content">
      <div class="external-app" v-if="currentExtension">
        <iframe :src="currentExtension.externalAppUrl" class="external-app"></iframe>
      </div>
      <div v-else>
        <RouterView />
      </div>
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
  overflow-y: auto;
  min-height: 100%;
}

.external-app {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
}
</style>