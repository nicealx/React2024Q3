export default class LS {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public setValue(value: string) {
    localStorage.setItem(this.name, value);
  }

  public getValue() {
    return localStorage.getItem(this.name) ?? '';
  }

  public clear() {
    localStorage.clear();
  }
}
