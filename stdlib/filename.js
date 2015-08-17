// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Random=require("./random.js");
var Buffer=require("./buffer.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 generic_quote=
  function(quotequote,s)
   {var l=s["length"];
    
    var b=Buffer["create"](l+20);
    
    Buffer["add_char"](b,39);
    for(var i=0;i<=l-1;i++)
     {s["charCodeAt"](i)===39
       ?Buffer["add_string"](b,quotequote)
       :Buffer["add_char"](b,s["charCodeAt"](i));
      }
    
    Buffer["add_char"](b,39);
    return Buffer["contents"](b);
    };

var
 generic_basename=
  function(is_dir_sep,current_dir_name,name)
   {var
     find_end=
      function(n)
       {return n<0
                ?$$String["sub"](name,0,1)
                :is_dir_sep(name,n)?find_end(n-1):find_beg(n,n+1);
        };
    
    var
     find_beg=
      function(n,p)
       {return n<0
                ?$$String["sub"](name,0,p)
                :is_dir_sep(name,n)
                  ?$$String["sub"](name,n+1,p-n-1)
                  :find_beg(n-1,p);
        };
    
    return CamlPrimitive["caml_string_equal"](name,"")
            ?current_dir_name
            :find_end(name["length"]-1);
    };

var
 generic_dirname=
  function(is_dir_sep,current_dir_name,name)
   {var
     trailing_sep=
      function(n)
       {return n<0
                ?$$String["sub"](name,0,1)
                :is_dir_sep(name,n)?trailing_sep(n-1):base(n);
        };
    
    var
     base=
      function(n)
       {return n<0
                ?current_dir_name
                :is_dir_sep(name,n)?intermediate_sep(n):base(n-1);
        };
    
    var
     intermediate_sep=
      function(n)
       {return n<0
                ?$$String["sub"](name,0,1)
                :is_dir_sep(name,n)
                  ?intermediate_sep(n-1)
                  :$$String["sub"](name,0,n+1);
        };
    
    return CamlPrimitive["caml_string_equal"](name,"")
            ?current_dir_name
            :trailing_sep(name["length"]-1);
    };

var current_dir_name=".";

var parent_dir_name="..";

var dir_sep="/";

var is_dir_sep=function(s,i){return s["charCodeAt"](i)===47;};

var is_relative=function(n){return n["length"]<1||n["charCodeAt"](0)!==47;};

var
 is_implicit=
  function(n)
   {return is_relative(n)&&
           (n["length"]<
            2||
            CamlPrimitive["caml_string_notequal"]($$String["sub"](n,0,2),"./"))&&
           (n["length"]<
            3||
            CamlPrimitive["caml_string_notequal"]
             ($$String["sub"](n,0,3),"../"));
    };

var
 check_suffix=
  function(name,suff)
   {return name["length"]>=
           suff["length"]&&
           CamlPrimitive["caml_string_equal"]
            ($$String["sub"]
              (name,name["length"]-suff["length"],suff["length"]),
             suff);
    };

var temp_dir_name;
try
 {temp_dir_name=CamlPrimitive["caml_sys_getenv"]("TMPDIR");}
catch(exn)
 {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
   {temp_dir_name="/tmp";}
  else
   {throw exn;}
  }

var quote=generic_quote("'\''");

var basename=generic_basename(is_dir_sep,current_dir_name);

var dirname=generic_dirname(is_dir_sep,current_dir_name);

var
 Unix=
  [0,
   current_dir_name,
   parent_dir_name,
   dir_sep,
   is_dir_sep,
   is_relative,
   is_implicit,
   check_suffix,
   temp_dir_name,
   quote,
   basename,
   dirname];

var current_dir_name$1=".";

var parent_dir_name$1="..";

var dir_sep$1="\";

var
 is_dir_sep$1=
  function(s,i){var c=s["charCodeAt"](i);return c===47||c===92||c===58;};

var
 is_relative$1=
  function(n)
   {return (n["length"]<1||n["charCodeAt"](0)!==47)&&
           (n["length"]<1||n["charCodeAt"](0)!==92)&&
           (n["length"]<2||n["charCodeAt"](1)!==58);
    };

var
 is_implicit$1=
  function(n)
   {return is_relative$1(n)&&
           (n["length"]<
            2||
            CamlPrimitive["caml_string_notequal"]($$String["sub"](n,0,2),"./"))&&
           (n["length"]<
            2||
            CamlPrimitive["caml_string_notequal"]($$String["sub"](n,0,2),".\"))&&
           (n["length"]<
            3||
            CamlPrimitive["caml_string_notequal"]
             ($$String["sub"](n,0,3),"../"))&&
           (n["length"]<
            3||
            CamlPrimitive["caml_string_notequal"]
             ($$String["sub"](n,0,3),"..\"));
    };

var
 check_suffix$1=
  function(name,suff)
   {var s=$$String["sub"](name,name["length"]-suff["length"],suff["length"]);
    
    return name["length"]>=
           suff["length"]&&
           CamlPrimitive["caml_string_equal"]
            ($$String["lowercase"](s),$$String["lowercase"](suff));
    };

var temp_dir_name$1;
try
 {temp_dir_name$1=CamlPrimitive["caml_sys_getenv"]("TEMP");}
catch(exn$1)
 {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
   {temp_dir_name$1=".";}
  else
   {throw exn$1;}
  }

var
 quote$1=
  function(s)
   {var l=s["length"];
    
    var b=Buffer["create"](l+20);
    
    Buffer["add_char"](b,34);
    var
     loop=
      function(i)
       {if(i===l)
         {return Buffer["add_char"](b,34);}
        else
         {var c=s["charCodeAt"](i);
          
          return c!==34
                  ?c!==92?(Buffer["add_char"](b,c),loop(i+1)):loop_bs(0,i)
                  :loop_bs(0,i);
          }
        };
    
    var
     loop_bs=
      function(n,i)
       {if(i===l)
         {Buffer["add_char"](b,34);return add_bs(n);}
        else
         {var c=s["charCodeAt"](i);
          
          return c!==34
                  ?c!==92?(add_bs(n),loop(i)):loop_bs(n+1,i+1)
                  :(add_bs(2*n+1),Buffer["add_char"](b,34),loop(i+1));
          }
        };
    
    var
     add_bs=
      function(n){for(var _j=1;_j<=n;_j++){Buffer["add_char"](b,92)}return 0;};
    
    loop(0);
    return Buffer["contents"](b);
    };

var
 has_drive=
  function(s)
   {var
     is_letter=
      function(param)
       {var exit;
        
        if(param>=91)
         {var switcher=-97+param;if(25<switcher>>>0){exit=41;}else{exit=40;}}
        else
         {if(param>=65){exit=40;}else{exit=41;}}
        
        switch(exit){case 41:return /* false */0;case 40:return /* true */1;}
        };
    
    return s["length"]>=
           2&&
           is_letter(s["charCodeAt"](0))&&
           s["charCodeAt"](1)===
           58;
    };

var
 drive_and_path=
  function(s)
   {return has_drive(s)
            ?/* tuple */[0,
              $$String["sub"](s,0,2),
              $$String["sub"](s,2,s["length"]-2)]
            :/* tuple */[0,"",s];
    };

var
 dirname$1=
  function(s)
   {var match=drive_and_path(s);
    
    var path=match[2];
    
    var drive=match[1];
    
    var dir=generic_dirname(is_dir_sep$1,current_dir_name$1,path);
    
    return Pervasives["^"](drive,dir);
    };

var
 basename$1=
  function(s)
   {var match=drive_and_path(s);
    
    var path=match[2];
    
    return generic_basename(is_dir_sep$1,current_dir_name$1,path);
    };

var
 Win32=
  [0,
   current_dir_name$1,
   parent_dir_name$1,
   dir_sep$1,
   is_dir_sep$1,
   is_relative$1,
   is_implicit$1,
   check_suffix$1,
   temp_dir_name$1,
   quote$1,
   has_drive,
   drive_and_path,
   dirname$1,
   basename$1];

var current_dir_name$2=".";

var parent_dir_name$2="..";

var dir_sep$2="/";

var is_dir_sep$2=Win32[4];

var is_relative$2=Win32[5];

var is_implicit$2=Win32[6];

var check_suffix$2=Win32[7];

var temp_dir_name$2=Unix[8];

var quote$2=Unix[9];

var basename$2=generic_basename(is_dir_sep$2,current_dir_name$2);

var dirname$2=generic_dirname(is_dir_sep$2,current_dir_name$2);

var
 Cygwin=
  [0,
   current_dir_name$2,
   parent_dir_name$2,
   dir_sep$2,
   is_dir_sep$2,
   is_relative$2,
   is_implicit$2,
   check_suffix$2,
   temp_dir_name$2,
   quote$2,
   basename$2,
   dirname$2];

var match=Sys["os_type"];

var exit;

switch(match)
 {case "Cygwin":
   var
    match$1=
     /* tuple */[0,
      Cygwin[1],
      Cygwin[2],
      Cygwin[3],
      Cygwin[4],
      Cygwin[5],
      Cygwin[6],
      Cygwin[7],
      Cygwin[8],
      Cygwin[9],
      Cygwin[10],
      Cygwin[11]];
   
  case "Unix":
   var
    match$1=
     /* tuple */[0,
      Unix[1],
      Unix[2],
      Unix[3],
      Unix[4],
      Unix[5],
      Unix[6],
      Unix[7],
      Unix[8],
      Unix[9],
      Unix[10],
      Unix[11]];
   
  case "Win32":
   var
    match$1=
     /* tuple */[0,
      Win32[1],
      Win32[2],
      Win32[3],
      Win32[4],
      Win32[5],
      Win32[6],
      Win32[7],
      Win32[8],
      Win32[9],
      Win32[13],
      Win32[12]];
   
  default:exit=21;}

switch(exit)
 {case 21:
   throw [0,
          CamlPrimitive["caml_global_data"]["Assert_failure"],
          [0,"filename.ml",189,9]];
   
  }

var dirname$3=match$1[11];

var basename$3=match$1[10];

var quote$3=match$1[9];

var temp_dir_name$3=match$1[8];

var check_suffix$3=match$1[7];

var is_implicit$3=match$1[6];

var is_relative$3=match$1[5];

var is_dir_sep$3=match$1[4];

var dir_sep$3=match$1[3];

var parent_dir_name$3=match$1[2];

var current_dir_name$3=match$1[1];

var
 concat=
  function(dirname,filename)
   {var l=dirname["length"];
    
    return l===0||is_dir_sep$3(dirname,l-1)
            ?Pervasives["^"](dirname,filename)
            :Pervasives["^"](dirname,Pervasives["^"](dir_sep$3,filename));
    };

var
 chop_suffix=
  function(name,suff)
   {var n=name["length"]-suff["length"];
    
    return n<0
            ?Pervasives["invalid_arg"]("Filename.chop_suffix")
            :$$String["sub"](name,0,n);
    };

var
 chop_extension=
  function(name)
   {var
     search_dot=
      function(i)
       {return i<0||is_dir_sep$3(name,i)
                ?Pervasives["invalid_arg"]("Filename.chop_extension")
                :name["charCodeAt"](i)===46
                  ?$$String["sub"](name,0,i)
                  :search_dot(i-1);
        };
    
    return search_dot(name["length"]-1);
    };

var prng=[246,function(param){return Random["State"][2](/* () */0);}];

var
 temp_file_name=
  function(temp_dir,prefix,suffix)
   {var lzarg=prng;
    
    var tag=CamlPrimitive["caml_obj_tag"](lzarg);
    
    var
     rnd=
      Random["State"][4]
       (tag===250
         ?lzarg[1]
         :tag===246?CamlinternalLazy["force_lazy_block"](lzarg):lzarg)&
      16777215;
    
    return concat
            (temp_dir,
             Printf["sprintf"]
              ([/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* Int */4,
                  /* Int_x */6,
                  [/* Lit_padding */0,/* Zeros */2,6],
                  /* No_precision */0,
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                "%s%06x%s"],
               prefix,
               rnd,
               suffix));
    };

var current_temp_dir_name=[0,temp_dir_name$3];

var set_temp_dir_name=function(s){return current_temp_dir_name[1]=s,0;};

var get_temp_dir_name=function(param){return current_temp_dir_name[1];};

var
 temp_file=
  function($staropt$star,prefix,suffix)
   {var temp_dir;
    if($staropt$star)
     {var $starsth$star=$staropt$star[1];temp_dir=$starsth$star;}
    else
     {temp_dir=current_temp_dir_name[1];}
    
    var
     try_name=
      function(counter)
       {var name=temp_file_name(temp_dir,prefix,suffix);
        
        try
         {CamlPrimitive["caml_sys_close"]
           (CamlPrimitive["caml_sys_open"]
             (name,
              [/* :: */0,
               /* Open_wronly */1,
               [/* :: */0,
                /* Open_creat */3,
                [/* :: */0,/* Open_excl */5,/* [] */0]]],
              384));
          return name;
          }
        catch(e)
         {var tag=e[1];
          
          if(tag===CamlPrimitive["caml_global_data"]["Sys_error"])
           {if(counter>=1e3){throw e;}else{return try_name(counter+1);}}
          else
           {throw e;}
          }
        };
    
    return try_name(0);
    };

var
 open_temp_file=
  function($staropt$star,$staropt$star,prefix,suffix)
   {var mode;
    if($staropt$star$1)
     {var $starsth$star=$staropt$star$1[1];mode=$starsth$star;}
    else
     {mode=[/* :: */0,/* Open_text */7,/* [] */0];}
    
    var temp_dir;
    if($staropt$star)
     {var $starsth$star$1=$staropt$star[1];temp_dir=$starsth$star$1;}
    else
     {temp_dir=current_temp_dir_name[1];}
    
    var
     try_name=
      function(counter)
       {var name=temp_file_name(temp_dir,prefix,suffix);
        
        try
         {return /* tuple */[0,
                  name,
                  Pervasives["open_out_gen"]
                   (/* :: */[0,
                     /* Open_wronly */1,
                     /* :: */[0,
                      /* Open_creat */3,
                      /* :: */[0,/* Open_excl */5,mode]]],
                    384,
                    name)];
          }
        catch(e)
         {var tag=e[1];
          
          if(tag===CamlPrimitive["caml_global_data"]["Sys_error"])
           {if(counter>=1e3){throw e;}else{return try_name(counter+1);}}
          else
           {throw e;}
          }
        };
    
    return try_name(0);
    };

module["exports"]=
{"current_dir_name":current_dir_name$3,
 "parent_dir_name":parent_dir_name$3,
 "dir_sep":dir_sep$3,
 "concat":concat,
 "is_relative":is_relative$3,
 "is_implicit":is_implicit$3,
 "check_suffix":check_suffix$3,
 "chop_suffix":chop_suffix,
 "chop_extension":chop_extension,
 "basename":basename$3,
 "dirname":dirname$3,
 "temp_file":temp_file,
 "open_temp_file":open_temp_file,
 "get_temp_dir_name":get_temp_dir_name,
 "set_temp_dir_name":set_temp_dir_name,
 "temp_dir_name":temp_dir_name$3,
 "quote":quote$3};

