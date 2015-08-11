// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Filename=require("Filename");
var Buffer=require("Buffer");
var Bytes=require("Bytes");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");
var Sys=require("Sys");


var Fatal_error="unknown primitive:caml_set_oo_id";

var
 fatal_error=
  function(msg)
   {Pervasives["prerr_string"](">> Fatal error: ");
    Pervasives["prerr_endline"](msg);
    throw Fatal_error;
    };

var
 try_finally=
  function(work,cleanup)
   {try {var result=work(0);}catch(e){cleanup(0);throw e;}
    
    cleanup(0);
    return result;
    };

var
 map_end=
  function(f,l1,l2)
   {if(l1){return /* :: */[0,f(l1[1]),map_end(f,l1[2],l2)];}else{return l2;}};

var
 map_left_right=
  function(f,param)
   {if(param)
     {var res=f(param[1]);return /* :: */[0,res,map_left_right(f,param[2])];}
    else
     {return 0;}
    };

var
 for_all2=
  function(pred,l1,l2)
   {var exit;
    
    if(l1)
     {if(l2)
       {return pred(l1[1],l2[1])&&for_all2(pred,l1[2],l2[2]);}
      else
       {exit=87;}
      }
    else
     {if(l2){exit=87;}else{return 1;}}
    
    switch(exit){case 87:return 0;}
    };

var
 replicate_list=
  function(elem,n)
   {if(n<=0){return 0;}else{return /* :: */[0,elem,replicate_list(elem,n-1)];}
    };

var
 list_remove=
  function(x,param)
   {if(param)
     {var tl=param[2];
      
      var hd=param[1];
      
      if("unknown primitive:caml_equal")
       {return tl;}
      else
       {return /* :: */[0,hd,list_remove(x,tl)];}
      }
    else
     {return 0;}
    };

var
 split_last=
  function(param)
   {if(param)
     {var tl=param[2];
      
      var x=param[1];
      
      if(tl)
       {var match=split_last(tl);
        
        return /* tuple */[0,/* :: */[0,x,match[1]],match[2]];
        }
      else
       {return /* tuple */[0,0,x];}
      }
    else
     {throw [0,Assert_failure,[0,"utils/misc.ml",54,10]];}
    };

var
 samelist=
  function(pred,l1,l2)
   {var exit;
    
    if(l1)
     {if(l2)
       {return pred(l1[1],l2[1])&&samelist(pred,l1[2],l2[2]);}
      else
       {exit=84;}
      }
    else
     {if(l2){exit=84;}else{return 1;}}
    
    switch(exit){case 84:return 0;}
    };

var may=function(f,param){if(param){return f(param[1]);}else{return 0;}};

var
 may_map=
  function(f,param)
   {if(param){return /* Some */[0,f(param[1])];}else{return 0;}};

var
 find_in_path=
  function(path,name)
   {if(!Filename["is_implicit"](name))
     {if("unknown primitive:caml_sys_file_exists")
       {return name;}
      else
       {throw Not_found;}
      }
    else
     {var
       try_dir=
        function(param)
         {if(param)
           {var fullname=Filename["concat"](param[1],name);
            
            if("unknown primitive:caml_sys_file_exists")
             {return fullname;}
            else
             {return try_dir(param[2]);}
            }
          else
           {throw Not_found;}
          };
      
      return try_dir(path);
      }
    };

var
 find_in_path_rel=
  function(path,name)
   {var
     simplify=
      function(s)
       {var base=Filename["basename"](s);
        
        var dir=Filename["dirname"](s);
        
        if("unknown primitive:caml_string_equal")
         {return dir;}
        else
         {if("unknown primitive:caml_string_equal")
           {return simplify(dir);}
          else
           {return Filename["concat"](simplify(dir),base);}
          }
        };
    
    var
     try_dir=
      function(param)
       {if(param)
         {var fullname=simplify(Filename["concat"](param[1],name));
          
          if("unknown primitive:caml_sys_file_exists")
           {return fullname;}
          else
           {return try_dir(param[2]);}
          }
        else
         {throw Not_found;}
        };
    
    return try_dir(path);
    };

var
 find_in_path_uncap=
  function(path,name)
   {var uname=$$String["uncapitalize"](name);
    
    var
     try_dir=
      function(param)
       {if(param)
         {var dir=param[1];
          
          var fullname=Filename["concat"](dir,name);
          
          var ufullname=Filename["concat"](dir,uname);
          
          if("unknown primitive:caml_sys_file_exists")
           {return ufullname;}
          else
           {if("unknown primitive:caml_sys_file_exists")
             {return fullname;}
            else
             {return try_dir(param[2]);}
            }
          }
        else
         {throw Not_found;}
        };
    
    return try_dir(path);
    };

var
 remove_file=
  function(filename)
   {try
     {return "unknown primitive:caml_sys_remove";}
    catch(exn){if(exn[1]=Sys_error){return 0;}else{throw exn;}}
    };

var
 expand_directory=
  function(alt,s)
   {if(s["length"]>0&&(s[0]=43))
     {return Filename["concat"](alt,$$String["sub"](s,1,s["length"]-1));}
    else
     {return s;}
    };

var
 create_hashtable=
  function(size,init)
   {var tbl=Hashtbl["create"](0,size);
    
    List["iter"]
     (function(param){return Hashtbl["add"](tbl,param[1],param[2]);},init);
    return tbl;
    };

var
 copy_file=
  function(ic,oc)
   {var buff="unknown primitive:caml_create_string";
    
    var
     copy=
      function(param)
       {var n=Pervasives["input"](ic,buff,0,4096);
        
        if(n=0)
         {return 0;}
        else
         {Pervasives["output"](oc,buff,0,n);return copy(0);}
        };
    
    return copy(0);
    };

var
 copy_file_chunk=
  function(ic,oc,len)
   {var buff="unknown primitive:caml_create_string";
    
    var
     copy=
      function(n)
       {if(n<=0)
         {return 0;}
        else
         {var r=Pervasives["input"](ic,buff,0,Pervasives["min"](n,4096));
          
          if(r=0)
           {throw End_of_file;}
          else
           {Pervasives["output"](oc,buff,0,r);return copy(n-r);}
          }
        };
    
    return copy(len);
    };

var
 string_of_file=
  function(ic)
   {var b=Buffer["create"](65536);
    
    var buff="unknown primitive:caml_create_string";
    
    var
     copy=
      function(param)
       {var n=Pervasives["input"](ic,buff,0,4096);
        
        if(n=0)
         {return Buffer["contents"](b);}
        else
         {Buffer["add_subbytes"](b,buff,0,n);return copy(0);}
        };
    
    return copy(0);
    };

var log2=function(n){if(n<=1){return 0;}else{return 1+log2(n>>1);}};

var align=function(n,a){if(n>=0){return n+a-1&-a;}else{return n&-a;}};

var no_overflow_add=function(a,b){return (a^b|a^Pervasives["lnot"](a+b))<0;};

var no_overflow_sub=function(a,b){return (a^Pervasives["lnot"](b)|b^a-b)<0;};

var
 no_overflow_lsl=
  function(a)
   {return Pervasives["min_int"]>>1<=a&&a<=Pervasives["max_int"]>>1;};

var
 chop_extension_if_any=
  function(fname)
   {try
     {return Filename["chop_extension"](fname);}
    catch(exn){if(exn[1]=Invalid_argument){return fname;}else{throw exn;}}
    };

var
 chop_extensions=
  function(file)
   {var dirname=Filename["dirname"](file);
    
    var basename=Filename["basename"](file);
    
    try
     {var pos=$$String["index"](basename,46);
      
      var basename$1=$$String["sub"](basename,0,pos);
      
      if(Filename["is_implicit"](file)&&"unknown primitive:caml_string_equal")
       {return basename$1;}
      else
       {return Filename["concat"](dirname,basename$1);}
      }
    catch(exn){if(exn=Not_found){return file;}else{throw exn;}}
    };

var
 search_substring=
  function(pat,str,start)
   {var
     search=
      function(i,j)
       {if(j>=pat["length"])
         {return i;}
        else
         {if(i+j>=str["length"])
           {throw Not_found;}
          else
           {if(str[i+j]=pat[j])
             {return search(i,j+1);}
            else
             {return search(i+1,0);}
            }
          }
        };
    
    return search(start,0);
    };

var
 replace_substring=
  function(before,after,str)
   {var
     search=
      function(acc,curr)
       {var exit;
        
        try
         {var next=search_substring(before,str,curr);exit=-1;}
        catch(exn)
         {if(exn=Not_found)
           {var suffix=$$String["sub"](str,curr,str["length"]-curr);
            
            return List["rev"](/* :: */[0,suffix,acc]);
            }
          else
           {throw exn;}
          }
        
        switch(exit)
         {case -1:
           var prefix=$$String["sub"](str,curr,next-curr);
           
           return search(/* :: */[0,prefix,acc],next+before["length"]);
           
          }
        };
    
    return $$String["concat"](after,search(0,0));
    };

var
 rev_split_words=
  function(s)
   {var
     split1=
      function(res,i)
       {if(i>=s["length"])
         {return res;}
        else
         {var match=s[i];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=35;}else{exit=36;}}
          else
           {if(switcher!=23){exit=36;}else{exit=35;}}
          
          switch(exit)
           {case 36:return split2(res,i,i+1);case 35:return split1(res,i+1);}
          }
        };
    
    var
     split2=
      function(res,i,j)
       {if(j>=s["length"])
         {return /* :: */[0,$$String["sub"](s,i,j-i),res];}
        else
         {var match=s[j];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=37;}else{exit=38;}}
          else
           {if(switcher!=23){exit=38;}else{exit=37;}}
          
          switch(exit)
           {case 38:return split2(res,i,j+1);
            case 37:
             return split1(/* :: */[0,$$String["sub"](s,i,j-i),res],j+1);
            }
          }
        };
    
    return split1(0,0);
    };

var get_ref=function(r){var v=r[1];r[1]=0,0;return v;};

var fst3=function(param){return param[1];};

var snd3=function(param){return param[2];};

var thd3=function(param){return param[3];};

var fst4=function(param){return param[1];};

var snd4=function(param){return param[2];};

var thd4=function(param){return param[3];};

var for4=function(param){return param[4];};

var
 create=
  function(str_size)
   {var tbl_size=str_size/Sys["max_string_length"]+1;
    
    var tbl="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=tbl_size-2;i++)
     {tbl[i]="unknown primitive:caml_create_string",0}
    
    tbl[tbl_size-1]="unknown primitive:caml_create_string",0;
    return tbl;
    };

var
 length=
  function(tbl)
   {var tbl_size=tbl["length"];
    
    return Sys["max_string_length"]*(tbl_size-1)+tbl[tbl_size-1]["length"];
    };

var
 get=
  function(tbl,ind)
   {return tbl[ind/Sys["max_string_length"]][ind%Sys["max_string_length"]];};

var
 set=
  function(tbl,ind,c)
   {return tbl[ind/Sys["max_string_length"]][ind%Sys["max_string_length"]]=
           c,
           0;
    };

var
 blit=
  function(src,srcoff,dst,dstoff,len)
   {for(var i=0;i<=len-1;i++){set(dst,dstoff+i,get(src,srcoff+i))}};

var
 output=
  function(oc,tbl,pos,len)
   {for(var i=pos;i<=pos+len-1;i++){Pervasives["output_char"](oc,get(tbl,i))}};

var
 unsafe_blit_to_bytes=
  function(src,srcoff,dst,dstoff,len)
   {for(var i=0;i<=len-1;i++){dst[dstoff+i]=get(src,srcoff+i),0}};

var
 input_bytes=
  function(ic,len)
   {var tbl=create(len);
    
    $$Array["iter"]
     (function(str)
       {return Pervasives["really_input"](ic,str,0,str["length"]);},
      tbl);
    return tbl;
    };

var
 LongString=
  [0,create,length,get,set,blit,output,unsafe_blit_to_bytes,input_bytes];

var
 edit_distance=
  function(a,b,cutoff)
   {var match=/* tuple */[0,a["length"],b["length"]];
    
    var lb=match[2];
    
    var la=match[1];
    
    var cutoff$1=Pervasives["min"](Pervasives["max"](la,lb),cutoff);
    
    if(Pervasives["abs"](la-lb)>cutoff$1)
     {return 0;}
    else
     {var m=$$Array["make_matrix"](la+1,lb+1,cutoff$1+1);
      
      m[0][0]=0,0;
      for(var i=1;i<=la;i++){m[i][0]=i,0}
      
      for(var j=1;j<=lb;j++){m[0][j]=j,0}
      
      for(var i$1=1;i$1<=la;i$1++)
       {for
         (var j$1=Pervasives["max"](1,i$1-cutoff$1-1);
          j$1<=
          Pervasives["min"](lb,i$1+cutoff$1+1);
          j$1++)
         {if(a[i$1-1]=b[j$1-1]){var cost=0;}else{var cost=1;}
          
          var
           best=
            Pervasives["min"]
             (1+Pervasives["min"](m[i$1-1][j$1],m[i$1][j$1-1]),
              m[i$1-1][j$1-1]+cost);
          
          if(!(i$1>1&&j$1>1&&(a[i$1-1]=b[j$1-2])&&(a[i$1-2]=b[j$1-1])))
           {var best$1=best;}
          else
           {var best$1=Pervasives["min"](best,m[i$1-2][j$1-2]+cost);}
          
          m[i$1][j$1]=best$1,0}
        }
      
      var result=m[la][lb];
      
      if(result>cutoff$1){return 0;}else{return /* Some */[0,result];}
      }
    };

var
 split=
  function(s,c)
   {var len=s["length"];
    
    var
     iter=
      function(pos,to_rev)
       {if(pos=len)
         {return List["rev"](/* :: */[0,"",to_rev]);}
        else
         {try
           {var match=/* Some */[0,$$String["index_from"](s,pos,c)];}
          catch(exn){if(exn=Not_found){var match=0;}else{throw exn;}}
          
          if(match)
           {var pos2=match[1];
            
            if(pos2=pos)
             {return iter(pos+1,/* :: */[0,"",to_rev]);}
            else
             {return iter
                      (pos2+1,/* :: */[0,$$String["sub"](s,pos,pos2-pos),to_rev]);
              }
            }
          else
           {return List["rev"]
                    (/* :: */[0,$$String["sub"](s,pos,len-pos),to_rev]);
            }
          }
        };
    
    return iter(0,0);
    };

var
 cut_at=
  function(s,c)
   {var pos=$$String["index"](s,c);
    
    return /* tuple */[0,
            $$String["sub"](s,0,pos),
            $$String["sub"](s,pos+1,s["length"]-pos-1)];
    };

module["exports"]=
{"fatal_error":fatal_error,
 "Fatal_error":Fatal_error,
 "try_finally":try_finally,
 "map_end":map_end,
 "map_left_right":map_left_right,
 "for_all2":for_all2,
 "replicate_list":replicate_list,
 "list_remove":list_remove,
 "split_last":split_last,
 "samelist":samelist,
 "may":may,
 "may_map":may_map,
 "find_in_path":find_in_path,
 "find_in_path_rel":find_in_path_rel,
 "find_in_path_uncap":find_in_path_uncap,
 "remove_file":remove_file,
 "expand_directory":expand_directory,
 "create_hashtable":create_hashtable,
 "copy_file":copy_file,
 "copy_file_chunk":copy_file_chunk,
 "string_of_file":string_of_file,
 "log2":log2,
 "align":align,
 "no_overflow_add":no_overflow_add,
 "no_overflow_sub":no_overflow_sub,
 "no_overflow_lsl":no_overflow_lsl,
 "chop_extension_if_any":chop_extension_if_any,
 "chop_extensions":chop_extensions,
 "search_substring":search_substring,
 "replace_substring":replace_substring,
 "rev_split_words":rev_split_words,
 "get_ref":get_ref,
 "fst3":fst3,
 "snd3":snd3,
 "thd3":thd3,
 "fst4":fst4,
 "snd4":snd4,
 "thd4":thd4,
 "for4":for4,
 "LongString":LongString,
 "edit_distance":edit_distance,
 "split":split,
 "cut_at":cut_at};

