#!/bin/sh
set -e
OCAMLPARAM='_,annot=1' make -j2  world.opt 2> build.compile
# make -j9 world.opt
# make  compilerlibs/ocamlbytecomp.cma > build.compile
