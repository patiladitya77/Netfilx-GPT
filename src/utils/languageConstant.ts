type languages = {
  en: {
    search: string;
    gptSearchPlaceholder: string;
  };
  hindi: {
    search: string;
    gptSearchPlaceholder: string;
  };
  spanish: {
    search: string;
    gptSearchPlaceholder: string;
  };
};

const lang: languages = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What do you want to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहते हैं?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué quieres ver hoy?",
  },
};
export default lang;
