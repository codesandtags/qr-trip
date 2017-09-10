export class City {
  private id: string;
  private name: string;
  private code: string;
  private region: string;
  private image: string;

  constructor(id: string, name: string, code: string, region: string, image: string) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.region = region;
    this.image = image;
  }
}
