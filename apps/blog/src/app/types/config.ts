import { PaginationData } from "./pagination-data";

export interface Config {
  userConfig:        string[];
  overrides:         PaginationData;
  projectConfigPath: string;
  customRootConfig:  null;
  rootConfig:        string[];
  hasConfigMerged:   boolean;
  logger:            string[];
  config:            string[];
  verbose:           boolean;
}
