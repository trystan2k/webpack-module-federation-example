import { initializeI18next } from "@mfes/shared-library";

import enUS from "./lang/enUS";
import esES from "./lang/esES";
import ptBR from "./lang/ptBR";
  
const i18nResources = {
  "en-US": enUS,
  "es-ES": esES,
  "pt-BR": ptBR
};  

initializeI18next(i18nResources);
