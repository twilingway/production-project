import { IBuildOptions } from "./types/config";
import { ResolveOptions } from "webpack";

export function buildResolvers(option: IBuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [option.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
