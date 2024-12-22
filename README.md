# Github Clone

## Objective

Build a responsive web application that allows users to log in and review repositories on the GitHub homepage.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React JS
- **Version Control**: Git and GitHub for hosting the repository

## Completion Instructions

### Functionality

#### Must Have

- Build a ReactJS application with multiple pages/components, including LoginPage and HomePage.
- Implement features such as displaying all repositories of a user.

#### Pages

| Page       | Page Details                                                                               | Navigation                                    |
|------------|--------------------------------------------------------------------------------------------|-----------------------------------------------|
| LoginPage  | Provides different login options like "Sign in with GitHub" or "Sign in with Azure DevOps". | After successful login, navigate to HomePage. |
| HomePage   | Displays all repositories with search and add repository features.                         | Navigation links in the Header component.     |

### Guidelines to Develop the Project

#### Must Have

- Utilize GitHub:
  - Commit code regularly with clear commit messages.
  - Include a README file explaining the project setup, usage instructions, and any additional information.
  - Ensure the repository is well-organized and easy to understand.
  - Write clean, modular, and well-structured code.
- Make the application visually appealing.
- Handle all errors gracefully.

#### Nice to Have

- Implement Unit Tests.

### Submission Instructions

#### Must Have

- A GitHub repository containing the project.

#### Nice to Have

- Deploy the application on a hosting platform.

## Technical Details

### Routes

| Page         | Route Name  | Path       |
|--------------|-------------|------------|
| LoginPage    | Login       | /login     |
| HomePage     | Home        | /          |

### Routes & Components

#### Login

| Component   | Details                                          |
|-------------|--------------------------------------------------|
| Login       | Provides different login options for users.      |
| Header      | Contains links for pages: Home, Login, How-to-use component. |

#### Home

| Component       | Details                                      |
|-----------------|----------------------------------------------|
| Home            | Main home component.                        |
| Header          | Contains links for pages: Home.             |
| SearchInput     | Includes search functionality (by repo name) and a "Search" button. |
| Loader          | Displays repository details (name, date, language). |
| ErrorMessage    | Displays errors encountered while fetching data. |

## Resources

### Design Files

- Figma design by CodeAnt AI

### APIs

- None

### Third-party Packages

- **Vite**: Development tool.
- **react-router-dom**: For routing.
- **react-loader-spinner**: For loading indicators.

## How to Set Up Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/manikanta68/github-clone.git
   cd gitclone
   ```

2. **Install Dependencies**:
   Ensure you have Node.js (v20.18.0 or above) installed.
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

   This will start the application locally. Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for Production**:
   If you want to create a production build:
   ```bash
   npm run build
   ```

5. **Preview the Build**:
   To preview the production build locally:
   ```bash
   npm run preview
   ```

