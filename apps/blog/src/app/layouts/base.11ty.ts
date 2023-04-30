import { htmlBody } from '../templates/html-body';
import type { Data } from '../types/data';

class Base {

  render(data: Data) {
    return htmlBody(data);
  }
}

module.exports = Base;
