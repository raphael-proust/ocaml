var Dll=require("Dll");
var Char=require("Char");
var Opcodes=require("Opcodes");
var Cmi_format=require("Cmi_format");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Digest=require("Digest");
var Misc=require("Misc");
var Consistbl=require("Consistbl");
var Printexc=require("Printexc");
var Symtable=require("Symtable");
var Config=require("Config");
var Error="unknown primitive:caml_set_oo_id";
var $js=Printexc["register_printer"];
var
 match=
  $js
   (function(param)
     {var $js$1=param[1]=Error;
      if($js$1)
       {var err=param[2];
        var $js$2=err;
        if(typeof $js$2=="number")
         {if($js$2==0){var msg="Unsafe_file"}}
        else
         {var $js$3=$js$2[0];
          if($js$3==0)
           {var $js$4=Printf["sprintf"];
            var
             msg=
              $js$4
               ([0,
                 [11,"Not_a_bytecode_file ",[3,0,0]],
                 "Not_a_bytecode_file %S"],
                err[1])}
          else
           if($js$3==1)
            {var $js$5=Printf["sprintf"];
             var
              msg=
               $js$5
                ([0,
                  [11,"Inconsistent_import ",[3,0,0]],
                  "Inconsistent_import %S"],
                 err[1])}
           else
            if($js$3==2)
             {var $js$6=Printf["sprintf"];
              var
               msg=
                $js$6
                 ([0,[11,"Unavailable_unit ",[3,0,0]],"Unavailable_unit %S"],
                  err[1])}
            else
             if($js$3==3)
              {var match$1=err[2];
               var s=err[1];
               var $js$7=match$1;
               if($js$7==0)
                {var $js$8=Printf["sprintf"];
                 var
                  msg=
                   $js$8
                    ([0,
                      [11,
                       "Linking_error (",
                       [3,0,[11,", Dynlink.Undefined_global ",[3,0,[12,41,0]]]]],
                      "Linking_error (%S, Dynlink.Undefined_global %S)"],
                     s,
                     match$1[1])}
               else
                if($js$7==1)
                 {var $js$9=Printf["sprintf"];
                  var
                   msg=
                    $js$9
                     ([0,
                       [11,
                        "Linking_error (",
                        [3,
                         0,
                         [11,", Dynlink.Unavailable_primitive ",[3,0,[12,41,0]]]]],
                       "Linking_error (%S, Dynlink.Unavailable_primitive %S)"],
                      s,
                      match$1[1])}
                else
                 if($js$7==2)
                  {var $js$10=Printf["sprintf"];
                   var
                    msg=
                     $js$10
                      ([0,
                        [11,
                         "Linking_error (",
                         [3,0,[11,", Dynlink.Uninitialized_global ",[3,0,[12,41,0]]]]],
                        "Linking_error (%S, Dynlink.Uninitialized_global %S)"],
                       s,
                       match$1[1])}}
             else
              if($js$3==4)
               {var $js$11=Printf["sprintf"];
                var
                 msg=
                  $js$11
                   ([0,
                     [11,"Corrupted_interface ",[3,0,0]],
                     "Corrupted_interface %S"],
                    err[1])}
              else
               if($js$3==5)
                {var $js$12=Printf["sprintf"];
                 var
                  msg=
                   $js$12
                    ([0,[11,"File_not_found ",[3,0,0]],"File_not_found %S"],
                     err[1])}
               else
                if($js$3==6)
                 {var $js$13=Printf["sprintf"];
                  var
                   msg=
                    $js$13
                     ([0,[11,"Cannot_open_dll ",[3,0,0]],"Cannot_open_dll %S"],
                      err[1])}
                else
                 if($js$3==7)
                  {var $js$14=Printf["sprintf"];
                   var
                    msg=
                     $js$14
                      ([0,
                        [11,"Inconsistent_implementation ",[3,0,0]],
                        "Inconsistent_implementation %S"],
                       err[1])}}
        var $js$15=Printf["sprintf"];
        var
         $js$16=
          $js$15
           ([0,
             [11,"Dynlink.Error(Dynlink.",[2,0,[12,41,0]]],
             "Dynlink.Error(Dynlink.%s)"],
            msg);
        return [0,$js$16]}
      else
       {return 0}});
var $js$1=Consistbl["create"];
var $js$2=$js$1(0);
var crc_interfaces=[0,$js$2];
var allow_extension=[0,1];
var
 check_consistency=
  function(file_name,cu)
   {try
     {var $js$3=List["iter"];
      return $js$3
              (function(param)
                {var crco=param[2];
                 var $js$4=crco;
                 if($js$4)
                  {var crc=crco[1];
                   var name=param[1];
                   var $js$5="unknown primitive:caml_string_equal";
                   if($js$5)
                    {var $js$6=Consistbl["set"];
                     return $js$6(crc_interfaces[1],name,crc,file_name)}
                   else
                    {var $js$7=allow_extension[1];
                     if($js$7)
                      {var $js$8=Consistbl["check"];
                       return $js$8(crc_interfaces[1],name,crc,file_name)}
                     else
                      {var $js$9=Consistbl["check_noadd"];
                       return $js$9(crc_interfaces[1],name,crc,file_name)}}}
                 else
                  {return 0}},
               cu[5])}
    catch(exn)
     {var $js$4=exn[1]=Consistbl["Inconsistency"];
      if($js$4)
       {return "unknown primitive:raise"}
      else
       {var $js$5=exn[1]=Consistbl["Not_available"];
        if($js$5)
         {return "unknown primitive:raise"}
        else
         {return "unknown primitive:reraise"}}}};
var
 clear_available_units=
  function(param)
   {var $js$3=Consistbl["clear"];
    $js$3(crc_interfaces[1]);
    return allow_extension[1]=0,0};
var
 allow_only=
  function(names)
   {var $js$3=Consistbl["filter"];
    $js$3
     (function(name){var $js$4=List["mem"];return $js$4(name,names)},
      crc_interfaces[1]);
    return allow_extension[1]=0,0};
var
 prohibit=
  function(names)
   {var $js$3=Consistbl["filter"];
    $js$3
     (function(name)
       {var $js$4=List["mem"];var $js$5=$js$4(name,names);return !$js$5},
      crc_interfaces[1]);
    return allow_extension[1]=0,0};
var
 add_available_units=
  function(units)
   {var $js$3=List["iter"];
    return $js$3
            (function(param)
              {var $js$4=Consistbl["set"];
               return $js$4(crc_interfaces[1],param[1],param[2],"")},
             units)};
var default_crcs=[0,0];
var
 default_available_units=
  function(param)
   {clear_available_units(0);
    var $js$3=List["iter"];
    $js$3
     (function(param$1)
       {var crco=param$1[2];
        var $js$4=crco;
        if($js$4)
         {var $js$5=Consistbl["set"];
          return $js$5(crc_interfaces[1],param$1[1],crco[1],"")}
        else
         {return 0}},
      default_crcs[1]);
    return allow_extension[1]=1,0};
var inited=[0,0];
var
 init=
  function(param)
   {var $js$3=!inited[1];
    if($js$3)
     {var $js$4=Symtable["init_toplevel"];
      var $js$5=$js$4(0);
      default_crcs[1]=$js$5,0;
      default_available_units(0);
      return inited[1]=1,0}
    else
     {return 0}};
var
 clear_available_units$1=
  function(param){init(0);return clear_available_units(0)};
var allow_only$1=function(l){init(0);return allow_only(l)};
var prohibit$1=function(l){init(0);return prohibit(l)};
var add_available_units$1=function(l){init(0);return add_available_units(l)};
var
 default_available_units$1=
  function(param){init(0);return default_available_units(0)};
var
 digest_interface=
  function(unit,loadpath)
   {var $js$3=Pervasives["^"];
    var shortname=$js$3(unit,".cmi");
    try
     {var $js$4=Misc["find_in_path_uncap"];
      var filename=$js$4(loadpath,shortname)}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5)
       {var filename="unknown primitive:raise"}
      else
       {var filename="unknown primitive:reraise"}}
    var $js$6=Pervasives["open_in_bin"];
    var ic=$js$6(filename);
    try
     {var $js$7=Pervasives["really_input_string"];
      var buffer=$js$7(ic,Config["cmi_magic_number"]["length"]);
      var $js$8="unknown primitive:caml_string_notequal";
      if($js$8)
       {var $js$9=Pervasives["close_in"];$js$9(ic);"unknown primitive:raise"}
      else
       {}
      var $js$10=Cmi_format["input_cmi"];
      var cmi=$js$10(ic);
      var $js$11=Pervasives["close_in"];
      $js$11(ic);
      var match$1=cmi[3];
      var $js$12=match$1;
      if($js$12)
       {var match$2=match$1[1][2];
        var $js$13=match$2;
        if($js$13){return match$2[1]}else{var exit=35}}
      else
       {var exit=35}
      switch(exit){case 35:return "unknown primitive:raise"}}
    catch(exn$1)
     {var $js$14=exn$1=End_of_file;
      if($js$14)
       {var exit$1=33}
      else
       {var $js$15=exn$1[1]=Failure;
        if($js$15){var exit$1=33}else{return "unknown primitive:reraise"}}
      switch(exit$1)
       {case 33:
         var $js$16=Pervasives["close_in"];
         $js$16(ic);
         return "unknown primitive:raise"
        }}};
var
 add_interfaces=
  function(units,loadpath)
   {var $js$3=List["map"];
    var
     $js$4=
      $js$3
       (function(unit)
         {var $js$5=digest_interface(unit,loadpath);return [0,unit,$js$5]},
        units);
    return add_available_units$1($js$4)};
var unsafe_allowed=[0,0];
var allow_unsafe_modules=function(b){return unsafe_allowed[1]=b,0};
var
 check_unsafe_module=
  function(cu)
   {var $js$3=!unsafe_allowed[1]&&cu[6]!=0;
    if($js$3){return "unknown primitive:raise"}else{return 0}};
var
 load_compunit=
  function(ic,file_name,file_digest,compunit)
   {check_consistency(file_name,compunit);
    check_unsafe_module(compunit);
    var $js$3=Pervasives["seek_in"];
    $js$3(ic,compunit[2]);
    var code_size=compunit[3]+8;
    var code="unknown primitive:caml_static_alloc";
    var $js$4=Pervasives["unsafe_really_input"];
    $js$4(ic,code,0,compunit[3]);
    var $js$5=Char["chr"];
    var $js$6=$js$5(Opcodes["opRETURN"]);
    code[compunit[3]]=$js$6,0;
    code[compunit[3]+1]=0,0;
    code[compunit[3]+2]=0,0;
    code[compunit[3]+3]=0,0;
    code[compunit[3]+4]=1,0;
    code[compunit[3]+5]=0,0;
    code[compunit[3]+6]=0,0;
    code[compunit[3]+7]=0,0;
    var $js$7=Symtable["current_state"];
    var initial_symtable=$js$7(0);
    try
     {var $js$8=Symtable["patch_object"];
      $js$8(code,compunit[4]);
      var $js$9=Symtable["check_global_initialized"];
      $js$9(compunit[4]);
      var $js$10=Symtable["update_global_table"];
      $js$10(0)}
    catch(exn)
     {var $js$11=exn[1]=Symtable["Error"];
      if($js$11)
       {var error=exn[2];
        var $js$12=error;
        if($js$12==0)
         {var new_error=[0,error[1]]}
        else
         if($js$12==1)
          {var new_error=[1,error[1]]}
         else
          if($js$12==2)
           {var new_error="unknown primitive:raise"}
          else
           if($js$12==3){var new_error=[2,error[1]]}
        "unknown primitive:raise"}
      else
       {"unknown primitive:reraise"}}
    var $js$13=Digest["string"];
    var $js$14=Pervasives["^"];
    var $js$15=$js$14(file_digest,compunit[1]);
    var digest=$js$13($js$15);
    "unknown primitive:caml_register_code_fragment";
    try
     {var $js$16="unknown primitive:caml_reify_bytecode";
      var $js$17=$js$16(0);
      return 0}
    catch(exn$1)
     {var $js$18=Symtable["restore_state"];
      $js$18(initial_symtable);
      return "unknown primitive:reraise"}};
var
 loadfile=
  function(file_name)
   {init(0);
    var $js$3=!"unknown primitive:caml_sys_file_exists";
    if($js$3){"unknown primitive:raise"}else{}
    var $js$4=Pervasives["open_in_bin"];
    var ic=$js$4(file_name);
    var file_digest="unknown primitive:caml_md5_chan";
    var $js$5=Pervasives["seek_in"];
    $js$5(ic,0);
    try
     {try
       {var $js$6=Pervasives["really_input_string"];
        var buffer=$js$6(ic,Config["cmo_magic_number"]["length"])}
      catch(exn)
       {var $js$7=exn=End_of_file;
        if($js$7)
         {var buffer="unknown primitive:raise"}
        else
         {var buffer="unknown primitive:reraise"}}
      var $js$8="unknown primitive:caml_string_equal";
      if($js$8)
       {var $js$9=Pervasives["input_binary_int"];
        var compunit_pos=$js$9(ic);
        var $js$10=Pervasives["seek_in"];
        $js$10(ic,compunit_pos);
        var $js$11=Pervasives["input_value"];
        var cu=$js$11(ic);
        load_compunit(ic,file_name,file_digest,cu)}
      else
       {var $js$12="unknown primitive:caml_string_equal";
        if($js$12)
         {var $js$13=Pervasives["input_binary_int"];
          var toc_pos=$js$13(ic);
          var $js$14=Pervasives["seek_in"];
          $js$14(ic,toc_pos);
          var $js$15=Pervasives["input_value"];
          var lib=$js$15(ic);
          try
           {var $js$16=Dll["open_dlls"];
            var $js$17=List["map"];
            var $js$18=$js$17(Dll["extract_dll_name"],lib[5]);
            $js$16(1,$js$18)}
          catch(exn$1)
           {var $js$19=exn$1[1]=Failure;
            if($js$19)
             {"unknown primitive:raise"}
            else
             {"unknown primitive:reraise"}}
          var $js$20=List["iter"];
          var $js$21=load_compunit(ic,file_name,file_digest);
          $js$20($js$21,lib[1])}
        else
         {"unknown primitive:raise"}}
      var $js$22=Pervasives["close_in"];
      return $js$22(ic)}
    catch(exc)
     {var $js$23=Pervasives["close_in"];
      $js$23(ic);
      return "unknown primitive:reraise"}};
var
 loadfile_private=
  function(file_name)
   {init(0);
    var $js$3=Symtable["current_state"];
    var initial_symtable=$js$3(0);
    var initial_crc=crc_interfaces[1];
    try
     {loadfile(file_name);
      var $js$4=Symtable["hide_additions"];
      $js$4(initial_symtable);
      return crc_interfaces[1]=initial_crc,0}
    catch(exn)
     {var $js$5=Symtable["hide_additions"];
      $js$5(initial_symtable);
      crc_interfaces[1]=initial_crc,0;
      return "unknown primitive:reraise"}};
var
 error_message=
  function(param)
   {var $js$3=param;
    if(typeof $js$3=="number")
     {if($js$3==0){return "this object file uses unsafe features"}}
    else
     {var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Pervasives["^"];
        return $js$5(param[1]," is not a bytecode object file")}
      else
       if($js$4==1)
        {var $js$6=Pervasives["^"];
         return $js$6("interface mismatch on ",param[1])}
       else
        if($js$4==2)
         {var $js$7=Pervasives["^"];
          return $js$7("no implementation available for ",param[1])}
        else
         if($js$4==3)
          {var match$1=param[2];
           var name=param[1];
           var $js$8=match$1;
           if($js$8==0)
            {var $js$9=Pervasives["^"];
             var $js$10=Pervasives["^"];
             var $js$11=Pervasives["^"];
             var $js$12=Pervasives["^"];
             var $js$13=Pervasives["^"];
             var $js$14=$js$13(match$1[1],"'");
             var $js$15=$js$12("Reference to undefined global `",$js$14);
             var $js$16=$js$11(".\n",$js$15);
             var $js$17=$js$10(name,$js$16);
             return $js$9("error while linking ",$js$17)}
           else
            if($js$8==1)
             {var $js$18=Pervasives["^"];
              var $js$19=Pervasives["^"];
              var $js$20=Pervasives["^"];
              var $js$21=Pervasives["^"];
              var $js$22=Pervasives["^"];
              var $js$23=$js$22(match$1[1],"' is not available");
              var $js$24=$js$21("The external function `",$js$23);
              var $js$25=$js$20(".\n",$js$24);
              var $js$26=$js$19(name,$js$25);
              return $js$18("error while linking ",$js$26)}
            else
             if($js$8==2)
              {var $js$27=Pervasives["^"];
               var $js$28=Pervasives["^"];
               var $js$29=Pervasives["^"];
               var $js$30=Pervasives["^"];
               var $js$31=Pervasives["^"];
               var $js$32=$js$31(match$1[1],"' is not yet initialized");
               var $js$33=$js$30("The module `",$js$32);
               var $js$34=$js$29(".\n",$js$33);
               var $js$35=$js$28(name,$js$34);
               return $js$27("error while linking ",$js$35)}}
         else
          if($js$4==4)
           {var $js$36=Pervasives["^"];
            return $js$36("corrupted interface file ",param[1])}
          else
           if($js$4==5)
            {var $js$37=Pervasives["^"];
             var $js$38=Pervasives["^"];
             var $js$39=$js$38(param[1]," in search path");
             return $js$37("cannot find file ",$js$39)}
           else
            if($js$4==6)
             {var $js$40=Pervasives["^"];
              return $js$40("error loading shared library: ",param[1])}
            else
             if($js$4==7)
              {var $js$41=Pervasives["^"];
               return $js$41("implementation mismatch on ",param[1])}}};
var is_native=0;
var adapt_filename=function(f){return f};
module["exports"]=
{"is_native":is_native,
 "loadfile":loadfile,
 "loadfile_private":loadfile_private,
 "adapt_filename":adapt_filename,
 "allow_only":allow_only$1,
 "prohibit":prohibit$1,
 "default_available_units":default_available_units$1,
 "allow_unsafe_modules":allow_unsafe_modules,
 "add_interfaces":add_interfaces,
 "add_available_units":add_available_units$1,
 "clear_available_units":clear_available_units$1,
 "init":init,
 "Error":Error,
 "error_message":error_message,
 "digest_interface":digest_interface};
