import { FrontMatterDataCache } from "./front-matter-data-cache";
import { PaginationData } from "./pagination-data";
import { TemplateRender } from "./template-render";
import { ExtensionMap } from "./extension-map";
import { ComputedData } from "./computed-data";
import { TemplateData } from "./template-data";
import { FrontMatter } from "./front-matter";
import { DataCache } from "./data-cache";
import { FileSlug } from "./file-slug";
import { Behavior } from "./behavior";
import { Layout } from "./layout";
import { Logger } from "./logger";
import { Parsed } from "./parsed";
import { Config } from "./config";

export interface Template {
  _config:                 Config;
  inputPath:               string;
  inputDir:                string;
  parsed:                  Parsed;
  extraOutputSubdirectory: string;
  outputDir:               string;
  _extensionMap:           ExtensionMap;
  linters:                 unknown[];
  transforms:              string[][];
  plugins:                 PaginationData;
  templateData:            TemplateData;
  paginationData:          PaginationData;
  isVerbose:               boolean;
  isDryRun:                boolean;
  writeCount:              number;
  skippedCount:            number;
  wrapWithLayouts:         boolean;
  fileSlug:                FileSlug;
  fileSlugStr:             string;
  filePathStem:            string;
  outputFormat:            string;
  behavior:                Behavior;
  serverlessUrls:          null;
  _logger:                 Logger;
  _templateRender:         TemplateRender;
  inputContent:            string;
  frontMatter:             FrontMatter;
  _frontMatterDataCache:   FrontMatterDataCache;
  _layoutKey:              string;
  _layout:                 Layout;
  dataCache:               DataCache;
  computedData:            ComputedData;
  _usePermalinkRoot:       null;
}
