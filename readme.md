# 📝 Todo List Web Application

A simple, interactive Todo List application built using **HTML**, **CSS**, and **JavaScript**. It allows users to add, remove, and mark tasks as completed. The app also stores all tasks in **localStorage**, so your tasks remain even after refreshing the page.

---

## 🚀 Live Demo

🌐 **Project URL:** https://to-do-list-gilt-omega.vercel.app/

---

## Linkedin

url : https://www.linkedin.com/in/ehthisham-ul-haq-538abb295/
connect me on Linkedin

---
## Portfolio

url : https://portfolio-website-7qi.pages.dev/

visit my portfolio to see my projects and skills.
---

## 💡 Features

- ✅ Add new tasks with a single click
- 🗑️ Delete tasks instantly
- ☑️ Mark tasks as completed (with checkbox)
- 💾 Persistent storage using **localStorage**
- 🔁 Automatically loads tasks on page refresh
- 📦 Keeps track of the task's **completed** state
- ✨ Responsive and minimalist design

---

## 🧱 Tech Stack

| Technology | Description |
|------------|-------------|
| **HTML5**  | Page structure and semantic layout |
| **CSS3**   | Styling, responsive layout |
| **JavaScript (Vanilla)** | Logic for task management, DOM manipulation, localStorage |

---

## 📁 Project Structure
│
├── index.html # Main HTML page
├── style.css # Styling file
├── script.js # JavaScript logic (task handling + localStorage)
├── /assets # Icons (e.g., delete icon)
└── README.md # Project documentation


---

## 📚 How It Works

1. **Adding a Task**  
   - User enters a task in the input field
   - Clicks "Add" button
   - Task is added to the list with:
     - `<p>` element showing task name
     - Delete icon (`<img>`)
     - Checkbox for completion

2. **LocalStorage Handling**  
   - On every task addition or removal, tasks are saved to `localStorage` in this format:
     ```json
     [
       { "text": "Buy groceries", "completed": false },
       { "text": "Complete project", "completed": true }
     ]
     ```
   - On page reload, tasks are fetched and re-rendered with their completion state.

3. **Completion Toggle**  
   - Checking the box adds a class and updates localStorage
   - Unchecking removes the class and updates the task status in storage

---

## 🔧 How to Run Locally

```bash
git clone https://github.com/M-Ehthisham18/to-do-list
cd todo-list
open index.html # or just open in your browser
