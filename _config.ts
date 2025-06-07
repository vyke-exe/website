import lume from "lume/mod.ts";

const site = lume();

site.add("/style.css");
site.add("/gallery_styles.css");
site.add("/img");
site.add("/gallery");
site.add("/fonts");
site.add("/buttons");

site.use(basePath());

export default site;
