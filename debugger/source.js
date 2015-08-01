var $$String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Primitives=require("Primitives");
var Misc=require("Misc");
var Filename=require("Filename");
var Debugger_config=require("Debugger_config");
var Hashtbl=require("Hashtbl");
var Config=require("Config");

var source_extensions=[0,".ml",0];

var
 source_of_module=
  function(pos,mdle)
   {var pos_fname=pos[1];
    
    if("unknown primitive:caml_sys_file_exists")
     {return pos_fname;}
    else
     {var
       is_submodule=
        function(m,m$prime)
         {var len$prime=m$prime["length"];
          
          try
           {return "unknown primitive:caml_string_equal"&&(m[len$prime]=46);}
          catch(exn){if(exn[1]=Invalid_argument){return 0;}else{throw exn;}}
          };
      
      var
       path=
        Hashtbl["fold"]
         (function(mdl,dirs,acc)
           {if(is_submodule(mdle,mdl)){return dirs;}else{return acc;}},
          Debugger_config["load_path_for"],
          Config["load_path"][1]);
      
      var fname=pos[1];
      
      if("unknown primitive:caml_string_equal")
       {try
         {var dot_index=$$String["rindex"](mdle,46);
          
          var
           innermost_module=
            $$String["sub"](mdle,1+dot_index,-1+(mdle["length"]-dot_index));
          }
        catch(exn)
         {if(exn=Not_found){var innermost_module=mdle;}else{throw exn;}}
        
        var
         loop=
          function(param)
           {if(param)
             {try
               {return Misc["find_in_path_uncap"]
                        (path,Pervasives["^"](innermost_module,param[1]));
                }
              catch(exn$1)
               {if(exn$1=Not_found){return loop(param[2]);}else{throw exn$1;}}
              }
            else
             {throw Not_found;}
            };
        
        return loop(source_extensions);
        }
      else
       {if(Filename["is_relative"](fname))
         {return Misc["find_in_path_rel"](path,fname);}
        else
         {if("unknown primitive:caml_sys_file_exists")
           {return fname;}
          else
           {throw Not_found;}
          }
        }
      }
    };

var buffer_max_count=[0,10];

var cache_size=30;

var buffer_list=[0,0];

var flush_buffer_list=function(param){return buffer_list[1]=0,0;};

var
 get_buffer=
  function(pos,mdle)
   {try
     {return List["assoc"](mdle,buffer_list[1]);}
    catch(exn)
     {if(exn=Not_found)
       {var inchan=Pervasives["open_in_bin"](source_of_module(pos,mdle));
        
        var
         content=
          Pervasives["really_input_string"]
           (inchan,Pervasives["in_channel_length"](inchan));
        
        var buffer=[0,content,[0,0]];
        
        buffer_list[1]=
        Primitives["list_truncate"]
         (buffer_max_count[1],[0,[0,mdle,buffer],buffer_list[1]]),
        0;
        return buffer;
        }
      else
       {throw exn;}
      }
    };

var buffer_content=function(prim){return prim[1];};

var buffer_length=function(x){return buffer_content(x)["length"];};

var
 insert_pos=
  function(buffer,pair)
   {var line=pair[2];
    
    var position=pair[1];
    
    var
     new_list=
      function(l$prime)
       {if(l$prime)
         {var a=l$prime[1];
          
          var lin=a[2];
          
          if("unknown primitive:caml_lessthan")
           {return [0,pair,l$prime];}
          else
           {if("unknown primitive:caml_equal")
             {return l$prime;}
            else
             {return [0,a,new_list(l$prime[2])];}
            }
          }
        else
         {return [0,[0,position,line],0];}
        };
    
    var buffer_cache=buffer[2];
    
    return buffer_cache[1]=new_list(buffer_cache[1]),0;
    };

var
 next_linefeed=
  function(param,pos)
   {var buffer=param[1];
    
    var len=buffer["length"];
    
    if(pos>=len)
     {throw Primitives["Out_of_range"];}
    else
     {var
       search=
        function(p)
         {if((p=len)||(buffer[p]=10)){return p;}else{return search(1+p);}};
      
      return search(pos);
      }
    };

var
 next_line=
  function(buffer,param)
   {return [0,next_linefeed(buffer,param[1])+1,param[2]+1];};

var
 line_of_pos=
  function(buffer,position)
   {var
     find=
      function(param)
       {if(param)
         {var pair=param[1];
          
          if(pair[1]>position){return find(param[2]);}else{return pair;}
          }
        else
         {if(position<0)
           {throw Primitives["Out_of_range"];}
          else
           {return [0,0,1];}
          }
        };
    
    var
     find_line=
      function(previous)
       {var next=next_line(buffer,previous);
        
        if(next[1]<=position){return find_line(next);}else{return previous;}
        };
    
    var result=find_line(find(buffer[2][1]));
    
    insert_pos(buffer,result);
    return result;
    };

var
 pos_of_line=
  function(buffer,line)
   {var
     find=
      function(param)
       {if(param)
         {var pair=param[1];
          
          if(pair[2]>line){return find(param[2]);}else{return pair;}
          }
        else
         {if(line<=0){throw Primitives["Out_of_range"];}else{return [0,0,1];}}
        };
    
    var
     find_pos=
      function(previous)
       {var next=next_line(buffer,previous);
        
        if(next[2]<=line){return find_pos(next);}else{return previous;}
        };
    
    var result=find_pos(find(buffer[2][1]));
    
    insert_pos(buffer,result);
    return result;
    };

var
 point_of_coord=
  function(buffer,line,column)
   {return pos_of_line(buffer,line)[1]+(-1+column);};

var
 start_and_cnum=
  function(buffer,pos)
   {var line_number=pos[2];
    
    var start=point_of_coord(buffer,line_number,1);
    
    return [0,start,start+(pos[4]-pos[3])];
    };


module["exports"]=
{"source_of_module":source_of_module,
 "buffer_max_count":buffer_max_count,
 "flush_buffer_list":flush_buffer_list,
 "get_buffer":get_buffer,
 "buffer_content":buffer_content,
 "buffer_length":buffer_length,
 "next_linefeed":next_linefeed,
 "next_line":next_line,
 "line_of_pos":line_of_pos,
 "pos_of_line":pos_of_line,
 "point_of_coord":point_of_coord,
 "start_and_cnum":start_and_cnum};

