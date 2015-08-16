// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Printlambda=require("Printlambda");
var Translmod=require("Translmod");
var Char=require("Char");
var Printtyp=require("Printtyp");
var Simplif=require("Simplif");
var Pervasives=require("Pervasives");
var List=require("List");
var Env=require("Env");
var Printf=require("Printf");
var Clflags=require("Clflags");
var CamlinternalMod=require("CamlinternalMod");
var Format=require("Format");
var Set=require("Set");
var Obj=require("Obj");
var Misc=require("Misc");
var Oprint=require("Oprint");
var Lambda=require("Lambda");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Bytes=require("Bytes");
var Tbl=require("Tbl");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Map=require("Map");
var $$Array=require("Array");
var Sys=require("Sys");


var
 default_alphabet=
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var
 uri_safe_alphabet=
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

var padding=61;

var
 of_char=
  function($staropt$star,x)
   {if($staropt$star)
     {var alphabet=$staropt$star[1];}
    else
     {var alphabet=default_alphabet;}
    
    if(x=padding){return 0;}else{return $$String["index"](alphabet,x);}
    };

var
 to_char=
  function($staropt$star,x)
   {if($staropt$star)
     {var alphabet=$staropt$star[1];}
    else
     {var alphabet=default_alphabet;}
    
    return alphabet[x];
    };

var
 decode=
  function(alphabet,input)
   {var length=input["length"];
    
    if((length%4)=0)
     {var input$1=input;}
    else
     {var input$1=Pervasives["^"](input,$$String["make"](4-length%4,padding));
      }
    
    var length$1=input$1["length"];
    
    var words=length$1/4;
    
    if(length$1!=0)
     {if(input$1[length$1-2]=padding)
       {var padding$1=2;}
      else
       {if(input$1[length$1-1]=padding)
         {var padding$1=1;}
        else
         {var padding$1=0;}
        }
      }
    else
     {var padding$1=0;}
    
    var output=Bytes["make"](words*3-padding$1,0);
    
    for(var i=0;i<=words-1;i++)
     {var a=of_char(alphabet,input$1[4*i+0]);
      
      var b=of_char(alphabet,input$1[4*i+1]);
      
      var c=of_char(alphabet,input$1[4*i+2]);
      
      var d=of_char(alphabet,input$1[4*i+3]);
      
      var n=a<<18|b<<12|c<<6|d;
      
      var x=n>>>16&255;
      
      var y=n>>>8&255;
      
      var z=n&255;
      
      output[3*i+0]=Pervasives["char_of_int"](x),0;
      if(i!=words-1||padding$1<2)
       {output[3*i+1]=Pervasives["char_of_int"](y),0}
      else
       {}
      
      if(i!=words-1||padding$1<1)
       {output[3*i+2]=Pervasives["char_of_int"](z),0}
      else
       {}
      }
    
    return Bytes["unsafe_to_string"](output);
    };

var
 encode=
  function($staropt$star,alphabet,input)
   {if($staropt$star){var pad=$staropt$star[1];}else{var pad=1;}
    
    var length=input["length"];
    
    var words=(length+2)/3;
    
    if((length%3)=0){var padding_len=0;}else{var padding_len=3-length%3;}
    
    var output=Bytes["make"](words*4,0);
    
    var get=function(i){if(i>=length){return 0;}else{return input[i];}};
    
    for(var i=0;i<=words-1;i++)
     {var x=get(3*i+0);
      
      var y=get(3*i+1);
      
      var z=get(3*i+2);
      
      var n=x<<16|y<<8|z;
      
      var a=n>>>18&63;
      
      var b=n>>>12&63;
      
      var c=n>>>6&63;
      
      var d=n&63;
      
      output[4*i+0]=
      to_char(alphabet,a),
      0,
      output[4*i+1]=
      to_char(alphabet,b),
      0,
      output[4*i+2]=
      to_char(alphabet,c),
      0,
      output[4*i+3]=
      to_char(alphabet,d),
      0}
    
    for(var i$1=1;i$1<=padding_len;i$1++)
     {output[output["length"]-i$1]=padding,0}
    
    if(pad)
     {return Bytes["unsafe_to_string"](output);}
    else
     {return Bytes["sub_string"](output,0,output["length"]-padding_len);}
    };

var B64=[0,default_alphabet,uri_safe_alphabet,decode,encode];

var
 filter_map=
  function(f,xs)
   {if(xs)
     {var ys=xs[2];
      
      var match=f(xs[1]);
      
      if(match)
       {return /* :: */[0,match[1],filter_map(f,ys)];}
      else
       {return filter_map(f,ys);}
      }
    else
     {return 0;}
    };

var Jlist=[0,filter_map];

var J=[0];

var
 string_of_fmt=
  function(f,v)
   {var buf=Buffer["create"](37);
    
    var fmt=Format["formatter_of_buffer"](buf);
    
    f(fmt,v);
    var match=Format["pp_print_flush"](fmt,0);
    
    return Buffer["contents"](buf);
    };

var Util=[0,string_of_fmt];

var
 string_of_fmt$1=
  function(f,v)
   {var buf=Buffer["create"](37);
    
    var fmt=Format["formatter_of_buffer"](buf);
    
    f(fmt,v);
    var match=Format["pp_print_flush"](fmt,0);
    
    return Buffer["contents"](buf);
    };

var string_of_lambda=string_of_fmt$1(Printlambda["lambda"]);

var string_of_primitive=string_of_fmt$1(Printlambda["primitive"]);

var Lambda_util=[0,string_of_lambda,string_of_primitive];

var js_flag=8;

var is_js=function(i){return (i[3]&js_flag)!=0;};

var create_js=function(name){return /* record */[0,0,name,js_flag];};

var create=Ident["create"];

var Jident=[0,is_js,create_js,create];

var
 Gen_of_env=
  CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",384,2],[0,[0,0,0,0,0,0]]);

var
 Compile_primitive=
  CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",702,7],[0,[0,0,0,0]]);

var
 Gen_util=
  CamlinternalMod["init_mod"]
   ([0,"bytecomp/px.ml",980,12],[0,[0,0,0,0,0,[0,[0,0]],0,0,0,0,0]]);

var
 Compile_lambda=
  CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",1425,22],[0,[0,0,0]]);

var
 Js_pp_util=
  CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",2038,27],[0,[0,0]]);

var Json=CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",2078,32],[0,[0,0]]);

var
 Optimizer=
  CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",2180,37],[0,[0,0]]);

var
 Pp=
  CamlinternalMod["init_mod"]
   ([0,"bytecomp/px.ml",2711,42],[0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]);

var
 Source_map=
  CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",5642,52],[0,[0,0]]);

var Vlq64=CamlinternalMod["init_mod"]([0,"bytecomp/px.ml",5881,57],[0,[0,0]]);

var compare=function(x,y){return "unknown primitive:caml_int_compare";};

var HandlerMap=Map["Make"]([0,compare]);

var empty_handler_map=HandlerMap[1];

var Compile_defs=[0,HandlerMap,empty_handler_map];

var prim="CamlPrimitive";

var mk=function(comment,exp){return /* record */[0,exp,comment];};

var
 access=
  function(comment,e0,e1)
   {return /* record */[0,/* EAccess */[5,e0,e1],comment];};

var
 $$var=
  function(comment,id){return /* record */[0,/* EVar */[8,id],comment];};

var
 str=
  function(comment,s)
   {return /* record */[0,/* EStr */[10,s,948404561],comment];};

var
 efun=
  function(comment,name,$staropt$star,params,block)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* EFun */[9,name,params,block,loc],comment];
    };

var
 econd=
  function(comment,b,t,f)
   {return /* record */[0,/* ECond */[1,b,t,f],comment];};

var
 $$int=
  function(comment,i){return /* record */[0,/* ENum */[13,i],comment];};

var
 $$float=
  function(comment,i){return /* record */[0,/* ENum */[13,i],comment];};

var
 eqeq=
  function(comment,e0,e1)
   {return /* record */[0,/* EBin */[2,17,e0,e1],comment];};

var
 eq=
  function(comment,e0,e1)
   {return /* record */[0,/* EBin */[2,0,e0,e1],comment];};

var
 eqeqeq=
  function(comment,e0,e1)
   {return /* record */[0,/* EBin */[2,19,e0,e1],comment];};

var
 $$typeof=
  function(comment,e){return /* record */[0,/* EUn */[3,3,e],comment];};

var
 bin=
  function(comment,op,e0,e1)
   {return /* record */[0,/* EBin */[2,op,e0,e1],comment];};

var
 un=
  function(comment,op,e){return /* record */[0,/* EUn */[3,op,e],comment];};

var
 call=
  function(comment,$staropt$star,e0,args)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* ECall */[4,e0,args,loc],comment];
    };

var
 arr=
  function(comment,es)
   {return /* record */[0,
            /* EArr */[11,
             List["map"](function(x){return /* Some */[0,x];},es)],
            comment];
    };

var
 seq=
  function(comment,e0,e1){return /* record */[0,/* ESeq */[0,e0,e1],comment];};

var
 obj=
  function(comment,properties)
   {return /* record */[0,/* EObj */[14,properties],comment];};

var true_=$$var(0,Jident[2]("true"));

var false_=$$var(0,Jident[2]("false"));

var
 unknown_lambda=
  function($staropt$star,lam)
   {if($staropt$star)
     {var comment=$staropt$star[1];}
    else
     {var comment="unknown";}
    
    return str(/* Some */[0,comment],Lambda_util[1](lam));
    };

var
 unknown_primitive=
  function($staropt$star,p)
   {if($staropt$star)
     {var comment=$staropt$star[1];}
    else
     {var comment="unknown";}
    
    return str(/* Some */[0,comment],Lambda_util[2](p));
    };

var unit=function(comment,param){return $$float(comment,0);};

var js_var=function(comment,v){return $$var(comment,Jident[2](v));};

var $$undefined=function(comment,param){return js_var(comment,"undefined");};

var
 math=
  function(comment,v){return access(comment,js_var(0,"Math"),str(0,v));};

var
 inc=
  function(comment,e)
   {var match=e[1];
    
    switch(match)
     {case 13:return /* record */[0,/* ENum */[13,match[1]+1],e[2]];
      default:return bin(comment,30,e,$$int(0,1));}
    };

var
 inc$1=
  function(comment,e)
   {var match=e[1];
    
    switch(match)
     {case 13:return /* record */[0,/* ENum */[13,match[1]+1],e[2]];
      default:return bin(comment,30,e,$$int(0,1));}
    };

var
 dec=
  function(comment,e)
   {var match=e[1];
    
    switch(match)
     {case 13:return /* record */[0,/* ENum */[13,match[1]-1],e[2]];
      default:return bin(comment,31,e,$$int(0,1));}
    };

var
 prim$1=
  function(comment,v){return access(comment,js_var(0,prim),str(0,v));};

var
 global=
  function(comment,v)
   {return access(0,prim$1(comment,"caml_global_data"),str(0,v));};

var
 Exp=
  [0,
   mk,
   access,
   $$var,
   str,
   efun,
   econd,
   $$int,
   $$float,
   eqeq,
   eq,
   eqeqeq,
   $$typeof,
   bin,
   un,
   call,
   arr,
   seq,
   obj,
   true_,
   false_,
   unknown_lambda,
   unknown_primitive,
   unit,
   js_var,
   $$undefined,
   math,
   inc$1,
   dec,
   prim$1,
   global];

var unit$1=/* record */[0,/* Return */[10,/* Some */[0,Exp[8](0,0)]],0,0];

var
 mk$1=
  function(comment,$staropt$star,statement_desc)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,statement_desc,loc,comment];
    };

var
 comment=
  function($staropt$star,str$1)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* Comment */[16,str$1],loc,0];
    };

var
 empty=
  function(comment$1,$staropt$star,param)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,0,loc,comment$1];
    };

var
 $$throw=
  function(comment$1,$staropt$star,v)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* Throw */[13,v],loc,comment$1];
    };

var
 if_=
  function(comment$1,$staropt$star,else_,e,then_)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* If */[3,e,then_,else_],loc,comment$1];
    };

var
 block=
  function(comment$1,$staropt$star,block$1)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* Block */[0,block$1],loc,comment$1];
    };

var
 exp=
  function(comment$1,$staropt$star,e)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* Exp */[2,e],loc,comment$1];
    };

var
 $$switch=
  function(comment$1,$staropt$star,$staropt$star$1,$$default,e,clauses)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    if($staropt$star$1){var others=$staropt$star$1[1];}else{var others=0;}
    
    return /* record */[0,
            /* Switch */[12,e,clauses,$$default,others],
            loc,
            comment$1];
    };

var
 $$return=
  function(comment$1,$staropt$star,e)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* Return */[10,e],loc,comment$1];
    };

var
 variable=
  function(comment$1,$staropt$star,loc_exp,v)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,
            /* Variable */[1,/* :: */[0,/* tuple */[0,v,loc_exp],0]],
            loc,
            comment$1];
    };

var
 assign=
  function(comment$1,$staropt$star,id,e)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,
            /* Exp */[2,Exp[13](0,0,Exp[3](0,id),e)],
            loc,
            comment$1];
    };

var
 assign_unit=
  function(comment$1,$staropt$star,id)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,
            /* Exp */[2,Exp[13](0,0,Exp[3](0,id),Exp[8](0,0))],
            loc,
            comment$1];
    };

var
 declare_unit=
  function(comment$1,$staropt$star,id)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,
            /* Variable */[1,
             /* :: */[0,
              /* tuple */[0,id,/* Some */[0,/* tuple */[0,Exp[8](0,0),0]]],
              0]],
            loc,
            comment$1];
    };

var
 while_=
  function(comment$1,$staropt$star,e,st)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* While */[5,e,st],loc,comment$1];
    };

var
 for_=
  function(comment$1,$staropt$star,pred,step,init,block$1)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* For */[6,init,pred,step,block$1],loc,comment$1];
    };

var
 try_=
  function(comment$1,$staropt$star,with_,$$finally,body)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,/* Try */[14,body,with_,$$finally],loc,comment$1];
    };

var
 unknown_lambda$1=
  function($staropt$star,loc,lam)
   {if($staropt$star)
     {var comment$1=$staropt$star[1];}
    else
     {var comment$1="unknown";}
    
    var eta=Exp[4](/* Some */[0,comment$1],Lambda_util[1](lam));
    
    return exp(0,0,eta);
    };

var
 return_unit=
  function(comment$1,$staropt$star,param)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=0;}
    
    return /* record */[0,
            /* Return */[10,/* Some */[0,Exp[8](0,0)]],
            loc,
            comment$1];
    };

var
 Stmt=
  [0,
   unit$1,
   mk$1,
   comment,
   empty,
   $$throw,
   if_,
   block,
   exp,
   $$switch,
   $$return,
   variable,
   assign,
   assign_unit,
   declare_unit,
   while_,
   for_,
   try_,
   unknown_lambda$1,
   return_unit];

var
 J_helper=
  [0,
   prim,
   [0,
    Exp[1],
    Exp[2],
    Exp[3],
    Exp[4],
    Exp[5],
    Exp[6],
    Exp[7],
    Exp[8],
    Exp[9],
    Exp[10],
    Exp[11],
    Exp[12],
    Exp[13],
    Exp[14],
    Exp[15],
    Exp[16],
    Exp[17],
    Exp[18],
    Exp[19],
    Exp[20],
    Exp[21],
    Exp[22],
    Exp[23],
    Exp[24],
    Exp[25],
    Exp[26],
    Exp[29],
    Exp[30],
    Exp[27],
    Exp[28]],
   [0,
    Stmt[1],
    Stmt[2],
    Stmt[4],
    Stmt[3],
    Stmt[5],
    Stmt[6],
    Stmt[7],
    Stmt[9],
    Stmt[11],
    Stmt[12],
    Stmt[13],
    Stmt[14],
    Stmt[15],
    Stmt[16],
    Stmt[17],
    Stmt[8],
    Stmt[10],
    Stmt[18],
    Stmt[19]]];

var E=J_helper[2];

var quiet=[0,0];

var
 warn=
  function(fmt)
   {return Format["ksprintf"]
            (function(s)
              {if(!quiet[1])
                {return Format["eprintf"]([0,[2,0,[10,0]],"%s%!"],s);}
               else
                {return 0;}
               },
             fmt);
    };

var
 read_file=
  function(f)
   {var ic=Pervasives["open_in_bin"](f);
    
    var n=Pervasives["in_channel_length"](ic);
    
    var s="unknown primitive:caml_create_string";
    
    Pervasives["really_input"](ic,s,0,n);
    Pervasives["close_in"](ic);
    return Bytes["unsafe_to_string"](s);
    };

var
 op_prec=
  function(op)
   {var exit;
    
    if(op>=12)
     {switch((-12+op)[0])
       {case 0:return [0,3,3,3];
        case 1:return [0,4,4,4];
        case 2:return [0,5,5,5];
        case 3:return [0,6,6,6];
        case 4:return [0,7,7,7];
        case 5:exit=1298;
        case 6:exit=1298;
        case 7:exit=1298;
        case 8:exit=1298;
        case 9:exit=1299;
        case 10:exit=1299;
        case 11:exit=1299;
        case 12:exit=1299;
        case 13:exit=1299;
        case 14:exit=1299;
        case 15:exit=1300;
        case 16:exit=1300;
        case 17:exit=1300;
        case 18:exit=1301;
        case 19:exit=1301;
        case 20:exit=1302;
        case 21:exit=1302;
        case 22:exit=1302;
        }
      }
    else
     {return [0,1,13,1];}
    
    switch(exit)
     {case 1298:return [0,8,8,9];
      case 1299:return [0,9,9,10];
      case 1300:return [0,10,10,11];
      case 1301:return [0,11,11,12];
      case 1302:return [0,12,12,13];
      }
    };

var
 op_str=
  function(op)
   {var exit;
    
    switch(op[0])
     {case 0:return "=";
      case 1:return "*=";
      case 2:return "/=";
      case 3:return "%=";
      case 4:return "+=";
      case 5:return "-=";
      case 6:return "<<=";
      case 7:return ">>=";
      case 8:return ">>>=";
      case 9:return "&=";
      case 10:return "^=";
      case 11:return "|=";
      case 12:return "||";
      case 13:return "&&";
      case 14:return "|";
      case 15:return "^";
      case 16:return "&";
      case 17:return "==";
      case 18:return "!=";
      case 19:return "===";
      case 20:return "!==";
      case 21:return "<";
      case 22:return "<=";
      case 23:return ">";
      case 24:return ">=";
      case 25:exit=1293;
      case 26:exit=1293;
      case 27:return "<<";
      case 28:return ">>>";
      case 29:return ">>";
      case 30:return "+";
      case 31:return "-";
      case 32:return "*";
      case 33:return "/";
      case 34:return "%";
      }
    
    switch(exit)
     {case 1293:throw [0,Assert_failure,[0,"bytecomp/px.ml",3100,55]];}
    };

var
 unop_str=
  function(op)
   {var exit;
    
    switch(op[0])
     {case 0:return "!";
      case 1:return "-";
      case 2:return "+";
      case 3:exit=1289;
      case 4:exit=1289;
      case 5:exit=1289;
      case 6:return "~";
      case 7:exit=1289;
      case 8:exit=1289;
      case 9:exit=1289;
      case 10:exit=1289;
      }
    
    switch(exit)
     {case 1289:throw [0,Assert_failure,[0,"bytecomp/px.ml",3109,65]];}
    };

var
 best_string_quote=
  function(s)
   {var simple=0;
    
    var $$double=0;
    
    for(var i=0;i<=s["length"]-1;i++)
     {var match=s[i];
      
      if(match!=34)
       {if(match!=39){}else{simple=1+simple;}}
      else
       {$$double=1+$$double;}
      }
    
    if(simple<$$double){return 39;}else{return 34;}
    };

var
 array_str1=
  $$Array["init"](256,function(i){return $$String["make"](1,Char["chr"](i));});

var
 array_conv=
  $$Array["init"]
   (16,function(i){return $$String["make"](1,"0123456789abcdef"[i]);});

var $$let=$$String;

var SMap=Map["Make"]([0,$$let[25]]);

var compare$1=function(x,y){return "unknown primitive:caml_int_compare";};

var IMap=Map["Make"]([0,compare$1]);

var empty$1=/* record */[0,SMap[1]];

var
 reserved_words=
  [0,
   "break",
   [0,
    "case",
    [0,
     "catch",
     [0,
      "continue",
      [0,
       "debugger",
       [0,
        "default",
        [0,
         "delete",
         [0,
          "do",
          [0,
           "else",
           [0,
            "finally",
            [0,
             "for",
             [0,
              "function",
              [0,
               "if",
               [0,
                "in",
                [0,
                 "instanceof",
                 [0,
                  "new",
                  [0,
                   "return",
                   [0,
                    "switch",
                    [0,
                     "this",
                     [0,
                      "throw",
                      [0,
                       "try",
                       [0,
                        "typeof",
                        [0,
                         "var",
                         [0,
                          "void",
                          [0,
                           "while",
                           [0,
                            "with",
                            [0,
                             "class",
                             [0,
                              "enum",
                              [0,
                               "export",
                               [0,
                                "extends",
                                [0,
                                 "import",
                                 [0,
                                  "super",
                                  [0,
                                   "implements",
                                   [0,
                                    "interface",
                                    [0,
                                     "let",
                                     [0,
                                      "package",
                                      [0,
                                       "private",
                                       [0,
                                        "protected",
                                        [0,
                                         "public",
                                         [0,
                                          "static",
                                          [0,
                                           "yield",
                                           [0,
                                            "null",
                                            [0,
                                             "true",
                                             [0,
                                              "false",
                                              [0,
                                               "NaN",
                                               [0,
                                                "undefined",
                                                [0,
                                                 "this",
                                                 [0,
                                                  "abstract",
                                                  [0,
                                                   "boolean",
                                                   [0,
                                                    "byte",
                                                    [0,
                                                     "char",
                                                     [0,
                                                      "const",
                                                      [0,
                                                       "double",
                                                       [0,
                                                        "final",
                                                        [0,
                                                         "float",
                                                         [0,
                                                          "goto",
                                                          [0,
                                                           "int",
                                                           [0,
                                                            "long",
                                                            [0,
                                                             "native",
                                                             [0,
                                                              "short",
                                                              [0,
                                                               "synchronized",
                                                               [0,
                                                                "throws",
                                                                [0,
                                                                 "transient",
                                                                 [0,
                                                                  "volatile",
                                                                  [0,
                                                                   "await",
                                                                   [0,
                                                                    "event",
                                                                    [0,
                                                                     "location",
                                                                     [0,
                                                                      "window",
                                                                      [0,
                                                                       "document",
                                                                       [0,
                                                                        "eval",
                                                                        [0,
                                                                         "navigator",
                                                                         [0,
                                                                          "self",
                                                                          [0,
                                                                           "Array",
                                                                           [0,
                                                                            "Date",
                                                                            [0,
                                                                             "Math",
                                                                             [0,
                                                                              "JSON",
                                                                              [0,
                                                                               "Object",
                                                                               [0,
                                                                                "RegExp",
                                                                                [0,
                                                                                 "String",
                                                                                 [0,
                                                                                  "Boolean",
                                                                                  [0,
                                                                                   "Number",
                                                                                   [0,
                                                                                    "Infinity",
                                                                                    [0,
                                                                                     "isFinite",
                                                                                     [0,
                                                                                      "ActiveXObject",
                                                                                      [0,
                                                                                       "XMLHttpRequest",
                                                                                       [0,
                                                                                        "XDomainRequest",
                                                                                        [0,
                                                                                         "DOMException",
                                                                                         [0,
                                                                                          "Error",
                                                                                          [0,
                                                                                           "SyntaxError",
                                                                                           [0,
                                                                                            "arguments",
                                                                                            [0,
                                                                                             "decodeURI",
                                                                                             [0,
                                                                                              "decodeURIComponent",
                                                                                              [0,
                                                                                               "encodeURI",
                                                                                               [0,
                                                                                                "encodeURIComponent",
                                                                                                [0,
                                                                                                 "escape",
                                                                                                 [0,
                                                                                                  "unescape",
                                                                                                  [0,
                                                                                                   "isNaN",
                                                                                                   [0,
                                                                                                    "parseFloat",
                                                                                                    [0,"parseInt",[0,"require",[0,"exports",[0,"module",0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

var $$let$1=$$String;

var StringSet=Set["Make"]([0,$$let$1[25]]);

var
 reserved_map=
  List["fold_left"]
   (function(acc,x){return StringSet[4](x,acc);},StringSet[1],reserved_words);

var
 convert=
  function(name)
   {var Not_normal_letter="unknown primitive:caml_set_oo_id";
    
    var E$1=[0,Not_normal_letter];
    
    var len=name["length"];
    
    if(StringSet[3](name,reserved_map))
     {return Pervasives["^"]("$$",name);}
    else
     {try
       {for(var i=0;i<=len-1;i++)
         {var c=name[i];
          
          if(!(c>=97&&c<=122||c>=65&&c<=90||(c=95)||(c=36)))
           {throw [0,E$1[1],i];}
          else
           {}
          }
        
        return name;
        }
      catch(exn)
       {if(exn[1]=E$1[1])
         {var i$1=exn[2];
          
          var buffer=Buffer["create"](len);
          
          for(var j=i$1;j<=len-1;j++)
           {var c$1=name[j];
            
            var exit;
            
            if(c$1>=97)
             {if(c$1>=123){exit=1262;}else{exit=1261;}}
            else
             {if(c$1>=36)
               {switch((-36+c$1)[0])
                 {case 0:exit=1261;
                  case 1:exit=1262;
                  case 2:exit=1262;
                  case 3:Buffer["add_string"](buffer,"$prime");
                  case 4:exit=1262;
                  case 5:exit=1262;
                  case 6:Buffer["add_string"](buffer,"$star");
                  case 7:Buffer["add_string"](buffer,"$plus");
                  case 8:exit=1262;
                  case 9:Buffer["add_string"](buffer,"$neg");
                  case 10:Buffer["add_string"](buffer,"$dot");
                  case 11:Buffer["add_string"](buffer,"$slash");
                  case 12:exit=1261;
                  case 13:exit=1261;
                  case 14:exit=1261;
                  case 15:exit=1261;
                  case 16:exit=1261;
                  case 17:exit=1261;
                  case 18:exit=1261;
                  case 19:exit=1261;
                  case 20:exit=1261;
                  case 21:exit=1261;
                  case 22:exit=1262;
                  case 23:exit=1262;
                  case 24:Buffer["add_string"](buffer,"$less");
                  case 25:Buffer["add_string"](buffer,"$eq");
                  case 26:Buffer["add_string"](buffer,"$great");
                  case 27:exit=1262;
                  case 28:Buffer["add_string"](buffer,"$at");
                  case 29:exit=1261;
                  case 30:exit=1261;
                  case 31:exit=1261;
                  case 32:exit=1261;
                  case 33:exit=1261;
                  case 34:exit=1261;
                  case 35:exit=1261;
                  case 36:exit=1261;
                  case 37:exit=1261;
                  case 38:exit=1261;
                  case 39:exit=1261;
                  case 40:exit=1261;
                  case 41:exit=1261;
                  case 42:exit=1261;
                  case 43:exit=1261;
                  case 44:exit=1261;
                  case 45:exit=1261;
                  case 46:exit=1261;
                  case 47:exit=1261;
                  case 48:exit=1261;
                  case 49:exit=1261;
                  case 50:exit=1261;
                  case 51:exit=1261;
                  case 52:exit=1261;
                  case 53:exit=1261;
                  case 54:exit=1261;
                  case 55:exit=1262;
                  case 56:exit=1262;
                  case 57:exit=1262;
                  case 58:Buffer["add_string"](buffer,"$caret");
                  case 59:exit=1261;
                  case 60:exit=1262;
                  }
                }
              else
               {exit=1262;}
              }
            
            switch(exit)
             {case 1262:Buffer["add_string"](buffer,"$unknown");
              case 1261:Buffer["add_char"](buffer,c$1)
              }
            }
          
          return Pervasives["^"]
                  ($$String["sub"](name,0,i$1),Buffer["contents"](buffer));
          }
        else
         {throw exn;}
        }
      }
    };

var $$let$2=$$String;

var SSet=Set["Make"]([0,$$let$2[25]]);

var gen_symbs=SSet[26]([0,"param",[0,"prim",0]]);

var
 string_of_id=
  function($staropt$star,id,cxt)
   {var mapping=cxt[1];
    
    if($staropt$star){var replace=$staropt$star[1];}else{var replace=0;}
    
    var exit;
    
    try
     {var imap=SMap[22](id[2],mapping);exit=-5;}
    catch(exn)
     {if(exn=Not_found)
       {return /* tuple */[0,
                0,
                /* record */[0,
                 SMap[4](id[2],IMap[4](id[1],0,IMap[1]),mapping)]];
        }
      else
       {throw exn;}
      }
    
    switch(exit)
     {case -5:
       var exit$1;
       
       try
        {var i=IMap[22](id[1],imap);exit$1=-4;}
       catch(exn$1)
        {if(exn$1=Not_found)
          {if(replace&&!SSet[3](id[2],gen_symbs))
            {return /* tuple */[0,
                     0,
                     /* record */[0,
                      SMap[4](id[2],IMap[4](id[1],0,IMap[1]),mapping)]];
             }
           else
            {var v=IMap[16](imap);
             
             return /* tuple */[0,
                     v,
                     /* record */[0,SMap[4](id[2],IMap[4](id[1],v,imap),mapping)]];
             }
           }
         else
          {throw exn$1;}
         }
       
       switch(exit$1){case -4:return /* tuple */[0,i,cxt];}
       
      }
    };

var
 ident=
  function(replace,cxt,f,id)
   {if(Jident[1](id))
     {Pp[1](f,id[2]);return cxt;}
    else
     {if(Ident["global"](id))
       {Pp[1](f,convert(id[2]));return cxt;}
      else
       {var match=string_of_id(replace,id,cxt);
        
        var i=match[1];
        
        var
         match$1=
          Pp[1]
           (f,
            (i=0)
             ?convert(id[2])
             :Printf["sprintf"]
               ([0,[2,0,[12,36,[4,0,0,0,0]]],"%s$%d"],convert(id[2]),i));
        
        return match[2];
        }
      }
    };

var
 formal_parameter_list=
  function(cxt,f,l)
   {if(l)
     {var r=l[2];
      
      var i=l[1];
      
      if(r)
       {var cxt$1=ident([0,1],cxt,f,i);
        
        Pp[1](f,",");
        Pp[3](f);
        return formal_parameter_list(cxt$1,f,r);
        }
      else
       {return ident([0,1],cxt,f,i);}
      }
    else
     {return cxt;}
    };

var
 opt_identifier=
  function(cxt,f,i)
   {if(i){Pp[6](0,f);return ident(0,cxt,f,i[1]);}else{return cxt;}};

var
 ends_with_if_without_else=
  function(param)
   {var st=param[1];
    
    var exit;
    
    if(typeof st=="number")
     {switch(st){}}
    else
     {switch(st[0])
       {case 3:
         var match=st[3];
         
         if(match){var st$1=match[1];exit=1227;}else{return 1;}
         
        case 5:var st$1=st[2];exit=1227;
        case 6:var st$1=st[4];exit=1227;
        case 7:var st$1=st[3];exit=1227;
        default:exit=1228;}}
    
    switch(exit)
     {case 1228:return 0;case 1227:return ends_with_if_without_else(st$1);}
    };

var
 need_paren=
  function(l,e)
   {var match=e[1];
    
    var exit;
    
    switch(match)
     {case 0:return l<=0&&need_paren(0,match[1]);
      case 1:return l<=2&&need_paren(3,match[1]);
      case 2:
       var match$1=op_prec(match[1]);
       
       return l<=match$1[1]&&need_paren(match$1[2],match[2]);
       
      case 4:exit=1223;
      case 5:exit=1223;
      case 6:exit=1223;
      case 9:exit=1222;
      case 14:exit=1222;
      default:return 0;}
    
    switch(exit)
     {case 1223:return l<=15&&need_paren(15,match[1]);case 1222:return 1;}
    };

var
 pp_string=
  function(f,$staropt$star,$staropt$star$1,s)
   {if($staropt$star){var quote=$staropt$star[1];}else{var quote=34;}
    
    if($staropt$star$1){var utf=$staropt$star$1[1];}else{var utf=0;}
    
    var quote_s=$$String["make"](1,quote);
    
    Pp[1](f,quote_s);
    var l=s["length"];
    
    for(var i=0;i<=l-1;i++)
     {var c=s[i];
      
      var exit;
      
      if(c>=32)
       {if(c>=127)
         {if(c>=128)
           {if(!utf)
             {var c$1=c;
              
              Pp[1](f,"\x"),
              Pp[1](f,array_conv[c$1>>>4]),
              Pp[1](f,array_conv[c$1&15])}
            else
             {exit=1203;}
            }
          else
           {exit=1204;}
          }
        else
         {if(c!=92){exit=1203;}else{if(!utf){Pp[1](f,"\\")}else{exit=1203;}}}
        }
      else
       {if(c>=14)
         {exit=1204;}
        else
         {switch(c[0])
           {case 0:
             if((i=l-1)||s[i+1]<48||s[i+1]>57){Pp[1](f,"\0")}else{exit=1204;}
            case 1:exit=1204;
            case 2:exit=1204;
            case 3:exit=1204;
            case 4:exit=1204;
            case 5:exit=1204;
            case 6:exit=1204;
            case 7:exit=1204;
            case 8:Pp[1](f,"\b");
            case 9:Pp[1](f,"\t");
            case 10:Pp[1](f,"\n");
            case 11:exit=1204;
            case 12:Pp[1](f,"\f");
            case 13:Pp[1](f,"\r")
            }
          }
        }
      
      switch(exit)
       {case 1204:
         var c$2=c;
         
         Pp[1](f,"\x"),
         Pp[1](f,array_conv[c$2>>>4]),
         Pp[1](f,array_conv[c$2&15]);
        case 1203:
         if(c=quote)
          {Pp[1](f,"\"),Pp[1](f,array_str1[c])}
         else
          {Pp[1](f,array_str1[c])}
         
        }
      }
    
    return Pp[1](f,quote_s);
    };

var
 Make=
  function(D)
   {var temp_mappings=[0,0];
    
    var idx=[0,0];
    
    var files=Hashtbl["create"](0,17);
    
    var match=D[1];
    
    if(match)
     {var sm=match[1];
      
      List["iter"]
       (function(f){Hashtbl["add"](files,f,idx[1]);return idx[0]++;},sm[4]);
      var
       config=
        /* Source_map */[0,
         /* record */[0,
          function(pos,m)
           {return temp_mappings[1]=
                   /* :: */[0,/* tuple */[0,pos,m],temp_mappings[1]],
                   0;
            },
          function(file)
           {try
             {return Hashtbl["find"](files,file);}
            catch(exn)
             {if(exn=Not_found)
               {var pos=idx[1];
                
                Hashtbl["add"](files,file,pos);
                idx[0]++;
                sm[4]=Pervasives["@"](sm[4],/* :: */[0,file,0]),0;
                return pos;
                }
              else
               {throw exn;}
              }
            }]];
      }
    else
     {var config=0;}
    
    var
     output_debug_info=
      function(config$1)
       {if(config$1)
         {var match$1=config$1[1];
          
          var get_file_index=match$1[2];
          
          var push_mapping=match$1[1];
          
          return function(f,loc)
           {var exit;
            
            if("unknown primitive:isint")
             {if(loc!=0){exit=1181;}else{return 0;}}
            else
             {var match$2=loc[1];
              
              var match$3=match$2[1];
              
              if(match$3)
               {return push_mapping
                        (Pp[12](f),
                         /* record */[0,
                          -1,
                          -1,
                          get_file_index(match$3[1]),
                          match$2[4],
                          match$2[3],
                          0]);
                }
              else
               {exit=1181;}
              }
            
            switch(exit)
             {case 1181:return push_mapping(Pp[12](f),[0,-1,-1,-1,-1,-1,0]);}
            };
          }
        else
         {return function(f,loc){return 0;};}
        };
    
    var
     expression=
      function(cxt,l,f,param)
       {var comment$1=param[2];
        
        var expression_desc=param[1];
        
        if(comment$1)
         {Pp[1](f,"/* ");Pp[1](f,comment$1[1]);var match$1=Pp[1](f," */");}
        else
         {var match$1=0;}
        
        switch(expression_desc)
         {case 0:
           if(l>0){Pp[7](f,1),Pp[1](f,"(")}else{}
           
           var cxt$1=expression(cxt,0,f,expression_desc[1]);
           
           var match$2=Pp[1](f,",");
           
           var match$3=Pp[3](f);
           
           var cxt$2=expression(cxt$1,0,f,expression_desc[2]);
           
           if(l>0){Pp[1](f,")"),Pp[8](f)}else{}
           
           return cxt$2;
           
          case 1:
           if(l>2){Pp[7](f,1),Pp[1](f,"(")}else{}
           
           Pp[7](f,1);
           Pp[7](f,0);
           var cxt$3=expression(cxt,3,f,expression_desc[1]);
           
           Pp[8](f);
           Pp[3](f);
           Pp[7](f,1);
           Pp[1](f,"?");
           var cxt$4=expression(cxt$3,1,f,expression_desc[2]);
           
           Pp[8](f);
           Pp[3](f);
           Pp[7](f,1);
           Pp[1](f,":");
           var cxt$5=expression(cxt$4,1,f,expression_desc[3]);
           
           Pp[8](f);
           Pp[8](f);
           if(l>2){Pp[1](f,")"),Pp[8](f)}else{}
           
           return cxt$5;
           
          case 2:
           var op=expression_desc[1];
           
           if(op!=25)
            {if(op!=26)
              {var match$4=op_prec(op);
               
               var out=match$4[1];
               
               if(l>out){Pp[7](f,1),Pp[1](f,"(")}else{}
               
               var cxt$6=expression(cxt,match$4[2],f,expression_desc[2]);
               
               Pp[1](f,op_str(op));
               Pp[3](f);
               var cxt$7=expression(cxt$6,match$4[3],f,expression_desc[3]);
               
               if(l>out){Pp[1](f,")"),Pp[8](f)}else{}
               
               return cxt$7;
               }
             else
              {var match$5=op_prec(25);
               
               var out$1=match$5[1];
               
               if(l>out$1){Pp[7](f,1),Pp[1](f,"(")}else{}
               
               Pp[7](f,0);
               var cxt$8=expression(cxt,match$5[2],f,expression_desc[2]);
               
               Pp[6](0,f);
               Pp[1](f,"in");
               Pp[6](0,f);
               var cxt$9=expression(cxt$8,match$5[3],f,expression_desc[3]);
               
               Pp[8](f);
               if(l>out$1){Pp[1](f,")"),Pp[8](f)}else{}
               
               return cxt$9;
               }
             }
           else
            {var match$6=op_prec(25);
             
             var out$2=match$6[1];
             
             if(l>out$2){Pp[7](f,1),Pp[1](f,"(")}else{}
             
             Pp[7](f,0);
             var cxt$10=expression(cxt,match$6[2],f,expression_desc[2]);
             
             Pp[6](0,f);
             Pp[1](f,"instanceof");
             Pp[6](0,f);
             var cxt$11=expression(cxt$10,match$6[3],f,expression_desc[3]);
             
             Pp[8](f);
             if(l>out$2){Pp[1](f,")"),Pp[8](f)}else{}
             
             return cxt$11;
             }
           
          case 3:
           var op$1=expression_desc[1];
           
           var exit;
           
           switch(op$1[0])
            {case 0:exit=1016;
             case 1:exit=1016;
             case 2:exit=1016;
             case 3:
              if(l>13){Pp[7](f,1),Pp[1](f,"(")}else{}
              
              Pp[7](f,0);
              Pp[1](f,"typeof");
              Pp[6](0,f);
              var cxt$12=expression(cxt,13,f,expression_desc[2]);
              
              Pp[8](f);
              if(l>13){Pp[1](f,")"),Pp[8](f)}else{}
              
              return cxt$12;
              
             case 4:
              if(l>13){Pp[7](f,1),Pp[1](f,"(")}else{}
              
              Pp[7](f,0);
              Pp[1](f,"void");
              Pp[6](0,f);
              var cxt$13=expression(cxt,13,f,expression_desc[2]);
              
              Pp[8](f);
              if(l>13){Pp[1](f,")"),Pp[8](f)}else{}
              
              return cxt$13;
              
             case 5:
              if(l>13){Pp[7](f,1),Pp[1](f,"(")}else{}
              
              Pp[7](f,0);
              Pp[1](f,"delete");
              Pp[6](0,f);
              var cxt$14=expression(cxt,13,f,expression_desc[2]);
              
              Pp[8](f);
              if(l>13){Pp[1](f,")"),Pp[8](f)}else{}
              
              return cxt$14;
              
             case 6:exit=1016;
             case 7:exit=1015;
             case 8:exit=1015;
             case 9:exit=1015;
             case 10:exit=1015;
             }
           
           switch(exit)
            {case 1016:
              if(l>13){Pp[7](f,1),Pp[1](f,"(")}else{}
              
              Pp[1](f,unop_str(op$1));
              var cxt$15=expression(cxt,13,f,expression_desc[2]);
              
              if(l>13){Pp[1](f,")"),Pp[8](f)}else{}
              
              return cxt$15;
              
             case 1015:
              var e=expression_desc[2];
              
              if(l>13){Pp[7](f,1),Pp[1](f,"(")}else{}
              
              if((op$1=7)||(op$1=8))
               {var cxt$16=expression(cxt,13,f,e);}
              else
               {var cxt$16=cxt;}
              
              if((op$1=7)||(op$1=9)){Pp[1](f,"++")}else{Pp[1](f,"--")}
              
              if((op$1=9)||(op$1=10))
               {var cxt$17=expression(cxt$16,13,f,e);}
              else
               {var cxt$17=cxt$16;}
              
              if(l>13){Pp[1](f,")"),Pp[8](f)}else{}
              
              return cxt$17;
              
             }
           
          case 4:
           if(l>15){Pp[7](f,1),Pp[1](f,"(")}else{}
           
           output_debug_info(config,f,expression_desc[3]);
           Pp[7](f,1);
           var cxt$18=expression(cxt,15,f,expression_desc[1]);
           
           Pp[3](f);
           Pp[7](f,1);
           Pp[1](f,"(");
           var cxt$19=$$arguments(cxt$18,f,expression_desc[2]);
           
           Pp[1](f,")");
           Pp[8](f);
           Pp[8](f);
           if(l>15){Pp[1](f,")"),Pp[8](f)}else{}
           
           return cxt$19;
           
          case 5:
           if(l>15){Pp[7](f,1),Pp[1](f,"(")}else{}
           
           Pp[7](f,1);
           var cxt$20=expression(cxt,15,f,expression_desc[1]);
           
           Pp[3](f);
           Pp[7](f,1);
           Pp[1](f,"[");
           var cxt$21=expression(cxt$20,0,f,expression_desc[2]);
           
           Pp[1](f,"]");
           Pp[8](f);
           Pp[8](f);
           if(l>15){Pp[1](f,")"),Pp[8](f)}else{}
           
           return cxt$21;
           
          case 6:
           if(l>15){Pp[7](f,1),Pp[1](f,"(")}else{}
           
           var cxt$22=expression(cxt,15,f,expression_desc[1]);
           
           Pp[1](f,".");
           Pp[1](f,expression_desc[2]);
           if(l>15){Pp[1](f,")"),Pp[8](f)}else{}
           
           return cxt$22;
           
          case 7:
           var match$7=expression_desc[2];
           
           var e$1=expression_desc[1];
           
           if(match$7)
            {if(l>15){Pp[7](f,1),Pp[1](f,"(")}else{}
             
             Pp[7](f,1);
             Pp[1](f,"new");
             Pp[6](0,f);
             var cxt$23=expression(cxt,16,f,e$1);
             
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"(");
             var cxt$24=$$arguments(cxt$23,f,match$7[1]);
             
             Pp[1](f,")");
             Pp[8](f);
             Pp[8](f);
             if(l>15){Pp[1](f,")"),Pp[8](f)}else{}
             
             return cxt$24;
             }
           else
            {if(l>15){Pp[7](f,1),Pp[1](f,"(")}else{}
             
             Pp[7](f,1);
             Pp[1](f,"new");
             Pp[6](0,f);
             var cxt$25=expression(cxt,16,f,e$1);
             
             Pp[3](f);
             Pp[1](f,"()");
             Pp[8](f);
             if(l>15){Pp[1](f,")"),Pp[8](f)}else{}
             
             return cxt$25;
             }
           
          case 8:return ident(0,cxt,f,expression_desc[1]);
          case 9:
           var match$8=Pp[7](f,1);
           
           var match$9=Pp[7](f,0);
           
           var match$10=Pp[7](f,0);
           
           var match$11=Pp[1](f,"function");
           
           var cxt$26=opt_identifier(cxt,f,expression_desc[1]);
           
           var match$12=Pp[8](f);
           
           var match$13=Pp[3](f);
           
           var match$14=Pp[7](f,1);
           
           var match$15=Pp[1](f,"(");
           
           var cxt$prime=formal_parameter_list(cxt$26,f,expression_desc[2]);
           
           var match$16=Pp[1](f,")");
           
           var match$17=Pp[8](f);
           
           var match$18=Pp[8](f);
           
           var match$19=Pp[3](f);
           
           var match$20=Pp[7](f,1);
           
           var match$21=Pp[1](f,"{");
           
           var prim$2=function_body(cxt$prime,f,expression_desc[3]);
           
           var match$22=0;
           
           var match$23=output_debug_info(config,f,expression_desc[4]);
           
           var match$24=Pp[1](f,"}");
           
           var match$25=Pp[8](f);
           
           var match$26=Pp[8](f);
           
           return cxt$26;
           
          case 10:
           var s=expression_desc[1];
           
           var quote=best_string_quote(s);
           
           pp_string
            (f,
             /* Some */[0,quote],
             /* Some */[0,expression_desc[2]=948404561],
             s);
           return cxt;
           
          case 11:
           Pp[7](f,1);
           Pp[1](f,"[");
           var cxt$27=element_list(cxt,f,expression_desc[1]);
           
           Pp[1](f,"]");
           Pp[8](f);
           return cxt$27;
           
          case 12:Pp[1](f,expression_desc[1]?"true":"false");return cxt;
          case 13:
           var s$1=Js_pp_util[1](expression_desc[1]);
           
           if(s$1[0]=45)
            {var need_parent=l>13;}
           else
            {var need_parent=(l=15)&&s$1[0]!=73&&s$1[0]!=78;}
           
           if(need_parent){Pp[1](f,"(")}else{}
           
           Pp[1](f,s$1);
           if(need_parent){Pp[1](f,")")}else{}
           
           return cxt;
           
          case 14:
           Pp[7](f,1);
           Pp[1](f,"{");
           var cxt$28=property_name_and_value_list(cxt,f,expression_desc[1]);
           
           Pp[1](f,"}");
           Pp[8](f);
           return cxt$28;
           
          case 15:
           Pp[1](f,"(");Pp[1](f,expression_desc[1]);Pp[1](f,")");return cxt;
          case 16:
           var opt=expression_desc[2];
           
           Pp[1](f,"/");
           Pp[1](f,expression_desc[1]);
           Pp[1](f,"/");
           if(opt){Pp[1](f,opt[1])}else{}
           
           return cxt;
           
          }
        };
    
    var
     property_name=
      function(cxt,f,n)
       {switch(n)
         {case 0:Pp[1](f,n[1]);return cxt;
          case 1:
           var s=n[1];
           
           var quote=best_string_quote(s);
           
           pp_string(f,/* Some */[0,quote],[0,1],s);
           return cxt;
           
          case 2:return expression(cxt,0,f,E[8](0,n[1]));
          }
        };
    
    var
     property_name_and_value_list=
      function(cxt,f,l)
       {if(l)
         {var r=l[2];
          
          var match$1=l[1];
          
          var e=match$1[2];
          
          var pn=match$1[1];
          
          if(r)
           {Pp[7](f,0);
            var cxt$1=property_name(cxt,f,pn);
            
            Pp[1](f,":");
            Pp[3](f);
            var cxt$2=expression(cxt$1,1,f,e);
            
            Pp[8](f);
            Pp[1](f,",");
            Pp[3](f);
            return property_name_and_value_list(cxt$2,f,r);
            }
          else
           {Pp[7](f,0);
            var cxt$3=property_name(cxt,f,pn);
            
            Pp[1](f,":");
            Pp[3](f);
            var cxt$4=expression(cxt$3,1,f,e);
            
            Pp[8](f);
            return cxt$4;
            }
          }
        else
         {return cxt;}
        };
    
    var
     element_list=
      function(cxt,f,el)
       {if(el)
         {var r=el[2];
          
          var e=el[1];
          
          if(r)
           {if(e)
             {Pp[7](f,0);
              var cxt$1=expression(cxt,1,f,e[1]);
              
              Pp[8](f);
              var cxt$2=cxt$1;
              }
            else
             {var cxt$2=cxt;}
            
            Pp[1](f,",");
            Pp[3](f);
            return element_list(cxt$2,f,r);
            }
          else
           {if(e)
             {Pp[7](f,0);
              var cxt$3=expression(cxt,1,f,e[1]);
              
              Pp[8](f);
              return cxt$3;
              }
            else
             {Pp[1](f,",");return cxt;}
            }
          }
        else
         {return cxt;}
        };
    
    var
     function_body=
      function(cxt,f,b){return source_elements(cxt,f,[0,1],b);};
    
    var
     $$arguments=
      function(cxt,f,l)
       {if(l)
         {var r=l[2];
          
          var e=l[1];
          
          if(r)
           {Pp[7](f,0);
            var cxt$1=expression(cxt,1,f,e);
            
            Pp[8](f);
            Pp[1](f,",");
            Pp[3](f);
            return $$arguments(cxt$1,f,r);
            }
          else
           {Pp[7](f,0);var cxt$2=expression(cxt,1,f,e);Pp[8](f);return cxt$2;}
          }
        else
         {return cxt;}
        };
    
    var
     variable_declaration=
      function(cxt,f,param)
       {var init=param[2];
        
        var i=param[1];
        
        if(init)
         {var match$1=init[1];
          
          Pp[7](f,1);
          output_debug_info(config,f,match$1[2]);
          var cxt$1=ident(0,cxt,f,i);
          
          Pp[1](f,"=");
          Pp[3](f);
          var cxt$2=expression(cxt$1,1,f,match$1[1]);
          
          Pp[8](f);
          return cxt$2;
          }
        else
         {return ident(0,cxt,f,i);}
        };
    
    var
     variable_declaration_list_aux=
      function(cxt,f,l)
       {if(l)
         {var r=l[2];
          
          var d=l[1];
          
          if(r)
           {var cxt$1=variable_declaration(cxt,f,d);
            
            Pp[1](f,",");
            Pp[3](f);
            return variable_declaration_list_aux(cxt$1,f,r);
            }
          else
           {return variable_declaration(cxt,f,d);}
          }
        else
         {throw [0,Assert_failure,[0,"bytecomp/px.ml",4491,63]];}
        };
    
    var
     variable_declaration_list=
      function(cxt,close,f,variables)
       {var exit;
        
        if(variables)
         {var match$1=variables[1];
          
          var match$2=match$1[2];
          
          var i=match$1[1];
          
          if(match$2)
           {if(variables[2])
             {exit=1075;}
            else
             {var match$3=match$2[1];
              
              Pp[7](f,1);
              output_debug_info(config,f,match$3[2]);
              Pp[1](f,"var");
              Pp[6](0,f);
              var cxt$1=ident(0,cxt,f,i);
              
              Pp[1](f,"=");
              Pp[4](f);
              Pp[7](f,0);
              var cxt$2=expression(cxt$1,1,f,match$3[1]);
              
              if(close){Pp[1](f,";")}else{}
              
              Pp[8](f);
              Pp[8](f);
              return cxt$2;
              }
            }
          else
           {if(variables[2])
             {exit=1075;}
            else
             {Pp[7](f,1);
              Pp[1](f,"var");
              Pp[6](0,f);
              var cxt$3=ident(0,cxt,f,i);
              
              if(close){Pp[1](f,";")}else{}
              
              Pp[8](f);
              return cxt$3;
              }
            }
          }
        else
         {return cxt;}
        
        switch(exit)
         {case 1075:
           Pp[7](f,1);
           Pp[1](f,"var");
           Pp[6](0,f);
           var cxt$4=variable_declaration_list_aux(cxt,f,variables);
           
           if(close){Pp[1](f,";")}else{}
           
           Pp[8](f);
           return cxt$4;
           
          }
        };
    
    var
     opt_expression=
      function(cxt,l,f,e)
       {if(e){return expression(cxt,l,f,e[1]);}else{return cxt;}};
    
    var
     statement=
      function($staropt$star,cxt,f,param)
       {var comment$1=param[3];
        
        var s=param[1];
        
        if($staropt$star){var last=$staropt$star[1];}else{var last=0;}
        
        var
         last_semi=
          function(param$1){if(last){return 0;}else{return Pp[1](f,";");}};
        
        output_debug_info(config,f,param[2]);
        if(comment$1)
         {Pp[1](f,"/* ");
          Pp[1](f,comment$1[1]);
          Pp[1](f," */");
          var match$1=Pp[3](f);
          }
        else
         {var match$1=0;}
        
        if(typeof s=="number")
         {switch(s)
           {case 0:return cxt;
            case 1:Pp[1](f,"debugger");last_semi(0);return cxt;
            }}
        else
         {switch(s[0])
           {case 0:return block$1(cxt,f,s[1]);
            case 1:return variable_declaration_list(cxt,!last,f,s[1]);
            case 2:
             var e=s[1];
             
             switch(e[1])
              {case 8:last_semi(0);return cxt;
               default:
                if(need_paren(0,e))
                 {Pp[7](f,1);
                  Pp[1](f,"(");
                  var cxt$1=expression(cxt,0,f,e);
                  
                  Pp[1](f,")");
                  last_semi(0);
                  Pp[8](f);
                  return cxt$1;
                  }
                else
                 {Pp[7](f,0);
                  var cxt$2=expression(cxt,0,f,e);
                  
                  last_semi(0);
                  Pp[8](f);
                  return cxt$2;
                  }
                }
             
            case 3:
             var match$2=s[3];
             
             var s1=s[2];
             
             var e$1=s[1];
             
             if(match$2)
              {var s2=match$2[1];
               
               var exit;
               
               if(ends_with_if_without_else(s1))
                {return statement
                         (/* Some */[0,last],
                          cxt,
                          f,
                          J_helper[3][6]
                           (0,
                            0,
                            /* Some */[0,s2],
                            e$1,
                            J_helper[3][7](0,0,/* :: */[0,s1,0])));
                 }
               else
                {var $js=s2[1];
                 if(typeof $js=="number")
                  {switch($js){}}
                 else
                  {switch($js[0])
                    {case 0:
                      Pp[7](f,0);
                      Pp[7](f,1);
                      Pp[1](f,"if");
                      Pp[3](f);
                      Pp[7](f,1);
                      Pp[1](f,"(");
                      var cxt$3=expression(cxt,0,f,e$1);
                      
                      Pp[1](f,")");
                      Pp[8](f);
                      Pp[8](f);
                      Pp[4](f);
                      Pp[7](f,0);
                      var cxt$4=statement(0,cxt$3,f,s1);
                      
                      Pp[8](f);
                      Pp[3](f);
                      Pp[1](f,"else");
                      Pp[4](f);
                      Pp[7](f,0);
                      var cxt$5=statement(/* Some */[0,last],cxt$4,f,s2);
                      
                      Pp[8](f);
                      Pp[8](f);
                      return cxt$5;
                      
                     default:exit=1147;}}
                 }
               
               switch(exit)
                {case 1147:
                  Pp[7](f,0);
                  Pp[7](f,1);
                  Pp[1](f,"if");
                  Pp[3](f);
                  Pp[7](f,1);
                  Pp[1](f,"(");
                  var cxt$6=expression(cxt,0,f,e$1);
                  
                  Pp[1](f,")");
                  Pp[8](f);
                  Pp[8](f);
                  Pp[4](f);
                  Pp[7](f,0);
                  var cxt$7=statement(0,cxt$6,f,s1);
                  
                  Pp[8](f);
                  Pp[3](f);
                  Pp[1](f,"else");
                  Pp[6]([0,1],f);
                  Pp[7](f,0);
                  var cxt$8=statement(/* Some */[0,last],cxt$7,f,s2);
                  
                  Pp[8](f);
                  Pp[8](f);
                  return cxt$8;
                  
                 }
               }
             else
              {Pp[7](f,1);
               Pp[7](f,0);
               Pp[1](f,"if");
               Pp[3](f);
               Pp[7](f,1);
               Pp[1](f,"(");
               var cxt$9=expression(cxt,0,f,e$1);
               
               Pp[1](f,")");
               Pp[8](f);
               Pp[8](f);
               Pp[3](f);
               Pp[7](f,0);
               var cxt$10=statement(/* Some */[0,last],cxt$9,f,s1);
               
               Pp[8](f);
               Pp[8](f);
               return cxt$10;
               }
             
            case 4:
             var s$1=s[1];
             
             var exit$1;
             
             var $js$1=s$1[1];
             if(typeof $js$1=="number")
              {switch($js$1){}}
             else
              {switch($js$1[0])
                {case 0:
                  Pp[7](f,0);
                  Pp[1](f,"do");
                  Pp[4](f);
                  Pp[7](f,0);
                  var cxt$11=statement(0,cxt,f,s$1);
                  
                  Pp[8](f);
                  Pp[3](f);
                  Pp[1](f,"while");
                  Pp[4](f);
                  Pp[7](f,1);
                  Pp[1](f,"(");
                  var cxt$12=expression(cxt$11,0,f,s[2]);
                  
                  Pp[1](f,")");
                  last_semi(0);
                  Pp[8](f);
                  Pp[8](f);
                  return cxt$12;
                  
                 default:exit$1=1149;}}
             
             switch(exit$1)
              {case 1149:
                Pp[7](f,0);
                Pp[1](f,"do");
                Pp[6]([0,1],f);
                Pp[7](f,0);
                var cxt$13=statement(0,cxt,f,s$1);
                
                Pp[8](f);
                Pp[3](f);
                Pp[1](f,"while");
                Pp[3](f);
                Pp[7](f,1);
                Pp[1](f,"(");
                var cxt$14=expression(cxt$13,0,f,s[2]);
                
                Pp[1](f,")");
                last_semi(0);
                Pp[8](f);
                Pp[8](f);
                return cxt$14;
                
               }
             
            case 5:
             Pp[7](f,1);
             Pp[7](f,0);
             Pp[1](f,"while");
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"(");
             var cxt$15=expression(cxt,0,f,s[1]);
             
             Pp[1](f,")");
             Pp[8](f);
             Pp[8](f);
             Pp[3](f);
             Pp[7](f,0);
             var cxt$16=statement(/* Some */[0,last],cxt$15,f,s[2]);
             
             Pp[8](f);
             Pp[8](f);
             return cxt$16;
             
            case 6:
             var e1=s[1];
             
             Pp[7](f,1);
             Pp[7](f,0);
             Pp[1](f,"for");
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"(");
             switch(e1)
              {case 0:var cxt$17=opt_expression(cxt,0,f,e1[1]);
               case 1:var cxt$17=variable_declaration_list(cxt,0,f,e1[1]);
               }
             
             Pp[1](f,";");
             Pp[3](f);
             var cxt$18=opt_expression(cxt$17,0,f,s[2]);
             
             Pp[1](f,";");
             Pp[3](f);
             var cxt$19=opt_expression(cxt$18,0,f,s[3]);
             
             Pp[1](f,")");
             Pp[8](f);
             Pp[8](f);
             Pp[3](f);
             Pp[7](f,0);
             var cxt$20=statement(/* Some */[0,last],cxt$19,f,s[4]);
             
             Pp[8](f);
             Pp[8](f);
             return cxt$20;
             
            case 7:
             var e1$1=s[1];
             
             Pp[7](f,1);
             Pp[7](f,0);
             Pp[1](f,"for");
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"(");
             switch(e1$1)
              {case 0:var cxt$21=expression(cxt,0,f,e1$1[1]);
               case 1:
                var
                 cxt$21=
                  variable_declaration_list(cxt,0,f,/* :: */[0,e1$1[1],0]);
                
               }
             
             Pp[6](0,f);
             Pp[1](f,"in");
             Pp[3](f);
             Pp[6](0,f);
             var cxt$22=expression(cxt$21,0,f,s[2]);
             
             Pp[1](f,")");
             Pp[8](f);
             Pp[8](f);
             Pp[3](f);
             Pp[7](f,0);
             var cxt$23=statement(/* Some */[0,last],cxt$22,f,s[3]);
             
             Pp[8](f);
             Pp[8](f);
             return cxt$23;
             
            case 8:
             var match$3=s[1];
             
             if(match$3)
              {Pp[1](f,"continue ");
               Pp[1](f,match$3[1]);
               last_semi(0);
               return cxt;
               }
             else
              {Pp[1](f,"continue");last_semi(0);return cxt;}
             
            case 9:
             var match$4=s[1];
             
             if(match$4)
              {Pp[1](f,"break ");Pp[1](f,match$4[1]);last_semi(0);return cxt;}
             else
              {Pp[1](f,"break");last_semi(0);return cxt;}
             
            case 10:
             var e$2=s[1];
             
             if(e$2)
              {var e$3=e$2[1];
               
               var match$5=e$3[1];
               
               switch(match$5)
                {case 9:
                  Pp[7](f,1);
                  Pp[7](f,0);
                  Pp[7](f,0);
                  Pp[1](f,"return function");
                  var cxt$24=opt_identifier(cxt,f,match$5[1]);
                  
                  Pp[8](f);
                  Pp[3](f);
                  Pp[7](f,1);
                  Pp[1](f,"(");
                  var cxt$prime=formal_parameter_list(cxt$24,f,match$5[2]);
                  
                  Pp[1](f,")");
                  Pp[8](f);
                  Pp[8](f);
                  Pp[3](f);
                  Pp[7](f,1);
                  Pp[1](f,"{");
                  var prim$2=function_body(cxt$prime,f,match$5[3]);
                  
                  var match$6=0;
                  
                  output_debug_info(config,f,match$5[4]);
                  Pp[1](f,"}");
                  last_semi(0);
                  Pp[8](f);
                  Pp[8](f);
                  return cxt$24;
                  
                 default:
                  Pp[7](f,7);
                  Pp[1](f,"return");
                  Pp[5](f);
                  Pp[7](f,0);
                  var cxt$25=expression(cxt,0,f,e$3);
                  
                  last_semi(0);
                  Pp[8](f);
                  Pp[8](f);
                  return cxt$25;
                  }
               }
             else
              {Pp[1](f,"return");last_semi(0);return cxt;}
             
            case 11:
             Pp[1](f,s[1]);
             Pp[1](f,":");
             Pp[3](f);
             return statement(/* Some */[0,last],cxt,f,s[2]);
             
            case 12:
             var cc$prime=s[4];
             
             var def=s[3];
             
             Pp[7](f,1);
             Pp[7](f,0);
             Pp[1](f,"switch");
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"(");
             var cxt$26=expression(cxt,0,f,s[1]);
             
             Pp[1](f,")");
             Pp[8](f);
             Pp[8](f);
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"{");
             var
              output_one=
               function(cxt$27,last$1,param$1)
                {Pp[7](f,1);
                 Pp[7](f,1);
                 Pp[1](f,"case");
                 Pp[6](0,f);
                 var cxt$28=expression(cxt$27,0,f,param$1[1]);
                 
                 Pp[1](f,":");
                 Pp[8](f);
                 Pp[3](f);
                 Pp[7](f,0);
                 var
                  cxt$29=
                   statement_list(cxt$28,f,/* Some */[0,last$1],param$1[2]);
                 
                 Pp[8](f);
                 Pp[8](f);
                 Pp[3](f);
                 return cxt$29;
                 };
             
             var
              loop=
               function(cxt$27,last$1,param$1)
                {if(param$1)
                  {var xs=param$1[2];
                   
                   var x=param$1[1];
                   
                   if(xs)
                    {var cxt$28=output_one(cxt$27,0,x);
                     
                     return loop(cxt$28,last$1,xs);
                     }
                   else
                    {return output_one(cxt$27,last$1,x);}
                   }
                 else
                  {return cxt$27;}
                 };
             
             var cxt$27=loop(cxt$26,(def=0)&&(cc$prime=0),s[2]);
             
             if(def)
              {Pp[7](f,1);
               Pp[1](f,"default:");
               Pp[3](f);
               Pp[7](f,0);
               var
                cxt$28=
                 statement_list(cxt$27,f,/* Some */[0,cc$prime=0],def[1]);
               
               Pp[8](f);
               Pp[8](f);
               var cxt$29=cxt$28;
               }
             else
              {var cxt$29=cxt$27;}
             
             var cxt$30=loop(cxt$29,1,cc$prime);
             
             Pp[1](f,"}");
             Pp[8](f);
             Pp[8](f);
             return cxt$30;
             
            case 13:
             Pp[7](f,6);
             Pp[1](f,"throw");
             Pp[5](f);
             Pp[7](f,0);
             var cxt$31=expression(cxt,0,f,s[1]);
             
             last_semi(0);
             Pp[8](f);
             Pp[8](f);
             return cxt$31;
             
            case 14:
             var fin=s[3];
             
             var ctch=s[2];
             
             Pp[7](f,0);
             Pp[1](f,"try");
             Pp[6]([0,1],f);
             var cxt$32=block$1(cxt,f,s[1]);
             
             if(ctch)
              {var match$7=ctch[1];
               
               Pp[3](f);
               Pp[7](f,1);
               Pp[1](f,"catch(");
               var cxt$33=ident(0,cxt$32,f,match$7[1]);
               
               Pp[1](f,")");
               Pp[3](f);
               var cxt$34=block$1(cxt$33,f,match$7[2]);
               
               Pp[8](f);
               var cxt$35=cxt$34;
               }
             else
              {var cxt$35=cxt$32;}
             
             if(fin)
              {Pp[3](f);
               Pp[7](f,1);
               Pp[1](f,"finally");
               Pp[6](0,f);
               var cxt$36=block$1(cxt$35,f,fin[1]);
               
               Pp[8](f);
               var cxt$37=cxt$36;
               }
             else
              {var cxt$37=cxt$35;}
             
             Pp[8](f);
             return cxt$37;
             
            case 15:
             Pp[7](f,1);
             Pp[7](f,0);
             Pp[7](f,0);
             Pp[1](f,"function");
             Pp[6](0,f);
             var cxt$38=ident(0,cxt,f,s[1]);
             
             Pp[8](f);
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"(");
             var cxt$prime$1=formal_parameter_list(cxt$38,f,s[2]);
             
             Pp[1](f,")");
             Pp[8](f);
             Pp[8](f);
             Pp[3](f);
             Pp[7](f,1);
             Pp[1](f,"{");
             var prim$3=function_body(cxt$prime$1,f,s[3]);
             
             var match$8=0;
             
             output_debug_info(config,f,s[4]);
             Pp[1](f,"}");
             Pp[8](f);
             Pp[8](f);
             return cxt$38;
             
            case 16:Pp[1](f,"// ");Pp[1](f,s[1]);return cxt;
            }}
        };
    
    var
     statement_list=
      function(cxt,f,skip_last_semi,b)
       {if(b)
         {var r=b[2];
          
          var s=b[1];
          
          if(r)
           {var cxt$1=statement(0,cxt,f,s);
            
            Pp[3](f);
            return statement_list(cxt$1,f,skip_last_semi,r);
            }
          else
           {return statement(skip_last_semi,cxt,f,s);}
          }
        else
         {return cxt;}
        };
    
    var
     block$1=
      function(cxt,f,b)
       {Pp[7](f,1);
        Pp[1](f,"{");
        var cxt$1=statement_list(cxt,f,[0,1],b);
        
        Pp[1](f,"}");
        Pp[8](f);
        return cxt$1;
        };
    
    var
     source_elements=
      function(cxt,f,skip_last_semi,se)
       {if(se)
         {var r=se[2];
          
          var s=se[1];
          
          if(r)
           {var cxt$1=statement(0,cxt,f,s);
            
            Pp[3](f);
            return source_elements(cxt$1,f,skip_last_semi,r);
            }
          else
           {return statement(skip_last_semi,cxt,f,s);}
          }
        else
         {return cxt;}
        };
    
    var program=function(f,s){return source_elements(f,s);};
    
    return [0,
            temp_mappings,
            config,
            output_debug_info,
            expression,
            property_name,
            property_name_and_value_list,
            element_list,
            function_body,
            $$arguments,
            variable_declaration,
            variable_declaration_list_aux,
            variable_declaration_list,
            opt_expression,
            statement,
            statement_list,
            block$1,
            source_elements,
            program];
    };

var
 a=
  $$Array["init"]
   (256,
    function(i)
     {var c=Char["chr"](i);
      
      return c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||(c=95)||(c=36);
      });

var part_of_ident=function(c){return a[c];};

var
 need_space=
  function(a$1,b)
   {return part_of_ident(a$1)&&part_of_ident(b)||(a$1=47)&&(b=47);};

var
 program=
  function(cxt,f,source_map,p)
   {if(source_map){var smo=/* Some */[0,source_map[1][2]];}else{var smo=0;}
    
    var O=Make([0,smo]);
    
    Pp[15](f,need_space);
    Pp[7](f,0);
    var cxt$1=O[18](cxt,f,0,p);
    
    Pp[8](f);
    Pp[9](f);
    if(source_map)
     {var match=source_map[1];
      
      var sm=match[2];
      
      var out_file=match[1];
      
      var sources=sm[4];
      
      var match$1=sm[5];
      
      if(match$1)
       {if(match$1[1])
         {throw [0,Assert_failure,[0,"bytecomp/px.ml",5468,66]];}
        else
         {var
           sources_content=
            /* Some */[0,
             List["map"]
              (function(file)
                {if("unknown primitive:caml_sys_file_exists")
                  {var content=read_file(file);return /* Some */[0,content];}
                 else
                  {return 0;}
                 },
               sources)];
          }
        }
      else
       {var sources_content=0;}
      
      var
       mappings=
        List["map"]
         (function(param)
           {var m=param[2];
            
            var pos=param[1];
            
            return /* record */[0,pos[1],pos[2],m[3],m[4],m[5],m[6]];
            },
          O[1][1]);
      
      var match$2=sm[3];
      
      if(match$2)
       {var root=match$2[1];
        
        var
         script_file=
          Pervasives["^"]
           (Filename["chop_extension"](sm[2]),".make-sourcemap-links.sh");
        
        var oc=Pervasives["open_out"](script_file);
        
        var printf=function(fmt){return Printf["fprintf"](oc,fmt);};
        
        var
         targets=
          List["map"]
           (function(src){return Filename["basename"](src);},sources);
        
        printf([0,[11,"#! /bin/bash\n",0],"#! /bin/bash\n"]);
        printf([0,[11,"mkdir -p ",[2,0,[12,10,0]]],"mkdir -p %s\n"],root);
        List["iter2"]
         (function(src,tg)
           {return printf
                    ([0,
                      [11,"ln -s ",[2,0,[12,32,[2,0,[12,10,0]]]]],
                      "ln -s %s %s\n"],
                     src,
                     Filename["concat"](root,tg));
            },
          sources,
          targets);
        Pervasives["close_out"](oc);
        warn
         ([0,
           [11,
            "Source-map info: run 'sh ",
            [2,
             0,
             [11,"' to create links to sources in ",[2,0,[11,".\n",[10,0]]]]]],
           "Source-map info: run 'sh %s' to create links to sources in %s.\n%!"],
          script_file,
          root);
        var sources$1=targets;
        }
      else
       {var sources$1=sources;}
      
      var
       sm$1=
        /* record */[0,
         sm[1],
         sm[2],
         sm[3],
         sources$1,
         sources_content,
         sm[6],
         mappings];
      
      if(out_file)
       {var out_file$1=out_file[1];
        
        var oc$1=Pervasives["open_out"](out_file$1);
        
        var pp=Pp[10](oc$1);
        
        Pp[14](pp,0);
        var json=Source_map[1](sm$1);
        
        Json[1](pp,json);
        Pervasives["close_out"](oc$1);
        var urlData=Filename["basename"](out_file$1);
        }
      else
       {var buf=Buffer["create"](1024);
        
        var pp$1=Pp[11](buf);
        
        var json$1=Source_map[1](sm$1);
        
        Json[1](pp$1,json$1);
        var data=Buffer["contents"](buf);
        
        var
         urlData=
          Pervasives["^"]("data:application/json;base64,",B64[4](0,0,data));
        }
      
      Pp[9](f),
      Pp[1]
       (f,
        Printf["sprintf"]
         ([0,[11,"//# sourceMappingURL=",[2,0,0]],"//# sourceMappingURL=%s"],
          urlData))}
    else
     {}
    
    return cxt$1;
    };

var Pp_js=[0,empty$1,program];

var E$1=J_helper[2];

var S=J_helper[3];

var cached_tbl=Hashtbl["create"](0,31);

var reset=function(param){return Hashtbl["clear"](cached_tbl);};

var
 add_built_in_module=
  function(name)
   {return Hashtbl["replace"](cached_tbl,Ident["create_persistent"](name),0);};

var
 get_name=
  function(serializable_sigs,pos)
   {var match=List["nth"](serializable_sigs,pos);
    
    var exit;
    
    switch(match)
     {case 0:exit=105;case 3:exit=105;default:var ident$1=match[1];}
    
    switch(exit){case 105:var ident$1=match[1];}
    
    return ident$1[2];
    };

var
 query=
  function(prim$2,args)
   {var NA="unknown primitive:caml_set_oo_id";
    
    var X=[0,NA];
    
    try
     {var x=prim$2[1];
      
      var exit;
      
      switch(x)
       {case "caml_abs_float":var v=E$1[15](0,0,E$1[26](0,"abs"),args);
        case "caml_acos_float":var v=E$1[15](0,0,E$1[26](0,"acos"),args);
        case "caml_add_float":
         var exit$1;
         
         if(args)
          {var match=args[2];
           
           if(match)
            {if(match[2])
              {exit$1=34;}
             else
              {var v=E$1[13](0,30,args[1],match[1]);}
             }
           else
            {exit$1=34;}
           }
         else
          {exit$1=34;}
         
         switch(exit$1)
          {case 34:throw [0,Assert_failure,[0,"bytecomp/px.ml",439,25]];}
         
        case "caml_array_append":
         var exit$2;
         
         if(args)
          {var match$1=args[2];
           
           if(match$1)
            {if(match$1[2])
              {exit$2=48;}
             else
              {var
                v=
                 E$1[15]
                  (0,
                   0,
                   E$1[2](0,args[1],E$1[4](0,"concat")),
                   /* :: */[0,match$1[1],0]);
               }
             }
           else
            {exit$2=48;}
           }
         else
          {exit$2=48;}
         
         switch(exit$2)
          {case 48:throw [0,Assert_failure,[0,"bytecomp/px.ml",491,25]];}
         
        case "caml_array_concat":throw X[1];
        case "caml_array_get":exit=85;
        case "caml_array_get_addr":exit=85;
        case "caml_array_get_float":exit=85;
        case "caml_array_set":exit=86;
        case "caml_array_set_addr":exit=86;
        case "caml_array_set_float":exit=86;
        case "caml_array_unsafe_get":exit=85;
        case "caml_array_unsafe_get_float":exit=85;
        case "caml_array_unsafe_set":exit=86;
        case "caml_array_unsafe_set_addr":exit=86;
        case "caml_array_unsafe_set_float":exit=86;
        case "caml_asin_float":var v=E$1[15](0,0,E$1[26](0,"asin"),args);
        case "caml_atan2_float":var v=E$1[15](0,0,E$1[26](0,"atan2"),args);
        case "caml_atan_float":var v=E$1[15](0,0,E$1[26](0,"atan"),args);
        case "caml_ceil_float":var v=E$1[15](0,0,E$1[26](0,"ceil"),args);
        case "caml_cos_float":var v=E$1[15](0,0,E$1[26](0,"cos"),args);
        case "caml_cosh_float":var v=E$1[15](0,0,E$1[26](0,"cosh"),args);
        case "caml_div_float":
         var exit$3;
         
         if(args)
          {var match$2=args[2];
           
           if(match$2)
            {if(match$2[2])
              {exit$3=36;}
             else
              {var v=E$1[13](0,33,args[1],match$2[1]);}
             }
           else
            {exit$3=36;}
           }
         else
          {exit$3=36;}
         
         switch(exit$3)
          {case 36:throw [0,Assert_failure,[0,"bytecomp/px.ml",443,25]];}
         
        case "caml_eq_float":
         var exit$4;
         
         if(args)
          {var match$3=args[2];
           
           if(match$3)
            {if(match$3[2])
              {exit$4=40;}
             else
              {var v=E$1[11](0,args[1],match$3[1]);}
             }
           else
            {exit$4=40;}
           }
         else
          {exit$4=40;}
         
         switch(exit$4)
          {case 40:throw [0,Assert_failure,[0,"bytecomp/px.ml",451,25]];}
         
        case "caml_exp_float":var v=E$1[15](0,0,E$1[26](0,"exp"),args);
        case "caml_float_of_int":
         var exit$5;
         
         if(args){if(args[2]){exit$5=46;}else{var v=args[1];}}else{exit$5=46;}
         
         switch(exit$5)
          {case 46:throw [0,Assert_failure,[0,"bytecomp/px.ml",485,54]];}
         
        case "caml_floor_float":var v=E$1[15](0,0,E$1[26](0,"floor"),args);
        case "caml_gc_compaction":exit=97;
        case "caml_gc_counters":
         var
          v=
           E$1[16]
            (0,
             /* :: */[0,
              E$1[7](0,0),
              /* :: */[0,
               E$1[8](0,0),
               /* :: */[0,E$1[8](0,0),/* :: */[0,E$1[8](0,0),0]]]]);
         
        case "caml_gc_full_major":exit=97;
        case "caml_gc_get":
         var
          v=
           E$1[16]
            (0,
             /* :: */[0,
              E$1[7](0,0),
              /* :: */[0,
               E$1[7]([0,"minor_heap_size"],0),
               /* :: */[0,
                E$1[7]([0,"major_heap_increment"],0),
                /* :: */[0,
                 E$1[7]([0,"space_overhead"],0),
                 /* :: */[0,
                  E$1[7]([0,"verbose"],0),
                  /* :: */[0,
                   E$1[7]([0,"max_overhead"],0),
                   /* :: */[0,
                    E$1[7]([0,"stack_limit"],0),
                    /* :: */[0,E$1[7]([0,"allocation_policy"],0),0]]]]]]]]);
         
        case "caml_gc_major":exit=97;
        case "caml_gc_major_slice":exit=97;
        case "caml_gc_minor":exit=97;
        case "caml_gc_quick_stat":exit=84;
        case "caml_gc_set":exit=97;
        case "caml_gc_stat":exit=84;
        case "caml_ge_float":
         var exit$6;
         
         if(args)
          {var match$4=args[2];
           
           if(match$4)
            {if(match$4[2])
              {exit$6=42;}
             else
              {var v=E$1[13](0,24,args[1],match$4[1]);}
             }
           else
            {exit$6=42;}
           }
         else
          {exit$6=42;}
         
         switch(exit$6)
          {case 42:throw [0,Assert_failure,[0,"bytecomp/px.ml",455,25]];}
         
        case "caml_gt_float":
         var exit$7;
         
         if(args)
          {var match$5=args[2];
           
           if(match$5)
            {if(match$5[2])
              {exit$7=44;}
             else
              {var v=E$1[13](0,23,args[1],match$5[1]);}
             }
           else
            {exit$7=44;}
           }
         else
          {exit$7=44;}
         
         switch(exit$7)
          {case 44:throw [0,Assert_failure,[0,"bytecomp/px.ml",459,25]];}
         
        case "caml_int32_add":exit=87;
        case "caml_int32_and":exit=95;
        case "caml_int32_div":exit=88;
        case "caml_int32_mul":exit=89;
        case "caml_int32_of_float":exit=91;
        case "caml_int32_of_int":exit=90;
        case "caml_int32_or":exit=96;
        case "caml_int32_sub":exit=93;
        case "caml_int32_to_float":exit=92;
        case "caml_int32_to_int":exit=92;
        case "caml_int32_xor":exit=94;
        case "caml_int_of_float":exit=91;
        case "caml_le_float":
         var exit$8;
         
         if(args)
          {var match$6=args[2];
           
           if(match$6)
            {if(match$6[2])
              {exit$8=74;}
             else
              {var v=E$1[13](0,22,args[1],match$6[1]);}
             }
           else
            {exit$8=74;}
           }
         else
          {exit$8=74;}
         
         switch(exit$8)
          {case 74:throw [0,Assert_failure,[0,"bytecomp/px.ml",562,25]];}
         
        case "caml_log10_float":var v=E$1[15](0,0,E$1[26](0,"log10"),args);
        case "caml_log1p_float":var v=E$1[15](0,0,E$1[26](0,"log1p"),args);
        case "caml_log_float":var v=E$1[15](0,0,E$1[26](0,"log"),args);
        case "caml_lt_float":
         var exit$9;
         
         if(args)
          {var match$7=args[2];
           
           if(match$7)
            {if(match$7[2])
              {exit$9=76;}
             else
              {var v=E$1[13](0,21,args[1],match$7[1]);}
             }
           else
            {exit$9=76;}
           }
         else
          {exit$9=76;}
         
         switch(exit$9)
          {case 76:throw [0,Assert_failure,[0,"bytecomp/px.ml",566,25]];}
         
        case "caml_mul_float":
         var exit$10;
         
         if(args)
          {var match$8=args[2];
           
           if(match$8)
            {if(match$8[2])
              {exit$10=82;}
             else
              {var v=E$1[13](0,32,args[1],match$8[1]);}
             }
           else
            {exit$10=82;}
           }
         else
          {exit$10=82;}
         
         switch(exit$10)
          {case 82:throw [0,Assert_failure,[0,"bytecomp/px.ml",582,25]];}
         
        case "caml_nativeint_add":exit=87;
        case "caml_nativeint_and":exit=95;
        case "caml_nativeint_div":exit=88;
        case "caml_nativeint_mul":exit=89;
        case "caml_nativeint_of_float":exit=91;
        case "caml_nativeint_of_int":exit=90;
        case "caml_nativeint_of_int32":exit=90;
        case "caml_nativeint_or":exit=96;
        case "caml_nativeint_sub":exit=93;
        case "caml_nativeint_to_float":exit=92;
        case "caml_nativeint_to_int":exit=92;
        case "caml_nativeint_to_int32":exit=92;
        case "caml_nativeint_xor":exit=94;
        case "caml_neg_float":
         var exit$11;
         
         if(args)
          {if(args[2]){exit$11=78;}else{var v=E$1[14](0,1,args[1]);}}
         else
          {exit$11=78;}
         
         switch(exit$11)
          {case 78:throw [0,Assert_failure,[0,"bytecomp/px.ml",574,63]];}
         
        case "caml_neq_float":
         var exit$12;
         
         if(args)
          {var match$9=args[2];
           
           if(match$9)
            {if(match$9[2])
              {exit$12=80;}
             else
              {var v=E$1[13](0,20,args[1],match$9[1]);}
             }
           else
            {exit$12=80;}
           }
         else
          {exit$12=80;}
         
         switch(exit$12)
          {case 80:throw [0,Assert_failure,[0,"bytecomp/px.ml",578,25]];}
         
        case "caml_sin_float":var v=E$1[15](0,0,E$1[26](0,"sin"),args);
        case "caml_sinh_float":var v=E$1[15](0,0,E$1[26](0,"sinh"),args);
        case "caml_sqrt_float":var v=E$1[15](0,0,E$1[26](0,"sqrt"),args);
        case "caml_sub_float":
         var exit$13;
         
         if(args)
          {var match$10=args[2];
           
           if(match$10)
            {if(match$10[2])
              {exit$13=38;}
             else
              {var v=E$1[13](0,31,args[1],match$10[1]);}
             }
           else
            {exit$13=38;}
           }
         else
          {exit$13=38;}
         
         switch(exit$13)
          {case 38:throw [0,Assert_failure,[0,"bytecomp/px.ml",447,25]];}
         
        case "caml_tan_float":var v=E$1[15](0,0,E$1[26](0,"tan"),args);
        case "caml_tanh_float":var v=E$1[15](0,0,E$1[26](0,"tanh"),args);
        default:exit=98;}
      
      switch(exit)
       {case 98:throw X[1];
        case 84:
         var
          v=
           E$1[16]
            (/* Some */[0,x],
             /* :: */[0,
              E$1[7]([0,"stat-record"],0),
              /* :: */[0,
               E$1[8]([0,"minor_words"],0),
               /* :: */[0,
                E$1[8]([0,"promoted_words"],0),
                /* :: */[0,
                 E$1[8]([0,"major_words"],0),
                 /* :: */[0,
                  E$1[7]([0,"minor_collections"],0),
                  /* :: */[0,
                   E$1[7]([0,"major_collections"],0),
                   /* :: */[0,
                    E$1[7]([0,"heap_words"],0),
                    /* :: */[0,
                     E$1[7]([0,"heap_chunks"],0),
                     /* :: */[0,
                      E$1[7]([0,"live_words"],0),
                      /* :: */[0,
                       E$1[7]([0,"live_blocks"],0),
                       /* :: */[0,
                        E$1[7]([0,"free_words"],0),
                        /* :: */[0,
                         E$1[7]([0,"free_blocks"],0),
                         /* :: */[0,
                          E$1[7]([0,"larget_blocks"],0),
                          /* :: */[0,
                           E$1[7]([0,"fragments"],0),
                           /* :: */[0,
                            E$1[7]([0,"compactions"],0),
                            /* :: */[0,
                             E$1[7]([0,"top_heap_words"],0),
                             /* :: */[0,E$1[7]([0,"stack_size"],0),0]]]]]]]]]]]]]]]]]);
         
        case 85:
         var exit$14;
         
         if(args)
          {var match$11=args[2];
           
           if(match$11)
            {if(match$11[2])
              {exit$14=50;}
             else
              {var v=E$1[2](0,args[1],match$11[1]);}
             }
           else
            {exit$14=50;}
           }
         else
          {exit$14=50;}
         
         switch(exit$14)
          {case 50:throw [0,Assert_failure,[0,"bytecomp/px.ml",501,25]];}
         
        case 86:
         var exit$15;
         
         if(args)
          {var match$12=args[2];
           
           if(match$12)
            {var match$13=match$12[2];
             
             if(match$13)
              {if(match$13[2])
                {exit$15=52;}
               else
                {var v=E$1[10](0,E$1[2](0,args[1],match$12[1]),match$13[1]);}
               }
             else
              {exit$15=52;}
             }
           else
            {exit$15=52;}
           }
         else
          {exit$15=52;}
         
         switch(exit$15)
          {case 52:throw [0,Assert_failure,[0,"bytecomp/px.ml",511,25]];}
         
        case 87:
         var exit$16;
         
         if(args)
          {var match$14=args[2];
           
           if(match$14)
            {if(match$14[2])
              {exit$16=54;}
             else
              {var v=E$1[13](0,30,args[1],match$14[1]);}
             }
           else
            {exit$16=54;}
           }
         else
          {exit$16=54;}
         
         switch(exit$16)
          {case 54:throw [0,Assert_failure,[0,"bytecomp/px.ml",515,25]];}
         
        case 88:
         var exit$17;
         
         if(args)
          {var match$15=args[2];
           
           if(match$15)
            {if(match$15[2])
              {exit$17=56;}
             else
              {var
                v=
                 E$1[13](0,14,E$1[13](0,33,args[1],match$15[1]),E$1[7](0,0));
               }
             }
           else
            {exit$17=56;}
           }
         else
          {exit$17=56;}
         
         switch(exit$17)
          {case 56:throw [0,Assert_failure,[0,"bytecomp/px.ml",519,25]];}
         
        case 89:
         var exit$18;
         
         if(args)
          {var match$16=args[2];
           
           if(match$16)
            {if(match$16[2])
              {exit$18=58;}
             else
              {var v=E$1[13](0,32,args[1],match$16[1]);}
             }
           else
            {exit$18=58;}
           }
         else
          {exit$18=58;}
         
         switch(exit$18)
          {case 58:throw [0,Assert_failure,[0,"bytecomp/px.ml",523,25]];}
         
        case 90:
         var exit$19;
         
         if(args)
          {if(args[2]){exit$19=60;}else{var v=args[1];}}
         else
          {exit$19=60;}
         
         switch(exit$19)
          {case 60:throw [0,Assert_failure,[0,"bytecomp/px.ml",528,57]];}
         
        case 91:
         var exit$20;
         
         if(args)
          {if(args[2])
            {exit$20=62;}
           else
            {var v=E$1[13](0,14,args[1],E$1[7](0,0));}
           }
         else
          {exit$20=62;}
         
         switch(exit$20)
          {case 62:throw [0,Assert_failure,[0,"bytecomp/px.ml",536,25]];}
         
        case 92:
         var exit$21;
         
         if(args)
          {if(args[2]){exit$21=64;}else{var v=args[1];}}
         else
          {exit$21=64;}
         
         switch(exit$21)
          {case 64:throw [0,Assert_failure,[0,"bytecomp/px.ml",542,57]];}
         
        case 93:
         var exit$22;
         
         if(args)
          {var match$17=args[2];
           
           if(match$17)
            {if(match$17[2])
              {exit$22=66;}
             else
              {var v=E$1[13](0,31,args[1],match$17[1]);}
             }
           else
            {exit$22=66;}
           }
         else
          {exit$22=66;}
         
         switch(exit$22)
          {case 66:throw [0,Assert_failure,[0,"bytecomp/px.ml",546,25]];}
         
        case 94:
         var exit$23;
         
         if(args)
          {var match$18=args[2];
           
           if(match$18)
            {if(match$18[2])
              {exit$23=68;}
             else
              {var v=E$1[13](0,15,args[1],match$18[1]);}
             }
           else
            {exit$23=68;}
           }
         else
          {exit$23=68;}
         
         switch(exit$23)
          {case 68:throw [0,Assert_failure,[0,"bytecomp/px.ml",550,25]];}
         
        case 95:
         var exit$24;
         
         if(args)
          {var match$19=args[2];
           
           if(match$19)
            {if(match$19[2])
              {exit$24=70;}
             else
              {var v=E$1[13](0,16,args[1],match$19[1]);}
             }
           else
            {exit$24=70;}
           }
         else
          {exit$24=70;}
         
         switch(exit$24)
          {case 70:throw [0,Assert_failure,[0,"bytecomp/px.ml",554,25]];}
         
        case 96:
         var exit$25;
         
         if(args)
          {var match$20=args[2];
           
           if(match$20)
            {if(match$20[2])
              {exit$25=72;}
             else
              {var v=E$1[13](0,14,args[1],match$20[1]);}
             }
           else
            {exit$25=72;}
           }
         else
          {exit$25=72;}
         
         switch(exit$25)
          {case 72:throw [0,Assert_failure,[0,"bytecomp/px.ml",558,25]];}
         
        case 97:var v=E$1[23](0,0);
        }
      
      return /* Some */[0,v];
      }
    catch(exn){if(exn=X[1]){return 0;}else{throw exn;}}
    };

var
 get_exp=
  function(key)
   {switch(key)
     {case 0:
       var pos=key[2];
       
       var id=key[1];
       
       var exit;
       
       try
        {var val=Hashtbl["find"](cached_tbl,id);exit=-2;}
       catch(exn)
        {if(exn=Not_found)
          {var match=Env["find_module"](/* Pident */[0,id],key[3]);
           
           var match$1=match[1];
           
           switch(match$1)
            {case 1:
              var
               serializable_sigs=
                List["filter"]
                 (function(x)
                   {var exit$1;
                    
                    switch(x)
                     {case 0:
                       var exit$2;
                       
                       var $js=x[2][2];
                       if(typeof $js=="number")
                        {switch($js){}}
                       else
                        {switch($js[0]){case 0:return 0;default:exit$2=20;}}
                       
                       switch(exit$2){case 20:return 1;}
                       
                      case 1:exit$1=19;
                      case 4:exit$1=19;
                      case 6:exit$1=19;
                      default:return 1;}
                    
                    switch(exit$1){case 19:return 0;}
                    },
                  match$1[1]);
              
              Hashtbl["add"](cached_tbl,id,/* Visit */[0,serializable_sigs]);
              var v=get_name(serializable_sigs,pos);
              
             default:throw [0,Assert_failure,[0,"bytecomp/px.ml",623,25]];}
           }
         else
          {throw exn;}
         }
       
       switch(exit)
        {case -2:
          if(val)
           {var v=get_name(val[1],pos);}
          else
           {throw [0,Assert_failure,[0,"bytecomp/px.ml",625,27]];}
          
         }
       
       return E$1[2](0,E$1[3](0,id),E$1[4](0,v));
       
      case 1:
       var args=key[2];
       
       var prim$2=key[1];
       
       var match$2=query(prim$2,args);
       
       if(match$2)
        {return match$2[1];}
       else
        {add_built_in_module(J_helper[1]);
         return E$1[15](0,0,E$1[27](0,prim$2[1]),args);
         }
       
      }
    };

var
 string_of_value_description=
  function(id){return Util[1](Printtyp["value_description"](id));};

var
 dump_summary=
  function(fmt,x)
   {if(typeof x=="number")
     {switch(x){case 0:return 0;}}
    else
     {switch(x[0])
       {case 0:
         dump_summary(fmt,x[1]);
         return Printtyp["value_description"](x[2],fmt,x[3]);
         
        default:return 0;}}
    };

var
 query_type=
  function(id,env)
   {var exit;
    
    try
     {var val=Env["find_value"](/* Pident */[0,id],env);exit=-1;}
    catch(exn){if(exn=Not_found){return "";}else{throw exn;}}
    
    switch(exit)
     {case -1:
       return Util[1]
               (Oprint["out_type"][1],Printtyp["tree_of_type_scheme"](val[1]));
       
      }
    };

var
 required_modules=
  function(param)
   {return Hashtbl["fold"]
            (function(id,param$1,block$1)
              {return /* :: */[0,
                       S[9]
                        (0,
                         0,
                         /* Some */[0,
                          /* tuple */[0,
                           E$1[15]
                            (0,
                             0,
                             E$1[24](0,"require"),
                             /* :: */[0,
                              E$1[4]
                               (0,
                                Printf["sprintf"]
                                 ([0,[11,"./",[2,0,[11,".js",0]]],"./%s.js"],
                                  $$String["uncapitalize"](id[2]))),
                              0]),
                           0]],
                         id),
                       block$1];
               },
             cached_tbl,
             0);
    };

CamlinternalMod["update_mod"]
 ([0,[0,0,0,0,0,0]],
  Gen_of_env,
  [0,get_exp,required_modules,query_type,add_built_in_module,reset]);
var
 jsop_of_comp=
  function(cmp)
   {switch(cmp[0])
     {case 0:return 19;
      case 1:return 20;
      case 2:return 21;
      case 3:return 23;
      case 4:return 22;
      case 5:return 24;
      }
    };

var E$2=J_helper[2];

var
 comment_of_tag_info=
  function(x)
   {if(typeof x=="number")
     {switch(x)
       {case 0:return [0,"tuple"];case 1:return [0,"record"];case 2:return 0;}}
    else
     {switch(x[0])
       {case 0:return /* Some */[0,x[1]];
        case 1:return /* Some */[0,Pervasives["^"]("`",x[1])];
        }}
    };

var
 decorate_side_effect=
  function(param,e)
   {var should_return=param[2];
    
    var st=param[1];
    
    var exit;
    
    if("unknown primitive:isint")
     {if(st!=0){exit=243;}else{if(should_return!=0){exit=243;}else{return e;}}
      }
    else
     {exit=243;}
    
    switch(exit)
     {case 243:
       if(should_return!=0)
        {"unknown block:(exit 240)";}
       else
        {"unknown block:(exit 240)";}
       
      case 240:return E$2[17](0,e,E$2[23](0,0));
      }
    };

var
 compile_primitive=
  function(st,prim$2,args)
   {var exit;
    
    if(typeof prim$2=="number")
     {switch(prim$2)
       {case 0:
         var exit$1;
         
         if(args)
          {if(args[2]){exit$1=171;}else{return args[1];}}
         else
          {exit$1=171;}
         
         switch(exit$1){case 171:return E$2[22](0,prim$2);}
         
        case 1:
         var exit$2;
         
         if(args)
          {if(args[2]){exit$2=173;}else{return args[1];}}
         else
          {exit$2=173;}
         
         switch(exit$2){case 173:return E$2[22](0,prim$2);}
         
        case 3:
         var exit$3;
         
         if(args)
          {var match=args[2];
           
           if(match)
            {if(match[2])
              {exit$3=165;}
             else
              {return E$2[13](0,13,args[1],match[1]);}
             }
           else
            {exit$3=165;}
           }
         else
          {exit$3=165;}
         
         switch(exit$3){case 165:return E$2[22](0,prim$2);}
         
        case 4:
         var exit$4;
         
         if(args)
          {var match$1=args[2];
           
           if(match$1)
            {if(match$1[2])
              {exit$4=167;}
             else
              {return E$2[13](0,12,args[1],match$1[1]);}
             }
           else
            {exit$4=167;}
           }
         else
          {exit$4=167;}
         
         switch(exit$4){case 167:return E$2[22](0,prim$2);}
         
        case 5:
         var exit$5;
         
         if(args)
          {if(args[2]){exit$5=133;}else{return E$2[14](0,0,args[1]);}}
         else
          {exit$5=133;}
         
         switch(exit$5){case 133:return E$2[22](0,prim$2);}
         
        case 6:exit=213;
        case 7:exit=214;
        case 8:exit=215;
        case 9:exit=216;
        case 10:exit=217;
        case 11:exit=218;
        case 12:exit=222;
        case 13:exit=223;
        case 14:exit=224;
        case 15:exit=219;
        case 16:exit=220;
        case 17:exit=221;
        case 18:
         var exit$6;
         
         if(args)
          {if(args[2]){exit$6=182;}else{return args[1];}}
         else
          {exit$6=182;}
         
         switch(exit$6){case 182:return E$2[22](0,prim$2);}
         
        case 19:exit=230;
        case 20:exit=213;
        case 21:
         var exit$7;
         
         if(args)
          {if(args[2])
            {exit$7=206;}
           else
            {return E$2[15]
                     (0,
                      0,
                      E$2[2](0,E$2[24](0,"Math"),E$2[4](0,"abs")),
                      /* :: */[0,args[1],0]);
             }
           }
         else
          {exit$7=206;}
         
         switch(exit$7){case 206:return E$2[22](0,prim$2);}
         
        case 22:exit=214;
        case 23:exit=215;
        case 24:exit=216;
        case 25:exit=217;
        case 26:
         var exit$8;
         
         if(args)
          {if(args[2])
            {exit$8=186;}
           else
            {return E$2[2](0,args[1],E$2[4](0,"length"));}
           }
         else
          {exit$8=186;}
         
         switch(exit$8){case 186:return E$2[22](0,prim$2);}
         
        case 27:exit=229;
        case 28:exit=227;
        case 29:exit=229;
        case 30:exit=227;
        case 31:
         var exit$9;
         
         if(args)
          {if(args[2])
            {exit$9=208;}
           else
            {return E$2[13](0,19,E$2[12](0,args[1]),E$2[4](0,"number"));}
           }
         else
          {exit$9=208;}
         
         switch(exit$9){case 208:return E$2[22](0,prim$2);}
         
        case 32:
         var exit$10;
         
         if(args)
          {var match$2=args[2];
           
           if(match$2)
            {if(match$2[2])
              {exit$10=169;}
             else
              {return E$2[13]
                       (0,21,args[1],E$2[13](0,28,match$2[1],E$2[8](0,0)));
               }
             }
           else
            {exit$10=169;}
           }
         else
          {exit$10=169;}
         
         switch(exit$10){case 169:return E$2[22](0,prim$2);}
         
        }}
    else
     {switch(prim$2[0])
       {case 0:
         var exit$11;
         
         if(args)
          {var match$3=args[2];
           
           if(match$3)
            {if(match$3[2])
              {exit$11=178;}
             else
              {return E$2[15](0,0,match$3[1],/* :: */[0,args[1],0]);}
             }
           else
            {exit$11=178;}
           }
         else
          {exit$11=178;}
         
         switch(exit$11)
          {case 178:throw [0,Assert_failure,[0,"bytecomp/px.ml",835,24]];}
         
        case 1:
         var exit$12;
         
         if(args)
          {var match$4=args[2];
           
           if(match$4)
            {if(match$4[2])
              {exit$12=180;}
             else
              {return E$2[15](0,0,args[1],/* :: */[0,match$4[1],0]);}
             }
           else
            {exit$12=180;}
           }
         else
          {exit$12=180;}
         
         switch(exit$12){case 180:return E$2[22](0,prim$2);}
         
        case 2:exit=233;
        case 3:
         var i=prim$2[1];
         
         if(Ident["is_predef_exn"](i))
          {return E$2[28](0,i[2]);}
         else
          {if(Ident["global"](i))
            {return E$2[3](0,i);}
           else
            {return E$2[22](0,prim$2);}
           }
         
        case 4:exit=233;
        case 5:
         return E$2[16]
                 (comment_of_tag_info(prim$2[2]),
                  /* :: */[0,E$2[7](0,prim$2[1]),args]);
         
        case 6:
         var exit$13;
         
         if(args)
          {if(args[2])
            {exit$13=129;}
           else
            {return E$2[2](0,args[1],E$2[7](0,prim$2[1]+1));}
           }
         else
          {exit$13=129;}
         
         switch(exit$13){case 129:return E$2[22](0,prim$2);}
         
        case 7:
         var exit$14;
         
         if(args)
          {var match$5=args[2];
           
           if(match$5)
            {if(match$5[2])
              {exit$14=188;}
             else
              {return decorate_side_effect
                       (st,
                        E$2[10]
                         (0,E$2[2](0,args[1],E$2[7](0,prim$2[1]+1)),match$5[1]));
               }
             }
           else
            {exit$14=188;}
           }
         else
          {exit$14=188;}
         
         switch(exit$14){case 188:return E$2[22](0,prim$2);}
         
        case 8:
         var exit$15;
         
         if(args)
          {if(args[2])
            {exit$15=196;}
           else
            {return E$2[2](0,args[1],E$2[7](0,prim$2[1]+1));}
           }
         else
          {exit$15=196;}
         
         switch(exit$15){case 196:return E$2[22](0,prim$2);}
         
        case 9:
         var exit$16;
         
         if(args)
          {var match$6=args[2];
           
           if(match$6)
            {if(match$6[2])
              {exit$16=190;}
             else
              {return decorate_side_effect
                       (st,
                        E$2[10]
                         (0,E$2[2](0,args[1],E$2[7](0,prim$2[1]+1)),match$6[1]));
               }
             }
           else
            {exit$16=190;}
           }
         else
          {exit$16=190;}
         
         switch(exit$16){case 190:return E$2[22](0,prim$2);}
         
        case 11:return Gen_of_env[1](/* CamlPrimitive */[1,prim$2[1],args]);
        case 12:exit=233;
        case 13:exit=234;
        case 14:
         var exit$17;
         
         if(args)
          {if(args[2])
            {exit$17=135;}
           else
            {return E$2[13](0,30,E$2[7](0,prim$2[1]),args[1]);}
           }
         else
          {exit$17=135;}
         
         switch(exit$17){case 135:return E$2[22](0,prim$2);}
         
        case 15:
         var n=prim$2[1];
         
         var exit$18;
         
         var switcher=1+n;
         
         if(2<switcher>>>0)
          {exit$18=232;}
         else
          {switch(switcher[0])
            {case 0:
              var exit$19;
              
              if(args)
               {if(args[2])
                 {exit$19=139;}
                else
                 {return E$2[14](0,8,E$2[2](0,args[1],E$2[8](0,0)));}
                }
              else
               {exit$19=139;}
              
              switch(exit$19){case 139:return E$2[22](0,prim$2);}
              
             case 1:exit$18=232;
             case 2:
              var exit$20;
              
              if(args)
               {if(args[2])
                 {exit$20=137;}
                else
                 {return E$2[14](0,7,E$2[2](0,args[1],E$2[8](0,0)));}
                }
              else
               {exit$20=137;}
              
              switch(exit$20){case 137:return E$2[22](0,prim$2);}
              
             }
           }
         
         switch(exit$18)
          {case 232:
            var exit$21;
            
            if(args)
             {if(args[2])
               {exit$21=141;}
              else
               {return E$2[13](0,4,E$2[2](0,args[1],E$2[8](0,0)),E$2[7](0,n));
                }
              }
            else
             {exit$21=141;}
            
            switch(exit$21){case 141:return E$2[22](0,prim$2);}
            
           }
         
        case 16:exit=234;
        case 17:
         if(prim$2[1]>=3)
          {return E$2[16]
                   (0,
                    /* :: */[0,
                     E$2[7]([0,"floatarray"],Obj["double_array_tag"]),
                     args]);
           }
         else
          {return E$2[16](0,/* :: */[0,E$2[7]([0,"array"],0),args]);}
         
        case 18:
         var exit$22;
         
         if(args)
          {if(args[2])
            {exit$22=184;}
           else
            {return E$2[30]
                     ([0,"-1 for tag"],E$2[2](0,args[1],E$2[4](0,"length")));
             }
           }
         else
          {exit$22=184;}
         
         switch(exit$22){case 184:return E$2[22](0,prim$2);}
         
        case 19:exit=228;
        case 20:exit=226;
        case 21:exit=228;
        case 22:exit=226;
        case 23:exit=230;
        case 24:exit=230;
        case 25:
         var exit$23;
         
         if(args)
          {if(args[2]){exit$23=211;}else{return args[1];}}
         else
          {exit$23=211;}
         
         switch(exit$23){case 211:return E$2[22](0,prim$2);}
         
        case 26:exit=213;
        case 27:exit=214;
        case 28:exit=215;
        case 29:exit=216;
        case 30:exit=217;
        case 31:exit=218;
        case 32:exit=222;
        case 33:exit=223;
        case 34:exit=224;
        case 35:exit=219;
        case 36:exit=220;
        case 37:exit=221;
        case 38:var cmp=prim$2[2];exit=225;
        case 54:
         switch(prim$2[1][0])
          {case 0:if(Sys["big_endian"]){return E$2[19];}else{return E$2[20];}
           case 1:return E$2[7](0,Sys["word_size"]);
           case 2:if(Sys["unix"]){return E$2[19];}else{return E$2[20];}
           case 3:if(Sys["win32"]){return E$2[19];}else{return E$2[20];}
           case 4:if(Sys["cygwin"]){return E$2[19];}else{return E$2[20];}
           }
         
        default:exit=231;}}
    
    switch(exit)
     {case 233:return E$2[22](0,prim$2);
      case 234:"unknown block:(exit 225 (field 0 prim/2039))";
      case 213:
       var exit$24;
       
       if(args)
        {if(args[2]){exit$24=131;}else{return E$2[14](0,1,args[1]);}}
       else
        {exit$24=131;}
       
       switch(exit$24){case 131:return E$2[22](0,prim$2);}
       
      case 214:
       var exit$25;
       
       if(args)
        {var match$7=args[2];
         
         if(match$7)
          {if(match$7[2])
            {exit$25=143;}
           else
            {return E$2[13](0,30,args[1],match$7[1]);}
           }
         else
          {exit$25=143;}
         }
       else
        {exit$25=143;}
       
       switch(exit$25){case 143:return E$2[22](0,prim$2);}
       
      case 215:
       var exit$26;
       
       if(args)
        {var match$8=args[2];
         
         if(match$8)
          {if(match$8[2])
            {exit$26=145;}
           else
            {return E$2[13](0,31,args[1],match$8[1]);}
           }
         else
          {exit$26=145;}
         }
       else
        {exit$26=145;}
       
       switch(exit$26){case 145:return E$2[22](0,prim$2);}
       
      case 216:
       var exit$27;
       
       if(args)
        {var match$9=args[2];
         
         if(match$9)
          {if(match$9[2])
            {exit$27=147;}
           else
            {return E$2[13](0,32,args[1],match$9[1]);}
           }
         else
          {exit$27=147;}
         }
       else
        {exit$27=147;}
       
       switch(exit$27){case 147:return E$2[22](0,prim$2);}
       
      case 217:
       var exit$28;
       
       if(args)
        {var match$10=args[2];
         
         if(match$10)
          {if(match$10[2])
            {exit$28=149;}
           else
            {return E$2[13](0,33,args[1],match$10[1]);}
           }
         else
          {exit$28=149;}
         }
       else
        {exit$28=149;}
       
       switch(exit$28){case 149:return E$2[22](0,prim$2);}
       
      case 218:
       var exit$29;
       
       if(args)
        {var match$11=args[2];
         
         if(match$11)
          {if(match$11[2])
            {exit$29=151;}
           else
            {return E$2[13](0,34,args[1],match$11[1]);}
           }
         else
          {exit$29=151;}
         }
       else
        {exit$29=151;}
       
       switch(exit$29){case 151:return E$2[22](0,prim$2);}
       
      case 219:
       var exit$30;
       
       if(args)
        {var match$12=args[2];
         
         if(match$12)
          {if(match$12[2])
            {exit$30=153;}
           else
            {return E$2[13](0,27,args[1],match$12[1]);}
           }
         else
          {exit$30=153;}
         }
       else
        {exit$30=153;}
       
       switch(exit$30){case 153:return E$2[22](0,prim$2);}
       
      case 220:
       var exit$31;
       
       if(args)
        {var match$13=args[2];
         
         if(match$13)
          {if(match$13[2])
            {exit$31=155;}
           else
            {return E$2[13](0,28,args[1],match$13[1]);}
           }
         else
          {exit$31=155;}
         }
       else
        {exit$31=155;}
       
       switch(exit$31){case 155:return E$2[22](0,prim$2);}
       
      case 221:
       var exit$32;
       
       if(args)
        {var match$14=args[2];
         
         if(match$14)
          {if(match$14[2])
            {exit$32=157;}
           else
            {return E$2[13](0,29,args[1],match$14[1]);}
           }
         else
          {exit$32=157;}
         }
       else
        {exit$32=157;}
       
       switch(exit$32){case 157:return E$2[22](0,prim$2);}
       
      case 222:
       var exit$33;
       
       if(args)
        {var match$15=args[2];
         
         if(match$15)
          {if(match$15[2])
            {exit$33=159;}
           else
            {return E$2[13](0,16,args[1],match$15[1]);}
           }
         else
          {exit$33=159;}
         }
       else
        {exit$33=159;}
       
       switch(exit$33){case 159:return E$2[22](0,prim$2);}
       
      case 223:
       var exit$34;
       
       if(args)
        {var match$16=args[2];
         
         if(match$16)
          {if(match$16[2])
            {exit$34=161;}
           else
            {return E$2[13](0,14,args[1],match$16[1]);}
           }
         else
          {exit$34=161;}
         }
       else
        {exit$34=161;}
       
       switch(exit$34){case 161:return E$2[22](0,prim$2);}
       
      case 224:
       var exit$35;
       
       if(args)
        {var match$17=args[2];
         
         if(match$17)
          {if(match$17[2])
            {exit$35=163;}
           else
            {return E$2[13](0,15,args[1],match$17[1]);}
           }
         else
          {exit$35=163;}
         }
       else
        {exit$35=163;}
       
       switch(exit$35){case 163:return E$2[22](0,prim$2);}
       
      case 225:
       var op=jsop_of_comp(cmp);
       
       var exit$36;
       
       if(args)
        {var match$18=args[2];
         
         if(match$18)
          {if(match$18[2])
            {exit$36=175;}
           else
            {return E$2[13](0,op,args[1],match$18[1]);}
           }
         else
          {exit$36=175;}
         }
       else
        {exit$36=175;}
       
       switch(exit$36){case 175:return E$2[22](0,prim$2);}
       
      case 226:
       var exit$37;
       
       if(args)
        {var match$19=args[2];
         
         if(match$19)
          {var match$20=match$19[2];
           
           if(match$20)
            {if(match$20[2])
              {exit$37=192;}
             else
              {return decorate_side_effect
                       (st,
                        E$2[10]
                         (0,E$2[2](0,args[1],E$2[29](0,match$19[1])),match$20[1]));
               }
             }
           else
            {exit$37=192;}
           }
         else
          {exit$37=192;}
         }
       else
        {exit$37=192;}
       
       switch(exit$37){case 192:return E$2[22](0,prim$2);}
       
      case 227:
       var exit$38;
       
       if(args)
        {var match$21=args[2];
         
         if(match$21)
          {var match$22=match$21[2];
           
           if(match$22)
            {if(match$22[2])
              {exit$38=194;}
             else
              {return decorate_side_effect
                       (st,E$2[10](0,E$2[2](0,args[1],match$21[1]),match$22[1]));
               }
             }
           else
            {exit$38=194;}
           }
         else
          {exit$38=194;}
         }
       else
        {exit$38=194;}
       
       switch(exit$38){case 194:return E$2[22](0,prim$2);}
       
      case 228:
       var exit$39;
       
       if(args)
        {var match$23=args[2];
         
         if(match$23)
          {if(match$23[2])
            {exit$39=198;}
           else
            {return E$2[2](0,args[1],E$2[29](0,match$23[1]));}
           }
         else
          {exit$39=198;}
         }
       else
        {exit$39=198;}
       
       switch(exit$39){case 198:return E$2[22](0,prim$2);}
       
      case 229:
       var exit$40;
       
       if(args)
        {var match$24=args[2];
         
         if(match$24)
          {if(match$24[2])
            {exit$40=200;}
           else
            {return E$2[2](0,args[1],match$24[1]);}
           }
         else
          {exit$40=200;}
         }
       else
        {exit$40=200;}
       
       switch(exit$40){case 200:return E$2[22](0,prim$2);}
       
      case 230:
       var exit$41;
       
       if(args)
        {if(args[2]){exit$41=204;}else{return args[1];}}
       else
        {exit$41=204;}
       
       switch(exit$41){case 204:return E$2[22](0,prim$2);}
       
      case 231:return E$2[22](0,prim$2);
      }
    };

var
 comment_of_pointer_info=
  function(x)
   {if("unknown primitive:isint"){return 0;}else{return /* Some */[0,x[1]];}};

var
 compile_const=
  function(x)
   {switch(x)
     {case 0:
       var c=x[1];
       
       switch(c)
        {case 0:return E$2[7](0,c[1]);
         case 1:return E$2[7](0,c[1]);
         case 2:return E$2[4](0,c[1]);
         case 3:return E$2[8](0,"unknown primitive:caml_float_of_string");
         case 4:return E$2[8](0,"unknown primitive:caml_int32_to_float");
         case 5:return E$2[8](0,"unknown primitive:caml_int64_to_float");
         case 6:return E$2[8](0,"unknown primitive:caml_nativeint_to_float");
         }
       
      case 1:return E$2[7](comment_of_pointer_info(x[2]),x[1]);
      case 2:
       return E$2[16]
               (0,
                /* :: */[0,
                 E$2[7](comment_of_tag_info(x[2]),x[1]),
                 List["map"](function(x$1){return compile_const(x$1);},x[3])]);
       
      case 3:
       return E$2[16]
               (0,
                List["map"]
                 (function(x$1)
                   {return E$2[8](0,"unknown primitive:caml_float_of_string");},
                  x[1]));
       
      case 4:return E$2[4](0,x[1]);
      }
    };

CamlinternalMod["update_mod"]
 ([0,[0,0,0,0]],
  Compile_primitive,
  [0,jsop_of_comp,compile_primitive,compile_const]);
var E$3=J_helper[2];

var S$1=J_helper[3];

var
 is_pure=
  function(lam)
   {var exit;
    
    switch(lam)
     {case 0:exit=323;
      case 1:exit=323;
      case 3:exit=323;
      case 4:return is_pure(lam[3])&&is_pure(lam[4]);
      case 6:
       var exit$1;
       
       var $js;
       var $js$1=lam[1];
       if(typeof $js$1=="number")
        {switch($js$1){}}
       else
        {switch($js$1[0])
          {case 3:exit$1=320;
           case 4:exit$1=319;
           case 5:exit$1=320;
           case 6:exit$1=320;
           case 7:exit$1=319;
           default:exit$1=321;}}
       
       var $js$2;
       switch(exit$1){case 321:$js$2=0;case 319:$js$2=0;case 320:$js$2=1;}
       return List["for_all"](is_pure,lam[2])&&$js$2;
       
      default:return 0;}
    
    switch(exit){case 323:return 1;}
    };

var
 handle_name_tail=
  function(name,should_return,lam,exp$1)
   {var exit;
    
    if(typeof name=="number")
     {switch(name)
       {case 0:
         if(should_return!=0)
          {return /* tuple */[0,
                   /* :: */[0,J_helper[3][17](0,0,/* Some */[0,exp$1]),0],
                   0];
           }
         else
          {if(is_pure(lam))
            {return [0,0,0];}
           else
            {return /* tuple */[0,0,/* Some */[0,exp$1]];}
           }
         
        case 1:return /* tuple */[0,0,/* Some */[0,exp$1]];
        }}
    else
     {switch(name[0])
       {case 0:
         if(should_return!=0)
          {exit=310;}
         else
          {return /* tuple */[0,
                   /* :: */[0,
                    J_helper[3][9]
                     (0,0,/* Some */[0,/* tuple */[0,exp$1,0]],name[1]),
                    0],
                   0];
           }
         
        case 1:
         if(should_return!=0)
          {exit=310;}
         else
          {return /* tuple */[0,
                   /* :: */[0,J_helper[3][10](0,0,name[1],exp$1),0],
                   0];
           }
         
        }}
    
    switch(exit)
     {case 310:
       if(should_return!=0)
        {return /* tuple */[0,/* :: */[0,S$1[18](0,0,lam),0],0];}
       else
        {throw [0,Match_failure,[0,"bytecomp/px.ml",1002,17]];}
       
      }
    };

var
 handle_block_return=
  function(st,should_return,lam,block$1,exp$1)
   {var exit;
    
    if(typeof st=="number")
     {switch(st)
       {case 0:
         if(should_return!=0)
          {return /* tuple */[0,
                   Pervasives["@"]
                    (block$1,
                     /* :: */[0,J_helper[3][17](0,0,/* Some */[0,exp$1]),0]),
                   0];
           }
         else
          {return /* tuple */[0,block$1,/* Some */[0,exp$1]];}
         
        case 1:return /* tuple */[0,block$1,/* Some */[0,exp$1]];
        }}
    else
     {switch(st[0])
       {case 0:
         if(should_return!=0)
          {exit=300;}
         else
          {return /* tuple */[0,
                   Pervasives["@"]
                    (block$1,
                     /* :: */[0,
                      J_helper[3][9]
                       (0,0,/* Some */[0,/* tuple */[0,exp$1,0]],st[1]),
                      0]),
                   0];
           }
         
        case 1:
         if(should_return!=0)
          {exit=300;}
         else
          {return /* tuple */[0,
                   Pervasives["@"]
                    (block$1,/* :: */[0,J_helper[3][10](0,0,st[1],exp$1),0]),
                   0];
           }
         
        }}
    
    switch(exit)
     {case 300:
       if(should_return!=0)
        {return /* tuple */[0,/* :: */[0,S$1[18](0,0,lam),0],0];}
       else
        {throw [0,Match_failure,[0,"bytecomp/px.ml",1014,17]];}
       
      }
    };

var
 gen=
  function($staropt$star,param)
   {if($staropt$star){var name=$staropt$star[1];}else{var name="$js";}
    
    return Jident[3](name);
    };

var
 $$exports=
  function(idents,lams)
   {var
     properties=
      List["map2"]
       (function(i,e){return /* tuple */[0,/* PNS */[1,i[2]],e];},idents,lams);
    
    return S$1[16]
            (0,
             0,
             E$3[13]
              (0,
               0,
               E$3[2](0,E$3[24](0,"module"),E$3[4](0,"exports")),
               E$3[18](0,properties)));
    };

var unit_val=E$3[8](0,0);

var
 return_unit$1=
  /* :: */[0,J_helper[3][17](0,0,/* Some */[0,E$3[8](0,0)]),0];

var
 is_js_pure=
  function(x)
   {var match=x[1];
    
    var exit;
    
    switch(match)
     {case 8:exit=284;
      case 11:
       return List["for_all"]
               (function(param)
                 {if(param){return is_js_pure(param[1]);}else{return 1;}},
                match[1]);
       
      case 13:exit=284;
      default:return 0;}
    
    switch(exit){case 284:return 1;}
    };

var
 statement_of_opt_expr=
  function(x)
   {if(x)
     {var x$1=x[1];
      
      if(is_js_pure(x$1))
       {return J_helper[3][3](0,0,0);}
      else
       {return J_helper[3][16](0,0,x$1);}
      }
    else
     {return J_helper[3][3](0,0,0);}
    };

var
 block_of_output=
  function(x)
   {return Pervasives["@"](x[1],/* :: */[0,statement_of_opt_expr(x[2]),0]);};

var
 append=
  function(x,y)
   {var block1=x[1];
    
    var exit;
    
    if(block1)
     {exit=271;}
    else
     {var match=x[2];
      
      if(match)
       {if(y[1])
         {exit=271;}
        else
         {var match$1=y[2];
          
          if(match$1)
           {var e2=match$1[1];
            
            var e1=match[1];
            
            if(is_js_pure(e1))
             {return /* tuple */[0,0,/* Some */[0,e2]];}
            else
             {return /* tuple */[0,0,/* Some */[0,E$3[17](0,e1,e2)]];}
            }
          else
           {return x;}
          }
        }
      else
       {return y;}
      }
    
    switch(exit)
     {case 271:
       return /* tuple */[0,
               Pervasives["@"]
                (block1,/* :: */[0,statement_of_opt_expr(x[2]),y[1]]),
               y[2]];
       
      }
    };

var $plus$plus=function(x,y){return append(x,y);};

var Ops=[0,$plus$plus];

var
 concat=
  function(xs)
   {if(xs){return List["fold_left"](append,xs[1],xs[2]);}else{return [0,0,0];}
    };

var
 pp_output=
  function(param,p)
   {var cxt=Pp_js[1];var cxt$1=Pp_js[2](cxt,p,0,param[1]);return 0;};

var
 dump_output=
  function(param,oc)
   {var cxt=Pp_js[1];
    
    var p=Pp[10](oc);
    
    var cxt$1=Pp_js[2](cxt,p,0,param[1]);
    
    return 0;
    };

CamlinternalMod["update_mod"]
 ([0,[0,0,0,0,0,[0,[0,0]],0,0,0,0,0]],
  Gen_util,
  [0,
   gen,
   $$exports,
   block_of_output,
   is_pure,
   Ops,
   dump_output,
   pp_output,
   handle_name_tail,
   handle_block_return,
   concat]);
var E$4=J_helper[2];

var S$2=J_helper[3];

var Not_a_module="unknown primitive:caml_set_oo_id";

var
 add_jmps=
  function(ls,m)
   {return List["fold_left"]
            (function(acc,param)
              {return Compile_defs[1][4](param[1],param[2],acc);},
             m,
             ls);
    };

var
 flat_catches=
  function(acc,x)
   {switch(x)
     {case 10:
       var match=x[2];
       
       return flat_catches
               (/* :: */[0,/* tuple */[0,match[1],x[3],match[2]],acc],x[1]);
       
      default:return /* tuple */[0,acc,x];}
    };

var
 compile_lambda=
  function(cxt,lam)
   {var should_return=cxt[2];
    
    var st=cxt[1];
    
    switch(lam)
     {case 0:
       return Gen_util[8](st,should_return,lam,J_helper[2][3](0,lam[1]));
      case 1:
       return Gen_util[8](st,should_return,lam,Compile_primitive[3](lam[1]));
      case 2:
       var match=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[1]);
       
       var match$1=match[2];
       
       if(match$1)
        {var
          match$2=
           List["split"]
            (List["map"]
              (function(x)
                {var
                  match$3=
                   compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],x);
                 
                 var match$4=match$3[2];
                 
                 if(match$4)
                  {return /* tuple */[0,match$3[1],match$4[1]];}
                 else
                  {throw [0,Assert_failure,[0,"bytecomp/px.ml",1908,53]];}
                 },
               lam[2]));
         
         var args_code=List["concat"](match$2[1]);
         
         var exp$1=E$4[15](0,0,match$1[1],match$2[2]);
         
         return Gen_util[9]
                 (st,
                  should_return,
                  lam,
                  Pervasives["@"](match[1],args_code),
                  exp$1);
         }
       else
        {throw [0,Assert_failure,[0,"bytecomp/px.ml",1894,47]];}
       
      case 3:
       return Gen_util[8]
               (st,
                should_return,
                lam,
                E$4[5]
                 (0,
                  0,
                  0,
                  lam[2],
                  Gen_util[3]
                   (compile_lambda
                     (/* record */[0,0,1,Compile_defs[2],cxt[4]],lam[3]))));
       
      case 4:
       return Gen_util[5][1]
               (compile_lambda
                 (/* record */[0,/* Declare */[0,lam[2]],0,cxt[3],cxt[4]],
                  lam[3]),
                compile_lambda(cxt,lam[4]));
       
      case 5:
       return Gen_util[5][1]
               (Gen_util[10]
                 (List["map"]
                   (function(param)
                     {return compile_lambda
                              (/* record */[0,/* Declare */[0,param[1]],0,cxt[3],cxt[4]],
                               param[2]);
                      },
                    lam[1])),
                compile_lambda(cxt,lam[2]));
       
      case 6:
       var prim$2=lam[1];
       
       var exit;
       
       if(typeof prim$2=="number")
        {switch(prim$2){}}
       else
        {switch(prim$2[0])
          {case 6:
            var match$3=lam[2];
            
            if(match$3)
             {var match$4=match$3[1];
              
              switch(match$4)
               {case 6:
                 var match$5=match$4[1];
                 
                 if(typeof match$5=="number")
                  {switch(match$5){}}
                 else
                  {switch(match$5[0])
                    {case 3:
                      if(match$4[2])
                       {exit=708;}
                      else
                       {if(match$3[2])
                         {exit=708;}
                        else
                         {return Gen_util[8]
                                  (st,
                                   should_return,
                                   lam,
                                   Gen_of_env[1]
                                    (/* GetGlobal */[0,match$5[1],prim$2[1],cxt[4]]));
                          }
                        }
                      
                     default:exit=708;}}
                 
                default:exit=708;}
              }
            else
             {exit=708;}
            
           case 12:
            var match$6=lam[2];
            
            if(match$6)
             {if(match$6[2])
               {exit=708;}
              else
               {var
                 match$7=
                  compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],match$6[1]);
                
                var match$8=match$7[2];
                
                if(match$8)
                 {return /* tuple */[0,
                          Pervasives["@"]
                           (match$7[1],/* :: */[0,S$2[5](0,0,match$8[1]),0]),
                          /* Some */[0,E$4[25](0,0)]];
                  }
                else
                 {throw [0,Assert_failure,[0,"bytecomp/px.ml",1490,47]];}
                }
              }
            else
             {exit=708;}
            
           default:exit=708;}}
       
       switch(exit)
        {case 708:
          var
           match$9=
            List["split"]
             (List["map"]
               (function(x)
                 {var
                   match$10=
                    compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],x);
                  
                  var match$11=match$10[2];
                  
                  if(match$11)
                   {return /* tuple */[0,match$10[1],match$11[1]];}
                  else
                   {throw [0,Assert_failure,[0,"bytecomp/px.ml",1504,48]];}
                  },
                lam[2]));
          
          var args_code$1=List["concat"](match$9[1]);
          
          var exp$2=Compile_primitive[2](cxt,prim$2,match$9[2]);
          
          return Gen_util[9](st,should_return,lam,args_code$1,exp$2);
          
         }
       
      case 7:
       var match$10=lam[2];
       
       var $$default=match$10[5];
       
       var sw_blocks=match$10[4];
       
       var sw_numblocks=match$10[3];
       
       var sw_consts=match$10[2];
       
       var sw_numconsts=match$10[1];
       
       var lam$1=lam[1];
       
       var
        aux=
         function(st$1,v,table,$$default$1)
          {return /* :: */[0,
                   J_helper[3][8]
                    (0,
                     0,
                     0,
                     $$default$1
                      ?/* Some */[0,
                        Gen_util[3]
                         (compile_lambda
                           (/* record */[0,st$1,cxt[2],cxt[3],cxt[4]],$$default$1[1]))]
                      :0,
                     v,
                     List["map"]
                      (function(param)
                        {return /* tuple */[0,
                                 E$4[7](0,param[1]),
                                 Gen_util[3]
                                  (compile_lambda
                                    (/* record */[0,st$1,cxt[2],cxt[3],cxt[4]],param[2]))];
                         },
                       table)),
                   0];
           };
       
       var
        aux2=
         function(st$1)
          {var
            match$11=
             compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam$1);
           
           var exit$1;
           
           if(sw_numconsts!=0)
            {if(sw_numblocks!=0)
              {exit$1=641;}
             else
              {var match$12=match$11[2];
               
               if(match$12)
                {return aux(st$1,match$12[1],sw_consts,$$default);}
               else
                {exit$1=641;}
               }
             }
           else
            {var match$13=match$11[2];
             
             if(match$13)
              {return aux
                       (st$1,E$4[2](0,match$13[1],E$4[8](0,0)),sw_blocks,$$default);
               }
             else
              {exit$1=641;}
             }
           
           switch(exit$1)
            {case 641:
              var match$14=match$11[2];
              
              if(match$14)
               {var e=match$14[1];
                
                var
                 aux$1=
                  function(e$1)
                   {return /* :: */[0,
                            S$2[6]
                             (0,
                              0,
                              /* Some */[0,
                               S$2[7]
                                (0,
                                 0,
                                 aux(st$1,E$4[2](0,e$1,E$4[8](0,0)),sw_blocks,$$default))],
                              E$4[11](0,E$4[12](0,e$1),E$4[4](0,"number")),
                              S$2[7](0,0,aux(st$1,e$1,sw_consts,0))),
                            0];
                    };
                
                var match$15=e[1];
                
                switch(match$15)
                 {case 8:return aux$1(e);
                  default:
                   var v=Gen_util[1](0,0);
                   
                   return /* :: */[0,
                           S$2[9](0,0,/* Some */[0,/* tuple */[0,e,0]],v),
                           aux$1(E$4[3](0,v))];
                   }
                }
              else
               {throw [0,Assert_failure,[0,"bytecomp/px.ml",1694,54]];}
              
             }
           };
       
       var exit$1;
       
       if("unknown primitive:isint")
        {if(st!=0)
          {var v=Gen_util[1](0,0);
           
           return /* tuple */[0,
                   /* :: */[0,J_helper[3][9](0,0,0,v),aux2(/* Assign */[1,v])],
                   /* Some */[0,E$4[3](0,v)]];
           }
         else
          {exit$1=634;}
         }
       else
        {exit$1=634;}
       
       switch(exit$1){case 634:return /* tuple */[0,aux2(st),0];}
       
      case 8:
       var $$default$1=lam[3];
       
       var cases=lam[2];
       
       var match$11=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[1]);
       
       var match$12=match$11[2];
       
       var v$1=match$11[1];
       
       if(match$12)
        {var e=match$12[1];
         
         var
          aux$1=
           function(st$1)
            {return Pervasives["@"]
                     (v$1,
                      /* :: */[0,
                       J_helper[3][8]
                        (0,
                         0,
                         0,
                         $$default$1
                          ?/* Some */[0,
                            Gen_util[3]
                             (compile_lambda
                               (/* record */[0,st$1,cxt[2],cxt[3],cxt[4]],$$default$1[1]))]
                          :0,
                         e,
                         List["map"]
                          (function(param)
                            {return /* tuple */[0,
                                     E$4[4](0,param[1]),
                                     Gen_util[3]
                                      (compile_lambda
                                        (/* record */[0,st$1,cxt[2],cxt[3],cxt[4]],param[2]))];
                             },
                           cases)),
                       0]);
             };
         
         var exit$2;
         
         if("unknown primitive:isint")
          {if(st!=0)
            {var v$2=Gen_util[1](0,0);
             
             return /* tuple */[0,
                     aux$1(/* Declare */[0,v$2]),
                     /* Some */[0,E$4[3](0,v$2)]];
             }
           else
            {exit$2=625;}
           }
         else
          {exit$2=625;}
         
         switch(exit$2){case 625:return /* tuple */[0,aux$1(st),0];}
         }
       else
        {throw [0,Assert_failure,[0,"bytecomp/px.ml",1636,39]];}
       
      case 9:
       var i=lam[1];
       
       var exit$3;
       
       try
        {var val=Compile_defs[1][22](i,cxt[3]);exit$3=-3;}
       catch(exn)
        {if(exn=Not_found)
          {return /* tuple */[0,/* :: */[0,S$2[18]([0,"error"],0,lam),0],0];}
         else
          {throw exn;}
         }
       
       switch(exit$3)
        {case -3:
          var
           args_code$2=
            Gen_util[10]
             (List["map2"]
               (function(x,arg)
                 {switch(x)
                   {case 0:
                     return /* tuple */[0,
                             /* :: */[0,
                              S$2[9]
                               (0,0,/* Some */[0,/* tuple */[0,E$4[3](0,x[1]),0]],arg),
                              0],
                             0];
                     
                    default:
                     return compile_lambda
                             (/* record */[0,/* Declare */[0,arg],0,cxt[3],cxt[4]],x);
                     }
                  },
                lam[2],
                val[2]));
          
          return Gen_util[5][1]
                  (args_code$2,
                   /* tuple */[0,
                    /* :: */[0,J_helper[3][10](0,0,val[1],E$4[7](0,i)),0],
                    /* Some */[0,E$4[25](0,0)]]);
          
         }
       
      case 10:
       var match$13=flat_catches(0,lam);
       
       var code_table=match$13[1];
       
       var exit_id=Gen_util[1]([0,"exit"],0);
       
       var
        code_jmps=
         List["map"]
          (function(param)
            {return /* tuple */[0,param[1],/* record */[0,exit_id,param[3]]];},
           code_table);
       
       var
        aux$2=
         function(st$1,jmp_table)
          {return /* :: */[0,
                   S$2[8]
                    (0,
                     0,
                     0,
                     0,
                     E$4[3](0,exit_id),
                     List["map"]
                      (function(param)
                        {return /* tuple */[0,
                                 E$4[7](0,param[1]),
                                 Gen_util[3]
                                  (compile_lambda
                                    (/* record */[0,st$1,cxt[2],jmp_table,cxt[4]],param[2]))];
                         },
                       code_table)),
                   0];
           };
       
       var jmp_table=add_jmps(code_jmps,cxt[3]);
       
       var exit$4;
       
       if("unknown primitive:isint")
        {if(st!=0)
          {var v$3=Gen_util[1](0,0);
           
           var
            $js=
             /* tuple */[0,
              /* :: */[0,
               S$2[9](0,0,0,v$3),
               aux$2(/* Assign */[1,v$3],jmp_table)],
              /* Some */[0,E$4[3](0,v$3)]];
           }
         else
          {exit$4=661;}
         }
       else
        {exit$4=661;}
       
       var $js$1;
       switch(exit$4){case 661:$js$1=/* tuple */[0,aux$2(st,jmp_table),0];}
       return Gen_util[5][1]
               (Gen_util[5][1]
                 (/* tuple */[0,/* :: */[0,S$2[9](0,0,0,exit_id),0],0],
                  compile_lambda
                   (/* record */[0,cxt[1],cxt[2],jmp_table,cxt[4]],match$13[2])),
                $js$1);
       
      case 11:
       var $$catch=lam[3];
       
       var id=lam[2];
       
       var lam$2=lam[1];
       
       var
        aux$3=
         function(st$1)
          {var
            b=
             compile_lambda(/* record */[0,st$1,cxt[2],cxt[3],cxt[4]],lam$2);
           
           return /* :: */[0,
                   S$2[15]
                    (0,
                     0,
                     /* Some */[0,
                      /* tuple */[0,
                       id,
                       Gen_util[3]
                        (compile_lambda
                          (/* record */[0,st$1,cxt[2],cxt[3],cxt[4]],$$catch))]],
                     0,
                     Gen_util[3](b)),
                   0];
           };
       
       var exit$5;
       
       if("unknown primitive:isint")
        {if(st!=0)
          {var v$4=Gen_util[1](0,0);
           
           return /* tuple */[0,
                   /* :: */[0,S$2[9](0,0,0,v$4),aux$3(/* Assign */[1,v$4])],
                   /* Some */[0,E$4[3](0,v$4)]];
           }
         else
          {exit$5=694;}
         }
       else
        {exit$5=694;}
       
       switch(exit$5){case 694:return /* tuple */[0,aux$3(st),0];}
       
      case 12:
       var f_br=lam[3];
       
       var t_br=lam[2];
       
       var match$14=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[1]);
       
       var match$15=match$14[2];
       
       var b=match$14[1];
       
       if(match$15)
        {var e$1=match$15[1];
         
         var exit$6;
         
         if("unknown primitive:isint")
          {if(st!=0)
            {var match$16=compile_lambda(cxt,t_br);
             
             var match$17=compile_lambda(cxt,f_br);
             
             var exit$7;
             
             if(match$16[1])
              {exit$7=618;}
             else
              {var match$18=match$16[2];
               
               if(match$18)
                {if(match$17[1])
                  {exit$7=618;}
                 else
                  {var match$19=match$17[2];
                   
                   if(match$19)
                    {return /* tuple */[0,
                             b,
                             /* Some */[0,J_helper[2][6](0,e$1,match$18[1],match$19[1])]];
                     }
                   else
                    {exit$7=618;}
                   }
                 }
               else
                {exit$7=618;}
               }
             
             switch(exit$7)
              {case 618:
                var v$5=Gen_util[1](0,0);
                
                var
                 match$20=
                  compile_lambda
                   (/* record */[0,/* Declare */[0,v$5],cxt[2],cxt[3],cxt[4]],
                    t_br);
                
                var
                 match$21=
                  compile_lambda
                   (/* record */[0,/* Declare */[0,v$5],cxt[2],cxt[3],cxt[4]],
                    f_br);
                
                return /* tuple */[0,
                        Pervasives["@"]
                         (b,
                          /* :: */[0,
                           J_helper[3][6]
                            (0,
                             0,
                             /* Some */[0,J_helper[3][7](0,0,Gen_util[3](match$21))],
                             e$1,
                             J_helper[3][7](0,0,Gen_util[3](match$20))),
                           0]),
                        /* Some */[0,E$4[3](0,v$5)]];
                
               }
             }
           else
            {exit$6=620;}
           }
         else
          {exit$6=620;}
         
         switch(exit$6)
          {case 620:
            return /* tuple */[0,
                    Pervasives["@"]
                     (b,
                      /* :: */[0,
                       J_helper[3][6]
                        (0,
                         0,
                         /* Some */[0,
                          J_helper[3][7](0,0,Gen_util[3](compile_lambda(cxt,f_br)))],
                         e$1,
                         J_helper[3][7](0,0,Gen_util[3](compile_lambda(cxt,t_br)))),
                       0]),
                    0];
            
           }
         }
       else
        {throw [0,Assert_failure,[0,"bytecomp/px.ml",1597,39]];}
       
      case 13:
       return Gen_util[5][1]
               (compile_lambda(/* record */[0,0,0,cxt[3],cxt[4]],lam[1]),
                compile_lambda(cxt,lam[2]));
       
      case 14:
       var match$22=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[1]);
       
       var match$23=match$22[2];
       
       if(match$23)
        {var
          block$1=
           Pervasives["@"]
            (match$22[1],
             /* :: */[0,
              S$2[13]
               (0,
                0,
                match$23[1],
                S$2[7]
                 (0,
                  0,
                  Gen_util[3]
                   (compile_lambda(/* record */[0,0,0,cxt[3],cxt[4]],lam[2])))),
              0]);
         
         if(typeof st=="number")
          {switch(st)
            {case 0:
              if(should_return!=0)
               {return /* tuple */[0,
                        Pervasives["@"](block$1,/* :: */[0,S$2[19](0,0,0),0]),
                        0];
                }
              else
               {return /* tuple */[0,block$1,0];}
              
             case 1:return /* tuple */[0,block$1,/* Some */[0,E$4[23](0,0)]];
             }}
         else
          {switch(st[0])
            {case 0:
              return /* tuple */[0,
                      Pervasives["@"]
                       (block$1,/* :: */[0,J_helper[3][12](0,0,st[1]),0]),
                      0];
              
             case 1:
              return /* tuple */[0,
                      Pervasives["@"]
                       (block$1,/* :: */[0,J_helper[3][11](0,0,st[1]),0]),
                      0];
              
             }}
         }
       else
        {throw [0,Assert_failure,[0,"bytecomp/px.ml",1794,39]];}
       
      case 15:
       var id$1=lam[1];
       
       var match$24=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[2]);
       
       var match$25=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[3]);
       
       var match$26=match$24[2];
       
       var exit$8;
       
       if(match$26)
        {var match$27=match$25[2];
         
         if(match$27)
          {if(lam[4]!=0){var match$28=[0,24,8];}else{var match$28=[0,22,7];}
           
           var
            block$2=
             Pervasives["@"]
              (match$24[1],
               Pervasives["@"]
                (match$25[1],
                 /* :: */[0,
                  S$2[14]
                   (0,
                    0,
                    /* Some */[0,
                     E$4[13](0,match$28[1],E$4[3](0,id$1),match$27[1])],
                    /* Some */[0,E$4[14](0,match$28[2],E$4[3](0,id$1))],
                    /* Right */[1,
                     /* :: */[0,
                      /* tuple */[0,
                       id$1,
                       /* Some */[0,/* tuple */[0,match$26[1],0]]],
                      0]],
                    S$2[7]
                     (0,
                      0,
                      Gen_util[3]
                       (compile_lambda(/* record */[0,0,0,cxt[3],cxt[4]],lam[5])))),
                  0]));
           }
         else
          {exit$8=683;}
         }
       else
        {exit$8=683;}
       
       switch(exit$8)
        {case 683:throw [0,Assert_failure,[0,"bytecomp/px.ml",1830,40]];}
       
       var exit$9;
       
       if(typeof st=="number")
        {switch(st)
          {case 0:
            if(should_return!=0)
             {return /* tuple */[0,
                      Pervasives["@"](block$2,/* :: */[0,S$2[19](0,0,0),0]),
                      0];
              }
            else
             {return /* tuple */[0,block$2,0];}
            
           case 1:return /* tuple */[0,block$2,/* Some */[0,E$4[23](0,0)]];
           }}
       else
        {switch(st[0])
          {case 0:
            if(should_return!=0)
             {exit$9=677;}
            else
             {return /* tuple */[0,
                      Pervasives["@"]
                       (block$2,/* :: */[0,J_helper[3][12](0,0,st[1]),0]),
                      0];
              }
            
           case 1:
            if(should_return!=0)
             {exit$9=677;}
            else
             {return /* tuple */[0,
                      Pervasives["@"]
                       (block$2,/* :: */[0,J_helper[3][11](0,0,st[1]),0]),
                      0];
              }
            
           }}
       
       switch(exit$9)
        {case 677:
          if(should_return!=0)
           {return /* tuple */[0,/* :: */[0,S$2[18](0,0,lam),0],0];}
          else
           {throw [0,Match_failure,[0,"bytecomp/px.ml",1831,31]];}
          
         }
       
      case 16:
       var match$29=compile_lambda(/* record */[0,1,0,cxt[3],cxt[4]],lam[2]);
       
       var match$30=match$29[2];
       
       if(match$30)
        {var
          block$3=
           Pervasives["@"]
            (match$29[1],
             /* :: */[0,J_helper[3][10](0,0,lam[1],match$30[1]),0]);
         }
       else
        {throw [0,Assert_failure,[0,"bytecomp/px.ml",1856,40]];}
       
       var exit$10;
       
       if(typeof st=="number")
        {switch(st)
          {case 0:
            if(should_return!=0)
             {return /* tuple */[0,
                      Pervasives["@"](block$3,/* :: */[0,S$2[19](0,0,0),0]),
                      0];
              }
            else
             {return /* tuple */[0,block$3,0];}
            
           case 1:return /* tuple */[0,block$3,/* Some */[0,E$4[23](0,0)]];
           }}
       else
        {switch(st[0])
          {case 0:
            if(should_return!=0)
             {exit$10=686;}
            else
             {return /* tuple */[0,
                      Pervasives["@"]
                       (block$3,/* :: */[0,J_helper[3][12](0,0,st[1]),0]),
                      0];
              }
            
           case 1:
            if(should_return!=0)
             {exit$10=686;}
            else
             {return /* tuple */[0,
                      Pervasives["@"]
                       (block$3,/* :: */[0,J_helper[3][11](0,0,st[1]),0]),
                      0];
              }
            
           }}
       
       switch(exit$10)
        {case 686:
          if(should_return!=0)
           {return /* tuple */[0,/* :: */[0,S$2[18](0,0,lam),0],0];}
          else
           {throw [0,Match_failure,[0,"bytecomp/px.ml",1857,31]];}
          
         }
       
      case 17:
       return /* tuple */[0,
               /* :: */[0,S$2[18](0,0,lam),0],
               /* Some */[0,E$4[23](0,0)]];
       
      case 18:return compile_lambda(cxt,lam[1]);
      case 19:return compile_lambda(cxt,lam[2]);
      }
    };

var
 compile_group=
  function(env,x)
   {switch(x)
     {case 0:
       var match=x[1];
       
       return compile_lambda
               (/* record */[0,
                 /* Declare */[0,match[2]],
                 0,
                 Compile_defs[2],
                 env],
                match[3]);
       
      case 1:
       return Gen_util[10]
               (List["map"]
                 (function(param)
                   {return compile_lambda
                            (/* record */[0,
                              /* Declare */[0,param[1]],
                              0,
                              Compile_defs[2],
                              env],
                             param[2]);
                    },
                  x[1]));
       
      case 2:
       return compile_lambda(/* record */[0,0,0,Compile_defs[2],env],x[1]);
      }
    };

var
 flat=
  function(acc,lam)
   {switch(lam)
     {case 4:
       return flat
               (/* :: */[0,
                 /* Single */[0,/* tuple */[0,lam[1],lam[2],lam[3]]],
                 acc],
                lam[4]);
       
      case 5:
       return flat
               (/* :: */[0,
                 /* Recursive */[1,
                  List["map"]
                   (function(param){return /* tuple */[0,param[1],param[2]];},
                    lam[1])],
                 acc],
                lam[2]);
       
      case 13:return flat(flat(acc,lam[1]),lam[2]);
      default:return /* :: */[0,/* Nop */[2,lam],acc];}
    };

var
 compile=
  function(env,lam)
   {var $$exports$1=Translmod["get_export_identifiers"](0);
    
    var match=Translmod["reset"](0);
    
    var match$1=Gen_of_env[5](0);
    
    var lam$1=Optimizer[1]($$exports$1,Simplif["simplify_exits"](lam));
    
    var exit;
    
    switch(lam$1)
     {case 6:
       var $js=lam$1[1];
       if(typeof $js=="number")
        {switch($js){}}
       else
        {switch($js[0])
          {case 4:
            var match$2=lam$1[2];
            
            if(match$2)
             {if(match$2[2])
               {exit=588;}
              else
               {var match$3=flat(0,match$2[1]);
                
                var exit$1;
                
                if(match$3)
                 {var match$4=match$3[1];
                  
                  switch(match$4)
                   {case 0:exit$1=586;
                    case 1:exit$1=586;
                    case 2:
                     var match$5=match$4[1];
                     
                     switch(match$5)
                      {case 6:
                        var $js$1=match$5[1];
                        if(typeof $js$1=="number")
                         {switch($js$1){}}
                        else
                         {switch($js$1[0])
                           {case 5:
                             var
                              defs=
                               Gen_util[10]
                                (List["map"]
                                  (function(group){return compile_group(env,group);},
                                   List["rev"](match$3[2])));
                             
                             var
                              match$6=
                               List["split"]
                                (List["map"]
                                  (function(lam$2)
                                    {var
                                      match$7=
                                       compile_lambda
                                        (/* record */[0,1,0,Compile_defs[2],env],lam$2);
                                     
                                     var match$8=match$7[2];
                                     
                                     if(match$8)
                                      {return /* tuple */[0,match$7[1],match$8[1]];}
                                     else
                                      {throw [0,Assert_failure,[0,"bytecomp/px.ml",2006,57]];}
                                     },
                                   match$5[2]));
                             
                             return Gen_util[5][1]
                                     (Gen_util[5][1]
                                       (Gen_util[5][1]
                                         (Gen_util[5][1]
                                           (/* tuple */[0,
                                             /* :: */[0,
                                              J_helper[3][4](0,"Generated CODE, PLEASE EDIT WITH CARE "),
                                              0],
                                             0],
                                            /* tuple */[0,Gen_of_env[2](0),0]),
                                          /* tuple */[0,List["concat"](match$6[1]),0]),
                                        defs),
                                      /* tuple */[0,
                                       /* :: */[0,Gen_util[2]($$exports$1,match$6[2]),0],
                                       0]);
                             
                            default:exit$1=586;}}
                        
                       default:exit$1=586;}
                     
                    }
                  }
                else
                 {exit$1=586;}
                
                switch(exit$1){case 586:throw Not_a_module;}
                }
              }
            else
             {exit=588;}
            
           default:exit=588;}}
       
      default:exit=588;}
    
    switch(exit){case 588:throw Not_a_module;}
    };

var
 lambda_as_module=
  function(raw,env,filename,lam)
   {var
     out=
      Pervasives["open_out"]
       (Pervasives["^"](Filename["chop_extension"](filename),".js"));
    
    var js=compile(env,lam);
    
    var match=Gen_util[6](js,out);
    
    return Pervasives["close_out"](out);
    };

var match=(Printlambda["serialize_raw_js"][1]=lambda_as_module(1),0);

CamlinternalMod["update_mod"]
 ([0,[0,0,0]],Compile_lambda,[0,compile,lambda_as_module]);
var
 string_of_number=
  function(v)
   {if(v=Pervasives["infinity"])
     {return "Infinity";}
    else
     {if(v=Pervasives["neg_infinity"])
       {return "-Infinity";}
      else
       {if(v!=v)
         {return "NaN";}
        else
         {var vint=v;
          
          if(vint=v)
           {var
             div=
              function(n,i)
               {if(n!=0&&((n%10)=0))
                 {return div(n/10,1+i);}
                else
                 {if(i>2)
                   {return Printf["sprintf"]
                            ([0,[4,0,0,0,[12,101,[4,0,0,0,0]]],"%de%d"],n,i);
                    }
                  else
                   {return Pervasives["string_of_int"](vint);}
                  }
                };
            
            return div(vint,0);
            }
          else
           {var s1=Printf["sprintf"]([0,[8,9,0,[0,12],0],"%.12g"],v);
            
            if(v="unknown primitive:caml_float_of_string")
             {return s1;}
            else
             {var s2=Printf["sprintf"]([0,[8,9,0,[0,15],0],"%.15g"],v);
              
              if(v="unknown primitive:caml_float_of_string")
               {return s2;}
              else
               {return Printf["sprintf"]([0,[8,9,0,[0,18],0],"%.18g"],v);}
              }
            }
          }
        }
      }
    };

CamlinternalMod["update_mod"]([0,[0,0]],Js_pp_util,[0,string_of_number]);
var
 array_str1$1=
  $$Array["init"](256,function(i){return $$String["make"](1,Char["chr"](i));});

var
 array_conv$1=
  $$Array["init"]
   (16,function(i){return $$String["make"](1,"0123456789abcdef"[i]);});

var
 pp_string$1=
  function(f,s)
   {Pp[1](f,'"');
    var l=s["length"];
    
    for(var i=0;i<=l-1;i++)
     {var c=s[i];
      
      var exit;
      
      if(c>=34)
       {if(c!=92){if(c>=35){exit=742;}else{Pp[1](f,'\"')}}else{Pp[1](f,"\\")}}
      else
       {if(c!=10)
         {if(c>=32)
           {exit=742;}
          else
           {var c$1=c;
            
            Pp[1](f,"\u00"),
            Pp[1](f,array_conv$1[c$1>>>4]),
            Pp[1](f,array_conv$1[c$1&15])}
          }
        else
         {Pp[1](f,"\n")}
        }
      
      switch(exit){case 742:Pp[1](f,array_str1$1[c])}
      }
    
    return Pp[1](f,'"');
    };

var
 json=
  function(f,param)
   {if("unknown primitive:isint")
     {return Pp[1](f,"null");}
    else
     {var variant=param[1];
      
      if(variant!=65)
       {if(variant>=365180284)
         {if(variant>=737456202)
           {if(param[2]!=0)
             {return Pp[1](f,"true");}
            else
             {return Pp[1](f,"false");}
            }
          else
           {var s=Js_pp_util[1](param[2]);return Pp[1](f,s);}
          }
        else
         {if(variant>=79)
           {Pp[7](f,1);
            Pp[1](f,"{");
            property_name_and_value_list(f,param[2]);
            Pp[1](f,"}");
            return Pp[8](f);
            }
          else
           {return pp_string$1(f,param[2]);}
          }
        }
      else
       {Pp[7](f,1);
        Pp[1](f,"[");
        element_list(f,param[2]);
        Pp[1](f,"]");
        return Pp[8](f);
        }
      }
    };

var
 property_name_and_value_list=
  function(f,l)
   {if(l)
     {var r=l[2];
      
      var match$1=l[1];
      
      var e=match$1[2];
      
      var s=match$1[1];
      
      if(r)
       {Pp[7](f,0);
        pp_string$1(f,s);
        Pp[1](f,":");
        Pp[3](f);
        json(f,e);
        Pp[8](f);
        Pp[1](f,",");
        Pp[3](f);
        return property_name_and_value_list(f,r);
        }
      else
       {Pp[7](f,0);
        pp_string$1(f,s);
        Pp[1](f,":");
        Pp[3](f);
        json(f,e);
        return Pp[8](f);
        }
      }
    else
     {return 0;}
    };

var
 element_list=
  function(f,el)
   {if(el)
     {var r=el[2];
      
      var e=el[1];
      
      if(r)
       {Pp[7](f,0);
        json(f,e);
        Pp[8](f);
        Pp[1](f,",");
        Pp[3](f);
        return element_list(f,r);
        }
      else
       {Pp[7](f,0);json(f,e);return Pp[8](f);}
      }
    else
     {return 0;}
    };

CamlinternalMod["update_mod"]([0,[0,0]],Json,[0,json]);
var Real_reference="unknown primitive:caml_set_oo_id";

var
 eliminate_ref=
  function(id,lam)
   {switch(lam)
     {case 0:
       if(Ident["same"](lam[1],id)){throw Real_reference;}else{return lam;}
      case 1:return lam;
      case 2:
       return /* Lapply */[2,
               eliminate_ref(id,lam[1]),
               List["map"](eliminate_ref(id),lam[2]),
               lam[3]];
       
      case 3:
       if(Lambda["IdentSet"][3](id,Lambda["free_variables"](lam)))
        {throw Real_reference;}
       else
        {return lam;}
       
      case 4:
       return /* Llet */[4,
               lam[1],
               lam[2],
               eliminate_ref(id,lam[3]),
               eliminate_ref(id,lam[4])];
       
      case 5:
       return /* Lletrec */[5,
               List["map"]
                (function(param)
                  {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                 lam[1]),
               eliminate_ref(id,lam[2])];
       
      case 6:
       var p=lam[1];
       
       var exit;
       
       if(typeof p=="number")
        {switch(p){}}
       else
        {switch(p[0])
          {case 6:
            if(p[1]!=0)
             {exit=829;}
            else
             {var match$1=lam[2];
              
              if(match$1)
               {var match$2=match$1[1];
                
                switch(match$2)
                 {case 0:
                   if(match$1[2])
                    {exit=829;}
                   else
                    {if(Ident["same"](match$2[1],id))
                      {return /* Lvar */[0,id];}
                     else
                      {exit=829;}
                     }
                   
                  default:exit=829;}
                }
              else
               {exit=829;}
              }
            
           case 7:
            if(p[1]!=0)
             {exit=829;}
            else
             {var match$3=lam[2];
              
              if(match$3)
               {var match$4=match$3[1];
                
                switch(match$4)
                 {case 0:
                   var match$5=match$3[2];
                   
                   if(match$5)
                    {if(match$5[2])
                      {exit=829;}
                     else
                      {if(Ident["same"](match$4[1],id))
                        {return /* Lassign */[16,id,eliminate_ref(id,match$5[1])];}
                       else
                        {exit=829;}
                       }
                     }
                   else
                    {exit=829;}
                   
                  default:exit=829;}
                }
              else
               {exit=829;}
              }
            
           case 15:
            var match$6=lam[2];
            
            if(match$6)
             {var match$7=match$6[1];
              
              switch(match$7)
               {case 0:
                 if(match$6[2])
                  {exit=829;}
                 else
                  {if(Ident["same"](match$7[1],id))
                    {return /* Lassign */[16,
                             id,
                             /* Lprim */[6,
                              /* Poffsetint */[14,p[1]],
                              /* :: */[0,/* Lvar */[0,id],0]]];
                     }
                   else
                    {exit=829;}
                   }
                 
                default:exit=829;}
              }
            else
             {exit=829;}
            
           default:exit=829;}}
       
       switch(exit)
        {case 829:
          return /* Lprim */[6,p,List["map"](eliminate_ref(id),lam[2])];
         }
       
      case 7:
       var sw=lam[2];
       
       return /* Lswitch */[7,
               eliminate_ref(id,lam[1]),
               /* record */[0,
                sw[1],
                List["map"]
                 (function(param)
                   {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                  sw[2]),
                sw[3],
                List["map"]
                 (function(param)
                   {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                  sw[4]),
                Misc["may_map"](eliminate_ref(id),sw[5])]];
       
      case 8:
       return /* Lstringswitch */[8,
               eliminate_ref(id,lam[1]),
               List["map"]
                (function(param)
                  {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                 lam[2]),
               Misc["may_map"](eliminate_ref(id),lam[3])];
       
      case 9:
       return /* Lstaticraise */[9,
               lam[1],
               List["map"](eliminate_ref(id),lam[2])];
       
      case 10:
       return /* Lstaticcatch */[10,
               eliminate_ref(id,lam[1]),
               lam[2],
               eliminate_ref(id,lam[3])];
       
      case 11:
       return /* Ltrywith */[11,
               eliminate_ref(id,lam[1]),
               lam[2],
               eliminate_ref(id,lam[3])];
       
      case 12:
       return /* Lifthenelse */[12,
               eliminate_ref(id,lam[1]),
               eliminate_ref(id,lam[2]),
               eliminate_ref(id,lam[3])];
       
      case 13:
       return /* Lsequence */[13,
               eliminate_ref(id,lam[1]),
               eliminate_ref(id,lam[2])];
       
      case 14:
       return /* Lwhile */[14,
               eliminate_ref(id,lam[1]),
               eliminate_ref(id,lam[2])];
       
      case 15:
       return /* Lfor */[15,
               lam[1],
               eliminate_ref(id,lam[2]),
               eliminate_ref(id,lam[3]),
               lam[4],
               eliminate_ref(id,lam[5])];
       
      case 16:return /* Lassign */[16,lam[1],eliminate_ref(id,lam[2])];
      case 17:
       return /* Lsend */[17,
               lam[1],
               eliminate_ref(id,lam[2]),
               eliminate_ref(id,lam[3]),
               List["map"](eliminate_ref(id),lam[4]),
               lam[5]];
       
      case 18:return /* Levent */[18,eliminate_ref(id,lam[1]),lam[2]];
      case 19:return /* Lifused */[19,lam[1],eliminate_ref(id,lam[2])];
      }
    };

var
 beta_reduce=
  function(params,body,args)
   {return List["fold_left2"]
            (function(l,param,arg){return /* Llet */[4,0,param,arg,l];},
             body,
             params,
             args);
    };

var
 simplify_lets=
  function(export_defs,lam)
   {var optimize=Clflags["native_code"][1]||!Clflags["debug"][1];
    
    var occ=Hashtbl["create"](0,83);
    
    var
     count_var=
      function(v)
       {try
         {return Hashtbl["find"](occ,v)[1];}
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        };
    
    var
     bind_var=
      function(bv,v)
       {var r=[0,0];Hashtbl["add"](occ,v,r);return Tbl["add"](v,r,bv);};
    
    var
     use_var=
      function(bv,v,n)
       {try
         {var r=Tbl["find"](v,bv);return r[1]=r[1]+n,0;}
        catch(exn)
         {if(exn=Not_found)
           {try
             {var r$1=Hashtbl["find"](occ,v);return r$1[1]=r$1[1]+2,0;}
            catch(exn$1){if(exn$1=Not_found){return 0;}else{throw exn$1;}}
            }
          else
           {throw exn;}
          }
        };
    
    var
     count=
      function(bv,param)
       {var exit;
        
        switch(param)
         {case 0:return use_var(bv,param[1],1);
          case 1:return 0;
          case 2:
           var l1=param[1];
           
           var exit$1;
           
           switch(l1)
            {case 3:
              if(l1[1]!=0)
               {var match$1=param[2];
                
                if(match$1)
                 {var match$2=match$1[1];
                  
                  switch(match$2)
                   {case 6:
                     var $js=match$2[1];
                     if(typeof $js=="number")
                      {switch($js){}}
                     else
                      {switch($js[0])
                        {case 5:
                          if(match$1[2])
                           {exit$1=787;}
                          else
                           {var args=match$2[2];
                            
                            var params=l1[2];
                            
                            if(optimize&&(List["length"](params)=List["length"](args)))
                             {return count(bv,beta_reduce(params,l1[3],args));}
                            else
                             {exit$1=787;}
                            }
                          
                         default:exit$1=787;}}
                     
                    default:exit$1=787;}
                  }
                else
                 {exit$1=787;}
                }
              else
               {var args$1=param[2];
                
                var params$1=l1[2];
                
                if
                 (optimize&&(List["length"](params$1)=List["length"](args$1)))
                 {return count(bv,beta_reduce(params$1,l1[3],args$1));}
                else
                 {exit$1=787;}
                }
              
             default:exit$1=787;}
           
           switch(exit$1)
            {case 787:count(bv,l1);return List["iter"](count(bv),param[2]);}
           
          case 3:return count(Tbl["empty"],param[3]);
          case 4:
           var l1$1=param[3];
           
           var v=param[2];
           
           var exit$2;
           
           switch(l1$1)
            {case 0:
              if(optimize)
               {count(bind_var(bv,v),param[4]);
                return use_var(bv,l1$1[1],count_var(v));
                }
              else
               {exit$2=788;}
              
             default:exit$2=788;}
           
           switch(exit$2)
            {case 788:
              count(bind_var(bv,v),param[4]);
              if((param[1]=0)||count_var(v)>0)
               {return count(bv,l1$1);}
              else
               {return 0;}
              
             }
           
          case 5:
           List["iter"]
            (function(param$1){return count(bv,param$1[2]);},param[1]);
           return count(bv,param[2]);
           
          case 6:exit=789;
          case 7:
           var sw=param[2];
           
           count_default(bv,sw);
           count(bv,param[1]);
           List["iter"](function(param$1){return count(bv,param$1[2]);},sw[2]);
           return List["iter"]
                   (function(param$1){return count(bv,param$1[2]);},sw[4]);
           
          case 8:
           var d=param[3];
           
           var sw$1=param[2];
           
           count(bv,param[1]);
           List["iter"](function(param$1){return count(bv,param$1[2]);},sw$1);
           if(d)
            {var d$1=d[1];
             
             var exit$3;
             
             if(sw$1)
              {if(sw$1[2])
                {count(bv,d$1);return count(bv,d$1);}
               else
                {exit$3=782;}
               }
             else
              {exit$3=782;}
             
             switch(exit$3){case 782:return count(bv,d$1);}
             }
           else
            {return 0;}
           
          case 9:exit=789;
          case 10:exit=790;
          case 11:exit=790;
          case 12:
           count(bv,param[1]);count(bv,param[2]);return count(bv,param[3]);
          case 13:count(bv,param[1]);return count(bv,param[2]);
          case 14:
           count(Tbl["empty"],param[1]);return count(Tbl["empty"],param[2]);
          case 15:
           count(bv,param[2]);
           count(bv,param[3]);
           return count(Tbl["empty"],param[5]);
           
          case 16:return count(bv,param[2]);
          case 17:
           return List["iter"]
                   (count(bv),
                    /* :: */[0,param[2],/* :: */[0,param[3],param[4]]]);
           
          case 18:return count(bv,param[1]);
          case 19:
           if(count_var(param[1])>0)
            {return count(bv,param[2]);}
           else
            {return 0;}
           
          }
        
        switch(exit)
         {case 789:return List["iter"](count(bv),param[2]);
          case 790:count(bv,param[1]);return count(bv,param[3]);
          }
        };
    
    var
     count_default=
      function(bv,sw)
       {var match$1=sw[5];
        
        if(match$1)
         {var al=match$1[1];
          
          var nconsts=List["length"](sw[2]);
          
          var nblocks=List["length"](sw[4]);
          
          if(nconsts<sw[1]&&nblocks<sw[3])
           {count(bv,al);return count(bv,al);}
          else
           {if(nconsts<sw[1]||nblocks<sw[3])
             {}
            else
             {throw [0,Assert_failure,[0,"bytecomp/px.ml",2467,50]];}
            
            return count(bv,al);
            }
          }
        else
         {return 0;}
        };
    
    count(Tbl["empty"],lam);
    var subst=Hashtbl["create"](0,83);
    
    var
     mklet=
      function(param)
       {var e2=param[4];
        
        var e1=param[3];
        
        var v=param[2];
        
        var exit;
        
        switch(e2)
         {case 0:
           if(optimize&&Ident["same"](v,e2[1])&&!List["mem"](v,export_defs))
            {return e1;}
           else
            {exit=774;}
           
          default:exit=774;}
        
        switch(exit){case 774:return /* Llet */[4,param[1],v,e1,e2];}
        };
    
    var
     simplif=
      function(l)
       {switch(l)
         {case 0:
           try
            {return Hashtbl["find"](subst,l[1]);}
           catch(exn){if(exn=Not_found){return l;}else{throw exn;}}
           
          case 1:return l;
          case 2:
           var l1=l[1];
           
           var exit;
           
           switch(l1)
            {case 3:
              if(l1[1]!=0)
               {var match$1=l[2];
                
                if(match$1)
                 {var match$2=match$1[1];
                  
                  switch(match$2)
                   {case 6:
                     var $js=match$2[1];
                     if(typeof $js=="number")
                      {switch($js){}}
                     else
                      {switch($js[0])
                        {case 5:
                          if(match$1[2])
                           {exit=769;}
                          else
                           {var args=match$2[2];
                            
                            var params=l1[2];
                            
                            if(optimize&&(List["length"](params)=List["length"](args)))
                             {return simplif(beta_reduce(params,l1[3],args));}
                            else
                             {exit=769;}
                            }
                          
                         default:exit=769;}}
                     
                    default:exit=769;}
                  }
                else
                 {exit=769;}
                }
              else
               {var args$1=l[2];
                
                var params$1=l1[2];
                
                if
                 (optimize&&(List["length"](params$1)=List["length"](args$1)))
                 {return simplif(beta_reduce(params$1,l1[3],args$1));}
                else
                 {exit=769;}
                }
              
             default:exit=769;}
           
           switch(exit)
            {case 769:
              return /* Lapply */[2,
                      simplif(l1),
                      List["map"](simplif,l[2]),
                      l[3]];
              
             }
           
          case 3:return /* Lfunction */[3,l[1],l[2],simplif(l[3])];
          case 4:
           var str$1=l[1];
           
           var exit$1;
           
           var match$3=l[3];
           
           switch(match$3)
            {case 0:
              var v=l[2];
              
              if(optimize&&!List["mem"](v,export_defs))
               {Hashtbl["add"](subst,v,simplif(/* Lvar */[0,match$3[1]]));
                return simplif(l[4]);
                }
              else
               {exit$1=771;}
              
             default:exit$1=771;}
           
           switch(exit$1)
            {case 771:
              switch(str$1[0])
               {case 0:
                 var match$4=l[3];
                 
                 switch(match$4)
                  {case 6:
                    var match$5=match$4[1];
                    
                    if(typeof match$5=="number")
                     {switch(match$5){}}
                    else
                     {switch(match$5[0])
                       {case 5:
                         if(match$5[1]!=0)
                          {"unknown block:(exit 770)";}
                         else
                          {if(match$5[3]!=0)
                            {var match$6=match$4[2];
                             
                             if(match$6)
                              {if(match$6[2])
                                {"unknown block:(exit 770)";}
                               else
                                {if(optimize)
                                  {var v$1=l[2];
                                   
                                   var slinit=simplif(match$6[1]);
                                   
                                   var slbody=simplif(l[4]);
                                   
                                   try
                                    {return mklet
                                             (/* tuple */[0,3,v$1,slinit,eliminate_ref(v$1,slbody)]);
                                     }
                                   catch(exn$1)
                                    {if(exn$1=Real_reference)
                                      {return mklet
                                               (/* tuple */[0,
                                                 0,
                                                 v$1,
                                                 /* Lprim */[6,
                                                  /* Pmakeblock */[5,0,match$5[2],1],
                                                  /* :: */[0,slinit,0]],
                                                 slbody]);
                                       }
                                     else
                                      {throw exn$1;}
                                     }
                                   }
                                 else
                                  {"unknown block:(exit 770)";}
                                 }
                               }
                             else
                              {"unknown block:(exit 770)";}
                             }
                           else
                            {"unknown block:(exit 770)";}
                           }
                         
                        default:"unknown block:(exit 770)";}}
                    
                   default:"unknown block:(exit 770)";}
                 
                case 1:
                 var l2=l[4];
                 
                 var l1$1=l[3];
                 
                 var v$2=l[2];
                 
                 var n=count_var(v$2);
                 
                 var exit$2;
                 
                 if(n!=0)
                  {if(n!=1)
                    {exit$2=757;}
                   else
                    {if(optimize&&!List["mem"](v$2,export_defs))
                      {Hashtbl["add"](subst,v$2,simplif(l1$1));
                       return simplif(l2);
                       }
                     else
                      {exit$2=757;}
                     }
                   }
                 else
                  {return simplif(l2);}
                 
                 switch(exit$2)
                  {case 757:
                    return /* Llet */[4,1,v$2,simplif(l1$1),simplif(l2)];
                   }
                 
                case 2:
                 var l2$1=l[4];
                 
                 var v$3=l[2];
                 
                 var n$1=count_var(v$3);
                 
                 if(n$1!=0)
                  {return mklet
                           (/* tuple */[0,1,v$3,simplif(l[3]),simplif(l2$1)]);
                   }
                 else
                  {return simplif(l2$1);}
                 
                case 3:"unknown block:(exit 770)";
                }
              
             case 770:
              return mklet
                      (/* tuple */[0,str$1,l[2],simplif(l[3]),simplif(l[4])]);
              
             }
           
          case 5:
           return /* Lletrec */[5,
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],simplif(param[2])];},
                     l[1]),
                   simplif(l[2])];
           
          case 6:return /* Lprim */[6,l[1],List["map"](simplif,l[2])];
          case 7:
           var sw=l[2];
           
           var new_l=simplif(l[1]);
           
           var
            new_consts=
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],simplif(param[2])];},
               sw[2]);
           
           var
            new_blocks=
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],simplif(param[2])];},
               sw[4]);
           
           var new_fail=Misc["may_map"](simplif,sw[5]);
           
           return /* Lswitch */[7,
                   new_l,
                   /* record */[0,sw[1],new_consts,sw[3],new_blocks,new_fail]];
           
          case 8:
           return /* Lstringswitch */[8,
                   simplif(l[1]),
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],simplif(param[2])];},
                     l[2]),
                   Misc["may_map"](simplif,l[3])];
           
          case 9:return /* Lstaticraise */[9,l[1],List["map"](simplif,l[2])];
          case 10:
           var match$7=l[2];
           
           return /* Lstaticcatch */[10,
                   simplif(l[1]),
                   /* tuple */[0,match$7[1],match$7[2]],
                   simplif(l[3])];
           
          case 11:return /* Ltrywith */[11,simplif(l[1]),l[2],simplif(l[3])];
          case 12:
           return /* Lifthenelse */[12,
                   simplif(l[1]),
                   simplif(l[2]),
                   simplif(l[3])];
           
          case 13:
           var l1$2=l[1];
           
           switch(l1$2)
            {case 19:
              var l2$2=l[2];
              
              if(count_var(l1$2[1])>0)
               {return /* Lsequence */[13,simplif(l1$2[2]),simplif(l2$2)];}
              else
               {return simplif(l2$2);}
              
             default:return /* Lsequence */[13,simplif(l1$2),simplif(l[2])];}
           
          case 14:return /* Lwhile */[14,simplif(l[1]),simplif(l[2])];
          case 15:
           return /* Lfor */[15,
                   l[1],
                   simplif(l[2]),
                   simplif(l[3]),
                   l[4],
                   simplif(l[5])];
           
          case 16:return /* Lassign */[16,l[1],simplif(l[2])];
          case 17:
           return /* Lsend */[17,
                   l[1],
                   simplif(l[2]),
                   simplif(l[3]),
                   List["map"](simplif,l[4]),
                   l[5]];
           
          case 18:return /* Levent */[18,simplif(l[1]),l[2]];
          case 19:
           if(count_var(l[1])>0)
            {return simplif(l[2]);}
           else
            {return Lambda["lambda_unit"];}
           
          }
        };
    
    return simplif(lam);
    };

CamlinternalMod["update_mod"]([0,[0,0]],Optimizer,[0,simplify_lets]);
var spaces=$$String["make"](80,32);

var
 output=
  function(st,s,l)
   {try
     {var last=$$String["rindex_from"](s,l-1,10)+1;
      
      var line=0;
      
      for(var i=0;i<=l-1;i++){if(s[i]=10){line=1+line;}else{}}
      
      st[13]=st[13]+line,0,st[14]=l-last,0}
    catch(exn){if(exn=Not_found){st[14]=l+st[14],0}else{throw exn;}}
    
    st[15]=st[15]+s["length"],0;
    return st[16](s,0,l);
    };

var
 output_spaces=
  function(st,n)
   {output(st,spaces,Pervasives["min"](n,80));
    if(n>80){return output_spaces(st,n-80);}else{return 0;}
    };

var output_newline=function(st){return output(st,"\n",1);};

var
 flat_render=
  function(st,l)
   {if(l)
     {var match$1=l[1];
      
      var exit;
      
      if(typeof match$1=="number")
       {switch(match$1){case 0:exit=895;}}
      else
       {switch(match$1[0])
         {case 0:exit=896;
          case 1:exit=896;
          case 2:exit=895;
          case 3:
           var p=match$1[1];
           
           p[1]=st[13],0;
           p[2]=st[14],0;
           return flat_render(st,l[2]);
           
          }}
      
      switch(exit)
       {case 896:
         var s=match$1[1];
         
         output(st,s,s["length"]);
         return flat_render(st,l[2]);
         
        case 895:return flat_render(st,l[2]);
        }
      }
    else
     {return 0;}
    };

var
 push=
  function(st,e)
   {if(st[7]=0)
     {if(typeof e=="number")
       {switch(e)
         {case 0:
           st[2]=List["hd"](st[3])[1],0;
           st[1]=List["hd"](st[3])[2],0;
           return st[3]=List["tl"](st[3]),0;
           
          }}
      else
       {switch(e[0])
         {case 0:
           var s=e[1];
           
           output(st,s,s["length"]);
           return st[5]=st[5]+s["length"],0;
           
          case 1:
           output_newline(st);
           var indent=st[2]+e[2];
           
           st[1]=indent,0;
           output_spaces(st,indent);
           st[4]=Pervasives["max"](indent+60,78),0;
           return st[5]=st[1],0;
           
          case 2:
           st[7]=1,0;
           st[8]=st[4]-st[5],0;
           st[3]=/* :: */[0,/* tuple */[0,st[2],st[1]],st[3]],0;
           st[1]=st[1]+e[1],0;
           return st[2]=st[1],0;
           
          case 3:var p=e[1];p[1]=st[13],0;return p[2]=st[14],0;
          }}
      }
    else
     {st[6]=/* :: */[0,e,st[6]],0;
      var exit;
      
      if(typeof e=="number")
       {switch(e)
         {case 0:
           st[7]=st[7]-1,0;
           if(st[7]=0)
            {flat_render(st,List["rev"](st[6]));
             st[2]=List["hd"](st[3])[1],0;
             st[1]=List["hd"](st[3])[2],0;
             st[3]=List["tl"](st[3]),0;
             st[5]=st[5]+st[8],0;
             return st[6]=0,0;
             }
           else
            {return 0;}
           
          }}
      else
       {switch(e[0])
         {case 0:exit=888;
          case 1:exit=888;
          case 2:return st[7]=st[7]+1,0;
          case 3:return 0;
          }}
      
      switch(exit)
       {case 888:
         var w=st[8]-e[1]["length"];
         
         st[8]=w,0;
         if(w<0)
          {var l=List["rev"](st[6]);
           
           st[6]=0,0;
           st[7]=0,0;
           return List["iter"](function(e$1){return push(st,e$1);},l);
           }
         else
          {return 0;}
         
        }
      }
    };

var
 string=
  function(st,s)
   {if(st[9])
     {var len=s["length"];
      
      if(len!=0)
       {var match$1=st[11];
        
        if(match$1)
         {var sp=match$1[1];
          
          st[11]=0,0;
          var match$2=st[12];
          
          var match$3=st[10];
          
          var exit;
          
          if(match$2)
           {if(match$3)
             {if(match$3[1](match$2[1],s[0])){output(st,sp,1)}else{}}
            else
             {exit=877;}
            }
          else
           {exit=877;}
          
          switch(exit){case 877:if(match$3){}else{output(st,sp,1)}}
          }
        else
         {}
        
        output(st,s,len);
        return st[12]=/* Some */[0,s[len-1]],0;
        }
      else
       {return 0;}
      }
    else
     {return push(st,/* Text */[0,s]);}
    };

var
 genbreak=
  function(st,s,n)
   {if(!st[9]){return push(st,/* Break */[1,s,n]);}else{return 0;}};

var break_token=[1,"",0];

var
 $$break=
  function(st){if(!st[9]){return push(st,break_token);}else{return 0;}};

var break1=function(st){if(!st[9]){return push(st,[1,"",1]);}else{return 0;}};

var non_breaking_space_token=[0," "];

var
 non_breaking_space=
  function(st)
   {if(st[9])
     {return st[11]=[0," "],0;}
    else
     {return push(st,non_breaking_space_token);}
    };

var
 space=
  function($staropt$star,st)
   {if($staropt$star){var indent=$staropt$star[1];}else{var indent=0;}
    
    if(st[9])
     {return st[11]=[0,"\n"],0;}
    else
     {return push(st,/* Break */[1," ",indent]);}
    };

var
 start_group=
  function(st,n)
   {if(!st[9]){return push(st,/* Start_group */[2,n]);}else{return 0;}};

var end_group=function(st){if(!st[9]){return push(st,0);}else{return 0;}};

var total=function(t){return t[15];};

var
 pos=
  function(t)
   {if(t[9])
     {return /* record */[0,t[13],t[14]];}
    else
     {var p=/* record */[0,-1,-1];push(t,/* Set_pos */[3,p]);return p;}
    };

var
 newline=
  function(st)
   {output_newline(st);
    st[1]=0,0;
    st[2]=0,0;
    st[3]=0,0;
    st[5]=0,0;
    st[6]=0,0;
    st[7]=0,0;
    return st[8]=0,0;
    };

var output_substring=Pervasives["output"];

var output_substring$1=Pervasives["output_substring"];

var
 to_out_channel=
  function(ch)
   {return /* record */[0,
            0,
            0,
            0,
            78,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            output_substring$1(ch)];
    };

var
 to_buffer=
  function(b)
   {return /* record */[0,
            0,
            0,
            0,
            78,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            function(s,i,l){return Buffer["add_substring"](b,s,i,l);}];
    };

var set_compact=function(st,v){return st[9]=v,0;};

var
 set_needed_space_function=
  function(st,f){return st[10]=/* Some */[0,f],0;};

CamlinternalMod["update_mod"]
 ([0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
  Pp,
  [0,
   string,
   genbreak,
   $$break,
   break1,
   non_breaking_space,
   space,
   start_group,
   end_group,
   newline,
   to_out_channel,
   to_buffer,
   pos,
   total,
   set_compact,
   set_needed_space_function]);
var
 string_of_mapping=
  function(mapping)
   {var a$1=$$Array["of_list"](mapping);
    
    var len=a$1["length"];
    
    $$Array["stable_sort"]
     (function(t1,t2)
       {var n="unknown primitive:caml_int_compare";
        
        if(n!=0){return n;}else{return "unknown primitive:caml_int_compare";}
        },
      a$1);
    var buf=Buffer["create"](1024);
    
    var gen_line=[0,0];
    
    var gen_col=[0,0];
    
    var ori_source=[0,0];
    
    var ori_line=[0,0];
    
    var ori_col=[0,0];
    
    var ori_name=[0,0];
    
    var
     loop=
      function(prev,i)
       {if(i<len)
         {var c=a$1[i];
          
          if
           (prev>=
            0&&
            (c[3]=a$1[prev][3])&&
            (c[4]=a$1[prev][4])&&
            (c[5]=a$1[prev][5]))
           {return loop(prev,i+1);}
          else
           {if(i+1<len&&(c[1]=a$1[i+1][1])&&(c[2]=a$1[i+1][2]))
             {return loop(prev,i+1);}
            else
             {if(gen_line[1]!=c[1])
               {if(gen_line[1]<c[1])
                 {}
                else
                 {throw [0,Assert_failure,[0,"bytecomp/px.ml",5743,69]];}
                
                for(var _i=gen_line[1];_i<=c[1]-1;_i++)
                 {Buffer["add_char"](buf,59)}
                
                gen_col[1]=0,0,gen_line[1]=c[1],0}
              else
               {if(i>0){Buffer["add_char"](buf,44)}else{}}
              
              if(c[3]=-1)
               {var $js=0;}
              else
               {var match$1=c[6];
                
                if(match$1)
                 {var n=match$1[1];
                  
                  var n$prime=ori_name[1];
                  
                  ori_name[1]=n,0;
                  var $js$1=/* :: */[0,n-n$prime,0];
                  }
                else
                 {var $js$1=0;}
                var
                 $js=
                  /* :: */[0,
                   c[3]-ori_source[1],
                   /* :: */[0,
                    c[4]-ori_line[1],
                    /* :: */[0,c[5]-ori_col[1],$js$1]]];
                }
              var l=/* :: */[0,c[2]-gen_col[1],$js];
              
              gen_col[1]=c[2],0;
              if(c[3]!=-1)
               {ori_source[1]=c[3],0,ori_line[1]=c[4],0,ori_col[1]=c[5],0}
              else
               {}
              
              Vlq64[1](buf,l);
              return loop(i,i+1);
              }
            }
          }
        else
         {return 0;}
        };
    
    loop(-1,0);
    return Buffer["contents"](buf);
    };

var
 json$1=
  function(t)
   {var match$1=t[3];
    
    var match$2=t[5];
    
    return /* `O */[0,
            79,
            /* :: */[0,
             /* tuple */[0,"version",/* `Float */[0,365180284,t[1]]],
             /* :: */[0,
              /* tuple */[0,"file",/* `String */[0,-976970511,t[2]]],
              /* :: */[0,
               /* tuple */[0,
                "sourceRoot",
                /* `String */[0,-976970511,match$1?match$1[1]:""]],
               /* :: */[0,
                /* tuple */[0,
                 "names",
                 /* `A */[0,
                  65,
                  List["map"]
                   (function(s){return /* `String */[0,-976970511,s];},t[6])]],
                /* :: */[0,
                 /* tuple */[0,
                  "mappings",
                  /* `String */[0,-976970511,string_of_mapping(t[7])]],
                 /* :: */[0,
                  /* tuple */[0,
                   "sources",
                   /* `A */[0,
                    65,
                    List["map"]
                     (function(s){return /* `String */[0,-976970511,s];},t[4])]],
                  /* :: */[0,
                   /* tuple */[0,
                    "sourcesContent",
                    /* `A */[0,
                     65,
                     match$2
                      ?List["map"]
                        (function(param)
                          {if(param)
                            {return /* `String */[0,-976970511,param[1]];}
                           else
                            {return 870828711;}
                           },
                         match$2[1])
                      :0]],
                   0]]]]]]]];
    };

CamlinternalMod["update_mod"]([0,[0,0]],Source_map,[0,json$1]);
var code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

var a$1="unknown primitive:caml_make_vect";

for(var i=0;i<=code["length"]-1;i++){a$1[code[i]]=i,0}

var code_rev=a$1;

var vlq_base_shift=5;

var vlq_base=1<<vlq_base_shift;

var vlq_base_mask=vlq_base-1;

var toVLQSigned=function(v){if(v<0){return (-v<<1)+1;}else{return v<<1;}};

var
 fromVLQSigned=
  function(v)
   {var is_neg=(v&1)=1;
    
    var shift=v>>>1;
    
    if(is_neg){return -shift;}else{return shift;}
    };

var add_char=function(buf,x){return Buffer["add_char"](buf,code[x]);};

var
 encode$prime=
  function(buf,x)
   {var digit=x&vlq_base_mask;
    
    var rest=x>>>vlq_base_shift;
    
    if(rest=0)
     {return add_char(buf,digit);}
    else
     {add_char(buf,digit|vlq_base);return encode$prime(buf,rest);}
    };

var
 encode$1=
  function(b,x){var vql=toVLQSigned(x);return encode$prime(b,vql);};

var encode_l=function(b,l){return List["iter"](encode$1(b),l);};

var
 decode$prime=
  function(acc,s,start,pos$1)
   {var digit=code_rev[s[pos$1]];
    
    var cont=(digit&vlq_base)=vlq_base;
    
    var digit$1=digit&vlq_base_mask;
    
    var acc$1=acc+(digit$1<<(pos$1-start)*vlq_base_shift);
    
    if(cont)
     {return decode$prime(acc$1,s,start,1+pos$1);}
    else
     {return /* tuple */[0,acc$1,1+pos$1];}
    };

var
 decode$1=
  function(s,p)
   {var match$1=decode$prime(0,s,p,p);
    
    return /* tuple */[0,fromVLQSigned(match$1[1]),match$1[2]];
    };

var
 decode_pos=
  function(s)
   {var sl=s["length"];
    
    var
     aux=
      function(pos$1,acc)
       {if(List["length"](acc)>10)
         {throw [0,Assert_failure,[0,"bytecomp/px.ml",6e3,65]];}
        else
         {}
        
        var match$1=decode$1(s,pos$1);
        
        var i$1=match$1[2];
        
        var d=match$1[1];
        
        if(i$1=sl)
         {return List["rev"](/* :: */[0,d,acc]);}
        else
         {return aux(i$1,/* :: */[0,d,acc]);}
        };
    
    return aux(0,0);
    };

CamlinternalMod["update_mod"]([0,[0,0]],Vlq64,[0,encode_l]);
module["exports"]=
{"B64":B64,
 "Jlist":Jlist,
 "J":J,
 "Util":Util,
 "Lambda_util":Lambda_util,
 "Jident":Jident,
 "Gen_of_env":Gen_of_env,
 "Compile_defs":Compile_defs,
 "Compile_primitive":Compile_primitive,
 "Gen_util":Gen_util,
 "J_helper":J_helper,
 "Compile_lambda":Compile_lambda,
 "Js_pp_util":Js_pp_util,
 "Json":Json,
 "Optimizer":Optimizer,
 "Pp":Pp,
 "Pp_js":Pp_js,
 "Source_map":Source_map,
 "Vlq64":Vlq64};

