This is my personal hack of ocaml to javascript backend.

This code is a mirror of my private repo(not production ready yet), it's generated code from another git repo of my compiler. 


You can read generated js code for each ml file, for example stdlib/*.js

You can see the online [in-browser compiler](http://zhanghongbo.me/js-demo)
If you are interested in this project, please contact bobzhang1988@gmail.com

See ./stdlib/*.js to have a look at generated js code for standard
library, you can play with the generated in nodejs or using webpack to
bundle it into browser


```js
```

# Status

This is my part-time hobby project, currently, I don't see any
blocking issue, things to be polised:

1. Make sure runtime support is correct, currently we borrow the
   runtime library stdlib/camlPrimitive.js from *js_of_ocaml*, but we
   can have better runtime encoding with *ocamlscript*, so I would
   like to write my own runtime library and make it thin.

2. Direct tail call support

3. Curry function wrap and un-wrap

4. Make OCaml syntax javascript like(write a javascript parser for
   ocaml using [fan](http://zhanghongbo.me/ifan/)),
   which makes our language really javascript like, the generated code
   would be even more readable
