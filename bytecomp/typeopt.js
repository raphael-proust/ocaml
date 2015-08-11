// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var List=require("List");
var Predef=require("Predef");
var Env=require("Env");
var Path=require("Path");
var Ident=require("Ident");


var
 scrape=
  function(env,ty)
   {return Ctype["repr"]
             (Ctype["expand_head_opt"](env,Ctype["correct_levels"](ty)))
            [1];
    };

var
 has_base_type=
  function(exp,base_ty_path)
   {var match=scrape(exp[5],exp[4]);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:return Path["same"](match[1],base_ty_path);default:exit=24;}}
    
    switch(exit){case 24:return 0;}
    };

var
 maybe_pointer=
  function(exp)
   {var match=scrape(exp[5],exp[4]);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var p=match[1];
         
         try
          {var match$1=Env["find_type"](p,exp[5]);
           
           var match$2=match$1[3];
           
           var exit$1;
           
           if(typeof match$2=="number")
            {switch(match$2){}}
           else
            {switch(match$2[0])
              {case 1:
                var cstrs=match$2[1];
                
                if(cstrs)
                 {var $js=List["exists"](function(c){return c[2]!=0;},cstrs);}
                else
                 {var $js=1;}
                
               default:exit$1=20;}}
           
           switch(exit$1){case 20:var $js=1;}
           }
         catch(exn){if(exn=Not_found){var $js=1;}else{throw exn;}}
         return !Path["same"](p,Predef["path_int"])&&
                !Path["same"](p,Predef["path_char"])&&
                $js;
         
        default:exit=22;}}
    
    switch(exit){case 22:return 1;}
    };

var
 array_element_kind=
  function(env,ty)
   {var match=scrape(env,ty);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:exit=16;
        case 3:
         var p=match[1];
         
         if
          (Path["same"](p,Predef["path_int"])||
           Path["same"](p,Predef["path_char"]))
          {return 2;}
         else
          {if(Path["same"](p,Predef["path_float"]))
            {return 3;}
           else
            {if
              (Path["same"](p,Predef["path_string"])||
               Path["same"](p,Predef["path_array"])||
               Path["same"](p,Predef["path_nativeint"])||
               Path["same"](p,Predef["path_int32"])||
               Path["same"](p,Predef["path_int64"]))
              {return 1;}
             else
              {try
                {var match$1=Env["find_type"](p,env);
                 
                 var match$2=match$1[3];
                 
                 var exit$1;
                 
                 if(typeof match$2=="number")
                  {switch(match$2){case 0:return 0;case 1:exit$1=15;}}
                 else
                  {switch(match$2[0])
                    {case 0:exit$1=15;
                     case 1:
                      if(List["for_all"](function(c){return c[2]=0;},match$2[1]))
                       {return 2;}
                      else
                       {exit$1=15;}
                      
                     }}
                 
                 switch(exit$1){case 15:return 1;}
                 }
               catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
               }
             }
           }
         
        case 9:exit=16;
        default:exit=17;}}
    
    switch(exit){case 17:return 1;case 16:return 0;}
    };

var
 array_kind_gen=
  function(ty,env)
   {var match=scrape(env,ty);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var match$1=match[2];
         
         if(match$1)
          {if(match$1[2])
            {exit=11;}
           else
            {var p=match[1];var elt_ty=match$1[1];exit=12;}
           }
         else
          {exit=11;}
         
        case 10:
         var match$2=match[1][1];
         
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 3:
              var match$3=match$2[2];
              
              if(match$3)
               {if(match$3[2])
                 {exit=11;}
                else
                 {var p=match$2[1];var elt_ty=match$3[1];exit=12;}
                }
              else
               {exit=11;}
              
             default:exit=11;}}
         
        default:exit=11;}}
    
    switch(exit)
     {case 12:
       if(Path["same"](p,Predef["path_array"]))
        {return array_element_kind(env,elt_ty);}
       else
        {"unknown block:(exit 11)";}
       
      case 11:return 0;
      }
    };

var array_kind=function(exp){return array_kind_gen(exp[4],exp[5]);};

var array_pattern_kind=function(pat){return array_kind_gen(pat[4],pat[5]);};

var
 bigarray_decode_type=
  function(env,ty,tbl,dfl)
   {var match=scrape(env,ty);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var match$1=match[1];
         
         switch(match$1)
          {case 0:exit=6;
           case 1:
            var match$2=match$1[1];
            
            switch(match$2)
             {case 0:
               if(match[2])
                {exit=6;}
               else
                {if("unknown primitive:caml_string_equal")
                  {try
                    {return List["assoc"](match$1[2],tbl);}
                   catch(exn){if(exn=Not_found){return dfl;}else{throw exn;}}
                   }
                 else
                  {exit=6;}
                 }
               
              case 1:exit=6;
              case 2:exit=6;
              }
            
           case 2:exit=6;
           }
         
        default:exit=6;}}
    
    switch(exit){case 6:return dfl;}
    };

var
 kind_table=
  [0,
   [0,"float32_elt",1],
   [0,
    [0,"float64_elt",2],
    [0,
     [0,"int8_signed_elt",3],
     [0,
      [0,"int8_unsigned_elt",4],
      [0,
       [0,"int16_signed_elt",5],
       [0,
        [0,"int16_unsigned_elt",6],
        [0,
         [0,"int32_elt",7],
         [0,
          [0,"int64_elt",8],
          [0,
           [0,"int_elt",9],
           [0,
            [0,"nativeint_elt",10],
            [0,[0,"complex32_elt",11],[0,[0,"complex64_elt",12],0]]]]]]]]]]]];

var layout_table=[0,[0,"c_layout",1],[0,[0,"fortran_layout",2],0]];

var
 bigarray_kind_and_layout=
  function(exp)
   {var match=scrape(exp[5],exp[4]);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var match$1=match[2];
         
         if(match$1)
          {var match$2=match$1[2];
           
           if(match$2)
            {var match$3=match$2[2];
             
             if(match$3)
              {if(match$3[2])
                {exit=1;}
               else
                {return /* tuple */[0,
                         bigarray_decode_type(exp[5],match$2[1],kind_table,0),
                         bigarray_decode_type(exp[5],match$3[1],layout_table,0)];
                 }
               }
             else
              {exit=1;}
             }
           else
            {exit=1;}
           }
         else
          {exit=1;}
         
        default:exit=1;}}
    
    switch(exit){case 1:return [0,0,0];}
    };

module["exports"]=
{"has_base_type":has_base_type,
 "maybe_pointer":maybe_pointer,
 "array_kind":array_kind,
 "array_pattern_kind":array_pattern_kind,
 "bigarray_kind_and_layout":bigarray_kind_and_layout};

