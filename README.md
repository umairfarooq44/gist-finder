<div id="top"></div>

<div align="center">
  <h1>Gist Finder</h1>
</div>

## 📍 About The Project

- `Gist Finder` lists all the gists of github user and last three forks

### Dependencies

- [![TypeScript][typescript]][typescript-url]
- [![NodeJS][nodejs]][node-url]
- [![React][react]][react-url]

## Libraries used

- next.js: Framework to create react app
- material-ui: React component library
- swr: React hooks for data fetching
- axios: Library to hit APIs
- Typescript: Add types to React components
- react-hook-form: hook to handle form

## Steps Taken

- First I initialized nextjs project and added swr provider.
- Then I built a card component to display gist information.
- I built GistForks component to show latest 3 forks inside card using Collapse component.
- Then I built Search component using `mui` components and `react--hook-form`.
- Then used `useSWR` to hit fork API and used `useSWRInfinite` to list gists of user with load more functionality.
- I used masonry layout to display Gist cards on home page as the height of cards was variable.

## 🚀 Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running, follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node

  ```sh
  brew install node
  ```

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:umairfarooq44/gist-finder.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

3. Run the Project
   ```sh
    npm run dev
   ```

<div align="right">
  <p>(<a href="#top">back to top</a>)</p>
</div>

## Live Demo (eg. Now)

I have deployed the demo application using vercel.

Live Demo URL: https://gist-finder.vercel.app/

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[nodejs]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[react]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[node-url]: https://nodejs.org/en/
[react-url]: https://react.dev/
