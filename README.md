# Product management Web app

## Overview

This project is a MERN stack application featuring a React frontend and an Express backend. It utilizes `Vite` for frontend development and `nodemon` for backend development. This README provides instructions on how to set up, run, and deploy the project.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Development Mode](#development-mode)
  - [Build](#build)
  - [Production Mode](#production-mode)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Common Issues](#common-issues)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Install the dependencies for both the backend and frontend:

   ```bash
   npm install
   npm install --prefix frontend
   ```

## Running the Project

### Development Mode

To start the project in development mode:

```bash
npm run dev
```

This will:

- Set `NODE_ENV` to `development`.
- Use `nodemon` to automatically restart the server on code changes.

### Build

To build the frontend and install necessary dependencies:

```bash
npm run build
```

This will:

- Install backend dependencies.
- Install frontend dependencies and build the frontend project.

### Production Mode

To start the project in production mode:

```bash
npm run start
```

This will:

- Set `NODE_ENV` to `production`.
- Run the backend server.

## File Structure

- `frontend/` - Contains the frontend source code and build configuration.
- `backend/` - Contains the backend source code and configuration.
- `package.json` - Contains project metadata and scripts.

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```
PORT=5000
MONGO_URL=<your-mongodb-connection-string>
```

Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

## Common Issues

- **ENOENT Error:** If you encounter an `ENOENT` error, ensure the `frontend/dist` directory exists and contains the `index.html` file. Adjust paths in `backend/server.js` if necessary.

- **Module Not Found:** Ensure all dependencies are installed correctly by running `npm install` in the root directory.

## Deployment

For deployment, ensure the `frontend/dist` directory is correctly included and accessible by the backend server. Adjust paths in `backend/server.js` as needed based on your deployment environment.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have improvements. 

To contribute, please fork the repository, make your changes, and submit a pull request with a clear description of the changes and the reason for them.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize any sections or add additional information specific to your project!
