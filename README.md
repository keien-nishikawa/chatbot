## Setup project

```bash
$ npm install
$ npm run prepare
```

もし`git commit`で以下のような警告を受けたら

```bash
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```

下記のコマンドを実行して権限を付与する

```bash
$ chmod +x .husky/pre-commit
```
