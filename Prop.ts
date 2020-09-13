class Prop {
  _x: number = 10;
  get x() {
    return this._x;
  }
  set x(val) {
    this._x = val;
  }
}

export default Prop;
