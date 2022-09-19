export type TBuildMode = "production" | "development";

export interface IBuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface IBuildEnv {
  mode: TBuildMode;
  port: number;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPath;
  isDev: boolean;
  port: number;
}
