# 📚 MongoDB Bookstore Assignment

This repository contains my Week 1 MongoDB assignment for the PLP course.  
I used **MongoDB Atlas** to create and manage the `plp_bookstore` database and the `books` collection.  
All queries, aggregations, and indexing tasks were completed and screenshots are included.

---

## 🚀 Setup

1️⃣ I used **MongoDB Atlas** to host my database.  
2️⃣ The database name is: `plp_bookstore`  
3️⃣ The main collection is: `books`  
4️⃣ Data was inserted manually via Atlas using an Insert Many JSON array.  

---

## 📂 Files Included

- `insert_books.js` – Contains the book data script (for reference).  
- `queries.js` – Contains all MongoDB queries and aggregation pipelines used.  
- `screenshots/` – Contains screenshots of:
  - All queries run with their results
  - Aggregation pipelines
  - Index creation
  - Explain plan output

---

## 📸 Screenshots List

- `fiction_books.png` — Filter query: all books in genre "Fiction"
- `published_after_2000.png` — Books published after 2000
- `george_orwell_books.png` — Books by George Orwell
- `updated_1984_price_before.png` — Price of 1984 before update  
- `updated_1984_price_after.png` — Price of 1984 after update  
- `deleted_moby_dick_before.png` — Moby Dick exists before deletion  
- `deleted_moby_dick_after.png` — Moby Dick deleted  
- `avg_price_by_genre.png` — Aggregation: average price by genre  
- `author_most_books.png` — Aggregation: author with most books  
- `books_by_decade.png` — Aggregation: books grouped by decade  
- `index_on_title.png` — Index created on `title`
- `index_on_author_year.png` — Compound index on `author` + `published_year`
- `explain_plan.png` — Explain plan output for indexed search

---

## 📝 How to Run Queries

Since I used Atlas:
- Queries were executed in **Atlas Filter bar** and **Aggregation tab**.
- No local script execution was required.
- Results are captured in the screenshots.

---

## 💡 Notes

- Node.js was not used due to setup challenges; all tasks were done using the Atlas UI.
- The database is accessible through MongoDB Atlas connection string (secured).  

---

## ✅ Submission

All required files and screenshots are committed and pushed to this repository as instructed.

