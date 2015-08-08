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
         {switch(param){case 0:return 1;}}
        else
         {switch(param[0])
           {case 0:return phony(d[1][param[1]]);case 1:return 0;}}
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
      function(i$2)
       {var
         loop=
          function(j)
           {if(j=t[1][i$2]["length"])
             {return 1;}
            else
             {var e=t[1][i$2][j][1];
              
              if("unknown primitive:isint")
               {return loop(j+1);}
              else
               {if(phony$1(e)){return loop(j+1);}else{return 0;}}
              }
            };
        
        return loop(0);
        };
    
    var
     line_elem_txt=
      function(i$2)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i$2]["length"])
             {return les;}
            else
             {var x=t[1][i$2][j];
              
              var
               loop$1=
                function(j$1)
                 {if(j$1=t[1][i$2]["length"])
                   {return j$1;}
                  else
                   {if("unknown primitive:caml_equal")
                     {return loop$1(j$1+1);}
                    else
                     {return j$1;}
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var colspan=3*(next_j-j);
              
              var les$1=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les];
              
              if(t[1][i$2][j][1]=0)
               {var s="&nbsp;";}
              else
               {var s=elem_txt(t[1][i$2][j][1]);}
              
              var
               les$2=
                [/* :: */0,
                 [/* tuple */0,colspan-2,1,[/* TDstring */0,s]],
                 les$1];
              
              var les$3=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$2];
              
              return loop(les$3,next_j);
              }
            };
        
        var les=loop(0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     vbars_txt=
      function(k,i$2)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i$2]["length"])
             {return les;}
            else
             {var x=t[1][i$2][j];
              
              var
               loop$1=
                function(j$1)
                 {if(j$1=t[1][i$2]["length"])
                   {return j$1;}
                  else
                   {if("unknown primitive:caml_equal")
                     {return loop$1(j$1+1);}
                    else
                     {return j$1;}
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var colspan=3*(next_j-j);
              
              var les$1=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les];
              
              if(k>0&&(t[1][k-1][j][1]=0)||(t[1][k][j][1]=0))
               {var s="&nbsp;";}
              else
               {if(phony$1(t[1][i$2][j][1]))
                 {var s="&nbsp;";}
                else
                 {var s=bar_txt(t[1][i$2][j][1]);}
                }
              
              var
               les$2=
                [/* :: */0,
                 [/* tuple */0,colspan-2,1,[/* TDstring */0,s]],
                 les$1];
              
              var les$3=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$2];
              
              return loop(les$3,next_j);
              }
            };
        
        var les=loop(0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     alone_bar_txt=
      function(i$2)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i$2]["length"])
             {return les;}
            else
             {var x=t[1][i$2][j][2];
              
              var
               loop$1=
                function(j$1)
                 {if(j$1=t[1][i$2]["length"])
                   {return j$1;}
                  else
                   {if("unknown primitive:caml_equal")
                     {return loop$1(j$1+1);}
                    else
                     {return j$1;}
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var colspan=3*(next_j-j)-2;
              
              var les$1=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les];
              
              if((t[1][i$2][j][1]=0)||(t[1][i$2+1][j][1]=0))
               {var
                 les$2=
                  [/* :: */0,[/* tuple */0,colspan,0,[0,"&nbsp;"]],les$1];
                }
              else
               {var
                 loop$2=
                  function(j$1)
                   {if(j$1=next_j)
                     {return 1;}
                    else
                     {if(phony$1(t[1][i$2+1][j$1][1]))
                       {return loop$2(j$1+1);}
                      else
                       {return 0;}
                      }
                    };
                
                var all_ph=loop$2(j);
                
                if(all_ph){var s="&nbsp;";}else{var s="|";}
                
                var
                 les$2=
                  [/* :: */0,
                   [/* tuple */0,colspan,1,[/* TDstring */0,s]],
                   les$1];
                }
              
              var les$3=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$2];
              
              return loop(les$3,next_j);
              }
            };
        
        var les=loop(0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     exist_several_branches=
      function(i$2,k)
       {var
         loop=
          function(j)
           {if(j=t[1][i$2]["length"])
             {return 0;}
            else
             {var x=t[1][i$2][j][2];
              
              var e=t[1][k][j][1];
              
              var
               loop1=
                function(j$1)
                 {if(j$1=t[1][i$2]["length"])
                   {return 0;}
                  else
                   {if(t[1][i$2][j$1][1]=0)
                     {return loop(j$1);}
                    else
                     {if("unknown primitive:caml_notequal")
                       {return loop(j$1);}
                      else
                       {if("unknown primitive:caml_notequal")
                         {return 1;}
                        else
                         {return loop1(j$1+1);}
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
      function(i$2,k)
       {var
         loop=
          function(les,j)
           {if(j=t[1][i$2]["length"])
             {return les;}
            else
             {var e=t[1][i$2][j][1];
              
              var x=t[1][i$2][j][2];
              
              var
               loop$1=
                function(j$1)
                 {if(j$1=t[1][i$2]["length"])
                   {return j$1;}
                  else
                   {if((e=0)&&(t[1][i$2][j$1][1]=0))
                     {return loop$1(j$1+1);}
                    else
                     {if("unknown primitive:caml_equal")
                       {return loop$1(j$1+1);}
                      else
                       {return j$1;}
                      }
                    }
                  };
              
              var next_j=loop$1(j+1);
              
              var
               loop1=
                function(les$1,l)
                 {if(l=next_j)
                   {return loop(les$1,next_j);}
                  else
                   {var y=t[1][k][l];
                    
                    var match=y[1];
                    
                    if("unknown primitive:isint")
                     {var next_l=l+1;}
                    else
                     {var
                       loop$2=
                        function(l$1)
                         {if(l$1=t[1][i$2]["length"])
                           {return l$1;}
                          else
                           {if("unknown primitive:caml_equal")
                             {return loop$2(l$1+1);}
                            else
                             {return l$1;}
                            }
                          };
                      
                      var next_l=loop$2(l+1);
                      }
                    
                    if(next_l>next_j)
                     {Printf["eprintf"]
                       ([0,
                         [11,
                          "assert false i ",
                          [4,
                           0,
                           0,
                           0,
                           [11,
                            " k ",
                            [4,
                             0,
                             0,
                             0,
                             [11,
                              " l ",
                              [4,
                               0,
                               0,
                               0,
                               [11,
                                " next_l ",
                                [4,0,0,0,[11," next_j ",[4,0,0,0,[12,10,0]]]]]]]]]]],
                         "assert false i %d k %d l %d next_l %d next_j %d\n"],
                        i$2,
                        k,
                        l,
                        next_l,
                        next_j),
                      Pervasives["flush"](Pervasives["stderr"])}
                    else
                     {}
                    
                    var next_l$1=Pervasives["min"](next_l,next_j);
                    
                    var colspan=3*(next_l$1-l)-2;
                    
                    var match$1=t[1][i$2][l][1];
                    
                    var match$2=t[1][i$2+1][l][1];
                    
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
                             {return [0,"&nbsp;"];}
                            else
                             {return s;}
                            };
                        
                        if((l=j)&&(next_l$1=next_j))
                         {var les$2=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$1];
                          
                          var s=ph([0,"|"]);
                          
                          var les$3=[/* :: */0,[/* tuple */0,colspan,1,s],les$2];
                          
                          var les$4=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$3];
                          }
                        else
                         {if(l=j)
                           {var les$5=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$1];
                            
                            var s$1=ph([1,2]);
                            
                            var les$6=[/* :: */0,[/* tuple */0,colspan,2,s$1],les$5];
                            
                            var s$2=ph([1,1]);
                            
                            var les$4=[/* :: */0,[/* tuple */0,1,0,s$2],les$6];
                            }
                          else
                           {if(next_l$1=next_j)
                             {var s$3=ph([1,1]);
                              
                              var les$7=[/* :: */0,[/* tuple */0,1,0,s$3],les$1];
                              
                              var s$4=ph([1,0]);
                              
                              var les$8=[/* :: */0,[/* tuple */0,colspan,0,s$4],les$7];
                              
                              var les$4=[/* :: */0,[0,1,0,[0,"&nbsp;"]],les$8];
                              }
                            else
                             {var s$5=ph([1,1]);
                              
                              var les$4=[/* :: */0,[/* tuple */0,colspan+2,0,s$5],les$1];
                              }
                            }
                          }
                        }
                      }
                    
                    switch(exit)
                     {case 334:
                       var
                        les$4=
                         [/* :: */0,[/* tuple */0,colspan+2,0,[0,"&nbsp;"]],les$1];
                       
                      }
                    
                    return loop1(les$4,next_l$1);
                    }
                  };
              
              return loop1(les,j);
              }
            };
        
        var les=loop(0,0);
        
        return $$Array["of_list"](List["rev"](les));
        };
    
    var
     loop=
      function(hts,i$2)
       {if(i$2=t[1]["length"])
         {return hts;}
        else
         {if((i$2=t[1]["length"]-1)&&all_empty(i$2))
           {return hts;}
          else
           {var hts$1=[/* :: */0,line_elem_txt(i$2),hts];
            
            if(i$2<t[1]["length"]-1)
             {var hts$2=[/* :: */0,vbars_txt(i$2+1,i$2),hts$1];
              
              if(exist_several_branches(i$2,i$2))
               {var
                 hts$3=
                  [/* :: */0,
                   alone_bar_txt(i$2),
                   [/* :: */0,hbars_txt(i$2,i$2),hts$2]];
                }
              else
               {var hts$3=hts$2;}
              
              if
               (exist_several_branches(i$2,i$2+1)&&
                (i$2<t[1]["length"]-2||!all_empty(i$2+1)))
               {var
                 hts$4=
                  [/* :: */0,
                   vbars_txt(i$2+1,i$2+1),
                   [/* :: */0,hbars_txt(i$2,i$2+1),hts$3]];
                }
              else
               {var hts$4=hts$3;}
              }
            else
             {var hts$4=hts$1;}
            
            return loop(hts$4,i$2+1);
            }
          }
        };
    
    var hts=loop(0,0);
    
    return $$Array["of_list"](List["rev"](hts));
    };

var
 ancestors=
  function(d)
   {var
     loop=
      function(i$2)
       {if(i$2=d[1]["length"])
         {return 0;}
        else
         {var n=d[1][i$2];
          
          if(n[1]=0)
           {return [/* :: */0,i$2,loop(i$2+1)];}
          else
           {return loop(i$2+1);}
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
                (function(param,children$1)
                  {var x=param[1];
                   
                   var exit;
                   
                   if(typeof x=="number")
                    {switch(x){case 0:exit=308;}}
                   else
                    {switch(x[0])
                      {case 0:
                        var e=d[1][x[1]];
                        
                        return List["fold_right"]
                                (function(c,children$2)
                                  {if(List["mem"](c,children$2))
                                    {return children$2;}
                                   else
                                    {return [/* :: */0,c,children$2];}
                                   },
                                 e[3],
                                 children$1);
                        
                       case 1:exit=308;
                       }}
                   
                   switch(exit){case 308:return 0;}
                   },
                 el,
                 children);
        };
    
    return merge_children(0,parents);
    };

var
 get_block=
  function(t,i$2,j)
   {if(j=t[1][i$2]["length"])
     {return 0;}
    else
     {if(j=t[1][i$2]["length"]-1)
       {var x=t[1][i$2][j];
        
        return [/* Some */0,
                [/* tuple */0,[/* :: */0,[/* tuple */0,x[1],1],0],1,x[2]]];
        }
      else
       {var x$1=t[1][i$2][j];
        
        var y=t[1][i$2][j+1];
        
        if("unknown primitive:caml_equal")
         {var match=get_block(t,i$2,j+1);
          
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
                  [/* tuple */0,
                   [/* :: */0,[/* tuple */0,x1,c1+1],list],
                   Pervasives["max"](mpc,c1+1)];
                }
              else
               {var
                 match$4=
                  [/* tuple */0,
                   [/* :: */0,
                    [/* tuple */0,x$1[1],1],
                    [/* :: */0,[/* tuple */0,x1,c1],list]],
                   Pervasives["max"](mpc,c1)];
                }
              
              return [/* Some */0,
                      [/* tuple */0,match$4[1],match$4[2],match$1[3]]];
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
         {return [/* Some */0,
                  [/* tuple */0,
                   [/* :: */0,[/* tuple */0,x$1[1],1],0],
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
          
          return [/* tuple */0,[/* :: */0,id,0],cs];
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
                 {return loop1([/* :: */0,[/* tuple */0,nl1,cs1],beg],rest1);}
                else
                 {return loop
                          ([/* :: */0,
                            [/* tuple */0,Pervasives["@"](nl,nl1),S[7](cs,cs1)],
                            Pervasives["@"](List["rev"](beg),rest1)]);
                  }
                }
              else
               {return [/* :: */0,[/* tuple */0,nl,cs],loop(rest)];}
              };
          
          return loop1(0,rest);
          }
        else
         {return 0;}
        };
    
    var nlcsl$1=loop(nlcsl);
    
    return List["fold_right"]
            (function(param,a)
              {var span=new_span_id(0);
               
               return List["fold_right"]
                       (function(n,a$1)
                         {return [/* :: */0,[/* record */0,[/* Elem */0,n],span],a$1];
                          },
                        param[1],
                        a);
               },
             nlcsl$1,
             0);
    };

var copy_data=function(d){return [/* record */0,d[1],d[2]];};

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
           {return 0;}
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
    
    return [/* record */0,t1];
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
      function(t$1,i$3,j)
       {var match=get_block(t$1,i$3,j);
        
        if(match)
         {var match$1=match[1];
          
          var parents=match$1[1];
          
          var children=get_children(d,parents);
          
          if(children=0)
           {var children$1=[/* :: */0,[/* record */0,0,new_span_id(0)],0];}
          else
           {var
             children$1=
              List["map"]
               (function(n)
                 {return [/* record */0,[/* Elem */0,n],new_span_id(0)];},
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
               (function(d$1,list)
                 {var
                   loop$1=
                    function(cnt$1,list$1)
                     {if(cnt$1=1)
                       {return [/* :: */0,d$1,list$1];}
                      else
                       {return [/* :: */0,copy_data(d$1),loop$1(cnt$1-1,list$1)];}
                      };
                  
                  return loop$1(cnt,list);
                  },
                children$1,
                0);
            
            var match$2=loop(t$1,i$3,j$1);
            
            return [/* tuple */0,
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
                    function(cc,t$2,j$3)
                     {if(cc=0)
                       {return t$2;}
                      else
                       {var t$3=insert_columns(t$2,to_add,j$3);
                        
                        return loop$1(cc-1,t$3,j$3+to_add+1);
                        }
                      };
                  
                  var t$2=loop$1(c,param[1],j$2);
                  
                  return [/* tuple */0,
                          t$2,
                          [/* :: */0,
                           [/* tuple */0,param$1[1],parent_colspan],
                           param[2]],
                          j$2+parent_colspan];
                  },
                [/* tuple */0,t$1,0,j],
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
                    function(cc,t$2,j$2)
                     {if(cc=0)
                       {return [/* tuple */0,t$2,j$2];}
                      else
                       {var t$3=insert_columns(t$2,cnt$1-1,j$2);
                        
                        var j$3=j$2+cnt$1;
                        
                        return loop$1(cc-1,t$3,j$3);
                        }
                      };
                  
                  return loop$1(param$1[2],param[1],param[2]);
                  },
                [/* tuple */0,match$3[1],j],
                parents$1);
            
            var cnt$2=parents_colspan/g;
            
            var
             children$3=
              List["fold_right"]
               (function(d$1,list)
                 {var
                   loop$1=
                    function(cnt$3,list$1)
                     {if(cnt$3=0)
                       {return list$1;}
                      else
                       {return [/* :: */0,d$1,loop$1(cnt$3-1,list$1)];}
                      };
                  
                  return loop$1(cnt$2,list);
                  },
                children$1,
                0);
            
            var match$5=loop(match$4[1],i$3,match$4[2]);
            
            return [/* tuple */0,
                    match$5[1],
                    Pervasives["@"](children$3,match$5[2])];
            }
          }
        else
         {return [/* tuple */0,t$1,0];}
        };
    
    return loop(t,i$2,0);
    };

var
 down_it=
  function(t,i$2,k,y)
   {t[1][t[1]["length"]-1][k]=t[1][i$2][k],0;
    for(var r=i$2;r<=t[1]["length"]-2;r++)
     {t[1][r][k]=
      [/* record */0,[/* Ghost */1,new_ghost_id(0)],new_span_id(0)],
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
         {return 0;}
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
                 function(i$2)
                  {if(i$2=ilast)
                    {return loop(j+1);}
                   else
                    {var
                      loop2=
                       function(k)
                        {if(k=len)
                          {return loop1(i$2+1);}
                         else
                          {var match$1=t[1][i$2][k][1];
                           
                           var exit$1;
                           
                           if(typeof match$1=="number")
                            {switch(match$1){case 0:exit$1=257;}}
                           else
                            {switch(match$1[0])
                              {case 0:
                                var y=match$1[1];
                                
                                if("unknown primitive:caml_equal")
                                 {down_it(t,i$2,k,y);return loop(0);}
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
                    [/* record */0,[/* Ghost */1,match[1]],t[1][i$2+1][j-1][2]],
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
                    [/* record */0,[/* Ghost */1,match$2[1]],t[1][i$2][j-1][2]],
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
       {if("unknown primitive:caml_equal"&&line[j][1]!=0)
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
         {return 0;}
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
  function(t,i$2,j1,j2,j3,j4)
   {var
     loop=
      function(i$3,j1$1,j2$1,j3$1,j4$1)
       {if(i$3=0)
         {return [/* tuple */0,i$3,j1$1,j2$1,j3$1,j4$1];}
        else
         {var x1=t[i$3-1][j1$1];
          
          var x2=t[i$3-1][j2$1];
          
          var x3=t[i$3-1][j3$1];
          
          var x4=t[i$3-1][j4$1];
          
          if("unknown primitive:caml_equal")
           {return [/* tuple */0,i$3,j1$1,j2$1,j3$1,j4$1];}
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
            
            var j1$2=loop$1(j1$1-1);
            
            var
             loop$2=
              function(j)
               {if(j>=t[i$3]["length"])
                 {return j-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return loop$2(j+1);}
                  else
                   {return j-1;}
                  }
                };
            
            var j2$2=loop$2(j2$1+1);
            
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
            
            var j3$2=loop$3(j3$1-1);
            
            var
             loop$4=
              function(j)
               {if(j>=t[i$3]["length"])
                 {return j-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return loop$4(j+1);}
                  else
                   {return j-1;}
                  }
                };
            
            var j4$2=loop$4(j4$1+1);
            
            return loop(i$3-1,j1$2,j2$2,j3$2,j4$2);
            }
          }
        };
    
    return loop(i$2,j1,j2,j3,j4);
    };

var
 find_linked_children=
  function(t,i$2,j1,j2,j3,j4)
   {var
     loop=
      function(i$3,j1$1,j2$1,j3$1,j4$1)
       {if(i$3=t["length"]-1)
         {return [/* tuple */0,j1$1,j2$1,j3$1,j4$1];}
        else
         {var x1=t[i$3][j1$1];
          
          var x2=t[i$3][j2$1];
          
          var x3=t[i$3][j3$1];
          
          var x4=t[i$3][j4$1];
          
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
          
          var j1$2=loop$1(j1$1-1);
          
          var
           loop$2=
            function(j)
             {if(j>=t[i$3]["length"])
               {return j-1;}
              else
               {if("unknown primitive:caml_equal")
                 {return loop$2(j+1);}
                else
                 {return j-1;}
                }
              };
          
          var j2$2=loop$2(j2$1+1);
          
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
          
          var j3$2=loop$3(j3$1-1);
          
          var
           loop$4=
            function(j)
             {if(j>=t[i$3]["length"])
               {return j-1;}
              else
               {if("unknown primitive:caml_equal")
                 {return loop$4(j+1);}
                else
                 {return j-1;}
                }
              };
          
          var j4$2=loop$4(j4$1+1);
          
          return loop(i$3+1,j1$2,j2$2,j3$2,j4$2);
          }
        };
    
    return loop(i$2,j1,j2,j3,j4);
    };

var
 mirror_block=
  function(t,i1,i2,j1,j2)
   {for(var i$2=i1;i$2<=i2;i$2++)
     {var line=t[i$2];
      
      var
       loop=
        function(j1$1,j2$1)
         {if(j1$1>=j2$1)
           {return 0;}
          else
           {var v=line[j1$1];
            
            line[j1$1]=line[j2$1],0;
            line[j2$1]=v,0;
            return loop(j1$1+1,j2$1-1);
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
  function(t,i$2,jj1,jj2,jj3,jj4)
   {var
     loop=
      function(ii,jj1$1,jj2$1,jj3$1,jj4$1)
       {var match=find_same_parents(t,i$2,jj1$1,jj2$1,jj3$1,jj4$1);
        
        var njj4=match[5];
        
        var njj3=match[4];
        
        var njj2=match[3];
        
        var njj1=match[2];
        
        var nii=match[1];
        
        if(nii!=ii||njj1!=jj1$1||njj2!=jj2$1||njj3!=jj3$1||njj4!=jj4$1)
         {var nii$1=Pervasives["min"](ii,nii);
          
          var match$1=find_linked_children(t,nii$1,njj1,njj2,njj3,njj4);
          
          var jj4$2=match$1[4];
          
          var jj3$2=match$1[3];
          
          var jj2$2=match$1[2];
          
          var jj1$2=match$1[1];
          
          if(njj1!=jj1$2||njj2!=jj2$2||njj3!=jj3$2||njj4!=jj4$2)
           {return loop(nii$1,jj1$2,jj2$2,jj3$2,jj4$2);}
          else
           {return [/* tuple */0,nii$1,jj1$2,jj2$2,jj3$2,jj4$2];}
          }
        else
         {return [/* tuple */0,ii,jj1$1,jj2$1,jj3$1,jj4$1];}
        };
    
    return loop(i$2,jj1,jj2,jj3,jj4);
    };

var
 push_to_right=
  function(d,t,i$2,j1,j2)
   {var line=t[i$2];
    
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
              function(j$1)
               {if(j$1<0)
                 {return 0;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value(j$1-1);}
                  else
                   {return j$1+1;}
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
              function(j$1)
               {if(j$1>=line["length"])
                 {return j$1-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value$1(j$1+1);}
                  else
                   {return j$1-1;}
                  }
                };
            
            var jj4=same_value$1(j+1);
            }
          
          var match=find_block_with_parents(t,i$2,ini_jj1,jj2,j,jj4);
          
          var jj4$1=match[5];
          
          var jj3=match[4];
          
          var jj2$1=match[3];
          
          var jj1=match[2];
          
          var ii=match[1];
          
          if(jj4$1<j2&&jj2$1<jj3)
           {exch_blocks(t,ii,i$2,jj1,jj2$1,jj3,jj4$1);return loop(jj4$1+1);}
          else
           {if(jj4$1<j2&&(jj1=ini_jj1)&&jj2$1<=jj4$1)
             {mirror_block(t,ii,i$2,jj1,jj4$1);return loop(jj4$1+1);}
            else
             {return j-1;}
            }
          }
        };
    
    return loop(j1+1);
    };

var
 push_to_left=
  function(d,t,i$2,j1,j2)
   {var line=t[i$2];
    
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
              function(j$1)
               {if(j$1<0)
                 {return 0;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value(j$1-1);}
                  else
                   {return j$1+1;}
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
              function(j$1)
               {if(j$1>=line["length"])
                 {return j$1-1;}
                else
                 {if("unknown primitive:caml_equal")
                   {return same_value$1(j$1+1);}
                  else
                   {return j$1-1;}
                  }
                };
            
            var ini_jj4=same_value$1(j+2);
            }
          
          var match=find_block_with_parents(t,i$2,jj1,j,jj3,ini_jj4);
          
          var jj4=match[5];
          
          var jj3$1=match[4];
          
          var jj2=match[3];
          
          var jj1$1=match[2];
          
          var ii=match[1];
          
          if(jj1$1>j1&&jj2<jj3$1)
           {exch_blocks(t,ii,i$2,jj1$1,jj2,jj3$1,jj4);return loop(jj1$1-1);}
          else
           {if(jj1$1>j1&&(jj4=ini_jj4)&&jj3$1>=jj1$1)
             {mirror_block(t,ii,i$2,jj1$1,jj4);return loop(jj1$1-1);}
            else
             {return j+1;}
            }
          }
        };
    
    return loop(j2-1);
    };

var
 fill_gap=
  function(d,t,i$2,j1,j2)
   {var t1=$$Array["copy"](t[1]);
    
    for(var i$3=0;i$3<=t[1]["length"]-1;i$3++)
     {t1[i$3]=$$Array["copy"](t[1][i$3]),0;
      for(var j=0;j<=t1[i$3]["length"]-1;j++)
       {t1[i$3][j]=copy_data(t[1][i$3][j]),0}
      }
    
    var t1$1=t1;
    
    var j2$1=push_to_left(d,t1$1,i$2,j1,j2);
    
    var j1$1=push_to_right(d,t1$1,i$2,j1,j2$1);
    
    if(j1$1=j2$1-1)
     {var line=t1$1[i$2-1];
      
      var x=line[j1$1][2];
      
      var y=line[j2$1][2];
      
      var
       loop=
        function(y$1,j$1)
         {if(j$1>=line["length"])
           {return 0;}
          else
           {if("unknown primitive:caml_equal"||"unknown primitive:caml_equal")
             {var y$2=line[j$1][2];
              
              line[j$1][2]=x,0;
              if(i$2>0){t1$1[i$2-1][j$1][2]=t1$1[i$2-1][j$1-1][2],0}else{}
              
              return loop(y$2,j$1+1);
              }
            else
             {return 0;}
            }
          };
      
      loop(y,j2$1);
      return [/* Some */0,[/* tuple */0,[/* record */0,t1$1],1]];
      }
    else
     {return 0;}
    };

var
 treat_gaps=
  function(d,t)
   {var i$2=t[1]["length"]-1;
    
    var
     loop=
      function(t$1,j)
       {var line=t$1[1][i$2];
        
        if(j=line["length"])
         {return t$1;}
        else
         {var y=line[j][1];
          
          var exit;
          
          if(typeof y=="number")
           {switch(y){case 0:exit=181;}}
          else
           {switch(y[0])
             {case 0:
               if("unknown primitive:caml_equal")
                {return loop(t$1,j+1);}
               else
                {var
                  loop1=
                   function(t$2,j1)
                    {if(j1<0)
                      {return loop(t$2,j+1);}
                     else
                      {if("unknown primitive:caml_equal")
                        {var match=fill_gap(d,t$2,i$2,j1,j);
                         
                         if(match)
                          {var match$1=match[1];
                           
                           var t$3=match$1[1];
                           
                           if(match$1[2])
                            {return loop(t$3,2);}
                           else
                            {return loop(t$3,j+1);}
                           }
                         else
                          {return loop(t$2,j+1);}
                         }
                       else
                        {return loop1(t$2,j1-1);}
                       }
                     };
                 
                 return loop1(t$1,j-2);
                 }
               
              case 1:exit=181;
              }}
          
          switch(exit){case 181:return loop(t$1,j+1);}
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
      function(i$2)
       {if(i$2>=row["length"])
         {return 0;}
        else
         {var x=row[i$2][1];
          
          if("unknown primitive:isint")
           {}
          else
           {if("unknown primitive:caml_equal")
             {row[i$2][2]=row[i$2-1][2],0}
            else
             {}
            }
          
          return loop(i$2+1);
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
         {return 0;}
        else
         {var match=line[j][1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 0:exit=174;}}
          else
           {switch(match[0])
             {case 0:
               if(phony(d[1][match[1]])){return 1;}else{return loop(j+1);}
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
    
    var t=[/* record */0,[$$Array["of_list"](r)]];
    
    var
     loop=
      function(t$1)
       {var match=treat_new_row(d,t$1);
        
        var new_row=match[2];
        
        var t$2=match[1];
        
        if(List["for_all"](function(x){return x[1]=0;},new_row))
         {return t$2;}
        else
         {var
           t$3=
            [/* record */0,
             $$Array["append"](t$2[1],[$$Array["of_list"](new_row)])];
          
          if(no_group&&!has_phony_children(phony,d,t$3))
           {var t$4=t$3;}
          else
           {if(no_optim){var match$1=0;}else{var match$1=equilibrate(t$3);}
            
            var match$2=group_elem(t$3);
            
            var match$3=group_ghost(t$3);
            
            var match$4=group_children(t$3);
            
            var match$5=group_span_by_common_children(d,t$3);
            
            if(no_optim){var t$5=t$3;}else{var t$5=treat_gaps(d,t$3);}
            
            var match$6=group_span_last_row(t$5);
            
            var t$4=t$5;
            }
          
          return loop(t$4);
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
           {return 0;}
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
                   function(j$1)
                    {if(j$1=line["length"])
                      {return j$1-1;}
                     else
                      {var match$1=line[j$1][1];
                       
                       var exit$1;
                       
                       if(typeof match$1=="number")
                        {switch(match$1){case 0:exit$1=155;}}
                       else
                        {switch(match$1[0])
                          {case 0:exit$1=155;
                           case 1:
                            if("unknown primitive:caml_equal")
                             {return loop$1(j$1+1);}
                            else
                             {exit$1=155;}
                            
                           }}
                       
                       switch(exit$1){case 155:return j$1-1;}
                       }
                     };
                 
                 var j2=loop$1(j+1);
                 
                 var
                  loop$2=
                   function(i$3)
                    {if(i$3<0)
                      {return i$3+1;}
                     else
                      {var line$1=t[1][i$3];
                       
                       if
                        (((j=0)||"unknown primitive:caml_notequal")&&
                         ((j2=line$1["length"]-1)||"unknown primitive:caml_notequal"))
                        {return loop$2(i$3-1);}
                       else
                        {return i$3+1;}
                       }
                     };
                 
                 var i1=loop$2(i$2-1);
                 
                 if(i1=i$2)
                  {var i1$1=i1;}
                 else
                  {if(i1=0)
                    {var i1$1=i1;}
                   else
                    {if(t[1][i1][j][1]=0){var i1$1=i1;}else{var i1$1=i$2;}}
                   }
                 
                 if(i1$1<i$2)
                  {for(var k=i$2;k>=i1$1+1;k--)
                    {for(var j$1=j;j$1<=j2;j$1++)
                      {t[1][k][j$1][1]=t[1][k-1][j$1][1],0;
                       if(k<i$2){t[1][k][j$1][2]=t[1][k-1][j$1][2],0}else{}
                       }
                     }
                   
                   for(var l=j;l<=j2;l++)
                    {if((i1$1=0)||(t[1][i1$1-1][l][1]=0))
                      {t[1][i1$1][l][1]=0,0}
                     else
                      {t[1][i1$1][l]=
                       (l=j)||"unknown primitive:caml_notequal"
                        ?[/* record */0,
                          [/* Ghost */1,new_ghost_id(0)],
                          new_span_id(0)]
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
        i$2-i2+i1>=0?t[1][i$2-i2+i1][j]:[/* record */0,0,new_span_id(0)],
        0}
      }
    
    for(var i$3=t[1]["length"]-1;i$3>=0;i$3--)
     {for(var j$1=j2;j$1<=t[1][i$3]["length"]-1;j$1++)
       {t[1][i$3][j$1]=
        i$3-i2+i1>=0?t[1][i$3-i2+i1][j$1]:[/* record */0,0,new_span_id(0)],
        0}
      }
    
    var old_span=t[1][i2-1][j1][2];
    
    var
     loop=
      function(j$2)
       {if(j$2=t[1][i2-1]["length"])
         {return 0;}
        else
         {if("unknown primitive:caml_equal")
           {t[1][i2-1][j$2][2]=span,0;return loop(j$2+1);}
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
        i$2-i2+i1>=0?t[1][i$2-i2+i1][j]:[/* record */0,0,new_span_id(0)],
        0}
      }
    
    for(var i$3=t[1]["length"]-1;i$3>=0;i$3--)
     {for(var j$1=j1;j$1>=0;j$1--)
       {t[1][i$3][j$1]=
        i$3-i2+i1>=0?t[1][i$3-i2+i1][j$1]:[/* record */0,0,new_span_id(0)],
        0}
      }
    
    var old_span=t[1][i2-1][j2][2];
    
    var
     loop=
      function(j$2)
       {if(j$2<0)
         {return 0;}
        else
         {if("unknown primitive:caml_equal")
           {t[1][i2-1][j$2][2]=span,0;return loop(j$2-1);}
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
      function(i$2)
       {if(i$2<0)
         {return 0;}
        else
         {var
           loop_j=
            function(j)
             {if(j=t[1][i$2]["length"])
               {return loop_i(i$2-1);}
              else
               {var match=t[1][i$2][j][1];
                
                if("unknown primitive:isint")
                 {return loop_j(j+1);}
                else
                 {return i$2+1;}
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
        function(cnt,t$1)
         {if(cnt=0)
           {return t$1;}
          else
           {var
             new_line=
              $$Array["init"]
               (t$1[1][0]["length"],
                function(i$2){return [/* record */0,0,new_span_id(0)];});
            
            var t$2=[/* record */0,$$Array["append"](t$1[1],[new_line])];
            
            return loop(cnt-1,t$2);
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
      function(i$2)
       {if(i$2<0)
         {return 0;}
        else
         {var
           loop_j=
            function(j)
             {if(j<0)
               {return loop_i(i$2-1);}
              else
               {var match=t[1][i$2][j][1];
                
                if("unknown primitive:isint")
                 {return loop_j(j-1);}
                else
                 {return i$2+1;}
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
        function(cnt,t$1)
         {if(cnt=0)
           {return t$1;}
          else
           {var
             new_line=
              $$Array["init"]
               (t$1[1][0]["length"],
                function(i$2){return [/* record */0,0,new_span_id(0)];});
            
            var t$2=[/* record */0,$$Array["append"](t$1[1],[new_line])];
            
            return loop(cnt-1,t$2);
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
     {t[1][i$3][j$1]=[/* record */0,0,new_span_id(0)],0}
    
    return t;
    };

var
 try_fall2_right=
  function(t,i$2,j)
   {var match=t[1][i$2][j][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=128;}}
    else
     {switch(match[0])
       {case 0:exit=128;
        case 1:
         var
          loop=
           function(i$3)
            {if(i$3<0)
              {return 0;}
             else
              {var match$1=t[1][i$3][j][1];
               
               var exit$1;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit$1=126;}}
               else
                {switch(match$1[0])
                  {case 0:exit$1=126;case 1:return loop(i$3-1);}}
               
               switch(exit$1){case 126:return i$3+1;}
               }
             };
         
         var i1=loop(i$2-1);
         
         var
          loop$1=
           function(i$3)
            {if(i$3<0)
              {return 1;}
             else
              {if(j>0&&"unknown primitive:caml_equal")
                {return 0;}
               else
                {return loop$1(i$3-1);}
               }
             };
         
         var separated1=loop$1(i1-1);
         
         var x=t[1][i$2][j][2];
         
         var
          loop$2=
           function(j2)
            {if(j2=t[1][i$2]["length"])
              {return j2;}
             else
              {var match$1=t[1][i$2][j2];
               
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
           function(i$3)
            {if(i$3=t[1]["length"])
              {return 1;}
             else
              {if(j2=t[1][i$3]["length"])
                {return 0;}
               else
                {if("unknown primitive:caml_equal")
                  {return 0;}
                 else
                  {return loop$3(i$3+1);}
                 }
               }
             };
         
         var separated2=loop$3(i$2+1);
         
         if(!separated1||!separated2)
          {return 0;}
         else
          {return [/* Some */0,do_fall2_right(t,i1,i$2+1,j,j2)];}
         
        }}
    
    switch(exit){case 128:return 0;}
    };

var
 try_fall2_left=
  function(t,i$2,j)
   {var match=t[1][i$2][j][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=118;}}
    else
     {switch(match[0])
       {case 0:exit=118;
        case 1:
         var
          loop=
           function(i$3)
            {if(i$3<0)
              {return 0;}
             else
              {var match$1=t[1][i$3][j][1];
               
               var exit$1;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit$1=116;}}
               else
                {switch(match$1[0])
                  {case 0:exit$1=116;case 1:return loop(i$3-1);}}
               
               switch(exit$1){case 116:return i$3+1;}
               }
             };
         
         var i1=loop(i$2-1);
         
         var
          loop$1=
           function(i$3)
            {if(i$3<0)
              {return 1;}
             else
              {if(j<t[1][i$3]["length"]-1&&"unknown primitive:caml_equal")
                {return 0;}
               else
                {return loop$1(i$3-1);}
               }
             };
         
         var separated1=loop$1(i1-1);
         
         var x=t[1][i$2][j][2];
         
         var
          loop$2=
           function(j1)
            {if(j1<0)
              {return j1;}
             else
              {var match$1=t[1][i$2][j1];
               
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
           function(i$3)
            {if(i$3=t[1]["length"])
              {return 1;}
             else
              {if(j1<0)
                {return 0;}
               else
                {if("unknown primitive:caml_equal")
                  {return 0;}
                 else
                  {return loop$3(i$3+1);}
                 }
               }
             };
         
         var separated2=loop$3(i$2+1);
         
         if(!separated1||!separated2)
          {return 0;}
         else
          {return [/* Some */0,do_fall2_left(t,i1,i$2+1,j1,j)];}
         
        }}
    
    switch(exit){case 118:return 0;}
    };

var
 try_shorten_too_long=
  function(t,i$2,j)
   {var match=t[1][i$2][j][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=108;}}
    else
     {switch(match[0])
       {case 0:exit=108;
        case 1:
         var x=t[1][i$2][j][2];
         
         var
          loop=
           function(j2)
            {if(j2=t[1][i$2]["length"])
              {return j2;}
             else
              {var match$1=t[1][i$2][j2];
               
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
           function(i$3)
            {if(i$3=t[1]["length"])
              {return i$3;}
             else
              {var match$1=t[1][i$3][j][1];
               
               var exit$1;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit$1=102;}}
               else
                {switch(match$1[0])
                  {case 0:return loop$1(i$3+1);case 1:exit$1=102;}}
               
               switch(exit$1){case 102:return i$3;}
               }
             };
         
         var i1=loop$1(i$2+1);
         
         var
          loop$2=
           function(i$3)
            {if(i$3=t[1]["length"])
              {return i$3;}
             else
              {var match$1=t[1][i$3][j][1];
               
               if("unknown primitive:isint")
                {return loop$2(i$3+1);}
               else
                {return i$3;}
               }
             };
         
         var i2=loop$2(i1);
         
         var
          loop$3=
           function(i$3)
            {if(i$3=i2)
              {return 1;}
             else
              {if(j>0&&"unknown primitive:caml_equal")
                {return 0;}
               else
                {return loop$3(i$3+1);}
               }
             };
         
         var separated_left=loop$3(i$2);
         
         var
          loop$4=
           function(i$3)
            {if(i$3=i2)
              {return 1;}
             else
              {if(j2<t[1][i$3]["length"]&&"unknown primitive:caml_equal")
                {return 0;}
               else
                {return loop$4(i$3+1);}
               }
             };
         
         var separated_right=loop$4(i$2);
         
         if(!separated_left||!separated_right)
          {return 0;}
         else
          {if(i2<t[1]["length"])
            {return 0;}
           else
            {return [/* Some */0,do_shorten_too_long(t,i$2,j,j2)];}
           }
         
        }}
    
    switch(exit){case 108:return 0;}
    };

var
 fall2_right=
  function(t)
   {var
     loop_i=
      function(i$2,t$1)
       {if(i$2<=0)
         {return t$1;}
        else
         {var
           loop_j=
            function(j,t$2)
             {if(j<0)
               {return loop_i(i$2-1,t$2);}
              else
               {var match=try_fall2_right(t$2,i$2,j);
                
                if(match)
                 {var t$3=match[1];return loop_i(t$3[1]["length"]-1,t$3);}
                else
                 {return loop_j(j-1,t$2);}
                }
              };
          
          return loop_j(t$1[1][i$2]["length"]-2,t$1);
          }
        };
    
    return loop_i(t[1]["length"]-1,t);
    };

var
 fall2_left=
  function(t)
   {var
     loop_i=
      function(i$2,t$1)
       {if(i$2<=0)
         {return t$1;}
        else
         {var
           loop_j=
            function(j,t$2)
             {if(j>=t$2[1][i$2]["length"])
               {return loop_i(i$2-1,t$2);}
              else
               {var match=try_fall2_left(t$2,i$2,j);
                
                if(match)
                 {var t$3=match[1];return loop_i(t$3[1]["length"]-1,t$3);}
                else
                 {return loop_j(j+1,t$2);}
                }
              };
          
          return loop_j(1,t$1);
          }
        };
    
    return loop_i(t[1]["length"]-1,t);
    };

var
 shorten_too_long=
  function(t)
   {var
     loop_i=
      function(i$2,t$1)
       {if(i$2<=0)
         {return t$1;}
        else
         {var
           loop_j=
            function(j,t$2)
             {if(j>=t$2[1][i$2]["length"])
               {return loop_i(i$2-1,t$2);}
              else
               {var match=try_shorten_too_long(t$2,i$2,j);
                
                if(match)
                 {var t$3=match[1];return loop_i(t$3[1]["length"]-1,t$3);}
                else
                 {return loop_j(j+1,t$2);}
                }
              };
          
          return loop_j(1,t$1);
          }
        };
    
    return loop_i(t[1]["length"]-1,t);
    };

var
 top_adjust=
  function(t)
   {var
     loop=
      function(i$2)
       {if(i$2=t[1]["length"])
         {return i$2;}
        else
         {var
           loop_j=
            function(j)
             {if(j=t[1][i$2]["length"])
               {return loop(i$2+1);}
              else
               {if(t[1][i$2][j][1]!=0){return i$2;}else{return loop_j(j+1);}}
              };
          
          return loop_j(0);
          }
        };
    
    var di=loop(0);
    
    if(di>0)
     {for(var i$2=0;i$2<=t[1]["length"]-1-di;i$2++){t[1][i$2]=t[1][i$2+di],0}
      
      return [/* record */0,$$Array["sub"](t[1],0,t[1]["length"]-di)];
      }
    else
     {return t;}
    };

var
 bottom_adjust=
  function(t)
   {var
     loop=
      function(i$2)
       {if(i$2<0)
         {return i$2;}
        else
         {var
           loop_j=
            function(j)
             {if(j=t[1][i$2]["length"])
               {return loop(i$2-1);}
              else
               {if(t[1][i$2][j][1]!=0){return i$2;}else{return loop_j(j+1);}}
              };
          
          return loop_j(0);
          }
        };
    
    var last_i=loop(t[1]["length"]-1);
    
    if(last_i<t[1]["length"]-1)
     {return [/* record */0,$$Array["sub"](t[1],0,last_i+1)];}
    else
     {return t;}
    };

var
 invert_dag=
  function(d)
   {var d$1=[/* record */0,$$Array["copy"](d[1])];
    
    for(var i$2=0;i$2<=d$1[1]["length"]-1;i$2++)
     {var n=d$1[1][i$2];
      
      d$1[1][i$2]=
      [/* record */0,
       List["map"](function(x){return x;},n[3]),
       n[2],
       List["map"](function(x){return x;},n[1])],
      0}
    
    return d$1;
    };

var
 invert_table=
  function(t)
   {var t$prime=[/* record */0,$$Array["copy"](t[1])];
    
    var len=t[1]["length"];
    
    for(var i$2=0;i$2<=len-1;i$2++)
     {t$prime[1][i$2]=
      $$Array["init"]
       (t[1][0]["length"],
        function(j)
         {var d=t[1][len-1-i$2][j];return [/* record */0,d[1],d[2]];}),
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
    
    var match=fall(0,t$1);
    
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
      function(i$2)
       {if(i$2=str["length"])
         {return i$2;}
        else
         {var match=str[i$2];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=69;}else{exit=70;}}
          else
           {if(switcher!=23){exit=70;}else{exit=69;}}
          
          switch(exit){case 70:return i$2;case 69:return loop(i$2+1);}
          }
        };
    
    var start=loop(0);
    
    var
     loop$1=
      function(i$2)
       {if(i$2=-1)
         {return i$2+1;}
        else
         {var match=str[i$2];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=66;}else{exit=67;}}
          else
           {if(switcher!=23){exit=67;}else{exit=66;}}
          
          switch(exit){case 67:return i$2+1;case 66:return loop$1(i$2-1);}
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
       {return [/* Some */0,strip_spaces(line)];}
      }
    catch(exn){if(exn=End_of_file){return 0;}else{throw exn;}}
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
           {return [/* tuple */0,n,cnt];}
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
                
                return [/* tuple */0,
                        [/* :: */0,match$1[2],pl$2],
                        [/* :: */0,match$1[1],pnl],
                        nl$1,
                        cnt$1];
                }
              catch(exn)
               {if(exn=Not_found)
                 {var n=[/* record */0,0,p,0];
                  
                  var p$1=cnt$1;
                  
                  return [/* tuple */0,
                          [/* :: */0,p$1,pl$2],
                          [/* :: */0,n,pnl],
                          [/* :: */0,n,nl$1],
                          cnt$1+1];
                  }
                else
                 {throw exn;}
                }
              },
            [/* tuple */0,0,0,nl,cnt],
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
                return [/* tuple */0,[/* :: */0,match$2[2],cl$2],nl$1,cnt$1];
                }
              catch(exn)
               {if(exn=Not_found)
                 {var n$1=[/* record */0,pl$2,c,0];
                  
                  var c$1=cnt$1;
                  
                  return [/* tuple */0,
                          [/* :: */0,c$1,cl$2],
                          [/* :: */0,n$1,nl$1],
                          cnt$1+1];
                  }
                else
                 {throw exn;}
                }
              },
            [/* tuple */0,0,match[3],match[4]],
            cl$1);
        
        var cl$2=List["rev"](match$1[1]);
        
        List["iter"]
         (function(p){return p[3]=Pervasives["@"](p[3],cl$2),0;},match[2]);
        return [/* tuple */0,match$1[2],match$1[3]];
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
                  {return input_parents(nl,[/* :: */0,p,pl],cnt,get_line(ic));
                   }
                 }
               }
             else
              {if(pl=0)
                {return Pervasives["failwith"](line);}
               else
                {return input_children(nl,pl,0,cnt,[/* Some */0,line]);}
               }
             }
          }
        else
         {if(pl=0)
           {return [/* tuple */0,nl,cnt];}
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
                {if(cl=0)
                  {return Pervasives["failwith"](line);}
                 else
                  {var match$1=add_node(pl,cl,nl,cnt);
                   
                   return input_parents
                           (match$1[1],0,match$1[2],[/* Some */0,line]);
                   }
                 }
               }
             else
              {var c=strip_spaces($$String["sub"](line,1,line["length"]-1));
               
               if("unknown primitive:caml_string_equal")
                {return Pervasives["failwith"](line);}
               else
                {return input_children
                         (nl,pl,[/* :: */0,c,cl],cnt,get_line(ic));
                 }
               }
             }
          }
        else
         {if(cl=0)
           {return Pervasives["failwith"]("end of file 2");}
          else
           {return add_node(pl,cl,nl,cnt);}
          }
        };
    
    var match=input_parents(0,0,0,get_line(ic));
    
    return [/* record */0,$$Array["of_list"](List["rev"](match[1]))];
    };

var
 map_dag=
  function(f,d)
   {var
     a=
      $$Array["map"]
       (function(d$1){return [/* record */0,d$1[1],f(d$1[2]),d$1[3]];},d[1]);
    
    return [/* record */0,a];
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

var phony=function(param){return 0;};

var indi_txt=function(n){return n[2];};

var
 string_table=
  function(border,hts)
   {var buf=Buffer["create"](30);
    
    Printf["bprintf"]
     (buf,
      [0,[11,"<center><table border=",[4,0,0,0,0]],"<center><table border=%d"],
      border);
    Printf["bprintf"]
     (buf,
      [0,
       [11," cellspacing=0 cellpadding=0>\n",0],
       " cellspacing=0 cellpadding=0>\n"]);
    for(var i$2=0;i$2<=hts["length"]-1;i$2++)
     {Printf["bprintf"](buf,[0,[11,"<tr>\n",0],"<tr>\n"]);
      for(var j=0;j<=hts[i$2]["length"]-1;j++)
       {var match=hts[i$2][j];
        
        var td=match[3];
        
        var colspan=match[1];
        
        Printf["bprintf"](buf,[0,[11,"<td",0],"<td"]);
        if
         ((colspan=1)&&
          ("unknown primitive:caml_equal"||"unknown primitive:caml_equal"))
         {}
        else
         {Printf["bprintf"]
           (buf,[0,[11," colspan=",[4,0,0,0,0]]," colspan=%d"],colspan)}
        
        switch(match[2][0])
         {case 0:
           var exit;
           
           switch(td)
            {case 0:exit=29;
             case 1:
              if(td[1]!=0)
               {exit=29;}
              else
               {Printf["bprintf"](buf,[0,[11," align=left",0]," align=left"])}
              
             }
           
           switch(exit){case 29:}
           
          case 1:
           Printf["bprintf"](buf,[0,[11," align=center",0]," align=center"]);
          case 2:
           Printf["bprintf"](buf,[0,[11," align=right",0]," align=right"])
          }
        
        Printf["bprintf"](buf,[0,[12,62,0],">"]);
        switch(td)
         {case 0:Printf["bprintf"](buf,[0,[2,0,0],"%s"],td[1]);
          case 1:
           Printf["bprintf"]
            (buf,[0,[11,"<hr noshade size=1",0],"<hr noshade size=1"]);
           switch(td[1][0])
            {case 0:
              Printf["bprintf"]
               (buf,
                [0,
                 [11,' width="50',[12,37,[11,'" align=left',0]]],
                 ' width="50%%" align=left']);
             case 1:
             case 2:
              Printf["bprintf"]
               (buf,
                [0,
                 [11,' width="50',[12,37,[11,'" align=right',0]]],
                 ' width="50%%" align=right'])
             }
           
           Printf["bprintf"](buf,[0,[12,62,0],">"])
          }
        
        Printf["bprintf"](buf,[0,[11,"</td>\n",0],"</td>\n"])}
      }
    
    Printf["bprintf"]
     (buf,[0,[11,"</table></center>\n",0],"</table></center>\n"]);
    return Buffer["contents"](buf);
    };

var fname="";

var invert=[0,0];

var $$char=0;

var border=[0,0];

var no_optim=[0,0];

var no_group=[0,0];

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
       (function(c){return [/* tuple */0,c[1],[/* Some */0,[/* Cl */0,c]]];},
        cl_list);
    
    var
     clt_list2=
      List["map"]
       (function(ct)
         {return [/* tuple */0,ct[1],[/* Some */0,[/* Cltype */1,ct,0]]];},
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
                        switch(match$1){case 0:$js=match$1[1];default:$js=0;}
                        var
                         l=
                          iter
                           (List["map"]
                             (function(inh){return [/* tuple */0,inh[1],inh[2]];},$js));
                        
                       case 1:
                        var match$2=match[1][6];
                        
                        var $js$1;
                        switch(match$2){case 0:$js$1=match$2[1];case 1:$js$1=0;}
                        var
                         l=
                          iter
                           (List["map"]
                             (function(inh){return [/* tuple */0,inh[1],inh[2]];},$js$1));
                        
                       }
                     }
                   else
                    {var l=0;}
                   
                   return [/* :: */0,
                           [/* tuple */0,param[1],cct_opt],
                           Pervasives["@"](acc,l)];
                   },
                 0,
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
           {return distinct([/* :: */0,[/* tuple */0,name,match[2]],acc],q);}
          }
        else
         {return acc;}
        };
    
    var distinct_classes=distinct(0,all_classes);
    
    var
     f=
      function(n,param)
       {if(param)
         {return [/* :: */0,[/* tuple */0,param[1][1],n],f(n+1,param[2])];}
        else
         {return 0;}
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
             
             switch(match$1){case 0:var $js=match$1[1];default:var $js=0;}
             
            case 1:
             var match$2=match[1][6];
             
             switch(match$2){case 0:var $js=match$2[1];case 1:var $js=0;}
             
            }
          }
        else
         {var $js=0;}
        return [/* record */0,
                List["map"]
                 (function(inh){return List["assoc"](inh[1],liste_index);},
                  $js),
                [/* tuple */0,param[1],cct_opt],
                0];
        };
    
    var dag=[/* record */0,$$Array["map"](fmap,array1)];
    
    var
     fiter=
      function(i$2,node)
       {var l=$$Array["to_list"](dag[1]);
        
        var
         l2=
          List["map"]
           (function(n){return n[2];},
            List["filter"](function(n){return List["mem"](i$2,n[1]);},l));
        
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

