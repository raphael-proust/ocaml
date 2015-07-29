var $$String=require("String");
var CamlinternalFormat=require("CamlinternalFormat");
var Pervasives=require("Pervasives");
var Buffer=require("Buffer");
var make_queue=function(param){return [0,0,0]};
var clear_queue=function(q){q[1]=0,0;return q[2]=0,0};
var
 add_queue=
  function(x,q)
   {var c=[0,[0,x,0]];
    var match=q[1];
    var $js=match;
    if($js)
     {var cell=match[1];q[1]=c,0;return cell[2]=c,0}
    else
     {q[1]=c,0;return q[2]=c,0}};
var Empty_queue="unknown primitive:caml_set_oo_id";
var
 peek_queue=
  function(param)
   {var match=param[2];
    var $js=match;
    if($js)
     {var match$1=match[1];var x=match$1[1];return x}
    else
     {var $js$1=Empty_queue;throw $js$1}};
var
 take_queue=
  function(q)
   {var match=q[2];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var x=match$1[1];
      var tl=match$1[2];
      q[2]=tl,0;
      var $js$1=tl=0;
      if($js$1){q[1]=0,0}else{}
      return x}
    else
     {var $js$2=Empty_queue;throw $js$2}};
var
 pp_enqueue=
  function(state,token)
   {var len=token[3];
    state[13]=state[13]+len,0;
    return add_queue(token,state[27])};
var
 pp_clear_queue=
  function(state){state[12]=1,0;state[13]=1,0;return clear_queue(state[27])};
var pp_infinity=1000000010;
var
 pp_output_string=
  function(state,s){var $js=state[17];return $js(s,0,s["length"])};
var pp_output_newline=function(state){var $js=state[19];return $js(0)};
var pp_output_spaces=function(state,n){var $js=state[20];return $js(n)};
var
 break_new_line=
  function(state,offset,width)
   {pp_output_newline(state);
    state[11]=1,0;
    var indent=state[6]-width+offset;
    var $js=Pervasives["min"];
    var real_indent=$js(state[8],indent);
    state[10]=real_indent,0;
    state[9]=state[6]-state[10],0;
    return pp_output_spaces(state,state[10])};
var break_line=function(state,width){return break_new_line(state,0,width)};
var
 break_same_line=
  function(state,width)
   {state[9]=state[9]-width,0;return pp_output_spaces(state,width)};
var
 pp_force_break_line=
  function(state)
   {var match=state[2];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var width=match$1[2];
      var bl_ty=match$1[1];
      var $js$1=width>state[9];
      if($js$1)
       {var $js$2=bl_ty!=0;
        if($js$2)
         {var $js$3=bl_ty>=5;
          if($js$3){return 0}else{return break_line(state,width)}}
        else
         {return 0}}
      else
       {return 0}}
    else
     {return pp_output_newline(state)}};
var
 pp_skip_token=
  function(state)
   {var match=take_queue(state[27]);
    var size=match[1];
    var len=match[3];
    state[12]=state[12]-len,0;
    return state[9]=state[9]+size,0};
var
 format_pp_token=
  function(state,size,param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0)
       {var match=state[3];
        var $js$1=match;
        if($js$1)
         {var match$1=match[1];
          var tabs=match$1[1];
          var
           add_tab=
            function(n,ls)
             {var $js$2=ls;
              if($js$2)
               {var l=ls[2];
                var x=ls[1];
                var $js$3="unknown primitive:caml_lessthan";
                if($js$3)
                 {return [0,n,ls]}
                else
                 {var $js$4=add_tab(n,l);return [0,x,$js$4]}}
              else
               {return [0,n,0]}};
          var $js$2=add_tab(state[6]-state[9],tabs[1]);
          return tabs[1]=$js$2,0}
        else
         {return 0}}
      else
       if($js==1)
        {var match$2=state[2];
         var $js$3=match$2;
         if($js$3){var ls=match$2[2];return state[2]=ls,0}else{return 0}}
       else
        if($js==2)
         {var match$3=state[3];
          var $js$4=match$3;
          if($js$4){var ls$1=match$3[2];return state[3]=ls$1,0}else{return 0}}
        else
         if($js==3)
          {var match$4=state[2];
           var $js$5=match$4;
           if($js$5)
            {var match$5=match$4[1];
             var width=match$5[2];
             return break_line(state,width)}
           else
            {return pp_output_newline(state)}}
         else
          if($js==4)
           {var $js$6=state[10]!=state[6]-state[9];
            if($js$6){return pp_skip_token(state)}else{return 0}}
          else
           if($js==5)
            {var match$6=state[5];
             var $js$7=match$6;
             if($js$7)
              {var tags=match$6[2];
               var tag_name=match$6[1];
               var $js$8=state[24];
               var marker=$js$8(tag_name);
               pp_output_string(state,marker);
               return state[5]=tags,0}
             else
              {return 0}}}
    else
     {var $js$9=$js[0];
      if($js$9==0)
       {var s=param[1];
        state[9]=state[9]-size,0;
        pp_output_string(state,s);
        return state[11]=0,0}
      else
       if($js$9==1)
        {var off=param[2];
         var n=param[1];
         var match$7=state[2];
         var $js$10=match$7;
         if($js$10)
          {var match$8=match$7[1];
           var width$1=match$8[2];
           var ty=match$8[1];
           var $js$11=ty;
           var $js$12=$js$11[0];
           if($js$12==0)
            {return break_same_line(state,n)}
           else
            if($js$12==1)
             {return break_new_line(state,off,width$1)}
            else
             if($js$12==2)
              {return break_new_line(state,off,width$1)}
             else
              if($js$12==3)
               {var $js$13=size>state[9];
                if($js$13)
                 {return break_new_line(state,off,width$1)}
                else
                 {return break_same_line(state,n)}}
              else
               if($js$12==4)
                {var $js$14=state[11];
                 if($js$14)
                  {return break_same_line(state,n)}
                 else
                  {var $js$15=size>state[9];
                   if($js$15)
                    {return break_new_line(state,off,width$1)}
                   else
                    {var $js$16=state[10]>state[6]-width$1+off;
                     if($js$16)
                      {return break_new_line(state,off,width$1)}
                     else
                      {return break_same_line(state,n)}}}}
               else
                if($js$12==5){return break_same_line(state,n)}}
         else
          {return 0}}
       else
        if($js$9==2)
         {var off$1=param[2];
          var n$1=param[1];
          var insertion_point=state[6]-state[9];
          var match$9=state[3];
          var $js$17=match$9;
          if($js$17)
           {var match$10=match$9[1];
            var tabs$1=match$10[1];
            var
             find=
              function(n$2,param$1)
               {var $js$18=param$1;
                if($js$18)
                 {var l=param$1[2];
                  var x=param$1[1];
                  var $js$19="unknown primitive:caml_greaterequal";
                  if($js$19){return x}else{return find(n$2,l)}}
                else
                 {var $js$20=Not_found;throw $js$20}};
            var match$11=tabs$1[1];
            var $js$18=match$11;
            if($js$18)
             {var x=match$11[1];
              try
               {var tab=find(insertion_point,tabs$1[1])}
              catch(exn)
               {var $js$19=exn=Not_found;
                if($js$19){var tab=x}else{var tab="unknown primitive:reraise"}}}
            else
             {var tab=insertion_point}
            var offset=tab-insertion_point;
            var $js$20=offset>=0;
            if($js$20)
             {return break_same_line(state,offset+n$1)}
            else
             {return break_new_line(state,tab+off$1,state[6])}}
          else
           {return 0}}
        else
         if($js$9==3)
          {var ty$1=param[2];
           var off$2=param[1];
           var insertion_point$1=state[6]-state[9];
           var $js$21=insertion_point$1>state[8];
           if($js$21){pp_force_break_line(state)}else{}
           var offset$1=state[9]-off$2;
           var $js$22=ty$1!=1;
           if($js$22)
            {var $js$23=size>state[9];
             if($js$23){var bl_type=ty$1}else{var bl_type=5}}
           else
            {var bl_type=1}
           return state[2]=[0,[0,bl_type,offset$1],state[2]],0}
         else
          if($js$9==4)
           {var tbox=param[1];return state[3]=[0,tbox,state[3]],0}
          else
           if($js$9==5)
            {var tag_name$1=param[1];
             var $js$24=state[23];
             var marker$1=$js$24(tag_name$1);
             pp_output_string(state,marker$1);
             return state[5]=[0,tag_name$1,state[5]],0}}};
var
 advance_loop=
  function(state)
   {var match=peek_queue(state[27]);
    var size=match[1];
    var len=match[3];
    var tok=match[2];
    var size$1=size;
    var $js=!(size$1<0&&state[13]-state[12]<state[9]);
    if($js)
     {var $js$1=take_queue(state[27]);
      0;
      var $js$2=size$1<0;
      if($js$2){var $js$3=pp_infinity}else{var $js$3=size$1}
      format_pp_token(state,$js$3,tok);
      state[12]=len+state[12],0;
      return advance_loop(state)}
    else
     {return 0}};
var
 advance_left=
  function(state)
   {try
     {return advance_loop(state)}
    catch(exn)
     {var $js=exn=Empty_queue;
      if($js){return 0}else{return "unknown primitive:reraise"}}};
var
 enqueue_advance=
  function(state,tok){pp_enqueue(state,tok);return advance_left(state)};
var make_queue_elem=function(size,tok,len){return [0,size,tok,len]};
var
 enqueue_string_as=
  function(state,size,s)
   {var len=size;
    var $js=make_queue_elem(size,[0,s],len);
    return enqueue_advance(state,$js)};
var
 enqueue_string=
  function(state,s){var len=s["length"];return enqueue_string_as(state,len,s)};
var q_elem=make_queue_elem(-1,[0,""],0);
var scan_stack_bottom=[0,[0,-1,q_elem],0];
var clear_scan_stack=function(state){return state[1]=scan_stack_bottom,0};
var
 set_size=
  function(state,ty)
   {var match=state[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var queue_elem=match$1[2];
      var left_tot=match$1[1];
      var size=queue_elem[1];
      var t=match[2];
      var tok=queue_elem[2];
      var size$1=size;
      var $js$1=left_tot<state[12];
      if($js$1)
       {return clear_scan_stack(state)}
      else
       {var $js$2=tok;
        if(typeof $js$2=="number")
         {"unknown block:tok/1206"}
        else
         {var $js$3=$js$2[0];
          if($js$3==1)
           {var exit=193}
          else
           if($js$3==2)
            {var exit=193}
           else
            if($js$3==3)
             {var $js$4=!ty;
              if($js$4)
               {queue_elem[1]=state[13]+size$1,0;return state[1]=t,0}
              else
               {return 0}}
            else
             {var exit=194}}
        switch(exit)
         {case 193:
           var $js$5=ty;
           if($js$5)
            {queue_elem[1]=state[13]+size$1,0;return state[1]=t,0}
           else
            {return 0}
          case 194:return 0
          }}}
    else
     {return 0}};
var
 scan_push=
  function(state,b,tok)
   {pp_enqueue(state,tok);
    var $js=b;
    if($js){set_size(state,1)}else{}
    return state[1]=[0,[0,state[13],tok],state[1]],0};
var
 pp_open_box_gen=
  function(state,indent,br_ty)
   {state[14]=state[14]+1,0;
    var $js=state[14]<state[15];
    if($js)
     {var elem=make_queue_elem(-state[13],[3,indent,br_ty],0);
      return scan_push(state,0,elem)}
    else
     {var $js$1=state[14]=state[15];
      if($js$1){return enqueue_string(state,state[16])}else{return 0}}};
var pp_open_sys_box=function(state){return pp_open_box_gen(state,0,3)};
var
 pp_close_box=
  function(state,param)
   {var $js=state[14]>1;
    if($js)
     {var $js$1=state[14]<state[15];
      if($js$1)
       {pp_enqueue(state,[0,0,1,0]);set_size(state,1);set_size(state,0)}
      else
       {}
      return state[14]=state[14]-1,0}
    else
     {return 0}};
var
 pp_open_tag=
  function(state,tag_name)
   {var $js=state[21];
    if($js)
     {state[4]=[0,tag_name,state[4]],0;var $js$1=state[25];$js$1(tag_name)}
    else
     {}
    var $js$2=state[22];
    if($js$2){return pp_enqueue(state,[0,0,[5,tag_name],0])}else{return 0}};
var
 pp_close_tag=
  function(state,param)
   {var $js=state[22];
    if($js){pp_enqueue(state,[0,0,5,0])}else{}
    var $js$1=state[21];
    if($js$1)
     {var match=state[4];
      var $js$2=match;
      if($js$2)
       {var tags=match[2];
        var tag_name=match[1];
        var $js$3=state[26];
        $js$3(tag_name);
        return state[4]=tags,0}
      else
       {return 0}}
    else
     {return 0}};
var pp_set_print_tags=function(state,b){return state[21]=b,0};
var pp_set_mark_tags=function(state,b){return state[22]=b,0};
var pp_get_print_tags=function(state,param){return state[21]};
var pp_get_mark_tags=function(state,param){return state[22]};
var
 pp_set_tags=
  function(state,b)
   {pp_set_print_tags(state,b);return pp_set_mark_tags(state,b)};
var
 pp_get_formatter_tag_functions=
  function(state,param){return [0,state[23],state[24],state[25],state[26]]};
var
 pp_set_formatter_tag_functions=
  function(state,param)
   {var pct=param[4];
    var pot=param[3];
    var mct=param[2];
    var mot=param[1];
    state[23]=mot,0;
    state[24]=mct,0;
    state[25]=pot,0;
    return state[26]=pct,0};
var
 pp_rinit=
  function(state)
   {pp_clear_queue(state);
    clear_scan_stack(state);
    state[2]=0,0;
    state[3]=0,0;
    state[4]=0,0;
    state[5]=0,0;
    state[10]=0,0;
    state[14]=0,0;
    state[9]=state[6],0;
    return pp_open_sys_box(state)};
var
 pp_flush_queue=
  function(state,b)
   {for(;;){var $js=state[14]>1;if($js){pp_close_box(state,0)}else break}
    state[13]=pp_infinity,0;
    advance_left(state);
    var $js$1=b;
    if($js$1){pp_output_newline(state)}else{}
    return pp_rinit(state)};
var
 pp_print_as_size=
  function(state,size,s)
   {var $js=state[14]<state[15];
    if($js){return enqueue_string_as(state,size,s)}else{return 0}};
var
 pp_print_as=
  function(state,isize,s){return pp_print_as_size(state,isize,s)};
var
 pp_print_string=
  function(state,s){return pp_print_as(state,s["length"],s)};
var
 pp_print_int=
  function(state,i)
   {var $js=Pervasives["string_of_int"];
    var $js$1=$js(i);
    return pp_print_string(state,$js$1)};
var
 pp_print_float=
  function(state,f)
   {var $js=Pervasives["string_of_float"];
    var $js$1=$js(f);
    return pp_print_string(state,$js$1)};
var
 pp_print_bool=
  function(state,b)
   {var $js=Pervasives["string_of_bool"];
    var $js$1=$js(b);
    return pp_print_string(state,$js$1)};
var
 pp_print_char=
  function(state,c)
   {var $js=$$String["make"];
    var $js$1=$js(1,c);
    return pp_print_as(state,1,$js$1)};
var pp_open_hbox=function(state,param){return pp_open_box_gen(state,0,0)};
var
 pp_open_vbox=
  function(state,indent){return pp_open_box_gen(state,indent,1)};
var
 pp_open_hvbox=
  function(state,indent){return pp_open_box_gen(state,indent,2)};
var
 pp_open_hovbox=
  function(state,indent){return pp_open_box_gen(state,indent,3)};
var
 pp_open_box=
  function(state,indent){return pp_open_box_gen(state,indent,4)};
var
 pp_print_newline=
  function(state,param)
   {pp_flush_queue(state,1);var $js=state[18];return $js(0)};
var
 pp_print_flush=
  function(state,param)
   {pp_flush_queue(state,0);var $js=state[18];return $js(0)};
var
 pp_force_newline=
  function(state,param)
   {var $js=state[14]<state[15];
    if($js)
     {var $js$1=make_queue_elem(0,3,0);return enqueue_advance(state,$js$1)}
    else
     {return 0}};
var
 pp_print_if_newline=
  function(state,param)
   {var $js=state[14]<state[15];
    if($js)
     {var $js$1=make_queue_elem(0,4,0);return enqueue_advance(state,$js$1)}
    else
     {return 0}};
var
 pp_print_break=
  function(state,width,offset)
   {var $js=state[14]<state[15];
    if($js)
     {var elem=make_queue_elem(-state[13],[1,width,offset],width);
      return scan_push(state,1,elem)}
    else
     {return 0}};
var pp_print_space=function(state,param){return pp_print_break(state,1,0)};
var pp_print_cut=function(state,param){return pp_print_break(state,0,0)};
var
 pp_open_tbox=
  function(state,param)
   {state[14]=state[14]+1,0;
    var $js=state[14]<state[15];
    if($js)
     {var elem=make_queue_elem(0,[4,[0,[0,0]]],0);
      return enqueue_advance(state,elem)}
    else
     {return 0}};
var
 pp_close_tbox=
  function(state,param)
   {var $js=state[14]>1;
    if($js)
     {var $js$1=state[14]<state[15];
      if($js$1)
       {var elem=make_queue_elem(0,2,0);
        enqueue_advance(state,elem);
        return state[14]=state[14]-1,0}
      else
       {return 0}}
    else
     {return 0}};
var
 pp_print_tbreak=
  function(state,width,offset)
   {var $js=state[14]<state[15];
    if($js)
     {var elem=make_queue_elem(-state[13],[2,width,offset],width);
      return scan_push(state,1,elem)}
    else
     {return 0}};
var pp_print_tab=function(state,param){return pp_print_tbreak(state,0,0)};
var
 pp_set_tab=
  function(state,param)
   {var $js=state[14]<state[15];
    if($js)
     {var elem=make_queue_elem(0,0,0);return enqueue_advance(state,elem)}
    else
     {return 0}};
var
 pp_print_list=
  function($staropt$star,pp_v,ppf,param)
   {var $js=$staropt$star;
    if($js)
     {var $starsth$star=$staropt$star[1];var pp_sep=$starsth$star}
    else
     {var pp_sep=pp_print_cut}
    var $js$1=param;
    if($js$1)
     {var vs=param[2];
      var v=param[1];
      var $js$2=vs;
      if($js$2)
       {var v$1=v;
        pp_v(ppf,v$1);
        pp_sep(ppf,0);
        return pp_print_list([0,pp_sep],pp_v,ppf,vs)}
      else
       {return pp_v(ppf,v)}}
    else
     {return 0}};
var
 pp_print_text=
  function(ppf,s)
   {var len=s["length"];
    var left=[0,0];
    var right=[0,0];
    var
     flush=
      function(param)
       {var $js=$$String["sub"];
        var $js$1=$js(s,left[1],right[1]-left[1]);
        pp_print_string(ppf,$js$1);
        right[0]++;
        return left[1]=right[1],0};
    for(;;)
     {var $js=right[1]!=len;
      if($js)
       {var match=s[right[1]];
        var $js$1=match!=10;
        if($js$1)
         {var $js$2=match!=32;
          if($js$2){right[0]++}else{flush(0);pp_print_space(ppf,0)}}
        else
         {flush(0);pp_force_newline(ppf,0)}}
      else
       break}
    var $js$3=left[1]!=len;
    if($js$3){return flush(0)}else{return 0}};
var
 pp_set_max_boxes=
  function(state,n){var $js=n>1;if($js){return state[15]=n,0}else{return 0}};
var pp_get_max_boxes=function(state,param){return state[15]};
var pp_over_max_boxes=function(state,param){return state[14]=state[15]};
var pp_set_ellipsis_text=function(state,s){return state[16]=s,0};
var pp_get_ellipsis_text=function(state,param){return state[16]};
var
 pp_limit=
  function(n)
   {var $js=n<pp_infinity;if($js){return n}else{return -1+pp_infinity}};
var
 pp_set_min_space_left=
  function(state,n)
   {var $js=n>=1;
    if($js)
     {var n$1=pp_limit(n);
      state[7]=n$1,0;
      state[8]=state[6]-state[7],0;
      return pp_rinit(state)}
    else
     {return 0}};
var
 pp_set_max_indent=
  function(state,n){return pp_set_min_space_left(state,state[6]-n)};
var pp_get_max_indent=function(state,param){return state[8]};
var
 pp_set_margin=
  function(state,n)
   {var $js=n>=1;
    if($js)
     {var n$1=pp_limit(n);
      state[6]=n$1,0;
      var $js$1=state[8]<=state[6];
      if($js$1)
       {var new_max_indent=state[8]}
      else
       {var $js$2=Pervasives["max"];
        var $js$3=Pervasives["max"];
        var $js$4=$js$3(state[6]-state[7],state[6]/2);
        var new_max_indent=$js$2($js$4,1)}
      return pp_set_max_indent(state,new_max_indent)}
    else
     {return 0}};
var pp_get_margin=function(state,param){return state[6]};
var
 pp_set_formatter_out_functions=
  function(state,param)
   {var i=param[4];
    var h=param[3];
    var g=param[2];
    var f=param[1];
    state[17]=f,0;
    state[18]=g,0;
    state[19]=h,0;
    return state[20]=i,0};
var
 pp_get_formatter_out_functions=
  function(state,param){return [0,state[17],state[18],state[19],state[20]]};
var
 pp_set_formatter_output_functions=
  function(state,f,g){state[17]=f,0;return state[18]=g,0};
var
 pp_get_formatter_output_functions=
  function(state,param){return [0,state[17],state[18]]};
var
 pp_set_all_formatter_output_functions=
  function(state,f,g,h,i)
   {pp_set_formatter_output_functions(state,f,g);
    state[19]=h,0;
    return state[20]=i,0};
var
 pp_get_all_formatter_output_functions=
  function(state,param){return [0,state[17],state[18],state[19],state[20]]};
var
 display_newline=
  function(state,param){var $js=state[17];return $js("\n",0,1)};
var $js=$$String["make"];
var blank_line=$js(80,32);
var
 display_blanks=
  function(state,n)
   {var $js$1=n>0;
    if($js$1)
     {var $js$2=n<=80;
      if($js$2)
       {var $js$3=state[17];return $js$3(blank_line,0,n)}
      else
       {var $js$4=state[17];
        $js$4(blank_line,0,80);
        return display_blanks(state,n-80)}}
    else
     {return 0}};
var
 pp_set_formatter_out_channel=
  function(state,os)
   {var $js$1=Pervasives["output_substring"];
    var $js$2=$js$1(os);
    state[17]=$js$2,0;
    state[18]=
    function(param){var $js$3=Pervasives["flush"];return $js$3(os)},
    0;
    var $js$3=display_newline(state);
    state[19]=$js$3,0;
    var $js$4=display_blanks(state);
    return state[20]=$js$4,0};
var
 default_pp_mark_open_tag=
  function(s)
   {var $js$1=Pervasives["^"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2(s,">");
    return $js$1("<",$js$3)};
var
 default_pp_mark_close_tag=
  function(s)
   {var $js$1=Pervasives["^"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2(s,">");
    return $js$1("</",$js$3)};
var default_pp_print_open_tag=function(prim){return 0};
var default_pp_print_close_tag=function(prim){return 0};
var
 pp_make_formatter=
  function(f,g,h,i)
   {var pp_q=make_queue(0);
    var sys_tok=make_queue_elem(-1,[3,0,3],0);
    add_queue(sys_tok,pp_q);
    var sys_scan_stack=[0,[0,1,sys_tok],scan_stack_bottom];
    return [0,
            sys_scan_stack,
            0,
            0,
            0,
            0,
            78,
            10,
            78-10,
            78,
            0,
            1,
            1,
            1,
            1,
            Pervasives["max_int"],
            ".",
            f,
            g,
            h,
            i,
            0,
            0,
            default_pp_mark_open_tag,
            default_pp_mark_close_tag,
            default_pp_print_open_tag,
            default_pp_print_close_tag,
            pp_q]};
var
 make_formatter=
  function(output,flush)
   {var
     ppf=
      pp_make_formatter
       (output,flush,function(prim){return 0},function(prim){return 0});
    var $js$1=display_newline(ppf);
    ppf[19]=$js$1,0;
    var $js$2=display_blanks(ppf);
    ppf[20]=$js$2,0;
    return ppf};
var
 formatter_of_out_channel=
  function(oc)
   {var $js$1=Pervasives["output_substring"];
    var $js$2=$js$1(oc);
    return make_formatter
            ($js$2,
             function(param){var $js$3=Pervasives["flush"];return $js$3(oc)})};
var
 formatter_of_buffer=
  function(b)
   {var $js$1=Buffer["add_substring"];
    var $js$2=$js$1(b);
    return make_formatter($js$2,function(prim){return 0})};
var $js$1=Buffer["create"];
var stdbuf=$js$1(512);
var std_formatter=formatter_of_out_channel(Pervasives["stdout"]);
var err_formatter=formatter_of_out_channel(Pervasives["stderr"]);
var str_formatter=formatter_of_buffer(stdbuf);
var
 flush_str_formatter=
  function(param)
   {pp_flush_queue(str_formatter,0);
    var $js$2=Buffer["contents"];
    var s=$js$2(stdbuf);
    var $js$3=Buffer["reset"];
    $js$3(stdbuf);
    return s};
var
 flush_buf_formatter=
  function(buf,ppf)
   {pp_flush_queue(ppf,0);
    var $js$2=Buffer["contents"];
    var s=$js$2(buf);
    var $js$3=Buffer["reset"];
    $js$3(buf);
    return s};
var open_hbox=pp_open_hbox(std_formatter);
var open_vbox=pp_open_vbox(std_formatter);
var open_hvbox=pp_open_hvbox(std_formatter);
var open_hovbox=pp_open_hovbox(std_formatter);
var open_box=pp_open_box(std_formatter);
var close_box=pp_close_box(std_formatter);
var open_tag=pp_open_tag(std_formatter);
var close_tag=pp_close_tag(std_formatter);
var print_as=pp_print_as(std_formatter);
var print_string=pp_print_string(std_formatter);
var print_int=pp_print_int(std_formatter);
var print_float=pp_print_float(std_formatter);
var print_char=pp_print_char(std_formatter);
var print_bool=pp_print_bool(std_formatter);
var print_break=pp_print_break(std_formatter);
var print_cut=pp_print_cut(std_formatter);
var print_space=pp_print_space(std_formatter);
var force_newline=pp_force_newline(std_formatter);
var print_flush=pp_print_flush(std_formatter);
var print_newline=pp_print_newline(std_formatter);
var print_if_newline=pp_print_if_newline(std_formatter);
var open_tbox=pp_open_tbox(std_formatter);
var close_tbox=pp_close_tbox(std_formatter);
var print_tbreak=pp_print_tbreak(std_formatter);
var set_tab=pp_set_tab(std_formatter);
var print_tab=pp_print_tab(std_formatter);
var set_margin=pp_set_margin(std_formatter);
var get_margin=pp_get_margin(std_formatter);
var set_max_indent=pp_set_max_indent(std_formatter);
var get_max_indent=pp_get_max_indent(std_formatter);
var set_max_boxes=pp_set_max_boxes(std_formatter);
var get_max_boxes=pp_get_max_boxes(std_formatter);
var over_max_boxes=pp_over_max_boxes(std_formatter);
var set_ellipsis_text=pp_set_ellipsis_text(std_formatter);
var get_ellipsis_text=pp_get_ellipsis_text(std_formatter);
var set_formatter_out_channel=pp_set_formatter_out_channel(std_formatter);
var set_formatter_out_functions=pp_set_formatter_out_functions(std_formatter);
var get_formatter_out_functions=pp_get_formatter_out_functions(std_formatter);
var
 set_formatter_output_functions=
  pp_set_formatter_output_functions(std_formatter);
var
 get_formatter_output_functions=
  pp_get_formatter_output_functions(std_formatter);
var
 set_all_formatter_output_functions=
  pp_set_all_formatter_output_functions(std_formatter);
var
 get_all_formatter_output_functions=
  pp_get_all_formatter_output_functions(std_formatter);
var set_formatter_tag_functions=pp_set_formatter_tag_functions(std_formatter);
var get_formatter_tag_functions=pp_get_formatter_tag_functions(std_formatter);
var set_print_tags=pp_set_print_tags(std_formatter);
var get_print_tags=pp_get_print_tags(std_formatter);
var set_mark_tags=pp_set_mark_tags(std_formatter);
var get_mark_tags=pp_get_mark_tags(std_formatter);
var set_tags=pp_set_tags(std_formatter);
var
 compute_tag=
  function(output,tag_acc)
   {var $js$2=Buffer["create"];
    var buf=$js$2(16);
    var ppf=formatter_of_buffer(buf);
    var match=output(ppf,tag_acc);
    var match$1=pp_print_flush(ppf,0);
    var $js$3=Buffer["length"];
    var len=$js$3(buf);
    var $js$4=len<2;
    if($js$4)
     {var $js$5=Buffer["contents"];return $js$5(buf)}
    else
     {var $js$6=Buffer["sub"];return $js$6(buf,1,len-2)}};
var
 output_formatting_lit=
  function(ppf,fmting_lit)
   {var $js$2=fmting_lit;
    if(typeof $js$2=="number")
     {if($js$2==0)
       {return pp_close_box(ppf,0)}
      else
       if($js$2==1)
        {return pp_close_tag(ppf,0)}
       else
        if($js$2==2)
         {return pp_print_flush(ppf,0)}
        else
         if($js$2==3)
          {return pp_force_newline(ppf,0)}
         else
          if($js$2==4)
           {return pp_print_newline(ppf,0)}
          else
           if($js$2==5)
            {return pp_print_char(ppf,64)}
           else
            if($js$2==6){return pp_print_char(ppf,37)}}
    else
     {var $js$3=$js$2[0];
      if($js$3==0)
       {var offset=fmting_lit[3];
        var width=fmting_lit[2];
        return pp_print_break(ppf,width,offset)}
      else
       if($js$3==1)
        {return 0}
       else
        if($js$3==2)
         {var c=fmting_lit[1];
          pp_print_char(ppf,64);
          return pp_print_char(ppf,c)}}};
var
 output_acc=
  function(ppf,acc)
   {var $js$2=acc;
    if(typeof $js$2=="number")
     {if($js$2==0){return 0}}
    else
     {var $js$3=$js$2[0];
      if($js$3==0)
       {var f=acc[2];
        var p=acc[1];
        output_acc(ppf,p);
        return output_formatting_lit(ppf,f)}
      else
       if($js$3==1)
        {var match=acc[2];
         var p$1=acc[1];
         var $js$4=match;
         if($js$4==0)
          {var acc$prime=match[1];
           output_acc(ppf,p$1);
           var $js$5=compute_tag(output_acc,acc$prime);
           return pp_open_tag(ppf,$js$5)}
         else
          if($js$4==1)
           {var p$2=p$1;
            var acc$prime$1=match[1];
            var match$1=output_acc(ppf,p$2);
            var $js$6=CamlinternalFormat["open_box_of_string"];
            var $js$7=compute_tag(output_acc,acc$prime$1);
            var match$2=$js$6($js$7);
            var bty=match$2[2];
            var indent=match$2[1];
            return pp_open_box_gen(ppf,indent,bty)}}
       else
        if($js$3==2)
         {var p$3=acc[1];
          var $js$8=p$3;
          if(typeof $js$8=="number")
           {"unknown block:p/1678"}
          else
           {var $js$9=$js$8[0];
            if($js$9==0)
             {var match$3=p$3[2];
              var $js$10=match$3;
              if(typeof $js$10=="number")
               {"unknown block:match/1693"}
              else
               {var $js$11=$js$10[0];
                if($js$11==1)
                 {var s=acc[2];
                  var size=match$3[2];
                  var p$4=p$3[1];
                  p$5=p$4;
                  size$1=size;
                  s$1=s;
                  var exit=32}
                else
                 {var exit$1=36}}}
            else
             {var exit$1=36}}
          switch(exit$1){case 36:var s$2=acc[2];p$6=p$3;s$3=s$2;var exit=34}}
        else
         if($js$3==3)
          {var p$7=acc[1];
           var $js$12=p$7;
           if(typeof $js$12=="number")
            {"unknown block:p/1674"}
           else
            {var $js$13=$js$12[0];
             if($js$13==0)
              {var match$4=p$7[2];
               var $js$14=match$4;
               if(typeof $js$14=="number")
                {"unknown block:match/1697"}
               else
                {var $js$15=$js$14[0];
                 if($js$15==1)
                  {var c=acc[2];
                   var size$2=match$4[2];
                   var p$8=p$7[1];
                   p$9=p$8;
                   size$3=size$2;
                   c$1=c;
                   var exit=33}
                 else
                  {var exit$2=38}}}
             else
              {var exit$2=38}}
           switch(exit$2){case 38:var c$2=acc[2];p$10=p$7;c$3=c$2;var exit=35}}
         else
          if($js$3==4)
           {var p$11=acc[1];
            var $js$16=p$11;
            if(typeof $js$16=="number")
             {"unknown block:p/1676"}
            else
             {var $js$17=$js$16[0];
              if($js$17==0)
               {var match$5=p$11[2];
                var $js$18=match$5;
                if(typeof $js$18=="number")
                 {"unknown block:match/1695"}
                else
                 {var $js$19=$js$18[0];
                  if($js$19==1)
                   {var s$4=acc[2];
                    var size$4=match$5[2];
                    var p$12=p$11[1];
                    p$5=p$12;
                    size$1=size$4;
                    s$1=s$4;
                    var exit=32}
                  else
                   {var exit$3=37}}}
              else
               {var exit$3=37}}
            switch(exit$3)
             {case 37:var s$5=acc[2];p$6=p$11;s$3=s$5;var exit=34}}
          else
           if($js$3==5)
            {var p$13=acc[1];
             var $js$20=p$13;
             if(typeof $js$20=="number")
              {"unknown block:p/1672"}
             else
              {var $js$21=$js$20[0];
               if($js$21==0)
                {var match$6=p$13[2];
                 var $js$22=match$6;
                 if(typeof $js$22=="number")
                  {"unknown block:match/1699"}
                 else
                  {var $js$23=$js$22[0];
                   if($js$23==1)
                    {var c$4=acc[2];
                     var size$5=match$6[2];
                     var p$14=p$13[1];
                     p$9=p$14;
                     size$3=size$5;
                     c$1=c$4;
                     var exit=33}
                   else
                    {var exit$4=39}}}
               else
                {var exit$4=39}}
             switch(exit$4)
              {case 39:var c$5=acc[2];p$10=p$13;c$3=c$5;var exit=35}}
           else
            if($js$3==6)
             {var f$1=acc[2];
              var p$15=acc[1];
              output_acc(ppf,p$15);
              return f$1(ppf)}
            else
             if($js$3==7)
              {var p$16=acc[1];
               output_acc(ppf,p$16);
               return pp_print_flush(ppf,0)}
             else
              if($js$3==8)
               {var msg=acc[2];
                var p$17=acc[1];
                output_acc(ppf,p$17);
                var $js$24=Pervasives["invalid_arg"];
                return $js$24(msg)}}
    switch(exit)
     {case 32:output_acc(ppf,p$5);return pp_print_as_size(ppf,size$1,s$1);
      case 33:
       output_acc(ppf,p$9);
       var $js$25=$$String["make"];
       var $js$26=$js$25(1,c$1);
       return pp_print_as_size(ppf,size$3,$js$26);
      case 34:output_acc(ppf,p$6);return pp_print_string(ppf,s$3);
      case 35:output_acc(ppf,p$10);return pp_print_char(ppf,c$3)
      }};
var
 strput_acc=
  function(ppf,acc)
   {var $js$2=acc;
    if(typeof $js$2=="number")
     {if($js$2==0){return 0}}
    else
     {var $js$3=$js$2[0];
      if($js$3==0)
       {var f=acc[2];
        var p=acc[1];
        strput_acc(ppf,p);
        return output_formatting_lit(ppf,f)}
      else
       if($js$3==1)
        {var match=acc[2];
         var p$1=acc[1];
         var $js$4=match;
         if($js$4==0)
          {var acc$prime=match[1];
           strput_acc(ppf,p$1);
           var $js$5=compute_tag(strput_acc,acc$prime);
           return pp_open_tag(ppf,$js$5)}
         else
          if($js$4==1)
           {var p$2=p$1;
            var acc$prime$1=match[1];
            var match$1=strput_acc(ppf,p$2);
            var $js$6=CamlinternalFormat["open_box_of_string"];
            var $js$7=compute_tag(strput_acc,acc$prime$1);
            var match$2=$js$6($js$7);
            var bty=match$2[2];
            var indent=match$2[1];
            return pp_open_box_gen(ppf,indent,bty)}}
       else
        if($js$3==2)
         {var p$3=acc[1];
          var $js$8=p$3;
          if(typeof $js$8=="number")
           {"unknown block:p/1644"}
          else
           {var $js$9=$js$8[0];
            if($js$9==0)
             {var match$3=p$3[2];
              var $js$10=match$3;
              if(typeof $js$10=="number")
               {"unknown block:match/1661"}
              else
               {var $js$11=$js$10[0];
                if($js$11==1)
                 {var s=acc[2];
                  var size=match$3[2];
                  var p$4=p$3[1];
                  p$5=p$4;
                  size$1=size;
                  s$1=s;
                  var exit=21}
                else
                 {var exit$1=26}}}
            else
             {var exit$1=26}}
          switch(exit$1){case 26:var s$2=acc[2];p$6=p$3;s$3=s$2;var exit=23}}
        else
         if($js$3==3)
          {var p$7=acc[1];
           var $js$12=p$7;
           if(typeof $js$12=="number")
            {"unknown block:p/1640"}
           else
            {var $js$13=$js$12[0];
             if($js$13==0)
              {var match$4=p$7[2];
               var $js$14=match$4;
               if(typeof $js$14=="number")
                {"unknown block:match/1665"}
               else
                {var $js$15=$js$14[0];
                 if($js$15==1)
                  {var c=acc[2];
                   var size$2=match$4[2];
                   var p$8=p$7[1];
                   p$9=p$8;
                   size$3=size$2;
                   c$1=c;
                   var exit=22}
                 else
                  {var exit$2=28}}}
             else
              {var exit$2=28}}
           switch(exit$2){case 28:var c$2=acc[2];p$10=p$7;c$3=c$2;var exit=24}}
         else
          if($js$3==4)
           {var p$11=acc[1];
            var $js$16=p$11;
            if(typeof $js$16=="number")
             {"unknown block:p/1642"}
            else
             {var $js$17=$js$16[0];
              if($js$17==0)
               {var match$5=p$11[2];
                var $js$18=match$5;
                if(typeof $js$18=="number")
                 {"unknown block:match/1663"}
                else
                 {var $js$19=$js$18[0];
                  if($js$19==1)
                   {var s$4=acc[2];
                    var size$4=match$5[2];
                    var p$12=p$11[1];
                    p$5=p$12;
                    size$1=size$4;
                    s$1=s$4;
                    var exit=21}
                  else
                   {var exit$3=27}}}
              else
               {var exit$3=27}}
            switch(exit$3)
             {case 27:var s$5=acc[2];p$6=p$11;s$3=s$5;var exit=23}}
          else
           if($js$3==5)
            {var p$13=acc[1];
             var $js$20=p$13;
             if(typeof $js$20=="number")
              {"unknown block:p/1638"}
             else
              {var $js$21=$js$20[0];
               if($js$21==0)
                {var match$6=p$13[2];
                 var $js$22=match$6;
                 if(typeof $js$22=="number")
                  {"unknown block:match/1667"}
                 else
                  {var $js$23=$js$22[0];
                   if($js$23==1)
                    {var c$4=acc[2];
                     var size$5=match$6[2];
                     var p$14=p$13[1];
                     p$9=p$14;
                     size$3=size$5;
                     c$1=c$4;
                     var exit=22}
                   else
                    {var exit$4=29}}}
               else
                {var exit$4=29}}
             switch(exit$4)
              {case 29:var c$5=acc[2];p$10=p$13;c$3=c$5;var exit=24}}
           else
            if($js$3==6)
             {var p$15=acc[1];
              var $js$24=p$15;
              if(typeof $js$24=="number")
               {"unknown block:p/1569"}
              else
               {var $js$25=$js$24[0];
                if($js$25==0)
                 {var match$7=p$15[2];
                  var $js$26=match$7;
                  if(typeof $js$26=="number")
                   {"unknown block:match/1659"}
                  else
                   {var $js$27=$js$26[0];
                    if($js$27==1)
                     {var f$1=acc[2];
                      var size$6=match$7[2];
                      var p$16=p$15[1];
                      strput_acc(ppf,p$16);
                      var $js$28=f$1(0);
                      return pp_print_as_size(ppf,size$6,$js$28)}
                    else
                     {var exit$5=25}}}
                else
                 {var exit$5=25}}
              switch(exit$5)
               {case 25:
                 var f$2=acc[2];
                 strput_acc(ppf,p$15);
                 var $js$29=f$2(0);
                 return pp_print_string(ppf,$js$29)
                }}
            else
             if($js$3==7)
              {var p$17=acc[1];
               strput_acc(ppf,p$17);
               return pp_print_flush(ppf,0)}
             else
              if($js$3==8)
               {var msg=acc[2];
                var p$18=acc[1];
                strput_acc(ppf,p$18);
                var $js$30=Pervasives["invalid_arg"];
                return $js$30(msg)}}
    switch(exit)
     {case 21:strput_acc(ppf,p$5);return pp_print_as_size(ppf,size$1,s$1);
      case 22:
       strput_acc(ppf,p$9);
       var $js$31=$$String["make"];
       var $js$32=$js$31(1,c$1);
       return pp_print_as_size(ppf,size$3,$js$32);
      case 23:strput_acc(ppf,p$6);return pp_print_string(ppf,s$3);
      case 24:strput_acc(ppf,p$10);return pp_print_char(ppf,c$3)
      }};
var
 kfprintf=
  function(k,o,param)
   {var fmt=param[1];
    var $js$2=CamlinternalFormat["make_printf"];
    return $js$2(function(o$1,acc){output_acc(o$1,acc);return k(o$1)},o,0,fmt)};
var
 ikfprintf=
  function(k,x,param)
   {var fmt=param[1];
    var $js$2=CamlinternalFormat["make_printf"];
    return $js$2(function(param$1,param$2){return k(x)},x,0,fmt)};
var
 fprintf=
  function(ppf,fmt){return kfprintf(function(prim){return 0},ppf,fmt)};
var
 ifprintf=
  function(ppf,fmt){return ikfprintf(function(prim){return 0},ppf,fmt)};
var printf=function(fmt){return fprintf(std_formatter,fmt)};
var eprintf=function(fmt){return fprintf(err_formatter,fmt)};
var
 ksprintf=
  function(k,param)
   {var fmt=param[1];
    var $js$2=Buffer["create"];
    var b=$js$2(512);
    var ppf=formatter_of_buffer(b);
    var
     k$prime=
      function(param$1,acc)
       {strput_acc(ppf,acc);
        var $js$3=flush_buf_formatter(b,ppf);
        return k($js$3)};
    var $js$3=CamlinternalFormat["make_printf"];
    return $js$3(k$prime,0,0,fmt)};
var sprintf=function(fmt){return ksprintf(function(s){return s},fmt)};
var
 asprintf=
  function(param)
   {var fmt=param[1];
    var $js$2=Buffer["create"];
    var b=$js$2(512);
    var ppf=formatter_of_buffer(b);
    var
     k$prime=
      function(ppf$1,acc)
       {output_acc(ppf$1,acc);
        pp_flush_queue(ppf$1,0);
        return flush_buf_formatter(b,ppf$1)};
    var $js$3=CamlinternalFormat["make_printf"];
    return $js$3(k$prime,ppf,0,fmt)};
var
 bprintf=
  function(b,param)
   {var fmt=param[1];
    var k=function(ppf,acc){output_acc(ppf,acc);return pp_flush_queue(ppf,0)};
    var $js$2=CamlinternalFormat["make_printf"];
    var $js$3=formatter_of_buffer(b);
    return $js$2(k,$js$3,0,fmt)};
var kprintf=ksprintf;
var $js$2=Pervasives["at_exit"];
$js$2(print_flush);
module["exports"]=
{"open_box":open_box,
 "close_box":close_box,
 "print_string":print_string,
 "print_as":print_as,
 "print_int":print_int,
 "print_float":print_float,
 "print_char":print_char,
 "print_bool":print_bool,
 "print_space":print_space,
 "print_cut":print_cut,
 "print_break":print_break,
 "print_flush":print_flush,
 "print_newline":print_newline,
 "force_newline":force_newline,
 "print_if_newline":print_if_newline,
 "set_margin":set_margin,
 "get_margin":get_margin,
 "set_max_indent":set_max_indent,
 "get_max_indent":get_max_indent,
 "set_max_boxes":set_max_boxes,
 "get_max_boxes":get_max_boxes,
 "over_max_boxes":over_max_boxes,
 "open_hbox":open_hbox,
 "open_vbox":open_vbox,
 "open_hvbox":open_hvbox,
 "open_hovbox":open_hovbox,
 "open_tbox":open_tbox,
 "close_tbox":close_tbox,
 "print_tbreak":print_tbreak,
 "set_tab":set_tab,
 "print_tab":print_tab,
 "set_ellipsis_text":set_ellipsis_text,
 "get_ellipsis_text":get_ellipsis_text,
 "open_tag":open_tag,
 "close_tag":close_tag,
 "set_tags":set_tags,
 "set_print_tags":set_print_tags,
 "set_mark_tags":set_mark_tags,
 "get_print_tags":get_print_tags,
 "get_mark_tags":get_mark_tags,
 "set_formatter_out_channel":set_formatter_out_channel,
 "set_formatter_output_functions":set_formatter_output_functions,
 "get_formatter_output_functions":get_formatter_output_functions,
 "set_formatter_out_functions":set_formatter_out_functions,
 "get_formatter_out_functions":get_formatter_out_functions,
 "set_formatter_tag_functions":set_formatter_tag_functions,
 "get_formatter_tag_functions":get_formatter_tag_functions,
 "formatter_of_out_channel":formatter_of_out_channel,
 "std_formatter":std_formatter,
 "err_formatter":err_formatter,
 "formatter_of_buffer":formatter_of_buffer,
 "stdbuf":stdbuf,
 "str_formatter":str_formatter,
 "flush_str_formatter":flush_str_formatter,
 "make_formatter":make_formatter,
 "pp_open_hbox":pp_open_hbox,
 "pp_open_vbox":pp_open_vbox,
 "pp_open_hvbox":pp_open_hvbox,
 "pp_open_hovbox":pp_open_hovbox,
 "pp_open_box":pp_open_box,
 "pp_close_box":pp_close_box,
 "pp_open_tag":pp_open_tag,
 "pp_close_tag":pp_close_tag,
 "pp_print_string":pp_print_string,
 "pp_print_as":pp_print_as,
 "pp_print_int":pp_print_int,
 "pp_print_float":pp_print_float,
 "pp_print_char":pp_print_char,
 "pp_print_bool":pp_print_bool,
 "pp_print_break":pp_print_break,
 "pp_print_cut":pp_print_cut,
 "pp_print_space":pp_print_space,
 "pp_force_newline":pp_force_newline,
 "pp_print_flush":pp_print_flush,
 "pp_print_newline":pp_print_newline,
 "pp_print_if_newline":pp_print_if_newline,
 "pp_open_tbox":pp_open_tbox,
 "pp_close_tbox":pp_close_tbox,
 "pp_print_tbreak":pp_print_tbreak,
 "pp_set_tab":pp_set_tab,
 "pp_print_tab":pp_print_tab,
 "pp_set_tags":pp_set_tags,
 "pp_set_print_tags":pp_set_print_tags,
 "pp_set_mark_tags":pp_set_mark_tags,
 "pp_get_print_tags":pp_get_print_tags,
 "pp_get_mark_tags":pp_get_mark_tags,
 "pp_set_margin":pp_set_margin,
 "pp_get_margin":pp_get_margin,
 "pp_set_max_indent":pp_set_max_indent,
 "pp_get_max_indent":pp_get_max_indent,
 "pp_set_max_boxes":pp_set_max_boxes,
 "pp_get_max_boxes":pp_get_max_boxes,
 "pp_over_max_boxes":pp_over_max_boxes,
 "pp_set_ellipsis_text":pp_set_ellipsis_text,
 "pp_get_ellipsis_text":pp_get_ellipsis_text,
 "pp_set_formatter_out_channel":pp_set_formatter_out_channel,
 "pp_set_formatter_output_functions":pp_set_formatter_output_functions,
 "pp_get_formatter_output_functions":pp_get_formatter_output_functions,
 "pp_set_formatter_tag_functions":pp_set_formatter_tag_functions,
 "pp_get_formatter_tag_functions":pp_get_formatter_tag_functions,
 "pp_set_formatter_out_functions":pp_set_formatter_out_functions,
 "pp_get_formatter_out_functions":pp_get_formatter_out_functions,
 "pp_print_list":pp_print_list,
 "pp_print_text":pp_print_text,
 "fprintf":fprintf,
 "printf":printf,
 "eprintf":eprintf,
 "sprintf":sprintf,
 "asprintf":asprintf,
 "ifprintf":ifprintf,
 "kfprintf":kfprintf,
 "ikfprintf":ikfprintf,
 "ksprintf":ksprintf,
 "bprintf":bprintf,
 "kprintf":kprintf,
 "set_all_formatter_output_functions":set_all_formatter_output_functions,
 "get_all_formatter_output_functions":get_all_formatter_output_functions,
 "pp_set_all_formatter_output_functions":pp_set_all_formatter_output_functions,
 "pp_get_all_formatter_output_functions":pp_get_all_formatter_output_functions};
