export function html(strings: TemplateStringsArray, ...values: string[]) {
  return strings.map((str, i) => str + (values[i] ?? '')).join('');
}
