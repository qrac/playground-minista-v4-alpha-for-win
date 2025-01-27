import { defineConfig } from "minista";
import { pluginSsg } from "minista-plugin-ssg";
import { pluginBundle } from "minista-plugin-bundle";
import { pluginImage } from "minista-plugin-image";

export default defineConfig({
  plugins: [pluginSsg(), pluginBundle(), pluginImage({ useCache: true })],
});
