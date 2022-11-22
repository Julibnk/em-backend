import { StringValueObject } from './StringValueObject';

const DEFAULT_PREFIX = '+34';
export class PhonePrefix extends StringValueObject {
  constructor(value?: string) {
    super(value || DEFAULT_PREFIX);
  }
}
