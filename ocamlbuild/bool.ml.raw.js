var List=require("List");
var
 eval=
  function(f,param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){return 1}else if($js==1){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=List["for_all"];
        var $js$3=eval(f);
        return $js$2($js$3,param[1])}
      else
       if($js$1==1)
        {var $js$4=List["exists"];
         var $js$5=eval(f);
         return $js$4($js$5,param[1])}
       else
        if($js$1==2)
         {var $js$6=eval(f,param[1]);return !$js$6}
        else
         if($js$1==3){return f(param[1])}}};
var
 iter=
  function(f,param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){var exit=3}else if($js==1){var exit=3}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var exit=4}
      else
       if($js$1==1)
        {var exit=4}
       else
        if($js$1==2)
         {return iter(f,param[1])}
        else
         if($js$1==3){return f(param[1])}}
    switch(exit)
     {case 4:
       var $js$2=List["iter"];var $js$3=iter(f);return $js$2($js$3,param[1]);
      case 3:return 0
      }};
var
 map=
  function(f,b)
   {var $js=b;
    if(typeof $js=="number")
     {if($js==0){var exit=1}else if($js==1){var exit=1}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=List["map"];
        var $js$3=map(f);
        var $js$4=$js$2($js$3,b[1]);
        return [0,$js$4]}
      else
       if($js$1==1)
        {var $js$5=List["map"];
         var $js$6=map(f);
         var $js$7=$js$5($js$6,b[1]);
         return [1,$js$7]}
       else
        if($js$1==2)
         {var $js$8=map(f,b[1]);return [2,$js$8]}
        else
         if($js$1==3){var $js$9=f(b[1]);return [3,$js$9]}}
    switch(exit){case 1:return b}};
module["exports"]={"eval":eval,"iter":iter,"map":map};
