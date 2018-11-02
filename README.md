# eslint-config-wordpress
ESLint configuration for our Wordpress projects

## Features

- Include [AirBnb standard](https://github.com/airbnb/javascript)
- Include [Prettier](https://github.com/prettier/prettier)
- Include [@yproximite/eslint-config-base](https://github.com/Yproximite/eslint-config-base)
- Configure jQuery as a global dependency (`$` and `jQuery` vars)

## Installation

```bash
$ yarn add --dev @yproximite/eslint-config-wordpress
```

Dont forget to install ESLint too:

```bash
$ yarn add --dev eslint
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

```bash
$ git checkout master
$ yarn release # increase package.json version, update CHANGELOG.md, create a new git tag, create a new git commit
$ npm publish --access public # specify access, because scoped package are private by default
$ git push --follow-tags
```
