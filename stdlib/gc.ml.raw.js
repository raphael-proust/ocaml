var Printf=require("Printf");
var Sys=require("Sys");
var
 print_stat=
  function(c)
   {var st="unknown primitive:caml_gc_stat";
    var $js=Printf["fprintf"];
    $js
     (c,
      [0,[11,"minor_words: ",[8,0,0,[0,0],[12,10,0]]],"minor_words: %.0f\n"],
      st[1]);
    var $js$1=Printf["fprintf"];
    $js$1
     (c,
      [0,
       [11,"promoted_words: ",[8,0,0,[0,0],[12,10,0]]],
       "promoted_words: %.0f\n"],
      st[2]);
    var $js$2=Printf["fprintf"];
    $js$2
     (c,
      [0,[11,"major_words: ",[8,0,0,[0,0],[12,10,0]]],"major_words: %.0f\n"],
      st[3]);
    var $js$3=Printf["fprintf"];
    $js$3
     (c,
      [0,
       [11,"minor_collections: ",[4,0,0,0,[12,10,0]]],
       "minor_collections: %d\n"],
      st[4]);
    var $js$4=Printf["fprintf"];
    $js$4
     (c,
      [0,
       [11,"major_collections: ",[4,0,0,0,[12,10,0]]],
       "major_collections: %d\n"],
      st[5]);
    var $js$5=Printf["fprintf"];
    $js$5
     (c,[0,[11,"heap_words: ",[4,0,0,0,[12,10,0]]],"heap_words: %d\n"],st[6]);
    var $js$6=Printf["fprintf"];
    $js$6
     (c,
      [0,[11,"heap_chunks: ",[4,0,0,0,[12,10,0]]],"heap_chunks: %d\n"],
      st[7]);
    var $js$7=Printf["fprintf"];
    $js$7
     (c,
      [0,[11,"top_heap_words: ",[4,0,0,0,[12,10,0]]],"top_heap_words: %d\n"],
      st[15]);
    var $js$8=Printf["fprintf"];
    $js$8
     (c,[0,[11,"live_words: ",[4,0,0,0,[12,10,0]]],"live_words: %d\n"],st[8]);
    var $js$9=Printf["fprintf"];
    $js$9
     (c,
      [0,[11,"live_blocks: ",[4,0,0,0,[12,10,0]]],"live_blocks: %d\n"],
      st[9]);
    var $js$10=Printf["fprintf"];
    $js$10
     (c,[0,[11,"free_words: ",[4,0,0,0,[12,10,0]]],"free_words: %d\n"],st[10]);
    var $js$11=Printf["fprintf"];
    $js$11
     (c,
      [0,[11,"free_blocks: ",[4,0,0,0,[12,10,0]]],"free_blocks: %d\n"],
      st[11]);
    var $js$12=Printf["fprintf"];
    $js$12
     (c,
      [0,[11,"largest_free: ",[4,0,0,0,[12,10,0]]],"largest_free: %d\n"],
      st[12]);
    var $js$13=Printf["fprintf"];
    $js$13
     (c,[0,[11,"fragments: ",[4,0,0,0,[12,10,0]]],"fragments: %d\n"],st[13]);
    var $js$14=Printf["fprintf"];
    return $js$14
            (c,
             [0,[11,"compactions: ",[4,0,0,0,[12,10,0]]],"compactions: %d\n"],
             st[14])};
var
 allocated_bytes=
  function(param)
   {var match="unknown primitive:caml_gc_counters";
    var ma=match[3];
    var pro=match[2];
    var mi=match[1];
    return (mi+ma-pro)*(Sys["word_size"]/8)};
var
 call_alarm=
  function(arec)
   {var $js=arec[1][1];
    if($js)
     {"unknown primitive:caml_final_register";
      var $js$1=arec[2];
      return $js$1(0)}
    else
     {return 0}};
var
 create_alarm=
  function(f)
   {var arec=[0,[0,1],f];
    "unknown primitive:caml_final_register";
    return arec[1]};
var delete_alarm=function(a){return a[1]=0,0};
module["exports"]=
{"print_stat":print_stat,
 "allocated_bytes":allocated_bytes,
 "unknown block:(function prim/1064 prim/1063 (caml_final_register prim/1064 prim/1063))":
 unknown block:(function prim/1064 prim/1063 (caml_final_register prim/1064 prim/1063)),
 "unknown block:(function prim/1065 (caml_final_release prim/1065))":
 unknown block:(function prim/1065 (caml_final_release prim/1065)),
 "create_alarm":create_alarm,
 "delete_alarm":delete_alarm};
