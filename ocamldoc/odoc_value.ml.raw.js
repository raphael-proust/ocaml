var String=require("String");
var Printtyp=require("Printtyp");
var List=require("List");
var Odoc_parameter=require("Odoc_parameter");
var Name=0;
var
 value_parameter_text_by_name=
  function(v,name)
   {var match=v[2];
    var $js=match;
    if($js)
     {try
       {var $js$1=List["assoc"];var t=$js$1(name,match[1][8]);return [0,t]}
      catch(exn)
       {var $js$2=exn=Not_found;
        if($js$2){return 0}else{return "unknown primitive:reraise"}}}
    else
     {return 0}};
var
 update_value_parameters_text=
  function(v)
   {var
     f=
      function(p)
       {var $js=Odoc_parameter["update_parameter_text"];
        var $js$1=value_parameter_text_by_name(v);
        return $js($js$1,p)};
    var $js=List["iter"];
    return $js(f,v[5])};
var
 parameter_list_from_arrows=
  function(typ)
   {var
     iter=
      function(t)
       {var match=t[1];
        var $js=match;
        if(typeof $js=="number")
         {"unknown block:match/1087"}
        else
         {var $js$1=$js[0];
          if($js$1==1)
           {var $js$2=iter(match[3]);return [0,[0,match[1],match[2]],$js$2]}
          else
           if($js$1==6)
            {var exit=13}
           else
            if($js$1==7)
             {var exit=13}
            else
             if($js$1==10){return iter(match[1])}else{var exit=12}}
        switch(exit){case 13:return iter(match[1]);case 12:return 0}};
    return iter(typ)};
var
 dummy_parameter_list=
  function(typ)
   {var
     normal_name=
      function(s)
       {var $js=s;
        if($js=="")
         {return s}
        else
         {var match=s[0];
          var $js$1=match!=63;
          if($js$1)
           {return s}
          else
           {var $js$2=String["sub"];return $js$2(s,1,s["length"]-1)}}};
    var $js=Printtyp["mark_loops"];
    $js(typ);
    var liste_param=parameter_list_from_arrows(typ);
    var
     iter=
      function(param)
       {var t=param[2];
        var label=param[1];
        var match=t[1];
        var $js$1=match;
        if(typeof $js$1=="number")
         {"unknown block:match/1080"}
        else
         {var $js$2=$js$1[0];
          if($js$2==2)
           {var $js$3="unknown primitive:caml_string_equal";
            if($js$3)
             {var $js$4=List["map"];
              var $js$5=$js$4(function(t2){return iter([0,"",t2])},match[1]);
              return [1,$js$5,t]}
            else
             {var $js$6=normal_name(label);
              var $js$7=[0,$js$6,t,0];
              return [0,$js$7]}}
          else
           if($js$2==6)
            {var exit=5}
           else
            if($js$2==7){var exit=5}else{var exit=4}}
        switch(exit)
         {case 5:return iter([0,label,match[1]]);
          case 4:
           var $js$8=normal_name(label);
           var $js$9=[0,$js$8,t,0];
           return [0,$js$9]
          }};
    var $js$1=List["map"];
    return $js$1(iter,liste_param)};
var
 is_function=
  function(v)
   {var
     f=
      function(t)
       {var match=t[1];
        var $js=match;
        if(typeof $js=="number")
         {"unknown block:match/1071"}
        else
         {var $js$1=$js[0];
          if($js$1==1)
           {return 1}
          else
           if($js$1==6){return f(match[1])}else{var exit=1}}
        switch(exit){case 1:return 0}};
    return f(v[3])};
module["exports"]=
{"Name":Name,
 "value_parameter_text_by_name":value_parameter_text_by_name,
 "update_value_parameters_text":update_value_parameters_text,
 "parameter_list_from_arrows":parameter_list_from_arrows,
 "dummy_parameter_list":dummy_parameter_list,
 "is_function":is_function};
