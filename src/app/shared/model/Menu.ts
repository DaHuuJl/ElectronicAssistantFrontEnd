export class Menu {
  public name: string;
  public path: string;
  public selected: boolean;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
    this.selected = false;
  }
}
