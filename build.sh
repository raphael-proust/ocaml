#!/bin/sh
OCAMLPARAM='_,annot=1' make  world 2>build.compile
# make  compilerlibs/ocamlbytecomp.cma > build.compile
