import { PaginationData } from "./pagination-data";

export interface Layout {
  _config:               string[];
  inputPath:             string;
  inputDir:              string;
  _extensionMap:         string[];
  dataKeyLayoutPath:     string;
  _templateRender:       string[];
  inputContent:          string;
  frontMatter:           string[];
  _frontMatterDataCache: string[];
  mapCache:              string[];
  layoutChain:           string[];
  dataCache:             PaginationData;
}
