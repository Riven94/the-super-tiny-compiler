'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * Today we're going to write a compiler together. But not just any compiler... A
 * super duper teeny tiny compiler! A compiler that is so small that if you
 * remove all the comments this file would only be ~200 lines of actual code.
 * 现在我们将一起写一个编译器，但不像普通的编译器。只是一个很小的编译器，如果
 * 你将这个文件的注释去掉的话，将只有两百行的代码。
 *
 * We're going to compile some lisp-like function calls into some C-like
 * function calls.
 * 我们将把一些类似lisp的函数调用编译成一些类似C的函数调用。
 *
 * If you are not familiar with one or the other. I'll just give you a quick intro.
 * 如果你不熟悉LISP或C，我给你简单的介绍一下。
 *
 * If we had two functions `add` and `subtract` they would be written like this:
 * 如果有add和substract两个方法，这两个方法会被如下形式编写
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * Easy peezy right?
 * 很简单对吗？（不确定peezy的意思）
 *
 * Well good, because this is exactly what we are going to compile. While this
 * is neither a complete LISP or C syntax, it will be enough of the syntax to
 * demonstrate many of the major pieces of a modern compiler.
 * 很好，因为这就是我们实际需要去编译的东西。尽管它不是完整的LISP或C语法，
 * 但是这对于我们演示大部分的现代编译器是足够的。
 */

/**
 * Most compilers break down into three primary stages: Parsing, Transformation,
 * and Code Generation
 * 大多数编译器分为三个主要的阶段：解析、翻译和代码生成。
 *
 * 1. *Parsing* is taking raw code and turning it into a more abstract
 *    representation of the code.
 * 1. 解析就是将原代码转化为更加抽象的代码展示。
 *
 * 2. *Transformation* takes this abstract representation and manipulates to do
 *    whatever the compiler wants it to.
 * 2. 转换就是使用这种抽象的代码表示，然后根据编译器的要求去操作它。
 *
 * 3. *Code Generation* takes the transformed representation of the code and
 *    turns it into new code.
 * 3. 代码生成就是将转换后的的代码展示转化为新的代码。
 */

/**
 * Parsing
 * -------
 * 解析
 *
 * Parsing typically gets broken down into two phases: Lexical Analysis and
 * Syntactic Analysis.
 * 解析通常分为两个阶段：词法分析和语法分析
 *
 * 1. *Lexical Analysis* takes the raw code and splits it apart into these things
 *    called tokens by a thing called a tokenizer (or lexer).
 * 1. 词法分析使用标记器将原代码分为一些叫标记的东西。
 *
 *    Tokens are an array of tiny little objects that describe an isolated piece
 *    of the syntax. They could be numbers, labels, punctuation, operators,
 *    whatever.
 *    标记就是一组小对象用来描述语法中的一个独立部分，如数字、标签、标点符号、运算符等等。
 *
 * 2. *Syntactic Analysis* takes the tokens and reformats them into a
 *    representation that describes each part of the syntax and their relation
 *    to one another. This is known as an intermediate representation or
 *    Abstract Syntax Tree.
 *    语法分析则是将这些标记重新格式化为一个新的描述语法中的每个部分以及他们之间的联系，
 *    这也被中间表示或者抽象语法树。
 *    An Abstract Syntax Tree, or AST for short, is a deeply nested object that
 *    represents code in a way that is both easy to work with and tells us a lot
 *    of information.
 *    抽象语法树，简称为AST，是表示代码的一个层级很深的对象，既易于使用又告诉了我们大量的信息。
 *
 * For the following syntax:
 * 对于以下的语法来说
 *   (add 2 (subtract 4 2))
 *
 * Tokens might look something like this:
 *  标记可能会如下表示
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * And an Abstract Syntax Tree (AST) might look like this:
 * 抽象语法树可能如下表示
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * Transformation
 * 翻译
 * --------------
 *
 * The next type of stage for a compiler is transformation. Again, this just
 * takes the AST from the last step and makes changes to it. It can manipulate
 * the AST in the same language or it can translate it into an entirely new
 * language.
 * 编译器的下一个阶段就是转换。这只是从最后一步获取抽象语法树，并对其进行更改。
 * 转换可以使用同一种语言操作抽象语法树，也可以将抽象语法树翻译为另外一个全新的语言。
 *
 * Let’s look at how we would transform an AST.
 * 让我们看看我们如何转换一个抽象语法树。
 *
 * You might notice that our AST has elements within it that look very similar.
 * There are these objects with a type property. Each of these are known as an
 * AST Node. These nodes have defined properties on them that describe one
 * isolated part of the tree.
 * 你可能注意到抽象语法树中的元素看起来很熟悉。这些是带有type属性的对象。
 * 每一个对象都是一个抽象语法书节点。这些节点上已经定义了描述树上一个孤立部分的属性。
 * We can have a node for a "NumberLiteral":
 * 有一个数字节点如下
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * Or maybe a node for a "CallExpression":
 * 或者一个调用表达式节点
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * When transforming the AST we can manipulate nodes by
 * adding/removing/replacing properties, we can add new nodes, remove nodes, or
 * we could leave the existing AST alone and create an entirely new one based
 * on it.
 * 在转换抽象语法树时，我们可以使用adding、removing、replacing属性来添加新节点、移除节点
 * 或者在当前抽象语法树的基础上创建一个新的抽象语法树，然后丢弃原来存在的抽象语法树。
 *
 * Since we’re targeting a new language, we’re going to focus on creating an
 * entirely new AST that is specific to the target language.
 * 当我们使用的目标是一个全新的语言的时候，我们将创建一个针对目标语言的一个全新抽象语法树。
 *
 * Traversal
 * ---------
 * 遍历
 *
 * In order to navigate through all of these nodes, we need to be able to
 * traverse through them. This traversal process goes to each node in the AST
 * depth-first.
 * 为了能够浏览所有的节点，我们需要对抽象语法树做一个遍历。这个遍历过程会使用深度优先遍历。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * So for the above AST we would go:
 * 对于以上抽象语法树，我们会这样开始遍历
 *   1. 程序-从AST的顶层开始
 *   2. 调用表达式(add)-移动至程序主体中的第一个元素
 *   3. 数字(2)-移动至调用表达式(add)中参数的第一个元素
 *   4. 调用表达式(substract)-移动至调用表达式(add)中参数的第二个元素
 *   5. 数字(4)-移动至调用表达式(substract)中参数的第一个元素
 *   6. 数字(5)-移动至调用表达式(substract)中参数的第二个元素
 *   1. Program - Starting at the top level of the AST
 *
 *   2. CallExpression (add) - Moving to the first element of the Program's body
 *   3. NumberLiteral (2) - Moving to the first element of CallExpression's params
 *   4. CallExpression (subtract) - Moving to the second element of CallExpression's params
 *   5. NumberLiteral (4) - Moving to the first element of CallExpression's params
 *   6. NumberLiteral (2) - Moving to the second element of CallExpression's params
 *
 * If we were manipulating this AST directly, instead of creating a separate AST,
 * we would likely introduce all sorts of abstractions here. But just visiting
 * each node in the tree is enough for what we're trying to do.
 * 如果我们不是创建一个独立的抽象语法树，而是直接操作抽象语法树，
 * 我们会去介绍各种的抽象概念。但是目前只访问树中的每一个节点已经足够了。
 *
 * The reason I use the word "visiting" is because there is this pattern of how
 * to represent operations on elements of an object structure.
 * 使用访问这个词是因为有一种表示对象结构上的操作的模式。（感觉这边翻译不到位）
 *
 * Visitors
 * 访问者
 *  --------
 *
 * The basic idea here is that we are going to create a “visitor” object that
 * has methods that will accept different node types.
 * 我们创建visitor对象的基本思想就是拥有接收不同节点类型的方法。
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * When we traverse our AST, we will call the methods on this visitor whenever we
 * "enter" a node of a matching type.
 * 当遍历抽象语法树时，当我们碰到了匹配类型的节点就可以调用visitor上的方法将他加入。
 *
 * In order to make this useful we will also pass the node and a reference to
 * the parent node.
 * 我们将通过这个节点以及它的父节点来使这个方法更加有效。
 * 
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * However, there also exists the possibility of calling things on "exit". Imagine
 * our tree structure from before in list form:
 * 然而，也存在在退出时调用的可能性，想象我们以上的树结构以如下形式展现：
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * As we traverse down, we're going to reach branches with dead ends. As we
 * finish each branch of the tree we "exit" it. So going down the tree we
 * "enter" each node, and going back up we "exit".
 * 当我们向下遍历的时候，我们会碰到当前分支的结尾。
 * 就像当我们碰到分支的结尾时，我们需要退出，
 * 向下遍历树的时候我们需要进入每一个节点，然后碰到结尾时退出。
 * 
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * In order to support that, the final form of our visitor will look like this:
 * 为了实现以上的进入与退出，我们最终的visitor形式如下：
 * 
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * Code Generation
 * ---------------
 * 代码生成
 * The final phase of a compiler is code generation. Sometimes compilers will do
 * things that overlap with transformation, but for the most part code
 * generation just means take our AST and string-ify code back out.
 * 编译器的最后一步是代码生成。有时候编译器会做与变换阶段重复的事情，
 * 但是对于大部分的代码生成来说只是意味着将抽象语法树和字符串代码拿出来。（最后一句翻译不太确定）
 *
 * Code generators work several different ways, some compilers will reuse the
 * tokens from earlier, others will have created a separate representation of
 * the code so that they can print nodes linearly, but from what I can tell most
 * will use the same AST we just created, which is what we’re going to focus on.
 * 代码生成有多重不同的方式，一些编译器会复用前期所用的标记，而其他的一些可能会创造一个独立
 * 的代码表示，从而可以将节点线性地打印出来。但是从我所知道的，我们所要关注的大多数还是
 * 使用刚创建的抽象语法树。
 *
 * Effectively our code generator will know how to “print” all of the different
 * node types of the AST, and it will recursively call itself to print nested
 * nodes until everything is printed into one long string of code.
 * 实际上为我们的代码生成过程会知道如何输出抽象语法树中所有的不同类型的节点，
 * 并且还可以回溯地调用自身将所有的节点都输出到一个长字符中。
 */

/**
 * And that's it! That's all the different pieces of a compiler.
 * 这就是编译器中的不同阶段。
 *
 * Now that isn’t to say every compiler looks exactly like I described here.
 * Compilers serve many different purposes, and they might need more steps than
 * I have detailed.
 * 并不是说所有的编译器都像以上所描述的。
 * 编译器都有不同的目的，它们可能使用更多的步骤。
 *
 * But now you should have a general high-level idea of what most compilers look
 * like.
 * 但目前，我们已经对编译器长什么样已经有了一个较高级别的理解。
 *
 * Now that I’ve explained all of this, you’re all good to go write your own
 * compilers right?
 * 现在，我所解释的已经结束了，你已经可以编写属于你自己的编译器了吧？
 *
 * Just kidding, that's what I'm here to help with :P
 * 开玩笑，现在让我来帮助你吧。
 *
 * So let's begin...
 * 让我们开始吧...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * We're gonna start off with our first phase of parsing, lexical analysis, with
 * the tokenizer.
 * 我们将从解析的第一个步骤开始，使用标记器的词法分析。
 * We're just going to take our string of code and break it down into an array
 * of tokens.
 * 我们将将我们的字符串代码分割为标记数组。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// We start by accepting an input string of code, and we're gonna set up two
// things...
// 首先接收输入的代码字符串，然后我们要设置两个东西

function tokenizer(input) {

  // A `current` variable for tracking our position in the code like a cursor.
  // current变量用于像光标一样跟踪当前字符串代码的位置。
  let current = 0;

  // And a `tokens` array for pushing our tokens to.
  // tokens数组用来接收所有的标记
  let tokens = [];

  // We start by creating a `while` loop where we are setting up our `current`
  // variable to be incremented as much as we want `inside` the loop.
  // 首先创建一个while循环，我们想要设置current在循环中按我们想要的去增加。

  // We do this because we may want to increment `current` many times within a
  // single loop because our tokens can be any length.
  // 做这些是因为我们想要current在一次循环中增加多次，因为标记可能是任意长度的。
  while (current < input.length) {

    // We're also going to store the `current` character in the `input`.
    // 保存当前current所在的input的值
    let char = input[current];

    // The first thing we want to check for is an open parenthesis. This will
    // later be used for `CallExpression` but for now we only care about the
    // character.
    // 第一件事就是确定这是不是一个开括号，在后面者会被用作调用表达式，
    // 但是目前，我们只关心这个字符。

    // We check to see if we have an open parenthesis:
    // 我们判断这是否是一个开括号
    if (char === '(') {

      // If we do, we push a new token with the type `paren` and set the value
      // to an open parenthesis.
      // 如果是一个开括号，将一个标记设置type为paren，value为左括号（开括号），然后放入tokens数组
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // Then we increment `current`
      // 移动current
      current++;

      // And we `continue` onto the next cycle of the loop.
      // 使用continue开始下一次循环
      continue;
    }

    // Next we're going to check for a closing parenthesis. We do the same exact
    // thing as before: Check for a closing parenthesis, add a new token,
    // increment `current`, and `continue`.
    // 然后我们判断这个字符是否为一个右括号（闭括号），然后重复如上的操作
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // Moving on, we're now going to check for whitespace. This is interesting
    // because we care that whitespace exists to separate characters, but it
    // isn't actually important for us to store as a token. We would only throw
    // it out later.
    // 继续向下，我们会判断当前是否为空格。因为我们关心空格存在是为了分割字符，
    // 所以是有趣的，但是我们没必要将它存放为标记。我们会将它丢弃掉。

    // So here we're just going to test for existence and if it does exist we're
    // going to just `continue` on.
    // 所以这里我们我们判断空格的存在与否，若存在则继续移动current，然后进行下一次循环
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // The next type of token is a number. This is different than what we have
    // seen before because a number could be any number of characters and we
    // want to capture the entire sequence of characters as one token.
    // 标记的下一个类型是数组。这跟我们前面看到的有点不一样，因为一个数字可以是
    // 任意长度的字符串，并且我们想要获取整个数字字符串以作为一个标记
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //        只有两个独立的标记
    // So we start this off when we encounter the first number in a sequence.
    // 当我们遇到序列中的第一个数字时，我们就开始这个过程。    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // We're going to create a `value` string that we are going to push
      // characters to.
      // 创建一个空的value字符串，便于我们将其他的字符串加入进去
      let value = '';

      // Then we're going to loop through each character in the sequence until
      // we encounter a character that is not a number, pushing each character
      // that is a number to our `value` and incrementing `current` as we go.
      // 然后我们开始一个字符串的循环，知道我们碰到的字符不是数字，将每一个数字字符
      // 加入到value当中，然后增加current。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // After that we push our `number` token to the `tokens` array.
      // 在那之后我们将number标记加入到tokens数组。
      tokens.push({ type: 'number', value });

      // And we continue on.
      // 然后开始下一次循环
      continue;
    }

    // We'll also add support for strings in our language which will be any
    // text surrounded by double quotes (").
    // 我们同样需要添加字符串的支持，字符串是任意被""包裹的文字。
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // We'll start by checking for the opening quote:
    // 我们从判断左引号开始
    if (char === '"') {
      // Keep a `value` variable for building up our string token.
      // 保留一个空的value对象，以创建string标记
      let value = '';

      // We'll skip the opening double quote in our token.
      // 跳过左引号
      char = input[++current];

      // Then we'll iterate through each character until we reach another
      // double quote.
      // 然后我们开始循环，直到碰到右引号
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // Skip the closing double quote.
      // 跳过右引号
      char = input[++current];

      // And add our `string` token to the `tokens` array.
      // 将string 标记添加到tokens
      tokens.push({ type: 'string', value });

      continue;
    }

    // The last type of token will be a `name` token. This is a sequence of
    // letters instead of numbers, that are the names of functions in our lisp
    // syntax.
    // 最后一种标记类型是name标记，是一组字母的字符串序列，在lisp语法中就是函数的名称
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // Again we're just going to loop through all the letters pushing them to
      // a value.
      // 同样的我们开启一个循环，接受name字符
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // And pushing that value as a token with the type `name` and continuing.
      tokens.push({ type: 'name', value });

      continue;
    }

    // Finally if we have not matched a character by now, we're going to throw
    // an error and completely exit.
    // 最后如果没有匹配到一个字符，那么抛出异常
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // Then at the end of our `tokenizer` we simply return the tokens array.
  // 这就是tokenizer的结束，返回tokens数组。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// Okay, so we define a `parser` function that accepts our array of `tokens`.
function parser(tokens) {

  // Again we keep a `current` variable that we will use as a cursor.
  let current = 0;

  // But this time we're going to use recursion instead of a `while` loop. So we
  // define a `walk` function.
  function walk() {

    // Inside the walk function we start by grabbing the `current` token.
    let token = tokens[current];

    // We're going to split each type of token off into a different code path,
    // starting off with `number` tokens.
    //
    // We test to see if we have a `number` token.
    if (token.type === 'number') {

      // If we have one, we'll increment `current`.
      current++;

      // And we'll return a new AST node called `NumberLiteral` and setting its
      // value to the value of our token.
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // If we have a string we will do the same as number and create a
    // `StringLiteral` node.
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // Next we're going to look for CallExpressions. We start this off when we
    // encounter an open parenthesis.
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // We'll increment `current` to skip the parenthesis since we don't care
      // about it in our AST.
      token = tokens[++current];

      // We create a base node with the type `CallExpression`, and we're going
      // to set the name as the current token's value since the next token after
      // the open parenthesis is the name of the function.
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // We increment `current` *again* to skip the name token.
      token = tokens[++current];

      // And now we want to loop through each token that will be the `params` of
      // our `CallExpression` until we encounter a closing parenthesis.
      //
      // Now this is where recursion comes in. Instead of trying to parse a
      // potentially infinitely nested set of nodes we're going to rely on
      // recursion to resolve things.
      //
      // To explain this, let's take our Lisp code. You can see that the
      // parameters of the `add` are a number and a nested `CallExpression` that
      // includes its own numbers.
      //
      //   (add 2 (subtract 4 2))
      //
      // You'll also notice that in our tokens array we have multiple closing
      // parenthesis.
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // We're going to rely on the nested `walk` function to increment our
      // `current` variable past any nested `CallExpression`.

      // So we create a `while` loop that will continue until it encounters a
      // token with a `type` of `'paren'` and a `value` of a closing
      // parenthesis.
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // we'll call the `walk` function which will return a `node` and we'll
        // push it into our `node.params`.
        node.params.push(walk());
        token = tokens[current];
      }

      // Finally we will increment `current` one last time to skip the closing
      // parenthesis.
      current++;

      // And return the node.
      return node;
    }

    // Again, if we haven't recognized the token type by now we're going to
    // throw an error.
    throw new TypeError(token.type);
  }

  // Now, we're going to create our AST which will have a root which is a
  // `Program` node.
  let ast = {
    type: 'Program',
    body: [],
  };

  // And we're going to kickstart our `walk` function, pushing nodes to our
  // `ast.body` array.
  //
  // The reason we are doing this inside a loop is because our program can have
  // `CallExpression` after one another instead of being nested.
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // At the end of our parser we'll return the AST.
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
function traverser(ast, visitor) {

  // A `traverseArray` function that will allow us to iterate over an array and
  // call the next function that we will define: `traverseNode`.
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` will accept a `node` and its `parent` node. So that it can
  // pass both to our visitor methods.
  function traverseNode(node, parent) {

    // We start by testing for the existence of a method on the visitor with a
    // matching `type`.
    let methods = visitor[node.type];

    // If there is an `enter` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // Next we are going to split things up by the current node type.
    switch (node.type) {

      // We'll start with our top level `Program`. Since Program nodes have a
      // property named body that has an array of nodes, we will call
      // `traverseArray` to traverse down into them.
      //
      // (Remember that `traverseArray` will in turn call `traverseNode` so  we
      // are causing the tree to be traversed recursively)
      case 'Program':
        traverseArray(node.body, node);
        break;

      // Next we do the same with `CallExpression` and traverse their `params`.
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
      // child nodes to visit, so we'll just break.
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // And again, if we haven't recognized the node type then we'll throw an
      // error.
      default:
        throw new TypeError(node.type);
    }

    // If there is an `exit` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // Finally we kickstart the traverser by calling `traverseNode` with our ast
  // with no `parent` because the top level of the AST doesn't have a parent.
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// So we have our transformer function which will accept the lisp ast.
function transformer(ast) {

  // We'll create a `newAst` which like our previous AST will have a program
  // node.
  let newAst = {
    type: 'Program',
    body: [],
  };

  // Next I'm going to cheat a little and create a bit of a hack. We're going to
  // use a property named `context` on our parent nodes that we're going to push
  // nodes to their parent's `context`. Normally you would have a better
  // abstraction than this, but for our purposes this keeps things simple.
  //
  // Just take note that the context is a reference *from* the old ast *to* the
  // new ast.
  ast._context = newAst.body;

  // We'll start by calling the traverser function with our ast and a visitor.
  traverser(ast, {

    // The first visitor method accepts any `NumberLiteral`
    NumberLiteral: {
      // We'll visit them on enter.
      enter(node, parent) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // Next we have `StringLiteral`
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    CallExpression: {
      enter(node, parent) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent._context.push(expression);
      },
    }
  });

  // At the end of our transformer function we'll return the new ast that we
  // just created.
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator(node) {

  // We'll break things down by the `type` of the `node`.
  switch (node.type) {

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // For `Identifier` we'll just return the `node`'s name.
    case 'Identifier':
      return node.name;

    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
