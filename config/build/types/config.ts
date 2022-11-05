export type TBuildMode = 'production' | 'development';

export interface IBuildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildEnv {
  mode: TBuildMode;
  port: number;
  apiUrl: string;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPath;
  isDev: boolean;
  port: number;
  apiUrl: string;
}
