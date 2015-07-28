var String=require("String");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Misc=require("Misc");
var Unix=require("Unix");
var Filename=require("Filename");
var Sys=require("Sys");
var
 convert_address=
  function(address)
   {try
     {var $js=String["index"];
      var n=$js(address,58);
      var $js$1=String["sub"];
      var host=$js$1(address,0,n);
      var $js$2=String["sub"];
      var port=$js$2(address,n+1,address["length"]-n-1);
      try
       {var $js$3=Unix["inet_addr_of_string"];var $js$4=$js$3(host)}
      catch(exn)
       {var $js$5=exn[1]=Failure;
        if($js$5)
         {try
           {var $js$6=Unix["gethostbyname"];
            var $js$7=$js$6(host);
            var $js$8=$js$7[4];
            var $js$4=$js$8[0]}
          catch(exn$1)
           {var $js$9=exn$1=Not_found;
            if($js$9)
             {var $js$10=Pervasives["prerr_endline"];
              var $js$11=Pervasives["^"];
              var $js$12=$js$11("Unknown host: ",host);
              $js$10($js$12);
              var $js$13=Pervasives["failwith"];
              var $js$4=$js$13("Can't convert address")}
            else
             {var $js$4="unknown primitive:reraise"}}}
        else
         {var $js$4="unknown primitive:reraise"}}
      try
       {var $js$14="unknown primitive:caml_int_of_string"}
      catch(exn$2)
       {var $js$15=exn$2[1]=Failure;
        if($js$15)
         {var $js$16=Pervasives["prerr_endline"];
          $js$16("The port number should be an integer");
          var $js$17=Pervasives["failwith"];
          var $js$14=$js$17("Can't convert address")}
        else
         {var $js$14="unknown primitive:reraise"}}
      var $js$18=[1,$js$4,$js$14];
      return [0,1,$js$18]}
    catch(exn$3)
     {var $js$19=exn$3=Not_found;
      if($js$19)
       {var match=Sys["os_type"];
        var $js$20=match;
        if($js$20=="Win32")
         {var $js$21=Pervasives["failwith"];
          return $js$21("Unix sockets not supported")}
        else
         {return [0,0,[0,address]]}}
      else
       {return "unknown primitive:reraise"}}};
var
 report_error=
  function(param)
   {var $js=param[1]=Unix["Unix_error"];
    if($js)
     {var arg=param[4];
      var $js$1=Pervasives["prerr_string"];
      $js$1("Unix error: '");
      var $js$2=Pervasives["prerr_string"];
      $js$2(param[3]);
      var $js$3=Pervasives["prerr_string"];
      $js$3("' failed");
      var $js$4=arg["length"]>0;
      if($js$4)
       {var $js$5=Pervasives["prerr_string"];
        $js$5(" on '");
        var $js$6=Pervasives["prerr_string"];
        $js$6(arg);
        var $js$7=Pervasives["prerr_string"];
        $js$7("'")}
      else
       {}
      var $js$8=Pervasives["prerr_string"];
      $js$8(": ");
      var $js$9=Pervasives["prerr_endline"];
      var $js$10=Unix["error_message"];
      var $js$11=$js$10(param[2]);
      return $js$9($js$11)}
    else
     {var $js$12=Misc["fatal_error"];
      return $js$12("report_error: not a Unix error")}};
var
 search_in_path=
  function(name)
   {var $js=Printf["fprintf"];
    $js
     (Pervasives["stderr"],
      [0,
       [11,"search_in_path [",[2,0,[11,"]\n",[10,0]]]],
       "search_in_path [%s]\n%!"],
      name);
    var
     check=
      function(name$1)
       {try
         {var $js$1=Unix["access"];$js$1(name$1,[0,2,0]);return name$1}
        catch(exn)
         {var $js$2=exn[1]=Unix["Unix_error"];
          if($js$2)
           {return "unknown primitive:raise"}
          else
           {return "unknown primitive:reraise"}}};
    var $js$1=Filename["is_implicit"];
    var $js$2=$js$1(name);
    var $js$3=!$js$2;
    if($js$3)
     {return check(name)}
    else
     {var path="unknown primitive:caml_sys_getenv";
      var length=path["length"];
      var
       traverse=
        function(pointer)
         {var $js$4=pointer>=length||(path[pointer]=58);
          if($js$4){return pointer}else{return traverse(pointer+1)}};
      var
       find=
        function(pos)
         {var pos2=traverse(pos);
          var $js$4=String["sub"];
          var directory=$js$4(path,pos,pos2-pos);
          var $js$5="unknown primitive:caml_string_equal";
          if($js$5)
           {var fullname=name}
          else
           {var $js$6=Pervasives["^"];
            var $js$7=Pervasives["^"];
            var $js$8=$js$7("/",name);
            var fullname=$js$6(directory,$js$8)}
          try
           {return check(fullname)}
          catch(exn)
           {var $js$9=exn=Not_found;
            if($js$9)
             {var $js$10=pos2<length;
              if($js$10)
               {return find(pos2+1)}
              else
               {return "unknown primitive:raise"}}
            else
             {return "unknown primitive:reraise"}}};
      return find(0)}};
var
 expand_path=
  function(ch)
   {var
     subst_variable=
      function(ch$1)
       {try
         {var $js=String["index"];
          var pos=$js(ch$1,36);
          var $js$1=pos+1<ch$1["length"]&&(ch$1[pos+1]=36);
          if($js$1)
           {var $js$2=Pervasives["^"];
            var $js$3=String["sub"];
            var $js$4=$js$3(ch$1,0,pos+1);
            var $js$5=String["sub"];
            var $js$6=$js$5(ch$1,pos+2,ch$1["length"]-pos-2);
            var $js$7=subst_variable($js$6);
            return $js$2($js$4,$js$7)}
          else
           {var $js$8=Pervasives["^"];
            var $js$9=String["sub"];
            var $js$10=$js$9(ch$1,0,pos);
            var $js$11=String["sub"];
            var $js$12=$js$11(ch$1,pos+1,ch$1["length"]-pos-1);
            var $js$13=subst2($js$12);
            return $js$8($js$10,$js$13)}}
        catch(exn)
         {var $js$14=exn=Not_found;
          if($js$14){return ch$1}else{return "unknown primitive:reraise"}}};
    var
     subst2=
      function(ch$1)
       {var i=0;
        for(;;)
         {var c=ch$1[i];
          var $js=c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||(c=95);
          var $js$1=i<ch$1["length"]&&$js;
          if($js$1){var $js$2=1+i;var i=$js$2}else break}
        var suiv=i;
        var $js$3=Pervasives["^"];
        var $js$4=String["sub"];
        var $js$5=$js$4(ch$1,0,suiv);
        var $js$6="unknown primitive:caml_sys_getenv";
        var $js$7=String["sub"];
        var $js$8=$js$7(ch$1,suiv,ch$1["length"]-suiv);
        var $js$9=subst_variable($js$8);
        return $js$3($js$6,$js$9)};
    var ch$1=subst_variable(ch);
    var
     concat_root=
      function(nom,ch2)
       {try
         {var $js=Filename["concat"];
          var $js$1=Unix["getpwnam"];
          var $js$2=$js$1(nom);
          var $js$3=$js$2[6];
          return $js($js$3,ch2)}
        catch(exn)
         {var $js$4=exn=Not_found;
          if($js$4)
           {var $js$5=Pervasives["^"];return $js$5("~",nom)}
          else
           {return "unknown primitive:reraise"}}};
    var $js=ch$1[0]=126;
    if($js)
     {try
       {var $js$1=String["index"];
        var n=$js$1(ch$1,47);
        var $js$2=n!=1;
        if($js$2)
         {var $js$3=String["sub"];
          var $js$4=$js$3(ch$1,1,n-1);
          var $js$5=String["sub"];
          var $js$6=$js$5(ch$1,n+1,ch$1["length"]-n-1);
          return concat_root($js$4,$js$6)}
        else
         {var $js$7=String["sub"];
          var tail=$js$7(ch$1,2,ch$1["length"]-2);
          try
           {var $js$8=Filename["concat"];
            return $js$8("unknown primitive:caml_sys_getenv",tail)}
          catch(exn)
           {var $js$9=exn=Not_found;
            if($js$9)
             {return concat_root("unknown primitive:caml_sys_getenv",tail)}
            else
             {return "unknown primitive:reraise"}}}}
      catch(exn$1)
       {var $js$10=exn$1=Not_found;
        if($js$10)
         {var $js$11=Pervasives["^"];
          var $js$12=$js$11(ch$1,"/");
          return expand_path($js$12)}
        else
         {return "unknown primitive:reraise"}}}
    else
     {return ch$1}};
var
 make_absolute=
  function(name)
   {var $js=Filename["is_relative"];
    var $js$1=$js(name);
    if($js$1)
     {var $js$2=Filename["concat"];
      var $js$3=Unix["getcwd"];
      var $js$4=$js$3(0);
      return $js$2($js$4,name)}
    else
     {return name}};
module["exports"]=
{"convert_address":convert_address,
 "report_error":report_error,
 "search_in_path":search_in_path,
 "expand_path":expand_path,
 "make_absolute":make_absolute};
