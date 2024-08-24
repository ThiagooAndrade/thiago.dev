import { Ref } from "vue";

export type themeColorType = {
  isDarkMode: Ref<boolean>;
  toggleThemeMode: () => void;
}

export type projectsDataType = {
  img: string;
  title: string;
  description: string;
  githubUrl: string;
  livePreview: string;
  stack: string[];
}