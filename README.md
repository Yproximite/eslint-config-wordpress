# eslint-config-wordpress

![Node CI](https://github.com/Yproximite/eslint-config-wordpress/workflows/Node%20CI/badge.svg)

> ESLint configuration for our Wordpress projects

## Features

- Include [AirBnb standard](https://github.com/airbnb/javascript)
- Include [Prettier](https://github.com/prettier/prettier)
- Include [@yproximite/eslint-config-base](https://github.com/Yproximite/eslint-config-base)
- Configure jQuery as a global dependency (`$` and `jQuery` vars)

## Installation

```bash
$ yarn add --dev @yproximite/eslint-config-wordpress eslint@^5.8.0 babel-eslint@^10.0.0 prettier@^1.15.0
```

## Usage

Edit your ESLint configuration file with:

```json
{
  "extends": ["@yproximite/wordpress"]
}
```

## Development workflow

You need to install some dependencies first:
```bash
$ yarn
```

### Contribution

- Make a pull request, its title should follows [Angular commit message convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format)
- You should **Squash and Merge** your pull request

### Publishing a new release

This is automatically done by Travis and [semantic-release](https://github.com/semantic-release/semantic-release) when you merge a pull request.
