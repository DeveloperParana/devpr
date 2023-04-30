import { PaginationData } from "./pagination-data";

export interface ExtensionMap {
  eleventyConfig:            string[];
  _config:                   string[];
  formatKeys:                string[];
  unfilteredFormatKeys:      string[];
  _extensionToKeyMap:        string[];
  validTemplateLanguageKeys: string[];
  passthroughCopyKeys:       string[];
  _spiderJsDepsCache:        PaginationData;
  _engineManager:            string[];
}
