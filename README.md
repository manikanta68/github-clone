# Title

    Github Clone

## Objective

    Build an responsive web application that allows users login and review the repositories in github Homepage.

## Tech Stack

    Frontend - ( HTML, CSS, Javascript, React JS, Git,and GitHub for hosting the repository. )

## Completion Instructions

### Functionality

#### Must Have

* Build a ReactJS application with multiple pages/components,including LoginPage and HomePage.

* Implement features such as display all repo's of user.

#### Pages

<table> 

<tr>
<th>Page</th><th>Page Details</th><th>Navigation</th>
</tr>

<tr>
<td>LoginPage</td> 
<td>In this page we provide different login options like "Sign in with Github"  or  "Sign in with Azure Devops"</td> 
<td>After successful login navigate to Homepage</td>
</tr>

<tr>
<td>HomePage</td>
<td>In this page we display all repositories with search and add repo features</td>
<td>Different navigation links in navigation bar(Header component)</td>
</tr>
</table>


### Guidelines to develop a project

#### Must Have

- Utilize GitHub
  - Commit code regularly and commit messages should be clear
  - Include a README file explaining the project setup,usage instructions, and any additional information
  - The repo should be well organized and easy to understand.
  - The code should be clean, modular,and well-structured
- The application should be visually appealing.
- The application should handle all the errors.


#### Nice to Have

- Implement Unit Tests

### Submission Instructions

#### Must Have

- Github Repository

#### Nice to Have

- deploying the application on a hosting platform.

## Technical Details

### Routes 

| Page         | Route        | Path       |
| ------------ | ------------ | ---------- |
| LoginPage    | Login        | /login     |
| HomePage     | Home         | /          |



### Routes & Components 

**Login** 

| Component   | Deatils                                          |
| ----------- | ------------------------                         |
| Login       | We provie different login options for users      |
| Header      | Links for pages Home, Login page, How to use component|

**Home** 

| Component       | Details                                      | 
| --------------- | -------------------------------------------- |
| Home            |                                              |
| Header          | Links for pages Home,                        | 
| SearchInput     | Search (by repo name), "Search" button       |
| Loader          | repo deatils (reponame,date,language),       |
| ErrorMessage    |  errors display while fetching               | 




## Resources

### Design files

    Figma design by codeAnt AI
### APIs

    none

### Third-party packages
- Vite tool
- Routes, etc (react-router-dom)
- Loader: react-loader-spinner