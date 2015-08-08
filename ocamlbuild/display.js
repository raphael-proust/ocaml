// Generated CODE, PLEASE EDIT WITH CARE 

var Char=require("Char");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Filename=require("Filename");
var Bytes=require("Bytes");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Tags=require("Tags");
var Discard_printf=require("Discard_printf");
var Sys=require("Sys");


var fp=Printf["fprintf"];

var
 up=
  function(oc,n)
   {return fp(oc,[0,[11,"\x1b[",[4,0,0,0,[12,65,0]]],"\x1b[%dA"],n);};

var
 clear_to_eol=
  function(oc,param){return fp(oc,[0,[11,"\x1b[K",0],"\x1b[K"]);};

var bol=function(oc,param){return fp(oc,[0,[12,13,0],"\r"]);};

var
 get_columns=
  function(param)
   {if("unknown primitive:caml_string_equal")
     {try
       {return "unknown primitive:caml_int_of_string";}
      catch(exn){if(exn[1]=Failure){return 80;}else{throw exn;}}
      }
    else
     {return 80;}
    };

var ANSI=[0,up,clear_to_eol,bol,get_columns];

var default_update_interval=0.05;

var
 default_tagline_description=
  [0,
   [0,"ocaml",79],
   [0,
    [0,"native",78],
    [0,
     [0,"byte",66],
     [0,
      [0,"program",80],
      [0,
       [0,"pp",82],
       [0,[0,"debug",68],[0,[0,"interf",73],[0,[0,"link",76],0]]]]]]]];

var countdown_chars=8;

var jobs_chars=3;

var jobs_cached_chars=5;

var dots="...";

var start_target="STARTING";

var finish_target="FINISHED";

var ticker_chars=3;

var ticker_period=0.25;

var ticker_animation=["\","|","/","-"];

var cached="*";

var uncached=" ";

var cache_chars=1;

var
 create_tagline=
  function(description)
   {return Bytes["make"](My_std["List"][5](description),45);};

var
 create=
  function
   ($staropt$star,
    $staropt$star$1,
    $staropt$star$2,
    $staropt$star$3,
    log_file,
    $staropt$star$4,
    param)
   {if($staropt$star)
     {var channel=$staropt$star[1];}
    else
     {var channel=Pervasives["stdout"];}
    
    if($staropt$star$1)
     {var mode=$staropt$star$1[1];}
    else
     {var mode=-369468030;}
    
    if($staropt$star$2)
     {var _columns=$staropt$star$2[1];}
    else
     {var _columns=75;}
    
    if($staropt$star$3)
     {var description=$staropt$star$3[1];}
    else
     {var description=default_tagline_description;}
    
    if($staropt$star$4)
     {var log_level=$staropt$star$4[1];}
    else
     {var log_level=1;}
    
    if(log_file)
     {var
       oc=
        Pervasives["open_out_gen"]([0,7,[0,1,[0,3,[0,4,0]]]],438,log_file[1]);
      
      var f=Format["formatter_of_out_channel"](oc);
      
      Format["fprintf"]
       (f,[0,[11,"### Starting build.\n",0],"### Starting build.\n"]);
      var log_channel=[/* Some */0,[/* tuple */0,f,oc]];
      }
    else
     {var log_channel=0;}
    
    if(mode>=920812018)
     {var display_line=0;}
    else
     {var n=ANSI[4](0);
      
      var tag_chars=My_std["List"][5](description);
      
      var
       display_line=
        [/* Sophisticated */0,
         [/* record */0,
          Pervasives["stdout"],
          My_unix["gettimeofday"](0),
          0,
          start_target,
          0,
          Tags["empty"],
          0,
          default_update_interval,
          n,
          0,
          0,
          create_tagline(description),
          Tags["empty"],
          n-
          (countdown_chars+
           1+
           jobs_chars+
           1+
           jobs_cached_chars+
           1+
           cache_chars+
           1+
           tag_chars+
           1+
           ticker_chars+
           2),
          description]];
      }
    
    return [/* record */0,
            log_level,
            log_channel,
            channel,
            Format["formatter_of_out_channel"](channel),
            display_line,
            0];
    };

var
 print_time=
  function(oc,t)
   {var t$1=t;
    
    var s=t$1%60;
    
    var m=t$1/60%60;
    
    var h=t$1/3600;
    
    return fp
            (oc,
             [0,
              [4,
               0,
               [0,2,2],
               0,
               [12,58,[4,0,[0,2,2],0,[12,58,[4,0,[0,2,2],0,0]]]]],
              "%02d:%02d:%02d"],
             h,
             m,
             s);
    };

var
 print_shortened_pathname=
  function(length,oc,u)
   {if(length>=3){}else{throw [0,Assert_failure,[0,"display.ml",175,2]];}
    
    var m=u["length"];
    
    if(m<=length)
     {Pervasives["output_string"](oc,u);
      return fp(oc,[0,[2,[1,1],0],"%*s"],length-m,"");
      }
    else
     {var n=dots["length"];
      
      var k=length-n;
      
      Pervasives["output_string"](oc,dots);
      return Pervasives["output_substring"](oc,u,m-k,k);
      }
    };

var
 redraw_sophisticated=
  function(ds)
   {var t=My_unix["gettimeofday"](0);
    
    var oc=ds[1];
    
    var dt=t-ds[2];
    
    ds[3]=t,0;
    fp(oc,[0,[15,0],"%a"],ANSI[3],0);
    var
     ticker_phase=
      Pervasives["abs"]("unknown primitive:caml_ceil_float")%
      ticker_animation["length"];
    
    var ticker=ticker_animation[ticker_phase];
    
    fp
     (oc,
      [0,
       [15,
        [12,
         32,
         [4,
          0,
          [0,0,4],
          0,
          [11,
           " (",
           [4,
            0,
            [0,0,4],
            0,
            [11,") ",[15,[12,32,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]]]]]],
       "%a %-4d (%-4d) %a %s %s %s"],
      print_time,
      dt,
      ds[10],
      ds[11],
      print_shortened_pathname(ds[14]),
      ds[4],
      ds[5]?cached:uncached,
      Bytes["to_string"](ds[12]),
      ticker);
    return fp(oc,[0,[15,[10,0]],"%a%!"],ANSI[2],0);
    };

var
 redraw=
  function(param)
   {if(param){return redraw_sophisticated(param[1]);}else{return 0;}};

var
 finish_sophisticated=
  function($staropt$star,ds)
   {if($staropt$star){var how=$staropt$star[1];}else{var how=94326179;}
    
    var t=My_unix["gettimeofday"](0);
    
    var oc=ds[1];
    
    var dt=t-ds[2];
    
    if(how>=94326179)
     {fp(oc,[0,[15,0],"%a"],ANSI[3],0);
      fp
       (oc,
        [0,
         [2,
          0,
          [12,
           32,
           [4,
            0,
            0,
            0,
            [11,
             " target",
             [2,0,[11," (",[4,0,0,0,[11," cached) in ",[15,[12,46,0]]]]]]]]]],
         "%s %d target%s (%d cached) in %a."],
        (how=106380200)?"Compilation unsuccessful after building":"Finished,",
        ds[10],
        (ds[10]=1)?"":"s",
        ds[11],
        print_time,
        dt);
      return fp(oc,[0,[15,[12,10,[10,0]]],"%a\n%!"],ANSI[2],0);
      }
    else
     {return fp(oc,[0,[15,[15,[10,0]]],"%a%a%!"],ANSI[3],0,ANSI[2],0);}
    };

var
 sophisticated_display=
  function(ds,f)
   {fp(ds[1],[0,[15,[15,[10,0]]],"%a%a%!"],ANSI[3],0,ANSI[2],0);
    return f(ds[1]);
    };

var
 call_if=
  function(log_channel,f)
   {if(log_channel){return f(log_channel[1]);}else{return 0;}};

var
 display=
  function(di,f)
   {call_if(di[2],function(param){return f(param[2]);});
    var match=di[5];
    
    if(match){return sophisticated_display(match[1],f);}else{return f(di[3]);}
    };

var
 finish=
  function($staropt$star,di)
   {if($staropt$star){var how=$staropt$star[1];}else{var how=94326179;}
    
    if(!di[6])
     {di[6]=1,0;
      call_if
       (di[2],
        function(param)
         {Format["fprintf"]
           (param[1],
            [0,
             [11,"# Compilation ",[2,0,[11,"successful.",[17,4,0]]]],
             "# Compilation %ssuccessful.@."],
            (how=106380200)?"un":"");
          Pervasives["close_out"](param[2]);
          return di[2]=0,0;
          });
      var match=di[5];
      
      if(match)
       {return finish_sophisticated([/* Some */0,how],match[1]);}
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var
 update_tagline_from_tags=
  function(ds)
   {var tagline=ds[12];
    
    var tags=ds[6];
    
    var
     loop=
      function(i,param)
       {if(param)
         {var match=param[1];
          
          var c=match[2];
          
          var tag=match[1];
          
          if(Tags["mem"](tag,tags))
           {tagline[i]=Char["uppercase"](c),0}
          else
           {if(Tags["mem"](tag,ds[13]))
             {tagline[i]=Char["lowercase"](c),0}
            else
             {tagline[i]=45,0}
            }
          
          return loop(i+1,param[2]);
          }
        else
         {for(var j=i;j<=tagline["length"]-1;j++){tagline[j]=45,0}}
        };
    
    return loop(0,ds[15]);
    };

var
 update_sophisticated=
  function(ds)
   {var t=My_unix["gettimeofday"](0);
    
    var dt=t-ds[3];
    
    if(dt>ds[8])
     {if(ds[7]){update_tagline_from_tags(ds),ds[7]=0,0}else{}
      
      return redraw_sophisticated(ds);
      }
    else
     {return 0;}
    };

var
 set_target_sophisticated=
  function(ds,target,tags,cached$1)
   {ds[7]=1,0;
    ds[4]=target,0;
    ds[6]=tags,0;
    ds[10]=1+ds[10],0;
    if(cached$1){ds[11]=1+ds[11],0}else{}
    
    ds[5]=cached$1,0;
    ds[13]=Tags["union"](ds[13],ds[6]),0;
    return update_sophisticated(ds);
    };

var
 print_tags=
  function(f,tags)
   {var first=[0,1];
    
    return Tags["iter"]
            (function(tag)
              {if(first[1])
                {first[1]=0,0;
                 return Format["fprintf"](f,[0,[2,0,0],"%s"],tag);
                 }
               else
                {return Format["fprintf"](f,[0,[11,", ",[2,0,0]],", %s"],tag);
                 }
               },
             tags);
    };

var
 update=
  function(di)
   {var match=di[5];
    
    if(match){return update_sophisticated(match[1]);}else{return 0;}
    };

var
 $$event=
  function(di,$staropt$star,command,target,tags)
   {if($staropt$star){var pretend=$staropt$star[1];}else{var pretend=0;}
    
    call_if
     (di[2],
      function(param)
       {var fmt=param[1];
        
        Format["fprintf"]
         (fmt,
          [0,
           [11,"# Target: ",[2,0,[11,", tags: { ",[15,[11," }\n",0]]]]],
           "# Target: %s, tags: { %a }\n"],
          target,
          print_tags,
          tags);
        return Format["fprintf"]
                (fmt,
                 [0,[2,0,[2,0,[17,4,0]]],"%s%s@."],
                 command,
                 pretend?" # cached":"");
        });
    var match=di[5];
    
    if(match)
     {var ds=match[1];
      
      set_target_sophisticated(ds,target,tags,pretend);
      return update_sophisticated(ds);
      }
    else
     {if(pretend)
       {var command$1=Filename["basename"](command);
        
        if(di[1]>=2)
         {return Format["fprintf"]
                  (di[4],
                   [0,
                    [11,"[cache hit] ",[2,0,[12,10,[10,0]]]],
                    "[cache hit] %s\n%!"],
                   command$1);
          }
        else
         {return 0;}
        }
      else
       {if(di[1]>=1)
         {return Format["fprintf"]
                  (di[4],[0,[2,0,[12,10,[10,0]]],"%s\n%!"],command);
          }
        else
         {return 0;}
        }
      }
    };

var
 dprintf=
  function($staropt$star,di,fmt)
   {if($staropt$star){var log_level=$staropt$star[1];}else{var log_level=1;}
    
    if(log_level>di[1])
     {return Discard_printf["discard_printf"](fmt);}
    else
     {var match=di[5];
      
      if(match)
       {if(log_level<0)
         {display(di,function(prim){return 0;});
          return Format["fprintf"](di[4],fmt);
          }
        else
         {var match$1=di[2];
          
          if(match$1)
           {return Format["fprintf"](match$1[1][1],fmt);}
          else
           {return Discard_printf["discard_printf"](fmt);}
          }
        }
      else
       {return Format["fprintf"](di[4],fmt);}
      }
    };

module["exports"]=
{"create":create,
 "finish":finish,
 "event":$$event,
 "display":display,
 "update":update,
 "dprintf":dprintf};

