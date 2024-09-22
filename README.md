Book Inventory Management System
This is a simple web-based application for managing a book inventory system. It allows users to add new books, search for books, and export book data in CSV or JSON format. The application also includes a theme switcher (light and dark mode) for better user experience.

Table of Contents

1. Project Overview
2. Features
3. Installation
4. Database Setup
5. Running the Application
6. Usage
7. Theme Switcher
8. Technologies Used
9. Project Structure
10. License

1. Project Overview
The Book Inventory Management System is designed to help manage a collection of books, enabling users to:
Add new books with details like title, author, genre, publication date, and ISBN.
Search for books based on title, author, and genre.
Export the list of books as CSV or JSON files.
Toggle between light and dark modes using a custom theme switcher.

2. Features
Add New Books: Users can add new books to the inventory by filling out a simple form.
Search Functionality: Easily search for books based on title, author, and genre.
Export Data: Export book data in both CSV and JSON formats.
Dark/Light Mode Switch: Switch between light and dark themes using the lightbulb icon.

3. Installation
Prerequisites:
Node.js (v14.x or higher)
SQLite (comes with the project)
A web browser (Chrome, Firefox, etc.)
Clone the Repository:
bash
Copy code
git clone <repository-url>
cd <repository-folder>


Install Dependencies:
Copy code
npm install



4. Database Setup
Initialize the SQLite Database: Run the following command to set up the database and create the required Inventory table:
bash
Copy code
node initializeDatabase.js
This script will create a file called books.db in your project directory and set up the table.

5. Running the Application
Start the Server:
bash
Copy code
npm start
The server will be running at: http://localhost:3000
Access the Application: Open your browser and go to http://localhost:3000.

6. Usage
Add a New Book:
Navigate to the Add a New Book section, fill out the form with the required information, and click the "Add Book" button to submit.
Search Books:
Enter search criteria (Title, Author, Genre) in the Search Books form and click "Search" to filter the books in the inventory.
Export Book Inventory:
Navigate to the Export Book Inventory section and choose either CSV or JSON format to download the current book list.

7. Theme Switcher
You can toggle between light and dark themes by clicking the lightbulb icon at the top right corner of the page.
The lightbulb image changes the theme, switching the interface between Lime Green & Black for dark mode and Lime Green & White for light mode.

8. Technologies Used
Frontend: HTML, CSS (with custom theming), JavaScript
Backend: Node.js, Express.js
Database: SQLite
External Libraries: Body-parser (for handling form submissions)

9. Project Structure
scss
Copy code
/project-root
├── /node_modules        (Generated after npm install)
├── /views               (HTML files for UI)
│   └── index.html       (Main user interface)
├── /images              (Assets like lightbulb icon)
│   └── lightbulb-icon.png (Theme switcher icon)
├── app.js               (Main application file)
├── database.js          (Database connection and setup)
├── initializeDatabase.js (Script to initialize the database schema)
├── books.db             (SQLite database file created after setup)
├── package.json         (NPM dependencies and scripts)
└── README.md            (Documentation)


10. License
This project is open source and available under the MIT License.

Future Enhancements
Pagination for large inventories.
Book cover images for each entry.
More advanced filtering options (e.g., filter by date range or ISBN).
User authentication for managing inventory securely.

