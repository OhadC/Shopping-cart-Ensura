export class Product {
  private static nextId: number = 0;

  private id: number;
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.id = Product.nextId++;
    this.name = name;
    this.price = price;
  }

  public getId() {
    return this.id;
  }
}
