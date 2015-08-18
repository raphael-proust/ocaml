// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Buffer=require("./buffer.js");
var Bytes=require("./bytes.js");
var Map=require("./map.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var string_before=function(s,n){return $$String["sub"](s,0,n);};

var string_after=function(s,n){return $$String["sub"](s,n,s["length"]-n);};

var first_chars=function(s,n){return $$String["sub"](s,0,n);};

var last_chars=function(s,n){return $$String["sub"](s,s["length"]-n,n);};

var full=Bytes["make"](32,255);

var make_empty=function(param){return Bytes["make"](32,0);};

var
 add=
  function(s,c){var i=c;return s[i>>>3]=Char["chr"](s[i>>>3]|1<<(i&7)),0;};

var
 add_range=
  function(s,c1,c2){for(var i=c1;i<=c2;i++){add(s,Char["chr"](i))}return 0;};

var singleton=function(c){var s=make_empty(/* () */0);add(s,c);return s;};

var
 complement=
  function(s)
   {var r=CamlPrimitive["caml_create_string"](32);
    
    for(var i=0;i<=31;i++){r[i]=Char["chr"](s[i]^255)}
    
    return r;
    };

var
 union=
  function(s1,s2)
   {var r=CamlPrimitive["caml_create_string"](32);
    
    for(var i=0;i<=31;i++){r[i]=Char["chr"](s1[i]|s2[i])}
    
    return r;
    };

var
 disjoint=
  function(s1,s2)
   {try
     {for(var i=0;i<=31;i++)
       {if((s1[i]&s2[i])!==0){throw Pervasives["Exit"];}else{}}
      
      return /* true */1;
      }
    catch(exn)
     {if(exn===Pervasives["Exit"]){return /* false */0;}else{throw exn;}}
    };

var
 iter=
  function(fn,s)
   {for(var i=0;i<=31;i++)
     {var c=s[i];
      
      if(c!==0)
       {for(var j=0;j<=7;j++){if((c&1<<j)!==0){fn(Char["chr"]((i<<3)+j))}}}
      else
       {}
      }
    return 0;
    };

var
 expand=
  function(s)
   {var r=Bytes["make"](256,0);
    
    iter(function(c){return r[c]=1,0;},s);
    return r;
    };

var
 fold_case=
  function(s)
   {var r=make_empty(/* () */0);
    
    iter
     (function(c)
       {add(r,Char["lowercase"](c));return add(r,Char["uppercase"](c));},
      s);
    return r;
    };

var
 Charset=
  [0,
   full,
   make_empty,
   add,
   add_range,
   singleton,
   complement,
   union,
   disjoint,
   iter,
   expand,
   fold_case];

var op_CHAR=0;

var op_CHARNORM=1;

var op_STRING=2;

var op_STRINGNORM=3;

var op_CHARCLASS=4;

var op_BOL=5;

var op_EOL=6;

var op_WORDBOUNDARY=7;

var op_BEGGROUP=8;

var op_ENDGROUP=9;

var op_REFGROUP=10;

var op_ACCEPT=11;

var op_SIMPLEOPT=12;

var op_SIMPLESTAR=13;

var op_SIMPLEPLUS=14;

var op_GOTO=15;

var op_PUSHBACK=16;

var op_SETMARK=17;

var op_CHECKPROGRESS=18;

var instr=function(opc,arg){return opc|arg<<8;};

var displ=function(dest,from){return dest-from-1;};

var
 is_nullable=
  function(param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return /* true */1;
        case 1:return /* true */1;
        case 2:return /* true */1;
        }}
    else
     {switch(param[0])
       {case 0:return /* false */0;
        case 1:return CamlPrimitive["caml_string_equal"](param[1],"");
        case 2:return /* false */0;
        case 3:return List["for_all"](is_nullable,param[1]);
        case 4:return is_nullable(param[1])||is_nullable(param[2]);
        case 5:return /* true */1;
        case 6:return is_nullable(param[1]);
        case 7:return /* true */1;
        case 8:return is_nullable(param[2]);
        case 9:return /* true */1;
        }}
    };

var
 first=
  function(param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return Charset[1];
        case 1:return Charset[1];
        case 2:return Charset[1];
        }}
    else
     {switch(param[0])
       {case 0:return Charset[5](param[1]);
        case 1:
         var s=param[1];
         
         return CamlPrimitive["caml_string_equal"](s,"")
                 ?Charset[1]
                 :Charset[5](s["charCodeAt"](0));
         
        case 2:var cl=param[1];return param[2]?Charset[6](cl):cl;
        case 3:return first_seq(param[1]);
        case 4:return Charset[7](first(param[1]),first(param[2]));
        case 5:return Charset[1];
        case 6:return first(param[1]);
        case 7:return Charset[1];
        case 8:return first(param[2]);
        case 9:return Charset[1];
        }}
    };

var
 first_seq=
  function(param)
   {if(param)
     {var r=param[1];
      
      var exit;
      
      if(typeof r==="number")
       {switch(r){case 0:exit=136;case 1:exit=136;case 2:exit=136;}}
      else
       {switch(r[0])
         {case 5:return Charset[7](first(r[1]),first_seq(param[2]));
          case 7:return Charset[7](first(r[1]),first_seq(param[2]));
          default:return first(r);}}
      
      switch(exit){case 136:return first_seq(param[2]);}
      }
    else
     {return Charset[1];}
    };

var
 charclass_of_regexp=
  function(fold_case,re)
   {var exit;
    
    if(typeof re==="number")
     {switch(re){}}
    else
     {switch(re[0])
       {case 0:var match=/* tuple */[0,Charset[5](re[1]),/* false */0];
        case 2:var match=/* tuple */[0,re[1],re[2]];
        default:exit=133;}}
    
    switch(exit)
     {case 133:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"str.ml",207,11]];
       
      }
    
    var cl1=match[1];
    
    var cl2=fold_case?Charset[11](cl1):cl1;
    
    return Bytes["to_string"](match[2]?Charset[6](cl2):cl2);
    };

var t=CamlPrimitive["caml_create_string"](256);

for(var i=0;i<=255;i++){t[i]=Char["lowercase"](Char["chr"](i))}

var fold_case_table=Bytes["to_string"](t);

var compare=function(x,y){return CamlPrimitive["caml_string_compare"](x,y);};

var StringMap=Map["Make"]([0,compare]);

var
 compile=
  function(fold_case,re)
   {var prog=[0,CamlPrimitive["caml_make_vect"](32,0)];
    
    var progpos=[0,0];
    
    var cpool=[0,StringMap[1]];
    
    var cpoolpos=[0,0];
    
    var numgroups=[0,1];
    
    var numregs=[0,0];
    
    var
     emit_instr=
      function(opc,arg)
       {if(progpos[1]>=/* -1 for tag */prog[1]["length"]-1)
         {var newlen=/* -1 for tag */prog[1]["length"]-1;
          
          while(progpos[1]>=newlen){newlen=newlen*2;}
          
          var nprog=CamlPrimitive["caml_make_vect"](newlen,0);
          
          $$Array["blit"]
           (prog[1],0,nprog,0,/* -1 for tag */prog[1]["length"]-1),
          prog[1]=
          nprog}
        else
         {}
        
        prog[1][progpos[1]+1]=instr(opc,arg);
        return progpos[0]++;
        };
    
    var emit_hole=function(param){var p=progpos[1];progpos[0]++;return p;};
    
    var
     patch_instr=
      function(pos,opc,dest)
       {return prog[1][pos+1]=instr(opc,displ(dest,pos)),0;};
    
    var
     cpool_index=
      function(s)
       {try
         {return StringMap[22](s,cpool[1]);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var p=cpoolpos[1];
            
            cpool[1]=StringMap[4](s,p,cpool[1]);
            cpoolpos[0]++;
            return p;
            }
          else
           {throw exn;}
          }
        };
    
    var
     allocate_register_if_nullable=
      function(r)
       {if(is_nullable(r))
         {var n=numregs[1];
          
          if(n>=64)
           {Pervasives["failwith"]("too many r* or r+ where r is nullable")}
          
          numregs[0]++;
          return n;
          }
        else
         {return -1;}
        };
    
    var
     emit_code=
      function(param)
       {if(typeof param==="number")
         {switch(param)
           {case 0:return emit_instr(op_BOL,0);
            case 1:return emit_instr(op_EOL,0);
            case 2:return emit_instr(op_WORDBOUNDARY,0);
            }}
        else
         {switch(param[0])
           {case 0:
             var c=param[1];
             
             return fold_case
                     ?emit_instr(op_CHARNORM,Char["lowercase"](c))
                     :emit_instr(op_CHAR,c);
             
            case 1:
             var s=param[1];
             
             var match=s["length"];
             
             if(match!==0)
              {if(match!==1)
                {try
                  {var i$1=$$String["index"](s,0);
                   
                   emit_code(/* String */[1,string_before(s,i$1)]);
                   emit_instr(op_CHAR,0);
                   return emit_code(/* String */[1,string_after(s,i$1+1)]);
                   }
                 catch(exn)
                  {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                    {return fold_case
                             ?emit_instr
                               (op_STRINGNORM,cpool_index($$String["lowercase"](s)))
                             :emit_instr(op_STRING,cpool_index(s));
                     }
                   else
                    {throw exn;}
                   }
                 }
               else
                {return fold_case
                         ?emit_instr
                           (op_CHARNORM,Char["lowercase"](s["charCodeAt"](0)))
                         :emit_instr(op_CHAR,s["charCodeAt"](0));
                 }
               }
             else
              {return /* () */0;}
             
            case 2:
             var cl=param[1];
             
             var cl1=fold_case?Charset[11](cl):cl;
             
             var cl2=param[2]?Charset[6](cl1):cl1;
             
             return emit_instr
                     (op_CHARCLASS,cpool_index(Bytes["to_string"](cl2)));
             
            case 3:return emit_seq_code(param[1]);
            case 4:
             var pos_pushback=emit_hole(/* () */0);
             
             emit_code(param[1]);
             var pos_goto_end=emit_hole(/* () */0);
             
             var lbl1=progpos[1];
             
             emit_code(param[2]);
             var lbl2=progpos[1];
             
             patch_instr(pos_pushback,op_PUSHBACK,lbl1);
             return patch_instr(pos_goto_end,op_GOTO,lbl2);
             
            case 5:
             var r=param[1];
             
             var regno=allocate_register_if_nullable(r);
             
             var lbl1$1=emit_hole(/* () */0);
             
             if(regno>=0){emit_instr(op_SETMARK,regno)}
             
             emit_code(r);
             if(regno>=0){emit_instr(op_CHECKPROGRESS,regno)}
             
             emit_instr(op_GOTO,displ(lbl1$1,progpos[1]));
             var lbl2$1=progpos[1];
             
             return patch_instr(lbl1$1,op_PUSHBACK,lbl2$1);
             
            case 6:
             var r$1=param[1];
             
             var regno$1=allocate_register_if_nullable(r$1);
             
             var lbl1$2=progpos[1];
             
             emit_code(r$1);
             if(regno$1>=0){emit_instr(op_CHECKPROGRESS,regno$1)}
             
             var pos_pushback$1=emit_hole(/* () */0);
             
             if(regno$1>=0){emit_instr(op_SETMARK,regno$1)}
             
             emit_instr(op_GOTO,displ(lbl1$2,progpos[1]));
             var lbl2$2=progpos[1];
             
             return patch_instr(pos_pushback$1,op_PUSHBACK,lbl2$2);
             
            case 7:
             var pos_pushback$2=emit_hole(/* () */0);
             
             emit_code(param[1]);
             var lbl=progpos[1];
             
             return patch_instr(pos_pushback$2,op_PUSHBACK,lbl);
             
            case 8:
             var n=param[1];
             
             if(n>=32){Pervasives["failwith"]("too many \(...\) groups")}
             
             emit_instr(op_BEGGROUP,n);
             emit_code(param[2]);
             emit_instr(op_ENDGROUP,n);
             return numgroups[1]=Pervasives["max"](numgroups[1],n+1),0;
             
            case 9:return emit_instr(op_REFGROUP,param[1]);
            }}
        };
    
    var
     emit_seq_code=
      function(param)
       {if(param)
         {var r=param[1];
          
          var exit;
          
          if(typeof r==="number")
           {switch(r){}}
          else
           {switch(r[0])
             {case 5:
               var r$1=r[1];
               
               var exit$1;
               
               if(typeof r$1==="number")
                {switch(r$1){}}
               else
                {switch(r$1[0])
                  {case 0:exit$1=108;case 2:exit$1=108;default:exit=107;}}
               
               switch(exit$1)
                {case 108:
                  var rl=param[2];
                  
                  if(disjoint_modulo_case(first(r$1),first_seq(rl)))
                   {emit_instr
                     (op_SIMPLESTAR,
                      cpool_index(charclass_of_regexp(fold_case,r$1)));
                    return emit_seq_code(rl);
                    }
                  else
                   {exit=107;}
                  
                 }
               
              case 6:
               var r$2=r[1];
               
               var exit$2;
               
               if(typeof r$2==="number")
                {switch(r$2){}}
               else
                {switch(r$2[0])
                  {case 0:exit$2=109;case 2:exit$2=109;default:exit=107;}}
               
               switch(exit$2)
                {case 109:
                  var rl$1=param[2];
                  
                  if(disjoint_modulo_case(first(r$2),first_seq(rl$1)))
                   {emit_instr
                     (op_SIMPLEPLUS,
                      cpool_index(charclass_of_regexp(fold_case,r$2)));
                    return emit_seq_code(rl$1);
                    }
                  else
                   {exit=107;}
                  
                 }
               
              case 7:
               var r$3=r[1];
               
               var exit$3;
               
               if(typeof r$3==="number")
                {switch(r$3){}}
               else
                {switch(r$3[0])
                  {case 0:exit$3=110;case 2:exit$3=110;default:exit=107;}}
               
               switch(exit$3)
                {case 110:
                  var rl$2=param[2];
                  
                  if(disjoint_modulo_case(first(r$3),first_seq(rl$2)))
                   {emit_instr
                     (op_SIMPLEOPT,
                      cpool_index(charclass_of_regexp(fold_case,r$3)));
                    return emit_seq_code(rl$2);
                    }
                  else
                   {exit=107;}
                  
                 }
               
              default:exit=107;}}
          
          switch(exit){case 107:emit_code(r);return emit_seq_code(param[2]);}
          }
        else
         {return /* () */0;}
        };
    
    var
     disjoint_modulo_case=
      function(c1,c2)
       {return fold_case
                ?Charset[8](Charset[11](c1),Charset[11](c2))
                :Charset[8](c1,c2);
        };
    
    emit_code(re);
    emit_instr(op_ACCEPT,0);
    var start=first(re);
    
    var start$prime=fold_case?Charset[11](start):start;
    
    var
     start_pos=
      CamlPrimitive["caml_equal"](start,Charset[1])
       ?-1
       :cpool_index(Bytes["to_string"](Charset[10](start$prime)));
    
    var constantpool=CamlPrimitive["caml_make_vect"](cpoolpos[1],"");
    
    StringMap[10]
     (function(str,idx){return constantpool[idx+1]=str,0;},cpool[1]);
    return /* record */[0,
            $$Array["sub"](prog[1],0,progpos[1]),
            constantpool,
            fold_case?fold_case_table:"",
            numgroups[1],
            numregs[1],
            start_pos];
    };

var
 create=
  function(param){return /* record */[0,Buffer["create"](16),/* [] */0];};

var
 flush=
  function(buf)
   {var s=Buffer["contents"](buf[1]);
    
    Buffer["clear"](buf[1]);
    var match=s["length"];
    
    return match!==0
            ?match!==1
              ?(buf[2]=/* :: */[0,/* String */[1,s],buf[2]],0)
              :(buf[2]=/* :: */[0,/* Char */[0,s["charCodeAt"](0)],buf[2]],0)
            :/* () */0;
    };

var
 add$1=
  function(buf,re)
   {var exit;
    
    if(typeof re==="number")
     {switch(re){}}
    else
     {switch(re[0])
       {case 0:return Buffer["add_char"](buf[1],re[1]);default:exit=79;}}
    
    switch(exit){case 79:flush(buf);return buf[2]=/* :: */[0,re,buf[2]],0;}
    };

var
 extract=
  function(buf){flush(buf);return /* Seq */[3,List["rev"](buf[2])];};

var SeqBuffer=[0,create,flush,add$1,extract];

var dotclass=Charset[6](Charset[5](10));

var
 parse=
  function(s)
   {var len=s["length"];
    
    var group_counter=[0,1];
    
    var
     regexp0=
      function(i){var match=regexp1(i);return regexp0cont(match[1],match[2]);};
    
    var
     regexp0cont=
      function(r1,i)
       {if(i+2<=len&&s["charCodeAt"](i)===92&&s["charCodeAt"](i+1)===124)
         {var match=regexp1(i+2);
          
          return regexp0cont(/* Alt */[4,r1,match[1]],match[2]);
          }
        else
         {return /* tuple */[0,r1,i];}
        };
    
    var regexp1=function(i){return regexp1cont(SeqBuffer[1](/* () */0),i);};
    
    var
     regexp1cont=
      function(sb,i)
       {var c=s["charCodeAt"](i+1);
        
        if(i>=len||i+2<=len&&s["charCodeAt"](i)===92&&(c===124||c===41))
         {return /* tuple */[0,SeqBuffer[4](sb),i];}
        else
         {var match=regexp2(i);
          
          SeqBuffer[3](sb,match[1]);
          return regexp1cont(sb,match[2]);
          }
        };
    
    var
     regexp2=
      function(i){var match=regexp3(i);return regexp2cont(match[1],match[2]);};
    
    var
     regexp2cont=
      function(r,i)
       {if(i>=len)
         {return /* tuple */[0,r,i];}
        else
         {var match=s["charCodeAt"](i);
          
          var switcher=-42+match;
          
          return 1<switcher>>>0
                  ?switcher!==21
                    ?/* tuple */[0,r,i]
                    :regexp2cont(/* Option */[7,r],i+1)
                  :switcher!==0
                    ?regexp2cont(/* Plus */[6,r],i+1)
                    :regexp2cont(/* Star */[5,r],i+1);
          }
        };
    
    var
     regexp3=
      function(i)
       {var c=s["charCodeAt"](i);
        
        var exit;
        
        if(c!==36)
         {if(c>=91)
           {if(c>=95)
             {exit=62;}
            else
             {switch(-91+c)
               {case 0:
                 var match=regexpclass0(i+1);
                 
                 return /* tuple */[0,
                         /* CharClass */[2,match[1],match[2]],
                         match[3]];
                 
                case 1:return regexpbackslash(i+1);
                case 2:exit=62;
                case 3:return /* tuple */[0,/* Bol */0,i+1];
                }
              }
            }
          else
           {if(c!==46)
             {exit=62;}
            else
             {return /* tuple */[0,
                      /* CharClass */[2,dotclass,/* false */0],
                      i+1];
              }
            }
          }
        else
         {return /* tuple */[0,/* Eol */1,i+1];}
        
        switch(exit){case 62:return /* tuple */[0,/* Char */[0,c],i+1];}
        };
    
    var
     regexpbackslash=
      function(i)
       {if(i>=len)
         {return /* tuple */[0,[/* Char */0,92],i];}
        else
         {var c=s["charCodeAt"](i);
          
          var exit;
          
          if(c<58)
           {var switcher=-40+c;
            
            if(1<switcher>>>0)
             {if(switcher>=9)
               {return /* tuple */[0,/* Refgroup */[9,c-48],i+1];}
              else
               {exit=67;}
              }
            else
             {if(switcher!==0)
               {exit=65;}
              else
               {var group_no=group_counter[1];
                
                if(group_no<32){group_counter[0]++}
                
                var match=regexp0(i+1);
                
                var j=match[2];
                
                var r=match[1];
                
                return j+
                        1<
                        len&&
                        s["charCodeAt"](j)===
                        92&&
                        s["charCodeAt"](j+1)===
                        41
                        ?group_no<32
                          ?/* tuple */[0,/* Group */[8,group_no,r],j+2]
                          :/* tuple */[0,r,j+2]
                        :Pervasives["failwith"]("\( group not closed by \)");
                }
              }
            }
          else
           {if(c!==98)
             {if(c!==124){exit=67;}else{exit=65;}}
            else
             {return /* tuple */[0,/* Wordboundary */2,i+1];}
            }
          
          switch(exit)
           {case 67:return /* tuple */[0,/* Char */[0,c],i+1];
            case 65:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"str.ml",511,10]];
             
            }
          }
        };
    
    var
     regexpclass0=
      function(i)
       {if(i<len&&s["charCodeAt"](i)===94)
         {var match=regexpclass1(i+1);
          
          return /* tuple */[0,match[1],/* true */1,match[2]];
          }
        else
         {var match$1=regexpclass1(i);
          
          return /* tuple */[0,match$1[1],/* false */0,match$1[2]];
          }
        };
    
    var
     regexpclass1=
      function(i)
       {var c=Charset[2](/* () */0);
        
        var j=regexpclass2(c,i,i);
        
        return /* tuple */[0,c,j];
        };
    
    var
     regexpclass2=
      function(c,start,i)
       {if(i>=len){Pervasives["failwith"]("[ class not closed by ]")}
        
        if(s["charCodeAt"](i)===93&&i>start)
         {return i+1;}
        else
         {var c1=s["charCodeAt"](i);
          
          if(i+2<len&&s["charCodeAt"](i+1)===45&&s["charCodeAt"](i+2)!==93)
           {var c2=s["charCodeAt"](i+2);
            
            Charset[4](c,c1,c2);
            return regexpclass2(c,start,i+3);
            }
          else
           {Charset[3](c,c1);return regexpclass2(c,start,i+1);}
          }
        };
    
    var match=regexp0(0);
    
    return match[2]===len
            ?match[1]
            :Pervasives["failwith"]("spurious \) in regular expression");
    };

var regexp=function(e){return compile(/* false */0,parse(e));};

var regexp_case_fold=function(e){return compile(/* true */1,parse(e));};

var
 quote=
  function(s)
   {var len=s["length"];
    
    var buf=CamlPrimitive["caml_create_string"](2*len);
    
    var pos=0;
    
    for(var i$1=0;i$1<=len-1;i$1++)
     {var c=s["charCodeAt"](i$1);
      
      var exit;
      
      var switcher=-63+c;
      
      if(31<switcher>>>0)
       {var switcher$1=27+switcher;
        
        if(10<switcher$1>>>0)
         {exit=47;}
        else
         {switch(switcher$1)
           {case 0:exit=46;
            case 1:exit=47;
            case 2:exit=47;
            case 3:exit=47;
            case 4:exit=47;
            case 5:exit=47;
            case 6:exit=46;
            case 7:exit=46;
            case 8:exit=47;
            case 9:exit=47;
            case 10:exit=46;
            }
          }
        }
      else
       {if(26<-1+switcher>>>0){exit=46;}else{exit=47;}}
      
      switch(exit)
       {case 47:buf[pos]=c;pos=pos+1;
        case 46:buf[pos]=92;buf[pos+1]=c;pos=pos+2;
        }
      }
    
    return Bytes["sub_string"](buf,0,pos);
    };

var
 regexp_string=
  function(s){return compile(/* false */0,/* String */[1,s]);};

var
 regexp_string_case_fold=
  function(s){return compile(/* true */1,/* String */[1,s]);};

var last_search_result=[0,[/* array */0]];

var
 string_match=
  function(re,s,pos)
   {var res=CamlPrimitive["re_string_match"](re,s,pos);
    
    last_search_result[1]=res;
    return /* -1 for tag */res["length"]-1>0;
    };

var
 string_partial_match=
  function(re,s,pos)
   {var res=CamlPrimitive["re_partial_match"](re,s,pos);
    
    last_search_result[1]=res;
    return /* -1 for tag */res["length"]-1>0;
    };

var
 search_forward=
  function(re,s,pos)
   {var res=CamlPrimitive["re_search_forward"](re,s,pos);
    
    last_search_result[1]=res;
    if(/* -1 for tag */res["length"]-1===0)
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    else
     {return res[1];}
    };

var
 search_backward=
  function(re,s,pos)
   {var res=CamlPrimitive["re_search_backward"](re,s,pos);
    
    last_search_result[1]=res;
    if(/* -1 for tag */res["length"]-1===0)
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    else
     {return res[1];}
    };

var
 group_beginning=
  function(n)
   {var n2=n+n;
    
    if(n<0||n2>=/* -1 for tag */last_search_result[1]["length"]-1)
     {return Pervasives["invalid_arg"]("Str.group_beginning");}
    else
     {var pos=last_search_result[1][n2+1];
      
      if(pos===-1)
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      else
       {return pos;}
      }
    };

var
 group_end=
  function(n)
   {var n2=n+n;
    
    if(n<0||n2>=/* -1 for tag */last_search_result[1]["length"]-1)
     {return Pervasives["invalid_arg"]("Str.group_end");}
    else
     {var pos=last_search_result[1][n2+1+1];
      
      if(pos===-1)
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      else
       {return pos;}
      }
    };

var
 matched_group=
  function(n,txt)
   {var n2=n+n;
    
    if(n<0||n2>=/* -1 for tag */last_search_result[1]["length"]-1)
     {return Pervasives["invalid_arg"]("Str.matched_group");}
    else
     {var b=last_search_result[1][n2+1];
      
      var e=last_search_result[1][n2+1+1];
      
      if(b===-1)
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      else
       {return $$String["sub"](txt,b,e-b);}
      }
    };

var match_beginning=function(param){return group_beginning(0);};

var match_end=function(param){return group_end(0);};

var matched_string=function(txt){return matched_group(0,txt);};

var
 replace_matched=
  function(repl,matched)
   {return CamlPrimitive["re_replacement_text"]
            (repl,last_search_result[1],matched);
    };

var
 substitute_first=
  function(expr,repl_fun,text)
   {try
     {var pos=search_forward(expr,text,0);
      
      return $$String["concat"]
              ("",
               /* :: */[0,
                string_before(text,pos),
                /* :: */[0,
                 repl_fun(text),
                 /* :: */[0,string_after(text,match_end(/* () */0)),/* [] */0]]]);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return text;}
      else
       {throw exn;}
      }
    };

var
 opt_search_forward=
  function(re,s,pos)
   {try
     {return /* Some */[0,search_forward(re,s,pos)];}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* None */0;}
      else
       {throw exn;}
      }
    };

var
 global_substitute=
  function(expr,repl_fun,text)
   {var
     replace=
      function(accu,start,last_was_empty)
       {var startpos=last_was_empty?start+1:start;
        
        if(startpos>text["length"])
         {return /* :: */[0,string_after(text,start),accu];}
        else
         {var match=opt_search_forward(expr,text,startpos);
          
          if(match)
           {var pos=match[1];
            
            var end_pos=match_end(/* () */0);
            
            var repl_text=repl_fun(text);
            
            return replace
                    (/* :: */[0,
                      repl_text,
                      /* :: */[0,$$String["sub"](text,start,pos-start),accu]],
                     end_pos,
                     end_pos===pos);
            }
          else
           {return /* :: */[0,string_after(text,start),accu];}
          }
        };
    
    return $$String["concat"]
            ("",List["rev"](replace(/* [] */0,0,/* false */0)));
    };

var
 global_replace=
  function(expr,repl,text)
   {return global_substitute(expr,replace_matched(repl),text);};

var
 replace_first=
  function(expr,repl,text)
   {return substitute_first(expr,replace_matched(repl),text);};

var
 opt_search_forward_progress=
  function(expr,text,start)
   {var match=opt_search_forward(expr,text,start);
    
    return match
            ?match_end(/* () */0)>start
              ?/* Some */[0,match[1]]
              :start<text["length"]
                ?opt_search_forward(expr,text,start+1)
                :/* None */0
            :/* None */0;
    };

var
 bounded_split=
  function(expr,text,num)
   {var start=string_match(expr,text,0)?match_end(/* () */0):0;
    
    var
     split=
      function(accu,start,n)
       {if(start>=text["length"])
         {return accu;}
        else
         {if(n===1)
           {return /* :: */[0,string_after(text,start),accu];}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            
            return match
                    ?split
                      (/* :: */[0,$$String["sub"](text,start,match[1]-start),accu],
                       match_end(/* () */0),
                       n-1)
                    :/* :: */[0,string_after(text,start),accu];
            }
          }
        };
    
    return List["rev"](split(/* [] */0,start,num));
    };

var split=function(expr,text){return bounded_split(expr,text,0);};

var
 bounded_split_delim=
  function(expr,text,num)
   {var
     split$1=
      function(accu,start,n)
       {if(start>text["length"])
         {return accu;}
        else
         {if(n===1)
           {return /* :: */[0,string_after(text,start),accu];}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            
            return match
                    ?split$1
                      (/* :: */[0,$$String["sub"](text,start,match[1]-start),accu],
                       match_end(/* () */0),
                       n-1)
                    :/* :: */[0,string_after(text,start),accu];
            }
          }
        };
    
    return CamlPrimitive["caml_string_equal"](text,"")
            ?/* [] */0
            :List["rev"](split$1(/* [] */0,0,num));
    };

var split_delim=function(expr,text){return bounded_split_delim(expr,text,0);};

var
 bounded_full_split=
  function(expr,text,num)
   {var
     split$1=
      function(accu,start,n)
       {if(start>=text["length"])
         {return accu;}
        else
         {if(n===1)
           {return /* :: */[0,/* Text */[0,string_after(text,start)],accu];}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            
            if(match)
             {var pos=match[1];
              
              var s=matched_string(text);
              
              return pos>start
                      ?split$1
                        (/* :: */[0,
                          /* Delim */[1,s],
                          /* :: */[0,
                           /* Text */[0,$$String["sub"](text,start,pos-start)],
                           accu]],
                         match_end(/* () */0),
                         n-1)
                      :split$1
                        (/* :: */[0,/* Delim */[1,s],accu],match_end(/* () */0),n-1);
              }
            else
             {return /* :: */[0,/* Text */[0,string_after(text,start)],accu];}
            }
          }
        };
    
    return List["rev"](split$1(/* [] */0,0,num));
    };

var full_split=function(expr,text){return bounded_full_split(expr,text,0);};

module["exports"]=
{"regexp":regexp,
 "regexp_case_fold":regexp_case_fold,
 "quote":quote,
 "regexp_string":regexp_string,
 "regexp_string_case_fold":regexp_string_case_fold,
 "string_match":string_match,
 "search_forward":search_forward,
 "search_backward":search_backward,
 "string_partial_match":string_partial_match,
 "matched_string":matched_string,
 "match_beginning":match_beginning,
 "match_end":match_end,
 "matched_group":matched_group,
 "group_beginning":group_beginning,
 "group_end":group_end,
 "global_replace":global_replace,
 "replace_first":replace_first,
 "global_substitute":global_substitute,
 "substitute_first":substitute_first,
 "replace_matched":replace_matched,
 "split":split,
 "bounded_split":bounded_split,
 "split_delim":split_delim,
 "bounded_split_delim":bounded_split_delim,
 "full_split":full_split,
 "bounded_full_split":bounded_full_split,
 "string_before":string_before,
 "string_after":string_after,
 "first_chars":first_chars,
 "last_chars":last_chars};

