var Pervasives=require("Pervasives");
var List=require("List");
var CamlinternalLazy=require("CamlinternalLazy");
var Failure="unknown primitive:caml_set_oo_id";
var Error="unknown primitive:caml_set_oo_id";
var set_data=function(s,d){return s[1]=d,0};
var
 fill_buff=
  function(b)
   {var $js=Pervasives["input"];
    var $js$1=$js(b[1],b[2],0,b[2]["length"]);
    b[3]=$js$1,0;
    return b[4]=0,0};
var
 get_data=
  function(count,d)
   {var $js=d;
    if(typeof $js=="number")
     {if($js==0){var exit=30}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var exit=30}
      else
       if($js$1==1)
        {var d2=d[2];
         var d1=d[1];
         var match=get_data(count,d1);
         var $js$2=match;
         if(typeof $js$2=="number")
          {if($js$2==0){return get_data(count,d2)}}
         else
          {var $js$3=$js$2[0];
           if($js$3==0)
            {var d11=match[2];var a=match[1];return [0,a,[1,d11,d2]]}
           else
            {var $js$4=[0,Assert_failure,[0,"stream.ml",53,12]];throw $js$4}}}
       else
        if($js$1==2)
         {var f=d[1];
          var lzarg=f;
          var tag="unknown primitive:caml_obj_tag";
          var $js$5=tag=250;
          if($js$5)
           {var $js$6=lzarg[1]}
          else
           {var $js$7=tag=246;
            if($js$7)
             {var $js$8=CamlinternalLazy["force_lazy_block"];
              var $js$6=$js$8(lzarg)}
            else
             {var $js$6=lzarg}}
          return get_data(count,$js$6)}
        else
         if($js$1==3)
          {var g=d[1];
           var match$1=g[1];
           var $js$9=match$1;
           if($js$9)
            {var match$2=match$1[1];
             var $js$10=match$2;
             if($js$10)
              {var a$1=match$2[1];g[1]=0,0;return [0,a$1,d]}
             else
              {return 0}}
           else
            {var g$1=g;
             var $js$11=g$1[2];
             var match$3=$js$11(count);
             var $js$12=match$3;
             if($js$12)
              {var a$2=match$3[1];return [0,a$2,d]}
             else
              {g$1[1]=[0,0],0;return 0}}}
         else
          if($js$1==4)
           {var b=d[1];
            var $js$13=b[4]>=b[3];
            if($js$13){fill_buff(b)}else{}
            var $js$14=b[3]=0;
            if($js$14)
             {return 0}
            else
             {var r=b[2][b[4]];b[4]=1+b[4],0;return [0,r,d]}}}
    switch(exit){case 30:return d}};
var
 peek=
  function(s)
   {var match=s[2];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var a=match[1];return [0,a]}
      else
       if($js$1==1)
        {var d=get_data(s[1],s[2]);
         var $js$2=d;
         if(typeof $js$2=="number")
          {if($js$2==0){return 0}}
         else
          {var $js$3=$js$2[0];
           if($js$3==0)
            {var a$1=d[1];set_data(s,d);return [0,a$1]}
           else
            {var $js$4=[0,Assert_failure,[0,"stream.ml",82,12]];throw $js$4}}}
       else
        if($js$1==2)
         {var f=match[1];
          var lzarg=f;
          var tag="unknown primitive:caml_obj_tag";
          var $js$5=tag=250;
          if($js$5)
           {var $js$6=lzarg[1]}
          else
           {var $js$7=tag=246;
            if($js$7)
             {var $js$8=CamlinternalLazy["force_lazy_block"];
              var $js$6=$js$8(lzarg)}
            else
             {var $js$6=lzarg}}
          set_data(s,$js$6);
          return peek(s)}
        else
         if($js$1==3)
          {var g=match[1];
           var match$1=g[1];
           var $js$9=match$1;
           if($js$9)
            {var a$2=match$1[1];return a$2}
           else
            {var $js$10=g[2];var x=$js$10(s[1]);g[1]=[0,x],0;return x}}
         else
          if($js$1==4)
           {var b=match[1];
            var $js$11=b[4]>=b[3];
            if($js$11){fill_buff(b)}else{}
            var $js$12=b[3]=0;
            if($js$12){set_data(s,0);return 0}else{return [0,b[2][b[4]]]}}}};
var
 junk=
  function(s)
   {var match=s[2];
    var $js=match;
    if(typeof $js=="number")
     {"unknown block:match/1172"}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var d=match[2];s[1]=1+s[1],0;return set_data(s,d)}
      else
       if($js$1==3)
        {var g=match[1];
         var match$1=g[1];
         var $js$2=match$1;
         if($js$2){s[1]=1+s[1],0;return g[1]=0,0}else{var exit=24}}
       else
        if($js$1==4)
         {var b=match[1];s[1]=1+s[1],0;return b[4]=1+b[4],0}
        else
         {var exit=24}}
    switch(exit)
     {case 24:
       var match$2=peek(s);
       var $js$3=match$2;
       if($js$3){return junk(s)}else{return 0}
      }};
var
 nget=
  function(n,s)
   {var $js=n<=0;
    if($js)
     {return [0,0,s[2],0]}
    else
     {var match=peek(s);
      var $js$1=match;
      if($js$1)
       {var a=match[1];
        junk(s);
        var match$1=nget(-1+n,s);
        var k=match$1[3];
        var d=match$1[2];
        var al=match$1[1];
        return [0,[0,a,al],[0,a,d],1+k]}
      else
       {return [0,0,s[2],0]}}};
var
 npeek=
  function(n,s)
   {var match=nget(n,s);
    var len=match[3];
    var d=match[2];
    var al=match[1];
    s[1]=s[1]-len,0;
    set_data(s,d);
    return al};
var
 next=
  function(s)
   {var match=peek(s);
    var $js=match;
    if($js)
     {var a=match[1];junk(s);return a}
    else
     {var $js$1=Failure;throw $js$1}};
var
 empty=
  function(s)
   {var match=peek(s);
    var $js=match;
    if($js){var $js$1=Failure;throw $js$1}else{return 0}};
var
 iter=
  function(f,strm)
   {var
     do_rec=
      function(param)
       {var match=peek(strm);
        var $js=match;
        if($js)
         {var a=match[1];junk(strm);var $js$1=f(a);0;return do_rec(0)}
        else
         {return 0}};
    return do_rec(0)};
var from=function(f){return [0,0,[3,[0,0,f]]]};
var
 of_list=
  function(l)
   {var $js=List["fold_right"];
    var $js$1=$js(function(x,l$1){return [0,x,l$1]},l,0);
    return [0,0,$js$1]};
var
 of_string=
  function(s)
   {var count=[0,0];
    return from
            (function(param)
              {var c=count[1];
               var $js=c<s["length"];
               if($js)
                {count[0]++;var $js$1=s[c];return [0,$js$1]}
               else
                {return 0}})};
var
 of_bytes=
  function(s)
   {var count=[0,0];
    return from
            (function(param)
              {var c=count[1];
               var $js=c<s["length"];
               if($js)
                {count[0]++;var $js$1=s[c];return [0,$js$1]}
               else
                {return 0}})};
var
 of_channel=
  function(ic)
   {var $js="unknown primitive:caml_create_string";
    var $js$1=[0,ic,$js,0,0];
    var $js$2=[4,$js$1];
    return [0,0,$js$2]};
var iapp=function(i,s){return [0,0,[1,i[2],s[2]]]};
var icons=function(i,s){return [0,0,[0,i,s[2]]]};
var ising=function(i){return [0,0,[0,i,0]]};
var
 lapp=
  function(f,s)
   {return [0,
            0,
            [2,
             [246,
              function(param)
               {var $js=f(0);var $js$1=$js[2];return [1,$js$1,s[2]]}]]]};
var
 lcons=
  function(f,s)
   {return [0,0,[2,[246,function(param){var $js=f(0);return [0,$js,s[2]]}]]]};
var
 lsing=
  function(f)
   {return [0,0,[2,[246,function(param){var $js=f(0);return [0,$js,0]}]]]};
var sempty=[0,0,0];
var
 slazy=
  function(f)
   {return [0,0,[2,[246,function(param){var $js=f(0);return $js[2]}]]]};
var
 dump=
  function(f,s)
   {var $js=Pervasives["print_string"];
    $js("{count = ");
    var $js$1=Pervasives["print_int"];
    $js$1(s[1]);
    var $js$2=Pervasives["print_string"];
    $js$2("; data = ");
    dump_data(f,s[2]);
    var $js$3=Pervasives["print_string"];
    $js$3("}");
    var $js$4=Pervasives["print_newline"];
    return $js$4(0)};
var
 dump_data=
  function(f,param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){var $js$1=Pervasives["print_string"];return $js$1("Sempty")}}
    else
     {var $js$2=$js[0];
      if($js$2==0)
       {var d=param[2];
        var a=param[1];
        var $js$3=Pervasives["print_string"];
        $js$3("Scons (");
        f(a);
        var $js$4=Pervasives["print_string"];
        $js$4(", ");
        dump_data(f,d);
        var $js$5=Pervasives["print_string"];
        return $js$5(")")}
      else
       if($js$2==1)
        {var d2=param[2];
         var d1=param[1];
         var $js$6=Pervasives["print_string"];
         $js$6("Sapp (");
         dump_data(f,d1);
         var $js$7=Pervasives["print_string"];
         $js$7(", ");
         dump_data(f,d2);
         var $js$8=Pervasives["print_string"];
         return $js$8(")")}
       else
        if($js$2==2)
         {var $js$9=Pervasives["print_string"];return $js$9("Slazy")}
        else
         if($js$2==3)
          {var $js$10=Pervasives["print_string"];return $js$10("Sgen")}
         else
          if($js$2==4)
           {var $js$11=Pervasives["print_string"];return $js$11("Sbuffio")}}};
module["exports"]=
{"Failure":Failure,
 "Error":Error,
 "from":from,
 "of_list":of_list,
 "of_string":of_string,
 "of_bytes":of_bytes,
 "of_channel":of_channel,
 "iter":iter,
 "next":next,
 "empty":empty,
 "peek":peek,
 "junk":junk,
 "unknown block:(function prim/1133 (field 0 prim/1133))":
 unknown block:(function prim/1133 (field 0 prim/1133)),
 "npeek":npeek,
 "iapp":iapp,
 "icons":icons,
 "ising":ising,
 "lapp":lapp,
 "lcons":lcons,
 "lsing":lsing,
 "sempty":sempty,
 "slazy":slazy,
 "dump":dump};
