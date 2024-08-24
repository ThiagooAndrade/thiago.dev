import { InjectionKey } from "vue";
import { themeColorType } from "../types/Types";

export const themeColor = Symbol() as InjectionKey<themeColorType>;