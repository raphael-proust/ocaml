This is my personal hack of ocaml to readable javascript backend in
the module level.

This code is a mirror of my private repo(not production ready yet), it's generated code from another git repo of my compiler. 


You can read generated js code for each ml file, for example *stdlib/array.js*

You can play the online [in-browser compiler](http://zhanghongbo.me/js-demo).
If you are interested in this project, please contact bobzhang1988@gmail.com

See ./stdlib/*.js to have a look at generated js code for ocaml
standard library, it should be fairly easy to integrate it with nodejs
or using webpack to bundle it into browser


```js

var $$Array = require('./array.js');
var List = require ('./list.js');
List.iter(function(x){console.log('hi, nodejs '+x)},
    $$Array.to_list ($$Array.init(5,function(x){return x})))

```

You get the output:

```sh
hi, nodejs 0
hi, nodejs 1
hi, nodejs 2
hi, nodejs 3
hi, nodejs 4
```

# Design goal

1. High quality  generate code in dev mode, integrate with existing
   javascript echo system. straight-forward FFI, generate tds file to
   target typescript for better tooling

2. Highly performant: thanks to a sound type system in ocaml so that we
   can play more optimizations.

3. Separate compilation, extremely fast compilation.

4. Global dead code elimination in production mode

5. Very thin run-time or zero run-time, support nodejs, webbrowser.

6  Highly compatible with ocaml semantics modulo c-bindings and Obj module

# Status

This is my hobby project at night, currently, things which need be polished:

1. Make sure runtime support is correct, currently we borrow the
   runtime library stdlib/camlPrimitive.js from *js_of_ocaml*, but we
   can have better *runtime encoding* in *ocamlscript*, so I would
   like to write my own runtime library and make it thin.

2. Direct tail call support.

3. Curry function wrap and un-wrap

# Future work

Make a javascript front-end to OCaml using  javascript-like syntax
(write a javascript parser for ocaml like [fan](http://zhanghongbo.me/ifan/)),
which makes our language really javascript like, the generated code
would be even more readable.
