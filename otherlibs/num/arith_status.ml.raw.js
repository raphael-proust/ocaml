var Pervasives=require("Pervasives");
var Arith_flags=require("Arith_flags");
var
 get_error_when_null_denominator=
  function(param){return Arith_flags["error_when_null_denominator_flag"][1]};
var
 set_error_when_null_denominator=
  function(choice)
   {return Arith_flags["error_when_null_denominator_flag"][1]=choice,0};
var
 get_normalize_ratio=
  function(param){return Arith_flags["normalize_ratio_flag"][1]};
var
 set_normalize_ratio=
  function(choice){return Arith_flags["normalize_ratio_flag"][1]=choice,0};
var
 get_normalize_ratio_when_printing=
  function(param){return Arith_flags["normalize_ratio_when_printing_flag"][1]};
var
 set_normalize_ratio_when_printing=
  function(choice)
   {return Arith_flags["normalize_ratio_when_printing_flag"][1]=choice,0};
var
 get_floating_precision=
  function(param){return Arith_flags["floating_precision"][1]};
var
 set_floating_precision=
  function(i){return Arith_flags["floating_precision"][1]=i,0};
var
 get_approx_printing=
  function(param){return Arith_flags["approx_printing_flag"][1]};
var
 set_approx_printing=
  function(b){return Arith_flags["approx_printing_flag"][1]=b,0};
var
 arith_print_string=
  function(s)
   {var $js=Pervasives["print_string"];
    $js(s);
    var $js$1=Pervasives["print_string"];
    return $js$1(" --> ")};
var
 arith_print_bool=
  function(param)
   {var $js=param!=0;
    if($js)
     {var $js$1=Pervasives["print_string"];return $js$1("ON")}
    else
     {var $js$2=Pervasives["print_string"];return $js$2("OFF")}};
var
 arith_status=
  function(param)
   {var $js=Pervasives["print_newline"];
    $js(0);
    arith_print_string("Normalization during computation");
    var $js$1=get_normalize_ratio(0);
    arith_print_bool($js$1);
    var $js$2=Pervasives["print_newline"];
    $js$2(0);
    var $js$3=Pervasives["print_string"];
    $js$3("     (returned by get_normalize_ratio ())");
    var $js$4=Pervasives["print_newline"];
    $js$4(0);
    var $js$5=Pervasives["print_string"];
    $js$5("     (modifiable with set_normalize_ratio <your choice>)");
    var $js$6=Pervasives["print_newline"];
    $js$6(0);
    var $js$7=Pervasives["print_newline"];
    $js$7(0);
    arith_print_string("Normalization when printing");
    var $js$8=get_normalize_ratio_when_printing(0);
    arith_print_bool($js$8);
    var $js$9=Pervasives["print_newline"];
    $js$9(0);
    var $js$10=Pervasives["print_string"];
    $js$10("     (returned by get_normalize_ratio_when_printing ())");
    var $js$11=Pervasives["print_newline"];
    $js$11(0);
    var $js$12=Pervasives["print_string"];
    $js$12
     ("     (modifiable with set_normalize_ratio_when_printing <your choice>)");
    var $js$13=Pervasives["print_newline"];
    $js$13(0);
    var $js$14=Pervasives["print_newline"];
    $js$14(0);
    arith_print_string
     ("Floating point approximation when printing rational numbers");
    var $js$15=get_approx_printing(0);
    arith_print_bool($js$15);
    var $js$16=Pervasives["print_newline"];
    $js$16(0);
    var $js$17=Pervasives["print_string"];
    $js$17("     (returned by get_approx_printing ())");
    var $js$18=Pervasives["print_newline"];
    $js$18(0);
    var $js$19=Pervasives["print_string"];
    $js$19("     (modifiable with set_approx_printing <your choice>)");
    var $js$20=Pervasives["print_newline"];
    $js$20(0);
    var $js$21=get_approx_printing(0);
    if($js$21)
     {var $js$22=Pervasives["print_string"];
      $js$22("  Default precision = ");
      var $js$23=Pervasives["print_int"];
      var $js$24=get_floating_precision(0);
      $js$23($js$24);
      var $js$25=Pervasives["print_newline"];
      $js$25(0);
      var $js$26=Pervasives["print_string"];
      $js$26("     (returned by get_floating_precision ())");
      var $js$27=Pervasives["print_newline"];
      $js$27(0);
      var $js$28=Pervasives["print_string"];
      $js$28("     (modifiable with set_floating_precision <your choice>)");
      var $js$29=Pervasives["print_newline"];
      $js$29(0);
      var $js$30=Pervasives["print_newline"];
      $js$30(0)}
    else
     {var $js$31=Pervasives["print_newline"];$js$31(0)}
    arith_print_string("Error when a rational denominator is null");
    var $js$32=get_error_when_null_denominator(0);
    arith_print_bool($js$32);
    var $js$33=Pervasives["print_newline"];
    $js$33(0);
    var $js$34=Pervasives["print_string"];
    $js$34("     (returned by get_error_when_null_denominator ())");
    var $js$35=Pervasives["print_newline"];
    $js$35(0);
    var $js$36=Pervasives["print_string"];
    $js$36
     ("     (modifiable with set_error_when_null_denominator <your choice>)");
    var $js$37=Pervasives["print_newline"];
    return $js$37(0)};
module["exports"]=
{"arith_status":arith_status,
 "get_error_when_null_denominator":get_error_when_null_denominator,
 "set_error_when_null_denominator":set_error_when_null_denominator,
 "get_normalize_ratio":get_normalize_ratio,
 "set_normalize_ratio":set_normalize_ratio,
 "get_normalize_ratio_when_printing":get_normalize_ratio_when_printing,
 "set_normalize_ratio_when_printing":set_normalize_ratio_when_printing,
 "get_approx_printing":get_approx_printing,
 "set_approx_printing":set_approx_printing,
 "get_floating_precision":get_floating_precision,
 "set_floating_precision":set_floating_precision};
