#!/bin/sh
set -e
make -j2 compilerlibs/ocamlbytecomp.cma 2>build.compile
# OCAMLPARAM='_,annot=1' make -j9  world.opt 2> build.compile
# cp ./stdlib/*.js ../jslib.git/stdlib
# make -j9 world.opt
# make  compilerlibs/ocamlbytecomp.cma > build.compile
