# Contributing

First off, thank you for considering contributing to Codegasm! It's people like you that make this project such a great theme.

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Pull Requests](#pull-requests)
  - [Style Guidelines](#style-guidelines)
    - [TypeScript Style Guide](#typescript-style-guide)
  - [Commit Messages](#commit-messages)
  - [Pull Requests](#pull-requests-1)
  - [Development Setup](#development-setup)
    - [Useful Commands](#useful-commands)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [support@infernodesign.com](mailto:support@infernodesign.com).

## Getting Started

- Make sure you have a [GitHub account](https://github.com/signup/free)
- Fork the repository on GitHub
- Clone your fork locally
- Set up the development environment as described in the [Development Setup](#development-setup) section

## How Can I Contribute?

### Reporting Bugs

- Ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/inferno-design/codegasm-theme/issues)
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/inferno-design/codegasm-theme/issues/new)

### Suggesting Enhancements

- Open a new issue with a clear title and detailed description
- Provide any relevant examples or screenshots

### Pull Requests

1. Fork the repo and create your branch from `main`
2. Make sure your code lints
3. Create a pull request

## Style Guidelines

### TypeScript Style Guide

We use [ESLint](https://eslint.org/) to enforce a consistent coding style. Please make sure your code adheres to these guidelines:

- Use 2 spaces for indentation
- Use single quotes for strings
- No unused variables
- No semicolons
- Use commas for multiline arrays and objects
- Use arrow functions instead of function declarations
- Use template literals instead of string concatenation
- Use `null` instead of `undefined` for empty values
- Use `const` instead of `let` for variables that are not reassigned

## Commit Messages

- Use the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1/0.0/) specification
- Limit the first line to 100 characters or less
- Reference issues and pull requests in the footer of the commit message

## Pull Requests

1. Pull requests are automatically linted and tested.
2. Pull requests must be reviewed by one code owner.
3. You may merge the Pull Request in once you have the sign-off of one code owner, or if you do not have permission to do that, you may request the code owner to merge it for you.

## Development Setup

1. Install [Node.js](https://nodejs.org/) (version 20 or later)
2. Install [PNPM](https://pnpm.io/) for faster package management and builds
3. Clone your fork of the repository
4. Navigate to the project directory
5. Run `pnpm install` to install dependencies
6. Run `pnpm run dev` to start the development server

### Useful Commands

- `pnpm run dev`: Start the development server
- `pnpm run build`: Build the project for production
- `pnpm run lint`: Run ESLint to check for code style issues

Thank you for your contributions!
