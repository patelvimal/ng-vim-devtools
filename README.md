
<p align="center">
 <img width="30%" height="30%" src="./logo.png">
</p>

# @ng-vim/devtools
A schematic to integrate husky, prettier and commit-lint in your angular application

<p align="left">
  <a href="https://www.npmjs.com/package/@ng-vim/devtools">
    <img src="https://img.shields.io/npm/v/@ng-vim/devtools/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package@ng-vim/devtools">
    <img src="https://img.shields.io/npm/dm/@ng-vim/devtools.svg" alt="Monthly download on NPM" />
  </a>
</p>


## 🌟 Install

```sh
$ ng add @ng-vim/devtools
```


Running above schematics in your angular application will integrate below functionality.
1. Auto format your staged files before commiting using prettier configuration
1. Make sure your commit messages are per commitlint standard.

<br/>


After this whenever you will try to perform any git actions like `git commit` and `git push`, husky command will be executed for the respective commands.

## Troubleshoot
If you are using Linux/Max operating system you need to give execution permission to `.husky` and `.git/hooks` folder.
```sh
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```


## Husky Documentation
https://typicode.github.io/husky



## License

The MIT License (MIT)