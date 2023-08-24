# @hovey/lint

用于快速为项目添加代码规范和提交规范。也作为现代规范的基础范例和自定义需求的基础配置。

```sh
# use npm
npm create @hovey/lint
# use yarn
yarn create @hovey/lint
# use pnpm
pnpm create @hovey/lint
# when pnpm workspace
pnpm create @hovey/lint -w
```

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

and then

```bash
pnpm i -D lint-staged simple-git-hooks
```
