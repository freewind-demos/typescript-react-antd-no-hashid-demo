TypeScript React AntDesign No HashId Demo
=================================

在antd中，由于使用了css-in-js方案，默认情况下，会生成一个特别的hash id，同时style的定义会类似：

```
:where(.1i536d8).ant-table-wrapper .ant-table-tbody >tr:first-child>td{
    border-top: none;
}
```

这将会导致我们无法在自己的组件中直接使用antd中定义的样式。

一个解决办法是可以整体或局部设置不使用hash，则生成的样式还跟以前一样：

```
.ant-table-wrapper .ant-table-tbody >tr:first-child>td{
    border-top: none;
}
```

注意：由于现在antd5的样式是按需导入，所以想使用某个组件的模式必须先以某种方式导入相应的组件。
可以在代码中设置为display: none，不显示它，只使用它的classname来显示自己的组件。

```
npm install
npm start
```

It will open page on browser automatically.
