(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{475:function(a,s,e){"use strict";e.r(s);var n=e(16),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"plink语法体验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plink语法体验"}},[a._v("#")]),a._v(" PLINK语法体验")]),a._v(" "),e("h5",{attrs:{id:"by张成龙-邮箱-yianquanwl-qq-com-该教程参考邓飞博客与自己总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#by张成龙-邮箱-yianquanwl-qq-com-该教程参考邓飞博客与自己总结"}},[a._v("#")]),a._v(" by张成龙 邮箱：yianquanwl@qq.com 该教程参考邓飞博客与自己总结")]),a._v(" "),e("p",[a._v("plink软件是"),e("code",[a._v("GWAS")]),a._v("分析中常用的软件，它也是一个数据格式，plink里面有很多非常强大的功能，运算速度很快，是我日常分析中常用的软件之一。(这里软件使用的版本为plink 1.9)")]),a._v(" "),e("p",[a._v("这里，我将"),e("code",[a._v("plink")]),a._v("软件分为三部分：")]),a._v(" "),e("ul",[e("li",[a._v("格式转换")]),a._v(" "),e("li",[a._v("常用质控")]),a._v(" "),e("li",[a._v("文件提取")])]),a._v(" "),e("h4",{attrs:{id:"_1-格式转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-格式转换"}},[a._v("#")]),a._v(" 1.格式转换")]),a._v(" "),e("p",[a._v("第一种常用的格式："),e("code",[a._v("plink")]),a._v("格式")]),a._v(" "),e("ul",[e("li",[a._v("正常格式"),e("code",[a._v("map")]),a._v("和"),e("code",[a._v("ped")]),a._v("：比如a.ped，a.map。")]),a._v(" "),e("li",[a._v("二进制文件"),e("code",[a._v("bim，bed，fam")]),a._v("：比如a.bed, a.bim, a.fam。")]),a._v(" "),e("li",[a._v("第二种常用的格式："),e("code",[a._v("vcf")]),a._v("格式。")]),a._v(" "),e("li",[a._v("第三种常用的格式："),e("code",[a._v("hapmap")]),a._v("格式。")])]),a._v(" "),e("h5",{attrs:{id:"_1-1-plink正常格式转二进制格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-plink正常格式转二进制格式"}},[a._v("#")]),a._v(" 1.1 plink正常格式转二进制格式")]),a._v(" "),e("p",[a._v("比如这里有plink格式的文件，前缀为a的plink文件：")]),a._v(" "),e("div",{staticClass:"language-plink line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls\na.map  a.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("将其转化为二进制文件：b.bed, b.bim, b.fam")]),a._v(" "),e("div",{staticClass:"language-plink line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --file a --out b\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("结果")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls b*\nb.bed  b.bim  b.fam  b.log\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("注意：如果染色体超过23，比如30对染色体，需要设定"),e("code",[a._v("--chr-set 30")]),a._v("\n如果有非数字染色体，比如性染色体，需要设定"),e("code",[a._v("--allow-extra-chr")]),a._v("\n常用的动物都有对应的参数，直接设定相关动物就行，比如牛的"),e("code",[a._v("--cow")]),a._v("，下面是其它动植物的。\n如果没有对应的物种，直接设置染色体的条数以及允许非数字染色体即可。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("--cow\n--dog\n--horse\n--mouse·\t\t\t\t\t\t\t\t\n--rice\n--sheep\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h5",{attrs:{id:"_1-2-plink二进制格式转为正常格式-map和ped"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-plink二进制格式转为正常格式-map和ped"}},[a._v("#")]),a._v(" 1.2 plink二进制格式转为正常格式（map和ped）")]),a._v(" "),e("p",[a._v("这里有plink格式的文件，前缀为b的plink二进制文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls b*\nb.bed  b.bim  b.fam  b.log\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("将其转化文件："),e("code",[a._v("c.map, c.ped")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --bfile b --recode --out c\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("注意：")]),a._v(" "),e("ul",[e("li",[a._v("–bfile，因为输入文件b*为二进制，所以用–bfile，如果是一般格式，用–file即可")]),a._v(" "),e("li",[a._v("–recode，要输出正常格式，所以用–recode指定，如果不加这个参数，默认是输出二进制文件")]),a._v(" "),e("li",[a._v("–out，输出文件的前缀")])]),a._v(" "),e("p",[a._v("结果：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls *c*\nc.hh  c.log  c.map  c.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h5",{attrs:{id:"_1-3-正常plink文件转为vcf文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-正常plink文件转为vcf文件"}},[a._v("#")]),a._v(" 1.3 正常plink文件转为vcf文件")]),a._v(" "),e("p",[a._v("这里有plink格式的文件，前缀为c的plink二进制文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls *c*\nc.hh  c.log  c.map  c.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("将其转化文件：d.vcf")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --file c --recode vcf --out d\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("注意：")]),a._v(" "),e("ul",[e("li",[a._v("–file，用–file指定正常plink格式的文件")]),a._v(" "),e("li",[a._v("–recode vcf，要输出vcf文件格式")]),a._v(" "),e("li",[a._v("–out，输出文件的前缀")])]),a._v(" "),e("h5",{attrs:{id:"_1-4-二进制plink文件转为vcf文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-二进制plink文件转为vcf文件"}},[a._v("#")]),a._v(" 1.4 二进制plink文件转为vcf文件")]),a._v(" "),e("p",[a._v("和正常plink文件类似，除了--file 变为--bfile即可。")]),a._v(" "),e("p",[a._v("现有文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls b*\nb.bed  b.bim  b.fam  b.log\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("将二进制文件转化为vcf文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --bfile b --recode vcf --out e\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h5",{attrs:{id:"_1-5-vcf文件转化为plink文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-vcf文件转化为plink文件"}},[a._v("#")]),a._v(" 1.5 vcf文件转化为plink文件")]),a._v(" "),e("p",[a._v("转化为正常plink文件：")]),a._v(" "),e("p",[a._v("现有文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls e.vcf\ne.vcf\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --vcf e.vcf --recode --out f\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("注意：")]),a._v(" "),e("ul",[e("li",[a._v("–vcf 需要文件名完整，不能只写前缀，所以这里要写--vcf e.vcf")]),a._v(" "),e("li",[a._v("–recode 保存plink文件")])]),a._v(" "),e("p",[a._v("保存为二进制文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --vcf e.vcf  --out g\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls g*\ng.bed  g.bim  g.fam  g.log\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"_2-常用质控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用质控"}},[a._v("#")]),a._v(" 2.常用质控")]),a._v(" "),e("h5",{attrs:{id:"_2-1-snp缺失质控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-snp缺失质控"}},[a._v("#")]),a._v(" 2.1 SNP缺失质控")]),a._v(" "),e("p",[a._v("无论是测序还是芯片，得到的基因型数据要进行质控，而对缺失数据进行筛选，可以去掉低质量的数据。如果一个个体，共有50万SNP数据，发现20%的SNP数据（10万）都缺失，那这个个体我们认为质量不合格，如果加入分析中可能会对结果产生负面的影响，所以我们可以把它删除。同样的道理，如果某个SNP，在500个样本中，缺失率为20%（即该SNP在100个个体中都没有分型结果），我们也可以认为该SNP质量较差，将去删除。当然，这里的20%是过滤标准，可以改变质控标准。")]),a._v(" "),e("p",[a._v("现有文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls a*\na.map  a.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("某个SNP在样本中缺失大于10%，删除该SNP："),e("code",[a._v("--geno")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --file a --geno 0.1 --recode --out re\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("某个在某个样本中，SNP缺失大于10%，删除该样本："),e("code",[a._v("--mind")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --file a --mind 0.1 --recode --out re\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h5",{attrs:{id:"_2-2-最小等位基因频率过滤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-最小等位基因频率过滤"}},[a._v("#")]),a._v(" 2.2 最小等位基因频率过滤")]),a._v(" "),e("p",[a._v("最小等位基因频率怎么计算？比如一个位点有AA或者AT或者TT，那么就可以计算A的基因频率和T的基因频率，qA + qT = 1，这里谁比较小，谁就是最小等位基因频率，比如qA = 0.3, qT = 0.7， 那么这个位点的MAF为0.3. 之所以用这个过滤标准，是因为MAF如果非常小，比如低于0.02，那么意味着大部分位点都是相同的基因型，这些位点贡献的信息非常少，增加假阳性。更有甚者MAF为0，那就是所有位点只有一种基因型，这些位点没有贡献信息，放在计算中增加计算量，没有意义，所以要根据MAF进行过滤。")]),a._v(" "),e("p",[a._v("现有文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls a*\na.map  a.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("某个SNP在的MAF小于0.01，那么该SNP删掉："),e("code",[a._v("--maf 0.01")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --file a --maf 0.01 --recode --out re\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h5",{attrs:{id:"_2-3-哈温平衡过滤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-哈温平衡过滤"}},[a._v("#")]),a._v(" 2.3 哈温平衡过滤")]),a._v(" "),e("p",[a._v("「卡方适合性检验！」 ，一个群体是否符合这种状况，即达到了遗传平衡，也就是一对等位基因的3种基因型的比例分布符合公式：p2+2pq+q2=1,p+q=1,(p+q)2=1.基因型MM的频率为p2,NN的频率为q2,MN的频率为2pq。MN:MN：NN＝P2：2pq：q2。MN这对基因在群体中达此状态，就是达到了遗传平衡。如果没有达到这个状态，就是一个遗传不平衡的群体。但随着群体中的随机交配，将会保持这个基因频率和基因型分布比例，而较易达到遗传平衡状态。应用Hardy-Weinberg遗传平衡吻合度检验方法，把计算得到的基因频率代入，计算基因型平衡频率，再乘以总人数，求得预期值（e）。把观察数（O）与预期值（e）作比较，进行χ2检验。病例组和对照组的基因型分布的观察值和预期值差异无显著性（P>0.05），符合遗传平衡定律.")]),a._v(" "),e("h6",{attrs:{id:"现有文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现有文件"}},[a._v("#")]),a._v(" 现有文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls a*\na.map  a.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("某个SNP在哈温平衡检验中p值小于1e-5，那么该SNP删掉："),e("code",[a._v("--maf 0.01")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --file a --hwe 1e-5 --recode --out re    \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h5",{attrs:{id:"_1-文件提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件提取"}},[a._v("#")]),a._v(" 1. 文件提取")]),a._v(" "),e("p",[a._v("文件提取，可以提取plink个数中的样本信息，也可以提取特定的SNP位点信息。\n3.1 样本提取--keep和-- remove")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    –keep， 提取样本ID\n    –remove，删除样本ID\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("提取样本文件的格式：")]),a._v(" "),e("ul",[e("li",[a._v("第一列：FID，家系ID")]),a._v(" "),e("li",[a._v("第二列：IID，个体ID")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1328 NA06989\n1377 NA11891\n1349 NA11843\n1330 NA12341\n1344 NA10850\n1328 NA06984\n1463 NA12877\n1418 NA12275\n13291 NA06986\n1418 NA12272\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h5",{attrs:{id:"样本提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样本提取"}},[a._v("#")]),a._v(" 样本提取")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --file a --keep id_sample.txt --recode --out re\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ wc -l re*\n       2 re.hh\n      32 re.log\n 1431211 re.map\n      10 re.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h5",{attrs:{id:"样本删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样本删除"}},[a._v("#")]),a._v(" 样本删除")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --file a --remove id_sample.txt --recode --out re\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_3-2-snp提取-extract和-exclude"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-snp提取-extract和-exclude"}},[a._v("#")]),a._v(" 3.2 SNP提取"),e("code",[a._v("--extract")]),a._v("和-- "),e("code",[a._v("exclude")])]),a._v(" "),e("ul",[e("li",[a._v("–extract， 提取SNP ID")]),a._v(" "),e("li",[a._v("–exclude，删除SNP ID")])]),a._v(" "),e("p",[a._v("提取样本文件的格式：")]),a._v(" "),e("p",[a._v("一列：SNP名称ID")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("rs2185539\nrs11240767\nrs3131972\nrs3131969\nrs1048488\nrs12562034\nrs12124819\nrs4040617\nrs2905036\nrs4245756\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h4",{attrs:{id:"snp提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snp提取"}},[a._v("#")]),a._v(" SNP提取")]),a._v(" "),e("p",[e("code",[a._v("plink --file a --extract id_snp.txt --recode --out re")])]),a._v(" "),e("p",[a._v("完成。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ wc -l re*\n  179 re.hh\n   30 re.log\n   10 re.map\n  164 re.ped\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("可以看到，map共10行，共提取10个SNP")]),a._v(" "),e("h4",{attrs:{id:"snp删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snp删除"}},[a._v("#")]),a._v(" SNP删除")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" plink --file a --exclude id_snp.txt --recode --out re\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"snp合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snp合并"}},[a._v("#")]),a._v(" SNP合并")]),a._v(" "),e("h5",{attrs:{id:"一、合并文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、合并文件"}},[a._v("#")]),a._v(" 一、合并文件")]),a._v(" "),e("p",[a._v("plink合并文件需要用到"),e("code",[a._v("merge")]),a._v("参数")]),a._v(" "),e("p",[a._v("如果是ped和map格式文件，则用以下命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --file data1 --merge data2.ped data2.map --recode --out merge\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p"),a._v(" "),e("p",[a._v("如果是二进制文件和ped,map格式文件，则用以下命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --bfile data1 --merge data2.ped data2.map --make-bed --out merge\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p"),a._v(" "),e("p",[a._v("如果都是二进制文件，则用以下命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --bfile data1 --bmerge data2.bed data2.bim data2.fam --make-bed --out merge\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p"),a._v(" "),e("p",[a._v("如果是合并多个文件，则用以下命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/plink-1.07-x86_64/plink --noweb --bfile file --merge-list batch.txt --make-bed --out batch\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("batch.txt的文件格式如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("file1.bed file1.bim file1.fam\n\nfile2.bed file2.bim file2.fam\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"更新snp位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新snp位置"}},[a._v("#")]),a._v(" 更新SNP位置")]),a._v(" "),e("p",[a._v("假设更新 rs10002到位置580000，如下所示：")]),a._v(" "),e("p",[a._v("原始文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("     ...\n     rs10001   500000\n     rs10002   580000\n     rs10003   540000\n     rs10004   560000\n     ...\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("新的文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("     ...\n     rs10001   500000\n     rs10003   540000\n     rs10004   560000\n     rs10002   580000\n     ...\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("更新SNP位置可以采用plink的"),e("code",[a._v("--update-name")]),a._v("和"),e("code",[a._v("--update-chr")]),a._v("参数")]),a._v(" "),e("p",[a._v("具体命令如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("./plink --bfile mydata --update-map rsID.lst --update-name --make-bed --out mydata2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p"),a._v(" "),e("p",[a._v("或者")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("./plink --bfile mydata --update-map chr-codes.txt --update-chr --make-bed --out mydata2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p"),a._v(" "),e("p",[a._v("rsID.lst的输入格式如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    SNP_A-1919191   rs123456\n    SNP_A-64646464  rs222222\n    ...\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("chr-codes.txt的输入格式如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("   rs123456     1\n   rs987654     18\n   rs678678     X\n   ..\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"后续出现的小问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后续出现的小问题"}},[a._v("#")]),a._v(" 后续出现的小问题")]),a._v(" "),e("p",[a._v("plink合并不了，有两个方面的问题")]),a._v(" "),e("ul",[e("li",[a._v("map文件问题")]),a._v(" "),e("li",[a._v("ped文件问题")])]),a._v(" "),e("p",[a._v("1.map文件要统一，包括pos名称，统一修改，建议采用·plink提取的方法，方法见前面。")]),a._v(" "),e("p",[a._v("2.ped第六列要一致，至于怎么一致有两种方法。第一正则表达式，具体方法参考正则表达式章节。\n第二种方法，先将plink文件转换为vcf格式，方法见前面。然后将vcf转为plink，此时转换语句为")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plink --vcf input.vcf --recode --out output --const-fid family_id\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("通过"),e("code",[a._v("--const-fid")]),a._v("将family id设置成一个常量，默认值是0.这样我们得到的文件就可以合并了。")])])}),[],!1,null,null,null);s.default=t.exports}}]);