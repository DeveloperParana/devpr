export interface Pkg {
  name:        string;
  description: string;
  version:     string;
  scripts:     { [key: string]: string };
}
