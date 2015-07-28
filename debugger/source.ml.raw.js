var String=require("String");
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
    var $js="unknown primitive:caml_sys_file_exists";
    if($js)
     {return pos_fname}
    else
     {var
       is_submodule=
        function(m,m')
         {var len'=m'["length"];
          try
           {var $js$1=String["sub"];
            var $js$2=$js$1(m,0,len');
            var $js$3="unknown primitive:caml_string_equal";
            return $js$3&&(m[len']=46)}
          catch(exn)
           {var $js$4=exn[1]=Invalid_argument;
            if($js$4){return 0}else{return "unknown primitive:reraise"}}};
      var $js$1=Hashtbl["fold"];
      var
       path=
        $js$1
         (function(mdl,dirs,acc)
           {var $js$2=is_submodule(mdle,mdl);
            if($js$2){return dirs}else{return acc}},
          Debugger_config["load_path_for"],
          Config["load_path"][1]);
      var fname=pos[1];
      var $js$2="unknown primitive:caml_string_equal";
      if($js$2)
       {try
         {var $js$3=String["rindex"];
          var dot_index=$js$3(mdle,46);
          var $js$4=String["sub"];
          var
           innermost_module=
            $js$4(mdle,1+dot_index,-1+(mdle["length"]-dot_index))}
        catch(exn)
         {var $js$5=exn=Not_found;
          if($js$5)
           {var innermost_module=mdle}
          else
           {var innermost_module="unknown primitive:reraise"}}
        var
         loop=
          function(param)
           {var $js$6=param;
            if($js$6)
             {try
               {var $js$7=Misc["find_in_path_uncap"];
                var $js$8=Pervasives["^"];
                var $js$9=$js$8(innermost_module,param[1]);
                return $js$7(path,$js$9)}
              catch(exn$1)
               {var $js$10=exn$1=Not_found;
                if($js$10)
                 {return loop(param[2])}
                else
                 {return "unknown primitive:reraise"}}}
            else
             {return "unknown primitive:raise"}};
        return loop(source_extensions)}
      else
       {var $js$6=Filename["is_relative"];
        var $js$7=$js$6(fname);
        if($js$7)
         {var $js$8=Misc["find_in_path_rel"];return $js$8(path,fname)}
        else
         {var $js$9="unknown primitive:caml_sys_file_exists";
          if($js$9){return fname}else{return "unknown primitive:raise"}}}}};
var buffer_max_count=[0,10];
var cache_size=30;
var buffer_list=[0,0];
var flush_buffer_list=function(param){return buffer_list[1]=0,0};
var
 get_buffer=
  function(pos,mdle)
   {try
     {var $js=List["assoc"];return $js(mdle,buffer_list[1])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1)
       {var $js$2=Pervasives["open_in_bin"];
        var $js$3=source_of_module(pos,mdle);
        var inchan=$js$2($js$3);
        var $js$4=Pervasives["really_input_string"];
        var $js$5=Pervasives["in_channel_length"];
        var $js$6=$js$5(inchan);
        var content=$js$4(inchan,$js$6);
        var buffer=[0,content,[0,0]];
        var $js$7=Primitives["list_truncate"];
        var
         $js$8=
          $js$7(buffer_max_count[1],[0,[0,mdle,buffer],buffer_list[1]]);
        buffer_list[1]=$js$8,0;
        return buffer}
      else
       {return "unknown primitive:reraise"}}};
var buffer_content=function(prim){return prim[1]};
var buffer_length=function(x){var $js=buffer_content(x);return $js["length"]};
var
 insert_pos=
  function(buffer,pair)
   {var line=pair[2];
    var position=pair[1];
    var
     new_list=
      function(l')
       {var $js=l';
        if($js)
         {var a=l'[1];
          var lin=a[2];
          var $js$1="unknown primitive:caml_lessthan";
          if($js$1)
           {return [0,pair,l']}
          else
           {var $js$2="unknown primitive:caml_equal";
            if($js$2)
             {return l'}
            else
             {var $js$3=new_list(l'[2]);return [0,a,$js$3]}}}
        else
         {return [0,[0,position,line],0]}};
    var buffer_cache=buffer[2];
    var $js=new_list(buffer_cache[1]);
    return buffer_cache[1]=$js,0};
var
 next_linefeed=
  function(param,pos)
   {var buffer=param[1];
    var len=buffer["length"];
    var $js=pos>=len;
    if($js)
     {return "unknown primitive:raise"}
    else
     {var
       search=
        function(p)
         {var $js$1=(p=len)||(buffer[p]=10);
          if($js$1){return p}else{return search(1+p)}};
      return search(pos)}};
var
 next_line=
  function(buffer,param)
   {var $js=next_linefeed(buffer,param[1]);
    var $js$1=$js+1;
    return [0,$js$1,param[2]+1]};
var
 line_of_pos=
  function(buffer,position)
   {var
     find=
      function(param)
       {var $js=param;
        if($js)
         {var pair=param[1];
          var $js$1=pair[1]>position;
          if($js$1){return find(param[2])}else{return pair}}
        else
         {var $js$2=position<0;
          if($js$2){return "unknown primitive:raise"}else{return [0,0,1]}}};
    var
     find_line=
      function(previous)
       {var next=next_line(buffer,previous);
        var $js=next[1]<=position;
        if($js){return find_line(next)}else{return previous}};
    var $js=find(buffer[2][1]);
    var result=find_line($js);
    insert_pos(buffer,result);
    return result};
var
 pos_of_line=
  function(buffer,line)
   {var
     find=
      function(param)
       {var $js=param;
        if($js)
         {var pair=param[1];
          var $js$1=pair[2]>line;
          if($js$1){return find(param[2])}else{return pair}}
        else
         {var $js$2=line<=0;
          if($js$2){return "unknown primitive:raise"}else{return [0,0,1]}}};
    var
     find_pos=
      function(previous)
       {var next=next_line(buffer,previous);
        var $js=next[2]<=line;
        if($js){return find_pos(next)}else{return previous}};
    var $js=find(buffer[2][1]);
    var result=find_pos($js);
    insert_pos(buffer,result);
    return result};
var
 point_of_coord=
  function(buffer,line,column)
   {var $js=pos_of_line(buffer,line);
    var $js$1=$js[1];
    return $js$1+(-1+column)};
var
 start_and_cnum=
  function(buffer,pos)
   {var line_number=pos[2];
    var start=point_of_coord(buffer,line_number,1);
    return [0,start,start+(pos[4]-pos[3])]};
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
