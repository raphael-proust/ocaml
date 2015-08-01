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

var $$int=8;

var nativeint=9;

var complex32=10;

var complex64=11;

var $$char=12;

var c_layout=0;

var fortran_layout=1;

var
 dims=
  function(a)
   {var n="unknown primitive:caml_ba_num_dims";
    
    var d="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=n-1;i++){d[i]="unknown primitive:caml_ba_dim",0}
    
    return d;
    };

var
 map_file=
  function(fd,$staropt$star,kind,layout,shared,dims$1)
   {if($staropt$star)
     {var $starsth$star=$staropt$star[1];var pos=$starsth$star;}
    else
     {var pos=0;}
    
    return "unknown primitive:caml_ba_map_file_bytecode";
    };

var Genarray=[0,dims,map_file];

var
 create=
  function(kind,layout,dim){return "unknown primitive:caml_ba_create";};

var
 of_array=
  function(kind,layout,data)
   {var ba=create(kind,layout,data["length"]);
    
    if(layout!=0){var ofs=1;}else{var ofs=0;}
    
    for(var i=0;i<=data["length"]-1;i++)
     {"unknown primitive:Bigarray.unsafe_set[generic,unknown]"}
    
    return ba;
    };

var
 map_file$1=
  function(fd,pos,kind,layout,shared,dim)
   {return Genarray[2](fd,pos,kind,layout,shared,[dim]);};

var Array1=[0,create,of_array,map_file$1];

var
 create$1=
  function(kind,layout,dim1,dim2){return "unknown primitive:caml_ba_create";};

var slice_left=function(a,n){return "unknown primitive:caml_ba_slice";};

var slice_right=function(a,n){return "unknown primitive:caml_ba_slice";};

var
 of_array$1=
  function(kind,layout,data)
   {var dim1=data["length"];
    
    if(dim1=0){var dim2=0;}else{var dim2=data[0]["length"];}
    
    var ba=create$1(kind,layout,dim1,dim2);
    
    if(layout!=0){var ofs=1;}else{var ofs=0;}
    
    for(var i=0;i<=dim1-1;i++)
     {var row=data[i];
      
      if(row["length"]!=dim2)
       {Pervasives["invalid_arg"]
         ("Bigarray.Array2.of_array: non-rectangular data")}
      else
       {}
      
      for(var j=0;j<=dim2-1;j++)
       {"unknown primitive:Bigarray.unsafe_set[generic,unknown]"}
      }
    
    return ba;
    };

var
 map_file$2=
  function(fd,pos,kind,layout,shared,dim1,dim2)
   {return Genarray[2](fd,pos,kind,layout,shared,[dim1,dim2]);};

var Array2=[0,create$1,slice_left,slice_right,of_array$1,map_file$2];

var
 create$2=
  function(kind,layout,dim1,dim2,dim3)
   {return "unknown primitive:caml_ba_create";};

var slice_left_1=function(a,n,m){return "unknown primitive:caml_ba_slice";};

var slice_right_1=function(a,n,m){return "unknown primitive:caml_ba_slice";};

var slice_left_2=function(a,n){return "unknown primitive:caml_ba_slice";};

var slice_right_2=function(a,n){return "unknown primitive:caml_ba_slice";};

var
 of_array$2=
  function(kind,layout,data)
   {var dim1=data["length"];
    
    if(dim1=0){var dim2=0;}else{var dim2=data[0]["length"];}
    
    if(dim2=0){var dim3=0;}else{var dim3=data[0][0]["length"];}
    
    var ba=create$2(kind,layout,dim1,dim2,dim3);
    
    if(layout!=0){var ofs=1;}else{var ofs=0;}
    
    for(var i=0;i<=dim1-1;i++)
     {var row=data[i];
      
      if(row["length"]!=dim2)
       {Pervasives["invalid_arg"]("Bigarray.Array3.of_array: non-cubic data")}
      else
       {}
      
      for(var j=0;j<=dim2-1;j++)
       {var col=row[j];
        
        if(col["length"]!=dim3)
         {Pervasives["invalid_arg"]
           ("Bigarray.Array3.of_array: non-cubic data")}
        else
         {}
        
        for(var k=0;k<=dim3-1;k++)
         {"unknown primitive:Bigarray.unsafe_set[generic,unknown]"}
        }
      }
    
    return ba;
    };

var
 map_file$3=
  function(fd,pos,kind,layout,shared,dim1,dim2,dim3)
   {return Genarray[2](fd,pos,kind,layout,shared,[dim1,dim2,dim3]);};

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
   {if("unknown primitive:caml_ba_num_dims"=1)
     {return a;}
    else
     {return Pervasives["invalid_arg"]("Bigarray.array1_of_genarray");}
    };

var
 array2_of_genarray=
  function(a)
   {if("unknown primitive:caml_ba_num_dims"=2)
     {return a;}
    else
     {return Pervasives["invalid_arg"]("Bigarray.array2_of_genarray");}
    };

var
 array3_of_genarray=
  function(a)
   {if("unknown primitive:caml_ba_num_dims"=3)
     {return a;}
    else
     {return Pervasives["invalid_arg"]("Bigarray.array3_of_genarray");}
    };

var reshape_1=function(a,dim1){return "unknown primitive:caml_ba_reshape";};

var
 reshape_2=
  function(a,dim1,dim2){return "unknown primitive:caml_ba_reshape";};

var
 reshape_3=
  function(a,dim1,dim2,dim3){return "unknown primitive:caml_ba_reshape";};

var
 match=
  function(prim,prim$1){return "unknown primitive:caml_ba_get_generic";};

var
 match$1=
  function(prim,prim$1)
   {return "unknown primitive:Bigarray.get[generic,unknown]";};

var
 match$2=
  function(prim,prim$1,prim$2)
   {return "unknown primitive:Bigarray.get[generic,unknown]";};

var
 match$3=
  function(prim,prim$1,prim$2,prim$3)
   {return "unknown primitive:Bigarray.get[generic,unknown]";};


[0,
 float32,
 float64,
 complex32,
 complex64,
 int8_signed,
 int8_unsigned,
 int16_signed,
 int16_unsigned,
 $$int,
 int32,
 int64,
 nativeint,
 $$char,
 c_layout,
 fortran_layout,
 Genarray,
 Array1,
 Array2,
 Array3,
 array1_of_genarray,
 array2_of_genarray,
 array3_of_genarray,
 function(prim,prim$1){return "unknown primitive:caml_ba_reshape";},
 reshape_1,
 reshape_2,
 reshape_3];
module["exports"]=
{"float32":float32,
 "float64":float64,
 "complex32":complex32,
 "complex64":complex64,
 "int8_signed":int8_signed,
 "int8_unsigned":int8_unsigned,
 "int16_signed":int16_signed,
 "int16_unsigned":int16_unsigned,
 "int":$$int,
 "int32":int32,
 "int64":int64,
 "nativeint":nativeint,
 "char":$$char,
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

