# Marcus Prunty

marcusprunty [at] gmail.com | Heilbronn, Germany
github.com/m-prunty | linkedin.com/in/marcusprunty

## Summary

Backend-leaning software engineer with strong Python and C foundations, focused on event-driven systems, backend services, and production-quality code.
Currently building a CQRS event-driven notification system in Python — implementing an in-process event bus, domain aggregates, command and query handlers, and notification dispatching logic — directly targeting the patterns used in real-world tracking and notification services.
Experience designing and shipping backend automation and data pipelines, with explicit handling of edge cases, validation failures, and semi-structured inputs. Conducted structured Python code reviews at Alignerr, evaluating implementations for correctness, clean architecture, and OOP design. Exposure to microservices concepts through backend service design and project work.
Comfortable reasoning about unfamiliar codebases, debugging to root cause, and writing clean, well-typed Python with strict tooling (mypy, flake8, uv). Strong CS fundamentals from the 42 curriculum: data structures, algorithms, and memory management in C. Cloud exposure via AWS EC2 and GitHub Actions CI/CD.
Background in high-pressure professional kitchens brings a disciplined, detail-oriented approach — used to environments where failures have real consequences and communication needs to be precise.

## Experience

### Python Code Review Specialist — Alignerr / Labelebox, Remote
*2026-02 – Present*

- Human-in-the-loop AI model assessment, designed structured prompts and performed a comparative evaluation of model solutions for correctness, edge-case handling, and adherence to clean OOP design principles.
- Identified logical flaws, anti-patterns, and architectural weaknesses, providing clear and actionable technical feedback against project specifications.
- Evaluated implementations for consistency in structure, readability, and maintainability — developing a practical eye for production-quality Python code.

### Student Developer — 42 Next (Python Track) — 42 Heilbronn, Heilbronn, Germany
*2025-09 – Present*

- Building an event-driven notification system in Python using CQRS patterns — event bus, domain aggregates, command and query handlers, and notification dispatching — targeting real-world tracking and notification service design.
- Completed projects covering pipeline and event dispatch architectures, graph-based routing simulation, and pathfinding algorithms with strict typing and modular design.
- Applied strict Python tooling throughout — mypy strict mode, flake8 with docstring linting (D401), uv for environment management, and structured test coverage.
- Primary language: Python; environment: Linux, Vim, Git, Bash

### Student Developer — 42 Common Core (C Track) — 42 London, London, UK
*2023-01 – 2024-01*

- Completed Common Core through Rank 02 — push_swap, fract-ol, minitalk, get_next_line, and libft — all built in C on Linux from scratch.
- Code review is a formal requirement of the 42 curriculum; regularly evaluated peers' submissions for correctness, norm compliance, and edge-case handling.
- Developed strong habits around Makefiles, modular project structure, pointer safety, and manual memory management.
- Primary language: C; environment: Linux, NeoVim, Git, Bash

### Python Developer (Internal Tooling) / Sous Chef — Heath St Kitchen, Hampstead, London, UK
*2022-07 – 2023-01*

- Built a Python ETL pipeline to extract supplier invoice data from PDFs using Camelot and pandas, loading cleaned records into MongoDB.
- Implemented data validation and normalisation logic for semi-structured inputs, producing weekly spend reports and inventory exports.
- Debugged parsing edge cases and validated extracted values against source documents to ensure data accuracy before downstream use.
- Managed supplier ordering and team coordination during high-volume service.

### BSc Data Science & Analytics (Partial) — University College Cork, Ireland, Cork, Ireland
*2020-09 – 2022-06*

- Python, Java, SQL, R; Statistics, Calculus, Linear Algebra
- Algorithms & Data Structures, Mathematical Modelling, Regression Analysis
- Built solver libraries in Python for calculus and linear algebra as a self-directed project

### Professional Chef — Various (Agency & Contract), London, UK / Cork, Ireland
*2008 – 2025*

- 15+ years across fine dining, hotels, events, and stadium catering — Claridges, The Dorchester, BAFTA, Wembley, Twickenham.
- Managed website, booking systems, and MariaDB stock database as Bar Supervisor.
- High-pressure kitchen environment developed precise attention to detail, systematic process, and clear written communication under time constraints.

## Projects

**Event-Driven Notification System (CQRS)** (github.com/m-prunty/notifications-cqrs)  
Python implementation of a CQRS event-driven notification system modelling order tracking and catalogue workflows. Implements a synchronous in-process event bus, domain aggregates (Order, Book), command and query handlers, and typed notification dispatching logic. Architecture separates read and write concerns, handles domain events explicitly, and routes notifications through handler chains with clear failure boundaries. Built with strict mypy typing, flake8 with docstring linting, Google-style docstrings, and structured test coverage. Designed to demonstrate real-world backend patterns used in tracking and notification services.


**Maze Generation System** (github.com/m-prunty/a_maze_ing)  
Pipeline-based maze generation system built around a stage and event dispatch architecture in Python. Defines MazeEvent and EventType enums to drive stage transitions, with interchangeable strategy components implementing Wilson's, Sidewinder, Prim's, and Dijkstra algorithms. The event dispatch model closely mirrors patterns used in event-driven backend systems. Managed as a local wheel with uv, with clean separation between algorithm logic and rendering pipeline.


**Drone Routing Simulation** (github.com/m-prunty/fly_in)  
Graph-based routing and pathfinding simulation in Python. Implements spatial grid traversal with negative coordinate support, composition-based OOP design, and frozen dataclasses for immutable in-flight state. All graph algorithms implemented from scratch with no third-party libraries. Strict mypy and flake8 compliance throughout. Demonstrates algorithm design, clean architecture, and production-quality Python tooling.


**Invoice Data ETL Pipeline** (github.com/m-prunty/hsk)  
Python ETL pipeline extracting supplier invoice data from PDFs and loading cleaned records into MongoDB. Uses Camelot and pandas to parse semi-structured invoice tables, normalise line items, and build aggregation pipelines for totals, weekly summaries, and inventory exports. Handles parsing edge cases explicitly and validates extracted values against source documents before downstream use. Demonstrates data engineering, document processing, and real-world backend automation.


**Personal Website + CI/CD Pipeline** (marcusprunty.co.uk)  
React frontend and Node.js backend hosted on AWS EC2, with a GitHub Actions CI/CD pipeline for automated deployment on push. Demonstrates cloud hosting, deployment pipeline configuration, and full-stack project delivery.


**push_swap** (github.com/m-prunty/push_swap)  
Sorting algorithm project in C. Designed a custom doubly linked-list stack with index bookkeeping, cost analysis, and a Turk-style move strategy. Demonstrates algorithm design, optimisation thinking, and data structure implementation from scratch.


**get_next_line** (github.com/m-prunty/get_next_line)  
Buffered line reader in C with multi-FD bonus support. Uses per-descriptor static linked-list buffers, chunked reads, newline splitting, and explicit heap cleanup. Strong evidence of stateful I/O handling and memory discipline.


**libft** (github.com/m-prunty/libft)  
Custom C standard library covering memory, strings, linked lists, numeric parsing, and printf support — used as a foundation across subsequent projects. Demonstrates reusable library design and long-term code maintenance.


**Crypto P&L Tracker**  
Python project ingesting buy/sell CSV exports from crypto exchanges, cleaning and loading data into MySQL, and calculating profit/loss and capital gains tax liability. Demonstrates real database integration, data cleaning logic, and structured SQL query design.


**minitalk** (github.com/m-prunty/minitalk)  
Signal-based IPC in C using SIGUSR1/SIGUSR2. Implements bitwise character encoding, PID coordination, server acknowledgements, and sigaction handling — an early exploration of asynchronous inter-process communication patterns.


**Sole Trader Billing Tool**  
MySQL-backed Python tool that takes timesheet and client data, calculates billable amounts, and projects invoice due dates.


**42_py** (github.com/m-prunty/42_py)  
Python OOP exercises using abstract base classes, inheritance hierarchies, and concrete subclass design. Demonstrates Python class architecture and object-oriented patterns.


**fract-ol** (github.com/m-prunty/fract-ol)  
Interactive fractal renderer in C using MiniLibX. Multiple fractal modes, real-time zoom and pan controls, and sidebar UI.


## Skills

**Python:** Python (primary language), OOP — ABCs, inheritance, class design, Event-driven architecture (CQRS, event bus, domain events), dataclasses, typing, match-case (Python 3.11+), pandas, NumPy, Camelot (PDF table extraction), MongoDB / pymongo, MySQL / MariaDB, CSV parsing and data cleaning, ETL pipeline design, Scripting and automation, mypy (strict mode), flake8, uv, Data structures and algorithms in Python
**Languages:** C (strong — 42 Common Core), SQL, JavaScript / TypeScript (basic), R, Bash
**Tools & Environment:** Linux / Unix, Git / GitHub, GitHub Actions (CI/CD), Vim / NeoVim, AWS / EC2, Make, MongoDB, MySQL / MariaDB
**Concepts:** Event-driven systems and CQRS patterns, Backend service design, Notification and tracking system patterns, Code review and technical evaluation, Microservices patterns (via project work), Algorithm design and optimisation, Data structures (linked lists, stacks, graphs), Low-level memory management (C), OOP design patterns, ETL pipelines and data transformation, Stateful I/O and buffered processing, Semi-structured document processing, CI/CD pipeline configuration, Clean code and maintainability

## Education

**42 Next (Python curriculum)**  
42 Heilbronn (2025–present)

**42 Common Core (C curriculum)**  
42 London (2023–2024)

**Data Science Bootcamp**  
CoGrammer / Hyperion (Online) (2023–2024)

**BSc Data Science & Analytics (Partial)**  
University College Cork, Ireland (2020–2022)

**Mature Student Access Programme — Science Path**  
NUI Galway, Ireland (2017–2018)

**Culinary Arts — TICP Level 5 (equiv. City & Guilds Level 3)**  
Cork Institute of Technology (MTU), Ireland (2014–2015)

**Games Design & Development**  
St John's Central College, Cork, Ireland (2009–2010)
