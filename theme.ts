import { buildLegacyTheme } from "sanity";


const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--coding-blog": "#e23e57",
    "--my-red": "#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58",
};


export const myTheme = buildLegacyTheme({
    // base theme colors

    "--black" : props["--my-black"],
    "--white" : props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],

    "--component-text-color": props["--my-white"],

    // brand

    "--brand-primary": props["--coding-blog"],

    // default buttton
    "--default-button-color" : "#666",
    "--default-button-primary-color": props["--coding-blog"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color" : props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],
   

// state

"--state-info-color": props["--coding-blog"],
"--state-success-color": props["--my-green"],
"--state-warning-color": props["--my-yellow"],
"--state-danger-color": props["--my-red"],

// Navbar
"--main-navigation-color" : props["--my-black"],
"--main-navigation-color--inverted": props["--my-white"],


"--focus-color": props["--coding-blog"]

})