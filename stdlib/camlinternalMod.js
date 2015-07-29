var CamlinternalOO=require("CamlinternalOO");
var Obj=require("Obj");
var $$Array=require("Array");
var
 init_mod=
  function(loc,shape)
   {var $js=shape;
    if(typeof $js=="number")
     {if($js==0)
       {var pad1=1;
        var pad2=2;
        var pad3=3;
        var pad4=4;
        var pad5=5;
        var pad6=6;
        var pad7=7;
        var pad8=8;
        return function(param)
         {0;
          0;
          0;
          0;
          0;
          0;
          0;
          0;
          var $js$1=[0,Undefined_recursive_module,loc];
          throw $js$1}}
      else
       if($js==1)
        {return [246,
                 function(param)
                  {var $js$1=[0,Undefined_recursive_module,loc];throw $js$1}]}
       else
        if($js==2)
         {var $js$1=CamlinternalOO["dummy_class"];
          var $js$2=$js$1(loc);
          return $js$2}}
    else
     {var $js$3=$js[0];
      if($js$3==0)
       {var comps=shape[1];
        var $js$4=$$Array["map"];
        var $js$5=init_mod(loc);
        var $js$6=$js$4($js$5,comps);
        return $js$6}
      else
       if($js$3==1){var v=shape[1];return v}}};
var
 overwrite=
  function(o,n)
   {var $js=o["length"]>=n["length"];
    if($js)
     {}
    else
     {var $js$1=[0,Assert_failure,[0,"camlinternalMod.ml",40,2]];throw $js$1}
    var $js$2=0;
    var $js$3=n["length"]-1;
    for(var i=$js$2;i<=$js$3;i++){o[i]=n[i],0}};
var
 update_mod=
  function(shape,o,n)
   {var $js=shape;
    if(typeof $js=="number")
     {if($js==0)
       {var $js$1="unknown primitive:caml_obj_tag";
        var $js$2=$js$1=Obj["closure_tag"];
        var $js$3=$js$2&&n["length"]<=o["length"];
        if($js$3)
         {overwrite(o,n);return "unknown primitive:caml_obj_truncate"}
        else
         {return overwrite(o,function(x){var $js$4=n;return $js$4(x)})}}
      else
       if($js==1)
        {var $js$4="unknown primitive:caml_obj_tag";
         var $js$5=$js$4=Obj["lazy_tag"];
         if($js$5)
          {return o[0]=n[0],0}
         else
          {var $js$6="unknown primitive:caml_obj_tag";
           var $js$7=$js$6=Obj["forward_tag"];
           if($js$7)
            {"unknown primitive:caml_obj_set_tag";return o[0]=n[0],0}
           else
            {"unknown primitive:caml_obj_set_tag";return o[0]=n,0}}}
       else
        if($js==2)
         {var $js$8="unknown primitive:caml_obj_tag";
          var $js$9=$js$8=0;
          var $js$10=$js$9&&(n["length"]=4);
          if($js$10)
           {}
          else
           {var $js$11=[0,Assert_failure,[0,"camlinternalMod.ml",63,6]];
            throw $js$11}
          return overwrite(o,n)}}
    else
     {var $js$12=$js[0];
      if($js$12==0)
       {var comps=shape[1];
        var $js$13="unknown primitive:caml_obj_tag";
        var $js$14=$js$13=0;
        var $js$15=$js$14&&n["length"]>=comps["length"];
        if($js$15)
         {}
        else
         {var $js$16=[0,Assert_failure,[0,"camlinternalMod.ml",66,6]];
          throw $js$16}
        var $js$17=0;
        var $js$18=comps["length"]-1;
        for(var i=$js$17;i<=$js$18;i++)
         {var $js$19=comps[i];update_mod($js$19,o[i],n[i])}}
      else
       if($js$12==1){return 0}}};
module["exports"]={"init_mod":init_mod,"update_mod":update_mod};
