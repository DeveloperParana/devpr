import { Template } from "./template";
import { Data } from "./data";

export interface Post {
  template:             Template;
  inputPath:            string;
  fileSlug:             string;
  filePathStem:         string;
  data:                 Data;
  date:                 string;
  outputPath:           string;
  url:                  string;
  checkTemplateContent: boolean;
  templateContent:      string[];
  _templateContent:     string;
}
