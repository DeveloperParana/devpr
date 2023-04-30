export interface TemplateRender {
  _config:           string[];
  engineNameOrPath:  string;
  inputDir:          string;
  includesDir:       string;
  parseMarkdownWith: string;
  parseHtmlWith:     string;
  _extensionMap:     string[];
  _engineName:       string;
  _engine:           string[];
  useMarkdown:       boolean;
}
