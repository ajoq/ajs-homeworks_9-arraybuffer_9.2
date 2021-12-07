export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const decodeBuf = new Uint16Array(this.buffer);
    let result = '';
    decodeBuf.forEach((item) => {
      result += String.fromCharCode(item);
    });
    return result;
  }
}
