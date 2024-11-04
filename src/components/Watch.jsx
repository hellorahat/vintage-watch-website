class Watch {
  constructor({
    id,
    type,
    brand,
    model,
    color,
    release,
    diameter,
    shape,
    image,
    price,
    DateAdded,
  }) {
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.release = release;
    this.diameter = diameter;
    this.shape = shape;
    this.image = image;
    this.price = price;
    this.DateAdded = DateAdded;
  }
}

export default Watch;
