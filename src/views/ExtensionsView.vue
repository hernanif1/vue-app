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
import extensions from '../assets/extensions.json';

export default {
  name: 'ExtensionsList',
  data() {
    return {
      extensions
    };
  },
  methods: {
    installExtension(extension) {
      extension.installed = true;
      console.log(`Installing ${extension.name}...`);
    }
  }
};
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