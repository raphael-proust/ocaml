var List=require("List");
var Pervasives=require("Pervasives");
var Random=require("Random");
var Queue=require("Queue");
var Condition=require("Condition");
var Array=require("Array");
var Mutex=require("Mutex");
var
 new_channel=
  function(param)
   {var $js=Queue["create"];
    var $js$1=$js(0);
    var $js$2=Queue["create"];
    var $js$3=$js$2(0);
    return [0,$js$1,$js$3]};
var $js=Mutex["create"];
var masterlock=$js(0);
var
 do_aborts=
  function(abort_env,genev,performed)
   {var $js$1=abort_env!=0;
    if($js$1)
     {var $js$2=performed>=0;
      if($js$2)
       {var $js$3=genev[performed];
        var ids_done=$js$3[2];
        var $js$4=List["iter"];
        return $js$4
                (function(param)
                  {var f=param[2];
                   var id=param[1];
                   var $js$5=List["mem"];
                   var $js$6=$js$5(id,ids_done);
                   var $js$7=!$js$6;
                   if($js$7){return f(0)}else{return 0}},
                 abort_env)}
      else
       {var $js$5=List["iter"];
        return $js$5(function(param){var f=param[2];return f(0)},abort_env)}}
    else
     {return 0}};
var
 basic_sync=
  function(abort_env,genev)
   {var performed=[0,-1];
    var $js$1=Condition["create"];
    var condition=$js$1(0);
    var $js$2=genev[0];
    var $js$3=$js$2[1];
    var $js$4=$js$3(performed,condition,0);
    var bev="unknown primitive:caml_make_vect";
    var $js$5=1;
    var $js$6=genev["length"]-1;
    for(var i=$js$5;i<=$js$6;i++)
     {var $js$7=genev[i];
      var $js$8=$js$7[1];
      var $js$9=$js$8(performed,condition,i);
      bev[i]=$js$9,0}
    var
     poll_events=
      function(i$1)
       {var $js$10=i$1>=bev["length"];
        if($js$10)
         {return 0}
        else
         {var $js$11=bev[i$1];
          var $js$12=$js$11[1];
          var $js$13=$js$12(0);
          var $js$14=poll_events(i$1+1);
          return $js$13||$js$14}};
    var $js$10=Mutex["lock"];
    $js$10(masterlock);
    var $js$11=poll_events(0);
    var $js$12=!$js$11;
    if($js$12)
     {var $js$13=0;
      var $js$14=bev["length"]-1;
      for(var i$1=$js$13;i$1<=$js$14;i$1++)
       {var $js$15=bev[i$1];var $js$16=$js$15[2];$js$16(0)}
      var $js$17=Condition["wait"];
      $js$17(condition,masterlock)}
    else
     {}
    var $js$18=Mutex["unlock"];
    $js$18(masterlock);
    var $js$19=abort_env=0;
    if($js$19)
     {var $js$20=bev[performed[1]];var $js$21=$js$20[3];return $js$21(0)}
    else
     {var num=performed[1];
      var $js$22=bev[num];
      var $js$23=$js$22[3];
      var result=$js$23(0);
      do_aborts(abort_env,genev,num);
      return result}};
var
 scramble_array=
  function(a)
   {var len=a["length"];
    var $js$1=len=0;
    if($js$1){var $js$2=Pervasives["invalid_arg"];$js$2("Event.choose")}else{}
    var $js$3=len-1;
    var $js$4=1;
    for(var i=$js$3;i>=$js$4;i--)
     {var $js$5=Random["int"];
      var j=$js$5(i+1);
      var temp=a[i];
      var $js$6=a[j];
      a[i]=$js$6,0;
      a[j]=temp,0}
    return a};
var count=[0,0];
var gensym=function(param){count[0]++;return count[1]};
var
 flatten_event=
  function(abort_list,accu,accu_abort,ev)
   {var $js$1=ev;
    if($js$1==0)
     {var bev=ev[1];return [0,[0,[0,bev,abort_list],accu],accu_abort]}
    else
     if($js$1==1)
      {var evl=ev[1];
       var
        flatten_list=
         function(accu',accu_abort',param)
          {var $js$2=param;
           if($js$2)
            {var l=param[2];
             var ev$1=param[1];
             var match=flatten_event(abort_list,accu',accu_abort',ev$1);
             var accu_abort''=match[2];
             var accu''=match[1];
             return flatten_list(accu'',accu_abort'',l)}
           else
            {return [0,accu',accu_abort']}};
       return flatten_list(accu,accu_abort,evl)}
     else
      if($js$1==2)
       {var fn=ev[2];
        var ev$1=ev[1];
        var id=gensym(0);
        return flatten_event
                ([0,id,abort_list],accu,[0,[0,id,fn],accu_abort],ev$1)}
      else
       if($js$1==3)
        {var fn$1=ev[1];
         var $js$2=fn$1(0);
         return flatten_event(abort_list,accu,accu_abort,$js$2)}};
var
 sync=
  function(ev)
   {var match=flatten_event(0,0,0,ev);
    var abort_env=match[2];
    var evl=match[1];
    var $js$1=Array["of_list"];
    var $js$2=$js$1(evl);
    var $js$3=scramble_array($js$2);
    return basic_sync(abort_env,$js$3)};
var
 basic_poll=
  function(abort_env,genev)
   {var performed=[0,-1];
    var $js$1=Condition["create"];
    var condition=$js$1(0);
    var $js$2=genev[0];
    var $js$3=$js$2[1];
    var $js$4=$js$3(performed,condition,0);
    var bev="unknown primitive:caml_make_vect";
    var $js$5=1;
    var $js$6=genev["length"]-1;
    for(var i=$js$5;i<=$js$6;i++)
     {var $js$7=genev[i];
      var $js$8=$js$7[1];
      var $js$9=$js$8(performed,condition,i);
      bev[i]=$js$9,0}
    var
     poll_events=
      function(i$1)
       {var $js$10=i$1>=bev["length"];
        if($js$10)
         {return 0}
        else
         {var $js$11=bev[i$1];
          var $js$12=$js$11[1];
          var $js$13=$js$12(0);
          var $js$14=poll_events(i$1+1);
          return $js$13||$js$14}};
    var $js$10=Mutex["lock"];
    $js$10(masterlock);
    var ready=poll_events(0);
    var $js$11=ready;
    if($js$11)
     {var $js$12=Mutex["unlock"];
      $js$12(masterlock);
      var $js$13=bev[performed[1]];
      var $js$14=$js$13[3];
      var $js$15=$js$14(0);
      var result=[0,$js$15];
      do_aborts(abort_env,genev,performed[1]);
      return result}
    else
     {performed[1]=0,0;
      var $js$16=Mutex["unlock"];
      $js$16(masterlock);
      do_aborts(abort_env,genev,-1);
      return 0}};
var
 poll=
  function(ev)
   {var match=flatten_event(0,0,0,ev);
    var abort_env=match[2];
    var evl=match[1];
    var $js$1=Array["of_list"];
    var $js$2=$js$1(evl);
    var $js$3=scramble_array($js$2);
    return basic_poll(abort_env,$js$3)};
var
 cleanup_queue=
  function(q)
   {var $js$1=Queue["create"];
    var q'=$js$1(0);
    var $js$2=Queue["iter"];
    $js$2
     (function(c)
       {var $js$3=c[1][1]=-1;
        if($js$3){var $js$4=Queue["add"];return $js$4(c,q')}else{return 0}},
      q);
    return q'};
var
 always=
  function(data)
   {return [0,
            function(performed,condition,evnum)
             {return [0,
                      function(param){performed[1]=evnum,0;return 1},
                      function(param){return 0},
                      function(param){return data}]}]};
var
 send=
  function(channel,data)
   {return [0,
            function(performed,condition,evnum)
             {var wcomm=[0,performed,condition,[0,data],evnum];
              return [0,
                      function(param)
                       {var
                         poll$1=
                          function(param$1)
                           {var $js$1=Queue["take"];
                            var rcomm=$js$1(channel[2]);
                            var $js$2=rcomm[1][1]>=0;
                            if($js$2)
                             {return poll$1(0)}
                            else
                             {rcomm[3]=wcomm[3],0;
                              performed[1]=evnum,0;
                              rcomm[1][1]=rcomm[4],0;
                              var $js$3=Condition["signal"];
                              return $js$3(rcomm[2])}};
                        try
                         {poll$1(0);return 1}
                        catch(exn)
                         {var $js$1=exn=Queue["Empty"];
                          if($js$1){return 0}else{return "unknown primitive:reraise"}}},
                      function(param)
                       {var $js$1=cleanup_queue(channel[1]);
                        channel[1]=$js$1,0;
                        var $js$2=Queue["add"];
                        return $js$2(wcomm,channel[1])},
                      function(param){return 0}]}]};
var
 receive=
  function(channel)
   {return [0,
            function(performed,condition,evnum)
             {var rcomm=[0,performed,condition,0,evnum];
              return [0,
                      function(param)
                       {var
                         poll$1=
                          function(param$1)
                           {var $js$1=Queue["take"];
                            var wcomm=$js$1(channel[1]);
                            var $js$2=wcomm[1][1]>=0;
                            if($js$2)
                             {return poll$1(0)}
                            else
                             {rcomm[3]=wcomm[3],0;
                              performed[1]=evnum,0;
                              wcomm[1][1]=wcomm[4],0;
                              var $js$3=Condition["signal"];
                              return $js$3(wcomm[2])}};
                        try
                         {poll$1(0);return 1}
                        catch(exn)
                         {var $js$1=exn=Queue["Empty"];
                          if($js$1){return 0}else{return "unknown primitive:reraise"}}},
                      function(param)
                       {var $js$1=cleanup_queue(channel[2]);
                        channel[2]=$js$1,0;
                        var $js$2=Queue["add"];
                        return $js$2(rcomm,channel[2])},
                      function(param)
                       {var match=rcomm[3];
                        var $js$1=match;
                        if($js$1)
                         {var res=match[1];return res}
                        else
                         {var $js$2=Pervasives["invalid_arg"];
                          return $js$2("Event.receive")}}]}]};
var choose=function(evl){return [1,evl]};
var wrap_abort=function(ev,fn){return [2,ev,fn]};
var guard=function(fn){return [3,fn]};
var
 wrap=
  function(ev,fn)
   {var $js$1=ev;
    if($js$1==0)
     {var genev=ev[1];
      return [0,
              function(performed,condition,evnum)
               {var bev=genev(performed,condition,evnum);
                return [0,
                        bev[1],
                        bev[2],
                        function(param)
                         {var $js$2=bev[3];var $js$3=$js$2(0);return fn($js$3)}]}]}
    else
     if($js$1==1)
      {var evl=ev[1];
       var $js$2=List["map"];
       var $js$3=$js$2(function(ev$1){return wrap(ev$1,fn)},evl);
       return [1,$js$3]}
     else
      if($js$1==2)
       {var f'=ev[2];
        var ev$1=ev[1];
        var $js$4=wrap(ev$1,fn);
        return [2,$js$4,f']}
      else
       if($js$1==3)
        {var gu=ev[1];
         return [3,function(param){var $js$5=gu(0);return wrap($js$5,fn)}]}};
var select=function(evl){return sync([1,evl])};
module["exports"]=
{"new_channel":new_channel,
 "send":send,
 "receive":receive,
 "always":always,
 "choose":choose,
 "wrap":wrap,
 "wrap_abort":wrap_abort,
 "guard":guard,
 "sync":sync,
 "select":select,
 "poll":poll};
