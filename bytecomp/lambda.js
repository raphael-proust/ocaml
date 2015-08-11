// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Printf=require("Printf");
var Set=require("Set");
var Misc=require("Misc");
var Filename=require("Filename");
var Location=require("Location");
var Ident=require("Ident");


var default_tag_info=2;

var default_pointer_info=0;

var const_unit=/* Const_pointer */[1,0,default_pointer_info];

var lambda_unit=/* Lconst */[1,const_unit];

var Not_simple="unknown primitive:caml_set_oo_id";

var max_raw=32;

var
 make_key=
  function(e)
   {var count=[0,0];
    
    var make_key$1=Ident["make_key_generator"](0);
    
    var
     tr_rec=
      function(env,e$1)
       {count[0]++;
        if(count[1]>max_raw){throw Not_simple;}else{}
        
        switch(e$1)
         {case 0:
           try
            {return Ident["find_same"](e$1[1],env);}
           catch(exn){if(exn=Not_found){return e$1;}else{throw exn;}}
           
          case 1:
           var match=e$1[1];
           
           var exit;
           
           switch(match)
            {case 0:switch(match[1]){case 2:exit=56;default:exit=57;}
             case 3:exit=56;
             default:exit=57;}
           
           switch(exit){case 57:return e$1;case 56:throw Not_simple;}
           
          case 2:
           return /* Lapply */[2,
                   tr_rec(env,e$1[1]),
                   tr_recs(env,e$1[2]),
                   Location["none"]];
           
          case 4:
           var str=e$1[1];
           
           if(str!=1)
            {var x=e$1[2];
             
             var ex=tr_rec(env,e$1[3]);
             
             var y=make_key$1(x);
             
             return /* Llet */[4,
                     str,
                     y,
                     ex,
                     tr_rec(Ident["add"](x,/* Lvar */[0,y],env),e$1[4])];
             }
           else
            {var ex$1=tr_rec(env,e$1[3]);
             
             return tr_rec(Ident["add"](e$1[2],ex$1,env),e$1[4]);
             }
           
          case 6:return /* Lprim */[6,e$1[1],tr_recs(env,e$1[2])];
          case 7:return /* Lswitch */[7,tr_rec(env,e$1[1]),tr_sw(env,e$1[2])];
          case 8:
           return /* Lstringswitch */[8,
                   tr_rec(env,e$1[1]),
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],tr_rec(env,param[2])];},
                     e$1[2]),
                   tr_opt(env,e$1[3])];
           
          case 9:return /* Lstaticraise */[9,e$1[1],tr_recs(env,e$1[2])];
          case 10:
           return /* Lstaticcatch */[10,
                   tr_rec(env,e$1[1]),
                   e$1[2],
                   tr_rec(env,e$1[3])];
           
          case 11:
           return /* Ltrywith */[11,
                   tr_rec(env,e$1[1]),
                   e$1[2],
                   tr_rec(env,e$1[3])];
           
          case 12:
           return /* Lifthenelse */[12,
                   tr_rec(env,e$1[1]),
                   tr_rec(env,e$1[2]),
                   tr_rec(env,e$1[3])];
           
          case 13:
           return /* Lsequence */[13,tr_rec(env,e$1[1]),tr_rec(env,e$1[2])];
          case 16:return /* Lassign */[16,e$1[1],tr_rec(env,e$1[2])];
          case 17:
           return /* Lsend */[17,
                   e$1[1],
                   tr_rec(env,e$1[2]),
                   tr_rec(env,e$1[3]),
                   tr_recs(env,e$1[4]),
                   Location["none"]];
           
          case 19:return /* Lifused */[19,e$1[1],tr_rec(env,e$1[2])];
          default:throw Not_simple;}
        };
    
    var tr_recs=function(env,es){return List["map"](tr_rec(env),es);};
    
    var
     tr_sw=
      function(env,sw)
       {return /* record */[0,
                sw[1],
                List["map"]
                 (function(param)
                   {return /* tuple */[0,param[1],tr_rec(env,param[2])];},
                  sw[2]),
                sw[3],
                List["map"]
                 (function(param)
                   {return /* tuple */[0,param[1],tr_rec(env,param[2])];},
                  sw[4]),
                tr_opt(env,sw[5])];
        };
    
    var
     tr_opt=
      function(env,param)
       {if(param){return /* Some */[0,tr_rec(env,param[1])];}else{return 0;}};
    
    try
     {return /* Some */[0,tr_rec(Ident["empty"],e)];}
    catch(exn){if(exn=Not_simple){return 0;}else{throw exn;}}
    };

var
 name_lambda=
  function(strict,arg,fn)
   {switch(arg)
     {case 0:return fn(arg[1]);
      default:
       var id=Ident["create"]("let");
       
       return /* Llet */[4,strict,id,arg,fn(id)];
       }
    };

var
 name_lambda_list=
  function(args,fn)
   {var
     name_list=
      function(names,param)
       {if(param)
         {var arg=param[1];
          
          switch(arg)
           {case 0:return name_list(/* :: */[0,arg,names],param[2]);
            default:
             var id=Ident["create"]("let");
             
             return /* Llet */[4,
                     0,
                     id,
                     arg,
                     name_list(/* :: */[0,/* Lvar */[0,id],names],param[2])];
             }
          }
        else
         {return fn(List["rev"](names));}
        };
    
    return name_list(0,args);
    };

var iter_opt=function(f,param){if(param){return f(param[1]);}else{return 0;}};

var
 iter=
  function(f,param)
   {var exit;
    
    switch(param)
     {case 0:exit=37;
      case 1:exit=37;
      case 2:f(param[1]);return List["iter"](f,param[2]);
      case 3:return f(param[3]);
      case 4:f(param[3]);return f(param[4]);
      case 5:
       f(param[2]);
       return List["iter"](function(param$1){return f(param$1[2]);},param[1]);
       
      case 6:exit=38;
      case 7:
       var sw=param[2];
       
       f(param[1]);
       List["iter"](function(param$1){return f(param$1[2]);},sw[2]);
       List["iter"](function(param$1){return f(param$1[2]);},sw[4]);
       return iter_opt(f,sw[5]);
       
      case 8:
       f(param[1]);
       List["iter"](function(param$1){return f(param$1[2]);},param[2]);
       return iter_opt(f,param[3]);
       
      case 9:exit=38;
      case 10:exit=39;
      case 11:exit=39;
      case 12:f(param[1]);f(param[2]);return f(param[3]);
      case 13:exit=40;
      case 14:exit=40;
      case 15:f(param[2]);f(param[3]);return f(param[5]);
      case 16:exit=41;
      case 17:
       return List["iter"]
               (f,/* :: */[0,param[2],/* :: */[0,param[3],param[4]]]);
       
      case 18:return f(param[1]);
      case 19:exit=41;
      }
    
    switch(exit)
     {case 38:return List["iter"](f,param[2]);
      case 39:f(param[1]);return f(param[3]);
      case 40:f(param[1]);return f(param[2]);
      case 41:return f(param[2]);
      case 37:return 0;
      }
    };

var compare=function(prim,prim$1){return "unknown primitive:caml_compare";};

var IdentSet=Set["Make"]([0,compare]);

var
 free_ids=
  function(get,l)
   {var fv=[0,IdentSet[1]];
    
    var
     free=
      function(l$1)
       {iter(free,l$1);
        fv[1]=List["fold_right"](IdentSet[4],get(l$1),fv[1]),0;
        var exit;
        
        switch(l$1)
         {case 3:
           return List["iter"]
                   (function(param){return fv[1]=IdentSet[6](param,fv[1]),0;},
                    l$1[2]);
           
          case 4:exit=33;
          case 5:
           return List["iter"]
                   (function(param)
                     {return fv[1]=IdentSet[6](param[1],fv[1]),0;},
                    l$1[1]);
           
          case 10:
           return List["iter"]
                   (function(id){return fv[1]=IdentSet[6](id,fv[1]),0;},
                    l$1[2][2]);
           
          case 11:exit=33;
          case 15:return fv[1]=IdentSet[6](l$1[1],fv[1]),0;
          case 16:return fv[1]=IdentSet[4](l$1[1],fv[1]),0;
          default:return 0;}
        
        switch(exit){case 33:return fv[1]=IdentSet[6](l$1[2],fv[1]),0;}
        };
    
    free(l);
    return fv[1];
    };

var
 free_variables=
  function(l)
   {return free_ids
            (function(param)
              {switch(param)
                {case 0:return /* :: */[0,param[1],0];default:return 0;}
               },
             l);
    };

var
 free_methods=
  function(l)
   {return free_ids
            (function(param)
              {var exit;
               
               switch(param)
                {case 17:
                  if(param[1]!=0)
                   {exit=28;}
                  else
                   {var match=param[2];
                    
                    switch(match)
                     {case 0:return /* :: */[0,match[1],0];default:exit=28;}
                    }
                  
                 default:exit=28;}
               
               switch(exit){case 28:return 0;}
               },
             l);
    };

var raise_count=[0,0];

var next_raise_count=function(param){raise_count[0]++;return raise_count[1];};

var negative_raise_count=[0,0];

var
 next_negative_raise_count=
  function(param){negative_raise_count[0]--;return negative_raise_count[1];};

var staticfail=[9,0,0];

var
 is_guarded=
  function(param)
   {var exit;
    
    switch(param)
     {case 4:return is_guarded(param[4]);
      case 12:
       var match=param[3];
       
       switch(match)
        {case 9:
          if(match[1]!=0){exit=22;}else{if(match[2]){exit=22;}else{return 1;}}
         default:exit=22;}
       
      case 18:return is_guarded(param[1]);
      default:exit=22;}
    
    switch(exit){case 22:return 0;}
    };

var
 patch_guarded=
  function(patch,param)
   {var exit;
    
    switch(param)
     {case 4:
       return /* Llet */[4,
               param[1],
               param[2],
               param[3],
               patch_guarded(patch,param[4])];
       
      case 12:
       var match=param[3];
       
       switch(match)
        {case 9:
          if(match[1]!=0)
           {exit=21;}
          else
           {if(match[2])
             {exit=21;}
            else
             {return /* Lifthenelse */[12,param[1],param[2],patch];}
            }
          
         default:exit=21;}
       
      case 18:return /* Levent */[18,patch_guarded(patch,param[1]),param[2]];
      default:exit=21;}
    
    switch(exit){case 21:return Misc["fatal_error"]("Lambda.patch_guarded");}
    };

var
 transl_normal_path=
  function(param)
   {switch(param)
     {case 0:
       var id=param[1];
       
       if(Ident["global"](id))
        {return /* Lprim */[6,/* Pgetglobal */[3,id],0];}
       else
        {return /* Lvar */[0,id];}
       
      case 1:
       return /* Lprim */[6,
               /* Pfield */[6,param[3]],
               /* :: */[0,transl_normal_path(param[1]),0]];
       
      case 2:return Misc["fatal_error"]("Lambda.transl_path");
      }
    };

var
 transl_path=
  function($staropt$star,env,path)
   {if($staropt$star)
     {var loc=$staropt$star[1];}
    else
     {var loc=Location["none"];}
    
    return transl_normal_path
            (Env["normalize_path"](/* Some */[0,loc],env,path));
    };

var
 make_sequence=
  function(fn,param)
   {if(param)
     {var rem=param[2];
      
      var x=param[1];
      
      if(rem)
       {var lam=fn(x);return /* Lsequence */[13,lam,make_sequence(fn,rem)];}
      else
       {return fn(x);}
      }
    else
     {return lambda_unit;}
    };

var
 subst_lambda=
  function(s,lam)
   {var
     subst=
      function(l)
       {switch(l)
         {case 0:
           try
            {return Ident["find_same"](l[1],s);}
           catch(exn){if(exn=Not_found){return l;}else{throw exn;}}
           
          case 1:return l;
          case 2:
           return /* Lapply */[2,subst(l[1]),List["map"](subst,l[2]),l[3]];
          case 3:return /* Lfunction */[3,l[1],l[2],subst(l[3])];
          case 4:return /* Llet */[4,l[1],l[2],subst(l[3]),subst(l[4])];
          case 5:
           return /* Lletrec */[5,List["map"](subst_decl,l[1]),subst(l[2])];
          case 6:return /* Lprim */[6,l[1],List["map"](subst,l[2])];
          case 7:
           var sw=l[2];
           
           return /* Lswitch */[7,
                   subst(l[1]),
                   /* record */[0,
                    sw[1],
                    List["map"](subst_case,sw[2]),
                    sw[3],
                    List["map"](subst_case,sw[4]),
                    subst_opt(sw[5])]];
           
          case 8:
           return /* Lstringswitch */[8,
                   subst(l[1]),
                   List["map"](subst_strcase,l[2]),
                   subst_opt(l[3])];
           
          case 9:return /* Lstaticraise */[9,l[1],List["map"](subst,l[2])];
          case 10:return /* Lstaticcatch */[10,subst(l[1]),l[2],subst(l[3])];
          case 11:return /* Ltrywith */[11,subst(l[1]),l[2],subst(l[3])];
          case 12:
           return /* Lifthenelse */[12,subst(l[1]),subst(l[2]),subst(l[3])];
          case 13:return /* Lsequence */[13,subst(l[1]),subst(l[2])];
          case 14:return /* Lwhile */[14,subst(l[1]),subst(l[2])];
          case 15:
           return /* Lfor */[15,l[1],subst(l[2]),subst(l[3]),l[4],subst(l[5])];
           
          case 16:return /* Lassign */[16,l[1],subst(l[2])];
          case 17:
           return /* Lsend */[17,
                   l[1],
                   subst(l[2]),
                   subst(l[3]),
                   List["map"](subst,l[4]),
                   l[5]];
           
          case 18:return /* Levent */[18,subst(l[1]),l[2]];
          case 19:return /* Lifused */[19,l[1],subst(l[2])];
          }
        };
    
    var
     subst_decl=
      function(param){return /* tuple */[0,param[1],subst(param[2])];};
    
    var
     subst_case=
      function(param){return /* tuple */[0,param[1],subst(param[2])];};
    
    var
     subst_strcase=
      function(param){return /* tuple */[0,param[1],subst(param[2])];};
    
    var
     subst_opt=
      function(param)
       {if(param){return /* Some */[0,subst(param[1])];}else{return 0;}};
    
    return subst(lam);
    };

var
 bind=
  function(str,$$var,exp,body)
   {var exit;
    
    switch(exp)
     {case 0:if(Ident["same"]($$var,exp[1])){return body;}else{exit=13;}
      default:exit=13;}
    
    switch(exit){case 13:return /* Llet */[4,str,$$var,exp,body];}
    };

var
 commute_comparison=
  function(param)
   {switch(param[0])
     {case 0:return 0;
      case 1:return 1;
      case 2:return 3;
      case 3:return 2;
      case 4:return 5;
      case 5:return 4;
      }
    };

var
 negate_comparison=
  function(param)
   {switch(param[0])
     {case 0:return 1;
      case 1:return 0;
      case 2:return 5;
      case 3:return 4;
      case 4:return 3;
      case 5:return 2;
      }
    };

var
 raise_kind=
  function(param)
   {switch(param[0])
     {case 0:return "raise";
      case 1:return "reraise";
      case 2:return "raise_notrace";
      }
    };

var
 lam_of_loc=
  function(kind,loc)
   {var loc_start=loc[1];
    
    var match=Location["get_pos_info"](loc_start);
    
    var cnum=match[3];
    
    var lnum=match[2];
    
    var file=match[1];
    
    var $$enum=loc[2][4]-loc_start[4]+cnum;
    
    switch(kind[0])
     {case 0:return /* Lconst */[1,/* Const_immstring */[4,file]];
      case 1:
       return /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,lnum]]];
      case 2:
       var filename=Filename["basename"](file);
       
       var name=Env["get_unit_name"](0);
       
       if("unknown primitive:caml_string_equal")
        {var module_name=Pervasives["^"]("//",Pervasives["^"](filename,"//"));
         }
       else
        {var module_name=name;}
       
       return /* Lconst */[1,/* Const_immstring */[4,module_name]];
       
      case 3:
       var
        loc$1=
         Printf["sprintf"]
          ([0,
            [11,
             "File ",
             [3,
              0,
              [11,
               ", line ",
               [4,0,0,0,[11,", characters ",[4,0,0,0,[12,45,[4,0,0,0,0]]]]]]]],
            "File %S, line %d, characters %d-%d"],
           file,
           lnum,
           cnum,
           $$enum);
       
       return /* Lconst */[1,/* Const_immstring */[4,loc$1]];
       
      case 4:
       return /* Lconst */[1,
               /* Const_block */[2,
                0,
                default_tag_info,
                /* :: */[0,
                 /* Const_immstring */[4,file],
                 /* :: */[0,
                  /* Const_base */[0,/* Const_int */[0,lnum]],
                  /* :: */[0,
                   /* Const_base */[0,/* Const_int */[0,cnum]],
                   /* :: */[0,/* Const_base */[0,/* Const_int */[0,$$enum]],0]]]]]];
       
      }
    };

var reset=function(param){return raise_count[1]=0,0;};

module["exports"]=
{"default_tag_info":default_tag_info,
 "default_pointer_info":default_pointer_info,
 "make_key":make_key,
 "const_unit":const_unit,
 "lambda_unit":lambda_unit,
 "name_lambda":name_lambda,
 "name_lambda_list":name_lambda_list,
 "iter":iter,
 "IdentSet":IdentSet,
 "free_variables":free_variables,
 "free_methods":free_methods,
 "transl_normal_path":transl_normal_path,
 "transl_path":transl_path,
 "make_sequence":make_sequence,
 "subst_lambda":subst_lambda,
 "bind":bind,
 "commute_comparison":commute_comparison,
 "negate_comparison":negate_comparison,
 "next_raise_count":next_raise_count,
 "next_negative_raise_count":next_negative_raise_count,
 "staticfail":staticfail,
 "is_guarded":is_guarded,
 "patch_guarded":patch_guarded,
 "raise_kind":raise_kind,
 "lam_of_loc":lam_of_loc,
 "reset":reset};

