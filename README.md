# 综合性期刊文献引证技术规范 CSL 样式

中国人文社科相当数量的期刊，使用《综合性期刊文献引证技术规范》进行文献引用，格式非常繁琐，极其容易出错。

故按照该规范，初步完成了符合个人用途的 csl 样式，导入到 Zotero 后，可以方便地使用 Zotero 进行文献管理、注释及参考文献的生成。

## 安装

1. 下载[样式文件](https://github.com/yangjh-xbmu/citation-specification-for-general-journal/blob/master/csgj.csl)
1. 打开 zetero `首选项`，选择`引用`，点击`+`，选择下载的样式文件。
1. 点击`ok`，忽略安装警告信息，完成安装。

## 使用说明

1. 中文文献的语言（language）值需要为空，不能有值。外文文献的语言（language）值需要有值，不能为空。所有文献都具有语言（language）字段，需要研究人员在添加题录时手工添加或修改。
1. 著作类文献，在插入时，最好插入具体页码信息。

## 已完成功能

1. 中外文献同时管理，避免了外文文献中出现中文字符的问题。
1. 外文文献格式偏向于 MLA 格式。
1. 自动生成脚注和参考文献。目前支持著作、期刊、网页、学位论文类型等常见文献类型。

## 未完成功能

由于个人需要，有些功能尚未实现：

* [ ] 析出文献
* [ ] 古籍
* [ ] 档案
* [ ] 转引
* [ ] 再引
* [ ] 著者-出版年体例

## 参考资料

1. <https://aurimasv.github.io/z2csl/typeMap.xml#cslVar-genre>
1. <http://docs.citationstyles.org/en/1.0.1/>
1. [综合性期刊文献引证技术规范](https://xdxbs.xmu.edu.cn/_upload/article/files/ee/68/6ec516f0439eb4a1ac0a88179316/9afbe77e-5fb0-4b3d-b887-9e2527e4d791.doc)
