1 not 1 is 2222 我处理了冲突  master继续做一些开发  并且直接提交 偷懒没做hotfix的分支  
mater继续开发
mater继续开发
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
    
这种方式做完了,我的感觉是.
mater merge feature 

feature merge master
最终的结果是一样的.并没有区别.
哦对了,是有区别的.他们代码的结果一样.
a merge b a动b不动.merge是一个主动行为,将他人的代码吸收过来.


他们预期描述的是,我将最新的master代码合并到了开发分支上,这样我能够继续开发.

而这次的操作如果用rebase呢?