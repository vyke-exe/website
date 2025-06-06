import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume();

site.add("/styles.css");
site.add("/gallery_styles.css");
site.add("/img");
site.add("/gallery");
site.add("/fonts");
site.add("/buttons");

site.use(basePath());

export default site;
