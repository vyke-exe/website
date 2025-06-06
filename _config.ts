import lume from "lume/mod.ts";

const site = lume();

site.add("/styles.css");
site.add("/gallery_styles.css");
site.add("/img");
site.add("/gallery");
site.add("/fonts");
site.add("/buttons");

export default site;
