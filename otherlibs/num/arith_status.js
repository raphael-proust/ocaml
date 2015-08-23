// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Arith_flags=require("./arith_flags.js");


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
   {Pervasives["print_string"](s);return Pervasives["print_string"](" --> ")};

var
 arith_print_bool=
  function(param)
   {return param!==0
            ?Pervasives["print_string"]("ON")
            :Pervasives["print_string"]("OFF")};

var
 arith_status=
  function(param)
   {Pervasives["print_newline"](/* () */0);
    arith_print_string("Normalization during computation");
    arith_print_bool(get_normalize_ratio(/* () */0));
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]("     (returned by get_normalize_ratio ())");
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]
     ("     (modifiable with set_normalize_ratio <your choice>)");
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_newline"](/* () */0);
    arith_print_string("Normalization when printing");
    arith_print_bool(get_normalize_ratio_when_printing(/* () */0));
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]
     ("     (returned by get_normalize_ratio_when_printing ())");
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]
     ("     (modifiable with set_normalize_ratio_when_printing <your choice>)");
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_newline"](/* () */0);
    arith_print_string
     ("Floating point approximation when printing rational numbers");
    arith_print_bool(get_approx_printing(/* () */0));
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]("     (returned by get_approx_printing ())");
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]
     ("     (modifiable with set_approx_printing <your choice>)");
    Pervasives["print_newline"](/* () */0);
    get_approx_printing(/* () */0)
     ?(Pervasives["print_string"]("  Default precision = "),
       Pervasives["print_int"](get_floating_precision(/* () */0)),
       Pervasives["print_newline"](/* () */0),
       Pervasives["print_string"]
        ("     (returned by get_floating_precision ())"),
       Pervasives["print_newline"](/* () */0),
       Pervasives["print_string"]
        ("     (modifiable with set_floating_precision <your choice>)"),
       Pervasives["print_newline"](/* () */0),
       Pervasives["print_newline"](/* () */0))
     :Pervasives["print_newline"](/* () */0);
    
    arith_print_string("Error when a rational denominator is null");
    arith_print_bool(get_error_when_null_denominator(/* () */0));
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]
     ("     (returned by get_error_when_null_denominator ())");
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]
     ("     (modifiable with set_error_when_null_denominator <your choice>)");
    return Pervasives["print_newline"](/* () */0)};

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

