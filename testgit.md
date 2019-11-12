1 not 1 is 2222 我处理了冲突  master继续做一些开发  并且直接提交 偷懒没做hotfix的分支
1 2 3 4 5
1 2 3 4 5
我在开发的过程中.
hotfix上面发生了提交.并且master也接纳了.

我有两个策略
1)将master上来.
2)继续开发,不理会.

我觉得正确的做法,肯定是rebase master上面的变更.

a master b 是将b的特性分支,吸纳到a上面

我先尝试的方式是:
    直接将master merge过来.
    然后我继续开发