var String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Queue=require("Queue");
var Set=require("Set");
var Unix=require("Unix");
var Buffer=require("Buffer");
var Printexc=require("Printexc");
var Map=require("Map");
var $js=Set["Make"];
var compare=function(prim,prim$1){return "unknown primitive:caml_compare"};
var $js$1=[0,compare];
var JS=$js($js$1);
var $js$2=Map["Make"];
var compare$1=function(prim,prim$1){return "unknown primitive:caml_compare"};
var $js$3=[0,compare$1];
var FDM=$js$2($js$3);
var sf=Printf["sprintf"];
var fp=Printf["fprintf"];
var
 print_unix_status=
  function(oc,param)
   {var $js$4=param;
    if($js$4==0)
     {return fp(oc,[0,[11,"exit ",[4,0,0,0,0]],"exit %d"],param[1])}
    else
     if($js$4==1)
      {return fp(oc,[0,[11,"signal ",[4,0,0,0,0]],"signal %d"],param[1])}
     else
      if($js$4==2)
       {return fp(oc,[0,[11,"stop ",[4,0,0,0,0]],"stop %d"],param[1])}};
var
 print_job_id=
  function(oc,param)
   {return fp(oc,[0,[4,0,0,0,[12,46,[4,0,0,0,0]]],"%d.%d"],param[1],param[2])};
var
 output_lines=
  function(prefix,oc,buffer)
   {var $js$4=Buffer["contents"];
    var u=$js$4(buffer);
    var m=u["length"];
    var
     output_line=
      function(i,j)
       {var $js$5=Pervasives["output_string"];
        $js$5(oc,prefix);
        var $js$6=Pervasives["output_substring"];
        $js$6(oc,u,i,j-i);
        var $js$7=Pervasives["output_char"];
        return $js$7(oc,10)};
    var
     loop=
      function(i)
       {var $js$5=i<m;
        if($js$5)
         {try
           {var $js$6=String["index_from"];var j=$js$6(u,i,10)}
          catch(exn)
           {var $js$7=exn=Not_found;
            if($js$7){var j=m}else{var j="unknown primitive:reraise"}}
          output_line(i,j);
          return loop(j+1)}
        else
         {return 0}};
    return loop(0)};
var
 execute=
  function(*opt*,*opt*$1,*opt*$2,*opt*$3,exit,commands)
   {var $js$4=*opt*;
    if($js$4){var max_jobs=*opt*[1]}else{var max_jobs=Pervasives["max_int"]}
    var $js$5=*opt*$1;
    if($js$5){var ticker=*opt*$1[1]}else{var ticker=function(prim){return 0}}
    var $js$6=*opt*$2;
    if($js$6){var period=*opt*$2[1]}else{var period=0.1}
    var $js$7=*opt*$3;
    if($js$7)
     {var display=*opt*$3[1]}
    else
     {var display=function(f){return f(Pervasives["stdout"])}}
    var batch_id=[0,0];
    var $js$8=Unix["environment"];
    var env=$js$8(0);
    var jobs=[0,JS[1]];
    var jobs_active=[0,0];
    var $js$9=Queue["create"];
    var jobs_to_terminate=$js$9(0);
    var $js$10=Queue["create"];
    var commands_to_execute=$js$10(0);
    var all_ok=[0,1];
    var $js$11=List["map"];
    var
     results=
      $js$11
       (function(tasks)
         {var result=[0,0];
          var $js$12=Queue["add"];
          $js$12([0,tasks,result],commands_to_execute);
          return result},
        commands);
    var outputs=[0,FDM[1]];
    var doi=Unix["descr_of_in_channel"];
    var doo=Unix["descr_of_out_channel"];
    var fds=[0,[0,0,0,0]];
    var prev_jobs=[0,JS[1]];
    var
     compute_fds=
      function(param)
       {var $js$12=!(prev_jobs[1]=jobs[1]);
        if($js$12)
         {prev_jobs[1]=jobs[1],0;
          var $js$13=JS[14];
          var
           $js$14=
            $js$13
             (function(job,param$1)
               {var ofd=doi(job[5]);
                var ifd=doo(job[6]);
                var efd=doi(job[7]);
                return [0,
                        [0,ofd,[0,efd,param$1[1]]],
                        param$1[2],
                        [0,ofd,[0,ifd,[0,efd,param$1[3]]]]]},
              jobs[1],
              [0,0,0,0]);
          fds[1]=$js$14,0}
        else
         {}
        return fds[1]};
    var
     add_job=
      function(cmd,rest,result,id)
       {var $js$12=Unix["open_process_full"];
        var match=$js$12(cmd,env);
        var stderr'=match[3];
        var stdout'=match[1];
        jobs_active[0]++;
        var $js$13=Unix["set_nonblock"];
        var $js$14=doi(stdout');
        $js$13($js$14);
        var $js$15=Unix["set_nonblock"];
        var $js$16=doi(stderr');
        $js$15($js$16);
        var $js$17=Buffer["create"];
        var $js$18=$js$17(1024);
        var job=[0,id,cmd,rest,result,stdout',match[2],stderr',$js$18,0];
        var $js$19=FDM[4];
        var $js$20=doi(stdout');
        var $js$21=FDM[4];
        var $js$22=doi(stderr');
        var $js$23=$js$21($js$22,job,outputs[1]);
        var $js$24=$js$19($js$20,job,$js$23);
        outputs[1]=$js$24,0;
        var $js$25=JS[4];
        var $js$26=$js$25(job,jobs[1]);
        return jobs[1]=$js$26,0};
    var
     skip_empty_tasks=
      function(param)
       {var $js$12=param;
        if($js$12)
         {var tasks=param[2];
          var $js$13=param[1];
          var cmd=$js$13(0);
          var $js$14="unknown primitive:caml_string_equal";
          if($js$14)
           {return skip_empty_tasks(tasks)}
          else
           {return [0,[0,cmd,tasks]]}}
        else
         {return 0}};
    var
     add_some_jobs=
      function(param)
       {var $js$12=Queue["take"];
        var match=$js$12(commands_to_execute);
        var result=match[2];
        var match$1=skip_empty_tasks(match[1]);
        var $js$13=match$1;
        if($js$13)
         {var match$2=match$1[1];
          var b_id=batch_id[1];
          batch_id[0]++;
          return add_job(match$2[1],match$2[2],result,[0,b_id,0])}
        else
         {return result[1]=0,0}};
    var
     terminate=
      function(*opt*$4,job)
       {var $js$12=*opt*$4;
        if($js$12){var continue=*opt*$4[1]}else{var continue=1}
        var $js$13=!job[9];
        if($js$13)
         {job[9]=1,0;
          var $js$14=Queue["add"];
          return $js$14([0,job,continue],jobs_to_terminate)}
        else
         {return 0}};
    var
     add_more_jobs_if_possible=
      function(param)
       {for(;;)
         {var $js$12=Queue["is_empty"];
          var $js$13=$js$12(commands_to_execute);
          var $js$14=!$js$13;
          var $js$15=jobs_active[1]<max_jobs&&$js$14;
          if($js$15){add_some_jobs(0)}else break}
        return 0};
    var u="unknown primitive:caml_create_string";
    var
     do_read=
      function(*opt*$4,fd,job)
       {var $js$12=*opt*$4;
        if($js$12){var loop=*opt*$4[1]}else{var loop=0}
        try
         {var
           iteration=
            function(param)
             {try
               {var $js$13=Unix["read"];var m=$js$13(fd,u,0,u["length"])}
              catch(exn)
               {var $js$14=exn[1]=Unix["Unix_error"];
                if($js$14)
                 {var $js$15=Unix["error_message"];
                  var msg=$js$15(exn[2]);
                  display
                   (function(oc)
                     {return fp
                              (oc,
                               [0,
                                [11,"Error while reading stdout/stderr: ",[2,0,[12,10,0]]],
                                "Error while reading stdout/stderr: %s\n"],
                               msg)});
                  var m=0}
                else
                 {var m="unknown primitive:reraise"}}
              var $js$16=m=0;
              if($js$16)
               {var $js$17=job[9];
                if($js$17){return 0}else{return terminate(0,job)}}
              else
               {var $js$18=Buffer["add_subbytes"];
                $js$18(job[8],u,0,m);
                var $js$19=loop;
                if($js$19){return iteration(0)}else{return 0}}};
          return iteration(0)}
        catch(x)
         {display
           (function(oc)
             {var $js$13=Printexc["to_string"];
              var $js$14=$js$13(x);
              return fp
                      (oc,
                       [0,
                        [11,
                         "Exception ",
                         [2,
                          0,
                          [11,
                           " while reading output of command ",
                           [3,0,[12,10,[10,0]]]]]],
                        "Exception %s while reading output of command %S\n%!"],
                       job[2],
                       $js$14)});
          return exit(2)}};
    var
     process_jobs_to_terminate=
      function(param)
       {for(;;)
         {var $js$12=Queue["is_empty"];
          var $js$13=$js$12(jobs_to_terminate);
          var $js$14=!$js$13;
          if($js$14)
           {ticker(0);
            var $js$15=Queue["take"];
            var match=$js$15(jobs_to_terminate);
            var job=match[1];
            jobs_active[0]--;
            var $js$16=Unix["clear_nonblock"];
            var $js$17=doi(job[5]);
            $js$16($js$17);
            var $js$18=Unix["clear_nonblock"];
            var $js$19=doi(job[7]);
            $js$18($js$19);
            var $js$20=doi(job[5]);
            do_read([0,1],$js$20,job);
            var $js$21=doi(job[7]);
            do_read([0,1],$js$21,job);
            var $js$22=FDM[6];
            var $js$23=doi(job[5]);
            var $js$24=FDM[6];
            var $js$25=doi(job[7]);
            var $js$26=$js$24($js$25,outputs[1]);
            var $js$27=$js$22($js$23,$js$26);
            outputs[1]=$js$27,0;
            var $js$28=JS[6];
            var $js$29=$js$28(job,jobs[1]);
            jobs[1]=$js$29,0;
            var $js$30=Unix["close_process_full"];
            var status=$js$30([0,job[5],job[6],job[7]]);
            var shown=[0,0];
            var
             show_command=
              function(param$1)
               {var $js$31=shown[1];
                if($js$31)
                 {return 0}
                else
                 {return display
                          (function(oc)
                            {shown[1]=1,0;
                             fp(oc,[0,[11,"+ ",[2,0,[12,10,0]]],"+ %s\n"],job[2]);
                             return output_lines("",oc,job[8])})}};
            var $js$31=Buffer["length"];
            var $js$32=$js$31(job[8]);
            var $js$33=$js$32>0;
            if($js$33){show_command(0)}else{}
            var $js$34=status;
            if($js$34==0)
             {var rc=status[1];
              var $js$35=rc!=0;
              if($js$35)
               {show_command(0);
                display
                 (function(oc)
                   {return fp
                            (oc,
                             [0,
                              [11,"Command exited with code ",[4,0,0,0,[11,".\n",0]]],
                              "Command exited with code %d.\n"],
                             rc)});
                all_ok[1]=0,0;
                exit(0)}
              else
               {var $js$36=match[2];
                if($js$36)
                 {var match$1=skip_empty_tasks(job[3]);
                  var $js$37=match$1;
                  if($js$37)
                   {var match$2=match$1[1];
                    var match$3=job[1];
                    add_job
                     (match$2[1],match$2[2],job[4],[0,match$3[1],match$3[2]+1])}
                  else
                   {job[4][1]=1,0}}
                else
                 {all_ok[1]=0,0}}}
            else
             if($js$34==1){var exit$1=11}else if($js$34==2){var exit$1=11}
            switch(exit$1)
             {case 11:
               var s=status[1];
               show_command(0);
               all_ok[1]=0,0;
               display
                (function(oc)
                  {return fp
                           (oc,
                            [0,
                             [11,"Command got signal ",[4,0,0,0,[11,".\n",0]]],
                             "Command got signal %d.\n"],
                            s)});
               exit(1)
              }}
          else
           break}
        return 0};
    var
     terminate_all_jobs=
      function(param)
       {var $js$12=JS[13];
        var $js$13=terminate([0,0]);
        return $js$12($js$13,jobs[1])};
    var
     loop=
      function(param)
       {process_jobs_to_terminate(0);
        add_more_jobs_if_possible(0);
        var $js$12=JS[2];
        var $js$13=$js$12(jobs[1]);
        if($js$13)
         {return 0}
        else
         {var match=compute_fds(0);
          ticker(0);
          var $js$14=Unix["select"];
          var match$1=$js$14(match[1],match[2],match[3],period);
          var $js$15=List["iter"];
          var $js$16=do_read([0,0]);
          var $js$17=[0,match$1[1],$js$16];
          var
           $js$18=
            [0,
             $js$17,
             [0,
              [0,match$1[2],function(param$1,param$2){return 0}],
              [0,[0,match$1[3],function(param$1,_job){return 0}],0]]];
          $js$15
           (function(param$1)
             {var hook=param$1[2];
              var $js$19=List["iter"];
              return $js$19
                      (function(fd)
                        {try
                          {var $js$20=FDM[22];
                           var job=$js$20(fd,outputs[1]);
                           ticker(0);
                           return hook(fd,job)}
                         catch(exn)
                          {var $js$21=exn=Not_found;
                           if($js$21){return 0}else{return "unknown primitive:reraise"}}},
                       param$1[1])},
            $js$18);
          return loop(0)}};
    try
     {loop(0);return 0}
    catch(x)
     {try
       {terminate_all_jobs(0)}
      catch(x')
       {display
         (function(oc)
           {var $js$12=Printexc["to_string"];
            var $js$13=$js$12(x');
            return fp
                    (oc,
                     [0,
                      [11,"Extra exception ",[2,0,[12,10,[10,0]]]],
                      "Extra exception %s\n%!"],
                     $js$13)})}
      var $js$12=List["map"];
      var $js$13=$js$12(function(prim){return prim[1]},results);
      var $js$14=[0,$js$13,x];
      return [0,$js$14]}};
module["exports"]={"execute":execute};
