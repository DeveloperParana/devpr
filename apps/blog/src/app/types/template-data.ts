export interface TemplateData {
  eleventyConfig:        string[];
  config:                string[];
  dataTemplateEngine:    boolean;
  inputDirNeedsCheck:    boolean;
  inputDir:              string;
  dataDir:               string;
  rawImports:            string[];
  globalData:            string[];
  templateDirectoryData: string[];
  _fsExistsCache:        string[];
  _extensionMap:         string[];
  _env:                  string[];
  configApiGlobalData:   string[];
  pathCache:             string[];
}
