var Empty="unknown primitive:caml_set_oo_id";
var create=function(param){return [0,0,0]};
var clear=function(q){q[1]=0,0;return q[2]=0,0};
var
 add=
  function(x,q)
   {var $js=q[1]=0;
    if($js)
     {var cell=[0,x,cell];q[1]=1,0;return q[2]=cell,0}
    else
     {var tail=q[2];
      var head=tail[2];
      var cell$1=[0,x,head];
      q[1]=q[1]+1,0;
      tail[2]=cell$1,0;
      return q[2]=cell$1,0}};
var push=add;
var
 peek=
  function(q)
   {var $js=q[1]=0;
    if($js){var $js$1=Empty;throw $js$1}else{return q[2][2][1]}};
var top=peek;
var
 take=
  function(q)
   {var $js=q[1]=0;
    if($js){var $js$1=Empty;throw $js$1}else{}
    q[1]=q[1]-1,0;
    var tail=q[2];
    var head=tail[2];
    var $js$2=head=tail;
    if($js$2){q[2]=0,0}else{tail[2]=head[2],0}
    return head[1]};
var pop=take;
var
 copy=
  function(q)
   {var $js=q[1]=0;
    if($js)
     {return create(0)}
    else
     {var tail=q[2];
      var tail$prime=[0,tail[1],tail$prime];
      var
       copy$1=
        function(prev,cell)
         {var $js$1=cell!=tail;
          if($js$1)
           {var res=[0,cell[1],tail$prime];
            prev[2]=res,0;
            return copy$1(res,cell[2])}
          else
           {return 0}};
      copy$1(tail$prime,tail[2]);
      return [0,q[1],tail$prime]}};
var is_empty=function(q){return q[1]=0};
var length=function(q){return q[1]};
var
 iter=
  function(f,q)
   {var $js=q[1]>0;
    if($js)
     {var tail=q[2];
      var
       iter$1=
        function(cell)
         {f(cell[1]);
          var $js$1=cell!=tail;
          if($js$1){return iter$1(cell[2])}else{return 0}};
      return iter$1(tail[2])}
    else
     {return 0}};
var
 fold=
  function(f,accu,q)
   {var $js=q[1]=0;
    if($js)
     {return accu}
    else
     {var tail=q[2];
      var
       fold$1=
        function(accu$1,cell)
         {var accu$2=f(accu$1,cell[1]);
          var $js$1=cell=tail;
          if($js$1){return accu$2}else{return fold$1(accu$2,cell[2])}};
      return fold$1(accu,tail[2])}};
var
 transfer=
  function(q1,q2)
   {var length1=q1[1];
    var $js=length1>0;
    if($js)
     {var tail1=q1[2];
      clear(q1);
      var $js$1=q2[1]>0;
      if($js$1)
       {var tail2=q2[2];
        var head1=tail1[2];
        var head2=tail2[2];
        tail1[2]=head2,0;
        tail2[2]=head1,0}
      else
       {}
      q2[1]=q2[1]+length1,0;
      return q2[2]=tail1,0}
    else
     {return 0}};
module["exports"]=
{"Empty":Empty,
 "create":create,
 "add":add,
 "push":push,
 "take":take,
 "pop":pop,
 "peek":peek,
 "top":top,
 "clear":clear,
 "copy":copy,
 "is_empty":is_empty,
 "length":length,
 "iter":iter,
 "fold":fold,
 "transfer":transfer};
