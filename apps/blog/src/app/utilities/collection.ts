import type { Data, Page, Post } from '../types';
import { join } from './join';

type FnPage = (value: Page[], index?: number, array?: Page[][]) => void;
type FnPost = (value: Post, index?: number, array?: Post[]) => void;

function collection<D extends Data, K extends keyof Data['collections']>(
  data: D,
  key: K,
  fn: FnPage
): string;
function collection<D extends Data, K extends keyof Data['collections']>(
  data: D,
  key: K,
  fn: FnPost
): string;
function collection<D extends Data, K extends keyof Data['collections']>(
  data: D,
  key: K,
  fn: any
): string {
  return join(
    data.collections[key].map((value) => {
      return Array.isArray(value) ? value.map(fn) : fn(value);
    })
  );
}

export { collection };
