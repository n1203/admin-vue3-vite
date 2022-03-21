import cloudbase from "@cloudbase/js-sdk";

const app = cloudbase.init({
  env: import.meta.env.VITE_APP_CLOUDBASE_ENV as string
});

console.log(app);
