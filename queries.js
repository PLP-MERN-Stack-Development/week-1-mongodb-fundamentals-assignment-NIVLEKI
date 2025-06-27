// ✅ Basic Queries

// 1️⃣ Find all books in genre "Fiction"
db.books.find({ genre: "Fiction" });

// 2️⃣ Find books published after 2000
db.books.find({ published_year: { $gt: 2000 } });

// 3️⃣ Find books by George Orwell
db.books.find({ author: "George Orwell" });

// 4️⃣ Find in-stock books published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 5️⃣ Return only title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 6️⃣ Sort books by price ascending
db.books.find().sort({ price: 1 });

// 7️⃣ Sort books by price descending
db.books.find().sort({ price: -1 });

// 8️⃣ Pagination: limit 5
db.books.find().limit(5);

// 9️⃣ Pagination: skip 5, limit 5
db.books.find().skip(5).limit(5);



// ✅ Update

// 🔹 Update price of "1984" to 13.99
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
);


// ✅ Delete

// 🔹 Delete book "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" });



// ✅ Aggregation Pipelines

// 🔹 Average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 🔹 Author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 🔹 Group books by decade
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $substr: [ { $toString: "$published_year" }, 0, 3 ] },
          "0s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  }
]);



// ✅ Indexing

// 🔹 Create index on title
db.books.createIndex({ title: 1 });

// 🔹 Create compound index on author + published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 🔹 Example explain plan query (run in shell or Compass)
db.books.find({ title: "1984" }).explain("executionStats");
