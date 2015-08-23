// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var CamlinternalFormat=require("./camlinternalFormat.js");
var Pervasives=require("./pervasives.js");
var Buffer=require("./buffer.js");
var CamlPrimitive=require("./camlPrimitive.js");


var make_queue=function(param){return /* record */[0,/* Nil */0,/* Nil */0]};

var clear_queue=function(q){q[1]=/* Nil */0;return q[2]=/* Nil */0,0};

var
 add_queue=
  function(x,q)
   {var c=/* Cons */[0,/* record */[0,x,/* Nil */0]];
    
    var match=q[1];
    
    return match?(q[1]=c,match[1][2]=c,0):(q[1]=c,q[2]=c,0)};

var Empty_queue=CamlPrimitive["caml_set_oo_id"]([248,"Format.Empty_queue",0]);

var
 peek_queue=
  function(param)
   {var match=param[2];
    
    if(match){var x=match[1][1];return x}else{throw Empty_queue}
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
      if(tl===/* Nil */0){q[1]=/* Nil */0,0}
      
      return x}
    else
     {throw Empty_queue}
    };

var
 pp_enqueue=
  function(state,token)
   {state[13]=state[13]+token[3];return add_queue(token,state[27])};

var
 pp_clear_queue=
  function(state){state[12]=1;state[13]=1;return clear_queue(state[27])};

var pp_infinity=1000000010;

var pp_output_string=function(state,s){return state[17](s,0,s["length"])};

var pp_output_newline=function(state){return state[19](/* () */0)};

var pp_output_spaces=function(state,n){return state[20](n)};

var
 break_new_line=
  function(state,offset,width)
   {pp_output_newline(state);
    state[11]=/* true */1;
    var indent=state[6]-width+offset;
    
    var real_indent=Pervasives["min"](state[8],indent);
    
    state[10]=real_indent;
    state[9]=state[6]-state[10];
    return pp_output_spaces(state,state[10])};

var break_line=function(state,width){return break_new_line(state,0,width)};

var
 break_same_line=
  function(state,width)
   {state[9]=state[9]-width;return pp_output_spaces(state,width)};

var
 pp_force_break_line=
  function(state)
   {var match=state[2];
    
    if(match)
     {var match$1=match[1];
      
      var width=match$1[2];
      
      var bl_ty=match$1[1];
      
      return width>state[9]
              ?bl_ty!==0?bl_ty>=5?/* () */0:break_line(state,width):/* () */0
              :0}
    else
     {return pp_output_newline(state)}
    };

var
 pp_skip_token=
  function(state)
   {var match=take_queue(state[27]);
    
    var size=match[1];
    
    state[12]=state[12]-match[3];
    return state[9]=state[9]+size,0};

var
 format_pp_token=
  function(state,size,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         var match=state[3];
         
         if(match)
          {var tabs=match[1][1];
           
           var
            add_tab=
             function(n,ls)
              {if(ls)
                {var x=ls[1];
                 
                 return CamlPrimitive["caml_lessthan"](n,x)
                         ?/* :: */[0,n,ls]
                         :/* :: */[0,x,add_tab(n,ls[2])]}
               else
                {return /* :: */[0,n,/* [] */0]}
               };
           
           return tabs[1]=add_tab(state[6]-state[9],tabs[1]),0}
         else
          {return /* () */0}
         break;
        case 1:
         var match$1=state[2];
         
         return match$1?(state[2]=match$1[2],0):/* () */0;
        case 2:
         var match$2=state[3];
         
         return match$2?(state[3]=match$2[2],0):/* () */0;
        case 3:
         var match$3=state[2];
         
         return match$3
                 ?break_line(state,match$3[1][2])
                 :pp_output_newline(state);
        case 4:return state[10]!==state[6]-state[9]?pp_skip_token(state):0;
        case 5:
         var match$4=state[5];
         
         if(match$4)
          {var marker=state[24](match$4[1]);
           
           pp_output_string(state,marker);
           return state[5]=match$4[2],0}
         else
          {return /* () */0}
         break
        }}
    else
     {switch(param[0])
       {case 0:
         state[9]=state[9]-size;
         pp_output_string(state,param[1]);
         return state[11]=/* false */0,0;
        case 1:
         var off=param[2];
         
         var n=param[1];
         
         var match$5=state[2];
         
         if(match$5)
          {var match$6=match$5[1];
           
           var width=match$6[2];
           
           switch(match$6[1])
            {case 0:return break_same_line(state,n);
             case 1:return break_new_line(state,off,width);
             case 2:return break_new_line(state,off,width);
             case 3:
              return size>state[9]
                      ?break_new_line(state,off,width)
                      :break_same_line(state,n);
             case 4:
              return state[11]
                      ?break_same_line(state,n)
                      :size>state[9]
                        ?break_new_line(state,off,width)
                        :state[10]>state[6]-width+off
                          ?break_new_line(state,off,width)
                          :break_same_line(state,n);
             case 5:return break_same_line(state,n)
             }
           }
         else
          {return /* () */0}
         break;
        case 2:
         var insertion_point=state[6]-state[9];
         
         var match$7=state[3];
         
         if(match$7)
          {var tabs$1=match$7[1][1];
           
           var
            find=
             function(n,param$1)
              {if(param$1)
                {var x=param$1[1];
                 
                 return CamlPrimitive["caml_greaterequal"](x,n)
                         ?x
                         :find(n,param$1[2])}
               else
                {throw CamlPrimitive["caml_global_data"]["Not_found"]}
               };
           
           var match$8=tabs$1[1];
           
           var tab;
           if(match$8)
            {try
              {tab=find(insertion_point,tabs$1[1]);}
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {tab=match$8[1];}
               else
                {throw exn}
               }
             }
           else
            {tab=insertion_point;}
           
           var offset=tab-insertion_point;
           
           return offset>=0
                   ?break_same_line(state,offset+param[1])
                   :break_new_line(state,tab+param[2],state[6])}
         else
          {return /* () */0}
         break;
        case 3:
         var ty=param[2];
         
         var insertion_point$1=state[6]-state[9];
         
         if(insertion_point$1>state[8]){pp_force_break_line(state)}
         
         var offset$1=state[9]-param[1];
         
         var bl_type=ty!==1?size>state[9]?ty:/* Pp_fits */5:/* Pp_vbox */1;
         
         return state[2]=
                /* :: */[0,/* Format_elem */[0,bl_type,offset$1],state[2]],
                0;
        case 4:return state[3]=/* :: */[0,param[1],state[3]],0;
        case 5:
         var tag_name=param[1];
         
         var marker$1=state[23](tag_name);
         
         pp_output_string(state,marker$1);
         return state[5]=/* :: */[0,tag_name,state[5]],0
        }}
    };

var
 advance_loop=
  function(state)
   {var match=peek_queue(state[27]);
    
    var size=match[1];
    
    var size$1=size;
    
    return !(size$1<0&&state[13]-state[12]<state[9])
            ?(take_queue(state[27]),
              format_pp_token(state,size$1<0?pp_infinity:size$1,match[2]),
              state[12]=
              match[3]+
              state[12],
              advance_loop(state))
            :0};

var
 advance_left=
  function(state)
   {try
     {return advance_loop(state)}
    catch(exn){if(exn===Empty_queue){return /* () */0}else{throw exn}}
    };

var
 enqueue_advance=
  function(state,tok){pp_enqueue(state,tok);return advance_left(state)};

var
 make_queue_elem=
  function(size,tok,len){return /* record */[0,size,tok,len]};

var
 enqueue_string_as=
  function(state,size,s)
   {var len=size;
    
    return enqueue_advance(state,make_queue_elem(size,/* Pp_text */[0,s],len))};

var
 enqueue_string=
  function(state,s){var len=s["length"];return enqueue_string_as(state,len,s)};

var q_elem=make_queue_elem(-1,[/* Pp_text */0,""],0);

var scan_stack_bottom=/* :: */[0,/* Scan_elem */[0,-1,q_elem],/* [] */0];

var clear_scan_stack=function(state){return state[1]=scan_stack_bottom,0};

var
 set_size=
  function(state,ty)
   {var match=state[1];
    
    if(match)
     {var match$1=match[1];
      
      var queue_elem=match$1[2];
      
      var size=queue_elem[1];
      
      var t=match[2];
      
      var size$1=size;
      
      if(match$1[1]<state[12])
       {return clear_scan_stack(state)}
      else
       {var exit;
        
        var $js=queue_elem[2];
        if(typeof $js==="number")
         {switch($js){default:exit=194;}}
        else
         {switch($js[0])
           {case 1:exit=193;break;
            case 2:exit=193;break;
            case 3:return !ty?(queue_elem[1]=state[13]+size$1,state[1]=t,0):0;
            default:exit=194;}}
        
        switch(exit)
         {case 193:return ty?(queue_elem[1]=state[13]+size$1,state[1]=t,0):0;
          case 194:return /* () */0
          }
        }
      }
    else
     {return /* () */0}
    };

var
 scan_push=
  function(state,b,tok)
   {pp_enqueue(state,tok);
    if(b){set_size(state,/* true */1)}
    
    return state[1]=/* :: */[0,/* Scan_elem */[0,state[13],tok],state[1]],0};

var
 pp_open_box_gen=
  function(state,indent,br_ty)
   {state[14]=state[14]+1;
    if(state[14]<state[15])
     {var elem=make_queue_elem(-state[13],/* Pp_begin */[3,indent,br_ty],0);
      
      return scan_push(state,/* false */0,elem)}
    else
     {return state[14]===state[15]?enqueue_string(state,state[16]):0}
    };

var
 pp_open_sys_box=
  function(state){return pp_open_box_gen(state,0,/* Pp_hovbox */3)};

var
 pp_close_box=
  function(state,param)
   {if(state[14]>1)
     {if(state[14]<state[15])
       {pp_enqueue(state,/* record */[0,0,/* Pp_end */1,0]),
        set_size(state,/* true */1),
        set_size(state,/* false */0)}
      
      return state[14]=state[14]-1,0}
    else
     {return 0}
    };

var
 pp_open_tag=
  function(state,tag_name)
   {if(state[21]){state[4]=/* :: */[0,tag_name,state[4]],state[25](tag_name)}
    
    return state[22]
            ?pp_enqueue
              (state,/* record */[0,0,/* Pp_open_tag */[5,tag_name],0])
            :0};

var
 pp_close_tag=
  function(state,param)
   {if(state[22]){pp_enqueue(state,/* record */[0,0,/* Pp_close_tag */5,0])}
    
    if(state[21])
     {var match=state[4];
      
      return match?(state[26](match[1]),state[4]=match[2],0):/* () */0}
    else
     {return 0}
    };

var pp_set_print_tags=function(state,b){return state[21]=b,0};

var pp_set_mark_tags=function(state,b){return state[22]=b,0};

var pp_get_print_tags=function(state,param){return state[21]};

var pp_get_mark_tags=function(state,param){return state[22]};

var
 pp_set_tags=
  function(state,b)
   {pp_set_print_tags(state,b);return pp_set_mark_tags(state,b)};

var
 pp_get_formatter_tag_functions=
  function(state,param)
   {return /* record */[0,state[23],state[24],state[25],state[26]]};

var
 pp_set_formatter_tag_functions=
  function(state,param)
   {state[23]=param[1];
    state[24]=param[2];
    state[25]=param[3];
    return state[26]=param[4],0};

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
    return pp_open_sys_box(state)};

var
 pp_flush_queue=
  function(state,b)
   {while(state[14]>1){pp_close_box(state,/* () */0)}
    
    state[13]=pp_infinity;
    advance_left(state);
    if(b){pp_output_newline(state)}
    
    return pp_rinit(state)};

var
 pp_print_as_size=
  function(state,size,s)
   {return state[14]<state[15]?enqueue_string_as(state,size,s):0};

var
 pp_print_as=
  function(state,isize,s){return pp_print_as_size(state,isize,s)};

var
 pp_print_string=
  function(state,s){return pp_print_as(state,s["length"],s)};

var
 pp_print_int=
  function(state,i)
   {return pp_print_string(state,Pervasives["string_of_int"](i))};

var
 pp_print_float=
  function(state,f)
   {return pp_print_string(state,Pervasives["string_of_float"](f))};

var
 pp_print_bool=
  function(state,b)
   {return pp_print_string(state,Pervasives["string_of_bool"](b))};

var
 pp_print_char=
  function(state,c){return pp_print_as(state,1,$$String["make"](1,c))};

var
 pp_open_hbox=
  function(state,param){return pp_open_box_gen(state,0,/* Pp_hbox */0)};

var
 pp_open_vbox=
  function(state,indent){return pp_open_box_gen(state,indent,/* Pp_vbox */1)};

var
 pp_open_hvbox=
  function(state,indent){return pp_open_box_gen(state,indent,/* Pp_hvbox */2)};

var
 pp_open_hovbox=
  function(state,indent)
   {return pp_open_box_gen(state,indent,/* Pp_hovbox */3)};

var
 pp_open_box=
  function(state,indent){return pp_open_box_gen(state,indent,/* Pp_box */4)};

var
 pp_print_newline=
  function(state,param)
   {pp_flush_queue(state,/* true */1);return state[18](/* () */0)};

var
 pp_print_flush=
  function(state,param)
   {pp_flush_queue(state,/* false */0);return state[18](/* () */0)};

var
 pp_force_newline=
  function(state,param)
   {return state[14]<state[15]
            ?enqueue_advance(state,make_queue_elem(0,/* Pp_newline */3,0))
            :0};

var
 pp_print_if_newline=
  function(state,param)
   {return state[14]<state[15]
            ?enqueue_advance(state,make_queue_elem(0,/* Pp_if_newline */4,0))
            :0};

var
 pp_print_break=
  function(state,width,offset)
   {if(state[14]<state[15])
     {var
       elem=
        make_queue_elem(-state[13],/* Pp_break */[1,width,offset],width);
      
      return scan_push(state,/* true */1,elem)}
    else
     {return 0}
    };

var pp_print_space=function(state,param){return pp_print_break(state,1,0)};

var pp_print_cut=function(state,param){return pp_print_break(state,0,0)};

var
 pp_open_tbox=
  function(state,param)
   {state[14]=state[14]+1;
    if(state[14]<state[15])
     {var
       elem=
        make_queue_elem(0,/* Pp_tbegin */[4,/* Pp_tbox */[0,[0,/* [] */0]]],0);
      
      return enqueue_advance(state,elem)}
    else
     {return 0}
    };

var
 pp_close_tbox=
  function(state,param)
   {if(state[14]>1)
     {if(state[14]<state[15])
       {var elem=make_queue_elem(0,/* Pp_tend */2,0);
        
        enqueue_advance(state,elem);
        return state[14]=state[14]-1,0}
      else
       {return 0}
      }
    else
     {return 0}
    };

var
 pp_print_tbreak=
  function(state,width,offset)
   {if(state[14]<state[15])
     {var
       elem=
        make_queue_elem(-state[13],/* Pp_tbreak */[2,width,offset],width);
      
      return scan_push(state,/* true */1,elem)}
    else
     {return 0}
    };

var pp_print_tab=function(state,param){return pp_print_tbreak(state,0,0)};

var
 pp_set_tab=
  function(state,param)
   {if(state[14]<state[15])
     {var elem=make_queue_elem(0,/* Pp_stab */0,0);
      
      return enqueue_advance(state,elem)}
    else
     {return 0}
    };

var
 pp_print_list=
  function($staropt$star,pp_v,ppf,param)
   {var pp_sep=$staropt$star?$staropt$star[1]:pp_print_cut;
    
    if(param)
     {var vs=param[2];
      
      var v=param[1];
      
      return vs
              ?(pp_v(ppf,v),
                pp_sep(ppf,/* () */0),
                pp_print_list(/* Some */[0,pp_sep],pp_v,ppf,vs))
              :pp_v(ppf,v)}
    else
     {return /* () */0}
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
        return left[1]=right[1],0};
    
    while(right[1]!==len)
     {var match=s["charCodeAt"](right[1]);
      
      match!==10
       ?match!==32?right[0]++:(flush(/* () */0),pp_print_space(ppf,/* () */0))
       :(flush(/* () */0),pp_force_newline(ppf,/* () */0));
      }
    
    return left[1]!==len?flush(/* () */0):0};

var pp_set_max_boxes=function(state,n){return n>1?(state[15]=n,0):0};

var pp_get_max_boxes=function(state,param){return state[15]};

var pp_over_max_boxes=function(state,param){return state[14]===state[15]};

var pp_set_ellipsis_text=function(state,s){return state[16]=s,0};

var pp_get_ellipsis_text=function(state,param){return state[16]};

var pp_limit=function(n){return n<pp_infinity?n:-1+pp_infinity};

var
 pp_set_min_space_left=
  function(state,n)
   {if(n>=1)
     {var n$1=pp_limit(n);
      
      state[7]=n$1;
      state[8]=state[6]-state[7];
      return pp_rinit(state)}
    else
     {return 0}
    };

var
 pp_set_max_indent=
  function(state,n){return pp_set_min_space_left(state,state[6]-n)};

var pp_get_max_indent=function(state,param){return state[8]};

var
 pp_set_margin=
  function(state,n)
   {if(n>=1)
     {var n$1=pp_limit(n);
      
      state[6]=n$1;
      var
       new_max_indent=
        state[8]<=state[6]
         ?state[8]
         :Pervasives["max"](Pervasives["max"](state[6]-state[7],state[6]/2),1);
      
      return pp_set_max_indent(state,new_max_indent)}
    else
     {return 0}
    };

var pp_get_margin=function(state,param){return state[6]};

var
 pp_set_formatter_out_functions=
  function(state,param)
   {state[17]=param[1];
    state[18]=param[2];
    state[19]=param[3];
    return state[20]=param[4],0};

var
 pp_get_formatter_out_functions=
  function(state,param)
   {return /* record */[0,state[17],state[18],state[19],state[20]]};

var
 pp_set_formatter_output_functions=
  function(state,f,g){state[17]=f;return state[18]=g,0};

var
 pp_get_formatter_output_functions=
  function(state,param){return /* tuple */[0,state[17],state[18]]};

var
 pp_set_all_formatter_output_functions=
  function(state,f,g,h,i)
   {pp_set_formatter_output_functions(state,f,g);
    state[19]=h;
    return state[20]=i,0};

var
 pp_get_all_formatter_output_functions=
  function(state,param)
   {return /* tuple */[0,state[17],state[18],state[19],state[20]]};

var display_newline=function(state,param){return state[17]("\n",0,1)};

var blank_line=$$String["make"](80,32);

var
 display_blanks=
  function(state,n)
   {return n>0
            ?n<=80
              ?state[17](blank_line,0,n)
              :(state[17](blank_line,0,80),display_blanks(state,n-80))
            :0};

var
 pp_set_formatter_out_channel=
  function(state,os)
   {state[17]=Pervasives["output_substring"](os);
    state[18]=function(param){return Pervasives["flush"](os)};
    state[19]=display_newline(state);
    return state[20]=display_blanks(state),0};

var
 default_pp_mark_open_tag=
  function(s){return Pervasives["^"]("<",Pervasives["^"](s,">"))};

var
 default_pp_mark_close_tag=
  function(s){return Pervasives["^"]("</",Pervasives["^"](s,">"))};

var default_pp_print_open_tag=function(prim){return prim};

var default_pp_print_close_tag=function(prim){return prim};

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
            pp_q]};

var
 make_formatter=
  function(output,flush)
   {var
     ppf=
      pp_make_formatter
       (output,flush,function(prim){return prim},function(prim){return prim});
    
    ppf[19]=display_newline(ppf);
    ppf[20]=display_blanks(ppf);
    return ppf};

var
 formatter_of_out_channel=
  function(oc)
   {return make_formatter
            (Pervasives["output_substring"](oc),
             function(param){return Pervasives["flush"](oc)})};

var
 formatter_of_buffer=
  function(b)
   {return make_formatter
            (Buffer["add_substring"](b),function(prim){return prim})};

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
    return s};

var
 flush_buf_formatter=
  function(buf,ppf)
   {pp_flush_queue(ppf,/* false */0);
    var s=Buffer["contents"](buf);
    
    Buffer["reset"](buf);
    return s};

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
    
    return len<2?Buffer["contents"](buf):Buffer["sub"](buf,1,len-2)};

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
        case 6:return pp_print_char(ppf,37)
        }}
    else
     {switch(fmting_lit[0])
       {case 0:return pp_print_break(ppf,fmting_lit[2],fmting_lit[3]);
        case 1:return /* () */0;
        case 2:pp_print_char(ppf,64);return pp_print_char(ppf,fmting_lit[1])
        }}
    };

var
 output_acc=
  function(ppf,acc)
   {var exit;
    var p;
    var size;
    var s;
    var p$1;
    var size$1;
    var c;
    var p$2;
    var s$1;
    var p$3;
    var c$1;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0}}
    else
     {switch(acc[0])
       {case 0:
         output_acc(ppf,acc[1]);return output_formatting_lit(ppf,acc[2]);
        case 1:
         var match=acc[2];
         
         var p$4=acc[1];
         
         switch(match[0])
          {case 0:
            output_acc(ppf,p$4);
            return pp_open_tag(ppf,compute_tag(output_acc,match[1]));
           case 1:
            var match$1=output_acc(ppf,p$4);
            
            var
             match$2=
              CamlinternalFormat["open_box_of_string"]
               (compute_tag(output_acc,match[1]));
            
            return pp_open_box_gen(ppf,match$2[1],match$2[2])
           }
         break;
        case 2:
         var p$5=acc[1];
         
         var exit$1;
         
         if(typeof p$5==="number")
          {switch(p$5){default:exit$1=36;}}
         else
          {switch(p$5[0])
            {case 0:
              var match$3=p$5[2];
              
              if(typeof match$3==="number")
               {switch(match$3){default:exit$1=36;}}
              else
               {switch(match$3[0])
                 {case 1:p=p$5[1];size=match$3[2];s=acc[2];exit=32;break;
                  default:exit$1=36;}}
              break;
             default:exit$1=36;}}
         
         switch(exit$1){case 36:p$2=p$5;s$1=acc[2];exit=34;break}
         break;
        case 3:
         var p$6=acc[1];
         
         var exit$2;
         
         if(typeof p$6==="number")
          {switch(p$6){default:exit$2=38;}}
         else
          {switch(p$6[0])
            {case 0:
              var match$4=p$6[2];
              
              if(typeof match$4==="number")
               {switch(match$4){default:exit$2=38;}}
              else
               {switch(match$4[0])
                 {case 1:p$1=p$6[1];size$1=match$4[2];c=acc[2];exit=33;break;
                  default:exit$2=38;}}
              break;
             default:exit$2=38;}}
         
         switch(exit$2){case 38:p$3=p$6;c$1=acc[2];exit=35;break}
         break;
        case 4:
         var p$7=acc[1];
         
         var exit$3;
         
         if(typeof p$7==="number")
          {switch(p$7){default:exit$3=37;}}
         else
          {switch(p$7[0])
            {case 0:
              var match$5=p$7[2];
              
              if(typeof match$5==="number")
               {switch(match$5){default:exit$3=37;}}
              else
               {switch(match$5[0])
                 {case 1:p=p$7[1];size=match$5[2];s=acc[2];exit=32;break;
                  default:exit$3=37;}}
              break;
             default:exit$3=37;}}
         
         switch(exit$3){case 37:p$2=p$7;s$1=acc[2];exit=34;break}
         break;
        case 5:
         var p$8=acc[1];
         
         var exit$4;
         
         if(typeof p$8==="number")
          {switch(p$8){default:exit$4=39;}}
         else
          {switch(p$8[0])
            {case 0:
              var match$6=p$8[2];
              
              if(typeof match$6==="number")
               {switch(match$6){default:exit$4=39;}}
              else
               {switch(match$6[0])
                 {case 1:p$1=p$8[1];size$1=match$6[2];c=acc[2];exit=33;break;
                  default:exit$4=39;}}
              break;
             default:exit$4=39;}}
         
         switch(exit$4){case 39:p$3=p$8;c$1=acc[2];exit=35;break}
         break;
        case 6:output_acc(ppf,acc[1]);return acc[2](ppf);
        case 7:output_acc(ppf,acc[1]);return pp_print_flush(ppf,/* () */0);
        case 8:output_acc(ppf,acc[1]);return Pervasives["invalid_arg"](acc[2])
        }}
    
    switch(exit)
     {case 32:output_acc(ppf,p);return pp_print_as_size(ppf,size,s);
      case 33:
       output_acc(ppf,p$1);
       return pp_print_as_size(ppf,size$1,$$String["make"](1,c));
      case 34:output_acc(ppf,p$2);return pp_print_string(ppf,s$1);
      case 35:output_acc(ppf,p$3);return pp_print_char(ppf,c$1)
      }
    };

var
 strput_acc=
  function(ppf,acc)
   {var exit;
    var p;
    var size;
    var s;
    var p$1;
    var size$1;
    var c;
    var p$2;
    var s$1;
    var p$3;
    var c$1;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0}}
    else
     {switch(acc[0])
       {case 0:
         strput_acc(ppf,acc[1]);return output_formatting_lit(ppf,acc[2]);
        case 1:
         var match=acc[2];
         
         var p$4=acc[1];
         
         switch(match[0])
          {case 0:
            strput_acc(ppf,p$4);
            return pp_open_tag(ppf,compute_tag(strput_acc,match[1]));
           case 1:
            var match$1=strput_acc(ppf,p$4);
            
            var
             match$2=
              CamlinternalFormat["open_box_of_string"]
               (compute_tag(strput_acc,match[1]));
            
            return pp_open_box_gen(ppf,match$2[1],match$2[2])
           }
         break;
        case 2:
         var p$5=acc[1];
         
         var exit$1;
         
         if(typeof p$5==="number")
          {switch(p$5){default:exit$1=26;}}
         else
          {switch(p$5[0])
            {case 0:
              var match$3=p$5[2];
              
              if(typeof match$3==="number")
               {switch(match$3){default:exit$1=26;}}
              else
               {switch(match$3[0])
                 {case 1:p=p$5[1];size=match$3[2];s=acc[2];exit=21;break;
                  default:exit$1=26;}}
              break;
             default:exit$1=26;}}
         
         switch(exit$1){case 26:p$2=p$5;s$1=acc[2];exit=23;break}
         break;
        case 3:
         var p$6=acc[1];
         
         var exit$2;
         
         if(typeof p$6==="number")
          {switch(p$6){default:exit$2=28;}}
         else
          {switch(p$6[0])
            {case 0:
              var match$4=p$6[2];
              
              if(typeof match$4==="number")
               {switch(match$4){default:exit$2=28;}}
              else
               {switch(match$4[0])
                 {case 1:p$1=p$6[1];size$1=match$4[2];c=acc[2];exit=22;break;
                  default:exit$2=28;}}
              break;
             default:exit$2=28;}}
         
         switch(exit$2){case 28:p$3=p$6;c$1=acc[2];exit=24;break}
         break;
        case 4:
         var p$7=acc[1];
         
         var exit$3;
         
         if(typeof p$7==="number")
          {switch(p$7){default:exit$3=27;}}
         else
          {switch(p$7[0])
            {case 0:
              var match$5=p$7[2];
              
              if(typeof match$5==="number")
               {switch(match$5){default:exit$3=27;}}
              else
               {switch(match$5[0])
                 {case 1:p=p$7[1];size=match$5[2];s=acc[2];exit=21;break;
                  default:exit$3=27;}}
              break;
             default:exit$3=27;}}
         
         switch(exit$3){case 27:p$2=p$7;s$1=acc[2];exit=23;break}
         break;
        case 5:
         var p$8=acc[1];
         
         var exit$4;
         
         if(typeof p$8==="number")
          {switch(p$8){default:exit$4=29;}}
         else
          {switch(p$8[0])
            {case 0:
              var match$6=p$8[2];
              
              if(typeof match$6==="number")
               {switch(match$6){default:exit$4=29;}}
              else
               {switch(match$6[0])
                 {case 1:p$1=p$8[1];size$1=match$6[2];c=acc[2];exit=22;break;
                  default:exit$4=29;}}
              break;
             default:exit$4=29;}}
         
         switch(exit$4){case 29:p$3=p$8;c$1=acc[2];exit=24;break}
         break;
        case 6:
         var p$9=acc[1];
         
         var exit$5;
         
         if(typeof p$9==="number")
          {switch(p$9){default:exit$5=25;}}
         else
          {switch(p$9[0])
            {case 0:
              var match$7=p$9[2];
              
              if(typeof match$7==="number")
               {switch(match$7){default:exit$5=25;}}
              else
               {switch(match$7[0])
                 {case 1:
                   strput_acc(ppf,p$9[1]);
                   return pp_print_as_size(ppf,match$7[2],acc[2](/* () */0));
                  default:exit$5=25;}}
              break;
             default:exit$5=25;}}
         
         switch(exit$5)
          {case 25:
            strput_acc(ppf,p$9);return pp_print_string(ppf,acc[2](/* () */0))
           }
         break;
        case 7:strput_acc(ppf,acc[1]);return pp_print_flush(ppf,/* () */0);
        case 8:strput_acc(ppf,acc[1]);return Pervasives["invalid_arg"](acc[2])
        }}
    
    switch(exit)
     {case 21:strput_acc(ppf,p);return pp_print_as_size(ppf,size,s);
      case 22:
       strput_acc(ppf,p$1);
       return pp_print_as_size(ppf,size$1,$$String["make"](1,c));
      case 23:strput_acc(ppf,p$2);return pp_print_string(ppf,s$1);
      case 24:strput_acc(ppf,p$3);return pp_print_char(ppf,c$1)
      }
    };

var
 kfprintf=
  function(k,o,param)
   {return CamlinternalFormat["make_printf"]
            (function(o,acc){output_acc(o,acc);return k(o)},
             o,
             /* End_of_acc */0,
             param[1])};

var
 ikfprintf=
  function(k,x,param)
   {return CamlinternalFormat["make_printf"]
            (function(param$1,param$2){return k(x)},
             x,
             /* End_of_acc */0,
             param[1])};

var
 fprintf=
  function(ppf,fmt){return kfprintf(function(prim){return prim},ppf,fmt)};

var
 ifprintf=
  function(ppf,fmt){return ikfprintf(function(prim){return prim},ppf,fmt)};

var printf=function(fmt){return fprintf(std_formatter,fmt)};

var eprintf=function(fmt){return fprintf(err_formatter,fmt)};

var
 ksprintf=
  function(k,param)
   {var b=Buffer["create"](512);
    
    var ppf=formatter_of_buffer(b);
    
    var
     k$prime=
      function(param$1,acc)
       {strput_acc(ppf,acc);return k(flush_buf_formatter(b,ppf))};
    
    return CamlinternalFormat["make_printf"]
            (k$prime,/* () */0,/* End_of_acc */0,param[1])};

var sprintf=function(fmt){return ksprintf(function(s){return s},fmt)};

var
 asprintf=
  function(param)
   {var b=Buffer["create"](512);
    
    var ppf=formatter_of_buffer(b);
    
    var
     k$prime=
      function(ppf,acc)
       {output_acc(ppf,acc);
        pp_flush_queue(ppf,/* false */0);
        return flush_buf_formatter(b,ppf)};
    
    return CamlinternalFormat["make_printf"]
            (k$prime,ppf,/* End_of_acc */0,param[1])};

var
 bprintf=
  function(b,param)
   {var
     k=
      function(ppf,acc)
       {output_acc(ppf,acc);return pp_flush_queue(ppf,/* false */0)};
    
    return CamlinternalFormat["make_printf"]
            (k,formatter_of_buffer(b),/* End_of_acc */0,param[1])};

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

