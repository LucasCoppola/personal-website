---
title: "SQL Database"
description: "A SQL database engine built from scratch in C."
date: "Jan 2026"
technologies: ["C", "GCC", "Valgrind"]
githubURL: "https://github.com/LucasCoppola/database.c"
---

A SQL database engine built from scratch in C, featuring a complete query processing pipeline (tokenizer → parser → semantic analyzer → executor).

Implements core database internals for data storage and retrieval:

- **Storage & Persistence:** Developed a page-based storage system that persists data to disk in a custom binary format.
- **Data Structures:** Built a custom auto-resizing HashMap for O(1) table lookups and implemented cursor-based traversal for row operations.
- **Query Logic:** The engine supports core SQL operations like `CREATE/DROP TABLE`, `INSERT`, `SELECT`, and `DELETE`, including `WHERE` clause filtering with type-safety checks.

The project was a deep dive into memory management, database internals, and systems architecture, with components tested using Valgrind for memory safety.
