import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

test('load buffer', () => {
  const expected = getBuffer();

  const buf = new ArrayBufferConverter();
  buf.load(getBuffer());
  expect(buf.buffer).toEqual(expected);
});

test('buffer to string', () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buf = new ArrayBufferConverter();
  buf.load(getBuffer());
  expect(buf.toString()).toEqual(expected);
});
