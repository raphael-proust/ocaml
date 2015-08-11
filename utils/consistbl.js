// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Hashtbl=require("Hashtbl");


var create=function(param){return Hashtbl["create"](0,13);};

var clear=Hashtbl["clear"];

var Inconsistency="unknown primitive:caml_set_oo_id";

var Not_available="unknown primitive:caml_set_oo_id";

var
 check=
  function(tbl,name,crc,source)
   {try
     {var match=Hashtbl["find"](tbl,name);
      
      if("unknown primitive:caml_notequal")
       {throw [0,Inconsistency,name,source,match[2]];}
      else
       {return 0;}
      }
    catch(exn)
     {if(exn=Not_found)
       {return Hashtbl["add"](tbl,name,/* tuple */[0,crc,source]);}
      else
       {throw exn;}
      }
    };

var
 check_noadd=
  function(tbl,name,crc,source)
   {try
     {var match=Hashtbl["find"](tbl,name);
      
      if("unknown primitive:caml_notequal")
       {throw [0,Inconsistency,name,source,match[2]];}
      else
       {return 0;}
      }
    catch(exn)
     {if(exn=Not_found){throw [0,Not_available,name];}else{throw exn;}}
    };

var
 set=
  function(tbl,name,crc,source)
   {return Hashtbl["add"](tbl,name,/* tuple */[0,crc,source]);};

var source=function(tbl,name){return Hashtbl["find"](tbl,name)[2];};

var
 extract=
  function(l,tbl)
   {var l$1=List["sort_uniq"]($$String["compare"],l);
    
    return List["fold_left"]
            (function(assc,name)
              {try
                {var match=Hashtbl["find"](tbl,name);
                 
                 return /* :: */[0,
                         /* tuple */[0,name,/* Some */[0,match[1]]],
                         assc];
                 }
               catch(exn)
                {if(exn=Not_found)
                  {return /* :: */[0,/* tuple */[0,name,0],assc];}
                 else
                  {throw exn;}
                 }
               },
             0,
             l$1);
    };

var
 filter=
  function(p,tbl)
   {var to_remove=[0,0];
    
    Hashtbl["iter"]
     (function(name,param)
       {if(!p(name))
         {return to_remove[1]=/* :: */[0,name,to_remove[1]],0;}
        else
         {return 0;}
        },
      tbl);
    return List["iter"]
            (function(name)
              {while(Hashtbl["mem"](tbl,name)){Hashtbl["remove"](tbl,name)}
               return 0;
               },
             to_remove[1]);
    };

module["exports"]=
{"create":create,
 "clear":clear,
 "check":check,
 "check_noadd":check_noadd,
 "set":set,
 "source":source,
 "extract":extract,
 "filter":filter,
 "Inconsistency":Inconsistency,
 "Not_available":Not_available};

