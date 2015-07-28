var Pervasives=require("Pervasives");
"unknown primitive:caml_ba_init";
var float32=0;
var float64=1;
var int8_signed=2;
var int8_unsigned=3;
var int16_signed=4;
var int16_unsigned=5;
var int32=6;
var int64=7;
var int=8;
var nativeint=9;
var complex32=10;
var complex64=11;
var char=12;
var c_layout=0;
var fortran_layout=1;
var
 dims=
  function(a)
   {var n="unknown primitive:caml_ba_num_dims";
    var d="unknown primitive:caml_make_vect";
    var $js=0;
    var $js$1=n-1;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2="unknown primitive:caml_ba_dim";d[i]=$js$2,0}
    return d};
var
 map_file=
  function(fd,*opt*,kind,layout,shared,dims$1)
   {var $js=*opt*;
    if($js){var *sth*=*opt*[1];var pos=*sth*}else{var pos=0}
    return "unknown primitive:caml_ba_map_file_bytecode"};
var Genarray=[0,dims,map_file];
var
 create=
  function(kind,layout,dim){return "unknown primitive:caml_ba_create"};
var
 of_array=
  function(kind,layout,data)
   {var ba=create(kind,layout,data["length"]);
    var $js=layout!=0;
    if($js){var ofs=1}else{var ofs=0}
    var $js$1=0;
    var $js$2=data["length"]-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var $js$3=data[i];
      "unknown primitive:Bigarray.unsafe_set[generic,unknown]"}
    return ba};
var
 map_file$1=
  function(fd,pos,kind,layout,shared,dim)
   {var $js=Genarray[2];return $js(fd,pos,kind,layout,shared,[dim])};
var Array1=[0,create,of_array,map_file$1];
var
 create$1=
  function(kind,layout,dim1,dim2){return "unknown primitive:caml_ba_create"};
var slice_left=function(a,n){return "unknown primitive:caml_ba_slice"};
var slice_right=function(a,n){return "unknown primitive:caml_ba_slice"};
var
 of_array$1=
  function(kind,layout,data)
   {var dim1=data["length"];
    var $js=dim1=0;
    if($js){var dim2=0}else{var $js$1=data[0];var dim2=$js$1["length"]}
    var ba=create$1(kind,layout,dim1,dim2);
    var $js$2=layout!=0;
    if($js$2){var ofs=1}else{var ofs=0}
    var $js$3=0;
    var $js$4=dim1-1;
    for(var i=$js$3;i<=$js$4;i++)
     {var row=data[i];
      var $js$5=row["length"]!=dim2;
      if($js$5)
       {var $js$6=Pervasives["invalid_arg"];
        $js$6("Bigarray.Array2.of_array: non-rectangular data")}
      else
       {}
      var $js$7=0;
      var $js$8=dim2-1;
      for(var j=$js$7;j<=$js$8;j++)
       {var $js$9=row[j];
        "unknown primitive:Bigarray.unsafe_set[generic,unknown]"}}
    return ba};
var
 map_file$2=
  function(fd,pos,kind,layout,shared,dim1,dim2)
   {var $js=Genarray[2];return $js(fd,pos,kind,layout,shared,[dim1,dim2])};
var Array2=[0,create$1,slice_left,slice_right,of_array$1,map_file$2];
var
 create$2=
  function(kind,layout,dim1,dim2,dim3)
   {return "unknown primitive:caml_ba_create"};
var slice_left_1=function(a,n,m){return "unknown primitive:caml_ba_slice"};
var slice_right_1=function(a,n,m){return "unknown primitive:caml_ba_slice"};
var slice_left_2=function(a,n){return "unknown primitive:caml_ba_slice"};
var slice_right_2=function(a,n){return "unknown primitive:caml_ba_slice"};
var
 of_array$2=
  function(kind,layout,data)
   {var dim1=data["length"];
    var $js=dim1=0;
    if($js){var dim2=0}else{var $js$1=data[0];var dim2=$js$1["length"]}
    var $js$2=dim2=0;
    if($js$2)
     {var dim3=0}
    else
     {var $js$3=data[0];var $js$4=$js$3[0];var dim3=$js$4["length"]}
    var ba=create$2(kind,layout,dim1,dim2,dim3);
    var $js$5=layout!=0;
    if($js$5){var ofs=1}else{var ofs=0}
    var $js$6=0;
    var $js$7=dim1-1;
    for(var i=$js$6;i<=$js$7;i++)
     {var row=data[i];
      var $js$8=row["length"]!=dim2;
      if($js$8)
       {var $js$9=Pervasives["invalid_arg"];
        $js$9("Bigarray.Array3.of_array: non-cubic data")}
      else
       {}
      var $js$10=0;
      var $js$11=dim2-1;
      for(var j=$js$10;j<=$js$11;j++)
       {var col=row[j];
        var $js$12=col["length"]!=dim3;
        if($js$12)
         {var $js$13=Pervasives["invalid_arg"];
          $js$13("Bigarray.Array3.of_array: non-cubic data")}
        else
         {}
        var $js$14=0;
        var $js$15=dim3-1;
        for(var k=$js$14;k<=$js$15;k++)
         {var $js$16=col[k];
          "unknown primitive:Bigarray.unsafe_set[generic,unknown]"}}}
    return ba};
var
 map_file$3=
  function(fd,pos,kind,layout,shared,dim1,dim2,dim3)
   {var $js=Genarray[2];
    return $js(fd,pos,kind,layout,shared,[dim1,dim2,dim3])};
var
 Array3=
  [0,
   create$2,
   slice_left_1,
   slice_right_1,
   slice_left_2,
   slice_right_2,
   of_array$2,
   map_file$3];
var
 array1_of_genarray=
  function(a)
   {var $js="unknown primitive:caml_ba_num_dims";
    var $js$1=$js=1;
    if($js$1)
     {return a}
    else
     {var $js$2=Pervasives["invalid_arg"];
      return $js$2("Bigarray.array1_of_genarray")}};
var
 array2_of_genarray=
  function(a)
   {var $js="unknown primitive:caml_ba_num_dims";
    var $js$1=$js=2;
    if($js$1)
     {return a}
    else
     {var $js$2=Pervasives["invalid_arg"];
      return $js$2("Bigarray.array2_of_genarray")}};
var
 array3_of_genarray=
  function(a)
   {var $js="unknown primitive:caml_ba_num_dims";
    var $js$1=$js=3;
    if($js$1)
     {return a}
    else
     {var $js$2=Pervasives["invalid_arg"];
      return $js$2("Bigarray.array3_of_genarray")}};
var reshape_1=function(a,dim1){return "unknown primitive:caml_ba_reshape"};
var
 reshape_2=
  function(a,dim1,dim2){return "unknown primitive:caml_ba_reshape"};
var
 reshape_3=
  function(a,dim1,dim2,dim3){return "unknown primitive:caml_ba_reshape"};
var
 match=
  function(prim,prim$1){return "unknown primitive:caml_ba_get_generic"};
var
 match$1=
  function(prim,prim$1)
   {return "unknown primitive:Bigarray.get[generic,unknown]"};
var
 match$2=
  function(prim,prim$1,prim$2)
   {return "unknown primitive:Bigarray.get[generic,unknown]"};
var
 match$3=
  function(prim,prim$1,prim$2,prim$3)
   {return "unknown primitive:Bigarray.get[generic,unknown]"};
module["exports"]=
{"float32":float32,
 "float64":float64,
 "complex32":complex32,
 "complex64":complex64,
 "int8_signed":int8_signed,
 "int8_unsigned":int8_unsigned,
 "int16_signed":int16_signed,
 "int16_unsigned":int16_unsigned,
 "int":int,
 "int32":int32,
 "int64":int64,
 "nativeint":nativeint,
 "char":char,
 "c_layout":c_layout,
 "fortran_layout":fortran_layout,
 "Genarray":Genarray,
 "Array1":Array1,
 "Array2":Array2,
 "Array3":Array3,
 "array1_of_genarray":array1_of_genarray,
 "array2_of_genarray":array2_of_genarray,
 "array3_of_genarray":array3_of_genarray,
 "unknown block:(function prim/1263 prim/1262 (caml_ba_reshape prim/1263 prim/1262))":
 unknown block:(function prim/1263 prim/1262 (caml_ba_reshape prim/1263 prim/1262)),
 "reshape_1":reshape_1,
 "reshape_2":reshape_2,
 "reshape_3":reshape_3};
