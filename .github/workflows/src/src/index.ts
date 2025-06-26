/**
 * Placeholder module
 * Replace or extend this file when the real assignment arrives.
 */

export function helloWorld(): string {
  return 'Hello, Olena!';
}
import { helloWorld } from '../src/index';

test('helloWorld returns the expected greeting', () => {
  expect(helloWorld()).toBe('Hello, Olena!');
});
