import { PaginationData } from "./pagination-data";

export interface ComputedData {
  computed:                PaginationData;
  symbolParseFunctions:    PaginationData;
  templateStringKeyLookup: PaginationData;
  computedKeys:            PaginationData;
  declaredDependencies:    PaginationData;
  queue:                   string[];
  config:                  string[];
}
