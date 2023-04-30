import { Collections } from "./collections";
import { Eleventy } from "./eleventy";
import { Metadata } from "./metadata";
import { Page } from "./page";
import { Pkg } from "./pkg";

export interface LayoutProps {
  metadata:       Metadata;
  baseUrl:        string;
  eleventy:       Eleventy;
  pkg:            Pkg;
  tags:           string[];
  layout:         string;
  title:          string;
  date:           string;
  page:           Page;
  collections:    Collections;
  content:        string;
  layoutContent:  string;
  _layoutContent: string;
}

