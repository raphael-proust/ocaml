// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var CamlPrimitive=require("./camlPrimitive.js");


CamlPrimitive["caml_ba_init"](/* () */0);
var float32=/* Float32 */0;

var float64=/* Float64 */1;

var int8_signed=/* Int8_signed */2;

var int8_unsigned=/* Int8_unsigned */3;

var int16_signed=/* Int16_signed */4;

var int16_unsigned=/* Int16_unsigned */5;

var int32=/* Int32 */6;

var int64=/* Int64 */7;

var $$int=/* Int */8;

var nativeint=/* Nativeint */9;

var complex32=/* Complex32 */10;

var complex64=/* Complex64 */11;

var $$char=/* Char */12;

var c_layout=/* C_layout */0;

var fortran_layout=/* Fortran_layout */1;

var
 dims=
  function(a)
   {var n=CamlPrimitive["caml_ba_num_dims"](a);
    
    var d=CamlPrimitive["caml_make_vect"](n,0);
    
    for(var i=0;i<=n-1;i++){d[i+1]=CamlPrimitive["caml_ba_dim"](a,i)}
    
    return d};

var
 map_file=
  function(fd,$staropt$star,kind,layout,shared,dims)
   {var pos=$staropt$star?$staropt$star[1]:0;
    
    return CamlPrimitive["caml_ba_map_file_bytecode"]
            (fd,kind,layout,shared,dims,pos)};

var Genarray=[0,dims,map_file];

var
 create=
  function(kind,layout,dim)
   {return CamlPrimitive["caml_ba_create"](kind,layout,[/* array */0,dim])};

var
 of_array=
  function(kind,layout,data)
   {var ba=create(kind,layout,/* -1 for tag */data["length"]-1);
    
    var ofs=layout!==0?1:0;
    
    for(var i=0;i<=/* -1 for tag */data["length"]-1-1;i++)
     {/* unknown */"Bigarray.unsafe_set[generic,unknown]"}
    
    return ba};

var
 map_file$1=
  function(fd,pos,kind,layout,shared,dim)
   {return Genarray[2](fd,pos,kind,layout,shared,[/* array */0,dim])};

var Array1=[0,create,of_array,map_file$1];

var
 create$1=
  function(kind,layout,dim1,dim2)
   {return CamlPrimitive["caml_ba_create"]
            (kind,layout,[/* array */0,dim1,dim2])};

var
 slice_left=
  function(a,n){return CamlPrimitive["caml_ba_slice"](a,[/* array */0,n])};

var
 slice_right=
  function(a,n){return CamlPrimitive["caml_ba_slice"](a,[/* array */0,n])};

var
 of_array$1=
  function(kind,layout,data)
   {var dim1=/* -1 for tag */data["length"]-1;
    
    var dim2=dim1===0?0:/* -1 for tag */data[1]["length"]-1;
    
    var ba=create$1(kind,layout,dim1,dim2);
    
    var ofs=layout!==0?1:0;
    
    for(var i=0;i<=dim1-1;i++)
     {var row=data[i+1];
      
      if(/* -1 for tag */row["length"]-1!==dim2)
       {Pervasives["invalid_arg"]
         ("Bigarray.Array2.of_array: non-rectangular data")}
      
      for(var j=0;j<=dim2-1;j++)
       {/* unknown */"Bigarray.unsafe_set[generic,unknown]"}
      }
    
    return ba};

var
 map_file$2=
  function(fd,pos,kind,layout,shared,dim1,dim2)
   {return Genarray[2](fd,pos,kind,layout,shared,[/* array */0,dim1,dim2])};

var Array2=[0,create$1,slice_left,slice_right,of_array$1,map_file$2];

var
 create$2=
  function(kind,layout,dim1,dim2,dim3)
   {return CamlPrimitive["caml_ba_create"]
            (kind,layout,[/* array */0,dim1,dim2,dim3])};

var
 slice_left_1=
  function(a,n,m){return CamlPrimitive["caml_ba_slice"](a,[/* array */0,n,m])};

var
 slice_right_1=
  function(a,n,m){return CamlPrimitive["caml_ba_slice"](a,[/* array */0,n,m])};

var
 slice_left_2=
  function(a,n){return CamlPrimitive["caml_ba_slice"](a,[/* array */0,n])};

var
 slice_right_2=
  function(a,n){return CamlPrimitive["caml_ba_slice"](a,[/* array */0,n])};

var
 of_array$2=
  function(kind,layout,data)
   {var dim1=/* -1 for tag */data["length"]-1;
    
    var dim2=dim1===0?0:/* -1 for tag */data[1]["length"]-1;
    
    var dim3=dim2===0?0:/* -1 for tag */data[1][1]["length"]-1;
    
    var ba=create$2(kind,layout,dim1,dim2,dim3);
    
    var ofs=layout!==0?1:0;
    
    for(var i=0;i<=dim1-1;i++)
     {var row=data[i+1];
      
      if(/* -1 for tag */row["length"]-1!==dim2)
       {Pervasives["invalid_arg"]("Bigarray.Array3.of_array: non-cubic data")}
      
      for(var j=0;j<=dim2-1;j++)
       {var col=row[j+1];
        
        if(/* -1 for tag */col["length"]-1!==dim3)
         {Pervasives["invalid_arg"]
           ("Bigarray.Array3.of_array: non-cubic data")}
        
        for(var k=0;k<=dim3-1;k++)
         {/* unknown */"Bigarray.unsafe_set[generic,unknown]"}
        }
      }
    
    return ba};

var
 map_file$3=
  function(fd,pos,kind,layout,shared,dim1,dim2,dim3)
   {return Genarray[2]
            (fd,pos,kind,layout,shared,[/* array */0,dim1,dim2,dim3])};

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
   {return CamlPrimitive["caml_ba_num_dims"](a)===1
            ?a
            :Pervasives["invalid_arg"]("Bigarray.array1_of_genarray")};

var
 array2_of_genarray=
  function(a)
   {return CamlPrimitive["caml_ba_num_dims"](a)===2
            ?a
            :Pervasives["invalid_arg"]("Bigarray.array2_of_genarray")};

var
 array3_of_genarray=
  function(a)
   {return CamlPrimitive["caml_ba_num_dims"](a)===3
            ?a
            :Pervasives["invalid_arg"]("Bigarray.array3_of_genarray")};

var
 reshape_1=
  function(a,dim1)
   {return CamlPrimitive["caml_ba_reshape"](a,[/* array */0,dim1])};

var
 reshape_2=
  function(a,dim1,dim2)
   {return CamlPrimitive["caml_ba_reshape"](a,[/* array */0,dim1,dim2])};

var
 reshape_3=
  function(a,dim1,dim2,dim3)
   {return CamlPrimitive["caml_ba_reshape"](a,[/* array */0,dim1,dim2,dim3])};

var
 match=
  function(prim,prim$1)
   {return CamlPrimitive["caml_ba_get_generic"](prim,prim$1)};

var
 match$1=
  function(prim,prim$1){return /* unknown */"Bigarray.get[generic,unknown]"};

var
 match$2=
  function(prim,prim$1,prim$2)
   {return /* unknown */"Bigarray.get[generic,unknown]"};

var
 match$3=
  function(prim,prim$1,prim$2,prim$3)
   {return /* unknown */"Bigarray.get[generic,unknown]"};


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
 "reshape":
 function(prim,prim$1){return CamlPrimitive["caml_ba_reshape"](prim,prim$1)},
 "reshape_1":reshape_1,
 "reshape_2":reshape_2,
 "reshape_3":reshape_3};

