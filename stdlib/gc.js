// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("Printf");
var Sys=require("Sys");


var
 print_stat=
  function(c)
   {var st="unknown primitive:caml_gc_stat";
    
    Printf["fprintf"]
     (c,
      [0,[11,"minor_words: ",[8,0,0,[0,0],[12,10,0]]],"minor_words: %.0f\n"],
      st[1]);
    Printf["fprintf"]
     (c,
      [0,
       [11,"promoted_words: ",[8,0,0,[0,0],[12,10,0]]],
       "promoted_words: %.0f\n"],
      st[2]);
    Printf["fprintf"]
     (c,
      [0,[11,"major_words: ",[8,0,0,[0,0],[12,10,0]]],"major_words: %.0f\n"],
      st[3]);
    Printf["fprintf"]
     (c,
      [0,
       [11,"minor_collections: ",[4,0,0,0,[12,10,0]]],
       "minor_collections: %d\n"],
      st[4]);
    Printf["fprintf"]
     (c,
      [0,
       [11,"major_collections: ",[4,0,0,0,[12,10,0]]],
       "major_collections: %d\n"],
      st[5]);
    Printf["fprintf"]
     (c,[0,[11,"heap_words: ",[4,0,0,0,[12,10,0]]],"heap_words: %d\n"],st[6]);
    Printf["fprintf"]
     (c,
      [0,[11,"heap_chunks: ",[4,0,0,0,[12,10,0]]],"heap_chunks: %d\n"],
      st[7]);
    Printf["fprintf"]
     (c,
      [0,[11,"top_heap_words: ",[4,0,0,0,[12,10,0]]],"top_heap_words: %d\n"],
      st[15]);
    Printf["fprintf"]
     (c,[0,[11,"live_words: ",[4,0,0,0,[12,10,0]]],"live_words: %d\n"],st[8]);
    Printf["fprintf"]
     (c,
      [0,[11,"live_blocks: ",[4,0,0,0,[12,10,0]]],"live_blocks: %d\n"],
      st[9]);
    Printf["fprintf"]
     (c,[0,[11,"free_words: ",[4,0,0,0,[12,10,0]]],"free_words: %d\n"],st[10]);
    Printf["fprintf"]
     (c,
      [0,[11,"free_blocks: ",[4,0,0,0,[12,10,0]]],"free_blocks: %d\n"],
      st[11]);
    Printf["fprintf"]
     (c,
      [0,[11,"largest_free: ",[4,0,0,0,[12,10,0]]],"largest_free: %d\n"],
      st[12]);
    Printf["fprintf"]
     (c,[0,[11,"fragments: ",[4,0,0,0,[12,10,0]]],"fragments: %d\n"],st[13]);
    return Printf["fprintf"]
            (c,
             [0,[11,"compactions: ",[4,0,0,0,[12,10,0]]],"compactions: %d\n"],
             st[14]);
    };

var
 allocated_bytes=
  function(param)
   {var match="unknown primitive:caml_gc_counters";
    
    var ma=match[3];
    
    var pro=match[2];
    
    var mi=match[1];
    
    return (mi+ma-pro)*(Sys["word_size"]/8);
    };

var
 call_alarm=
  function(arec)
   {if(arec[1][1])
     {"unknown primitive:caml_final_register";return arec[2](0);}
    else
     {return 0;}
    };

var
 create_alarm=
  function(f)
   {var arec=[0,[0,1],f];
    
    "unknown primitive:caml_final_register";
    return arec[1];
    };

var delete_alarm=function(a){return a[1]=0,0;};

module["exports"]=
{"print_stat":print_stat,
 "allocated_bytes":allocated_bytes,
 "caml_final_register":
 function(prim,prim$1){return "unknown primitive:caml_final_register";},
 "caml_final_release":
 function(prim){return "unknown primitive:caml_final_release";},
 "create_alarm":create_alarm,
 "delete_alarm":delete_alarm};

