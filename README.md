tsconfig.json

这里根目录 tsconfig.json 的 paths 是这里的神奇之处：它告诉 TypeScript 编译器，每当一个模块尝试从 monorepo 导入另一个模块时，它都应该从 packages 文件夹中解析它。具体来说，它应指向该包的 src 文件夹，因为这是构建时将编译的文件夹。除此之外，在 IDE 点击依赖包的方法，就会跳转对应的源代码。
