var Printtyp=require("Printtyp");
var Types=require("Types");
var Format=require("Format");
var Misc=require("Misc");
var Buffer=require("Buffer");
var
 new_fmt=
  function(param)
   {var $js=Buffer["create"];
    var buf=$js(512);
    var $js$1=Format["formatter_of_buffer"];
    var fmt=$js$1(buf);
    var
     flush=
      function(param$1)
       {var $js$2=Format["pp_print_flush"];
        $js$2(fmt,0);
        var $js$3=Buffer["contents"];
        var s=$js$3(buf);
        var $js$4=Buffer["reset"];
        $js$4(buf);
        return s};
    return [0,fmt,flush]};
var match=new_fmt(0);
var flush_type_fmt=match[2];
var type_fmt=match[1];
var $js=Format["pp_get_formatter_out_functions"];
var outfuns=$js(type_fmt,0);
var $js$1=Format["pp_set_formatter_out_functions"];
$js$1
 (type_fmt,
  [0,
   outfuns[1],
   outfuns[2],
   function(param){var $js$2=outfuns[1];return $js$2("\n  ",0,3)},
   outfuns[4]]);
var match$1=new_fmt(0);
var flush_modtype_fmt=match$1[2];
var modtype_fmt=match$1[1];
var
 string_of_type_expr=
  function(t)
   {var $js$2=Printtyp["mark_loops"];
    $js$2(t);
    var $js$3=Printtyp["type_scheme_max"];
    $js$3([0,0],type_fmt,t);
    return flush_type_fmt(0)};
var Use_code="unknown primitive:caml_set_oo_id";
var
 simpl_module_type=
  function(code,t)
   {var
     iter=
      function(t$1)
       {var $js$2=t$1;
        if($js$2==0)
         {var exit=11}
        else
         if($js$2==1)
          {var $js$3=code;
           if($js$3){return "unknown primitive:raise"}else{return [1,0]}}
         else
          if($js$2==2)
           {var $js$4=Misc["may_map"];
            var $js$5=$js$4(iter,t$1[2]);
            var $js$6=iter(t$1[3]);
            return [2,t$1[1],$js$5,$js$6]}
          else
           if($js$2==3){var exit=11}
        switch(exit){case 11:return t$1}};
    return iter(t)};
var
 string_of_module_type=
  function(code,*opt*,t)
   {var $js$2=*opt*;
    if($js$2){var complete=*opt*[1]}else{var complete=0}
    try
     {var $js$3=complete;
      if($js$3){var t2=t}else{var t2=simpl_module_type(code,t)}
      var $js$4=Printtyp["modtype"];
      $js$4(modtype_fmt,t2);
      return flush_modtype_fmt(0)}
    catch(exn)
     {var $js$5=exn[1]=Use_code;
      if($js$5){return exn[2]}else{return "unknown primitive:reraise"}}};
var
 simpl_class_type=
  function(t)
   {var
     iter=
      function(t$1)
       {var $js$2=t$1;
        if($js$2==0)
         {return t$1}
        else
         if($js$2==1)
          {var tnil=[0,0,0,0];
           var init=t$1[1][1];
           var $js$3=[0,[4,tnil,[0,0]],init[2],init[3]];
           var $js$4=[0,$js$3,Types["Vars"][1],Types["Concr"][1],0];
           return [1,$js$4]}
         else
          if($js$2==2)
           {var new_ct=iter(t$1[3]);return [2,t$1[1],t$1[2],new_ct]}};
    return iter(t)};
var
 string_of_class_type=
  function(*opt*,t)
   {var $js$2=*opt*;
    if($js$2){var complete=*opt*[1]}else{var complete=0}
    var $js$3=complete;
    if($js$3){var t2=t}else{var t2=simpl_class_type(t)}
    var $js$4=Printtyp["class_type"];
    $js$4(modtype_fmt,t2);
    return flush_modtype_fmt(0)};
module["exports"]=
{"string_of_type_expr":string_of_type_expr,
 "string_of_module_type":string_of_module_type,
 "string_of_class_type":string_of_class_type};
