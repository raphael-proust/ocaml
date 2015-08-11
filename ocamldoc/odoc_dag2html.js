// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Set=require("Set");
var Buffer=require("Buffer");
var $$Array=require("Array");


var i=[0,0];

var new_span_id=function(param){i[0]++;return i[1];};

var i$1=[0,0];

var new_ghost_id=function(param){i$1[0]++;return i$1[1];};

var
 html_table_struct=
  function(indi_txt,phony,d,t)
   {var
     phony$1=
      function(param)
       {if(typeof param=="number")
         {switch(param){case 0:return /* true */1;}}
        else
         {switch(param[0])
           {case 0:return phony(d[1][param[1]]);case 1:return /* false */0;}}
        };
    
    var
     elem_txt=
      function(param)
       {if(typeof param=="number")
         {switch(param){case 0:return "&nbsp;";}}
        else
         {switch(param[0])
           {case 0:return indi_txt(d[1][param[1]]);case 1:return "|";}}
        };
    
    var
     bar_txt=
      function(param)
       {if("unknown primitive:isint"){return "&nbsp;";}else{return "|";}};
    
    var
     all_empty=
      function(i)
       {var
         loop=
          function(j)
           {if(j=t[1][i]["length"])
             {return /* true */1;}
            else
             {var e=t[1][i][j][1];
              
              if("unknown primitive:isint")
               {return loop(j+1);}
              else
               {if(phony$1(e)){return loop(j+1);}else{return /* false */0;}}
              }
            };
        
        return loop(0);
        };
    
    var
     line_elem_txt=
      function(i)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i]["length"])
             {return les;}
            else
             {var x=t[1][i][j];
              
              var
               loop$1=
                function(j)
                 {if(j=t[1][i]["length"])
                   {return j;}
                  else
                   {if("unknown primitive:caml_equal")
                     {return loop$1(j+1);}
                    else
                     {return j;}
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var colspan=3*(next_j-j);
              
              var
               les$1=
                /* :: */[0,
                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                 les];
              
              if(t[1][i][j][1]=/* Nothing */0)
               {var s="&nbsp;";}
              else
               {var s=elem_txt(t[1][i][j][1]);}
              
              var
               les$2=
                /* :: */[0,
                 /* tuple */[0,colspan-2,/* CenterA */1,/* TDstring */[0,s]],
                 les$1];
              
              var
               les$3=
                /* :: */[0,
                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                 les$2];
              
              return loop(les$3,next_j);
              }
            };
        
        var les=loop(/* [] */0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     vbars_txt=
      function(k,i)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i]["length"])
             {return les;}
            else
             {var x=t[1][i][j];
              
              var
               loop$1=
                function(j)
                 {if(j=t[1][i]["length"])
                   {return j;}
                  else
                   {if("unknown primitive:caml_equal")
                     {return loop$1(j+1);}
                    else
                     {return j;}
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var colspan=3*(next_j-j);
              
              var
               les$1=
                /* :: */[0,
                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                 les];
              
              if
               (k>
                0&&
                (t[1][k-1][j][1]=/* Nothing */0)||
                (t[1][k][j][1]=/* Nothing */0))
               {var s="&nbsp;";}
              else
               {if(phony$1(t[1][i][j][1]))
                 {var s="&nbsp;";}
                else
                 {var s=bar_txt(t[1][i][j][1]);}
                }
              
              var
               les$2=
                /* :: */[0,
                 /* tuple */[0,colspan-2,/* CenterA */1,/* TDstring */[0,s]],
                 les$1];
              
              var
               les$3=
                /* :: */[0,
                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                 les$2];
              
              return loop(les$3,next_j);
              }
            };
        
        var les=loop(/* [] */0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     alone_bar_txt=
      function(i)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i]["length"])
             {return les;}
            else
             {var x=t[1][i][j][2];
              
              var
               loop$1=
                function(j)
                 {if(j=t[1][i]["length"])
                   {return j;}
                  else
                   {if("unknown primitive:caml_equal")
                     {return loop$1(j+1);}
                    else
                     {return j;}
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var colspan=3*(next_j-j)-2;
              
              var
               les$1=
                /* :: */[0,
                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                 les];
              
              if
               ((t[1][i][j][1]=/* Nothing */0)||
                (t[1][i+1][j][1]=/* Nothing */0))
               {var
                 les$2=
                  /* :: */[0,
                   /* tuple */[0,
                    colspan,
                    /* LeftA */0,
                    [/* TDstring */0,"&nbsp;"]],
                   les$1];
                }
              else
               {var
                 loop$2=
                  function(j)
                   {if(j=next_j)
                     {return /* true */1;}
                    else
                     {if(phony$1(t[1][i+1][j][1]))
                       {return loop$2(j+1);}
                      else
                       {return /* false */0;}
                      }
                    };
                
                var all_ph=loop$2(j);
                
                if(all_ph){var s="&nbsp;";}else{var s="|";}
                
                var
                 les$2=
                  /* :: */[0,
                   /* tuple */[0,colspan,/* CenterA */1,/* TDstring */[0,s]],
                   les$1];
                }
              
              var
               les$3=
                /* :: */[0,
                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                 les$2];
              
              return loop(les$3,next_j);
              }
            };
        
        var les=loop(/* [] */0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     exist_several_branches=
      function(i,k)
       {var
         loop=
          function(j)
           {if(j=t[1][i]["length"])
             {return /* false */0;}
            else
             {var x=t[1][i][j][2];
              
              var e=t[1][k][j][1];
              
              var
               loop1=
                function(j)
                 {if(j=t[1][i]["length"])
                   {return /* false */0;}
                  else
                   {if(t[1][i][j][1]=/* Nothing */0)
                     {return loop(j);}
                    else
                     {if("unknown primitive:caml_notequal")
                       {return loop(j);}
                      else
                       {if("unknown primitive:caml_notequal")
                         {return /* true */1;}
                        else
                         {return loop1(j+1);}
                        }
                      }
                    }
                  };
              
              return loop1(j+1);
              }
            };
        
        return loop(0);
        };
    
    var
     hbars_txt=
      function(i,k)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i]["length"])
             {return les;}
            else
             {var e=t[1][i][j][1];
              
              var x=t[1][i][j][2];
              
              var
               loop$1=
                function(j)
                 {if(j=t[1][i]["length"])
                   {return j;}
                  else
                   {if((e=/* Nothing */0)&&(t[1][i][j][1]=/* Nothing */0))
                     {return loop$1(j+1);}
                    else
                     {if("unknown primitive:caml_equal")
                       {return loop$1(j+1);}
                      else
                       {return j;}
                      }
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var
               loop1=
                function(les,l)
                 {if(l=next_j)
                   {return loop(les,next_j);}
                  else
                   {var y=t[1][k][l];
                    
                    var match=y[1];
                    
                    if("unknown primitive:isint")
                     {var next_l=l+1;}
                    else
                     {var
                       loop$2=
                        function(l)
                         {if(l=t[1][i]["length"])
                           {return l;}
                          else
                           {if("unknown primitive:caml_equal")
                             {return loop$2(l+1);}
                            else
                             {return l;}
                            }
                          };
                      
                      var next_l=loop$2(l+1);
                      }
                    
                    if(next_l>next_j)
                     {Printf["eprintf"]
                       ([/* Format */0,
                         [/* String_literal */11,
                          "assert false i ",
                          [/* Int */4,
                           /* Int_d */0,
                           /* No_padding */0,
                           /* No_precision */0,
                           [/* String_literal */11,
                            " k ",
                            [/* Int */4,
                             /* Int_d */0,
                             /* No_padding */0,
                             /* No_precision */0,
                             [/* String_literal */11,
                              " l ",
                              [/* Int */4,
                               /* Int_d */0,
                               /* No_padding */0,
                               /* No_precision */0,
                               [/* String_literal */11,
                                " next_l ",
                                [/* Int */4,
                                 /* Int_d */0,
                                 /* No_padding */0,
                                 /* No_precision */0,
                                 [/* String_literal */11,
                                  " next_j ",
                                  [/* Int */4,
                                   /* Int_d */0,
                                   /* No_padding */0,
                                   /* No_precision */0,
                                   [/* Char_literal */12,10,/* End_of_format */0]]]]]]]]]]],
                         "assert false i %d k %d l %d next_l %d next_j %d\n"],
                        i,
                        k,
                        l,
                        next_l,
                        next_j),
                      Pervasives["flush"](Pervasives["stderr"])}
                    else
                     {}
                    
                    var next_l$1=Pervasives["min"](next_l,next_j);
                    
                    var colspan=3*(next_l$1-l)-2;
                    
                    var match$1=t[1][i][l][1];
                    
                    var match$2=t[1][i+1][l][1];
                    
                    var exit;
                    
                    if("unknown primitive:isint")
                     {exit=334;}
                    else
                     {if("unknown primitive:isint")
                       {exit=334;}
                      else
                       {var
                         ph=
                          function(s)
                           {if(phony$1(t[1][k][l][1]))
                             {return [/* TDstring */0,"&nbsp;"];}
                            else
                             {return s;}
                            };
                        
                        if((l=j)&&(next_l$1=next_j))
                         {var
                           les$1=
                            /* :: */[0,
                             [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                             les];
                          
                          var s=ph([/* TDstring */0,"|"]);
                          
                          var
                           les$2=
                            /* :: */[0,/* tuple */[0,colspan,/* CenterA */1,s],les$1];
                          
                          var
                           les$3=
                            /* :: */[0,
                             [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                             les$2];
                          }
                        else
                         {if(l=j)
                           {var
                             les$4=
                              /* :: */[0,
                               [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                               les];
                            
                            var s$1=ph([/* TDhr */1,/* RightA */2]);
                            
                            var
                             les$5=
                              /* :: */[0,/* tuple */[0,colspan,/* RightA */2,s$1],les$4];
                            
                            var s$2=ph([/* TDhr */1,/* CenterA */1]);
                            
                            var
                             les$3=
                              /* :: */[0,/* tuple */[0,1,/* LeftA */0,s$2],les$5];
                            }
                          else
                           {if(next_l$1=next_j)
                             {var s$3=ph([/* TDhr */1,/* CenterA */1]);
                              
                              var les$6=/* :: */[0,/* tuple */[0,1,/* LeftA */0,s$3],les];
                              
                              var s$4=ph([/* TDhr */1,/* LeftA */0]);
                              
                              var
                               les$7=
                                /* :: */[0,/* tuple */[0,colspan,/* LeftA */0,s$4],les$6];
                              
                              var
                               les$3=
                                /* :: */[0,
                                 [/* tuple */0,1,/* LeftA */0,[/* TDstring */0,"&nbsp;"]],
                                 les$7];
                              }
                            else
                             {var s$5=ph([/* TDhr */1,/* CenterA */1]);
                              
                              var
                               les$3=
                                /* :: */[0,/* tuple */[0,colspan+2,/* LeftA */0,s$5],les];
                              }
                            }
                          }
                        }
                      }
                    
                    switch(exit)
                     {case 334:
                       var
                        les$3=
                         /* :: */[0,
                          /* tuple */[0,
                           colspan+2,
                           /* LeftA */0,
                           [/* TDstring */0,"&nbsp;"]],
                          les];
                       
                      }
                    
                    return loop1(les$3,next_l$1);
                    }
                  };
              
              return loop1(les,j);
              }
            };
        
        var les=loop(/* [] */0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     loop=
      function(hts,i)
       {if(i=t[1]["length"])
         {return hts;}
        else
         {if((i=t[1]["length"]-1)&&all_empty(i))
           {return hts;}
          else
           {var hts$1=/* :: */[0,line_elem_txt(i),hts];
            
            if(i<t[1]["length"]-1)
             {var hts$2=/* :: */[0,vbars_txt(i+1,i),hts$1];
              
              if(exist_several_branches(i,i))
               {var
                 hts$3=
                  /* :: */[0,
                   alone_bar_txt(i),
                   /* :: */[0,hbars_txt(i,i),hts$2]];
                }
              else
               {var hts$3=hts$2;}
              
              if
               (exist_several_branches(i,i+1)&&
                (i<t[1]["length"]-2||!all_empty(i+1)))
               {var
                 hts$4=
                  /* :: */[0,
                   vbars_txt(i+1,i+1),
                   /* :: */[0,hbars_txt(i,i+1),hts$3]];
                }
              else
               {var hts$4=hts$3;}
              }
            else
             {var hts$4=hts$1;}
            
            return loop(hts$4,i+1);
            }
          }
        };
    
    var hts=loop(/* [] */0,0);
    
    return $$Array["of_list"](List["rev"](hts));
    };

var
 ancestors=
  function(d)
   {var
     loop=
      function(i)
       {if(i=d[1]["length"])
         {return /* [] */0;}
        else
         {var n=d[1][i];
          
          if(n[1]=/* [] */0)
           {return /* :: */[0,i,loop(i+1)];}
          else
           {return loop(i+1);}
          }
        };
    
    return loop(0);
    };

var
 get_children=
  function(d,parents)
   {var
     merge_children=
      function(children,el)
       {return List["fold_right"]
                (function(param,children)
                  {var x=param[1];
                   
                   var exit;
                   
                   if(typeof x=="number")
                    {switch(x){case 0:exit=308;}}
                   else
                    {switch(x[0])
                      {case 0:
                        var e=d[1][x[1]];
                        
                        return List["fold_right"]
                                (function(c,children)
                                  {if(List["mem"](c,children))
                                    {return children;}
                                   else
                                    {return /* :: */[0,c,children];}
                                   },
                                 e[3],
                                 children);
                        
                       case 1:exit=308;
                       }}
                   
                   switch(exit){case 308:return /* [] */0;}
                   },
                 el,
                 children);
        };
    
    return merge_children(/* [] */0,parents);
    };

var
 get_block=
  function(t,i,j)
   {if(j=t[1][i]["length"])
     {return /* None */0;}
    else
     {if(j=t[1][i]["length"]-1)
       {var x=t[1][i][j];
        
        return /* Some */[0,
                /* tuple */[0,
                 /* :: */[0,/* tuple */[0,x[1],1],/* [] */0],
                 1,
                 x[2]]];
        }
      else
       {var x$1=t[1][i][j];
        
        var y=t[1][i][j+1];
        
        if("unknown primitive:caml_equal")
         {var match=get_block(t,i,j+1);
          
          var exit;
          
          if(match)
           {var match$1=match[1];
            
            var match$2=match$1[1];
            
            if(match$2)
             {var mpc=match$1[2];
              
              var list=match$2[2];
              
              var match$3=match$2[1];
              
              var c1=match$3[2];
              
              var x1=match$3[1];
              
              if("unknown primitive:caml_equal")
               {var
                 match$4=
                  /* tuple */[0,
                   /* :: */[0,/* tuple */[0,x1,c1+1],list],
                   Pervasives["max"](mpc,c1+1)];
                }
              else
               {var
                 match$4=
                  /* tuple */[0,
                   /* :: */[0,
                    /* tuple */[0,x$1[1],1],
                    /* :: */[0,/* tuple */[0,x1,c1],list]],
                   Pervasives["max"](mpc,c1)];
                }
              
              return /* Some */[0,
                      /* tuple */[0,match$4[1],match$4[2],match$1[3]]];
              }
            else
             {exit=303;}
            }
          else
           {exit=303;}
          
          switch(exit)
           {case 303:throw [0,Assert_failure,[0,"odoc_dag2html.ml",346,13]];}
          }
        else
         {return /* Some */[0,
                  /* tuple */[0,
                   /* :: */[0,/* tuple */[0,x$1[1],1],/* [] */0],
                   1,
                   x$1[2]]];
          }
        }
      }
    };

var
 group_by_common_children=
  function(d,list)
   {var compare=function(x,y){return "unknown primitive:caml_int_compare";};
    
    var O=[0,compare];
    
    var S=Set["Make"](O);
    
    var
     nlcsl=
      List["map"]
       (function(id)
         {var n=d[1][id];
          
          var cs=List["fold_right"](S[4],n[3],S[1]);
          
          return /* tuple */[0,/* :: */[0,id,/* [] */0],cs];
          },
        list);
    
    var
     loop=
      function(param)
       {if(param)
         {var rest=param[2];
          
          var match=param[1];
          
          var cs=match[2];
          
          var nl=match[1];
          
          var
           loop1=
            function(beg,param$1)
             {if(param$1)
               {var rest1=param$1[2];
                
                var match$1=param$1[1];
                
                var cs1=match$1[2];
                
                var nl1=match$1[1];
                
                if(S[2](S[8](cs,cs1)))
                 {return loop1(/* :: */[0,/* tuple */[0,nl1,cs1],beg],rest1);}
                else
                 {return loop
                          (/* :: */[0,
                            /* tuple */[0,Pervasives["@"](nl,nl1),S[7](cs,cs1)],
                            Pervasives["@"](List["rev"](beg),rest1)]);
                  }
                }
              else
               {return /* :: */[0,/* tuple */[0,nl,cs],loop(rest)];}
              };
          
          return loop1(/* [] */0,rest);
          }
        else
         {return /* [] */0;}
        };
    
    var nlcsl$1=loop(nlcsl);
    
    return List["fold_right"]
            (function(param,a)
              {var span=new_span_id(/* () */0);
               
               return List["fold_right"]
                       (function(n,a)
                         {return /* :: */[0,/* record */[0,/* Elem */[0,n],span],a];},
                        param[1],
                        a);
               },
             nlcsl$1,
             /* [] */0);
    };

var copy_data=function(d){return /* record */[0,d[1],d[2]];};

var
 insert_columns=
  function(t,nb,j)
   {var t1="unknown primitive:caml_make_vect";
    
    for(var i$2=0;i$2<=t[1]["length"]-1;i$2++)
     {var line=t[1][i$2];
      
      var line1="unknown primitive:caml_make_vect";
      
      t1[i$2]=line1,0;
      var
       loop=
        function(k)
         {if(k=line["length"])
           {return /* () */0;}
          else
           {if(k<j)
             {line1[k]=copy_data(line[k]),0}
            else
             {if(k=j)
               {for(var r=0;r<=nb;r++){line1[k+r]=copy_data(line[k]),0}}
              else
               {line1[k+nb]=copy_data(line[k]),0}
              }
            
            return loop(k+1);
            }
          };
      
      loop(0)}
    
    return /* record */[0,t1];
    };

var
 gcd=
  function(a,b)
   {if(a<b){return gcd(b,a);}else{if(b=0){return a;}else{return gcd(b,a%b);}}};

var
 treat_new_row=
  function(d,t)
   {var i$2=t[1]["length"]-1;
    
    var
     loop=
      function(t,i,j)
       {var match=get_block(t,i,j);
        
        if(match)
         {var match$1=match[1];
          
          var parents=match$1[1];
          
          var children=get_children(d,parents);
          
          if(children=/* [] */0)
           {var
             children$1=
              /* :: */[0,
               /* record */[0,/* Nothing */0,new_span_id(/* () */0)],
               /* [] */0];
            }
          else
           {var
             children$1=
              List["map"]
               (function(n)
                 {return /* record */[0,
                          /* Elem */[0,n],
                          new_span_id(/* () */0)];
                  },
                children);
            }
          
          var
           simple_parents_colspan=
            List["fold_left"](function(x,param){return x+param[2];},0,parents);
          
          if((simple_parents_colspan%List["length"](children$1))=0)
           {var j$1=j+simple_parents_colspan;
            
            var cnt=simple_parents_colspan/List["length"](children$1);
            
            var
             children$2=
              List["fold_right"]
               (function(d,list)
                 {var
                   loop$1=
                    function(cnt,list)
                     {if(cnt=1)
                       {return /* :: */[0,d,list];}
                      else
                       {return /* :: */[0,copy_data(d),loop$1(cnt-1,list)];}
                      };
                  
                  return loop$1(cnt,list);
                  },
                children$1,
                /* [] */0);
            
            var match$2=loop(t,i,j$1);
            
            return /* tuple */[0,
                    match$2[1],
                    Pervasives["@"](children$2,match$2[2])];
            }
          else
           {var
             parent_colspan=
              List["fold_left"]
               (function(scm,param)
                 {var c=param[2];var g=gcd(scm,c);return scm/g*c;},
                match$1[2],
                parents);
            
            var
             match$3=
              List["fold_left"]
               (function(param,param$1)
                 {var c=param$1[2];
                  
                  var j$2=param[3];
                  
                  var to_add=parent_colspan/c-1;
                  
                  var
                   loop$1=
                    function(cc,t,j)
                     {if(cc=0)
                       {return t;}
                      else
                       {var t$1=insert_columns(t,to_add,j);
                        
                        return loop$1(cc-1,t$1,j+to_add+1);
                        }
                      };
                  
                  var t$1=loop$1(c,param[1],j$2);
                  
                  return /* tuple */[0,
                          t$1,
                          /* :: */[0,
                           /* tuple */[0,param$1[1],parent_colspan],
                           param[2]],
                          j$2+parent_colspan];
                  },
                /* tuple */[0,t,/* [] */0,j],
                parents);
            
            var parents$1=List["rev"](match$3[2]);
            
            var parents_colspan=parent_colspan*List["length"](parents$1);
            
            var children_colspan=List["length"](children$1);
            
            var g=gcd(parents_colspan,children_colspan);
            
            var cnt$1=children_colspan/g;
            
            var
             match$4=
              List["fold_left"]
               (function(param,param$1)
                 {var
                   loop$1=
                    function(cc,t,j)
                     {if(cc=0)
                       {return /* tuple */[0,t,j];}
                      else
                       {var t$1=insert_columns(t,cnt$1-1,j);
                        
                        var j$1=j+cnt$1;
                        
                        return loop$1(cc-1,t$1,j$1);
                        }
                      };
                  
                  return loop$1(param$1[2],param[1],param[2]);
                  },
                /* tuple */[0,match$3[1],j],
                parents$1);
            
            var cnt$2=parents_colspan/g;
            
            var
             children$3=
              List["fold_right"]
               (function(d,list)
                 {var
                   loop$1=
                    function(cnt,list)
                     {if(cnt=0)
                       {return list;}
                      else
                       {return /* :: */[0,d,loop$1(cnt-1,list)];}
                      };
                  
                  return loop$1(cnt$2,list);
                  },
                children$1,
                /* [] */0);
            
            var match$5=loop(match$4[1],i,match$4[2]);
            
            return /* tuple */[0,
                    match$5[1],
                    Pervasives["@"](children$3,match$5[2])];
            }
          }
        else
         {return /* tuple */[0,t,/* [] */0];}
        };
    
    return loop(t,i$2,0);
    };

var
 down_it=
  function(t,i,k,y)
   {t[1][t[1]["length"]-1][k]=t[1][i][k],0;
    for(var r=i;r<=t[1]["length"]-2;r++)
     {t[1][r][k]=
      /* record */[0,
       /* Ghost */[1,new_ghost_id(/* () */0)],
       new_span_id(/* () */0)],
      0}
    };

var
 equilibrate=
  function(t)
   {var ilast=t[1]["length"]-1;
    
    var last=t[1][ilast];
    
    var len=last["length"];
    
    var
     loop=
      function(j)
       {if(j=len)
         {return /* () */0;}
        else
         {var match=last[j][1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 0:exit=258;}}
          else
           {switch(match[0])
             {case 0:
               var x=match[1];
               
               var
                loop1=
                 function(i)
                  {if(i=ilast)
                    {return loop(j+1);}
                   else
                    {var
                      loop2=
                       function(k)
                        {if(k=len)
                          {return loop1(i+1);}
                         else
                          {var match$1=t[1][i][k][1];
                           
                           var exit$1;
                           
                           if(typeof match$1=="number")
                            {switch(match$1){case 0:exit$1=257;}}
                           else
                            {switch(match$1[0])
                              {case 0:
                                var y=match$1[1];
                                
                                if("unknown primitive:caml_equal")
                                 {down_it(t,i,k,y);return loop(0);}
                                else
                                 {exit$1=257;}
                                
                               case 1:exit$1=257;
                               }}
                           
                           switch(exit$1){case 257:return loop2(k+1);}
                           }
                         };
                     
                     return loop2(0);
                     }
                   };
               
               return loop1(0);
               
              case 1:exit=258;
              }}
          
          switch(exit){case 258:return loop(j+1);}
          }
        };
    
    return loop(0);
    };

var
 group_elem=
  function(t)
   {for(var i$2=0;i$2<=t[1]["length"]-2;i$2++)
     {for(var j=1;j<=t[1][0]["length"]-1;j++)
       {var match=t[1][i$2+1][j-1][1];
        
        var match$1=t[1][i$2+1][j][1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){case 0:exit=255;}}
        else
         {switch(match[0])
           {case 0:
             if(typeof match$1=="number")
              {switch(match$1){case 0:exit=255;}}
             else
              {switch(match$1[0])
                {case 0:
                  if("unknown primitive:caml_equal")
                   {t[1][i$2][j][2]=t[1][i$2][j-1][2],0}
                  else
                   {exit=255;}
                  
                 case 1:exit=255;
                 }}
             
            case 1:exit=255;
            }}
        
        switch(exit){case 255:}
        }
      }
    };

var
 group_ghost=
  function(t)
   {for(var i$2=0;i$2<=t[1]["length"]-2;i$2++)
     {for(var j=1;j<=t[1][0]["length"]-1;j++)
       {var match=t[1][i$2+1][j-1][1];
        
        var match$1=t[1][i$2+1][j][1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){case 0:exit=253;}}
        else
         {switch(match[0])
           {case 0:exit=253;
            case 1:
             if(typeof match$1=="number")
              {switch(match$1){case 0:exit=253;}}
             else
              {switch(match$1[0])
                {case 0:exit=253;
                 case 1:
                  if("unknown primitive:caml_equal")
                   {t[1][i$2+1][j]=
                    /* record */[0,/* Ghost */[1,match[1]],t[1][i$2+1][j-1][2]],
                    0}
                  else
                   {}
                  
                 }}
             
            }}
        
        switch(exit){case 253:}
        
        var match$2=t[1][i$2][j-1][1];
        
        var match$3=t[1][i$2][j][1];
        
        var exit$1;
        
        if(typeof match$2=="number")
         {switch(match$2){case 0:exit$1=252;}}
        else
         {switch(match$2[0])
           {case 0:exit$1=252;
            case 1:
             if(typeof match$3=="number")
              {switch(match$3){case 0:exit$1=252;}}
             else
              {switch(match$3[0])
                {case 0:exit$1=252;
                 case 1:
                  if("unknown primitive:caml_equal")
                   {t[1][i$2][j]=
                    /* record */[0,/* Ghost */[1,match$2[1]],t[1][i$2][j-1][2]],
                    0;
                    if(i$2>0){t[1][i$2-1][j][2]=t[1][i$2-1][j-1][2],0}else{}
                    }
                  else
                   {}
                  
                 }}
             
            }}
        
        switch(exit$1){case 252:}
        }
      }
    };

var
 group_children=
  function(t)
   {for(var i$2=0;i$2<=t[1]["length"]-1;i$2++)
     {var line=t[1][i$2];
      
      var len=line["length"];
      
      for(var j=1;j<=len-1;j++)
       {if("unknown primitive:caml_equal"&&line[j][1]!=/* Nothing */0)
         {line[j][2]=line[j-1][2],0}
        else
         {}
        }
      }
    };

var
 group_span_by_common_children=
  function(d,t)
   {var compare=function(x,y){return "unknown primitive:caml_int_compare";};
    
    var O=[0,compare];
    
    var S=Set["Make"](O);
    
    var i$2=t[1]["length"]-1;
    
    var line=t[1][i$2];
    
    var
     loop=
      function(j,cs)
       {if(j=line["length"])
         {return /* () */0;}
        else
         {var match=line[j][1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 0:exit=244;}}
          else
           {switch(match[0])
             {case 0:
               var n=d[1][match[1]];
               
               var curr_cs=List["fold_right"](S[4],n[3],S[1]);
               
               if(S[2](S[8](cs,curr_cs)))
                {return loop(j+1,curr_cs);}
               else
                {line[j][2]=line[j-1][2],0;return loop(j+1,S[7](cs,curr_cs));}
               
              case 1:exit=244;
              }}
          
          switch(exit){case 244:return loop(j+1,S[1]);}
          }
        };
    
    return loop(0,S[1]);
    };

var
 find_same_parents=
  function(t,i,j1,j2,j3,j4)
   {var
     loop=
      function(i,j1,j2,j3,j4)
       {if(i=0)
         {return /* tuple */[0,i,j1,j2,j3,j4];}
        else
         {var x1=t[i-1][j1];
          
          var x2=t[i-1][j2];
          
          var x3=t[i-1][j3];
          
          var x4=t[i-1][j4];
          
          if("unknown primitive:caml_equal")
           {return /* tuple */[0,i,j1,j2,j3,j4];}
          else
           {var
             loop$1=
              function(j)
               {if(j<0)
                 {return 0;}
                else
                 {if("unknown primitive:caml_equal")
                   {return loop$1(j-1);}
                  else
                   {return j+1;}
                  }
                };
            
            var j1$1=loop$1(j1-1);
            
            var
             loop$2=
              function(j)
               {if(j>=t[i]["length"])
                 {return j-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return loop$2(j+1);}
                  else
                   {return j-1;}
                  }
                };
            
            var j2$1=loop$2(j2+1);
            
            var
             loop$3=
              function(j)
               {if(j<0)
                 {return 0;}
                else
                 {if("unknown primitive:caml_equal")
                   {return loop$3(j-1);}
                  else
                   {return j+1;}
                  }
                };
            
            var j3$1=loop$3(j3-1);
            
            var
             loop$4=
              function(j)
               {if(j>=t[i]["length"])
                 {return j-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return loop$4(j+1);}
                  else
                   {return j-1;}
                  }
                };
            
            var j4$1=loop$4(j4+1);
            
            return loop(i-1,j1$1,j2$1,j3$1,j4$1);
            }
          }
        };
    
    return loop(i,j1,j2,j3,j4);
    };

var
 find_linked_children=
  function(t,i,j1,j2,j3,j4)
   {var
     loop=
      function(i,j1,j2,j3,j4)
       {if(i=t["length"]-1)
         {return /* tuple */[0,j1,j2,j3,j4];}
        else
         {var x1=t[i][j1];
          
          var x2=t[i][j2];
          
          var x3=t[i][j3];
          
          var x4=t[i][j4];
          
          var
           loop$1=
            function(j)
             {if(j<0)
               {return 0;}
              else
               {if("unknown primitive:caml_equal")
                 {return loop$1(j-1);}
                else
                 {return j+1;}
                }
              };
          
          var j1$1=loop$1(j1-1);
          
          var
           loop$2=
            function(j)
             {if(j>=t[i]["length"])
               {return j-1;}
              else
               {if("unknown primitive:caml_equal")
                 {return loop$2(j+1);}
                else
                 {return j-1;}
                }
              };
          
          var j2$1=loop$2(j2+1);
          
          var
           loop$3=
            function(j)
             {if(j<0)
               {return 0;}
              else
               {if("unknown primitive:caml_equal")
                 {return loop$3(j-1);}
                else
                 {return j+1;}
                }
              };
          
          var j3$1=loop$3(j3-1);
          
          var
           loop$4=
            function(j)
             {if(j>=t[i]["length"])
               {return j-1;}
              else
               {if("unknown primitive:caml_equal")
                 {return loop$4(j+1);}
                else
                 {return j-1;}
                }
              };
          
          var j4$1=loop$4(j4+1);
          
          return loop(i+1,j1$1,j2$1,j3$1,j4$1);
          }
        };
    
    return loop(i,j1,j2,j3,j4);
    };

var
 mirror_block=
  function(t,i1,i2,j1,j2)
   {for(var i$2=i1;i$2<=i2;i$2++)
     {var line=t[i$2];
      
      var
       loop=
        function(j1,j2)
         {if(j1>=j2)
           {return /* () */0;}
          else
           {var v=line[j1];
            
            line[j1]=line[j2],0;
            line[j2]=v,0;
            return loop(j1+1,j2-1);
            }
          };
      
      loop(j1,j2)}
    };

var
 exch_blocks=
  function(t,i1,i2,j1,j2,j3,j4)
   {for(var i$2=i1;i$2<=i2;i$2++)
     {var line=t[i$2];
      
      var saved=$$Array["copy"](line);
      
      for(var j=j1;j<=j2;j++){line[j4-j2+j]=saved[j],0}
      
      for(var j$1=j3;j$1<=j4;j$1++){line[j1-j3+j$1]=saved[j$1],0}
      }
    };

var
 find_block_with_parents=
  function(t,i,jj1,jj2,jj3,jj4)
   {var
     loop=
      function(ii,jj1,jj2,jj3,jj4)
       {var match=find_same_parents(t,i,jj1,jj2,jj3,jj4);
        
        var njj4=match[5];
        
        var njj3=match[4];
        
        var njj2=match[3];
        
        var njj1=match[2];
        
        var nii=match[1];
        
        if(nii!=ii||njj1!=jj1||njj2!=jj2||njj3!=jj3||njj4!=jj4)
         {var nii$1=Pervasives["min"](ii,nii);
          
          var match$1=find_linked_children(t,nii$1,njj1,njj2,njj3,njj4);
          
          var jj4$1=match$1[4];
          
          var jj3$1=match$1[3];
          
          var jj2$1=match$1[2];
          
          var jj1$1=match$1[1];
          
          if(njj1!=jj1$1||njj2!=jj2$1||njj3!=jj3$1||njj4!=jj4$1)
           {return loop(nii$1,jj1$1,jj2$1,jj3$1,jj4$1);}
          else
           {return /* tuple */[0,nii$1,jj1$1,jj2$1,jj3$1,jj4$1];}
          }
        else
         {return /* tuple */[0,ii,jj1,jj2,jj3,jj4];}
        };
    
    return loop(i,jj1,jj2,jj3,jj4);
    };

var
 push_to_right=
  function(d,t,i,j1,j2)
   {var line=t[i];
    
    var
     loop=
      function(j)
       {if(j=j2)
         {return j-1;}
        else
         {var x=line[j-1][1];
          
          if("unknown primitive:isint")
           {var ini_jj1=j-1;}
          else
           {var
             same_value=
              function(j)
               {if(j<0)
                 {return 0;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value(j-1);}
                  else
                   {return j+1;}
                  }
                };
            
            var ini_jj1=same_value(j-2);
            }
          
          var jj2=j-1;
          
          var x$1=line[j][1];
          
          if("unknown primitive:isint")
           {var jj4=j;}
          else
           {var
             same_value$1=
              function(j)
               {if(j>=line["length"])
                 {return j-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value$1(j+1);}
                  else
                   {return j-1;}
                  }
                };
            
            var jj4=same_value$1(j+1);
            }
          
          var match=find_block_with_parents(t,i,ini_jj1,jj2,j,jj4);
          
          var jj4$1=match[5];
          
          var jj3=match[4];
          
          var jj2$1=match[3];
          
          var jj1=match[2];
          
          var ii=match[1];
          
          if(jj4$1<j2&&jj2$1<jj3)
           {exch_blocks(t,ii,i,jj1,jj2$1,jj3,jj4$1);return loop(jj4$1+1);}
          else
           {if(jj4$1<j2&&(jj1=ini_jj1)&&jj2$1<=jj4$1)
             {mirror_block(t,ii,i,jj1,jj4$1);return loop(jj4$1+1);}
            else
             {return j-1;}
            }
          }
        };
    
    return loop(j1+1);
    };

var
 push_to_left=
  function(d,t,i,j1,j2)
   {var line=t[i];
    
    var
     loop=
      function(j)
       {if(j=j1)
         {return j+1;}
        else
         {var x=line[j][1];
          
          if("unknown primitive:isint")
           {var jj1=j;}
          else
           {var
             same_value=
              function(j)
               {if(j<0)
                 {return 0;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value(j-1);}
                  else
                   {return j+1;}
                  }
                };
            
            var jj1=same_value(j-1);
            }
          
          var jj3=j+1;
          
          var x$1=line[j+1][1];
          
          if("unknown primitive:isint")
           {var ini_jj4=j+1;}
          else
           {var
             same_value$1=
              function(j)
               {if(j>=line["length"])
                 {return j-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value$1(j+1);}
                  else
                   {return j-1;}
                  }
                };
            
            var ini_jj4=same_value$1(j+2);
            }
          
          var match=find_block_with_parents(t,i,jj1,j,jj3,ini_jj4);
          
          var jj4=match[5];
          
          var jj3$1=match[4];
          
          var jj2=match[3];
          
          var jj1$1=match[2];
          
          var ii=match[1];
          
          if(jj1$1>j1&&jj2<jj3$1)
           {exch_blocks(t,ii,i,jj1$1,jj2,jj3$1,jj4);return loop(jj1$1-1);}
          else
           {if(jj1$1>j1&&(jj4=ini_jj4)&&jj3$1>=jj1$1)
             {mirror_block(t,ii,i,jj1$1,jj4);return loop(jj1$1-1);}
            else
             {return j+1;}
            }
          }
        };
    
    return loop(j2-1);
    };

var
 fill_gap=
  function(d,t,i,j1,j2)
   {var t1=$$Array["copy"](t[1]);
    
    for(var i$1=0;i$1<=t[1]["length"]-1;i$1++)
     {t1[i$1]=$$Array["copy"](t[1][i$1]),0;
      for(var j=0;j<=t1[i$1]["length"]-1;j++)
       {t1[i$1][j]=copy_data(t[1][i$1][j]),0}
      }
    
    var t1$1=t1;
    
    var j2$1=push_to_left(d,t1$1,i,j1,j2);
    
    var j1$1=push_to_right(d,t1$1,i,j1,j2$1);
    
    if(j1$1=j2$1-1)
     {var line=t1$1[i-1];
      
      var x=line[j1$1][2];
      
      var y=line[j2$1][2];
      
      var
       loop=
        function(y,j)
         {if(j>=line["length"])
           {return /* () */0;}
          else
           {if("unknown primitive:caml_equal"||"unknown primitive:caml_equal")
             {var y$1=line[j][2];
              
              line[j][2]=x,0;
              if(i>0){t1$1[i-1][j][2]=t1$1[i-1][j-1][2],0}else{}
              
              return loop(y$1,j+1);
              }
            else
             {return 0;}
            }
          };
      
      loop(y,j2$1);
      return /* Some */[0,/* tuple */[0,/* record */[0,t1$1],/* true */1]];
      }
    else
     {return /* None */0;}
    };

var
 treat_gaps=
  function(d,t)
   {var i$2=t[1]["length"]-1;
    
    var
     loop=
      function(t,j)
       {var line=t[1][i$2];
        
        if(j=line["length"])
         {return t;}
        else
         {var y=line[j][1];
          
          var exit;
          
          if(typeof y=="number")
           {switch(y){case 0:exit=181;}}
          else
           {switch(y[0])
             {case 0:
               if("unknown primitive:caml_equal")
                {return loop(t,j+1);}
               else
                {var
                  loop1=
                   function(t,j1)
                    {if(j1<0)
                      {return loop(t,j+1);}
                     else
                      {if("unknown primitive:caml_equal")
                        {var match=fill_gap(d,t,i$2,j1,j);
                         
                         if(match)
                          {var match$1=match[1];
                           
                           var t$1=match$1[1];
                           
                           if(match$1[2])
                            {return loop(t$1,2);}
                           else
                            {return loop(t$1,j+1);}
                           }
                         else
                          {return loop(t,j+1);}
                         }
                       else
                        {return loop1(t,j1-1);}
                       }
                     };
                 
                 return loop1(t,j-2);
                 }
               
              case 1:exit=181;
              }}
          
          switch(exit){case 181:return loop(t,j+1);}
          }
        };
    
    if(t[1][i$2]["length"]=1){return t;}else{return loop(t,2);}
    };

var
 group_span_last_row=
  function(t)
   {var row=t[1][t[1]["length"]-1];
    
    var
     loop=
      function(i)
       {if(i>=row["length"])
         {return /* () */0;}
        else
         {var x=row[i][1];
          
          if("unknown primitive:isint")
           {}
          else
           {if("unknown primitive:caml_equal"){row[i][2]=row[i-1][2],0}else{}}
          
          return loop(i+1);
          }
        };
    
    return loop(1);
    };

var
 has_phony_children=
  function(phony,d,t)
   {var line=t[1][t[1]["length"]-1];
    
    var
     loop=
      function(j)
       {if(j=line["length"])
         {return /* false */0;}
        else
         {var match=line[j][1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 0:exit=174;}}
          else
           {switch(match[0])
             {case 0:
               if(phony(d[1][match[1]]))
                {return /* true */1;}
               else
                {return loop(j+1);}
               
              case 1:exit=174;
              }}
          
          switch(exit){case 174:return loop(j+1);}
          }
        };
    
    return loop(0);
    };

var
 tablify=
  function(phony,no_optim,no_group,d)
   {var a=ancestors(d);
    
    var r=group_by_common_children(d,a);
    
    var t=/* record */[0,[$$Array["of_list"](r)]];
    
    var
     loop=
      function(t)
       {var match=treat_new_row(d,t);
        
        var new_row=match[2];
        
        var t$1=match[1];
        
        if(List["for_all"](function(x){return x[1]=/* Nothing */0;},new_row))
         {return t$1;}
        else
         {var
           t$2=
            /* record */[0,
             $$Array["append"](t$1[1],[$$Array["of_list"](new_row)])];
          
          if(no_group&&!has_phony_children(phony,d,t$2))
           {var t$3=t$2;}
          else
           {if(no_optim)
             {var match$1=/* () */0;}
            else
             {var match$1=equilibrate(t$2);}
            
            var match$2=group_elem(t$2);
            
            var match$3=group_ghost(t$2);
            
            var match$4=group_children(t$2);
            
            var match$5=group_span_by_common_children(d,t$2);
            
            if(no_optim){var t$4=t$2;}else{var t$4=treat_gaps(d,t$2);}
            
            var match$6=group_span_last_row(t$4);
            
            var t$3=t$4;
            }
          
          return loop(t$3);
          }
        };
    
    return loop(t);
    };

var
 fall=
  function(d,t)
   {for(var i$2=1;i$2<=t[1]["length"]-1;i$2++)
     {var line=t[1][i$2];
      
      var
       loop=
        function(j)
         {if(j=line["length"])
           {return /* () */0;}
          else
           {var match=line[j][1];
            
            var exit;
            
            if(typeof match=="number")
             {switch(match){case 0:exit=157;}}
            else
             {switch(match[0])
               {case 0:exit=157;
                case 1:
                 var x=match[1];
                 
                 var
                  loop$1=
                   function(j)
                    {if(j=line["length"])
                      {return j-1;}
                     else
                      {var match$1=line[j][1];
                       
                       var exit$1;
                       
                       if(typeof match$1=="number")
                        {switch(match$1){case 0:exit$1=155;}}
                       else
                        {switch(match$1[0])
                          {case 0:exit$1=155;
                           case 1:
                            if("unknown primitive:caml_equal")
                             {return loop$1(j+1);}
                            else
                             {exit$1=155;}
                            
                           }}
                       
                       switch(exit$1){case 155:return j-1;}
                       }
                     };
                 
                 var j2=loop$1(j+1);
                 
                 var
                  loop$2=
                   function(i)
                    {if(i<0)
                      {return i+1;}
                     else
                      {var line$1=t[1][i];
                       
                       if
                        (((j=0)||"unknown primitive:caml_notequal")&&
                         ((j2=line$1["length"]-1)||"unknown primitive:caml_notequal"))
                        {return loop$2(i-1);}
                       else
                        {return i+1;}
                       }
                     };
                 
                 var i1=loop$2(i$2-1);
                 
                 if(i1=i$2)
                  {var i1$1=i1;}
                 else
                  {if(i1=0)
                    {var i1$1=i1;}
                   else
                    {if(t[1][i1][j][1]=/* Nothing */0)
                      {var i1$1=i1;}
                     else
                      {var i1$1=i$2;}
                     }
                   }
                 
                 if(i1$1<i$2)
                  {for(var k=i$2;k>=i1$1+1;k--)
                    {for(var j$1=j;j$1<=j2;j$1++)
                      {t[1][k][j$1][1]=t[1][k-1][j$1][1],0;
                       if(k<i$2){t[1][k][j$1][2]=t[1][k-1][j$1][2],0}else{}
                       }
                     }
                   
                   for(var l=j;l<=j2;l++)
                    {if((i1$1=0)||(t[1][i1$1-1][l][1]=/* Nothing */0))
                      {t[1][i1$1][l][1]=/* Nothing */0,0}
                     else
                      {t[1][i1$1][l]=
                       (l=j)||"unknown primitive:caml_notequal"
                        ?/* record */[0,
                          /* Ghost */[1,new_ghost_id(/* () */0)],
                          new_span_id(/* () */0)]
                        :copy_data(t[1][i1$1][l-1]),
                       0}
                     }
                   }
                 else
                  {}
                 
                 return loop(j2+1);
                 
                }}
            
            switch(exit){case 157:return loop(j+1);}
            }
          };
      
      loop(0)}
    };

var
 fall2_cool_right=
  function(t,i1,i2,i3,j1,j2)
   {var span=t[1][i2-1][j1][2];
    
    for(var i$2=i2-1;i$2>=0;i$2--)
     {for(var j=j1;j<=j2-1;j++)
       {t[1][i$2][j]=
        i$2-i2+i1>=0
         ?t[1][i$2-i2+i1][j]
         :/* record */[0,/* Nothing */0,new_span_id(/* () */0)],
        0}
      }
    
    for(var i$3=t[1]["length"]-1;i$3>=0;i$3--)
     {for(var j$1=j2;j$1<=t[1][i$3]["length"]-1;j$1++)
       {t[1][i$3][j$1]=
        i$3-i2+i1>=0
         ?t[1][i$3-i2+i1][j$1]
         :/* record */[0,/* Nothing */0,new_span_id(/* () */0)],
        0}
      }
    
    var old_span=t[1][i2-1][j1][2];
    
    var
     loop=
      function(j)
       {if(j=t[1][i2-1]["length"])
         {return /* () */0;}
        else
         {if("unknown primitive:caml_equal")
           {t[1][i2-1][j][2]=span,0;return loop(j+1);}
          else
           {return 0;}
          }
        };
    
    return loop(j1);
    };

var
 fall2_cool_left=
  function(t,i1,i2,i3,j1,j2)
   {var span=t[1][i2-1][j2][2];
    
    for(var i$2=i2-1;i$2>=0;i$2--)
     {for(var j=j1+1;j<=j2;j++)
       {t[1][i$2][j]=
        i$2-i2+i1>=0
         ?t[1][i$2-i2+i1][j]
         :/* record */[0,/* Nothing */0,new_span_id(/* () */0)],
        0}
      }
    
    for(var i$3=t[1]["length"]-1;i$3>=0;i$3--)
     {for(var j$1=j1;j$1>=0;j$1--)
       {t[1][i$3][j$1]=
        i$3-i2+i1>=0
         ?t[1][i$3-i2+i1][j$1]
         :/* record */[0,/* Nothing */0,new_span_id(/* () */0)],
        0}
      }
    
    var old_span=t[1][i2-1][j2][2];
    
    var
     loop=
      function(j)
       {if(j<0)
         {return /* () */0;}
        else
         {if("unknown primitive:caml_equal")
           {t[1][i2-1][j][2]=span,0;return loop(j-1);}
          else
           {return 0;}
          }
        };
    
    return loop(j2);
    };

var
 do_fall2_right=
  function(t,i1,i2,j1,j2)
   {var
     loop_i=
      function(i)
       {if(i<0)
         {return 0;}
        else
         {var
           loop_j=
            function(j)
             {if(j=t[1][i]["length"])
               {return loop_i(i-1);}
              else
               {var match=t[1][i][j][1];
                
                if("unknown primitive:isint")
                 {return loop_j(j+1);}
                else
                 {return i+1;}
                }
              };
          
          return loop_j(j2);
          }
        };
    
    var i3=loop_i(t[1]["length"]-1);
    
    var new_height=i3+i2-i1;
    
    if(new_height>t[1]["length"])
     {var
       loop=
        function(cnt,t)
         {if(cnt=0)
           {return t;}
          else
           {var
             new_line=
              $$Array["init"]
               (t[1][0]["length"],
                function(i)
                 {return /* record */[0,/* Nothing */0,new_span_id(/* () */0)];
                  });
            
            var t$1=/* record */[0,$$Array["append"](t[1],[new_line])];
            
            return loop(cnt-1,t$1);
            }
          };
      
      var t$1=loop(new_height-t[1]["length"],t);
      }
    else
     {var t$1=t;}
    
    fall2_cool_right(t$1,i1,i2,i3,j1,j2);
    return t$1;
    };

var
 do_fall2_left=
  function(t,i1,i2,j1,j2)
   {var
     loop_i=
      function(i)
       {if(i<0)
         {return 0;}
        else
         {var
           loop_j=
            function(j)
             {if(j<0)
               {return loop_i(i-1);}
              else
               {var match=t[1][i][j][1];
                
                if("unknown primitive:isint")
                 {return loop_j(j-1);}
                else
                 {return i+1;}
                }
              };
          
          return loop_j(j1);
          }
        };
    
    var i3=loop_i(t[1]["length"]-1);
    
    var new_height=i3+i2-i1;
    
    if(new_height>t[1]["length"])
     {var
       loop=
        function(cnt,t)
         {if(cnt=0)
           {return t;}
          else
           {var
             new_line=
              $$Array["init"]
               (t[1][0]["length"],
                function(i)
                 {return /* record */[0,/* Nothing */0,new_span_id(/* () */0)];
                  });
            
            var t$1=/* record */[0,$$Array["append"](t[1],[new_line])];
            
            return loop(cnt-1,t$1);
            }
          };
      
      var t$1=loop(new_height-t[1]["length"],t);
      }
    else
     {var t$1=t;}
    
    fall2_cool_left(t$1,i1,i2,i3,j1,j2);
    return t$1;
    };

var
 do_shorten_too_long=
  function(t,i1,j1,j2)
   {for(var i$2=i1;i$2<=t[1]["length"]-2;i$2++)
     {for(var j=j1;j<=j2-1;j++){t[1][i$2][j]=t[1][i$2+1][j],0}}
    
    var i$3=t[1]["length"]-1;
    
    for(var j$1=j1;j$1<=j2-1;j$1++)
     {t[1][i$3][j$1]=/* record */[0,/* Nothing */0,new_span_id(/* () */0)],0}
    
    return t;
    };

var
 try_fall2_right=
  function(t,i,j)
   {var match=t[1][i][j][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=128;}}
    else
     {switch(match[0])
       {case 0:exit=128;
        case 1:
         var
          loop=
           function(i)
            {if(i<0)
              {return 0;}
             else
              {var match$1=t[1][i][j][1];
               
               var exit$1;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit$1=126;}}
               else
                {switch(match$1[0])
                  {case 0:exit$1=126;case 1:return loop(i-1);}}
               
               switch(exit$1){case 126:return i+1;}
               }
             };
         
         var i1=loop(i-1);
         
         var
          loop$1=
           function(i)
            {if(i<0)
              {return /* true */1;}
             else
              {if(j>0&&"unknown primitive:caml_equal")
                {return /* false */0;}
               else
                {return loop$1(i-1);}
               }
             };
         
         var separated1=loop$1(i1-1);
         
         var x=t[1][i][j][2];
         
         var
          loop$2=
           function(j2)
            {if(j2=t[1][i]["length"])
              {return j2;}
             else
              {var match$1=t[1][i][j2];
               
               var match$2=match$1[1];
               
               var exit$1;
               
               if(typeof match$2=="number")
                {switch(match$2){case 0:exit$1=122;}}
               else
                {switch(match$2[0])
                  {case 0:exit$1=122;
                   case 1:
                    var y=match$1[2];
                    
                    if("unknown primitive:caml_equal")
                     {return loop$2(j2+1);}
                    else
                     {exit$1=122;}
                    
                   }}
               
               switch(exit$1){case 122:return j2;}
               }
             };
         
         var j2=loop$2(j+1);
         
         var
          loop$3=
           function(i)
            {if(i=t[1]["length"])
              {return /* true */1;}
             else
              {if(j2=t[1][i]["length"])
                {return /* false */0;}
               else
                {if("unknown primitive:caml_equal")
                  {return /* false */0;}
                 else
                  {return loop$3(i+1);}
                 }
               }
             };
         
         var separated2=loop$3(i+1);
         
         if(!separated1||!separated2)
          {return /* None */0;}
         else
          {return /* Some */[0,do_fall2_right(t,i1,i+1,j,j2)];}
         
        }}
    
    switch(exit){case 128:return /* None */0;}
    };

var
 try_fall2_left=
  function(t,i,j)
   {var match=t[1][i][j][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=118;}}
    else
     {switch(match[0])
       {case 0:exit=118;
        case 1:
         var
          loop=
           function(i)
            {if(i<0)
              {return 0;}
             else
              {var match$1=t[1][i][j][1];
               
               var exit$1;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit$1=116;}}
               else
                {switch(match$1[0])
                  {case 0:exit$1=116;case 1:return loop(i-1);}}
               
               switch(exit$1){case 116:return i+1;}
               }
             };
         
         var i1=loop(i-1);
         
         var
          loop$1=
           function(i)
            {if(i<0)
              {return /* true */1;}
             else
              {if(j<t[1][i]["length"]-1&&"unknown primitive:caml_equal")
                {return /* false */0;}
               else
                {return loop$1(i-1);}
               }
             };
         
         var separated1=loop$1(i1-1);
         
         var x=t[1][i][j][2];
         
         var
          loop$2=
           function(j1)
            {if(j1<0)
              {return j1;}
             else
              {var match$1=t[1][i][j1];
               
               var match$2=match$1[1];
               
               var exit$1;
               
               if(typeof match$2=="number")
                {switch(match$2){case 0:exit$1=112;}}
               else
                {switch(match$2[0])
                  {case 0:exit$1=112;
                   case 1:
                    var y=match$1[2];
                    
                    if("unknown primitive:caml_equal")
                     {return loop$2(j1-1);}
                    else
                     {exit$1=112;}
                    
                   }}
               
               switch(exit$1){case 112:return j1;}
               }
             };
         
         var j1=loop$2(j-1);
         
         var
          loop$3=
           function(i)
            {if(i=t[1]["length"])
              {return /* true */1;}
             else
              {if(j1<0)
                {return /* false */0;}
               else
                {if("unknown primitive:caml_equal")
                  {return /* false */0;}
                 else
                  {return loop$3(i+1);}
                 }
               }
             };
         
         var separated2=loop$3(i+1);
         
         if(!separated1||!separated2)
          {return /* None */0;}
         else
          {return /* Some */[0,do_fall2_left(t,i1,i+1,j1,j)];}
         
        }}
    
    switch(exit){case 118:return /* None */0;}
    };

var
 try_shorten_too_long=
  function(t,i,j)
   {var match=t[1][i][j][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=108;}}
    else
     {switch(match[0])
       {case 0:exit=108;
        case 1:
         var x=t[1][i][j][2];
         
         var
          loop=
           function(j2)
            {if(j2=t[1][i]["length"])
              {return j2;}
             else
              {var match$1=t[1][i][j2];
               
               var match$2=match$1[1];
               
               var exit$1;
               
               if(typeof match$2=="number")
                {switch(match$2){case 0:exit$1=105;}}
               else
                {switch(match$2[0])
                  {case 0:exit$1=105;
                   case 1:
                    var y=match$1[2];
                    
                    if("unknown primitive:caml_equal")
                     {return loop(j2+1);}
                    else
                     {exit$1=105;}
                    
                   }}
               
               switch(exit$1){case 105:return j2;}
               }
             };
         
         var j2=loop(j+1);
         
         var
          loop$1=
           function(i)
            {if(i=t[1]["length"])
              {return i;}
             else
              {var match$1=t[1][i][j][1];
               
               var exit$1;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit$1=102;}}
               else
                {switch(match$1[0])
                  {case 0:return loop$1(i+1);case 1:exit$1=102;}}
               
               switch(exit$1){case 102:return i;}
               }
             };
         
         var i1=loop$1(i+1);
         
         var
          loop$2=
           function(i)
            {if(i=t[1]["length"])
              {return i;}
             else
              {var match$1=t[1][i][j][1];
               
               if("unknown primitive:isint")
                {return loop$2(i+1);}
               else
                {return i;}
               }
             };
         
         var i2=loop$2(i1);
         
         var
          loop$3=
           function(i)
            {if(i=i2)
              {return /* true */1;}
             else
              {if(j>0&&"unknown primitive:caml_equal")
                {return /* false */0;}
               else
                {return loop$3(i+1);}
               }
             };
         
         var separated_left=loop$3(i);
         
         var
          loop$4=
           function(i)
            {if(i=i2)
              {return /* true */1;}
             else
              {if(j2<t[1][i]["length"]&&"unknown primitive:caml_equal")
                {return /* false */0;}
               else
                {return loop$4(i+1);}
               }
             };
         
         var separated_right=loop$4(i);
         
         if(!separated_left||!separated_right)
          {return /* None */0;}
         else
          {if(i2<t[1]["length"])
            {return /* None */0;}
           else
            {return /* Some */[0,do_shorten_too_long(t,i,j,j2)];}
           }
         
        }}
    
    switch(exit){case 108:return /* None */0;}
    };

var
 fall2_right=
  function(t)
   {var
     loop_i=
      function(i,t)
       {if(i<=0)
         {return t;}
        else
         {var
           loop_j=
            function(j,t)
             {if(j<0)
               {return loop_i(i-1,t);}
              else
               {var match=try_fall2_right(t,i,j);
                
                if(match)
                 {var t$1=match[1];return loop_i(t$1[1]["length"]-1,t$1);}
                else
                 {return loop_j(j-1,t);}
                }
              };
          
          return loop_j(t[1][i]["length"]-2,t);
          }
        };
    
    return loop_i(t[1]["length"]-1,t);
    };

var
 fall2_left=
  function(t)
   {var
     loop_i=
      function(i,t)
       {if(i<=0)
         {return t;}
        else
         {var
           loop_j=
            function(j,t)
             {if(j>=t[1][i]["length"])
               {return loop_i(i-1,t);}
              else
               {var match=try_fall2_left(t,i,j);
                
                if(match)
                 {var t$1=match[1];return loop_i(t$1[1]["length"]-1,t$1);}
                else
                 {return loop_j(j+1,t);}
                }
              };
          
          return loop_j(1,t);
          }
        };
    
    return loop_i(t[1]["length"]-1,t);
    };

var
 shorten_too_long=
  function(t)
   {var
     loop_i=
      function(i,t)
       {if(i<=0)
         {return t;}
        else
         {var
           loop_j=
            function(j,t)
             {if(j>=t[1][i]["length"])
               {return loop_i(i-1,t);}
              else
               {var match=try_shorten_too_long(t,i,j);
                
                if(match)
                 {var t$1=match[1];return loop_i(t$1[1]["length"]-1,t$1);}
                else
                 {return loop_j(j+1,t);}
                }
              };
          
          return loop_j(1,t);
          }
        };
    
    return loop_i(t[1]["length"]-1,t);
    };

var
 top_adjust=
  function(t)
   {var
     loop=
      function(i)
       {if(i=t[1]["length"])
         {return i;}
        else
         {var
           loop_j=
            function(j)
             {if(j=t[1][i]["length"])
               {return loop(i+1);}
              else
               {if(t[1][i][j][1]!=/* Nothing */0)
                 {return i;}
                else
                 {return loop_j(j+1);}
                }
              };
          
          return loop_j(0);
          }
        };
    
    var di=loop(0);
    
    if(di>0)
     {for(var i$2=0;i$2<=t[1]["length"]-1-di;i$2++){t[1][i$2]=t[1][i$2+di],0}
      
      return /* record */[0,$$Array["sub"](t[1],0,t[1]["length"]-di)];
      }
    else
     {return t;}
    };

var
 bottom_adjust=
  function(t)
   {var
     loop=
      function(i)
       {if(i<0)
         {return i;}
        else
         {var
           loop_j=
            function(j)
             {if(j=t[1][i]["length"])
               {return loop(i-1);}
              else
               {if(t[1][i][j][1]!=/* Nothing */0)
                 {return i;}
                else
                 {return loop_j(j+1);}
                }
              };
          
          return loop_j(0);
          }
        };
    
    var last_i=loop(t[1]["length"]-1);
    
    if(last_i<t[1]["length"]-1)
     {return /* record */[0,$$Array["sub"](t[1],0,last_i+1)];}
    else
     {return t;}
    };

var
 invert_dag=
  function(d)
   {var d$1=/* record */[0,$$Array["copy"](d[1])];
    
    for(var i$2=0;i$2<=d$1[1]["length"]-1;i$2++)
     {var n=d$1[1][i$2];
      
      d$1[1][i$2]=
      /* record */[0,
       List["map"](function(x){return x;},n[3]),
       n[2],
       List["map"](function(x){return x;},n[1])],
      0}
    
    return d$1;
    };

var
 invert_table=
  function(t)
   {var t$prime=/* record */[0,$$Array["copy"](t[1])];
    
    var len=t[1]["length"];
    
    for(var i$2=0;i$2<=len-1;i$2++)
     {t$prime[1][i$2]=
      $$Array["init"]
       (t[1][0]["length"],
        function(j)
         {var d=t[1][len-1-i$2][j];return /* record */[0,d[1],d[2]];}),
      0;
      if(i$2<len-1)
       {for(var j=0;j<=t$prime[1][i$2]["length"]-1;j++)
         {t$prime[1][i$2][j][2]=t[1][len-2-i$2][j][2],0}
        }
      else
       {}
      }
    
    return t$prime;
    };

var
 table_of_dag=
  function(phony,no_optim,invert,no_group,d)
   {if(invert){var d$1=invert_dag(d);}else{var d$1=d;}
    
    var t=tablify(phony,no_optim,no_group,d$1);
    
    if(invert){var t$1=invert_table(t);}else{var t$1=t;}
    
    var match=fall(/* () */0,t$1);
    
    var t$2=fall2_right(t$1);
    
    var t$3=fall2_left(t$2);
    
    var t$4=shorten_too_long(t$3);
    
    var t$5=top_adjust(t$4);
    
    return bottom_adjust(t$5);
    };

var version="1.01";

var
 strip_spaces=
  function(str)
   {var
     loop=
      function(i)
       {if(i=str["length"])
         {return i;}
        else
         {var match=str[i];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=69;}else{exit=70;}}
          else
           {if(switcher!=23){exit=70;}else{exit=69;}}
          
          switch(exit){case 70:return i;case 69:return loop(i+1);}
          }
        };
    
    var start=loop(0);
    
    var
     loop$1=
      function(i)
       {if(i=-1)
         {return i+1;}
        else
         {var match=str[i];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=66;}else{exit=67;}}
          else
           {if(switcher!=23){exit=67;}else{exit=66;}}
          
          switch(exit){case 67:return i+1;case 66:return loop$1(i-1);}
          }
        };
    
    var stop=loop$1(str["length"]-1);
    
    if((start=0)&&(stop=str["length"]))
     {return str;}
    else
     {if(start>stop)
       {return "";}
      else
       {return $$String["sub"](str,start,stop-start);}
      }
    };

var
 get_line=
  function(ic)
   {try
     {var line=Pervasives["input_line"](ic);
      
      if(line["length"]>0&&(line[0]=35))
       {return get_line(ic);}
      else
       {return /* Some */[0,strip_spaces(line)];}
      }
    catch(exn){if(exn=End_of_file){return /* None */0;}else{throw exn;}}
    };

var
 input_dag=
  function(ic)
   {var
     find=
      function(cnt,s,param)
       {if(param)
         {var n=param[1];
          
          if("unknown primitive:caml_equal")
           {return /* tuple */[0,n,cnt];}
          else
           {return find(cnt-1,s,param[2]);}
          }
        else
         {throw Not_found;}
        };
    
    var
     add_node=
      function(pl,cl,nl,cnt)
       {var cl$1=List["rev"](cl);
        
        var pl$1=List["rev"](pl);
        
        var
         match=
          List["fold_left"]
           (function(param,p)
             {var cnt$1=param[4];
              
              var nl$1=param[3];
              
              var pnl=param[2];
              
              var pl$2=param[1];
              
              try
               {var match$1=find(cnt$1-1,p,nl$1);
                
                return /* tuple */[0,
                        /* :: */[0,match$1[2],pl$2],
                        /* :: */[0,match$1[1],pnl],
                        nl$1,
                        cnt$1];
                }
              catch(exn)
               {if(exn=Not_found)
                 {var n=/* record */[0,/* [] */0,p,/* [] */0];
                  
                  var p$1=cnt$1;
                  
                  return /* tuple */[0,
                          /* :: */[0,p$1,pl$2],
                          /* :: */[0,n,pnl],
                          /* :: */[0,n,nl$1],
                          cnt$1+1];
                  }
                else
                 {throw exn;}
                }
              },
            /* tuple */[0,/* [] */0,/* [] */0,nl,cnt],
            pl$1);
        
        var pl$2=List["rev"](match[1]);
        
        var
         match$1=
          List["fold_left"]
           (function(param,c)
             {var cnt$1=param[3];
              
              var nl$1=param[2];
              
              var cl$2=param[1];
              
              try
               {var match$2=find(cnt$1-1,c,nl$1);
                
                var n=match$2[1];
                
                n[1]=Pervasives["@"](n[1],pl$2),0;
                return /* tuple */[0,/* :: */[0,match$2[2],cl$2],nl$1,cnt$1];
                }
              catch(exn)
               {if(exn=Not_found)
                 {var n$1=/* record */[0,pl$2,c,/* [] */0];
                  
                  var c$1=cnt$1;
                  
                  return /* tuple */[0,
                          /* :: */[0,c$1,cl$2],
                          /* :: */[0,n$1,nl$1],
                          cnt$1+1];
                  }
                else
                 {throw exn;}
                }
              },
            /* tuple */[0,/* [] */0,match[3],match[4]],
            cl$1);
        
        var cl$2=List["rev"](match$1[1]);
        
        List["iter"]
         (function(p){return p[3]=Pervasives["@"](p[3],cl$2),0;},match[2]);
        return /* tuple */[0,match$1[2],match$1[3]];
        };
    
    var
     input_parents=
      function(nl,pl,cnt,param)
       {if(param)
         {var line=param[1];
          
          switch(line)
           {case "":return input_parents(nl,pl,cnt,get_line(ic));
            default:
             var match=line[0];
             
             if(match!=45)
              {if(match!=111)
                {return Pervasives["failwith"](line);}
               else
                {var p=strip_spaces($$String["sub"](line,1,line["length"]-1));
                 
                 if("unknown primitive:caml_string_equal")
                  {return Pervasives["failwith"](line);}
                 else
                  {return input_parents(nl,/* :: */[0,p,pl],cnt,get_line(ic));
                   }
                 }
               }
             else
              {if(pl=/* [] */0)
                {return Pervasives["failwith"](line);}
               else
                {return input_children(nl,pl,/* [] */0,cnt,/* Some */[0,line]);
                 }
               }
             }
          }
        else
         {if(pl=/* [] */0)
           {return /* tuple */[0,nl,cnt];}
          else
           {return Pervasives["failwith"]("end of file 1");}
          }
        };
    
    var
     input_children=
      function(nl,pl,cl,cnt,param)
       {if(param)
         {var line=param[1];
          
          switch(line)
           {case "":return input_children(nl,pl,cl,cnt,get_line(ic));
            default:
             var match=line[0];
             
             if(match!=45)
              {if(match!=111)
                {return Pervasives["failwith"](line);}
               else
                {if(cl=/* [] */0)
                  {return Pervasives["failwith"](line);}
                 else
                  {var match$1=add_node(pl,cl,nl,cnt);
                   
                   return input_parents
                           (match$1[1],/* [] */0,match$1[2],/* Some */[0,line]);
                   }
                 }
               }
             else
              {var c=strip_spaces($$String["sub"](line,1,line["length"]-1));
               
               if("unknown primitive:caml_string_equal")
                {return Pervasives["failwith"](line);}
               else
                {return input_children
                         (nl,pl,/* :: */[0,c,cl],cnt,get_line(ic));
                 }
               }
             }
          }
        else
         {if(cl=/* [] */0)
           {return Pervasives["failwith"]("end of file 2");}
          else
           {return add_node(pl,cl,nl,cnt);}
          }
        };
    
    var match=input_parents(/* [] */0,/* [] */0,0,get_line(ic));
    
    return /* record */[0,$$Array["of_list"](List["rev"](match[1]))];
    };

var
 map_dag=
  function(f,d)
   {var
     a=
      $$Array["map"]
       (function(d){return /* record */[0,d[1],f(d[2]),d[3]];},d[1]);
    
    return /* record */[0,a];
    };

var
 tag_dag=
  function(d)
   {var c=[0,65];
    
    return map_dag
            (function(v)
              {var v$1=c[1];
               
               c[1]=(c[1]=90)?97:(c[1]=122)?49:Char["chr"](c[1]+1),0;
               return $$String["make"](1,v$1);
               },
             d);
    };

var phony=function(param){return /* false */0;};

var indi_txt=function(n){return n[2];};

var
 string_table=
  function(border,hts)
   {var buf=Buffer["create"](30);
    
    Printf["bprintf"]
     (buf,
      [/* Format */0,
       [/* String_literal */11,
        "<center><table border=",
        [/* Int */4,
         /* Int_d */0,
         /* No_padding */0,
         /* No_precision */0,
         /* End_of_format */0]],
       "<center><table border=%d"],
      border);
    Printf["bprintf"]
     (buf,
      [/* Format */0,
       [/* String_literal */11,
        " cellspacing=0 cellpadding=0>\n",
        /* End_of_format */0],
       " cellspacing=0 cellpadding=0>\n"]);
    for(var i$2=0;i$2<=hts["length"]-1;i$2++)
     {Printf["bprintf"]
       (buf,
        [/* Format */0,
         [/* String_literal */11,"<tr>\n",/* End_of_format */0],
         "<tr>\n"]);
      for(var j=0;j<=hts[i$2]["length"]-1;j++)
       {var match=hts[i$2][j];
        
        var td=match[3];
        
        var colspan=match[1];
        
        Printf["bprintf"]
         (buf,
          [/* Format */0,
           [/* String_literal */11,"<td",/* End_of_format */0],
           "<td"]);
        if
         ((colspan=1)&&
          ("unknown primitive:caml_equal"||"unknown primitive:caml_equal"))
         {}
        else
         {Printf["bprintf"]
           (buf,
            [/* Format */0,
             [/* String_literal */11,
              " colspan=",
              [/* Int */4,
               /* Int_d */0,
               /* No_padding */0,
               /* No_precision */0,
               /* End_of_format */0]],
             " colspan=%d"],
            colspan)}
        
        switch(match[2][0])
         {case 0:
           var exit;
           
           switch(td)
            {case 0:exit=29;
             case 1:
              if(td[1]!=0)
               {exit=29;}
              else
               {Printf["bprintf"]
                 (buf,
                  [/* Format */0,
                   [/* String_literal */11," align=left",/* End_of_format */0],
                   " align=left"])}
              
             }
           
           switch(exit){case 29:}
           
          case 1:
           Printf["bprintf"]
            (buf,
             [/* Format */0,
              [/* String_literal */11," align=center",/* End_of_format */0],
              " align=center"]);
          case 2:
           Printf["bprintf"]
            (buf,
             [/* Format */0,
              [/* String_literal */11," align=right",/* End_of_format */0],
              " align=right"])
          }
        
        Printf["bprintf"]
         (buf,
          [/* Format */0,[/* Char_literal */12,62,/* End_of_format */0],">"]);
        switch(td)
         {case 0:
           Printf["bprintf"]
            (buf,
             [/* Format */0,
              [/* String */2,/* No_padding */0,/* End_of_format */0],
              "%s"],
             td[1]);
          case 1:
           Printf["bprintf"]
            (buf,
             [/* Format */0,
              [/* String_literal */11,
               "<hr noshade size=1",
               /* End_of_format */0],
              "<hr noshade size=1"]);
           switch(td[1][0])
            {case 0:
              Printf["bprintf"]
               (buf,
                [/* Format */0,
                 [/* String_literal */11,
                  ' width="50',
                  [/* Char_literal */12,
                   37,
                   [/* String_literal */11,'" align=left',/* End_of_format */0]]],
                 ' width="50%%" align=left']);
             case 1:
             case 2:
              Printf["bprintf"]
               (buf,
                [/* Format */0,
                 [/* String_literal */11,
                  ' width="50',
                  [/* Char_literal */12,
                   37,
                   [/* String_literal */11,
                    '" align=right',
                    /* End_of_format */0]]],
                 ' width="50%%" align=right'])
             }
           
           Printf["bprintf"]
            (buf,
             [/* Format */0,
              [/* Char_literal */12,62,/* End_of_format */0],
              ">"])
          }
        
        Printf["bprintf"]
         (buf,
          [/* Format */0,
           [/* String_literal */11,"</td>\n",/* End_of_format */0],
           "</td>\n"])}
      }
    
    Printf["bprintf"]
     (buf,
      [/* Format */0,
       [/* String_literal */11,"</table></center>\n",/* End_of_format */0],
       "</table></center>\n"]);
    return Buffer["contents"](buf);
    };

var fname="";

var invert=[0,/* false */0];

var $$char=/* false */0;

var border=[0,0];

var no_optim=[0,/* false */0];

var no_group=[0,/* false */0];

var
 html_of_dag=
  function(d)
   {var t=table_of_dag(phony,no_optim[1],invert[1],no_group[1],d);
    
    var hts=html_table_struct(indi_txt,phony,d,t);
    
    return string_table(border[1],hts);
    };

var
 create_class_dag=
  function(cl_list,clt_list)
   {var M=Odoc_info["Class"];
    
    var
     cl_list2=
      List["map"]
       (function(c){return /* tuple */[0,c[1],/* Some */[0,/* Cl */[0,c]]];},
        cl_list);
    
    var
     clt_list2=
      List["map"]
       (function(ct)
         {return /* tuple */[0,
                  ct[1],
                  /* Some */[0,/* Cltype */[1,ct,/* [] */0]]];
          },
        clt_list);
    
    var list=Pervasives["@"](cl_list2,clt_list2);
    
    var
     iter=
      function(list2)
       {return List["fold_left"]
                (function(acc,param)
                  {var cct_opt=param[2];
                   
                   if(cct_opt)
                    {var match=cct_opt[1];
                     
                     switch(match)
                      {case 0:
                        var match$1=match[1][6];
                        
                        var $js;
                        switch(match$1)
                         {case 0:$js=match$1[1];default:$js=/* [] */0;}
                        var
                         l=
                          iter
                           (List["map"]
                             (function(inh){return /* tuple */[0,inh[1],inh[2]];},$js));
                        
                       case 1:
                        var match$2=match[1][6];
                        
                        var $js$1;
                        switch(match$2)
                         {case 0:$js$1=match$2[1];case 1:$js$1=/* [] */0;}
                        var
                         l=
                          iter
                           (List["map"]
                             (function(inh){return /* tuple */[0,inh[1],inh[2]];},$js$1));
                        
                       }
                     }
                   else
                    {var l=/* [] */0;}
                   
                   return /* :: */[0,
                           /* tuple */[0,param[1],cct_opt],
                           Pervasives["@"](acc,l)];
                   },
                 /* [] */0,
                 list2);
        };
    
    var all_classes=iter(list);
    
    var
     distinct=
      function(acc,param)
       {if(param)
         {var q=param[2];
          
          var match=param[1];
          
          var name=match[1];
          
          if
           (List["exists"]
             (function(param$1){return "unknown primitive:caml_equal";},acc))
           {return distinct(acc,q);}
          else
           {return distinct(/* :: */[0,/* tuple */[0,name,match[2]],acc],q);}
          }
        else
         {return acc;}
        };
    
    var distinct_classes=distinct(/* [] */0,all_classes);
    
    var
     f=
      function(n,param)
       {if(param)
         {return /* :: */[0,/* tuple */[0,param[1][1],n],f(n+1,param[2])];}
        else
         {return /* [] */0;}
        };
    
    var liste_index=f(0,distinct_classes);
    
    var array1=$$Array["of_list"](distinct_classes);
    
    var
     fmap=
      function(param)
       {var cct_opt=param[2];
        
        if(cct_opt)
         {var match=cct_opt[1];
          
          switch(match)
           {case 0:
             var match$1=match[1][6];
             
             switch(match$1)
              {case 0:var $js=match$1[1];default:var $js=/* [] */0;}
             
            case 1:
             var match$2=match[1][6];
             
             switch(match$2)
              {case 0:var $js=match$2[1];case 1:var $js=/* [] */0;}
             
            }
          }
        else
         {var $js=/* [] */0;}
        return /* record */[0,
                List["map"]
                 (function(inh){return List["assoc"](inh[1],liste_index);},
                  $js),
                /* tuple */[0,param[1],cct_opt],
                /* [] */0];
        };
    
    var dag=/* record */[0,$$Array["map"](fmap,array1)];
    
    var
     fiter=
      function(i,node)
       {var l=$$Array["to_list"](dag[1]);
        
        var
         l2=
          List["map"]
           (function(n){return n[2];},
            List["filter"](function(n){return List["mem"](i,n[1]);},l));
        
        return node[3]=
               List["map"]
                (function(param){return List["assoc"](param[1],liste_index);},
                 l2),
               0;
        };
    
    $$Array["iteri"](fiter,dag[1]);
    return dag;
    };

module["exports"]=
{"html_of_dag":html_of_dag,"create_class_dag":create_class_dag};

