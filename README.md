# Kamils Exercise

## Project Structure

This project is divided into two main folders: `be` (Backend) and `fe` (Frontend).

### BE (Backend)

The `be` folder contains all the backend-related code and resources. This includes:
- Server-side logic
- API endpoints
- Database models
- Configuration files
- Backend dependencies

#### Technologies Used
- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient and scalable server-side applications.
- [Prisma](https://www.prisma.io/): Next-generation ORM for Node.js and TypeScript.
- [PostgreSQL](https://www.postgresql.org/): Open source object-relational database system.
- Docker: For containerization and easy database setup.

#### Requirements
1. Node.js
2. Docker

#### Setup and Running

To set up and run the backend:

1. Navigate to the `be` folder
2. Set environment variables into `.env`:
   ```bash
   DATABASE_URL="postgres://admin:password@localhost:5432"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the database:
   ```bash
   docker-compose up
   ```
5. Start the server:
   ```bash
   npm run start:dev
   ```
6. Access Swagger documentation:
   Open `http://localhost:3000/swagger` in your browser

#### Features
- CRUD operations for Tasks module
- RESTful API endpoints
- Swagger API documentation

### FE (Frontend)

The `fe` folder contains all the frontend-related code and resources. This includes:
- React Native components
- Frontend dependencies

#### Technologies Used
- [React Native](https://reactnative.dev/): A framework for building native apps using React.
- [Expo](https://expo.dev/): An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [React Query](https://react-query.tanstack.com/): Hooks for fetching, caching and updating asynchronous data in React.
- [Axios](https://axios-http.com/): Promise based HTTP client for the browser and node.js.

#### Requirements
1. Node.js
2. Expo CLI

#### Setup and Running

To set up and run the frontend:

1. Navigate to the `fe` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. May be required to change the `localhost` to the IP address in `axiosInstance.ts`:
   - For Windows: Open cmd and use the command `ipconfig`
   - For macOS and Linux: Open terminal and use the command `ifconfig`
4. Start the development server:
   ```bash
   npm start
   ```
