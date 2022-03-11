export class Menu {
  public name: string;
  public path: string;
  public img: string;
  public alt: string;
  public selected: boolean;

  constructor(name: string, path: string, img: string, alt: string) {
    this.name = name;
    this.path = path;
    this.img = img;
    this.alt = alt;
    this.selected = false;
  }
}
