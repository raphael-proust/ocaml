// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var CamlPrimtivie=require("CamlPrimtivie");
var Set=require("Set");
var Queue=require("Queue");
var Unix=require("Unix");
var Buffer=require("Buffer");
var Printexc=require("Printexc");
var Map=require("Map");


var
 compare=
  function(prim,prim){return CamlPrimtivie["caml_compare"](prim$1,prim);};

var JS=Set["Make"]([0,compare]);

var
 compare$1=
  function(prim,prim){return CamlPrimtivie["caml_compare"](prim$1,prim);};

var FDM=Map["Make"]([0,compare$1]);

var sf=Printf["sprintf"];

var fp=Printf["fprintf"];

var
 print_unix_status=
  function(oc,param)
   {switch(param[0])
     {case 0:
       return fp
               (oc,
                [/* Format */0,
                 [/* String_literal */11,
                  "exit ",
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "exit %d"],
                param[1]);
       
      case 1:
       return fp
               (oc,
                [/* Format */0,
                 [/* String_literal */11,
                  "signal ",
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "signal %d"],
                param[1]);
       
      case 2:
       return fp
               (oc,
                [/* Format */0,
                 [/* String_literal */11,
                  "stop ",
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "stop %d"],
                param[1]);
       
      }
    };

var
 print_job_id=
  function(oc,param)
   {return fp
            (oc,
             [/* Format */0,
              [/* Int */4,
               /* Int_d */0,
               /* No_padding */0,
               /* No_precision */0,
               [/* Char_literal */12,
                46,
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0]]],
              "%d.%d"],
             param[1],
             param[2]);
    };

var
 output_lines=
  function(prefix,oc,buffer)
   {var u=Buffer["contents"](buffer);
    
    var m=u["length"];
    
    var
     output_line=
      function(i,j)
       {Pervasives["output_string"](oc,prefix);
        Pervasives["output_substring"](oc,u,i,j-i);
        return Pervasives["output_char"](oc,10);
        };
    
    var
     loop=
      function(i)
       {if(i<m)
         {try
           {var j=$$String["index_from"](u,i,10);}
          catch(exn){if(exn=Not_found){var j=m;}else{throw exn;}}
          
          output_line(i,j);
          return loop(j+1);
          }
        else
         {return /* () */0;}
        };
    
    return loop(0);
    };

var
 execute=
  function
   ($staropt$star,$staropt$star,$staropt$star,$staropt$star,exit,commands)
   {if($staropt$star$1)
     {var max_jobs=$staropt$star$1[1];}
    else
     {var max_jobs=Pervasives["max_int"];}
    
    if($staropt$star$2)
     {var ticker=$staropt$star$2[1];}
    else
     {var ticker=function(prim){return prim;};}
    
    if($staropt$star$3){var period=$staropt$star$3[1];}else{var period=0.1;}
    
    if($staropt$star)
     {var display=$staropt$star[1];}
    else
     {var display=function(f){return f(Pervasives["stdout"]);};}
    
    var batch_id=[0,0];
    
    var env=Unix["environment"](/* () */0);
    
    var jobs=[0,JS[1]];
    
    var jobs_active=[0,0];
    
    var jobs_to_terminate=Queue["create"](/* () */0);
    
    var commands_to_execute=Queue["create"](/* () */0);
    
    var all_ok=[0,/* true */1];
    
    var
     results=
      List["map"]
       (function(tasks)
         {var result=[0,/* false */0];
          
          Queue["add"](/* tuple */[0,tasks,result],commands_to_execute);
          return result;
          },
        commands);
    
    var outputs=[0,FDM[1]];
    
    var doi=Unix["descr_of_in_channel"];
    
    var doo=Unix["descr_of_out_channel"];
    
    var fds=[0,[/* tuple */0,/* [] */0,/* [] */0,/* [] */0]];
    
    var prev_jobs=[0,JS[1]];
    
    var
     compute_fds=
      function(param)
       {if(!(prev_jobs[1]=jobs[1]))
         {prev_jobs[1]=
          jobs[1],
          0,
          fds[1]=
          JS[14]
           (function(job,param$1)
             {var ofd=doi(job[5]);
              
              var ifd=doo(job[6]);
              
              var efd=doi(job[7]);
              
              return /* tuple */[0,
                      /* :: */[0,ofd,/* :: */[0,efd,param$1[1]]],
                      param$1[2],
                      /* :: */[0,ofd,/* :: */[0,ifd,/* :: */[0,efd,param$1[3]]]]];
              },
            jobs[1],
            [/* tuple */0,/* [] */0,/* [] */0,/* [] */0]),
          0}
        else
         {}
        
        return fds[1];
        };
    
    var
     add_job=
      function(cmd,rest,result,id)
       {var match=Unix["open_process_full"](cmd,env);
        
        var stderr$prime=match[3];
        
        var stdout$prime=match[1];
        
        jobs_active[0]++;
        Unix["set_nonblock"](doi(stdout$prime));
        Unix["set_nonblock"](doi(stderr$prime));
        var
         job=
          /* record */[0,
           id,
           cmd,
           rest,
           result,
           stdout$prime,
           match[2],
           stderr$prime,
           Buffer["create"](1024),
           /* false */0];
        
        outputs[1]=
        FDM[4](doi(stdout$prime),job,FDM[4](doi(stderr$prime),job,outputs[1])),
        0;
        return jobs[1]=JS[4](job,jobs[1]),0;
        };
    
    var
     skip_empty_tasks=
      function(param)
       {if(param)
         {var tasks=param[2];
          
          var cmd=param[1](/* () */0);
          
          if(CamlPrimtivie["caml_string_equal"](cmd,""))
           {return skip_empty_tasks(tasks);}
          else
           {return /* Some */[0,/* tuple */[0,cmd,tasks]];}
          }
        else
         {return /* None */0;}
        };
    
    var
     add_some_jobs=
      function(param)
       {var match=Queue["take"](commands_to_execute);
        
        var result=match[2];
        
        var match$1=skip_empty_tasks(match[1]);
        
        if(match$1)
         {var match$2=match$1[1];
          
          var b_id=batch_id[1];
          
          batch_id[0]++;
          return add_job(match$2[1],match$2[2],result,/* tuple */[0,b_id,0]);
          }
        else
         {return result[1]=/* false */0,0;}
        };
    
    var
     terminate=
      function($staropt$star,job)
       {if($staropt$star)
         {var $$continue=$staropt$star[1];}
        else
         {var $$continue=/* true */1;}
        
        if(!job[9])
         {job[9]=/* true */1,0;
          return Queue["add"](/* tuple */[0,job,$$continue],jobs_to_terminate);
          }
        else
         {return /* () */0;}
        };
    
    var
     add_more_jobs_if_possible=
      function(param)
       {while
         (jobs_active[1]<max_jobs&&!Queue["is_empty"](commands_to_execute))
         {add_some_jobs(/* () */0)}
        return 0;
        };
    
    var u=CamlPrimtivie["caml_create_string"](4096);
    
    var
     do_read=
      function($staropt$star,fd,job)
       {if($staropt$star)
         {var loop=$staropt$star[1];}
        else
         {var loop=/* false */0;}
        
        try
         {var
           iteration=
            function(param)
             {try
               {var m=Unix["read"](fd,u,0,u["length"]);}
              catch(exn)
               {if(exn[1]=Unix["Unix_error"])
                 {var msg=Unix["error_message"](exn[2]);
                  
                  display
                   (function(oc)
                     {return fp
                              (oc,
                               [/* Format */0,
                                [/* String_literal */11,
                                 "Error while reading stdout/stderr: ",
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,10,/* End_of_format */0]]],
                                "Error while reading stdout/stderr: %s\n"],
                               msg);
                      });
                  var m=0;
                  }
                else
                 {throw exn;}
                }
              
              if(m=0)
               {if(job[9])
                 {return /* () */0;}
                else
                 {return terminate(/* None */0,job);}
                }
              else
               {Buffer["add_subbytes"](job[8],u,0,m);
                if(loop){return iteration(/* () */0);}else{return /* () */0;}
                }
              };
          
          return iteration(/* () */0);
          }
        catch(x)
         {display
           (function(oc)
             {return fp
                      (oc,
                       [/* Format */0,
                        [/* String_literal */11,
                         "Exception ",
                         [/* String */2,
                          /* No_padding */0,
                          [/* String_literal */11,
                           " while reading output of command ",
                           [/* Caml_string */3,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             10,
                             [/* Flush */10,/* End_of_format */0]]]]]],
                        "Exception %s while reading output of command %S\n%!"],
                       job[2],
                       Printexc["to_string"](x));
              });
          return exit(/* Io_error */2);
          }
        };
    
    var
     process_jobs_to_terminate=
      function(param)
       {while(!Queue["is_empty"](jobs_to_terminate))
         {ticker(/* () */0);
          var match=Queue["take"](jobs_to_terminate);
          
          var job=match[1];
          
          jobs_active[0]--;
          Unix["clear_nonblock"](doi(job[5]));
          Unix["clear_nonblock"](doi(job[7]));
          do_read([/* Some */0,/* true */1],doi(job[5]),job);
          do_read([/* Some */0,/* true */1],doi(job[7]),job);
          outputs[1]=FDM[6](doi(job[5]),FDM[6](doi(job[7]),outputs[1])),0;
          jobs[1]=JS[6](job,jobs[1]),0;
          var
           status=
            Unix["close_process_full"](/* tuple */[0,job[5],job[6],job[7]]);
          
          var shown=[0,/* false */0];
          
          var
           show_command=
            function(param$1)
             {if(shown[1])
               {return /* () */0;}
              else
               {return display
                        (function(oc)
                          {shown[1]=/* true */1,0;
                           fp
                            (oc,
                             [/* Format */0,
                              [/* String_literal */11,
                               "+ ",
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,10,/* End_of_format */0]]],
                              "+ %s\n"],
                             job[2]);
                           return output_lines("",oc,job[8]);
                           });
                }
              };
          
          if(Buffer["length"](job[8])>0){show_command(/* () */0)}else{}
          
          var exit$1;
          
          switch(status[0])
           {case 0:
             var rc=status[1];
             
             if(rc!=0)
              {show_command(/* () */0),
               display
                (function(oc)
                  {return fp
                           (oc,
                            [/* Format */0,
                             [/* String_literal */11,
                              "Command exited with code ",
                              [/* Int */4,
                               /* Int_d */0,
                               /* No_padding */0,
                               /* No_precision */0,
                               [/* String_literal */11,".\n",/* End_of_format */0]]],
                             "Command exited with code %d.\n"],
                            rc);
                   }),
               all_ok[1]=
               /* false */0,
               0,
               exit(/* Subcommand_failed */0)}
             else
              {if(match[2])
                {var match$1=skip_empty_tasks(job[3]);
                 
                 if(match$1)
                  {var match$2=match$1[1];
                   
                   var match$3=job[1];
                   
                   add_job
                    (match$2[1],
                     match$2[2],
                     job[4],
                     /* tuple */[0,match$3[1],match$3[2]+1])}
                 else
                  {job[4][1]=/* true */1,0}
                 }
               else
                {all_ok[1]=/* false */0,0}
               }
             
            case 1:exit$1=11;
            case 2:exit$1=11;
            }
          
          switch(exit$1)
           {case 11:
             var s=status[1];
             
             show_command(/* () */0),
             all_ok[1]=
             /* false */0,
             0,
             display
              (function(oc)
                {return fp
                         (oc,
                          [/* Format */0,
                           [/* String_literal */11,
                            "Command got signal ",
                            [/* Int */4,
                             /* Int_d */0,
                             /* No_padding */0,
                             /* No_precision */0,
                             [/* String_literal */11,".\n",/* End_of_format */0]]],
                           "Command got signal %d.\n"],
                          s);
                 }),
             exit(/* Subcommand_got_signal */1)
            }
          }
        return 0;
        };
    
    var
     terminate_all_jobs=
      function(param)
       {return JS[13](terminate([/* Some */0,/* false */0]),jobs[1]);};
    
    var
     loop=
      function(param)
       {process_jobs_to_terminate(/* () */0);
        add_more_jobs_if_possible(/* () */0);
        if(JS[2](jobs[1]))
         {return /* () */0;}
        else
         {var match=compute_fds(/* () */0);
          
          ticker(/* () */0);
          var match$1=Unix["select"](match[1],match[2],match[3],period);
          
          List["iter"]
           (function(param$1)
             {var hook=param$1[2];
              
              return List["iter"]
                      (function(fd)
                        {try
                          {var job=FDM[22](fd,outputs[1]);
                           
                           ticker(/* () */0);
                           return hook(fd,job);
                           }
                         catch(exn)
                          {if(exn=Not_found){return /* () */0;}else{throw exn;}}
                         },
                       param$1[1]);
              },
            /* :: */[0,
             /* tuple */[0,match$1[1],do_read([/* Some */0,/* false */0])],
             /* :: */[0,
              /* tuple */[0,
               match$1[2],
               function(param$1,param$2){return /* () */0;}],
              /* :: */[0,
               /* tuple */[0,
                match$1[3],
                function(param$1,_job){return /* () */0;}],
               /* [] */0]]]);
          return loop(/* () */0);
          }
        };
    
    try
     {loop(/* () */0);return /* None */0;}
    catch(x)
     {try
       {terminate_all_jobs(/* () */0)}
      catch(x$prime)
       {display
         (function(oc)
           {return fp
                    (oc,
                     [/* Format */0,
                      [/* String_literal */11,
                       "Extra exception ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         10,
                         [/* Flush */10,/* End_of_format */0]]]],
                      "Extra exception %s\n%!"],
                     Printexc["to_string"](x$prime));
            })}
      
      return /* Some */[0,
              /* tuple */[0,
               List["map"](function(prim){return prim[1];},results),
               x]];
      }
    };

module["exports"]={"execute":execute};

