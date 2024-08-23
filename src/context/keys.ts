import { InjectionKey, Ref } from "vue";

export type themeColorType = {
  isDarkMode: Ref<boolean>;
  toggleThemeMode: () => void;
}

export const themeColor = Symbol() as InjectionKey<themeColorType>;