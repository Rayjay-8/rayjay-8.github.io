// ao invez de adicionar classe, o melhor é setar uma var css

function getColorPreference() {
   const LOCAL_STORAGE_THEME = "usehooks-ts-dark-mode";
   const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
   if (localStorage.getItem(LOCAL_STORAGE_THEME)) {
      return localStorage.getItem(LOCAL_STORAGE_THEME) === "true"
         ? true
         : false;
   } else {
      return window.matchMedia(COLOR_SCHEME_QUERY).matches;
   }
}

function themeToggle() {
   const isDark = getColorPreference();

   var r = document.querySelector(":root");

   if (isDark) {
      document.documentElement.classList.add("dark");
      // r?.style.setProperty("--blue", "lightblue");
   } else {
      document.documentElement.classList.remove("dark");
   }
}

themeToggle();
