export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const decodeBuf = new TextDecoder().decode(this.buffer);
    return decodeBuf;
  }
}
