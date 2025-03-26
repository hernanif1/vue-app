import { defineStore } from 'pinia';

export interface Extension {
  name: string;
  description: string;
  installed: boolean;
  externalAppUrl: string;
  internalUrl: string;
  icon: string;
}

interface ExtensionsState {
  extensions: Extension[];
}

export const useExtensionsStore = defineStore('extensions', {
  state: (): ExtensionsState => ({
    extensions: [],
  }),
  actions: {
    installExtension(extension: Extension) {
      extension.installed = true;
    },
    setExtensions(extensions: Extension[]) {
      this.extensions = extensions;
    }
  }
});