var String=require("String");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Events=require("Events");
var Primitives=require("Primitives");
var Parameters=require("Parameters");
var Debugger_config=require("Debugger_config");
var Source=require("Source");
var
 print_line=
  function(buffer,line_number,start,point,before)
   {var $js=Source["next_linefeed"];
    var next=$js(buffer,start);
    var $js$1=Source["buffer_content"];
    var content=$js$1(buffer);
    var $js$2=Printf["printf"];
    $js$2([0,[4,3,0,0,[12,32,0]],"%i "],line_number);
    var $js$3=point<=next&&point>=start;
    if($js$3)
     {var $js$4=Pervasives["print_string"];
      var $js$5=String["sub"];
      var $js$6=$js$5(content,start,point-start);
      $js$4($js$6);
      var $js$7=Pervasives["print_string"];
      var $js$8=before;
      if($js$8)
       {var $js$9=Debugger_config["event_mark_before"]}
      else
       {var $js$9=Debugger_config["event_mark_after"]}
      $js$7($js$9);
      var $js$10=Pervasives["print_string"];
      var $js$11=String["sub"];
      var $js$12=$js$11(content,point,next-point);
      $js$10($js$12)}
    else
     {var $js$13=Pervasives["print_string"];
      var $js$14=String["sub"];
      var $js$15=$js$14(content,start,next-start);
      $js$13($js$15)}
    var $js$16=Pervasives["print_newline"];
    $js$16(0);
    return next};
var
 show_no_point=
  function(param)
   {var $js=Parameters["emacs"][1];
    if($js)
     {var $js$1=Printf["printf"];
      return $js$1([0,[11,"\x1a\x1aH\n",0],"\x1a\x1aH\n"])}
    else
     {return 0}};
var
 show_point=
  function(ev,selected)
   {var mdle=ev[2];
    var before=ev[4]=0;
    var $js=Parameters["emacs"][1]&&selected;
    if($js)
     {try
       {var $js$1=Source["get_buffer"];
        var $js$2=Events["get_pos"];
        var $js$3=$js$2(ev);
        var buffer=$js$1($js$3,mdle);
        var $js$4=Source["source_of_module"];
        var source=$js$4(ev[3][1],mdle);
        var $js$5=Printf["printf"];
        var $js$6=Source["start_and_cnum"];
        var $js$7=$js$6(buffer,ev[3][1]);
        var $js$8=$js$7[2];
        var $js$9=Source["start_and_cnum"];
        var $js$10=$js$9(buffer,ev[3][2]);
        var $js$11=$js$10[2];
        $js$5
         ([0,
           [11,"\x1a\x1aM",[2,0,[12,58,[4,3,0,0,[12,58,[4,3,0,0,0]]]]]],
           "\x1a\x1aM%s:%i:%i"],
          source,
          $js$8,
          $js$11);
        var $js$12=Printf["printf"];
        var $js$13=before;
        if($js$13){var $js$14=":before"}else{var $js$14=":after"}
        return $js$12([0,[2,0,[12,10,0]],"%s\n"],$js$14)}
      catch(exn)
       {var $js$15=exn=Primitives["Out_of_range"];
        if($js$15)
         {var $js$16=Pervasives["prerr_endline"];
          return $js$16("Position out of range.")}
        else
         {var $js$17=exn=Not_found;
          if($js$17)
           {var $js$18=Pervasives["prerr_endline"];
            var $js$19=Pervasives["^"];
            var $js$20=Pervasives["^"];
            var $js$21=$js$20(mdle,".");
            var $js$22=$js$19("No source file for ",$js$21);
            $js$18($js$22);
            return show_no_point(0)}
          else
           {return "unknown primitive:reraise"}}}}
    else
     {try
       {var $js$23=Events["get_pos"];
        var pos=$js$23(ev);
        var $js$24=Source["get_buffer"];
        var buffer$1=$js$24(pos,mdle);
        var $js$25=Source["start_and_cnum"];
        var match=$js$25(buffer$1,pos);
        var $js$26=print_line(buffer$1,pos[2],match[1],match[2],before);
        return 0}
      catch(exn$1)
       {var $js$27=exn$1=Primitives["Out_of_range"];
        if($js$27)
         {var $js$28=Pervasives["prerr_endline"];
          return $js$28("Position out of range.")}
        else
         {var $js$29=exn$1=Not_found;
          if($js$29)
           {var $js$30=Pervasives["prerr_endline"];
            var $js$31=Pervasives["^"];
            var $js$32=Pervasives["^"];
            var $js$33=$js$32(mdle,".");
            var $js$34=$js$31("No source file for ",$js$33);
            return $js$30($js$34)}
          else
           {return "unknown primitive:reraise"}}}}};
var
 show_listing=
  function(pos,mdle,start,stop,point,before)
   {try
     {var $js=Source["get_buffer"];
      var buffer=$js(pos,mdle);
      var
       aff=
        function(param)
         {var line_number=param[2];
          var $js$1=line_number<=stop;
          if($js$1)
           {var $js$2=print_line(buffer,line_number,param[1],point,before);
            var $js$3=$js$2+1;
            var $js$4=[0,$js$3,line_number+1];
            return aff($js$4)}
          else
           {return 0}};
      var $js$1=Source["pos_of_line"];
      var $js$2=$js$1(buffer,start);
      return aff($js$2)}
    catch(exn)
     {var $js$3=exn=Primitives["Out_of_range"];
      if($js$3)
       {var $js$4=Pervasives["prerr_endline"];
        return $js$4("Position out of range.")}
      else
       {var $js$5=exn=Not_found;
        if($js$5)
         {var $js$6=Pervasives["prerr_endline"];
          var $js$7=Pervasives["^"];
          var $js$8=Pervasives["^"];
          var $js$9=$js$8(mdle,".");
          var $js$10=$js$7("No source file for ",$js$9);
          return $js$6($js$10)}
        else
         {return "unknown primitive:reraise"}}}};
module["exports"]=
{"show_point":show_point,
 "show_no_point":show_no_point,
 "show_listing":show_listing};
