# ReactEase

    开箱即用的 react + ts + vite 框架

# Git 提交格式

在我们的项目中，我们遵循 Conventional Commits 规范来格式化我们的 Git 提交信息。这样可以使得我们的提交历史清晰、有序，更易于追踪和理解。

每个提交信息应该遵循以下的格式：

```bash
    <type>: <subject>
```

其中 <type> 是必需的，表示了这次提交的类型，可以是以下之一：

* feat：引入了新的功能
* fix：修复了一个 bug
* docs：仅仅修改了文档，如 README, CHANGELOG, CONTRIBUTE 等
* style： 不影响代码功能的变动 (例如改变空格, 格式化, 缺少分号等)
* refactor：既不是修复 bug 也不是添加新功能的代码变动，例如代码重构
* perf：提高性能的代码改动
* test：添加或修改测试用例
* build：影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）
* ci：更改了 CI 配置文件和脚本（例如: Travis, Circle, BrowserStack, SauceLabs）
* chore：对构建过程或辅助工具的更改
* revert：撤销之前的提交

**例如，如果你添加了一个新功能，你的提交信息可能是：**

```bash
    feat: add login functionality
```

**或者，如果你修复了一个 bug，你的提交信息可能是：**

```bash
    fix: resolve issue where user cannot logout
```

注意，提交信息的长度不能超过 999 个字符。

遵循这些规范会使我们的 Git 提交历史更加清晰，更容易理解，也有利于代码审查和版本管理。感谢你的配合！
