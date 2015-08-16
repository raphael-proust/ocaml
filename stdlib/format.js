// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var CamlinternalFormat=require("./camlinternalFormat.js");
var Pervasives=require("./pervasives.js");
var Buffer=require("./buffer.js");
var CamlPrimitive=require("./camlPrimitive.js");


var make_queue=function(param){return /* record */[0,/* Nil */0,/* Nil */0];};

var clear_queue=function(q){q[1]=/* Nil */0;return q[2]=/* Nil */0;};

var
 add_queue=
  function(x,q)
   {var c=/* Cons */[0,/* record */[0,x,/* Nil */0]];
    
    var match=q[1];
    
    if(match)
     {var cell=match[1];q[1]=c;return cell[2]=c;}
    else
     {q[1]=c;return q[2]=c;}
    };

var Empty_queue=CamlPrimitive["caml_set_oo_id"]([248,"Format.Empty_queue",0]);

var
 peek_queue=
  function(param)
   {var match=param[2];
    
    if(match)
     {var match$1=match[1];var x=match$1[1];return x;}
    else
     {throw Empty_queue;}
    };

var
 take_queue=
  function(q)
   {var match=q[2];
    
    if(match)
     {var match$1=match[1];
      
      var x=match$1[1];
      
      var tl=match$1[2];
      
      q[2]=tl;
      if(tl===/* Nil */0){q[1]=/* Nil */0}else{}
      
      return x;
      }
    else
     {throw Empty_queue;}
    };

var
 pp_enqueue=
  function(state,token)
   {var len=token[3];
    
    state[13]=state[13]+len;
    return add_queue(token,state[27]);
    };

var
 pp_clear_queue=
  function(state){state[12]=1;state[13]=1;return clear_queue(state[27]);};

var pp_infinity=1000000010;

var pp_output_string=function(state,s){return state[17](s,0,s["length"]);};

var pp_output_newline=function(state){return state[19](/* () */0);};

var pp_output_spaces=function(state,n){return state[20](n);};

var
 break_new_line=
  function(state,offset,width)
   {pp_output_newline(state);
    state[11]=/* true */1;
    var indent=state[6]-width+offset;
    
    var real_indent=Pervasives["min"](state[8],indent);
    
    state[10]=real_indent;
    state[9]=state[6]-state[10];
    return pp_output_spaces(state,state[10]);
    };

var break_line=function(state,width){return break_new_line(state,0,width);};

var
 break_same_line=
  function(state,width)
   {state[9]=state[9]-width;return pp_output_spaces(state,width);};

var
 pp_force_break_line=
  function(state)
   {var match=state[2];
    
    if(match)
     {var match$1=match[1];
      
      var width=match$1[2];
      
      var bl_ty=match$1[1];
      
      if(width>state[9])
       {if(bl_ty!==0)
         {if(bl_ty>=5){return /* () */0;}else{return break_line(state,width);}
          }
        else
         {return /* () */0;}
        }
      else
       {return 0;}
      }
    else
     {return pp_output_newline(state);}
    };

var
 pp_skip_token=
  function(state)
   {var match=take_queue(state[27]);
    
    var size=match[1];
    
    var len=match[3];
    
    state[12]=state[12]-len;
    return state[9]=state[9]+size;
    };

var
 format_pp_token=
  function(state,size,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         var match=state[3];
         
         if(match)
          {var match$1=match[1];
           
           var tabs=match$1[1];
           
           var
            add_tab=
             function(n,ls)
              {if(ls)
                {var l=ls[2];
                 
                 var x=ls[1];
                 
                 if(CamlPrimitive["caml_lessthan"](n,x))
                  {return /* :: */[0,n,ls];}
                 else
                  {return /* :: */[0,x,add_tab(n,l)];}
                 }
               else
                {return /* :: */[0,n,/* [] */0];}
               };
           
           return tabs[1]=add_tab(state[6]-state[9],tabs[1]);
           }
         else
          {return /* () */0;}
         
        case 1:
         var match$2=state[2];
         
         if(match$2)
          {var ls=match$2[2];return state[2]=ls;}
         else
          {return /* () */0;}
         
        case 2:
         var match$3=state[3];
         
         if(match$3)
          {var ls$1=match$3[2];return state[3]=ls$1;}
         else
          {return /* () */0;}
         
        case 3:
         var match$4=state[2];
         
         if(match$4)
          {var match$5=match$4[1];
           
           var width=match$5[2];
           
           return break_line(state,width);
           }
         else
          {return pp_output_newline(state);}
         
        case 4:
         if(state[10]!==state[6]-state[9])
          {return pp_skip_token(state);}
         else
          {return 0;}
         
        case 5:
         var match$6=state[5];
         
         if(match$6)
          {var tags=match$6[2];
           
           var tag_name=match$6[1];
           
           var marker=state[24](tag_name);
           
           pp_output_string(state,marker);
           return state[5]=tags;
           }
         else
          {return /* () */0;}
         
        }}
    else
     {switch(param[0])
       {case 0:
         var s=param[1];
         
         state[9]=state[9]-size;
         pp_output_string(state,s);
         return state[11]=/* false */0;
         
        case 1:
         var off=param[2];
         
         var n=param[1];
         
         var match$7=state[2];
         
         if(match$7)
          {var match$8=match$7[1];
           
           var width$1=match$8[2];
           
           var ty=match$8[1];
           
           switch(ty)
            {case 0:return break_same_line(state,n);
             case 1:return break_new_line(state,off,width$1);
             case 2:return break_new_line(state,off,width$1);
             case 3:
              if(size>state[9])
               {return break_new_line(state,off,width$1);}
              else
               {return break_same_line(state,n);}
              
             case 4:
              if(state[11])
               {return break_same_line(state,n);}
              else
               {if(size>state[9])
                 {return break_new_line(state,off,width$1);}
                else
                 {if(state[10]>state[6]-width$1+off)
                   {return break_new_line(state,off,width$1);}
                  else
                   {return break_same_line(state,n);}
                  }
                }
              
             case 5:return break_same_line(state,n);
             }
           }
         else
          {return /* () */0;}
         
        case 2:
         var off$1=param[2];
         
         var n$1=param[1];
         
         var insertion_point=state[6]-state[9];
         
         var match$9=state[3];
         
         if(match$9)
          {var match$10=match$9[1];
           
           var tabs$1=match$10[1];
           
           var
            find=
             function(n,param$1)
              {if(param$1)
                {var l=param$1[2];
                 
                 var x=param$1[1];
                 
                 if(CamlPrimitive["caml_greaterequal"](x,n))
                  {return x;}
                 else
                  {return find(n,l);}
                 }
               else
                {throw CamlPrimitive["caml_global_data"]["Not_found"];}
               };
           
           var match$11=tabs$1[1];
           
           if(match$11)
            {var x=match$11[1];
             
             try
              {var tab=find(insertion_point,tabs$1[1]);}
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {var tab=x;}
               else
                {throw exn;}
               }
             }
           else
            {var tab=insertion_point;}
           
           var offset=tab-insertion_point;
           
           if(offset>=0)
            {return break_same_line(state,offset+n$1);}
           else
            {return break_new_line(state,tab+off$1,state[6]);}
           }
         else
          {return /* () */0;}
         
        case 3:
         var ty$1=param[2];
         
         var off$2=param[1];
         
         var insertion_point$1=state[6]-state[9];
         
         if(insertion_point$1>state[8]){pp_force_break_line(state)}else{}
         
         var offset$1=state[9]-off$2;
         
         if(ty$1!==1)
          {if(size>state[9])
            {var bl_type=ty$1;}
           else
            {var bl_type=/* Pp_fits */5;}
           }
         else
          {var bl_type=/* Pp_vbox */1;}
         
         return state[2]=
                /* :: */[0,/* Format_elem */[0,bl_type,offset$1],state[2]];
         
        case 4:var tbox=param[1];return state[3]=/* :: */[0,tbox,state[3]];
        case 5:
         var tag_name$1=param[1];
         
         var marker$1=state[23](tag_name$1);
         
         pp_output_string(state,marker$1);
         return state[5]=/* :: */[0,tag_name$1,state[5]];
         
        }}
    };

var
 advance_loop=
  function(state)
   {var match=peek_queue(state[27]);
    
    var size=match[1];
    
    var len=match[3];
    
    var tok=match[2];
    
    var size$1=size;
    
    if(!(size$1<0&&state[13]-state[12]<state[9]))
     {take_queue(state[27]);
      format_pp_token(state,size$1<0?pp_infinity:size$1,tok);
      state[12]=len+state[12];
      return advance_loop(state);
      }
    else
     {return 0;}
    };

var
 advance_left=
  function(state)
   {try
     {return advance_loop(state);}
    catch(exn){if(exn===Empty_queue){return /* () */0;}else{throw exn;}}
    };

var
 enqueue_advance=
  function(state,tok){pp_enqueue(state,tok);return advance_left(state);};

var
 make_queue_elem=
  function(size,tok,len){return /* record */[0,size,tok,len];};

var
 enqueue_string_as=
  function(state,size,s)
   {var len=size;
    
    return enqueue_advance(state,make_queue_elem(size,/* Pp_text */[0,s],len));
    };

var
 enqueue_string=
  function(state,s)
   {var len=s["length"];return enqueue_string_as(state,len,s);};

var q_elem=make_queue_elem(-1,[/* Pp_text */0,""],0);

var scan_stack_bottom=/* :: */[0,/* Scan_elem */[0,-1,q_elem],/* [] */0];

var clear_scan_stack=function(state){return state[1]=scan_stack_bottom;};

var
 set_size=
  function(state,ty)
   {var match=state[1];
    
    if(match)
     {var match$1=match[1];
      
      var queue_elem=match$1[2];
      
      var left_tot=match$1[1];
      
      var size=queue_elem[1];
      
      var t=match[2];
      
      var tok=queue_elem[2];
      
      var size$1=size;
      
      if(left_tot<state[12])
       {return clear_scan_stack(state);}
      else
       {var exit;
        
        if(typeof tok==="number")
         {switch(tok){}}
        else
         {switch(tok[0])
           {case 1:exit=193;
            case 2:exit=193;
            case 3:
             if(!ty)
              {queue_elem[1]=state[13]+size$1;return state[1]=t;}
             else
              {return 0;}
             
            default:exit=194;}}
        
        switch(exit)
         {case 193:
           if(ty)
            {queue_elem[1]=state[13]+size$1;return state[1]=t;}
           else
            {return 0;}
           
          case 194:return /* () */0;
          }
        }
      }
    else
     {return /* () */0;}
    };

var
 scan_push=
  function(state,b,tok)
   {pp_enqueue(state,tok);
    if(b){set_size(state,/* true */1)}else{}
    
    return state[1]=/* :: */[0,/* Scan_elem */[0,state[13],tok],state[1]];
    };

var
 pp_open_box_gen=
  function(state,indent,br_ty)
   {state[14]=state[14]+1;
    if(state[14]<state[15])
     {var elem=make_queue_elem(-state[13],/* Pp_begin */[3,indent,br_ty],0);
      
      return scan_push(state,/* false */0,elem);
      }
    else
     {if(state[14]===state[15])
       {return enqueue_string(state,state[16]);}
      else
       {return 0;}
      }
    };

var
 pp_open_sys_box=
  function(state){return pp_open_box_gen(state,0,/* Pp_hovbox */3);};

var
 pp_close_box=
  function(state,param)
   {if(state[14]>1)
     {if(state[14]<state[15])
       {pp_enqueue(state,/* record */[0,0,/* Pp_end */1,0]),
        set_size(state,/* true */1),
        set_size(state,/* false */0)}
      else
       {}
      
      return state[14]=state[14]-1;
      }
    else
     {return 0;}
    };

var
 pp_open_tag=
  function(state,tag_name)
   {if(state[21])
     {state[4]=/* :: */[0,tag_name,state[4]],state[25](tag_name)}
    else
     {}
    
    if(state[22])
     {return pp_enqueue
              (state,/* record */[0,0,/* Pp_open_tag */[5,tag_name],0]);
      }
    else
     {return 0;}
    };

var
 pp_close_tag=
  function(state,param)
   {if(state[22])
     {pp_enqueue(state,/* record */[0,0,/* Pp_close_tag */5,0])}
    else
     {}
    
    if(state[21])
     {var match=state[4];
      
      if(match)
       {var tags=match[2];
        
        var tag_name=match[1];
        
        state[26](tag_name);
        return state[4]=tags;
        }
      else
       {return /* () */0;}
      }
    else
     {return 0;}
    };

var pp_set_print_tags=function(state,b){return state[21]=b;};

var pp_set_mark_tags=function(state,b){return state[22]=b;};

var pp_get_print_tags=function(state,param){return state[21];};

var pp_get_mark_tags=function(state,param){return state[22];};

var
 pp_set_tags=
  function(state,b)
   {pp_set_print_tags(state,b);return pp_set_mark_tags(state,b);};

var
 pp_get_formatter_tag_functions=
  function(state,param)
   {return /* record */[0,state[23],state[24],state[25],state[26]];};

var
 pp_set_formatter_tag_functions=
  function(state,param)
   {var pct=param[4];
    
    var pot=param[3];
    
    var mct=param[2];
    
    var mot=param[1];
    
    state[23]=mot;
    state[24]=mct;
    state[25]=pot;
    return state[26]=pct;
    };

var
 pp_rinit=
  function(state)
   {pp_clear_queue(state);
    clear_scan_stack(state);
    state[2]=/* [] */0;
    state[3]=/* [] */0;
    state[4]=/* [] */0;
    state[5]=/* [] */0;
    state[10]=0;
    state[14]=0;
    state[9]=state[6];
    return pp_open_sys_box(state);
    };

var
 pp_flush_queue=
  function(state,b)
   {while(state[14]>1){pp_close_box(state,/* () */0)}
    
    state[13]=pp_infinity;
    advance_left(state);
    if(b){pp_output_newline(state)}else{}
    
    return pp_rinit(state);
    };

var
 pp_print_as_size=
  function(state,size,s)
   {if(state[14]<state[15])
     {return enqueue_string_as(state,size,s);}
    else
     {return 0;}
    };

var
 pp_print_as=
  function(state,isize,s){return pp_print_as_size(state,isize,s);};

var
 pp_print_string=
  function(state,s){return pp_print_as(state,s["length"],s);};

var
 pp_print_int=
  function(state,i)
   {return pp_print_string(state,Pervasives["string_of_int"](i));};

var
 pp_print_float=
  function(state,f)
   {return pp_print_string(state,Pervasives["string_of_float"](f));};

var
 pp_print_bool=
  function(state,b)
   {return pp_print_string(state,Pervasives["string_of_bool"](b));};

var
 pp_print_char=
  function(state,c){return pp_print_as(state,1,$$String["make"](1,c));};

var
 pp_open_hbox=
  function(state,param){return pp_open_box_gen(state,0,/* Pp_hbox */0);};

var
 pp_open_vbox=
  function(state,indent){return pp_open_box_gen(state,indent,/* Pp_vbox */1);};

var
 pp_open_hvbox=
  function(state,indent)
   {return pp_open_box_gen(state,indent,/* Pp_hvbox */2);};

var
 pp_open_hovbox=
  function(state,indent)
   {return pp_open_box_gen(state,indent,/* Pp_hovbox */3);};

var
 pp_open_box=
  function(state,indent){return pp_open_box_gen(state,indent,/* Pp_box */4);};

var
 pp_print_newline=
  function(state,param)
   {pp_flush_queue(state,/* true */1);return state[18](/* () */0);};

var
 pp_print_flush=
  function(state,param)
   {pp_flush_queue(state,/* false */0);return state[18](/* () */0);};

var
 pp_force_newline=
  function(state,param)
   {if(state[14]<state[15])
     {return enqueue_advance(state,make_queue_elem(0,/* Pp_newline */3,0));}
    else
     {return 0;}
    };

var
 pp_print_if_newline=
  function(state,param)
   {if(state[14]<state[15])
     {return enqueue_advance(state,make_queue_elem(0,/* Pp_if_newline */4,0));
      }
    else
     {return 0;}
    };

var
 pp_print_break=
  function(state,width,offset)
   {if(state[14]<state[15])
     {var
       elem=
        make_queue_elem(-state[13],/* Pp_break */[1,width,offset],width);
      
      return scan_push(state,/* true */1,elem);
      }
    else
     {return 0;}
    };

var pp_print_space=function(state,param){return pp_print_break(state,1,0);};

var pp_print_cut=function(state,param){return pp_print_break(state,0,0);};

var
 pp_open_tbox=
  function(state,param)
   {state[14]=state[14]+1;
    if(state[14]<state[15])
     {var
       elem=
        make_queue_elem(0,/* Pp_tbegin */[4,/* Pp_tbox */[0,[0,/* [] */0]]],0);
      
      return enqueue_advance(state,elem);
      }
    else
     {return 0;}
    };

var
 pp_close_tbox=
  function(state,param)
   {if(state[14]>1)
     {if(state[14]<state[15])
       {var elem=make_queue_elem(0,/* Pp_tend */2,0);
        
        enqueue_advance(state,elem);
        return state[14]=state[14]-1;
        }
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var
 pp_print_tbreak=
  function(state,width,offset)
   {if(state[14]<state[15])
     {var
       elem=
        make_queue_elem(-state[13],/* Pp_tbreak */[2,width,offset],width);
      
      return scan_push(state,/* true */1,elem);
      }
    else
     {return 0;}
    };

var pp_print_tab=function(state,param){return pp_print_tbreak(state,0,0);};

var
 pp_set_tab=
  function(state,param)
   {if(state[14]<state[15])
     {var elem=make_queue_elem(0,/* Pp_stab */0,0);
      
      return enqueue_advance(state,elem);
      }
    else
     {return 0;}
    };

var
 pp_print_list=
  function($staropt$star,pp_v,ppf,param)
   {if($staropt$star)
     {var $starsth$star=$staropt$star[1];var pp_sep=$starsth$star;}
    else
     {var pp_sep=pp_print_cut;}
    
    if(param)
     {var vs=param[2];
      
      var v=param[1];
      
      if(vs)
       {var v$1=v;
        
        pp_v(ppf,v$1);
        pp_sep(ppf,/* () */0);
        return pp_print_list(/* Some */[0,pp_sep],pp_v,ppf,vs);
        }
      else
       {return pp_v(ppf,v);}
      }
    else
     {return /* () */0;}
    };

var
 pp_print_text=
  function(ppf,s)
   {var len=s["length"];
    
    var left=[0,0];
    
    var right=[0,0];
    
    var
     flush=
      function(param)
       {pp_print_string(ppf,$$String["sub"](s,left[1],right[1]-left[1]));
        right[0]++;
        return left[1]=right[1];
        };
    
    while(right[1]!==len)
     {var match=s[right[1]];
      
      if(match!==10)
       {if(match!==32)
         {right[0]++}
        else
         {flush(/* () */0),pp_print_space(ppf,/* () */0)}
        }
      else
       {flush(/* () */0),pp_force_newline(ppf,/* () */0)}
      }
    
    if(left[1]!==len){return flush(/* () */0);}else{return 0;}
    };

var
 pp_set_max_boxes=
  function(state,n){if(n>1){return state[15]=n;}else{return 0;}};

var pp_get_max_boxes=function(state,param){return state[15];};

var pp_over_max_boxes=function(state,param){return state[14]===state[15];};

var pp_set_ellipsis_text=function(state,s){return state[16]=s;};

var pp_get_ellipsis_text=function(state,param){return state[16];};

var
 pp_limit=
  function(n){if(n<pp_infinity){return n;}else{return -1+pp_infinity;}};

var
 pp_set_min_space_left=
  function(state,n)
   {if(n>=1)
     {var n$1=pp_limit(n);
      
      state[7]=n$1;
      state[8]=state[6]-state[7];
      return pp_rinit(state);
      }
    else
     {return 0;}
    };

var
 pp_set_max_indent=
  function(state,n){return pp_set_min_space_left(state,state[6]-n);};

var pp_get_max_indent=function(state,param){return state[8];};

var
 pp_set_margin=
  function(state,n)
   {if(n>=1)
     {var n$1=pp_limit(n);
      
      state[6]=n$1;
      if(state[8]<=state[6])
       {var new_max_indent=state[8];}
      else
       {var
         new_max_indent=
          Pervasives["max"](Pervasives["max"](state[6]-state[7],state[6]/2),1);
        }
      
      return pp_set_max_indent(state,new_max_indent);
      }
    else
     {return 0;}
    };

var pp_get_margin=function(state,param){return state[6];};

var
 pp_set_formatter_out_functions=
  function(state,param)
   {var i=param[4];
    
    var h=param[3];
    
    var g=param[2];
    
    var f=param[1];
    
    state[17]=f;
    state[18]=g;
    state[19]=h;
    return state[20]=i;
    };

var
 pp_get_formatter_out_functions=
  function(state,param)
   {return /* record */[0,state[17],state[18],state[19],state[20]];};

var
 pp_set_formatter_output_functions=
  function(state,f,g){state[17]=f;return state[18]=g;};

var
 pp_get_formatter_output_functions=
  function(state,param){return /* tuple */[0,state[17],state[18]];};

var
 pp_set_all_formatter_output_functions=
  function(state,f,g,h,i)
   {pp_set_formatter_output_functions(state,f,g);
    state[19]=h;
    return state[20]=i;
    };

var
 pp_get_all_formatter_output_functions=
  function(state,param)
   {return /* tuple */[0,state[17],state[18],state[19],state[20]];};

var display_newline=function(state,param){return state[17]("\n",0,1);};

var blank_line=$$String["make"](80,32);

var
 display_blanks=
  function(state,n)
   {if(n>0)
     {if(n<=80)
       {return state[17](blank_line,0,n);}
      else
       {state[17](blank_line,0,80);return display_blanks(state,n-80);}
      }
    else
     {return 0;}
    };

var
 pp_set_formatter_out_channel=
  function(state,os)
   {state[17]=Pervasives["output_substring"](os);
    state[18]=function(param){return Pervasives["flush"](os);};
    state[19]=display_newline(state);
    return state[20]=display_blanks(state);
    };

var
 default_pp_mark_open_tag=
  function(s){return Pervasives["^"]("<",Pervasives["^"](s,">"));};

var
 default_pp_mark_close_tag=
  function(s){return Pervasives["^"]("</",Pervasives["^"](s,">"));};

var default_pp_print_open_tag=function(prim){return prim;};

var default_pp_print_close_tag=function(prim){return prim;};

var
 pp_make_formatter=
  function(f,g,h,i)
   {var pp_q=make_queue(/* () */0);
    
    var sys_tok=make_queue_elem(-1,[/* Pp_begin */3,0,/* Pp_hovbox */3],0);
    
    add_queue(sys_tok,pp_q);
    var
     sys_scan_stack=
      /* :: */[0,/* Scan_elem */[0,1,sys_tok],scan_stack_bottom];
    
    return /* record */[0,
            sys_scan_stack,
            /* [] */0,
            /* [] */0,
            /* [] */0,
            /* [] */0,
            78,
            10,
            78-10,
            78,
            0,
            /* true */1,
            1,
            1,
            1,
            Pervasives["max_int"],
            ".",
            f,
            g,
            h,
            i,
            /* false */0,
            /* false */0,
            default_pp_mark_open_tag,
            default_pp_mark_close_tag,
            default_pp_print_open_tag,
            default_pp_print_close_tag,
            pp_q];
    };

var
 make_formatter=
  function(output,flush)
   {var
     ppf=
      pp_make_formatter
       (output,
        flush,
        function(prim){return prim;},
        function(prim){return prim;});
    
    ppf[19]=display_newline(ppf);
    ppf[20]=display_blanks(ppf);
    return ppf;
    };

var
 formatter_of_out_channel=
  function(oc)
   {return make_formatter
            (Pervasives["output_substring"](oc),
             function(param){return Pervasives["flush"](oc);});
    };

var
 formatter_of_buffer=
  function(b)
   {return make_formatter
            (Buffer["add_substring"](b),function(prim){return prim;});
    };

var stdbuf=Buffer["create"](512);

var std_formatter=formatter_of_out_channel(Pervasives["stdout"]);

var err_formatter=formatter_of_out_channel(Pervasives["stderr"]);

var str_formatter=formatter_of_buffer(stdbuf);

var
 flush_str_formatter=
  function(param)
   {pp_flush_queue(str_formatter,/* false */0);
    var s=Buffer["contents"](stdbuf);
    
    Buffer["reset"](stdbuf);
    return s;
    };

var
 flush_buf_formatter=
  function(buf,ppf)
   {pp_flush_queue(ppf,/* false */0);
    var s=Buffer["contents"](buf);
    
    Buffer["reset"](buf);
    return s;
    };

var open_hbox=pp_open_hbox(std_formatter);

var open_vbox=pp_open_vbox(std_formatter);

var open_hvbox=pp_open_hvbox(std_formatter);

var open_hovbox=pp_open_hovbox(std_formatter);

var open_box=pp_open_box(std_formatter);

var close_box=pp_close_box(std_formatter);

var open_tag=pp_open_tag(std_formatter);

var close_tag=pp_close_tag(std_formatter);

var print_as=pp_print_as(std_formatter);

var print_string=pp_print_string(std_formatter);

var print_int=pp_print_int(std_formatter);

var print_float=pp_print_float(std_formatter);

var print_char=pp_print_char(std_formatter);

var print_bool=pp_print_bool(std_formatter);

var print_break=pp_print_break(std_formatter);

var print_cut=pp_print_cut(std_formatter);

var print_space=pp_print_space(std_formatter);

var force_newline=pp_force_newline(std_formatter);

var print_flush=pp_print_flush(std_formatter);

var print_newline=pp_print_newline(std_formatter);

var print_if_newline=pp_print_if_newline(std_formatter);

var open_tbox=pp_open_tbox(std_formatter);

var close_tbox=pp_close_tbox(std_formatter);

var print_tbreak=pp_print_tbreak(std_formatter);

var set_tab=pp_set_tab(std_formatter);

var print_tab=pp_print_tab(std_formatter);

var set_margin=pp_set_margin(std_formatter);

var get_margin=pp_get_margin(std_formatter);

var set_max_indent=pp_set_max_indent(std_formatter);

var get_max_indent=pp_get_max_indent(std_formatter);

var set_max_boxes=pp_set_max_boxes(std_formatter);

var get_max_boxes=pp_get_max_boxes(std_formatter);

var over_max_boxes=pp_over_max_boxes(std_formatter);

var set_ellipsis_text=pp_set_ellipsis_text(std_formatter);

var get_ellipsis_text=pp_get_ellipsis_text(std_formatter);

var set_formatter_out_channel=pp_set_formatter_out_channel(std_formatter);

var set_formatter_out_functions=pp_set_formatter_out_functions(std_formatter);

var get_formatter_out_functions=pp_get_formatter_out_functions(std_formatter);

var
 set_formatter_output_functions=
  pp_set_formatter_output_functions(std_formatter);

var
 get_formatter_output_functions=
  pp_get_formatter_output_functions(std_formatter);

var
 set_all_formatter_output_functions=
  pp_set_all_formatter_output_functions(std_formatter);

var
 get_all_formatter_output_functions=
  pp_get_all_formatter_output_functions(std_formatter);

var set_formatter_tag_functions=pp_set_formatter_tag_functions(std_formatter);

var get_formatter_tag_functions=pp_get_formatter_tag_functions(std_formatter);

var set_print_tags=pp_set_print_tags(std_formatter);

var get_print_tags=pp_get_print_tags(std_formatter);

var set_mark_tags=pp_set_mark_tags(std_formatter);

var get_mark_tags=pp_get_mark_tags(std_formatter);

var set_tags=pp_set_tags(std_formatter);

var
 compute_tag=
  function(output,tag_acc)
   {var buf=Buffer["create"](16);
    
    var ppf=formatter_of_buffer(buf);
    
    var match=output(ppf,tag_acc);
    
    var match$1=pp_print_flush(ppf,/* () */0);
    
    var len=Buffer["length"](buf);
    
    if(len<2)
     {return Buffer["contents"](buf);}
    else
     {return Buffer["sub"](buf,1,len-2);}
    };

var
 output_formatting_lit=
  function(ppf,fmting_lit)
   {if(typeof fmting_lit==="number")
     {switch(fmting_lit)
       {case 0:return pp_close_box(ppf,/* () */0);
        case 1:return pp_close_tag(ppf,/* () */0);
        case 2:return pp_print_flush(ppf,/* () */0);
        case 3:return pp_force_newline(ppf,/* () */0);
        case 4:return pp_print_newline(ppf,/* () */0);
        case 5:return pp_print_char(ppf,64);
        case 6:return pp_print_char(ppf,37);
        }}
    else
     {switch(fmting_lit[0])
       {case 0:
         var offset=fmting_lit[3];
         
         var width=fmting_lit[2];
         
         return pp_print_break(ppf,width,offset);
         
        case 1:return /* () */0;
        case 2:
         var c=fmting_lit[1];
         
         pp_print_char(ppf,64);
         return pp_print_char(ppf,c);
         
        }}
    };

var
 output_acc=
  function(ppf,acc)
   {var exit;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0;}}
    else
     {switch(acc[0])
       {case 0:
         var f=acc[2];
         
         var p=acc[1];
         
         output_acc(ppf,p);
         return output_formatting_lit(ppf,f);
         
        case 1:
         var match=acc[2];
         
         var p$1=acc[1];
         
         switch(match[0])
          {case 0:
            var acc$prime=match[1];
            
            output_acc(ppf,p$1);
            return pp_open_tag(ppf,compute_tag(output_acc,acc$prime));
            
           case 1:
            var p$2=p$1;
            
            var acc$prime$1=match[1];
            
            var match$1=output_acc(ppf,p$2);
            
            var
             match$2=
              CamlinternalFormat["open_box_of_string"]
               (compute_tag(output_acc,acc$prime$1));
            
            var bty=match$2[2];
            
            var indent=match$2[1];
            
            return pp_open_box_gen(ppf,indent,bty);
            
           }
         
        case 2:
         var p$3=acc[1];
         
         var exit$1;
         
         if(typeof p$3==="number")
          {switch(p$3){}}
         else
          {switch(p$3[0])
            {case 0:
              var match$3=p$3[2];
              
              if(typeof match$3==="number")
               {switch(match$3){}}
              else
               {switch(match$3[0])
                 {case 1:
                   var s=acc[2];
                   
                   var size=match$3[2];
                   
                   var p$4=p$3[1];
                   
                   var p$5=p$4;
                   
                   var size$1=size;
                   
                   var s$1=s;
                   
                   exit=32;
                   
                  default:exit$1=36;}}
              
             default:exit$1=36;}}
         
         switch(exit$1)
          {case 36:var s$2=acc[2];var p$6=p$3;var s$3=s$2;exit=34;}
         
        case 3:
         var p$7=acc[1];
         
         var exit$2;
         
         if(typeof p$7==="number")
          {switch(p$7){}}
         else
          {switch(p$7[0])
            {case 0:
              var match$4=p$7[2];
              
              if(typeof match$4==="number")
               {switch(match$4){}}
              else
               {switch(match$4[0])
                 {case 1:
                   var c=acc[2];
                   
                   var size$2=match$4[2];
                   
                   var p$8=p$7[1];
                   
                   var p$9=p$8;
                   
                   var size$3=size$2;
                   
                   var c$1=c;
                   
                   exit=33;
                   
                  default:exit$2=38;}}
              
             default:exit$2=38;}}
         
         switch(exit$2)
          {case 38:var c$2=acc[2];var p$10=p$7;var c$3=c$2;exit=35;}
         
        case 4:
         var p$11=acc[1];
         
         var exit$3;
         
         if(typeof p$11==="number")
          {switch(p$11){}}
         else
          {switch(p$11[0])
            {case 0:
              var match$5=p$11[2];
              
              if(typeof match$5==="number")
               {switch(match$5){}}
              else
               {switch(match$5[0])
                 {case 1:
                   var s$4=acc[2];
                   
                   var size$4=match$5[2];
                   
                   var p$12=p$11[1];
                   
                   var p$5=p$12;
                   
                   var size$1=size$4;
                   
                   var s$1=s$4;
                   
                   exit=32;
                   
                  default:exit$3=37;}}
              
             default:exit$3=37;}}
         
         switch(exit$3)
          {case 37:var s$5=acc[2];var p$6=p$11;var s$3=s$5;exit=34;}
         
        case 5:
         var p$13=acc[1];
         
         var exit$4;
         
         if(typeof p$13==="number")
          {switch(p$13){}}
         else
          {switch(p$13[0])
            {case 0:
              var match$6=p$13[2];
              
              if(typeof match$6==="number")
               {switch(match$6){}}
              else
               {switch(match$6[0])
                 {case 1:
                   var c$4=acc[2];
                   
                   var size$5=match$6[2];
                   
                   var p$14=p$13[1];
                   
                   var p$9=p$14;
                   
                   var size$3=size$5;
                   
                   var c$1=c$4;
                   
                   exit=33;
                   
                  default:exit$4=39;}}
              
             default:exit$4=39;}}
         
         switch(exit$4)
          {case 39:var c$5=acc[2];var p$10=p$13;var c$3=c$5;exit=35;}
         
        case 6:
         var f$1=acc[2];var p$15=acc[1];output_acc(ppf,p$15);return f$1(ppf);
        case 7:
         var p$16=acc[1];
         
         output_acc(ppf,p$16);
         return pp_print_flush(ppf,/* () */0);
         
        case 8:
         var msg=acc[2];
         
         var p$17=acc[1];
         
         output_acc(ppf,p$17);
         return Pervasives["invalid_arg"](msg);
         
        }}
    
    switch(exit)
     {case 32:output_acc(ppf,p$5);return pp_print_as_size(ppf,size$1,s$1);
      case 33:
       output_acc(ppf,p$9);
       return pp_print_as_size(ppf,size$3,$$String["make"](1,c$1));
       
      case 34:output_acc(ppf,p$6);return pp_print_string(ppf,s$3);
      case 35:output_acc(ppf,p$10);return pp_print_char(ppf,c$3);
      }
    };

var
 strput_acc=
  function(ppf,acc)
   {var exit;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0;}}
    else
     {switch(acc[0])
       {case 0:
         var f=acc[2];
         
         var p=acc[1];
         
         strput_acc(ppf,p);
         return output_formatting_lit(ppf,f);
         
        case 1:
         var match=acc[2];
         
         var p$1=acc[1];
         
         switch(match[0])
          {case 0:
            var acc$prime=match[1];
            
            strput_acc(ppf,p$1);
            return pp_open_tag(ppf,compute_tag(strput_acc,acc$prime));
            
           case 1:
            var p$2=p$1;
            
            var acc$prime$1=match[1];
            
            var match$1=strput_acc(ppf,p$2);
            
            var
             match$2=
              CamlinternalFormat["open_box_of_string"]
               (compute_tag(strput_acc,acc$prime$1));
            
            var bty=match$2[2];
            
            var indent=match$2[1];
            
            return pp_open_box_gen(ppf,indent,bty);
            
           }
         
        case 2:
         var p$3=acc[1];
         
         var exit$1;
         
         if(typeof p$3==="number")
          {switch(p$3){}}
         else
          {switch(p$3[0])
            {case 0:
              var match$3=p$3[2];
              
              if(typeof match$3==="number")
               {switch(match$3){}}
              else
               {switch(match$3[0])
                 {case 1:
                   var s=acc[2];
                   
                   var size=match$3[2];
                   
                   var p$4=p$3[1];
                   
                   var p$5=p$4;
                   
                   var size$1=size;
                   
                   var s$1=s;
                   
                   exit=21;
                   
                  default:exit$1=26;}}
              
             default:exit$1=26;}}
         
         switch(exit$1)
          {case 26:var s$2=acc[2];var p$6=p$3;var s$3=s$2;exit=23;}
         
        case 3:
         var p$7=acc[1];
         
         var exit$2;
         
         if(typeof p$7==="number")
          {switch(p$7){}}
         else
          {switch(p$7[0])
            {case 0:
              var match$4=p$7[2];
              
              if(typeof match$4==="number")
               {switch(match$4){}}
              else
               {switch(match$4[0])
                 {case 1:
                   var c=acc[2];
                   
                   var size$2=match$4[2];
                   
                   var p$8=p$7[1];
                   
                   var p$9=p$8;
                   
                   var size$3=size$2;
                   
                   var c$1=c;
                   
                   exit=22;
                   
                  default:exit$2=28;}}
              
             default:exit$2=28;}}
         
         switch(exit$2)
          {case 28:var c$2=acc[2];var p$10=p$7;var c$3=c$2;exit=24;}
         
        case 4:
         var p$11=acc[1];
         
         var exit$3;
         
         if(typeof p$11==="number")
          {switch(p$11){}}
         else
          {switch(p$11[0])
            {case 0:
              var match$5=p$11[2];
              
              if(typeof match$5==="number")
               {switch(match$5){}}
              else
               {switch(match$5[0])
                 {case 1:
                   var s$4=acc[2];
                   
                   var size$4=match$5[2];
                   
                   var p$12=p$11[1];
                   
                   var p$5=p$12;
                   
                   var size$1=size$4;
                   
                   var s$1=s$4;
                   
                   exit=21;
                   
                  default:exit$3=27;}}
              
             default:exit$3=27;}}
         
         switch(exit$3)
          {case 27:var s$5=acc[2];var p$6=p$11;var s$3=s$5;exit=23;}
         
        case 5:
         var p$13=acc[1];
         
         var exit$4;
         
         if(typeof p$13==="number")
          {switch(p$13){}}
         else
          {switch(p$13[0])
            {case 0:
              var match$6=p$13[2];
              
              if(typeof match$6==="number")
               {switch(match$6){}}
              else
               {switch(match$6[0])
                 {case 1:
                   var c$4=acc[2];
                   
                   var size$5=match$6[2];
                   
                   var p$14=p$13[1];
                   
                   var p$9=p$14;
                   
                   var size$3=size$5;
                   
                   var c$1=c$4;
                   
                   exit=22;
                   
                  default:exit$4=29;}}
              
             default:exit$4=29;}}
         
         switch(exit$4)
          {case 29:var c$5=acc[2];var p$10=p$13;var c$3=c$5;exit=24;}
         
        case 6:
         var p$15=acc[1];
         
         var exit$5;
         
         if(typeof p$15==="number")
          {switch(p$15){}}
         else
          {switch(p$15[0])
            {case 0:
              var match$7=p$15[2];
              
              if(typeof match$7==="number")
               {switch(match$7){}}
              else
               {switch(match$7[0])
                 {case 1:
                   var f$1=acc[2];
                   
                   var size$6=match$7[2];
                   
                   var p$16=p$15[1];
                   
                   strput_acc(ppf,p$16);
                   return pp_print_as_size(ppf,size$6,f$1(/* () */0));
                   
                  default:exit$5=25;}}
              
             default:exit$5=25;}}
         
         switch(exit$5)
          {case 25:
            var f$2=acc[2];
            
            strput_acc(ppf,p$15);
            return pp_print_string(ppf,f$2(/* () */0));
            
           }
         
        case 7:
         var p$17=acc[1];
         
         strput_acc(ppf,p$17);
         return pp_print_flush(ppf,/* () */0);
         
        case 8:
         var msg=acc[2];
         
         var p$18=acc[1];
         
         strput_acc(ppf,p$18);
         return Pervasives["invalid_arg"](msg);
         
        }}
    
    switch(exit)
     {case 21:strput_acc(ppf,p$5);return pp_print_as_size(ppf,size$1,s$1);
      case 22:
       strput_acc(ppf,p$9);
       return pp_print_as_size(ppf,size$3,$$String["make"](1,c$1));
       
      case 23:strput_acc(ppf,p$6);return pp_print_string(ppf,s$3);
      case 24:strput_acc(ppf,p$10);return pp_print_char(ppf,c$3);
      }
    };

var
 kfprintf=
  function(k,o,param)
   {var fmt=param[1];
    
    return CamlinternalFormat["make_printf"]
            (function(o,acc){output_acc(o,acc);return k(o);},
             o,
             /* End_of_acc */0,
             fmt);
    };

var
 ikfprintf=
  function(k,x,param)
   {var fmt=param[1];
    
    return CamlinternalFormat["make_printf"]
            (function(param$1,param$2){return k(x);},x,/* End_of_acc */0,fmt);
    };

var
 fprintf=
  function(ppf,fmt){return kfprintf(function(prim){return prim;},ppf,fmt);};

var
 ifprintf=
  function(ppf,fmt){return ikfprintf(function(prim){return prim;},ppf,fmt);};

var printf=function(fmt){return fprintf(std_formatter,fmt);};

var eprintf=function(fmt){return fprintf(err_formatter,fmt);};

var
 ksprintf=
  function(k,param)
   {var fmt=param[1];
    
    var b=Buffer["create"](512);
    
    var ppf=formatter_of_buffer(b);
    
    var
     k$prime=
      function(param$1,acc)
       {strput_acc(ppf,acc);return k(flush_buf_formatter(b,ppf));};
    
    return CamlinternalFormat["make_printf"]
            (k$prime,/* () */0,/* End_of_acc */0,fmt);
    };

var sprintf=function(fmt){return ksprintf(function(s){return s;},fmt);};

var
 asprintf=
  function(param)
   {var fmt=param[1];
    
    var b=Buffer["create"](512);
    
    var ppf=formatter_of_buffer(b);
    
    var
     k$prime=
      function(ppf,acc)
       {output_acc(ppf,acc);
        pp_flush_queue(ppf,/* false */0);
        return flush_buf_formatter(b,ppf);
        };
    
    return CamlinternalFormat["make_printf"]
            (k$prime,ppf,/* End_of_acc */0,fmt);
    };

var
 bprintf=
  function(b,param)
   {var fmt=param[1];
    
    var
     k=
      function(ppf,acc)
       {output_acc(ppf,acc);return pp_flush_queue(ppf,/* false */0);};
    
    return CamlinternalFormat["make_printf"]
            (k,formatter_of_buffer(b),/* End_of_acc */0,fmt);
    };

var kprintf=ksprintf;

Pervasives["at_exit"](print_flush);
module["exports"]=
{"open_box":open_box,
 "close_box":close_box,
 "print_string":print_string,
 "print_as":print_as,
 "print_int":print_int,
 "print_float":print_float,
 "print_char":print_char,
 "print_bool":print_bool,
 "print_space":print_space,
 "print_cut":print_cut,
 "print_break":print_break,
 "print_flush":print_flush,
 "print_newline":print_newline,
 "force_newline":force_newline,
 "print_if_newline":print_if_newline,
 "set_margin":set_margin,
 "get_margin":get_margin,
 "set_max_indent":set_max_indent,
 "get_max_indent":get_max_indent,
 "set_max_boxes":set_max_boxes,
 "get_max_boxes":get_max_boxes,
 "over_max_boxes":over_max_boxes,
 "open_hbox":open_hbox,
 "open_vbox":open_vbox,
 "open_hvbox":open_hvbox,
 "open_hovbox":open_hovbox,
 "open_tbox":open_tbox,
 "close_tbox":close_tbox,
 "print_tbreak":print_tbreak,
 "set_tab":set_tab,
 "print_tab":print_tab,
 "set_ellipsis_text":set_ellipsis_text,
 "get_ellipsis_text":get_ellipsis_text,
 "open_tag":open_tag,
 "close_tag":close_tag,
 "set_tags":set_tags,
 "set_print_tags":set_print_tags,
 "set_mark_tags":set_mark_tags,
 "get_print_tags":get_print_tags,
 "get_mark_tags":get_mark_tags,
 "set_formatter_out_channel":set_formatter_out_channel,
 "set_formatter_output_functions":set_formatter_output_functions,
 "get_formatter_output_functions":get_formatter_output_functions,
 "set_formatter_out_functions":set_formatter_out_functions,
 "get_formatter_out_functions":get_formatter_out_functions,
 "set_formatter_tag_functions":set_formatter_tag_functions,
 "get_formatter_tag_functions":get_formatter_tag_functions,
 "formatter_of_out_channel":formatter_of_out_channel,
 "std_formatter":std_formatter,
 "err_formatter":err_formatter,
 "formatter_of_buffer":formatter_of_buffer,
 "stdbuf":stdbuf,
 "str_formatter":str_formatter,
 "flush_str_formatter":flush_str_formatter,
 "make_formatter":make_formatter,
 "pp_open_hbox":pp_open_hbox,
 "pp_open_vbox":pp_open_vbox,
 "pp_open_hvbox":pp_open_hvbox,
 "pp_open_hovbox":pp_open_hovbox,
 "pp_open_box":pp_open_box,
 "pp_close_box":pp_close_box,
 "pp_open_tag":pp_open_tag,
 "pp_close_tag":pp_close_tag,
 "pp_print_string":pp_print_string,
 "pp_print_as":pp_print_as,
 "pp_print_int":pp_print_int,
 "pp_print_float":pp_print_float,
 "pp_print_char":pp_print_char,
 "pp_print_bool":pp_print_bool,
 "pp_print_break":pp_print_break,
 "pp_print_cut":pp_print_cut,
 "pp_print_space":pp_print_space,
 "pp_force_newline":pp_force_newline,
 "pp_print_flush":pp_print_flush,
 "pp_print_newline":pp_print_newline,
 "pp_print_if_newline":pp_print_if_newline,
 "pp_open_tbox":pp_open_tbox,
 "pp_close_tbox":pp_close_tbox,
 "pp_print_tbreak":pp_print_tbreak,
 "pp_set_tab":pp_set_tab,
 "pp_print_tab":pp_print_tab,
 "pp_set_tags":pp_set_tags,
 "pp_set_print_tags":pp_set_print_tags,
 "pp_set_mark_tags":pp_set_mark_tags,
 "pp_get_print_tags":pp_get_print_tags,
 "pp_get_mark_tags":pp_get_mark_tags,
 "pp_set_margin":pp_set_margin,
 "pp_get_margin":pp_get_margin,
 "pp_set_max_indent":pp_set_max_indent,
 "pp_get_max_indent":pp_get_max_indent,
 "pp_set_max_boxes":pp_set_max_boxes,
 "pp_get_max_boxes":pp_get_max_boxes,
 "pp_over_max_boxes":pp_over_max_boxes,
 "pp_set_ellipsis_text":pp_set_ellipsis_text,
 "pp_get_ellipsis_text":pp_get_ellipsis_text,
 "pp_set_formatter_out_channel":pp_set_formatter_out_channel,
 "pp_set_formatter_output_functions":pp_set_formatter_output_functions,
 "pp_get_formatter_output_functions":pp_get_formatter_output_functions,
 "pp_set_formatter_tag_functions":pp_set_formatter_tag_functions,
 "pp_get_formatter_tag_functions":pp_get_formatter_tag_functions,
 "pp_set_formatter_out_functions":pp_set_formatter_out_functions,
 "pp_get_formatter_out_functions":pp_get_formatter_out_functions,
 "pp_print_list":pp_print_list,
 "pp_print_text":pp_print_text,
 "fprintf":fprintf,
 "printf":printf,
 "eprintf":eprintf,
 "sprintf":sprintf,
 "asprintf":asprintf,
 "ifprintf":ifprintf,
 "kfprintf":kfprintf,
 "ikfprintf":ikfprintf,
 "ksprintf":ksprintf,
 "bprintf":bprintf,
 "kprintf":kprintf,
 "set_all_formatter_output_functions":set_all_formatter_output_functions,
 "get_all_formatter_output_functions":get_all_formatter_output_functions,
 "pp_set_all_formatter_output_functions":pp_set_all_formatter_output_functions,
 "pp_get_all_formatter_output_functions":pp_get_all_formatter_output_functions};

