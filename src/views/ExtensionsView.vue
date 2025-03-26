<template>
  <div>
    <h2>Available Extensions</h2>
    <ul>
      <li v-for="extension in extensions" :key="extension.name">
        <strong>{{ extension.name }}</strong>: {{ extension.description }}
        <button @click="installExtension(extension)" :disabled="extension.installed">
          {{ extension.installed ? 'Installed' : 'Install' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useExtensionsStore, type Extension } from '../stores/extensions';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ExtensionsList',
  setup() {
    const store = useExtensionsStore();
    const router = useRouter();
    const extensions = computed(() => store.extensions);

    const installExtension = (extension: Extension) => {
      store.installExtension(extension);
      router.push(extension.internalUrl);
    };

    return {
      extensions,
      installExtension
    };
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-left: 10px;
}
</style>