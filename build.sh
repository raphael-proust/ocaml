#!/bin/sh
set -e
# export OCAML_JS=1
export OCAML_RAW_JS=1
# make -j2 compilerlibs/ocamlbytecomp.cma 2>build.compile
OCAMLPARAM='_,annot=1' make -j9  world.opt 2> build.compile
cp ./stdlib/*.js ../jslib.git/stdlib
# make -j9 world.opt
# make  compilerlibs/ocamlbytecomp.cma > build.compile
