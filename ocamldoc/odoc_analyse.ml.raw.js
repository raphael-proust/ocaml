var String=require("String");
var Parse=require("Parse");
var Odoc_global=require("Odoc_global");
var Odoc_dep=require("Odoc_dep");
var Warnings=require("Warnings");
var Odoc_types=require("Odoc_types");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_cross=require("Odoc_cross");
var Odoc_comments=require("Odoc_comments");
var Env=require("Env");
var Odoc_sig=require("Odoc_sig");
var Clflags=require("Clflags");
var Format=require("Format");
var Syntaxerr=require("Syntaxerr");
var Typemod=require("Typemod");
var Misc=require("Misc");
var Odoc_merge=require("Odoc_merge");
var Filename=require("Filename");
var Odoc_module=require("Odoc_module");
var Odoc_misc=require("Odoc_misc");
var Odoc_text=require("Odoc_text");
var Printexc=require("Printexc");
var Location=require("Location");
var Pparse=require("Pparse");
var Odoc_ast=require("Odoc_ast");
var Config=require("Config");
var Odoc_messages=require("Odoc_messages");
var
 init_path=
  function(param)
   {var $js=List["rev"];
    var $js$1=$js([0,Config["standard_library"],Clflags["include_dirs"][1]]);
    var $js$2=[0,"",$js$1];
    Config["load_path"][1]=$js$2,0;
    var $js$3=Env["reset_cache"];
    return $js$3(0)};
var
 initial_env=
  function(param)
   {var $js=Clflags["unsafe_string"][1];
    if($js)
     {var initial=Env["initial_unsafe_string"]}
    else
     {var initial=Env["initial_safe_string"]}
    try
     {var $js$1=Clflags["nopervasives"][1];
      if($js$1)
       {return initial}
      else
       {var $js$2=Env["open_pers_signature"];
        return $js$2("Pervasives",initial)}}
    catch(exn)
     {var $js$3=exn=Not_found;
      if($js$3)
       {var $js$4=Misc["fatal_error"];
        return $js$4("cannot open pervasives.cmi")}
      else
       {return "unknown primitive:reraise"}}};
var
 preprocess=
  function(sourcefile)
   {try
     {var $js=Pparse["preprocess"];return $js(sourcefile)}
    catch(exn)
     {var $js$1=exn[1]=Pparse["Error"];
      if($js$1)
       {var $js$2=Format["eprintf"];
        $js$2
         ([0,
           [11,"Preprocessing error",[17,4,[15,[17,4,0]]]],
           "Preprocessing error@.%a@."],
          Pparse["report_error"],
          exn[2]);
        var $js$3=Pervasives["exit"];
        return $js$3(2)}
      else
       {return "unknown primitive:reraise"}}};
var ++=function(x,f){return f(x)};
var tool_name="ocamldoc";
var
 process_implementation_file=
  function(ppf,sourcefile)
   {init_path(0);
    var $js=Filename["chop_extension"];
    var prefixname=$js(sourcefile);
    var $js$1=String["capitalize"];
    var $js$2=Filename["basename"];
    var $js$3=$js$2(prefixname);
    var modulename=$js$1($js$3);
    var $js$4=Env["set_unit_name"];
    $js$4(modulename);
    var inputfile=preprocess(sourcefile);
    var env=initial_env(0);
    try
     {var $js$5=Pparse["file"];
      var
       parsetree=
        $js$5
         (Format["err_formatter"],
          tool_name,
          inputfile,
          Parse["implementation"],
          Config["ast_impl_magic_number"]);
      var $js$6=Typemod["type_implementation"];
      var typedtree=$js$6(sourcefile,prefixname,modulename,env,parsetree);
      return [0,[0,[0,parsetree,typedtree]],inputfile]}
    catch(e)
     {var $js$7=e[1]=Syntaxerr["Error"];
      if($js$7)
       {var $js$8=Format["fprintf"];
        $js$8
         (Format["err_formatter"],
          [0,[18,[1,[0,0,""]],[15,[17,0,[17,4,0]]]],"@[%a@]@."],
          Syntaxerr["report_error"],
          e[2]);
        return [0,0,inputfile]}
      else
       {var $js$9=e[1]=Failure;
        if($js$9)
         {var $js$10=Pervasives["prerr_endline"];
          $js$10(e[2]);
          Odoc_global["errors"][0]++;
          return [0,0,inputfile]}
        else
         {return "unknown primitive:raise"}}}};
var
 process_interface_file=
  function(ppf,sourcefile)
   {init_path(0);
    var $js=Filename["chop_extension"];
    var prefixname=$js(sourcefile);
    var $js$1=String["capitalize"];
    var $js$2=Filename["basename"];
    var $js$3=$js$2(prefixname);
    var modulename=$js$1($js$3);
    var $js$4=Env["set_unit_name"];
    $js$4(modulename);
    var inputfile=preprocess(sourcefile);
    var $js$5=Pparse["file"];
    var
     ast=
      $js$5
       (Format["err_formatter"],
        tool_name,
        inputfile,
        Parse["interface"],
        Config["ast_intf_magic_number"]);
    var $js$6=Typemod["type_interface"];
    var $js$7=initial_env(0);
    var sg=$js$6($js$7,ast);
    var $js$8=Warnings["check_fatal"];
    $js$8(0);
    return [0,ast,sg,inputfile]};
var $js=Odoc_ast["Analyser"];
var let=Odoc_comments["Basic_info_retriever"];
var $js$1=[0,let[2],let[1],let[3],let[4],let[5]];
var Ast_analyser=$js($js$1);
var $js$2=Odoc_sig["Analyser"];
var let$1=Odoc_comments["Basic_info_retriever"];
var $js$3=[0,let$1[2],let$1[1],let$1[3],let$1[4],let$1[5]];
var Sig_analyser=$js$2($js$3);
var
 process_error=
  function(exn)
   {var $js$4=Location["error_of_exn"];
    var match=$js$4(exn);
    var $js$5=match;
    if($js$5)
     {var $js$6=Format["fprintf"];
      return $js$6
              (Format["err_formatter"],
               [0,[18,[1,[0,0,""]],[15,[17,0,[17,4,0]]]],"@[%a@]@."],
               Location["report_error"],
               match[1])}
    else
     {var $js$7=Format["fprintf"];
      var $js$8=Printexc["to_string"];
      var $js$9=$js$8(exn);
      return $js$7
              (Format["err_formatter"],
               [0,
                [11,
                 "Compilation error(",
                 [2,
                  0,
                  [11,
                   "). Use the OCaml compiler to get more details.",
                   [17,4,0]]]],
                "Compilation error(%s). Use the OCaml compiler to get more details.@."],
               $js$9)}};
var
 process_file=
  function(ppf,sourcefile)
   {var $js$4=Odoc_global["verbose"][1];
    if($js$4)
     {var $js$5=sourcefile;
      if($js$5==0)
       {var exit=50}
      else
       if($js$5==1){var exit=50}else if($js$5==2){var f=sourcefile[1]}
      switch(exit){case 50:var f=sourcefile[1]}
      var $js$6=Format["print_string"];
      var $js$7=Odoc_messages["analysing"];
      var $js$8=$js$7(f);
      $js$6($js$8);
      var $js$9=Format["print_newline"];
      $js$9(0)}
    else
     {}
    var $js$10=sourcefile;
    if($js$10==0)
     {var file=sourcefile[1];
      Location["input_name"][1]=file,0;
      try
       {var match=process_implementation_file(ppf,file);
        var parsetree_typedtree_opt=match[1];
        var $js$11=parsetree_typedtree_opt;
        if($js$11)
         {var match$1=parsetree_typedtree_opt[1];
          var parsetree=match$1[1];
          var $js$12=Ast_analyser[1];
          var
           file_module=
            $js$12(file,Location["input_name"][1],parsetree,match$1[2]);
          var $js$13=Odoc_dep["impl_dependencies"];
          var $js$14=$js$13(parsetree);
          file_module[8]=$js$14,0;
          var $js$15=Odoc_global["verbose"][1];
          if($js$15)
           {var $js$16=Format["print_string"];
            $js$16(Odoc_messages["ok"]);
            var $js$17=Format["print_newline"];
            $js$17(0)}
          else
           {}
          var $js$18=Pparse["remove_preprocessed"];
          $js$18(match[2]);
          return [0,file_module]}
        else
         {return 0}}
      catch(e)
       {var $js$19=e[1]=Sys_error;
        if($js$19)
         {var s=e[2];var exit$1=28}
        else
         {var $js$20=e[1]=Failure;
          if($js$20)
           {var s=e[2];var exit$1=28}
          else
           {process_error(e);Odoc_global["errors"][0]++;return 0}}
        switch(exit$1)
         {case 28:
           var $js$21=Pervasives["prerr_endline"];
           $js$21(s);
           Odoc_global["errors"][0]++;
           return 0
          }}}
    else
     if($js$10==1)
      {var file$1=sourcefile[1];
       Location["input_name"][1]=file$1,0;
       try
        {var match$2=process_interface_file(ppf,file$1);
         var ast=match$2[1];
         var $js$22=Sig_analyser[13];
         var
          file_module$1=
           $js$22(file$1,Location["input_name"][1],ast,match$2[2][2]);
         var $js$23=Odoc_dep["intf_dependencies"];
         var $js$24=$js$23(ast);
         file_module$1[8]=$js$24,0;
         var $js$25=Odoc_global["verbose"][1];
         if($js$25)
          {var $js$26=Format["print_string"];
           $js$26(Odoc_messages["ok"]);
           var $js$27=Format["print_newline"];
           $js$27(0)}
         else
          {}
         var $js$28=Pparse["remove_preprocessed"];
         $js$28(match$2[3]);
         return [0,file_module$1]}
       catch(e$1)
        {var $js$29=e$1[1]=Sys_error;
         if($js$29)
          {var s$1=e$1[2];var exit$2=34}
         else
          {var $js$30=e$1[1]=Failure;
           if($js$30)
            {var s$1=e$1[2];var exit$2=34}
           else
            {process_error(e$1);Odoc_global["errors"][0]++;return 0}}
         switch(exit$2)
          {case 34:
            var $js$31=Pervasives["prerr_endline"];
            $js$31(s$1);
            Odoc_global["errors"][0]++;
            return 0
           }}}
     else
      if($js$10==2)
       {var file$2=sourcefile[1];
        Location["input_name"][1]=file$2,0;
        try
         {try
           {var $js$32=Filename["chop_extension"];var s$2=$js$32(file$2)}
          catch(exn){var s$2=file$2}
          var $js$33=String["capitalize"];
          var $js$34=Filename["basename"];
          var $js$35=$js$34(s$2);
          var mod_name=$js$33($js$35);
          try
           {var $js$36=Odoc_text["Texter"][1];
            var $js$37=Odoc_misc["input_file_as_string"];
            var $js$38=$js$37(file$2);
            var txt=$js$36($js$38)}
          catch(exn$1)
           {var $js$39=exn$1[1]=Odoc_text["Text_syntax"];
            if($js$39)
             {var $js$40=Odoc_messages["text_parse_error"];
              var $js$41=$js$40(exn$1[2],exn$1[3],exn$1[4]);
              var $js$42=[0,Failure,$js$41];
              throw $js$42}
            else
             {var txt="unknown primitive:reraise"}}
          var $js$43=Location["in_file"];
          var $js$44=$js$43(file$2);
          var $js$45=[0,$js$44];
          var $js$46=[0,0,$js$45];
          var
           m=
            [0,mod_name,[1,0],0,1,file$2,[0,[0,[9,txt],0]],$js$46,0,0,0,1];
          return [0,m]}
        catch(e$2)
         {var $js$47=e$2[1]=Sys_error;
          if($js$47)
           {var s$3=e$2[2];var exit$3=40}
          else
           {var $js$48=e$2[1]=Failure;
            if($js$48)
             {var s$3=e$2[2];var exit$3=40}
            else
             {process_error(e$2);Odoc_global["errors"][0]++;return 0}}
          switch(exit$3)
           {case 40:
             var $js$49=Pervasives["prerr_endline"];
             $js$49(s$3);
             Odoc_global["errors"][0]++;
             return 0
            }}}};
var
 remove_class_elements_between_stop=
  function(keep,eles)
   {var $js$4=eles;
    if($js$4)
     {var q=eles[2];
      var ele=eles[1];
      var $js$5=ele;
      if($js$5==0)
       {var exit=25}
      else
       if($js$5==1)
        {var exit=25}
       else
        if($js$5==2)
         {var match=ele[1];
          var $js$6=match;
          if($js$6)
           {var match$1=match[1];
            var $js$7=match$1;
            if(typeof $js$7=="number")
             {"unknown block:match/1271"}
            else
             {var $js$8=$js$7[0];
              if($js$8==0)
               {var $js$9=match$1[1];
                if($js$9=="/*")
                 {var $js$10=match[2];
                  if($js$10)
                   {var exit=25}
                  else
                   {return remove_class_elements_between_stop(!keep,q)}}
                else
                 {var exit=25}}
              else
               {var exit=25}}}
          else
           {var exit=25}}
      switch(exit)
       {case 25:
         var $js$11=keep;
         if($js$11)
          {var $js$12=remove_class_elements_between_stop(keep,q);
           return [0,ele,$js$12]}
         else
          {return remove_class_elements_between_stop(keep,q)}
        }}
    else
     {return 0}};
var
 remove_class_elements_between_stop_in_class_kind=
  function(k)
   {var $js$4=k;
    if($js$4==0)
     {var $js$5=remove_class_elements_between_stop(1,k[2]);
      return [0,k[1],$js$5]}
    else
     if($js$4==1)
      {var exit=24}
     else
      if($js$4==2)
       {var exit=24}
      else
       if($js$4==3)
        {var $js$6=remove_class_elements_between_stop_in_class_kind(k[1]);
         var
          $js$7=
           remove_class_elements_between_stop_in_class_type_kind(k[2]);
         return [3,$js$6,$js$7]}
    switch(exit){case 24:return k}};
var
 remove_class_elements_between_stop_in_class_type_kind=
  function(tk)
   {var $js$4=tk;
    if($js$4==0)
     {var $js$5=remove_class_elements_between_stop(1,tk[2]);
      return [0,tk[1],$js$5]}
    else
     if($js$4==1){return tk}};
var
 remove_module_elements_between_stop=
  function(keep,eles)
   {var $js$4=eles;
    if($js$4)
     {var q=eles[2];
      var ele=eles[1];
      var $js$5=ele;
      if($js$5==0)
       {var m=ele[1];
        var $js$6=keep;
        if($js$6)
         {var $js$7=remove_module_elements_between_stop_in_module_kind(m[6]);
          m[6]=$js$7,0;
          var $js$8=remove_module_elements_between_stop(keep,q);
          return [0,[0,m],$js$8]}
        else
         {return remove_module_elements_between_stop(keep,q)}}
      else
       if($js$5==1)
        {var mt=ele[1];
         var $js$9=keep;
         if($js$9)
          {var $js$10=Odoc_misc["apply_opt"];
           var
            $js$11=
             $js$10
              (remove_module_elements_between_stop_in_module_type_kind,mt[6]);
           mt[6]=$js$11,0;
           var $js$12=remove_module_elements_between_stop(keep,q);
           return [0,[1,mt],$js$12]}
         else
          {return remove_module_elements_between_stop(keep,q)}}
       else
        if($js$5==2)
         {var $js$13=keep;
          if($js$13)
           {var $js$14=remove_module_elements_between_stop(keep,q);
            return [0,ele,$js$14]}
          else
           {return remove_module_elements_between_stop(keep,q)}}
        else
         if($js$5==3)
          {var c=ele[1];
           var $js$15=keep;
           if($js$15)
            {var
              $js$16=
               remove_class_elements_between_stop_in_class_kind(c[6]);
             c[6]=$js$16,0;
             var $js$17=remove_module_elements_between_stop(keep,q);
             return [0,[3,c],$js$17]}
           else
            {return remove_module_elements_between_stop(keep,q)}}
         else
          if($js$5==4)
           {var ct=ele[1];
            var $js$18=keep;
            if($js$18)
             {var
               $js$19=
                remove_class_elements_between_stop_in_class_type_kind(ct[6]);
              ct[6]=$js$19,0;
              var $js$20=remove_module_elements_between_stop(keep,q);
              return [0,[4,ct],$js$20]}
            else
             {return remove_module_elements_between_stop(keep,q)}}
          else
           if($js$5==9)
            {var match=ele[1];
             var $js$21=match;
             if($js$21)
              {var match$1=match[1];
               var $js$22=match$1;
               if(typeof $js$22=="number")
                {"unknown block:match/1245"}
               else
                {var $js$23=$js$22[0];
                 if($js$23==0)
                  {var $js$24=match$1[1];
                   if($js$24=="/*")
                    {var $js$25=match[2];
                     if($js$25)
                      {var exit=20}
                     else
                      {return remove_module_elements_between_stop(!keep,q)}}
                   else
                    {var exit=20}}
                 else
                  {var exit=20}}}
             else
              {var exit=20}
             switch(exit)
              {case 20:
                var $js$26=keep;
                if($js$26)
                 {var $js$27=remove_module_elements_between_stop(keep,q);
                  return [0,ele,$js$27]}
                else
                 {return remove_module_elements_between_stop(keep,q)}
               }}
           else
            {var $js$28=keep;
             if($js$28)
              {var $js$29=remove_module_elements_between_stop(keep,q);
               return [0,ele,$js$29]}
             else
              {return remove_module_elements_between_stop(keep,q)}}}
    else
     {return 0}};
var
 remove_module_elements_between_stop_in_module_kind=
  function(k)
   {var $js$4=k;
    if($js$4==0)
     {var $js$5=remove_module_elements_between_stop(1,k[1]);return [0,$js$5]}
    else
     if($js$4==2)
      {var $js$6=remove_module_elements_between_stop_in_module_kind(k[2]);
       return [2,k[1],$js$6]}
     else
      if($js$4==3)
       {var $js$7=remove_module_elements_between_stop_in_module_kind(k[1]);
        var $js$8=remove_module_elements_between_stop_in_module_kind(k[2]);
        return [3,$js$7,$js$8]}
      else
       if($js$4==4)
        {var
          $js$9=
           remove_module_elements_between_stop_in_module_type_kind(k[1]);
         return [4,$js$9,k[2]]}
       else
        if($js$4==5)
         {var $js$10=remove_module_elements_between_stop_in_module_kind(k[1]);
          var
           $js$11=
            remove_module_elements_between_stop_in_module_type_kind(k[2]);
          return [5,$js$10,$js$11]}
        else
         {return k}};
var
 remove_module_elements_between_stop_in_module_type_kind=
  function(tk)
   {var $js$4=tk;
    if($js$4==0)
     {var $js$5=remove_module_elements_between_stop(1,tk[1]);return [0,$js$5]}
    else
     if($js$4==1)
      {var
        $js$6=
         remove_module_elements_between_stop_in_module_type_kind(tk[2]);
       return [1,tk[1],$js$6]}
     else
      if($js$4==2)
       {var exit=23}
      else
       if($js$4==3)
        {var
          $js$7=
           remove_module_elements_between_stop_in_module_type_kind(tk[1]);
         return [3,$js$7,tk[2]]}
       else
        if($js$4==4){var exit=23}
    switch(exit){case 23:return tk}};
var
 remove_elements_between_stop=
  function(module_list)
   {var $js$4=List["map"];
    return $js$4
            (function(m)
              {var
                $js$5=
                 remove_module_elements_between_stop_in_module_kind(m[6]);
               m[6]=$js$5,0;
               return m},
             module_list)};
var
 analyse_files=
  function(*opt*,files)
   {var $js$4=*opt*;
    if($js$4){var init=*opt*[1]}else{var init=0}
    var $js$5=Pervasives["@"];
    var $js$6=List["fold_left"];
    var
     $js$7=
      $js$6
       (function(acc,file)
         {try
           {var match=process_file(Format["err_formatter"],file);
            var $js$8=match;
            if($js$8)
             {var $js$9=Pervasives["@"];return $js$9(acc,[0,match[1],0])}
            else
             {return acc}}
          catch(exn)
           {var $js$10=exn[1]=Failure;
            if($js$10)
             {var $js$11=Pervasives["prerr_endline"];
              $js$11(exn[2]);
              Odoc_global["errors"][0]++;
              return acc}
            else
             {return "unknown primitive:reraise"}}},
        0,
        files);
    var modules_pre=$js$5(init,$js$7);
    var $js$8=Odoc_global["no_stop"][1];
    if($js$8)
     {var modules=modules_pre}
    else
     {var modules=remove_elements_between_stop(modules_pre)}
    var $js$9=Odoc_global["verbose"][1];
    if($js$9)
     {var $js$10=Format["print_string"];
      $js$10(Odoc_messages["merging"]);
      var $js$11=Format["print_newline"];
      $js$11(0)}
    else
     {}
    var $js$12=Odoc_merge["merge"];
    var merged_modules=$js$12(Odoc_global["merge_options"][1],modules);
    var $js$13=Odoc_global["verbose"][1];
    if($js$13)
     {var $js$14=Format["print_string"];
      $js$14(Odoc_messages["ok"]);
      var $js$15=Format["print_newline"];
      $js$15(0)}
    else
     {}
    var $js$16=List["fold_left"];
    var
     modules_list=
      $js$16
       (function(acc,m)
         {var $js$17=Pervasives["@"];
          var $js$18=Odoc_module["module_all_submodules"];
          var $js$19=$js$18([0,0],m);
          return $js$17(acc,$js$19)},
        merged_modules,
        merged_modules);
    var $js$17=Odoc_global["verbose"][1];
    if($js$17)
     {var $js$18=Format["print_string"];
      $js$18(Odoc_messages["cross_referencing"]);
      var $js$19=Format["print_newline"];
      $js$19(0)}
    else
     {}
    var $js$20=Odoc_cross["associate"];
    var match=$js$20(modules_list);
    var $js$21=Odoc_global["verbose"][1];
    if($js$21)
     {var $js$22=Format["print_string"];
      $js$22(Odoc_messages["ok"]);
      var $js$23=Format["print_newline"];
      $js$23(0)}
    else
     {}
    var $js$24=Odoc_global["sort_modules"][1];
    if($js$24)
     {var $js$25=List["sort"];
      return $js$25
              (function(m1,m2){return "unknown primitive:caml_string_compare"},
               merged_modules)}
    else
     {return merged_modules}};
var
 dump_modules=
  function(file,modules)
   {try
     {var $js$4=Pervasives["open_out_bin"];
      var chanout=$js$4(file);
      var $js$5=Odoc_types["make_dump"];
      var dump=$js$5(modules);
      var $js$6=Pervasives["output_value"];
      $js$6(chanout,dump);
      var $js$7=Pervasives["close_out"];
      return $js$7(chanout)}
    catch(exn)
     {var $js$8=exn[1]=Sys_error;
      if($js$8)
       {return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 load_modules=
  function(file)
   {try
     {var $js$4=Pervasives["open_in_bin"];
      var chanin=$js$4(file);
      var $js$5=Pervasives["input_value"];
      var dump=$js$5(chanin);
      var $js$6=Pervasives["close_in"];
      $js$6(chanin);
      var $js$7=Odoc_types["open_dump"];
      return $js$7(dump)}
    catch(exn)
     {var $js$8=exn[1]=Sys_error;
      if($js$8)
       {return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
module["exports"]=
{"analyse_files":analyse_files,
 "dump_modules":dump_modules,
 "load_modules":load_modules};
