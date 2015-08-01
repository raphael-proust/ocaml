var $$String=require("String");
var Char=require("Char");
var List=require("List");
var Pervasives=require("Pervasives");
var Buffer=require("Buffer");
var Bytes=require("Bytes");
var $$Array=require("Array");
var Map=require("Map");

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
  function(s,c1,c2){for(var i=c1;i<=c2;i++){add(s,Char["chr"](i))}};

var singleton=function(c){var s=make_empty(0);add(s,c);return s;};

var
 complement=
  function(s)
   {var r="unknown primitive:caml_create_string";
    
    for(var i=0;i<=31;i++){r[i]=Char["chr"](s[i]^255),0}
    
    return r;
    };

var
 union=
  function(s1,s2)
   {var r="unknown primitive:caml_create_string";
    
    for(var i=0;i<=31;i++){r[i]=Char["chr"](s1[i]|s2[i]),0}
    
    return r;
    };

var
 disjoint=
  function(s1,s2)
   {try
     {for(var i=0;i<=31;i++)
       {if((s1[i]&s2[i])!=0){throw Pervasives["Exit"];}else{}}
      
      return 1;
      }
    catch(exn){if(exn=Pervasives["Exit"]){return 0;}else{throw exn;}}
    };

var
 iter=
  function(fn,s)
   {for(var i=0;i<=31;i++)
     {var c=s[i];
      
      if(c!=0)
       {for(var j=0;j<=7;j++)
         {if((c&1<<j)!=0){fn(Char["chr"]((i<<3)+j))}else{}}
        }
      else
       {}
      }
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
   {var r=make_empty(0);
    
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
   {if(typeof param=="number")
     {switch(param){case 0:return 1;case 1:return 1;case 2:return 1;}}
    else
     {switch(param[0])
       {case 0:return 0;
        case 1:var s=param[1];return "unknown primitive:caml_string_equal";
        case 2:return 0;
        case 3:var rl=param[1];return List["for_all"](is_nullable,rl);
        case 4:
         var r2=param[2];
         
         var r1=param[1];
         
         return is_nullable(r1)||is_nullable(r2);
         
        case 5:return 1;
        case 6:var r=param[1];return is_nullable(r);
        case 7:return 1;
        case 8:var r$1=param[2];return is_nullable(r$1);
        case 9:return 1;
        }}
    };

var
 first=
  function(param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return Charset[1];
        case 1:return Charset[1];
        case 2:return Charset[1];
        }}
    else
     {switch(param[0])
       {case 0:var c=param[1];return Charset[5](c);
        case 1:
         var s=param[1];
         
         if("unknown primitive:caml_string_equal")
          {return Charset[1];}
         else
          {return Charset[5](s[0]);}
         
        case 2:
         var cmpl=param[2];
         
         var cl=param[1];
         
         if(cmpl){return Charset[6](cl);}else{return cl;}
         
        case 3:var rl=param[1];return first_seq(rl);
        case 4:
         var r2=param[2];
         
         var r1=param[1];
         
         return Charset[7](first(r1),first(r2));
         
        case 5:return Charset[1];
        case 6:var r=param[1];return first(r);
        case 7:return Charset[1];
        case 8:var r$1=param[2];return first(r$1);
        case 9:return Charset[1];
        }}
    };

var
 first_seq=
  function(param)
   {if(param)
     {var r=param[1];
      
      if(typeof r=="number")
       {switch(r)
         {case 0:var exit=136;case 1:var exit=136;case 2:var exit=136;}}
      else
       {switch(r[0])
         {case 5:
           var rl=param[2];
           
           var r$1=r[1];
           
           return Charset[7](first(r$1),first_seq(rl));
           
          case 7:
           var rl$1=param[2];
           
           var r$2=r[1];
           
           return Charset[7](first(r$2),first_seq(rl$1));
           
          default:return first(r);}}
      
      switch(exit){case 136:var rl$2=param[2];return first_seq(rl$2);}
      }
    else
     {return Charset[1];}
    };

var
 charclass_of_regexp=
  function(fold_case$1,re)
   {if(typeof re=="number")
     {switch(re){}}
    else
     {switch(re[0])
       {case 0:var c=re[1];var match=[0,Charset[5](c),0];
        case 2:var compl=re[2];var cl=re[1];var match=[0,cl,compl];
        default:var exit=133;}}
    
    switch(exit){case 133:throw [0,Assert_failure,[0,"str.ml",207,11]];}
    
    var compl$1=match[2];
    
    var cl1=match[1];
    
    if(fold_case$1){var cl2=Charset[11](cl1);}else{var cl2=cl1;}
    
    return Bytes["to_string"](compl$1?Charset[6](cl2):cl2);
    };

var t="unknown primitive:caml_create_string";

for(var i=0;i<=255;i++){t[i]=Char["lowercase"](Char["chr"](i)),0}

var fold_case_table=Bytes["to_string"](t);

var compare=function(x,y){return "unknown primitive:caml_string_compare";};

var StringMap=Map["Make"]([0,compare]);

var
 compile=
  function(fold_case$1,re)
   {var prog=[0,"unknown primitive:caml_make_vect"];
    
    var progpos=[0,0];
    
    var cpool=[0,StringMap[1]];
    
    var cpoolpos=[0,0];
    
    var numgroups=[0,1];
    
    var numregs=[0,0];
    
    var
     emit_instr=
      function(opc,arg)
       {if(progpos[1]>=prog[1]["length"])
         {var newlen=[0,prog[1]["length"]];
          
          while(progpos[1]>=newlen[1]){newlen[1]=newlen[1]*2,0}
          
          var nprog="unknown primitive:caml_make_vect";
          
          $$Array["blit"](prog[1],0,nprog,0,prog[1]["length"]),prog[1]=nprog,0}
        else
         {}
        
        prog[1][progpos[1]]=instr(opc,arg),0;
        return progpos[0]++;
        };
    
    var emit_hole=function(param){var p=progpos[1];progpos[0]++;return p;};
    
    var
     patch_instr=
      function(pos,opc,dest)
       {return prog[1][pos]=instr(opc,displ(dest,pos)),0;};
    
    var
     cpool_index=
      function(s)
       {try
         {return StringMap[22](s,cpool[1]);}
        catch(exn)
         {if(exn=Not_found)
           {var p=cpoolpos[1];
            
            cpool[1]=StringMap[4](s,p,cpool[1]),0;
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
          else
           {}
          
          numregs[0]++;
          return n;
          }
        else
         {return -1;}
        };
    
    var
     emit_code=
      function(param)
       {if(typeof param=="number")
         {switch(param)
           {case 0:return emit_instr(op_BOL,0);
            case 1:return emit_instr(op_EOL,0);
            case 2:return emit_instr(op_WORDBOUNDARY,0);
            }}
        else
         {switch(param[0])
           {case 0:
             var c=param[1];
             
             if(fold_case$1)
              {return emit_instr(op_CHARNORM,Char["lowercase"](c));}
             else
              {return emit_instr(op_CHAR,c);}
             
            case 1:
             var s=param[1];
             
             var match=s["length"];
             
             if(match!=0)
              {if(match!=1)
                {try
                  {var i$1=$$String["index"](s,0);
                   
                   emit_code([1,string_before(s,i$1)]);
                   emit_instr(op_CHAR,0);
                   return emit_code([1,string_after(s,i$1+1)]);
                   }
                 catch(exn)
                  {if(exn=Not_found)
                    {if(fold_case$1)
                      {return emit_instr
                               (op_STRINGNORM,cpool_index($$String["lowercase"](s)));
                       }
                     else
                      {return emit_instr(op_STRING,cpool_index(s));}
                     }
                   else
                    {throw exn;}
                   }
                 }
               else
                {if(fold_case$1)
                  {return emit_instr(op_CHARNORM,Char["lowercase"](s[0]));}
                 else
                  {return emit_instr(op_CHAR,s[0]);}
                 }
               }
             else
              {return 0;}
             
            case 2:
             var compl=param[2];
             
             var cl=param[1];
             
             if(fold_case$1){var cl1=Charset[11](cl);}else{var cl1=cl;}
             
             if(compl){var cl2=Charset[6](cl1);}else{var cl2=cl1;}
             
             return emit_instr
                     (op_CHARCLASS,cpool_index(Bytes["to_string"](cl2)));
             
            case 3:var rl=param[1];return emit_seq_code(rl);
            case 4:
             var r2=param[2];
             
             var r1=param[1];
             
             var pos_pushback=emit_hole(0);
             
             emit_code(r1);
             var pos_goto_end=emit_hole(0);
             
             var lbl1=progpos[1];
             
             emit_code(r2);
             var lbl2=progpos[1];
             
             patch_instr(pos_pushback,op_PUSHBACK,lbl1);
             return patch_instr(pos_goto_end,op_GOTO,lbl2);
             
            case 5:
             var r=param[1];
             
             var regno=allocate_register_if_nullable(r);
             
             var lbl1$1=emit_hole(0);
             
             if(regno>=0){emit_instr(op_SETMARK,regno)}else{}
             
             emit_code(r);
             if(regno>=0){emit_instr(op_CHECKPROGRESS,regno)}else{}
             
             emit_instr(op_GOTO,displ(lbl1$1,progpos[1]));
             var lbl2$1=progpos[1];
             
             return patch_instr(lbl1$1,op_PUSHBACK,lbl2$1);
             
            case 6:
             var r$1=param[1];
             
             var regno$1=allocate_register_if_nullable(r$1);
             
             var lbl1$2=progpos[1];
             
             emit_code(r$1);
             if(regno$1>=0){emit_instr(op_CHECKPROGRESS,regno$1)}else{}
             
             var pos_pushback$1=emit_hole(0);
             
             if(regno$1>=0){emit_instr(op_SETMARK,regno$1)}else{}
             
             emit_instr(op_GOTO,displ(lbl1$2,progpos[1]));
             var lbl2$2=progpos[1];
             
             return patch_instr(pos_pushback$1,op_PUSHBACK,lbl2$2);
             
            case 7:
             var r$2=param[1];
             
             var pos_pushback$2=emit_hole(0);
             
             emit_code(r$2);
             var lbl=progpos[1];
             
             return patch_instr(pos_pushback$2,op_PUSHBACK,lbl);
             
            case 8:
             var r$3=param[2];
             
             var n=param[1];
             
             if(n>=32)
              {Pervasives["failwith"]("too many \(...\) groups")}
             else
              {}
             
             emit_instr(op_BEGGROUP,n);
             emit_code(r$3);
             emit_instr(op_ENDGROUP,n);
             return numgroups[1]=Pervasives["max"](numgroups[1],n+1),0;
             
            case 9:var n$1=param[1];return emit_instr(op_REFGROUP,n$1);
            }}
        };
    
    var
     emit_seq_code=
      function(param)
       {if(param)
         {var r=param[1];
          
          if(typeof r=="number")
           {switch(r){}}
          else
           {switch(r[0])
             {case 5:
               var r$1=r[1];
               
               if(typeof r$1=="number")
                {switch(r$1){}}
               else
                {switch(r$1[0])
                  {case 0:var exit=108;
                   case 2:var exit=108;
                   default:var exit$1=107;}}
               
               switch(exit)
                {case 108:
                  var rl=param[2];
                  
                  if(disjoint_modulo_case(first(r$1),first_seq(rl)))
                   {emit_instr
                     (op_SIMPLESTAR,
                      cpool_index(charclass_of_regexp(fold_case$1,r$1)));
                    return emit_seq_code(rl);
                    }
                  else
                   {var exit$1=107;}
                  
                 }
               
              case 6:
               var r$2=r[1];
               
               if(typeof r$2=="number")
                {switch(r$2){}}
               else
                {switch(r$2[0])
                  {case 0:var exit$2=109;
                   case 2:var exit$2=109;
                   default:var exit$1=107;}}
               
               switch(exit$2)
                {case 109:
                  var rl$1=param[2];
                  
                  if(disjoint_modulo_case(first(r$2),first_seq(rl$1)))
                   {emit_instr
                     (op_SIMPLEPLUS,
                      cpool_index(charclass_of_regexp(fold_case$1,r$2)));
                    return emit_seq_code(rl$1);
                    }
                  else
                   {var exit$1=107;}
                  
                 }
               
              case 7:
               var r$3=r[1];
               
               if(typeof r$3=="number")
                {switch(r$3){}}
               else
                {switch(r$3[0])
                  {case 0:var exit$3=110;
                   case 2:var exit$3=110;
                   default:var exit$1=107;}}
               
               switch(exit$3)
                {case 110:
                  var rl$2=param[2];
                  
                  if(disjoint_modulo_case(first(r$3),first_seq(rl$2)))
                   {emit_instr
                     (op_SIMPLEOPT,
                      cpool_index(charclass_of_regexp(fold_case$1,r$3)));
                    return emit_seq_code(rl$2);
                    }
                  else
                   {var exit$1=107;}
                  
                 }
               
              default:var exit$1=107;}}
          
          switch(exit$1)
           {case 107:
             var rl$3=param[2];emit_code(r);return emit_seq_code(rl$3);
            }
          }
        else
         {return 0;}
        };
    
    var
     disjoint_modulo_case=
      function(c1,c2)
       {if(fold_case$1)
         {return Charset[8](Charset[11](c1),Charset[11](c2));}
        else
         {return Charset[8](c1,c2);}
        };
    
    emit_code(re);
    emit_instr(op_ACCEPT,0);
    var start=first(re);
    
    if(fold_case$1)
     {var start$prime=Charset[11](start);}
    else
     {var start$prime=start;}
    
    if("unknown primitive:caml_equal")
     {var start_pos=-1;}
    else
     {var start_pos=cpool_index(Bytes["to_string"](Charset[10](start$prime)));
      }
    
    var constantpool="unknown primitive:caml_make_vect";
    
    StringMap[10](function(str,idx){return constantpool[idx]=str,0;},cpool[1]);
    return [0,
            $$Array["sub"](prog[1],0,progpos[1]),
            constantpool,
            fold_case$1?fold_case_table:"",
            numgroups[1],
            numregs[1],
            start_pos];
    };

var create=function(param){return [0,Buffer["create"](16),0];};

var
 flush=
  function(buf)
   {var s=Buffer["contents"](buf[1]);
    
    Buffer["clear"](buf[1]);
    var match=s["length"];
    
    if(match!=0)
     {if(match!=1)
       {return buf[2]=[0,[1,s],buf[2]],0;}
      else
       {return buf[2]=[0,[0,s[0]],buf[2]],0;}
      }
    else
     {return 0;}
    };

var
 add$1=
  function(buf,re)
   {if(typeof re=="number")
     {switch(re){}}
    else
     {switch(re[0])
       {case 0:var c=re[1];return Buffer["add_char"](buf[1],c);
        default:var exit=79;}}
    
    switch(exit){case 79:flush(buf);return buf[2]=[0,re,buf[2]],0;}
    };

var extract=function(buf){flush(buf);return [3,List["rev"](buf[2])];};

var SeqBuffer=[0,create,flush,add$1,extract];

var dotclass=Charset[6](Charset[5](10));

var
 parse=
  function(s)
   {var len=s["length"];
    
    var group_counter=[0,1];
    
    var
     regexp0=
      function(i$1)
       {var match=regexp1(i$1);
        
        var j=match[2];
        
        var r=match[1];
        
        return regexp0cont(r,j);
        };
    
    var
     regexp0cont=
      function(r1,i$1)
       {if(i$1+2<=len&&(s[i$1]=92)&&(s[i$1+1]=124))
         {var match=regexp1(i$1+2);
          
          var j=match[2];
          
          var r2=match[1];
          
          return regexp0cont([4,r1,r2],j);
          }
        else
         {return [0,r1,i$1];}
        };
    
    var regexp1=function(i$1){return regexp1cont(SeqBuffer[1](0),i$1);};
    
    var
     regexp1cont=
      function(sb,i$1)
       {var c=s[i$1+1];
        
        if(i$1>=len||i$1+2<=len&&(s[i$1]=92)&&((c=124)||(c=41)))
         {return [0,SeqBuffer[4](sb),i$1];}
        else
         {var match=regexp2(i$1);
          
          var j=match[2];
          
          var r=match[1];
          
          SeqBuffer[3](sb,r);
          return regexp1cont(sb,j);
          }
        };
    
    var
     regexp2=
      function(i$1)
       {var match=regexp3(i$1);
        
        var j=match[2];
        
        var r=match[1];
        
        return regexp2cont(r,j);
        };
    
    var
     regexp2cont=
      function(r,i$1)
       {if(i$1>=len)
         {return [0,r,i$1];}
        else
         {var match=s[i$1];
          
          var switcher=-42+match;
          
          if(1<switcher>>>0)
           {if(switcher!=21)
             {return [0,r,i$1];}
            else
             {return regexp2cont([7,r],i$1+1);}
            }
          else
           {if(switcher!=0)
             {return regexp2cont([6,r],i$1+1);}
            else
             {return regexp2cont([5,r],i$1+1);}
            }
          }
        };
    
    var
     regexp3=
      function(i$1)
       {var c=s[i$1];
        
        if(c!=36)
         {if(c>=91)
           {if(c>=95)
             {var exit=62;}
            else
             {var switcher=-91+c;
              
              switch(switcher[0])
               {case 0:
                 var match=regexpclass0(i$1+1);
                 
                 var j=match[3];
                 
                 var compl=match[2];
                 
                 var c$1=match[1];
                 
                 return [0,[2,c$1,compl],j];
                 
                case 1:return regexpbackslash(i$1+1);
                case 2:var exit=62;
                case 3:return [0,0,i$1+1];
                }
              }
            }
          else
           {if(c!=46){var exit=62;}else{return [0,[2,dotclass,0],i$1+1];}}
          }
        else
         {return [0,1,i$1+1];}
        
        switch(exit){case 62:return [0,[0,c],i$1+1];}
        };
    
    var
     regexpbackslash=
      function(i$1)
       {if(i$1>=len)
         {return [0,[0,92],i$1];}
        else
         {var c=s[i$1];
          
          if(c<58)
           {var switcher=-40+c;
            
            if(1<switcher>>>0)
             {if(switcher>=9){return [0,[9,c-48],i$1+1];}else{var exit=67;}}
            else
             {if(switcher!=0)
               {var exit=65;}
              else
               {var group_no=group_counter[1];
                
                if(group_no<32){group_counter[0]++}else{}
                
                var match=regexp0(i$1+1);
                
                var j=match[2];
                
                var r=match[1];
                
                if(j+1<len&&(s[j]=92)&&(s[j+1]=41))
                 {if(group_no<32)
                   {return [0,[8,group_no,r],j+2];}
                  else
                   {return [0,r,j+2];}
                  }
                else
                 {return Pervasives["failwith"]("\( group not closed by \)");}
                }
              }
            }
          else
           {if(c!=98)
             {if(c!=124){var exit=67;}else{var exit=65;}}
            else
             {return [0,2,i$1+1];}
            }
          
          switch(exit)
           {case 67:var c$1=c;return [0,[0,c$1],i$1+1];
            case 65:throw [0,Assert_failure,[0,"str.ml",511,10]];
            }
          }
        };
    
    var
     regexpclass0=
      function(i$1)
       {if(i$1<len&&(s[i$1]=94))
         {var match=regexpclass1(i$1+1);
          
          var j=match[2];
          
          var c=match[1];
          
          return [0,c,1,j];
          }
        else
         {var match$1=regexpclass1(i$1);
          
          var j$1=match$1[2];
          
          var c$1=match$1[1];
          
          return [0,c$1,0,j$1];
          }
        };
    
    var
     regexpclass1=
      function(i$1)
       {var c=Charset[2](0);var j=regexpclass2(c,i$1,i$1);return [0,c,j];};
    
    var
     regexpclass2=
      function(c,start,i$1)
       {if(i$1>=len){Pervasives["failwith"]("[ class not closed by ]")}else{}
        
        if((s[i$1]=93)&&i$1>start)
         {return i$1+1;}
        else
         {var c1=s[i$1];
          
          if(i$1+2<len&&(s[i$1+1]=45)&&s[i$1+2]!=93)
           {var c2=s[i$1+2];
            
            Charset[4](c,c1,c2);
            return regexpclass2(c,start,i$1+3);
            }
          else
           {Charset[3](c,c1);return regexpclass2(c,start,i$1+1);}
          }
        };
    
    var match=regexp0(0);
    
    var j=match[2];
    
    var r=match[1];
    
    if(j=len)
     {return r;}
    else
     {return Pervasives["failwith"]("spurious \) in regular expression");}
    };

var regexp=function(e){return compile(0,parse(e));};

var regexp_case_fold=function(e){return compile(1,parse(e));};

var
 quote=
  function(s)
   {var len=s["length"];
    
    var buf="unknown primitive:caml_create_string";
    
    var pos=[0,0];
    
    for(var i$1=0;i$1<=len-1;i$1++)
     {var c=s[i$1];
      
      var switcher=-63+c;
      
      if(31<switcher>>>0)
       {var switcher$1=27+switcher;
        
        if(10<switcher$1>>>0)
         {var exit=47;}
        else
         {switch(switcher$1[0])
           {case 0:var exit=46;
            case 1:var exit=47;
            case 2:var exit=47;
            case 3:var exit=47;
            case 4:var exit=47;
            case 5:var exit=47;
            case 6:var exit=46;
            case 7:var exit=46;
            case 8:var exit=47;
            case 9:var exit=47;
            case 10:var exit=46;
            }
          }
        }
      else
       {var switcher$2=-1+switcher;
        
        if(26<switcher$2>>>0){var exit=46;}else{var exit=47;}
        }
      
      switch(exit)
       {case 47:var c$1=c;buf[pos[1]]=c$1,0,pos[1]=pos[1]+1,0;
        case 46:buf[pos[1]]=92,0,buf[pos[1]+1]=c,0,pos[1]=pos[1]+2,0
        }
      }
    
    return Bytes["sub_string"](buf,0,pos[1]);
    };

var regexp_string=function(s){return compile(0,[1,s]);};

var regexp_string_case_fold=function(s){return compile(1,[1,s]);};

var last_search_result=[0,[]];

var
 string_match=
  function(re,s,pos)
   {var res="unknown primitive:re_string_match";
    
    last_search_result[1]=res,0;
    return res["length"]>0;
    };

var
 string_partial_match=
  function(re,s,pos)
   {var res="unknown primitive:re_partial_match";
    
    last_search_result[1]=res,0;
    return res["length"]>0;
    };

var
 search_forward=
  function(re,s,pos)
   {var res="unknown primitive:re_search_forward";
    
    last_search_result[1]=res,0;
    if(res["length"]=0){throw Not_found;}else{return res[0];}
    };

var
 search_backward=
  function(re,s,pos)
   {var res="unknown primitive:re_search_backward";
    
    last_search_result[1]=res,0;
    if(res["length"]=0){throw Not_found;}else{return res[0];}
    };

var
 group_beginning=
  function(n)
   {var n2=n+n;
    
    if(n<0||n2>=last_search_result[1]["length"])
     {return Pervasives["invalid_arg"]("Str.group_beginning");}
    else
     {var pos=last_search_result[1][n2];
      
      if(pos=-1){throw Not_found;}else{return pos;}
      }
    };

var
 group_end=
  function(n)
   {var n2=n+n;
    
    if(n<0||n2>=last_search_result[1]["length"])
     {return Pervasives["invalid_arg"]("Str.group_end");}
    else
     {var pos=last_search_result[1][n2+1];
      
      if(pos=-1){throw Not_found;}else{return pos;}
      }
    };

var
 matched_group=
  function(n,txt)
   {var n2=n+n;
    
    if(n<0||n2>=last_search_result[1]["length"])
     {return Pervasives["invalid_arg"]("Str.matched_group");}
    else
     {var b=last_search_result[1][n2];
      
      var e=last_search_result[1][n2+1];
      
      if(b=-1){throw Not_found;}else{return $$String["sub"](txt,b,e-b);}
      }
    };

var match_beginning=function(param){return group_beginning(0);};

var match_end=function(param){return group_end(0);};

var matched_string=function(txt){return matched_group(0,txt);};

var
 replace_matched=
  function(repl,matched){return "unknown primitive:re_replacement_text";};

var
 substitute_first=
  function(expr,repl_fun,text)
   {try
     {var pos=search_forward(expr,text,0);
      
      return $$String["concat"]
              ("",
               [0,
                string_before(text,pos),
                [0,repl_fun(text),[0,string_after(text,match_end(0)),0]]]);
      }
    catch(exn){if(exn=Not_found){return text;}else{throw exn;}}
    };

var
 opt_search_forward=
  function(re,s,pos)
   {try
     {return [0,search_forward(re,s,pos)];}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 global_substitute=
  function(expr,repl_fun,text)
   {var
     replace=
      function(accu,start,last_was_empty)
       {if(last_was_empty){var startpos=start+1;}else{var startpos=start;}
        
        if(startpos>text["length"])
         {return [0,string_after(text,start),accu];}
        else
         {var match=opt_search_forward(expr,text,startpos);
          
          if(match)
           {var pos=match[1];
            
            var end_pos=match_end(0);
            
            var repl_text=repl_fun(text);
            
            return replace
                    ([0,
                      repl_text,
                      [0,$$String["sub"](text,start,pos-start),accu]],
                     end_pos,
                     end_pos=pos);
            }
          else
           {return [0,string_after(text,start),accu];}
          }
        };
    
    return $$String["concat"]("",List["rev"](replace(0,0,0)));
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
    
    if(match)
     {var pos=match[1];
      
      if(match_end(0)>start)
       {return [0,pos];}
      else
       {if(start<text["length"])
         {return opt_search_forward(expr,text,start+1);}
        else
         {return 0;}
        }
      }
    else
     {return 0;}
    };

var
 bounded_split=
  function(expr,text,num)
   {if(string_match(expr,text,0)){var start=match_end(0);}else{var start=0;}
    
    var
     split=
      function(accu,start$1,n)
       {if(start$1>=text["length"])
         {return accu;}
        else
         {if(n=1)
           {return [0,string_after(text,start$1),accu];}
          else
           {var match=opt_search_forward_progress(expr,text,start$1);
            
            if(match)
             {var pos=match[1];
              
              return split
                      ([0,$$String["sub"](text,start$1,pos-start$1),accu],
                       match_end(0),
                       n-1);
              }
            else
             {return [0,string_after(text,start$1),accu];}
            }
          }
        };
    
    return List["rev"](split(0,start,num));
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
         {if(n=1)
           {return [0,string_after(text,start),accu];}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            
            if(match)
             {var pos=match[1];
              
              return split$1
                      ([0,$$String["sub"](text,start,pos-start),accu],
                       match_end(0),
                       n-1);
              }
            else
             {return [0,string_after(text,start),accu];}
            }
          }
        };
    
    if("unknown primitive:caml_string_equal")
     {return 0;}
    else
     {return List["rev"](split$1(0,0,num));}
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
         {if(n=1)
           {return [0,[0,string_after(text,start)],accu];}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            
            if(match)
             {var pos=match[1];
              
              var s=matched_string(text);
              
              if(pos>start)
               {return split$1
                        ([0,
                          [1,s],
                          [0,[0,$$String["sub"](text,start,pos-start)],accu]],
                         match_end(0),
                         n-1);
                }
              else
               {return split$1([0,[1,s],accu],match_end(0),n-1);}
              }
            else
             {return [0,[0,string_after(text,start)],accu];}
            }
          }
        };
    
    return List["rev"](split$1(0,0,num));
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

