var Odoc_global=require("Odoc_global");
var Odoc_class=require("Odoc_class");
var Odoc_value=require("Odoc_value");
var List=require("List");
var Pervasives=require("Pervasives");
var Str=require("Str");
var Odoc_module=require("Odoc_module");
var Odoc_messages=require("Odoc_messages");


var
 merge_before_tags=
  function(l)
   {var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          var v=match[1];
          
          var
           match$1=
            List["partition"]
             (function(param$1){return "unknown primitive:caml_equal";},
              param[2]);
          
          var
           text=
            List["fold_left"]
             (function(acc$1,t)
               {return Pervasives["@"](acc$1,Pervasives["@"]([0,[0," "],0],t));
                },
              match[2],
              List["map"](function(prim){return prim[2];},match$1[1]));
          
          var acc$1=[0,[0,v,text],acc];
          
          return iter(acc$1,match$1[2]);
          }
        else
         {return List["rev"](acc);}
        };
    
    return iter(0,l);
    };

var version_separators=Str["regexp"]("[\.\+]");

var
 merge_info=
  function(merge_options,m1,m2)
   {var match=m1[1];
    
    var match$1=m2[1];
    
    if(match)
     {var d1=match[1];
      
      if(match$1)
       {if(List["mem"](0,merge_options))
         {var new_desc_opt=[0,Pervasives["@"](d1,[0,0,match$1[1]])];}
        else
         {var new_desc_opt=[0,d1];}
        }
      else
       {d=d1;var exit=152;}
      }
    else
     {if(match$1){var d=match$1[1];var exit=152;}else{var new_desc_opt=0;}}
    
    switch(exit){case 152:var new_desc_opt=[0,d];}
    
    var match$2=m1[2];
    
    var match$3=m2[2];
    
    if(match$2)
     {if(match$3){var exit$1=149;}else{l=match$2;var exit$1=147;}}
    else
     {if(match$3){var exit$1=149;}else{var new_authors=0;}}
    
    switch(exit$1)
     {case 149:
       if(match$2)
        {if(List["mem"](1,merge_options))
          {var new_authors=Pervasives["@"](match$2,match$3);}
         else
          {var new_authors=match$2;}
         }
       else
        {"unknown block:(exit 147 match/1524)";}
       
      case 147:var new_authors=l;
      }
    
    var match$4=m1[3];
    
    var match$5=m2[3];
    
    if(match$4)
     {var v1=match$4[1];
      
      if(match$5)
       {if(List["mem"](2,merge_options))
         {var
           new_version=
            [0,Pervasives["^"](v1,Pervasives["^"](" ",match$5[1]))];
          }
        else
         {var new_version=[0,v1];}
        }
      else
       {v=v1;var exit$2=145;}
      }
    else
     {if(match$5){var v=match$5[1];var exit$2=145;}else{var new_version=0;}}
    
    switch(exit$2){case 145:var new_version=[0,v];}
    
    var match$6=m1[4];
    
    var match$7=m2[4];
    
    if(match$6)
     {if(match$7){var exit$3=142;}else{l$1=match$6;var exit$3=140;}}
    else
     {if(match$7){var exit$3=142;}else{var new_sees=0;}}
    
    switch(exit$3)
     {case 142:
       if(match$6)
        {if(List["mem"](3,merge_options))
          {var new_sees=Pervasives["@"](match$6,match$7);}
         else
          {var new_sees=match$6;}
         }
       else
        {"unknown block:(exit 140 match/1510)";}
       
      case 140:var new_sees=l$1;
      }
    
    var match$8=m1[5];
    
    var match$9=m2[5];
    
    if(match$8)
     {var v1$1=match$8[1];
      
      if(match$9)
       {if(List["mem"](4,merge_options))
         {var
           new_since=
            [0,Pervasives["^"](v1$1,Pervasives["^"](" ",match$9[1]))];
          }
        else
         {var new_since=[0,v1$1];}
        }
      else
       {v$1=v1$1;var exit$4=138;}
      }
    else
     {if(match$9){var v$1=match$9[1];var exit$4=138;}else{var new_since=0;}}
    
    switch(exit$4){case 138:var new_since=[0,v$1];}
    
    var match$10=m1[6];
    
    var match$11=m2[6];
    
    if(match$10)
     {if(match$11){var exit$5=135;}else{l$2=match$10;var exit$5=133;}}
    else
     {if(match$11){var exit$5=135;}else{var new_before=0;}}
    
    switch(exit$5)
     {case 135:
       if(match$10)
        {if(List["mem"](5,merge_options))
          {var new_before=merge_before_tags(Pervasives["@"](m1[6],m2[6]));}
         else
          {var new_before=match$10;}
         }
       else
        {"unknown block:(exit 133 match/1496)";}
       
      case 133:var new_before=l$2;
      }
    
    var
     new_before$1=
      List["map"]
       (function(param)
         {var v$2=param[1];
          
          return [0,Str["split"](version_separators,v$2),v$2,param[2]];
          },
        new_before);
    
    var
     new_before$2=
      List["sort"]
       (function(prim,prim$1){return "unknown primitive:caml_compare";},
        new_before$1);
    
    var
     new_before$3=
      List["map"](function(param){return [0,param[2],param[3]];},new_before$2);
    
    var match$12=m1[7];
    
    var match$13=m2[7];
    
    if(match$12)
     {var t1=match$12[1];
      
      if(match$13)
       {if(List["mem"](6,merge_options))
         {var new_dep=[0,Pervasives["@"](t1,[0,0,match$13[1]])];}
        else
         {var new_dep=[0,t1];}
        }
      else
       {t=t1;var exit$6=128;}
      }
    else
     {if(match$13){var t=match$13[1];var exit$6=128;}else{var new_dep=0;}}
    
    switch(exit$6){case 128:var new_dep=[0,t];}
    
    var match$14=m1[8];
    
    var match$15=m2[8];
    
    if(match$14)
     {if(match$15){var exit$7=125;}else{l$3=match$14;var exit$7=123;}}
    else
     {if(match$15){var exit$7=125;}else{var new_params=0;}}
    
    switch(exit$7)
     {case 125:
       if(match$14)
        {if(List["mem"](7,merge_options))
          {var
            match$16=
             List["partition"]
              (function(param){return List["mem_assoc"](param[1],match$14);},
               match$15);
           
           var
            iter=
             function(param)
              {if(param)
                {var match$17=param[1];
                 
                 var param2=match$17[1];
                 
                 var desc1=List["assoc"](param2,match$14);
                 
                 return [0,
                         [0,param2,Pervasives["@"](desc1,[0,0,match$17[2]])],
                         iter(param[2])];
                 }
               else
                {return 0;}
               };
           
           var l1_completed=iter(match$16[1]);
           
           var new_params=Pervasives["@"](l1_completed,match$16[2]);
           }
         else
          {var new_params=match$14;}
         }
       else
        {"unknown block:(exit 123 match/1477)";}
       
      case 123:var new_params=l$3;
      }
    
    var match$17=m1[9];
    
    var match$18=m2[9];
    
    if(match$17)
     {if(match$18){var exit$8=117;}else{l$4=match$17;var exit$8=115;}}
    else
     {if(match$18){var exit$8=117;}else{var new_raised_exceptions=0;}}
    
    switch(exit$8)
     {case 117:
       if(match$17)
        {if(List["mem"](8,merge_options))
          {var
            match$19=
             List["partition"]
              (function(param){return List["mem_assoc"](param[1],match$17);},
               match$18);
           
           var
            iter$1=
             function(param)
              {if(param)
                {var match$20=param[1];
                 
                 var exc2=match$20[1];
                 
                 var desc1=List["assoc"](exc2,match$17);
                 
                 return [0,
                         [0,exc2,Pervasives["@"](desc1,[0,0,match$20[2]])],
                         iter$1(param[2])];
                 }
               else
                {return 0;}
               };
           
           var l1_completed$1=iter$1(match$19[1]);
           
           var
            new_raised_exceptions=
             Pervasives["@"](l1_completed$1,match$19[2]);
           }
         else
          {var new_raised_exceptions=match$17;}
         }
       else
        {"unknown block:(exit 115 match/1465)";}
       
      case 115:var new_raised_exceptions=l$4;
      }
    
    var match$20=m1[10];
    
    var match$21=m2[10];
    
    if(match$20)
     {var t1$1=match$20[1];
      
      if(match$21)
       {if(List["mem"](9,merge_options))
         {var new_rv=[0,Pervasives["@"](t1$1,[0,0,match$21[1]])];}
        else
         {var new_rv=[0,t1$1];}
        }
      else
       {t$1=t1$1;var exit$9=110;}
      }
    else
     {if(match$21){var t$1=match$21[1];var exit$9=110;}else{var new_rv=0;}}
    
    switch(exit$9){case 110:var new_rv=[0,t$1];}
    
    var match$22=m1[11];
    
    var match$23=m2[11];
    
    if(match$22)
     {if(match$23)
       {if(List["mem"](10,merge_options))
         {var new_custom=Pervasives["@"](match$22,match$23);}
        else
         {var new_custom=match$22;}
        }
      else
       {l$5=match$22;var exit$10=105;}
      }
    else
     {if(match$23){l$5=match$23;var exit$10=105;}else{var new_custom=0;}}
    
    switch(exit$10){case 105:var new_custom=l$5;}
    
    return [0,
            new_desc_opt,
            new_authors,
            new_version,
            new_sees,
            new_since,
            new_before$3,
            new_dep,
            new_params,
            new_raised_exceptions,
            new_rv,
            new_custom];
    };

var
 merge_info_opt=
  function(merge_options,mli_opt,ml_opt)
   {if(mli_opt)
     {var i=mli_opt[1];
      
      if(ml_opt)
       {return [0,merge_info(merge_options,i,ml_opt[1])];}
      else
       {return [0,i];}
      }
    else
     {if(ml_opt){return [0,ml_opt[1]];}else{return 0;}}
    };

var
 merge_types=
  function(merge_options,mli,ml)
   {mli[2]=merge_info_opt(merge_options,mli[2],ml[2]),0;
    var init=mli[7];
    
    mli[7]=[0,ml[7][1],init[2]],0;
    var match=mli[8];
    
    mli[8]=match?mli[8]:ml[8],0;
    var match$1=mli[4];
    
    var match$2=ml[4];
    
    if(typeof match$1=="number")
     {switch(match$1)
       {case 0:return 0;
        case 1:
         if("unknown primitive:isint")
          {if(match$2!=0){return 0;}else{var exit=101;}}
         else
          {var exit=101;}
         
        }}
    else
     {switch(match$1[0])
       {case 0:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 0:
              var l2=match$2[1];
              
              var
               f=
                function(cons)
                 {try
                   {var
                     cons2=
                      List["find"]
                       (function(c2){return "unknown primitive:caml_string_equal";},
                        l2);
                    
                    var match$3=cons[4];
                    
                    var match$4=cons2[4];
                    
                    if(match$3)
                     {var d1=match$3[1];
                      
                      if(match$4)
                       {if(List["mem"](0,merge_options))
                         {var new_desc=[0,merge_info(merge_options,d1,match$4[1])];}
                        else
                         {var new_desc=[0,d1];}
                        }
                      else
                       {d=d1;var exit$1=92;}
                      }
                    else
                     {if(match$4)
                       {var d=match$4[1];var exit$1=92;}
                      else
                       {var new_desc=0;}
                      }
                    
                    switch(exit$1){case 92:var new_desc=[0,d];}
                    
                    return cons[4]=new_desc,0;
                    }
                  catch(exn)
                   {if(exn=Not_found)
                     {if(Odoc_global["inverse_merge_ml_mli"][1])
                       {return 0;}
                      else
                       {throw [0,Failure,Odoc_messages["different_types"](mli[1])];
                        }
                      }
                    else
                     {throw exn;}
                    }
                  };
              
              return List["iter"](f,match$1[1]);
              
             default:var exit=101;}}
         
        case 1:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 1:
              var l2$1=match$2[1];
              
              var
               f$1=
                function(record)
                 {try
                   {var
                     record2=
                      List["find"]
                       (function(r){return "unknown primitive:caml_string_equal";},
                        l2$1);
                    
                    var match$3=record[4];
                    
                    var match$4=record2[4];
                    
                    if(match$3)
                     {var d1=match$3[1];
                      
                      if(match$4)
                       {if(List["mem"](0,merge_options))
                         {var new_desc=[0,merge_info(merge_options,d1,match$4[1])];}
                        else
                         {var new_desc=[0,d1];}
                        }
                      else
                       {d=d1;var exit$1=97;}
                      }
                    else
                     {if(match$4)
                       {var d=match$4[1];var exit$1=97;}
                      else
                       {var new_desc=0;}
                      }
                    
                    switch(exit$1){case 97:var new_desc=[0,d];}
                    
                    return record[4]=new_desc,0;
                    }
                  catch(exn)
                   {if(exn=Not_found)
                     {if(Odoc_global["inverse_merge_ml_mli"][1])
                       {return 0;}
                      else
                       {throw [0,Failure,Odoc_messages["different_types"](mli[1])];
                        }
                      }
                    else
                     {throw exn;}
                    }
                  };
              
              return List["iter"](f$1,match$1[1]);
              
             default:var exit=101;}}
         
        }}
    
    switch(exit)
     {case 101:
       if(Odoc_global["inverse_merge_ml_mli"][1])
        {return 0;}
       else
        {throw [0,Failure,Odoc_messages["different_types"](mli[1])];}
       
      }
    };

var
 merge_type_extension=
  function(merge_options,mli,ml)
   {mli[1]=merge_info_opt(merge_options,mli[1],ml[1]),0;
    var init=mli[6];
    
    mli[6]=[0,ml[6][1],init[2]],0;
    var match=mli[7];
    
    return mli[7]=match?mli[7]:ml[7],0;
    };

var
 merge_extension_constructor=
  function(merge_options,mli,ml)
   {var match=mli[7];
    
    var match$1=ml[7];
    
    if(match)
     {var d1=match[1];
      
      if(match$1)
       {if(List["mem"](0,merge_options))
         {var new_desc=[0,merge_info(merge_options,d1,match$1[1])];}
        else
         {var new_desc=[0,d1];}
        }
      else
       {d=d1;var exit=86;}
      }
    else
     {if(match$1){var d=match$1[1];var exit=86;}else{var new_desc=0;}}
    
    switch(exit){case 86:var new_desc=[0,d];}
    
    return mli[7]=new_desc,0;
    };

var
 merge_param_info=
  function(pi_mli,pi_ml)
   {switch(pi_mli)
     {case 0:
       var sn_mli=pi_mli[1];
       
       switch(pi_ml)
        {case 0:
          if("unknown primitive:caml_string_equal")
           {return [0,[0,pi_ml[1][1],sn_mli[2],sn_mli[3]]];}
          else
           {return pi_mli;}
          
         case 1:return pi_mli;
         }
       
      case 1:
       var t_mli=pi_mli[2];
       
       var l_mli=pi_mli[1];
       
       switch(pi_ml)
        {case 0:var sn_ml=pi_ml[1];return [0,[0,sn_ml[1],t_mli,sn_ml[3]]];
         case 1:
          var l_ml=pi_ml[1];
          
          if(List["length"](l_mli)!=List["length"](l_ml))
           {return pi_mli;}
          else
           {var new_l=List["map2"](merge_param_info,l_mli,l_ml);
            
            return [1,new_l,t_mli];
            }
          
         }
       
      }
    };

var
 merge_parameters=
  function(param_mli,param_ml)
   {if(param_mli)
     {if(param_ml)
       {return [0,
                merge_param_info(param_mli[1],param_ml[1]),
                merge_parameters(param_mli[2],param_ml[2])];
        }
      else
       {l=param_mli;var exit=82;}
      }
    else
     {if(param_ml){l=param_ml;var exit=82;}else{return 0;}}
    
    switch(exit){case 82:return l;}
    };

var
 merge_classes=
  function(merge_options,mli,ml)
   {mli[2]=merge_info_opt(merge_options,mli[2],ml[2]),0;
    var init=mli[8];
    
    mli[8]=[0,ml[8][1],init[2]],0;
    mli[7]=merge_parameters(mli[7],ml[7]),0;
    Odoc_class["class_update_parameters_text"](mli);
    List["iter"]
     (function(a)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 0:
                   var a2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {a[1][2]=merge_info_opt(merge_options,a[1][2],a2[1][2]),0;
                     var init$1=a[1][7];
                     
                     a[1][7]=[0,a2[1][7][1],init$1[2]],0;
                     if(Odoc_global["keep_code"][1]){a[1][6]=a2[1][6],0}else{}
                     
                     return 1;
                     }
                   else
                    {return 0;}
                   
                  case 1:var exit=79;
                  case 2:var exit=79;
                  }
                
                switch(exit){case 79:return 0;}
                },
              List["rev"](Odoc_class["class_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_class["class_attributes"](0,mli));
    return List["iter"]
            (function(m)
              {try
                {var
                  match=
                   List["find"]
                    (function(ele)
                      {switch(ele)
                        {case 0:var exit=76;
                         case 1:
                          var m2=ele[1];
                          
                          if("unknown primitive:caml_string_equal")
                           {m[1][2]=merge_info_opt(merge_options,m[1][2],m2[1][2]),0;
                            var init$1=m[1][7];
                            
                            m[1][7]=[0,m2[1][7][1],init$1[2]],0;
                            m[1][5]=merge_parameters(m[1][5],m2[1][5]),0;
                            Odoc_value["update_value_parameters_text"](m[1]);
                            if(Odoc_global["keep_code"][1]){m[1][6]=m2[1][6],0}else{}
                            
                            return 1;
                            }
                          else
                           {return 0;}
                          
                         case 2:var exit=76;
                         }
                       
                       switch(exit){case 76:return 0;}
                       },
                     List["rev"](Odoc_class["class_elements"](0,ml)));
                 
                 return 0;
                 }
               catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
               },
             Odoc_class["class_methods"](0,mli));
    };

var
 merge_class_types=
  function(merge_options,mli,ml)
   {mli[2]=merge_info_opt(merge_options,mli[2],ml[2]),0;
    var init=mli[7];
    
    mli[7]=[0,ml[7][1],init[2]],0;
    List["iter"]
     (function(a)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 0:
                   var a2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {a[1][2]=merge_info_opt(merge_options,a[1][2],a2[1][2]),0;
                     var init$1=a[1][7];
                     
                     a[1][7]=[0,a2[1][7][1],init$1[2]],0;
                     if(Odoc_global["keep_code"][1]){a[1][6]=a2[1][6],0}else{}
                     
                     return 1;
                     }
                   else
                    {return 0;}
                   
                  case 1:var exit=72;
                  case 2:var exit=72;
                  }
                
                switch(exit){case 72:return 0;}
                },
              List["rev"](Odoc_class["class_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_class["class_type_attributes"](0,mli));
    return List["iter"]
            (function(m)
              {try
                {var
                  match=
                   List["find"]
                    (function(ele)
                      {switch(ele)
                        {case 0:var exit=69;
                         case 1:
                          var m2=ele[1];
                          
                          if("unknown primitive:caml_string_equal")
                           {m[1][2]=merge_info_opt(merge_options,m[1][2],m2[1][2]),0;
                            var init$1=m[1][7];
                            
                            m[1][7]=[0,m2[1][7][1],init$1[2]],0;
                            m[1][5]=merge_parameters(m[1][5],m2[1][5]),0;
                            Odoc_value["update_value_parameters_text"](m[1]);
                            if(Odoc_global["keep_code"][1]){m[1][6]=m2[1][6],0}else{}
                            
                            return 1;
                            }
                          else
                           {return 0;}
                          
                         case 2:var exit=69;
                         }
                       
                       switch(exit){case 69:return 0;}
                       },
                     List["rev"](Odoc_class["class_type_elements"](0,ml)));
                 
                 return 0;
                 }
               catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
               },
             Odoc_class["class_type_methods"](0,mli));
    };

var
 merge_module_types=
  function(merge_options,mli,ml)
   {mli[2]=merge_info_opt(merge_options,mli[2],ml[2]),0;
    var init=mli[7];
    
    mli[7]=[0,ml[7][1],init[2]],0;
    List["iter"]
     (function(te)
       {var
         f=
          function(exts,elems)
           {if(exts)
             {if(elems)
               {var match=elems[1];
                
                switch(match)
                 {case 6:
                   var te2=match[1];
                   
                   var
                    merge_ext=
                     function(xt)
                      {try
                        {var
                          xt2=
                           List["find"]
                            (function(xt2$1)
                              {return "unknown primitive:caml_string_equal";},
                             te2[5]);
                         
                         merge_extension_constructor(merge_options,xt,xt2);
                         return 1;
                         }
                       catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
                       };
                   
                   var match$1=List["partition"](merge_ext,exts);
                   
                   if(match$1[1]!=0)
                    {merge_type_extension(merge_options,te,te2)}
                   else
                    {}
                   
                   return f(match$1[2],elems[2]);
                   
                  default:return f(exts,elems[2]);}
                }
              else
               {var exit=31;}
              }
            else
             {var exit=31;}
            
            switch(exit){case 31:return 0;}
            };
        
        return f(te[5],List["rev"](Odoc_module["module_type_elements"](0,ml)));
        },
      Odoc_module["module_type_type_extensions"](0,mli));
    List["iter"]
     (function(ex)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 7:
                   var ex2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {ex[2]=merge_info_opt(merge_options,ex[2],ex2[2]),0;
                     var init$1=ex[6];
                     
                     ex[6]=[0,ex2[6][1],init$1[2]],0;
                     var match$1=ex[7];
                     
                     ex[7]=match$1?ex[7]:ex2[7],0;
                     return 1;
                     }
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_type_exceptions"](0,mli));
    List["iter"]
     (function(ty)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 8:
                   var ty2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_types(merge_options,ty,ty2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_type_types"](0,mli));
    List["iter"]
     (function(m)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 0:
                   var m2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_type_modules"](0,mli));
    List["iter"]
     (function(m)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 1:
                   var m2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_module_types(merge_options,m,m2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_type_module_types"](0,mli));
    List["iter"]
     (function(v)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 5:
                   var v2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {v[2]=merge_info_opt(merge_options,v[2],v2[2]),0;
                     var init$1=v[7];
                     
                     v[7]=[0,v2[7][1],init$1[2]],0;
                     v[5]=merge_parameters(v[5],v2[5]),0;
                     Odoc_value["update_value_parameters_text"](v);
                     if(Odoc_global["keep_code"][1]){v[6]=v2[6],0}else{}
                     
                     return 1;
                     }
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_type_values"](0,mli));
    List["iter"]
     (function(c)
       {try
         {var
           match=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 3:
                   var c2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_classes(merge_options,c,c2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_type_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_type_classes"](0,mli));
    return List["iter"]
            (function(c)
              {try
                {var
                  match=
                   List["find"]
                    (function(ele)
                      {switch(ele)
                        {case 4:
                          var c2=ele[1];
                          
                          if("unknown primitive:caml_string_equal")
                           {merge_class_types(merge_options,c,c2);return 1;}
                          else
                           {return 0;}
                          
                         default:return 0;}
                       },
                     List["rev"](Odoc_module["module_type_elements"](0,ml)));
                 
                 return 0;
                 }
               catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
               },
             Odoc_module["module_type_class_types"](0,mli));
    };

var
 merge_modules=
  function(merge_options,mli,ml)
   {mli[3]=merge_info_opt(merge_options,mli[3],ml[3]),0;
    var init=mli[7];
    
    mli[7]=[0,ml[7][1],init[2]],0;
    var
     remove_doubles=
      function(acc,param)
       {if(param)
         {var q=param[2];
          
          var h=param[1];
          
          if(List["mem"](h,acc))
           {return remove_doubles(acc,q);}
          else
           {return remove_doubles([0,h,acc],q);}
          }
        else
         {return acc;}
        };
    
    mli[8]=remove_doubles(mli[8],ml[8]),0;
    if(Odoc_global["keep_code"][1])
     {var match=mli[9];
      
      var match$1=ml[9];
      
      if(match)
       {var code=[0,match[1]];}
      else
       {if(match$1){var code=[0,match$1[1]];}else{var code=0;}}
      }
    else
     {var code=0;}
    
    if(Odoc_global["keep_code"][1])
     {var match$2=mli[10];
      
      var match$3=ml[10];
      
      if(match$2)
       {var code_intf=[0,match$2[1]];}
      else
       {if(match$3){var code_intf=[0,match$3[1]];}else{var code_intf=0;}}
      }
    else
     {var code_intf=0;}
    
    mli[9]=code,0;
    mli[10]=code_intf,0;
    List["iter"]
     (function(te)
       {var
         f=
          function(exts,elems)
           {if(exts)
             {if(elems)
               {var match$4=elems[1];
                
                switch(match$4)
                 {case 6:
                   var te2=match$4[1];
                   
                   var
                    merge_ext=
                     function(xt)
                      {try
                        {var
                          xt2=
                           List["find"]
                            (function(xt2$1)
                              {return "unknown primitive:caml_string_equal";},
                             te2[5]);
                         
                         merge_extension_constructor(merge_options,xt,xt2);
                         return 1;
                         }
                       catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
                       };
                   
                   var match$5=List["partition"](merge_ext,exts);
                   
                   if(match$5[1]!=0)
                    {merge_type_extension(merge_options,te,te2)}
                   else
                    {}
                   
                   return f(match$5[2],elems[2]);
                   
                  default:return f(exts,elems[2]);}
                }
              else
               {var exit=59;}
              }
            else
             {var exit=59;}
            
            switch(exit){case 59:return 0;}
            };
        
        return f(te[5],List["rev"](Odoc_module["module_elements"](0,ml)));
        },
      Odoc_module["module_type_extensions"](0,mli));
    List["iter"]
     (function(ex)
       {try
         {var
           match$4=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 7:
                   var ex2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {ex[2]=merge_info_opt(merge_options,ex[2],ex2[2]),0;
                     var init$1=ex[6];
                     
                     ex[6]=[0,ex[6][1],init$1[2]],0;
                     var match$5=ex[7];
                     
                     ex[7]=match$5?ex[7]:ex2[7],0;
                     return 1;
                     }
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_exceptions"](0,mli));
    List["iter"]
     (function(ty)
       {try
         {var
           match$4=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 8:
                   var ty2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_types(merge_options,ty,ty2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_types"](0,mli));
    List["iter"]
     (function(m)
       {try
         {var
           match$4=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 0:
                   var m2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_modules"](0,mli));
    List["iter"]
     (function(m)
       {try
         {var
           match$4=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 1:
                   var m2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_module_types(merge_options,m,m2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_module_types"](0,mli));
    List["iter"]
     (function(v)
       {try
         {var
           match$4=
            List["find"]
             (function(v2)
               {if("unknown primitive:caml_string_equal")
                 {v[2]=merge_info_opt(merge_options,v[2],v2[2]),0;
                  var init$1=v[7];
                  
                  v[7]=[0,v2[7][1],init$1[2]],0;
                  v[5]=merge_parameters(v[5],v2[5]),0;
                  Odoc_value["update_value_parameters_text"](v);
                  if(Odoc_global["keep_code"][1]){v[6]=v2[6],0}else{}
                  
                  return 1;
                  }
                else
                 {return 0;}
                },
              List["rev"](Odoc_module["module_values"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_values"](0,mli));
    List["iter"]
     (function(c)
       {try
         {var
           match$4=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 3:
                   var c2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_classes(merge_options,c,c2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_classes"](0,mli));
    List["iter"]
     (function(c)
       {try
         {var
           match$4=
            List["find"]
             (function(ele)
               {switch(ele)
                 {case 4:
                   var c2=ele[1];
                   
                   if("unknown primitive:caml_string_equal")
                    {merge_class_types(merge_options,c,c2);return 1;}
                   else
                    {return 0;}
                   
                  default:return 0;}
                },
              List["rev"](Odoc_module["module_elements"](0,ml)));
          
          return 0;
          }
        catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
        },
      Odoc_module["module_class_types"](0,mli));
    return mli;
    };

var
 merge=
  function(merge_options,modules_list)
   {var
     iter=
      function(param)
       {if(param)
         {var m=param[1];
          
          var
           match=
            List["partition"]
             (function(m2){return "unknown primitive:caml_string_equal";},
              param[2]);
          
          var l_others=match[2];
          
          var l_same=match[1];
          
          if(l_same)
           {if(l_same[2])
             {throw [0,Failure,Odoc_messages["too_many_module_objects"](m[1])];
              }
            else
             {var m2=l_same[1];
              
              var
               f=
                function(b)
                 {if(Odoc_global["inverse_merge_ml_mli"][1])
                   {return !b;}
                  else
                   {return b;}
                  };
              
              var match$1=f(m[4]);
              
              var match$2=f(m2[4]);
              
              if(match$1!=0)
               {if(match$2!=0)
                 {if(Odoc_global["inverse_merge_ml_mli"][1])
                   {throw [0,
                           Failure,
                           Odoc_messages["two_implementations"](m[1])];
                    }
                  else
                   {throw [0,Failure,Odoc_messages["two_interfaces"](m[1])];}
                  }
                else
                 {return [0,merge_modules(merge_options,m,m2),iter(l_others)];
                  }
                }
              else
               {if(match$2!=0)
                 {return [0,merge_modules(merge_options,m2,m),iter(l_others)];
                  }
                else
                 {if(Odoc_global["inverse_merge_ml_mli"][1])
                   {throw [0,Failure,Odoc_messages["two_interfaces"](m[1])];}
                  else
                   {throw [0,
                           Failure,
                           Odoc_messages["two_implementations"](m[1])];
                    }
                  }
                }
              }
            }
          else
           {return [0,m,iter(l_others)];}
          }
        else
         {return 0;}
        };
    
    return iter(modules_list);
    };


module["exports"]=
{"merge_before_tags":merge_before_tags,
 "merge_info_opt":merge_info_opt,
 "merge":merge};

