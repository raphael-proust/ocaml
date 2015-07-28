var Char=require("Char");
var Dynlinkaux=require("Dynlinkaux");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Digest=require("Digest");
var Printexc=require("Printexc");
var Error="unknown primitive:caml_set_oo_id";
var $js=Printexc["register_printer"];
var
 match=
  $js
   (function(param)
     {var tag=param[1];
      var $js$1=tag=Error;
      if($js$1)
       {var err=param[2];
        var $js$2=err;
        if(typeof $js$2=="number")
         {if($js$2==0){var msg="Unsafe_file"}}
        else
         {var $js$3=$js$2[0];
          if($js$3==0)
           {var s=err[1];
            var $js$4=Printf["sprintf"];
            var
             msg=
              $js$4
               ([0,
                 [11,"Not_a_bytecode_file ",[3,0,0]],
                 "Not_a_bytecode_file %S"],
                s)}
          else
           if($js$3==1)
            {var s$1=err[1];
             var $js$5=Printf["sprintf"];
             var
              msg=
               $js$5
                ([0,
                  [11,"Inconsistent_import ",[3,0,0]],
                  "Inconsistent_import %S"],
                 s$1)}
           else
            if($js$3==2)
             {var s$2=err[1];
              var $js$6=Printf["sprintf"];
              var
               msg=
                $js$6
                 ([0,[11,"Unavailable_unit ",[3,0,0]],"Unavailable_unit %S"],
                  s$2)}
            else
             if($js$3==3)
              {var match$1=err[2];
               var s$3=err[1];
               var $js$7=match$1;
               if($js$7==0)
                {var s'=match$1[1];
                 var $js$8=Printf["sprintf"];
                 var
                  msg=
                   $js$8
                    ([0,
                      [11,
                       "Linking_error (",
                       [3,0,[11,", Dynlink.Undefined_global ",[3,0,[12,41,0]]]]],
                      "Linking_error (%S, Dynlink.Undefined_global %S)"],
                     s$3,
                     s')}
               else
                if($js$7==1)
                 {var s$4=s$3;
                  var s'$1=match$1[1];
                  var $js$9=Printf["sprintf"];
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
                      s$4,
                      s'$1)}
                else
                 if($js$7==2)
                  {var s$5=s$3;
                   var s'$2=match$1[1];
                   var $js$10=Printf["sprintf"];
                   var
                    msg=
                     $js$10
                      ([0,
                        [11,
                         "Linking_error (",
                         [3,0,[11,", Dynlink.Uninitialized_global ",[3,0,[12,41,0]]]]],
                        "Linking_error (%S, Dynlink.Uninitialized_global %S)"],
                       s$5,
                       s'$2)}}
             else
              if($js$3==4)
               {var s$6=err[1];
                var $js$11=Printf["sprintf"];
                var
                 msg=
                  $js$11
                   ([0,
                     [11,"Corrupted_interface ",[3,0,0]],
                     "Corrupted_interface %S"],
                    s$6)}
              else
               if($js$3==5)
                {var s$7=err[1];
                 var $js$12=Printf["sprintf"];
                 var
                  msg=
                   $js$12
                    ([0,[11,"File_not_found ",[3,0,0]],"File_not_found %S"],s$7)}
               else
                if($js$3==6)
                 {var s$8=err[1];
                  var $js$13=Printf["sprintf"];
                  var
                   msg=
                    $js$13
                     ([0,[11,"Cannot_open_dll ",[3,0,0]],"Cannot_open_dll %S"],
                      s$8)}
                else
                 if($js$3==7)
                  {var s$9=err[1];
                   var $js$14=Printf["sprintf"];
                   var
                    msg=
                     $js$14
                      ([0,
                        [11,"Inconsistent_implementation ",[3,0,0]],
                        "Inconsistent_implementation %S"],
                       s$9)}}
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
var $js$1=Dynlinkaux["Consistbl"][1];
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
                 var name=param[1];
                 var $js$4=crco;
                 if($js$4)
                  {var crc=crco[1];
                   var $js$5="unknown primitive:caml_string_equal";
                   if($js$5)
                    {var $js$6=Dynlinkaux["Consistbl"][5];
                     return $js$6(crc_interfaces[1],name,crc,file_name)}
                   else
                    {var $js$7=allow_extension[1];
                     if($js$7)
                      {var $js$8=Dynlinkaux["Consistbl"][3];
                       return $js$8(crc_interfaces[1],name,crc,file_name)}
                     else
                      {var $js$9=Dynlinkaux["Consistbl"][4];
                       return $js$9(crc_interfaces[1],name,crc,file_name)}}}
                 else
                  {return 0}},
               cu[5])}
    catch(exn)
     {var tag=exn[1];
      var $js$4=tag=Dynlinkaux["Consistbl"][9];
      if($js$4)
       {var name=exn[2];var $js$5=[0,Error,[1,name]];throw $js$5}
      else
       {var tag$1=exn[1];
        var $js$6=tag$1=Dynlinkaux["Consistbl"][10];
        if($js$6)
         {var name$1=exn[2];var $js$7=[0,Error,[2,name$1]];throw $js$7}
        else
         {return "unknown primitive:reraise"}}}};
var
 clear_available_units=
  function(param)
   {var $js$3=Dynlinkaux["Consistbl"][2];
    $js$3(crc_interfaces[1]);
    return allow_extension[1]=0,0};
var
 allow_only=
  function(names)
   {var $js$3=Dynlinkaux["Consistbl"][8];
    $js$3
     (function(name){var $js$4=List["mem"];return $js$4(name,names)},
      crc_interfaces[1]);
    return allow_extension[1]=0,0};
var
 prohibit=
  function(names)
   {var $js$3=Dynlinkaux["Consistbl"][8];
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
              {var crc=param[2];
               var unit=param[1];
               var $js$4=Dynlinkaux["Consistbl"][5];
               return $js$4(crc_interfaces[1],unit,crc,"")},
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
        var unit=param$1[1];
        var $js$4=crco;
        if($js$4)
         {var crc=crco[1];
          var $js$5=Dynlinkaux["Consistbl"][5];
          return $js$5(crc_interfaces[1],unit,crc,"")}
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
     {var $js$4=Dynlinkaux["Symtable"][11];
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
     {var $js$4=Dynlinkaux["Misc"][15];var filename=$js$4(loadpath,shortname)}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5)
       {var $js$6=[0,Error,[5,shortname]];throw $js$6}
      else
       {var filename="unknown primitive:reraise"}}
    var $js$7=Pervasives["open_in_bin"];
    var ic=$js$7(filename);
    try
     {var $js$8=Pervasives["really_input_string"];
      var buffer=$js$8(ic,Dynlinkaux["Config"][19]["length"]);
      var $js$9="unknown primitive:caml_string_notequal";
      if($js$9)
       {var $js$10=Pervasives["close_in"];
        $js$10(ic);
        var $js$11=[0,Error,[4,filename]];
        throw $js$11}
      else
       {}
      var $js$12=Dynlinkaux["Cmi_format"][2];
      var cmi=$js$12(ic);
      var $js$13=Pervasives["close_in"];
      $js$13(ic);
      var match$1=cmi[3];
      var $js$14=match$1;
      if($js$14)
       {var match$2=match$1[1];
        var match$3=match$2[2];
        var $js$15=match$3;
        if($js$15){var crc=match$3[1];var crc$1=crc}else{var exit=35}}
      else
       {var exit=35}
      switch(exit){case 35:var $js$16=[0,Error,[4,filename]];throw $js$16}
      return crc$1}
    catch(exn$1)
     {var $js$17=exn$1=End_of_file;
      if($js$17)
       {var exit$1=33}
      else
       {var tag=exn$1[1];
        var $js$18=tag=Failure;
        if($js$18){var exit$1=33}else{return "unknown primitive:reraise"}}
      switch(exit$1)
       {case 33:
         var $js$19=Pervasives["close_in"];
         $js$19(ic);
         var $js$20=[0,Error,[4,filename]];
         throw $js$20
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
    if($js$3){var $js$4=[0,Error,0];throw $js$4}else{return 0}};
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
    var $js$6=$js$5(Dynlinkaux["Opcodes"][41]);
    code[compunit[3]]=$js$6,0;
    code[compunit[3]+1]=0,0;
    code[compunit[3]+2]=0,0;
    code[compunit[3]+3]=0,0;
    code[compunit[3]+4]=1,0;
    code[compunit[3]+5]=0,0;
    code[compunit[3]+6]=0,0;
    code[compunit[3]+7]=0,0;
    var $js$7=Dynlinkaux["Symtable"][18];
    var initial_symtable=$js$7(0);
    try
     {var $js$8=Dynlinkaux["Symtable"][2];
      $js$8(code,compunit[4]);
      var $js$9=Dynlinkaux["Symtable"][17];
      $js$9(compunit[4]);
      var $js$10=Dynlinkaux["Symtable"][12];
      $js$10(0)}
    catch(exn)
     {var tag=exn[1];
      var $js$11=tag=Dynlinkaux["Symtable"][22];
      if($js$11)
       {var error=exn[2];
        var $js$12=error;
        if($js$12==0)
         {var s=error[1];var new_error=[0,s]}
        else
         if($js$12==1)
          {var s$1=error[1];var new_error=[1,s$1]}
         else
          if($js$12==2)
           {var $js$13=[0,Assert_failure,[0,"dynlink.ml",232,13]];
            throw $js$13}
          else
           if($js$12==3){var s$2=error[1];var new_error=[2,s$2]}
        var $js$14=[0,Error,[3,file_name,new_error]];
        throw $js$14}
      else
       {"unknown primitive:reraise"}}
    var $js$15=Digest["string"];
    var $js$16=Pervasives["^"];
    var $js$17=$js$16(file_digest,compunit[1]);
    var digest=$js$15($js$17);
    "unknown primitive:caml_register_code_fragment";
    try
     {var $js$18="unknown primitive:caml_reify_bytecode";
      var $js$19=$js$18(0);
      return 0}
    catch(exn$1)
     {var $js$20=Dynlinkaux["Symtable"][19];
      $js$20(initial_symtable);
      var $js$21=exn$1;
      throw $js$21}};
var
 loadfile=
  function(file_name)
   {init(0);
    var $js$3="unknown primitive:caml_sys_file_exists";
    var $js$4=!$js$3;
    if($js$4){var $js$5=[0,Error,[5,file_name]];throw $js$5}else{}
    var $js$6=Pervasives["open_in_bin"];
    var ic=$js$6(file_name);
    var file_digest="unknown primitive:caml_md5_chan";
    var $js$7=Pervasives["seek_in"];
    $js$7(ic,0);
    try
     {try
       {var $js$8=Pervasives["really_input_string"];
        var buffer=$js$8(ic,Dynlinkaux["Config"][20]["length"])}
      catch(exn)
       {var $js$9=exn=End_of_file;
        if($js$9)
         {var $js$10=[0,Error,[0,file_name]];throw $js$10}
        else
         {var buffer="unknown primitive:reraise"}}
      var $js$11="unknown primitive:caml_string_equal";
      if($js$11)
       {var $js$12=Pervasives["input_binary_int"];
        var compunit_pos=$js$12(ic);
        var $js$13=Pervasives["seek_in"];
        $js$13(ic,compunit_pos);
        var $js$14=Pervasives["input_value"];
        var cu=$js$14(ic);
        load_compunit(ic,file_name,file_digest,cu)}
      else
       {var $js$15="unknown primitive:caml_string_equal";
        if($js$15)
         {var $js$16=Pervasives["input_binary_int"];
          var toc_pos=$js$16(ic);
          var $js$17=Pervasives["seek_in"];
          $js$17(ic,toc_pos);
          var $js$18=Pervasives["input_value"];
          var lib=$js$18(ic);
          try
           {var $js$19=Dynlinkaux["Dll"][2];
            var $js$20=List["map"];
            var $js$21=$js$20(Dynlinkaux["Dll"][1],lib[5]);
            $js$19(1,$js$21)}
          catch(exn$1)
           {var tag=exn$1[1];
            var $js$22=tag=Failure;
            if($js$22)
             {var reason=exn$1[2];
              var $js$23=[0,Error,[6,reason]];
              throw $js$23}
            else
             {"unknown primitive:reraise"}}
          var $js$24=List["iter"];
          var $js$25=load_compunit(ic,file_name,file_digest);
          $js$24($js$25,lib[1])}
        else
         {var $js$26=[0,Error,[0,file_name]];throw $js$26}}
      var $js$27=Pervasives["close_in"];
      return $js$27(ic)}
    catch(exc)
     {var $js$28=Pervasives["close_in"];
      $js$28(ic);
      var $js$29=exc;
      throw $js$29}};
var
 loadfile_private=
  function(file_name)
   {init(0);
    var $js$3=Dynlinkaux["Symtable"][18];
    var initial_symtable=$js$3(0);
    var initial_crc=crc_interfaces[1];
    try
     {loadfile(file_name);
      var $js$4=Dynlinkaux["Symtable"][20];
      $js$4(initial_symtable);
      return crc_interfaces[1]=initial_crc,0}
    catch(exn)
     {var $js$5=Dynlinkaux["Symtable"][20];
      $js$5(initial_symtable);
      crc_interfaces[1]=initial_crc,0;
      var $js$6=exn;
      throw $js$6}};
var
 error_message=
  function(param)
   {var $js$3=param;
    if(typeof $js$3=="number")
     {if($js$3==0){return "this object file uses unsafe features"}}
    else
     {var $js$4=$js$3[0];
      if($js$4==0)
       {var name=param[1];
        var $js$5=Pervasives["^"];
        return $js$5(name," is not a bytecode object file")}
      else
       if($js$4==1)
        {var name$1=param[1];
         var $js$6=Pervasives["^"];
         return $js$6("interface mismatch on ",name$1)}
       else
        if($js$4==2)
         {var name$2=param[1];
          var $js$7=Pervasives["^"];
          return $js$7("no implementation available for ",name$2)}
        else
         if($js$4==3)
          {var match$1=param[2];
           var name$3=param[1];
           var $js$8=match$1;
           if($js$8==0)
            {var s=match$1[1];
             var $js$9=Pervasives["^"];
             var $js$10=Pervasives["^"];
             var $js$11=Pervasives["^"];
             var $js$12=Pervasives["^"];
             var $js$13=Pervasives["^"];
             var $js$14=$js$13(s,"'");
             var $js$15=$js$12("Reference to undefined global `",$js$14);
             var $js$16=$js$11(".\n",$js$15);
             var $js$17=$js$10(name$3,$js$16);
             return $js$9("error while linking ",$js$17)}
           else
            if($js$8==1)
             {var name$4=name$3;
              var s$1=match$1[1];
              var $js$18=Pervasives["^"];
              var $js$19=Pervasives["^"];
              var $js$20=Pervasives["^"];
              var $js$21=Pervasives["^"];
              var $js$22=Pervasives["^"];
              var $js$23=$js$22(s$1,"' is not available");
              var $js$24=$js$21("The external function `",$js$23);
              var $js$25=$js$20(".\n",$js$24);
              var $js$26=$js$19(name$4,$js$25);
              return $js$18("error while linking ",$js$26)}
            else
             if($js$8==2)
              {var name$5=name$3;
               var s$2=match$1[1];
               var $js$27=Pervasives["^"];
               var $js$28=Pervasives["^"];
               var $js$29=Pervasives["^"];
               var $js$30=Pervasives["^"];
               var $js$31=Pervasives["^"];
               var $js$32=$js$31(s$2,"' is not yet initialized");
               var $js$33=$js$30("The module `",$js$32);
               var $js$34=$js$29(".\n",$js$33);
               var $js$35=$js$28(name$5,$js$34);
               return $js$27("error while linking ",$js$35)}}
         else
          if($js$4==4)
           {var name$6=param[1];
            var $js$36=Pervasives["^"];
            return $js$36("corrupted interface file ",name$6)}
          else
           if($js$4==5)
            {var name$7=param[1];
             var $js$37=Pervasives["^"];
             var $js$38=Pervasives["^"];
             var $js$39=$js$38(name$7," in search path");
             return $js$37("cannot find file ",$js$39)}
           else
            if($js$4==6)
             {var reason=param[1];
              var $js$40=Pervasives["^"];
              return $js$40("error loading shared library: ",reason)}
            else
             if($js$4==7)
              {var name$8=param[1];
               var $js$41=Pervasives["^"];
               return $js$41("implementation mismatch on ",name$8)}}};
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
