# Hotel Map Project

## Overview
This project is a React-based web application that allows users to search for hotels, view them on a map, and bookmark specific locations. The app interacts with a JSON server API to fetch hotel data and includes features such as authentication, filtering, and bookmarking.

## Features
- **Hotel Listings:** Fetches hotel data from an API and displays them on the homepage.
- **Interactive Map:** Users can select a hotel to view its location on the map.
- **Bookmarking:** Users can click on any location on the map to bookmark it and add it to their list.
- **Bookmark Management:** Users can remove bookmarked locations from the related page.
- **Login Page:** Authentication system for user access.
- **Search & Filter:** Users can search for hotels based on:
  - Number of rooms available
  - Number of adults and children
  - Hotel names close to the search term
- **State Management:** Uses React Context and Reducer for managing state.
- **Protected Routes:** Restricts certain pages to authenticated users.

## Technologies Used
- **React** for building the user interface
- **React Context & Reducer** for state management
- **React Router** for navigation and protected routes
- **Map Integration** for displaying hotel locations and bookmarking
- **JSON Server** as a mock backend API
- **Vite** for fast development and build process
- **ESLint** for code quality and linting

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd hotel-map-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the JSON Server:
   ```sh
   npm run server
   ```
   Alternatively, you can use:
   ```sh
   json-server --watch server/db.json --port 5000 --delay 500
   ```
4. Start the React app:
   ```sh
   npm run dev
   ```
5. To build the project for production:
   ```sh
   npm run build
   ```
6. To preview the production build:
   ```sh
   npm run preview
   ```

## Contributing
Feel free to contribute by submitting issues or pull requests. Suggestions for improvements are welcome!

## License
This project is licensed under the MIT License.

