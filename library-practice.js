// Instructions
// Scenario:
// You are tasked with designing a library management system. The library
// lends out various types of items such as books, DVDs, and magazines. While
// all items share some common properties (e.g., title, id, isAvailable), each
// type has unique properties and behaviors. For example:
// ● Books have an author and a genre.
// ● DVDs have a director and duration.
// ● Magazines have an issueNumber and publisher.

// Tasks
// 1. Step 1: Create a Base Class
// ○ Define a class LibraryItem to represent shared properties
// (title, id, isAvailable) and methods (e.g., checkOut() and
// returnItem()).

// 2. Step 2: Extend the Base Class
// ○ Create child classes Book, DVD, and Magazine that inherit from
// LibraryItem.
// ○ Add unique properties and methods for each child class:
// ■ Book: Add properties like author and genre.
// ■ DVD: Add properties like director and duration.
// ■ Magazine: Add properties like issueNumber and publisher.

// 3. Step 3: Instantiate Objects
// ○ Create instances of each class and test the shared and unique
// methods.

// 4. Step 4: Test the Inheritance
// ○ Use inherited methods like checkOut() and returnItem() to
// manage the availability of items.
// ○ Test accessing and displaying unique properties of each child
// class.

// Setup
// For this activity, you will create your own repository to store your code:
// 1. Create a new repository.
// 2. Name it: practice-library-management-[Your First Name]-[Your Last Initial]
// 3. Make sure the repository is public.
// 4. Clone the repository to your local machine.
// 5. Start working on the code.
// 6. When you are finished, commit your changes and push them to your
// repository.
// Submission
// Submit the url for your GitHub repo in the field below.

// remove isAvailable from every class

class LibraryItem {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.isAvailable = true;
  }

  checkout() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been checked out successfully!`);
    } else {
      console.log(`${this.title} is not currently available.`);
    }
  }

  returnItem() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned successfully!`);
    } else {
      console.log(`${this.title} already in the system.`);
    }
  }
}

class Book extends LibraryItem {
  constructor(title, id, author, genre) {
    super(title, id);
    this.author = author;
    this.genre = genre;
  }
  getBookInfo() {
    console.log(
      `\nBook title: ${this.title}, \nAuthor: ${this.author} \nGenre: ${this.genre} \nLibrary Id: ${this.id} \nStatus: ${this.isAvailable} `,
    );
  }
}

class DVD extends LibraryItem {
  constructor(title, id, director, duration) {
    super(title, id);
    this.director = director;
    this.duration = duration;
  }
  getDVDInfo() {
    console.log(
      `\nMovie Title: ${this.title}, \nDirector: ${this.directir} \nDuration: ${this.duration} \nLibrary Id: ${this.id} \nStatus: ${this.isAvailable}`,
    );
  }
   // dvdById() {
//    }
}

class Magazine extends LibraryItem {
  constructor(title, id, issueNumber, publisher) {
    super(title, id);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }
  getMagazineInfo() {
    console.log(
      `\nMovie Title: ${this.title}, \nPublisher: ${this.publisher} \nIssue #: ${this.issueNumber} \nLibrary Id: ${this.id} \nStatus: ${this.isAvailable} `,
    );
  }

  //     magazinesByIssueNumber() {
  //     for (magazine in Magazine
  //     }
}

const book = new Book(
  "The Curious Incident of the Dog at Night-Time",
  1,
  "George Orwell",
  "Political Fiction",
);

const dvd = new DVD("Life of PI", 2, "Ang Lee", 125);

const magazine = new Magazine("Mad Magazine", 3, 54, "DC Comics");


// Testing checkoutItem
book.checkout();
dvd.checkout();
magazine.checkout();


// Testing returnItem
book.returnItem();
dvd.returnItem();
magazine.returnItem();

// Veifying availability
book.checkout();
dvd.checkout();
magazine.checkout();

// Testing child class methods
book.getBookInfo();
magazine.getMagazineInfo();
dvd.getDVDInfo();

