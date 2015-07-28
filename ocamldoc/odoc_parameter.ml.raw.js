var String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var
 complete_name=
  function(p)
   {var
     iter=
      function(pi)
       {var $js=pi;
        if($js==0)
         {return pi[1][1]}
        else
         if($js==1)
          {var pi_list=pi[1];
           var $js$1=pi_list;
           if($js$1)
            {var $js$2=Pervasives["^"];
             var $js$3=Pervasives["^"];
             var $js$4=String["concat"];
             var $js$5=List["map"];
             var $js$6=$js$5(iter,pi_list);
             var $js$7=$js$4(",",$js$6);
             var $js$8=$js$3($js$7,")");
             return $js$2("(",$js$8)}
           else
            {return "??"}}};
    return iter(p)};
var
 typ=
  function(pi)
   {var $js=pi;if($js==0){return pi[1][2]}else if($js==1){return pi[2]}};
var
 update_parameter_text=
  function(f,p)
   {var
     iter=
      function(pi)
       {var $js=pi;
        if($js==0)
         {var sn=pi[1];var $js$1=f(sn[1]);return sn[3]=$js$1,0}
        else
         if($js==1){var $js$2=List["iter"];return $js$2(iter,pi[1])}};
    return iter(p)};
var
 desc_by_name=
  function(pi,name)
   {var
     iter=
      function(acc,pi$1)
       {var $js=pi$1;
        if($js==0)
         {var sn=pi$1[1];return [0,[0,sn[1],sn[3]],acc]}
        else
         if($js==1)
          {var $js$1=List["fold_left"];return $js$1(iter,acc,pi$1[1])}};
    var l=iter(0,pi);
    var $js=List["assoc"];
    return $js(name,l)};
var
 names=
  function(pi)
   {var
     iter=
      function(acc,pi$1)
       {var $js=pi$1;
        if($js==0)
         {return [0,pi$1[1][1],acc]}
        else
         if($js==1)
          {var $js$1=List["fold_left"];return $js$1(iter,acc,pi$1[1])}};
    return iter(0,pi)};
var
 type_by_name=
  function(pi,name)
   {var
     iter=
      function(acc,pi$1)
       {var $js=pi$1;
        if($js==0)
         {var sn=pi$1[1];return [0,[0,sn[1],sn[2]],acc]}
        else
         if($js==1)
          {var $js$1=List["fold_left"];return $js$1(iter,acc,pi$1[1])}};
    var l=iter(0,pi);
    var $js=List["assoc"];
    return $js(name,l)};
var
 desc_from_info_opt=
  function(info_opt,s)
   {var $js=info_opt;
    if($js)
     {var $js$1=s;
      if($js$1=="")
       {return 0}
      else
       {try
         {var $js$2=List["assoc"];
          var $js$3=$js$2(s,info_opt[1][8]);
          return [0,$js$3]}
        catch(exn)
         {var $js$4=exn=Not_found;
          if($js$4){return 0}else{return "unknown primitive:reraise"}}}}
    else
     {return 0}};
module["exports"]=
{"complete_name":complete_name,
 "typ":typ,
 "update_parameter_text":update_parameter_text,
 "desc_by_name":desc_by_name,
 "names":names,
 "type_by_name":type_by_name,
 "desc_from_info_opt":desc_from_info_opt};
