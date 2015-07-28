var String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Format=require("Format");
var Set=require("Set");
var Lexing=require("Lexing");
var Filename=require("Filename");
var Buffer=require("Buffer");
var Bytes=require("Bytes");
var Hashtbl=require("Hashtbl");
var CamlinternalLazy=require("CamlinternalLazy");
var Array=require("Array");
var Sys=require("Sys");
var Exit_OK="unknown primitive:caml_set_oo_id";
var Exit_usage="unknown primitive:caml_set_oo_id";
var Exit_system_error="unknown primitive:caml_set_oo_id";
var Exit_with_code="unknown primitive:caml_set_oo_id";
var Exit_silently_with_code="unknown primitive:caml_set_oo_id";
var
 ignore_good=
  function(param)
   {var $js=param;
    if($js==0){return 0}else if($js==1){return "unknown primitive:raise"}};
var
 good=
  function(param)
   {var $js=param;
    if($js==0)
     {return param[1]}
    else
     if($js==1){return "unknown primitive:raise"}};
var
 wrap=
  function(f,x){try {var $js=f(x);return [0,$js]}catch(e){return [1,e]}};
var Outcome=[0,ignore_good,good,wrap];
var
 opt_print=
  function(elt,ppf,param)
   {var $js=param;
    if($js)
     {var $js$1=Format["fprintf"];
      return $js$1
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<2>",0],"<2>"]],
                 [11,"Some",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                "@[<2>Some@ %a@]"],
               elt,
               param[1])}
    else
     {var $js$2=Format["pp_print_string"];return $js$2(ppf,"None")}};
var
 ksbprintf=
  function(g,fmt)
   {var $js=Buffer["create"];
    var buff=$js(42);
    var $js$1=Format["formatter_of_buffer"];
    var f=$js$1(buff);
    var $js$2=Format["kfprintf"];
    return $js$2
            (function(f$1)
              {var $js$3=Format["pp_print_flush"];
               $js$3(f$1,0);
               var $js$4=Buffer["contents"];
               var $js$5=$js$4(buff);
               return g($js$5)},
             f,
             fmt)};
var sbprintf=function(fmt){return ksbprintf(function(x){return x},fmt)};
var
 Make=
  function(M)
   {var $js=Set["Make"];
    var include=$js([0,M[1]]);
    var empty=include[1];
    var add=include[4];
    var iter=include[13];
    var fold=include[14];
    var Found="unknown primitive:caml_set_oo_id";
    var
     find_elt=
      function(p,set)
       {try
         {iter
           (function(elt)
             {var $js$1=p(elt);
              if($js$1){return "unknown primitive:raise"}else{return 0}},
            set);
          return "unknown primitive:raise"}
        catch(exn)
         {var $js$1=exn[1]=Found;
          if($js$1){return exn[2]}else{return "unknown primitive:reraise"}}};
    var
     map=
      function(f,set)
       {return fold(function(x){var $js$1=f(x);return add($js$1)},set,empty)};
    var
     of_list=
      function(l){var $js$1=List["fold_right"];return $js$1(add,l,empty)};
    var
     print=
      function(f,s)
       {var $js$1=Format["fprintf"];
        var
         match=
          $js$1
           (f,
            [0,
             [18,
              [1,[0,[11,"<hv0>",0],"<hv0>"]],
              [18,
               [1,[0,[11,"<hv2>",0],"<hv2>"]],
               [11,"{.",[17,[0,"@ ",1,0],0]]]],
             "@[<hv0>@[<hv2>{.@ "]);
        var
         match$1=
          fold
           (function(elt,first)
             {var $js$2=!first;
              if($js$2)
               {var $js$3=Format["fprintf"];
                $js$3(f,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "])}
              else
               {}
              var $js$4=M[2];
              $js$4(f,elt);
              return 0},
            s,
            1);
        var $js$2=Format["fprintf"];
        return $js$2
                (f,[0,[17,0,[17,[0,"@ ",1,0],[11,".}",[17,0,0]]]],"@]@ .}@]"])};
    return [0,
            empty,
            include[2],
            include[3],
            add,
            include[5],
            include[6],
            include[7],
            include[8],
            include[9],
            include[10],
            include[11],
            include[12],
            iter,
            fold,
            include[15],
            include[16],
            include[17],
            include[18],
            include[19],
            include[20],
            include[21],
            include[22],
            include[23],
            include[24],
            include[25],
            find_elt,
            map,
            of_list,
            print]};
var Set=[0,Make];
var include=List;
var rev=include[5];
var fold_left=include[15];
var mem=include[26];
var
 print=
  function(pp_elt,f,ls)
   {var $js=Format["fprintf"];
    $js
     (f,
      [0,
       [18,[1,[0,[11,"<2>",0],"<2>"]],[12,91,[17,[0,"@ ",1,0],0]]],
       "@[<2>[@ "]);
    var
     match=
      fold_left
       (function(first,elt)
         {var $js$1=!first;
          if($js$1)
           {var $js$2=Format["fprintf"];
            $js$2(f,[0,[12,59,[17,[0,"@ ",1,0],0]],";@ "])}
          else
           {}
          pp_elt(f,elt);
          return 0},
        1,
        ls);
    var $js$1=Format["fprintf"];
    return $js$1(f,[0,[17,[0,"@ ",1,0],[12,93,[17,0,0]]],"@ ]@]"])};
var
 filter_opt=
  function(f,xs)
   {var $js=List["fold_right"];
    return $js
            (function(x,acc)
              {var match=f(x);
               var $js$1=match;
               if($js$1){return [0,match[1],acc]}else{return acc}},
             xs,
             0)};
var
 rev_append_uniq=
  function(acc,param)
   {var $js=param;
    if($js)
     {var xs=param[2];
      var x=param[1];
      var $js$1=mem(x,acc);
      if($js$1)
       {return rev_append_uniq(acc,xs)}
      else
       {return rev_append_uniq([0,x,acc],xs)}}
    else
     {return acc}};
var
 union=
  function(a,b)
   {var $js=rev_append_uniq(0,a);
    var $js$1=rev_append_uniq($js,b);
    return rev($js$1)};
var
 ordered_unique=
  function(lst)
   {var $js=Set[1];
    var
     compare=
      function(prim,prim$1){return "unknown primitive:caml_compare"};
    var print$1=function(param,param$1){return 0};
    var $js$1=[0,compare,print$1];
    var Set$1=$js($js$1);
    var $js$2=List["fold_left"];
    var
     match=
      $js$2
       (function(param,el)
         {var acc=param[2];
          var set=param[1];
          var $js$3=Set$1[3];
          var $js$4=$js$3(el,set);
          if($js$4)
           {return [0,set,acc]}
          else
           {var $js$5=Set$1[4];
            var $js$6=$js$5(el,set);
            return [0,$js$6,[0,el,acc]]}},
        [0,Set$1[1],0],
        lst);
    var $js$3=List["rev"];
    return $js$3(match[2])};
var
 List=
  [0,
   include[1],
   include[2],
   include[3],
   include[4],
   rev,
   include[6],
   include[7],
   include[8],
   include[9],
   include[10],
   include[11],
   include[12],
   include[13],
   include[14],
   fold_left,
   include[16],
   include[17],
   include[18],
   include[19],
   include[20],
   include[21],
   include[22],
   include[23],
   include[24],
   include[25],
   mem,
   include[27],
   include[28],
   include[29],
   include[30],
   include[31],
   include[32],
   include[33],
   include[34],
   include[35],
   include[36],
   include[37],
   include[38],
   include[39],
   include[40],
   include[41],
   include[42],
   include[43],
   include[44],
   print,
   filter_opt,
   rev_append_uniq,
   union,
   ordered_unique];
var include$1=String;
var sub=include$1[4];
var index_from=include$1[16];
var
 print$1=
  function(f,s){var $js=Format["fprintf"];return $js(f,[0,[3,0,0],"%S"],s)};
var
 chomp=
  function(s)
   {var
     is_nl_char=
      function(param)
       {var $js=param!=10;
        if($js)
         {var $js$1=param!=13;if($js$1){return 0}else{var exit=102}}
        else
         {var exit=102}
        switch(exit){case 102:return 1}};
    var
     cut=
      function(n)
       {var $js=n=0;
        if($js)
         {return 0}
        else
         {var $js$1=is_nl_char(s[n-1]);
          if($js$1){return cut(n-1)}else{return n}}};
    var ls=s["length"];
    var n=cut(ls);
    var $js=n=ls;
    if($js){return s}else{return sub(s,0,n)}};
var before=function(s,pos){return sub(s,0,pos)};
var after=function(s,pos){return sub(s,pos,s["length"]-pos)};
var first_chars=function(s,n){return sub(s,0,n)};
var last_chars=function(s,n){return sub(s,s["length"]-n,n)};
var
 eq_sub_strings=
  function(s1,p1,s2,p2,len)
   {var $js=len>0;
    if($js)
     {var $js$1=eq_sub_strings(s1,p1+1,s2,p2+1,len-1);
      return (s1[p1]=s2[p2])&&$js$1}
    else
     {return 1}};
var
 contains_string=
  function(s1,p1,s2)
   {var ls1=s1["length"];
    var ls2=s2["length"];
    try
     {var pos=index_from(s1,p1,s2[0]);
      var $js=ls1-pos<ls2;
      if($js)
       {return 0}
      else
       {var $js$1=eq_sub_strings(s1,pos,s2,0,ls2);
        if($js$1){return [0,pos]}else{return contains_string(s1,pos+1,s2)}}}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2){return 0}else{return "unknown primitive:reraise"}}};
var
 subst=
  function(patt,repl,s)
   {var lpatt=patt["length"];
    var lrepl=repl["length"];
    var
     loop=
      function(s$1,from)
       {var match=contains_string(s$1,from,patt);
        var $js=match;
        if($js)
         {var pos=match[1];
          var $js$1=Pervasives["^"];
          var $js$2=before(s$1,pos);
          var $js$3=Pervasives["^"];
          var $js$4=after(s$1,pos+lpatt);
          var $js$5=$js$3(repl,$js$4);
          var $js$6=$js$1($js$2,$js$5);
          return loop($js$6,pos+lrepl)}
        else
         {return s$1}};
    return loop(s,0)};
var
 tr=
  function(patt,subst$1,text)
   {var $js=String["map"];
    return $js
            (function(c)
              {var $js$1=c=patt;if($js$1){return subst$1}else{return c}},
             text)};
var
 is_prefix=
  function(u,v)
   {var m=u["length"];
    var n=v["length"];
    var
     loop=
      function(i)
       {var $js=loop(i+1);var $js$1=(u[i]=v[i])&&$js;return (i=m)||$js$1};
    var $js=loop(0);
    return m<=n&&$js};
var
 is_suffix=
  function(u,v)
   {var m=u["length"];
    var n=v["length"];
    var
     loop=
      function(i)
       {var $js=loop(i+1);
        var $js$1=(u[m-1-i]=v[n-1-i])&&$js;
        return (i=n)||$js$1};
    var $js=loop(0);
    return n<=m&&$js};
var
 rev$1=
  function(s)
   {var sl=s["length"];
    var s'="unknown primitive:caml_create_string";
    var $js=0;
    var $js$1=sl-1;
    for(var i=$js;i<=$js$1;i++){s'[i]=s[sl-i-1],0}
    var $js$2=Bytes["to_string"];
    return $js$2(s')};
var
 implode=
  function(l)
   {var $js=l;
    if($js)
     {var $js$1=List[1];
      var $js$2=$js$1(l);
      var r="unknown primitive:caml_create_string";
      var pos=[0,0];
      var $js$3=List[10];
      $js$3(function(c){r[pos[1]]=c,0;return pos[0]++},l);
      var $js$4=Bytes["to_string"];
      return $js$4(r)}
    else
     {return ""}};
var
 explode=
  function(s)
   {var sl=s["length"];
    var
     go=
      function(pos)
       {var $js=pos>=sl;
        if($js){return 0}else{var $js$1=go(pos+1);return [0,s[pos],$js$1]}};
    return go(0)};
var
 String=
  [0,
   include$1[1],
   include$1[2],
   include$1[3],
   sub,
   include$1[5],
   include$1[6],
   include$1[7],
   include$1[8],
   include$1[9],
   include$1[10],
   include$1[11],
   include$1[12],
   include$1[13],
   include$1[14],
   include$1[15],
   index_from,
   include$1[17],
   include$1[18],
   include$1[19],
   include$1[20],
   include$1[21],
   include$1[22],
   include$1[23],
   include$1[24],
   include$1[25],
   print$1,
   chomp,
   before,
   after,
   first_chars,
   last_chars,
   eq_sub_strings,
   contains_string,
   subst,
   tr,
   is_prefix,
   is_suffix,
   rev$1,
   implode,
   explode];
var $js=Set[1];
var StringSet=$js([0,String[25],String[26]]);
var $js$1=Hashtbl["create"];
var cache=$js$1(0,103);
var
 sys_readdir=
  function(dir)
   {try
     {var $js$2=Hashtbl["find"];return $js$2(cache,dir)}
    catch(exn)
     {var $js$3=exn=Not_found;
      if($js$3)
       {var $js$4=Outcome[3];
        var
         res=
          $js$4
           (function(prim){return "unknown primitive:caml_sys_read_directory"},
            dir);
        var $js$5=Hashtbl["add"];
        $js$5(cache,dir,res);
        return res}
      else
       {return "unknown primitive:reraise"}}};
var
 reset_readdir_cache=
  function(param){var $js$2=Hashtbl["clear"];return $js$2(cache)};
var
 reset_readdir_cache_for=
  function(dir){var $js$2=Hashtbl["remove"];return $js$2(cache,dir)};
var match=[0,sys_readdir,reset_readdir_cache,reset_readdir_cache_for];
var reset_readdir_cache_for$1=match[3];
var reset_readdir_cache$1=match[2];
var sys_readdir$1=match[1];
var
 sys_file_exists=
  function(x)
   {var $js$2=Filename["dirname"];
    var dirname=$js$2(x);
    var $js$3=Filename["basename"];
    var basename=$js$3(x);
    var match$1=sys_readdir$1(dirname);
    var $js$4=match$1;
    if($js$4==0)
     {var $js$5="unknown primitive:caml_string_equal";
      if($js$5)
       {return 1}
      else
       {try
         {var $js$6=Array["iter"];
          $js$6
           (function(x$1)
             {var $js$7="unknown primitive:caml_string_equal";
              if($js$7){return "unknown primitive:raise"}else{return 0}},
            match$1[1]);
          return 0}
        catch(exn)
         {var $js$7=exn=Pervasives["Exit"];
          if($js$7){return 1}else{return "unknown primitive:reraise"}}}}
    else
     if($js$4==1){return 0}};
var match$1=Sys["os_type"];
var $js$2=match$1;
if($js$2=="Win32")
 {var
   sys_command=
    function(cmd)
     {var $js$3="unknown primitive:caml_string_equal";
      if($js$3)
       {return 0}
      else
       {var $js$4=Pervasives["^"];
        var $js$5=Filename["quote"];
        var $js$6=$js$5(cmd);
        var cmd$1=$js$4("bash --norc -c ",$js$6);
        return "unknown primitive:caml_sys_system_command"}}}
else
 {var
   sys_command=
    function(cmd)
     {var $js$3="unknown primitive:caml_string_equal";
      if($js$3)
       {return 0}
      else
       {return "unknown primitive:caml_sys_system_command"}}}
var
 filename_concat=
  function(x,y)
   {var
     $js$3=
      "unknown primitive:caml_string_equal"||
      "unknown primitive:caml_string_equal";
    if($js$3)
     {return y}
    else
     {var
       $js$4=
        "unknown primitive:caml_string_equal"&&
        (x[x["length"]-1]=92)||
        (x[x["length"]-1]=47);
      if($js$4)
       {var $js$5="unknown primitive:caml_string_equal";
        if($js$5){return x}else{var $js$6=Pervasives["^"];return $js$6(x,y)}}
      else
       {var $js$7=Pervasives["^"];
        var $js$8=Pervasives["^"];
        var $js$9=$js$8("/",y);
        return $js$7(x,$js$9)}}};
var
 invalid_arg'=
  function(fmt){return ksbprintf(Pervasives["invalid_arg"],fmt)};
var
 the=
  function(param)
   {var $js$3=param;
    if($js$3)
     {return param[1]}
    else
     {var $js$4=Pervasives["invalid_arg"];
      return $js$4("the: expect Some not None")}};
var
 getenv=
  function(default,var)
   {try
     {return "unknown primitive:caml_sys_getenv"}
    catch(exn)
     {var $js$3=exn=Not_found;
      if($js$3)
       {var $js$4=default;
        if($js$4)
         {return default[1]}
        else
         {var $js$5=Pervasives["failwith"];
          var $js$6=Format["sprintf"];
          var
           $js$7=
            $js$6
             ([0,
               [11,
                "This command must have ",
                [3,0,[11," in his environment",0]]],
               "This command must have %S in his environment"],
              var);
          return $js$5($js$7)}}
      else
       {return "unknown primitive:reraise"}}};
var
 with_input_file=
  function(*opt*,x,f)
   {var $js$3=*opt*;
    if($js$3){var bin=*opt*[1]}else{var bin=0}
    var $js$4=bin;
    if($js$4)
     {var $js$5=Pervasives["open_in_bin"]}
    else
     {var $js$5=Pervasives["open_in"]}
    var ic=$js$5(x);
    try
     {var res=f(ic);var $js$6=Pervasives["close_in"];$js$6(ic);return res}
    catch(e)
     {var $js$7=Pervasives["close_in"];
      $js$7(ic);
      return "unknown primitive:reraise"}};
var
 with_output_file=
  function(*opt*,x,f)
   {var $js$3=*opt*;
    if($js$3){var bin=*opt*[1]}else{var bin=0}
    var $js$4=Filename["dirname"];
    var $js$5=$js$4(x);
    reset_readdir_cache_for$1($js$5);
    var $js$6=bin;
    if($js$6)
     {var $js$7=Pervasives["open_out_bin"]}
    else
     {var $js$7=Pervasives["open_out"]}
    var oc=$js$7(x);
    try
     {var res=f(oc);var $js$8=Pervasives["close_out"];$js$8(oc);return res}
    catch(e)
     {var $js$9=Pervasives["close_out"];
      $js$9(oc);
      return "unknown primitive:reraise"}};
var
 read_file=
  function(x)
   {return with_input_file
            ([0,1],
             x,
             function(ic)
              {var $js$3=Pervasives["in_channel_length"];
               var len=$js$3(ic);
               var $js$4=Pervasives["really_input_string"];
               return $js$4(ic,len)})};
var
 copy_chan=
  function(ic,oc)
   {var $js$3=Pervasives["in_channel_length"];
    var m=$js$3(ic);
    var m$1=m>>>12<<12;
    var $js$4=Pervasives["max"];
    var $js$5=Pervasives["min"];
    var $js$6=$js$5(Sys["max_string_length"],m$1);
    var m$2=$js$4(16384,$js$6);
    var buf="unknown primitive:caml_create_string";
    var
     loop=
      function(param)
       {var $js$7=Pervasives["input"];
        var len=$js$7(ic,buf,0,m$2);
        var $js$8=len>0;
        if($js$8)
         {var $js$9=Pervasives["output"];$js$9(oc,buf,0,len);return loop(0)}
        else
         {return 0}};
    return loop(0)};
var
 copy_file=
  function(src,dest)
   {var $js$3=Filename["dirname"];
    var $js$4=$js$3(dest);
    reset_readdir_cache_for$1($js$4);
    return with_input_file
            ([0,1],
             src,
             function(ic)
              {return with_output_file
                       ([0,1],dest,function(oc){return copy_chan(ic,oc)})})};
var
 !*=
  function(prim)
   {var tag="unknown primitive:caml_obj_tag";
    var $js$3=tag=250;
    if($js$3)
     {return prim[1]}
    else
     {var $js$4=tag=246;
      if($js$4)
       {var $js$5=CamlinternalLazy["force_lazy_block"];return $js$5(prim)}
      else
       {return prim}}};
var
 @:==
  function(ref,list)
   {var $js$3=Pervasives["@"];
    var $js$4=$js$3(ref[1],list);
    return ref[1]=$js$4,0};
var &=function(f,x){return f(x)};
var |>=function(x,f){return f(x)};
var $js$3=List[45];
var print_string_list=$js$3(String[26]);
var include$2=Digest;
var file=include$2[6];
var $js$4=Hashtbl["create"];
var digest_cache=$js$4(0,103);
var
 reset_digest_cache=
  function(param){var $js$5=Hashtbl["clear"];return $js$5(digest_cache)};
var
 reset_digest_cache_for=
  function(file$1)
   {var $js$5=Hashtbl["remove"];return $js$5(digest_cache,file$1)};
var
 file$1=
  function(f)
   {try
     {var $js$5=Hashtbl["find"];return $js$5(digest_cache,f)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6)
       {var res=file(f);
        var $js$7=Hashtbl["add"];
        $js$7(digest_cache,f,res);
        return res}
      else
       {return "unknown primitive:reraise"}}};
var
 Digest=
  [0,
   include$2[1],
   include$2[2],
   include$2[3],
   include$2[4],
   include$2[5],
   include$2[7],
   include$2[8],
   include$2[9],
   include$2[10],
   digest_cache,
   reset_digest_cache,
   reset_digest_cache_for,
   file$1];
var
 reset_filesys_cache=
  function(param)
   {var $js$5=Digest[11];$js$5(0);return reset_readdir_cache$1(0)};
var
 reset_filesys_cache_for_file=
  function(file$2)
   {var $js$5=Digest[12];
    $js$5(file$2);
    var $js$6=Filename["dirname"];
    var $js$7=$js$6(file$2);
    return reset_readdir_cache_for$1($js$7)};
var
 sys_remove=
  function(x)
   {reset_filesys_cache_for_file(x);
    return "unknown primitive:caml_sys_remove"};
var
 with_temp_file=
  function(pre,suf,fct)
   {var $js$5=Filename["temp_file"];
    var tmp=$js$5(0,pre,suf);
    try
     {var res=fct(tmp);"unknown primitive:caml_sys_remove";return res}
    catch(e)
     {"unknown primitive:caml_sys_remove";return "unknown primitive:reraise"}};
var
 memo=
  function(f)
   {var $js$5=Hashtbl["create"];
    var cache$1=$js$5(0,103);
    return function(x)
     {try
       {var $js$6=Hashtbl["find"];return $js$6(cache$1,x)}
      catch(exn)
       {var $js$7=exn=Not_found;
        if($js$7)
         {var res=f(x);
          var $js$8=Hashtbl["add"];
          $js$8(cache$1,x,res);
          return res}
        else
         {return "unknown primitive:reraise"}}}};
var
 memo2=
  function(f)
   {var $js$5=Hashtbl["create"];
    var cache$1=$js$5(0,103);
    return function(x,y)
     {try
       {var $js$6=Hashtbl["find"];return $js$6(cache$1,[0,x,y])}
      catch(exn)
       {var $js$7=exn=Not_found;
        if($js$7)
         {var res=f(x,y);
          var $js$8=Hashtbl["add"];
          $js$8(cache$1,[0,x,y],res);
          return res}
        else
         {return "unknown primitive:reraise"}}}};
var
 memo3=
  function(f)
   {var $js$5=Hashtbl["create"];
    var cache$1=$js$5(0,103);
    return function(x,y,z)
     {try
       {var $js$6=Hashtbl["find"];return $js$6(cache$1,[0,x,y,z])}
      catch(exn)
       {var $js$7=exn=Not_found;
        if($js$7)
         {var res=f(x,y,z);
          var $js$8=Hashtbl["add"];
          $js$8(cache$1,[0,x,y,z],res);
          return res}
        else
         {return "unknown primitive:reraise"}}}};
var
 set_lexbuf_fname=
  function(fname,lexbuf)
   {var init=lexbuf[11];
    var $js$5=[0,fname,init[2],init[3],init[4]];
    lexbuf[11]=$js$5,0;
    var init$1=lexbuf[12];
    var $js$6=[0,fname,init$1[2],init$1[3],init$1[4]];
    lexbuf[12]=$js$6,0;
    return 0};
var
 lexbuf_of_string=
  function(name,content)
   {var $js$5=Lexing["from_string"];
    var lexbuf=$js$5(content);
    var $js$6=name;
    if($js$6)
     {var fname=name[1]}
    else
     {var $js$7=String[18];
      var $js$8=$js$7(content,10);
      var $js$9=!$js$8;
      var $js$10=content["length"]<40&&$js$9;
      if($js$10)
       {var $js$11=String[13];var fname=$js$11(content)}
      else
       {var fname=""}}
    set_lexbuf_fname(fname,lexbuf);
    return lexbuf};
module["exports"]=
{"Exit_OK":Exit_OK,
 "Exit_usage":Exit_usage,
 "Exit_system_error":Exit_system_error,
 "Exit_with_code":Exit_with_code,
 "Exit_silently_with_code":Exit_silently_with_code,
 "unknown block:(makeblock 0 (field 2 Outcome/1025) (field 0 Outcome/1025)\n  (field 1 Outcome/1025))":
 unknown block:(makeblock 0 (field 2 Outcome/1025) (field 0 Outcome/1025)
  (field 1 Outcome/1025)),
 "ksbprintf":ksbprintf,
 "sbprintf":sbprintf,
 "Set":Set,
 "unknown block:(makeblock 0 (field 44 List/1410) (field 45 List/1410) (field 47 List/1410)\n  (field 48 List/1410) (field 0 List/1410) (field 1 List/1410)\n  (field 2 List/1410) (field 3 List/1410) (field 4 List/1410)\n  (field 5 List/1410) (field 6 List/1410) (field 7 List/1410)\n  (field 8 List/1410) (field 9 List/1410) (field 10 List/1410)\n  (field 11 List/1410) (field 12 List/1410) (field 13 List/1410)\n  (field 14 List/1410) (field 15 List/1410) (field 16 List/1410)\n  (field 17 List/1410) (field 18 List/1410) (field 19 List/1410)\n  (field 20 List/1410) (field 21 List/1410) (field 22 List/1410)\n  (field 23 List/1410) (field 24 List/1410) (field 25 List/1410)\n  (field 26 List/1410) (field 27 List/1410) (field 28 List/1410)\n  (field 29 List/1410) (field 30 List/1410) (field 31 List/1410)\n  (field 32 List/1410) (field 33 List/1410) (field 34 List/1410)\n  (field 35 List/1410) (field 36 List/1410) (field 37 List/1410)\n  (field 38 List/1410) (field 39 List/1410) (field 40 List/1410)\n  (field 41 List/1410) (field 42 List/1410) (field 43 List/1410))":
 unknown block:(makeblock 0 (field 44 List/1410) (field 45 List/1410) (field 47 List/1410)
  (field 48 List/1410) (field 0 List/1410) (field 1 List/1410)
  (field 2 List/1410) (field 3 List/1410) (field 4 List/1410)
  (field 5 List/1410) (field 6 List/1410) (field 7 List/1410)
  (field 8 List/1410) (field 9 List/1410) (field 10 List/1410)
  (field 11 List/1410) (field 12 List/1410) (field 13 List/1410)
  (field 14 List/1410) (field 15 List/1410) (field 16 List/1410)
  (field 17 List/1410) (field 18 List/1410) (field 19 List/1410)
  (field 20 List/1410) (field 21 List/1410) (field 22 List/1410)
  (field 23 List/1410) (field 24 List/1410) (field 25 List/1410)
  (field 26 List/1410) (field 27 List/1410) (field 28 List/1410)
  (field 29 List/1410) (field 30 List/1410) (field 31 List/1410)
  (field 32 List/1410) (field 33 List/1410) (field 34 List/1410)
  (field 35 List/1410) (field 36 List/1410) (field 37 List/1410)
  (field 38 List/1410) (field 39 List/1410) (field 40 List/1410)
  (field 41 List/1410) (field 42 List/1410) (field 43 List/1410)),
 "unknown block:(makeblock 0 (field 25 String/1525) (field 26 String/1525)\n  (field 27 String/1525) (field 28 String/1525) (field 29 String/1525)\n  (field 30 String/1525) (field 31 String/1525) (field 35 String/1525)\n  (field 36 String/1525) (field 32 String/1525) (field 33 String/1525)\n  (field 34 String/1525) (field 37 String/1525) (field 38 String/1525)\n  (field 39 String/1525) (field 0 String/1525) (field 1 String/1525)\n  (field 2 String/1525) (field 3 String/1525) (field 4 String/1525)\n  (field 5 String/1525) (field 6 String/1525) (field 7 String/1525)\n  (field 8 String/1525) (field 9 String/1525) (field 10 String/1525)\n  (field 11 String/1525) (field 12 String/1525) (field 13 String/1525)\n  (field 14 String/1525) (field 15 String/1525) (field 16 String/1525)\n  (field 17 String/1525) (field 18 String/1525) (field 19 String/1525)\n  (field 20 String/1525) (field 21 String/1525) (field 22 String/1525)\n  (field 23 String/1525) (field 24 String/1525))":
 unknown block:(makeblock 0 (field 25 String/1525) (field 26 String/1525)
  (field 27 String/1525) (field 28 String/1525) (field 29 String/1525)
  (field 30 String/1525) (field 31 String/1525) (field 35 String/1525)
  (field 36 String/1525) (field 32 String/1525) (field 33 String/1525)
  (field 34 String/1525) (field 37 String/1525) (field 38 String/1525)
  (field 39 String/1525) (field 0 String/1525) (field 1 String/1525)
  (field 2 String/1525) (field 3 String/1525) (field 4 String/1525)
  (field 5 String/1525) (field 6 String/1525) (field 7 String/1525)
  (field 8 String/1525) (field 9 String/1525) (field 10 String/1525)
  (field 11 String/1525) (field 12 String/1525) (field 13 String/1525)
  (field 14 String/1525) (field 15 String/1525) (field 16 String/1525)
  (field 17 String/1525) (field 18 String/1525) (field 19 String/1525)
  (field 20 String/1525) (field 21 String/1525) (field 22 String/1525)
  (field 23 String/1525) (field 24 String/1525)),
 "unknown block:(makeblock 0 (field 1 Digest/1693) (field 3 Digest/1693)\n  (field 12 Digest/1693) (field 5 Digest/1693) (field 6 Digest/1693)\n  (field 7 Digest/1693))":
 unknown block:(makeblock 0 (field 1 Digest/1693) (field 3 Digest/1693)
  (field 12 Digest/1693) (field 5 Digest/1693) (field 6 Digest/1693)
  (field 7 Digest/1693)),
 "StringSet":StringSet,
 "sys_readdir":sys_readdir$1,
 "sys_remove":sys_remove,
 "reset_readdir_cache":reset_readdir_cache$1,
 "reset_filesys_cache":reset_filesys_cache,
 "reset_filesys_cache_for_file":reset_filesys_cache_for_file,
 "sys_file_exists":sys_file_exists,
 "sys_command":sys_command,
 "filename_concat":filename_concat,
 "invalid_arg'":invalid_arg',
 "opt_print":opt_print,
 "the":the,
 "getenv":getenv,
 "with_input_file":with_input_file,
 "with_output_file":with_output_file,
 "with_temp_file":with_temp_file,
 "read_file":read_file,
 "copy_chan":copy_chan,
 "copy_file":copy_file,
 "print_string_list":print_string_list,
 "!*":!*,
 "&":&,
 "|>":|>,
 "@:=":@:=,
 "memo":memo,
 "memo2":memo2,
 "memo3":memo3,
 "set_lexbuf_fname":set_lexbuf_fname,
 "lexbuf_of_string":lexbuf_of_string};
