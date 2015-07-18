#!/bin/sh
set -e
OCAMLPARAM='_,annot=1' make  world 2> js-lambda.compile
make -j9 world.opt
# make  compilerlibs/ocamlbytecomp.cma > build.compile
