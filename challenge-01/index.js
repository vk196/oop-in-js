// 1)create a class abt different books in store and available copies
// if no copies return low stock
// if greater than 10 return 
 
class books{
    constructor(title,author,ISBN,copies){
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.copies = copies
    };

    get avail(){
        return this.getAvailability();
    }

}