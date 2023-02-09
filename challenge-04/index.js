class TechnicalBooks {
  constructor(title, author, ISBN, copies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.copies = copies;
    this.edition = "5th";
  }
  get edition() {
    return this.getEdition();
  }
  getEdition() {
    if (this.edition === "5th") {
      return `this book edition is ${this.edition}`;
    }
  }
}
