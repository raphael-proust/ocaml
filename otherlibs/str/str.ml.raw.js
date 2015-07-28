var String=require("String");
var Char=require("Char");
var List=require("List");
var Pervasives=require("Pervasives");
var Buffer=require("Buffer");
var Bytes=require("Bytes");
var Array=require("Array");
var Map=require("Map");
var string_before=function(s,n){var $js=String["sub"];return $js(s,0,n)};
var
 string_after=
  function(s,n){var $js=String["sub"];return $js(s,n,s["length"]-n)};
var first_chars=function(s,n){var $js=String["sub"];return $js(s,0,n)};
var
 last_chars=
  function(s,n){var $js=String["sub"];return $js(s,s["length"]-n,n)};
var $js=Bytes["make"];
var full=$js(32,255);
var make_empty=function(param){var $js$1=Bytes["make"];return $js$1(32,0)};
var
 add=
  function(s,c)
   {var i=c;
    var $js$1=Char["chr"];
    var $js$2=s[i>>>3];
    var $js$3=$js$2;
    var $js$4=$js$3|1<<(i&7);
    var $js$5=$js$1($js$4);
    return s[i>>>3]=$js$5,0};
var
 add_range=
  function(s,c1,c2)
   {var $js$1=c1;
    var $js$2=c2;
    for(var i=$js$1;i<=$js$2;i++)
     {var $js$3=Char["chr"];var $js$4=$js$3(i);add(s,$js$4)}};
var singleton=function(c){var s=make_empty(0);add(s,c);return s};
var
 complement=
  function(s)
   {var r="unknown primitive:caml_create_string";
    var $js$1=0;
    var $js$2=31;
    for(var i=$js$1;i<=$js$2;i++)
     {var $js$3=Char["chr"];
      var $js$4=s[i];
      var $js$5=$js$4;
      var $js$6=$js$5^255;
      var $js$7=$js$3($js$6);
      r[i]=$js$7,0}
    return r};
var
 union=
  function(s1,s2)
   {var r="unknown primitive:caml_create_string";
    var $js$1=0;
    var $js$2=31;
    for(var i=$js$1;i<=$js$2;i++)
     {var $js$3=Char["chr"];
      var $js$4=s1[i];
      var $js$5=$js$4;
      var $js$6=s2[i];
      var $js$7=$js$6;
      var $js$8=$js$5|$js$7;
      var $js$9=$js$3($js$8);
      r[i]=$js$9,0}
    return r};
var
 disjoint=
  function(s1,s2)
   {try
     {var $js$1=0;
      var $js$2=31;
      for(var i=$js$1;i<=$js$2;i++)
       {var $js$3=s1[i];
        var $js$4=$js$3;
        var $js$5=s2[i];
        var $js$6=$js$5;
        var $js$7=$js$4&$js$6;
        var $js$8=$js$7!=0;
        if($js$8){var $js$9=Pervasives["Exit"];throw $js$9}else{}}
      return 1}
    catch(exn)
     {var $js$10=exn=Pervasives["Exit"];
      if($js$10){return 0}else{return "unknown primitive:reraise"}}};
var
 iter=
  function(fn,s)
   {var $js$1=0;
    var $js$2=31;
    for(var i=$js$1;i<=$js$2;i++)
     {var $js$3=s[i];
      var c=$js$3;
      var $js$4=c!=0;
      if($js$4)
       {var $js$5=0;
        var $js$6=7;
        for(var j=$js$5;j<=$js$6;j++)
         {var $js$7=(c&1<<j)!=0;
          if($js$7)
           {var $js$8=Char["chr"];var $js$9=$js$8((i<<3)+j);fn($js$9)}
          else
           {}}}
      else
       {}}};
var
 expand=
  function(s)
   {var $js$1=Bytes["make"];
    var r=$js$1(256,0);
    iter(function(c){return r[c]=1,0},s);
    return r};
var
 fold_case=
  function(s)
   {var r=make_empty(0);
    iter
     (function(c)
       {var $js$1=Char["lowercase"];
        var $js$2=$js$1(c);
        add(r,$js$2);
        var $js$3=Char["uppercase"];
        var $js$4=$js$3(c);
        return add(r,$js$4)},
      s);
    return r};
var
 Charset=
  [0,
   full,
   make_empty,
   add,
   add_range,
   singleton,
   complement,
   union,
   disjoint,
   iter,
   expand,
   fold_case];
var op_CHAR=0;
var op_CHARNORM=1;
var op_STRING=2;
var op_STRINGNORM=3;
var op_CHARCLASS=4;
var op_BOL=5;
var op_EOL=6;
var op_WORDBOUNDARY=7;
var op_BEGGROUP=8;
var op_ENDGROUP=9;
var op_REFGROUP=10;
var op_ACCEPT=11;
var op_SIMPLEOPT=12;
var op_SIMPLESTAR=13;
var op_SIMPLEPLUS=14;
var op_GOTO=15;
var op_PUSHBACK=16;
var op_SETMARK=17;
var op_CHECKPROGRESS=18;
var instr=function(opc,arg){return opc|arg<<8};
var displ=function(dest,from){return dest-from-1};
var
 is_nullable=
  function(param)
   {var $js$1=param;
    if(typeof $js$1=="number")
     {if($js$1==0)
       {return 1}
      else
       if($js$1==1){return 1}else if($js$1==2){return 1}}
    else
     {var $js$2=$js$1[0];
      if($js$2==0)
       {return 0}
      else
       if($js$2==1)
        {var s=param[1];return "unknown primitive:caml_string_equal"}
       else
        if($js$2==2)
         {return 0}
        else
         if($js$2==3)
          {var rl=param[1];
           var $js$3=List["for_all"];
           return $js$3(is_nullable,rl)}
         else
          if($js$2==4)
           {var r2=param[2];
            var r1=param[1];
            var $js$4=is_nullable(r1);
            var $js$5=is_nullable(r2);
            return $js$4||$js$5}
          else
           if($js$2==5)
            {return 1}
           else
            if($js$2==6)
             {var r=param[1];return is_nullable(r)}
            else
             if($js$2==7)
              {return 1}
             else
              if($js$2==8)
               {var r$1=param[2];return is_nullable(r$1)}
              else
               if($js$2==9){return 1}}};
var
 first=
  function(param)
   {var $js$1=param;
    if(typeof $js$1=="number")
     {if($js$1==0)
       {return Charset[1]}
      else
       if($js$1==1){return Charset[1]}else if($js$1==2){return Charset[1]}}
    else
     {var $js$2=$js$1[0];
      if($js$2==0)
       {var c=param[1];var $js$3=Charset[5];return $js$3(c)}
      else
       if($js$2==1)
        {var s=param[1];
         var $js$4="unknown primitive:caml_string_equal";
         if($js$4)
          {return Charset[1]}
         else
          {var $js$5=Charset[5];var $js$6=s[0];return $js$5($js$6)}}
       else
        if($js$2==2)
         {var cmpl=param[2];
          var cl=param[1];
          var $js$7=cmpl;
          if($js$7){var $js$8=Charset[6];return $js$8(cl)}else{return cl}}
        else
         if($js$2==3)
          {var rl=param[1];return first_seq(rl)}
         else
          if($js$2==4)
           {var r2=param[2];
            var r1=param[1];
            var $js$9=Charset[7];
            var $js$10=first(r1);
            var $js$11=first(r2);
            return $js$9($js$10,$js$11)}
          else
           if($js$2==5)
            {return Charset[1]}
           else
            if($js$2==6)
             {var r=param[1];return first(r)}
            else
             if($js$2==7)
              {return Charset[1]}
             else
              if($js$2==8)
               {var r$1=param[2];return first(r$1)}
              else
               if($js$2==9){return Charset[1]}}};
var
 first_seq=
  function(param)
   {var $js$1=param;
    if($js$1)
     {var r=param[1];
      var $js$2=r;
      if(typeof $js$2=="number")
       {if($js$2==0)
         {var exit=136}
        else
         if($js$2==1){var exit=136}else if($js$2==2){var exit=136}}
      else
       {var $js$3=$js$2[0];
        if($js$3==5)
         {var rl=param[2];
          var r$1=r[1];
          var $js$4=Charset[7];
          var $js$5=first(r$1);
          var $js$6=first_seq(rl);
          return $js$4($js$5,$js$6)}
        else
         if($js$3==7)
          {var rl$1=param[2];
           var r$2=r[1];
           var $js$7=Charset[7];
           var $js$8=first(r$2);
           var $js$9=first_seq(rl$1);
           return $js$7($js$8,$js$9)}
         else
          {return first(r)}}
      switch(exit){case 136:var rl$2=param[2];return first_seq(rl$2)}}
    else
     {return Charset[1]}};
var
 charclass_of_regexp=
  function(fold_case$1,re)
   {var $js$1=re;
    if(typeof $js$1=="number")
     {"unknown block:re/1147"}
    else
     {var $js$2=$js$1[0];
      if($js$2==0)
       {var c=re[1];
        var $js$3=Charset[5];
        var $js$4=$js$3(c);
        var match=[0,$js$4,0]}
      else
       if($js$2==2)
        {var compl=re[2];var cl=re[1];var match=[0,cl,compl]}
       else
        {var exit=133}}
    switch(exit)
     {case 133:var $js$5=[0,Assert_failure,[0,"str.ml",207,11]];throw $js$5}
    var compl$1=match[2];
    var cl1=match[1];
    var $js$6=fold_case$1;
    if($js$6){var $js$7=Charset[11];var cl2=$js$7(cl1)}else{var cl2=cl1}
    var $js$8=Bytes["to_string"];
    var $js$9=compl$1;
    if($js$9)
     {var $js$10=Charset[6];var $js$11=$js$10(cl2)}
    else
     {var $js$11=cl2}
    return $js$8($js$11)};
var t="unknown primitive:caml_create_string";
var $js$1=0;
var $js$2=255;
for(var i=$js$1;i<=$js$2;i++)
 {var $js$3=Char["lowercase"];
  var $js$4=Char["chr"];
  var $js$5=$js$4(i);
  var $js$6=$js$3($js$5);
  t[i]=$js$6,0}
var $js$7=Bytes["to_string"];
var fold_case_table=$js$7(t);
var $js$8=Map["Make"];
var compare=function(x,y){return "unknown primitive:caml_string_compare"};
var $js$9=[0,compare];
var StringMap=$js$8($js$9);
var
 compile=
  function(fold_case$1,re)
   {var $js$10="unknown primitive:caml_make_vect";
    var prog=[0,$js$10];
    var progpos=[0,0];
    var cpool=[0,StringMap[1]];
    var cpoolpos=[0,0];
    var numgroups=[0,1];
    var numregs=[0,0];
    var
     emit_instr=
      function(opc,arg)
       {var $js$11=progpos[1]>=prog[1]["length"];
        if($js$11)
         {var newlen=[0,prog[1]["length"]];
          for(;;)
           {var $js$12=progpos[1]>=newlen[1];
            if($js$12){newlen[1]=newlen[1]*2,0}else break}
          var nprog="unknown primitive:caml_make_vect";
          var $js$13=Array["blit"];
          $js$13(prog[1],0,nprog,0,prog[1]["length"]);
          prog[1]=nprog,0}
        else
         {}
        var $js$14=instr(opc,arg);
        prog[1][progpos[1]]=$js$14,0;
        return progpos[0]++};
    var emit_hole=function(param){var p=progpos[1];progpos[0]++;return p};
    var
     patch_instr=
      function(pos,opc,dest)
       {var $js$11=displ(dest,pos);
        var $js$12=instr(opc,$js$11);
        return prog[1][pos]=$js$12,0};
    var
     cpool_index=
      function(s)
       {try
         {var $js$11=StringMap[22];return $js$11(s,cpool[1])}
        catch(exn)
         {var $js$12=exn=Not_found;
          if($js$12)
           {var p=cpoolpos[1];
            var $js$13=StringMap[4];
            var $js$14=$js$13(s,p,cpool[1]);
            cpool[1]=$js$14,0;
            cpoolpos[0]++;
            return p}
          else
           {return "unknown primitive:reraise"}}};
    var
     allocate_register_if_nullable=
      function(r)
       {var $js$11=is_nullable(r);
        if($js$11)
         {var n=numregs[1];
          var $js$12=n>=64;
          if($js$12)
           {var $js$13=Pervasives["failwith"];
            $js$13("too many r* or r+ where r is nullable")}
          else
           {}
          numregs[0]++;
          return n}
        else
         {return -1}};
    var
     emit_code=
      function(param)
       {var $js$11=param;
        if(typeof $js$11=="number")
         {if($js$11==0)
           {return emit_instr(op_BOL,0)}
          else
           if($js$11==1)
            {return emit_instr(op_EOL,0)}
           else
            if($js$11==2){return emit_instr(op_WORDBOUNDARY,0)}}
        else
         {var $js$12=$js$11[0];
          if($js$12==0)
           {var c=param[1];
            var $js$13=fold_case$1;
            if($js$13)
             {var $js$14=Char["lowercase"];
              var $js$15=$js$14(c);
              var $js$16=$js$15;
              return emit_instr(op_CHARNORM,$js$16)}
            else
             {return emit_instr(op_CHAR,c)}}
          else
           if($js$12==1)
            {var s=param[1];
             var match=s["length"];
             var $js$17=match!=0;
             if($js$17)
              {var $js$18=match!=1;
               if($js$18)
                {try
                  {var $js$19=String["index"];
                   var i$1=$js$19(s,0);
                   var $js$20=string_before(s,i$1);
                   var $js$21=[1,$js$20];
                   emit_code($js$21);
                   emit_instr(op_CHAR,0);
                   var $js$22=string_after(s,i$1+1);
                   var $js$23=[1,$js$22];
                   return emit_code($js$23)}
                 catch(exn)
                  {var $js$24=exn=Not_found;
                   if($js$24)
                    {var $js$25=fold_case$1;
                     if($js$25)
                      {var $js$26=String["lowercase"];
                       var $js$27=$js$26(s);
                       var $js$28=cpool_index($js$27);
                       return emit_instr(op_STRINGNORM,$js$28)}
                     else
                      {var $js$29=cpool_index(s);
                       return emit_instr(op_STRING,$js$29)}}
                   else
                    {return "unknown primitive:reraise"}}}
               else
                {var $js$30=fold_case$1;
                 if($js$30)
                  {var $js$31=Char["lowercase"];
                   var $js$32=s[0];
                   var $js$33=$js$31($js$32);
                   var $js$34=$js$33;
                   return emit_instr(op_CHARNORM,$js$34)}
                 else
                  {var $js$35=s[0];
                   var $js$36=$js$35;
                   return emit_instr(op_CHAR,$js$36)}}}
             else
              {return 0}}
           else
            if($js$12==2)
             {var compl=param[2];
              var cl=param[1];
              var $js$37=fold_case$1;
              if($js$37)
               {var $js$38=Charset[11];var cl1=$js$38(cl)}
              else
               {var cl1=cl}
              var $js$39=compl;
              if($js$39)
               {var $js$40=Charset[6];var cl2=$js$40(cl1)}
              else
               {var cl2=cl1}
              var $js$41=Bytes["to_string"];
              var $js$42=$js$41(cl2);
              var $js$43=cpool_index($js$42);
              return emit_instr(op_CHARCLASS,$js$43)}
            else
             if($js$12==3)
              {var rl=param[1];return emit_seq_code(rl)}
             else
              if($js$12==4)
               {var r2=param[2];
                var r1=param[1];
                var pos_pushback=emit_hole(0);
                emit_code(r1);
                var pos_goto_end=emit_hole(0);
                var lbl1=progpos[1];
                emit_code(r2);
                var lbl2=progpos[1];
                patch_instr(pos_pushback,op_PUSHBACK,lbl1);
                return patch_instr(pos_goto_end,op_GOTO,lbl2)}
              else
               if($js$12==5)
                {var r=param[1];
                 var regno=allocate_register_if_nullable(r);
                 var lbl1$1=emit_hole(0);
                 var $js$44=regno>=0;
                 if($js$44){emit_instr(op_SETMARK,regno)}else{}
                 emit_code(r);
                 var $js$45=regno>=0;
                 if($js$45){emit_instr(op_CHECKPROGRESS,regno)}else{}
                 var $js$46=displ(lbl1$1,progpos[1]);
                 emit_instr(op_GOTO,$js$46);
                 var lbl2$1=progpos[1];
                 return patch_instr(lbl1$1,op_PUSHBACK,lbl2$1)}
               else
                if($js$12==6)
                 {var r$1=param[1];
                  var regno$1=allocate_register_if_nullable(r$1);
                  var lbl1$2=progpos[1];
                  emit_code(r$1);
                  var $js$47=regno$1>=0;
                  if($js$47){emit_instr(op_CHECKPROGRESS,regno$1)}else{}
                  var pos_pushback$1=emit_hole(0);
                  var $js$48=regno$1>=0;
                  if($js$48){emit_instr(op_SETMARK,regno$1)}else{}
                  var $js$49=displ(lbl1$2,progpos[1]);
                  emit_instr(op_GOTO,$js$49);
                  var lbl2$2=progpos[1];
                  return patch_instr(pos_pushback$1,op_PUSHBACK,lbl2$2)}
                else
                 if($js$12==7)
                  {var r$2=param[1];
                   var pos_pushback$2=emit_hole(0);
                   emit_code(r$2);
                   var lbl=progpos[1];
                   return patch_instr(pos_pushback$2,op_PUSHBACK,lbl)}
                 else
                  if($js$12==8)
                   {var r$3=param[2];
                    var n=param[1];
                    var $js$50=n>=32;
                    if($js$50)
                     {var $js$51=Pervasives["failwith"];
                      $js$51("too many \(...\) groups")}
                    else
                     {}
                    emit_instr(op_BEGGROUP,n);
                    emit_code(r$3);
                    emit_instr(op_ENDGROUP,n);
                    var $js$52=Pervasives["max"];
                    var $js$53=$js$52(numgroups[1],n+1);
                    return numgroups[1]=$js$53,0}
                  else
                   if($js$12==9)
                    {var n$1=param[1];return emit_instr(op_REFGROUP,n$1)}}};
    var
     emit_seq_code=
      function(param)
       {var $js$11=param;
        if($js$11)
         {var r=param[1];
          var $js$12=r;
          if(typeof $js$12=="number")
           {"unknown block:r/1281"}
          else
           {var $js$13=$js$12[0];
            if($js$13==5)
             {var r$1=r[1];
              var $js$14=r$1;
              if(typeof $js$14=="number")
               {"unknown block:r/1275"}
              else
               {var $js$15=$js$14[0];
                if($js$15==0)
                 {var exit=108}
                else
                 if($js$15==2){var exit=108}else{var exit$1=107}}
              switch(exit)
               {case 108:
                 var rl=param[2];
                 var $js$16=first(r$1);
                 var $js$17=first_seq(rl);
                 var $js$18=disjoint_modulo_case($js$16,$js$17);
                 if($js$18)
                  {var $js$19=charclass_of_regexp(fold_case$1,r$1);
                   var $js$20=cpool_index($js$19);
                   emit_instr(op_SIMPLESTAR,$js$20);
                   return emit_seq_code(rl)}
                 else
                  {var exit$1=107}
                }}
            else
             if($js$13==6)
              {var r$2=r[1];
               var $js$21=r$2;
               if(typeof $js$21=="number")
                {"unknown block:r/1277"}
               else
                {var $js$22=$js$21[0];
                 if($js$22==0)
                  {var exit$2=109}
                 else
                  if($js$22==2){var exit$2=109}else{var exit$1=107}}
               switch(exit$2)
                {case 109:
                  var rl$1=param[2];
                  var $js$23=first(r$2);
                  var $js$24=first_seq(rl$1);
                  var $js$25=disjoint_modulo_case($js$23,$js$24);
                  if($js$25)
                   {var $js$26=charclass_of_regexp(fold_case$1,r$2);
                    var $js$27=cpool_index($js$26);
                    emit_instr(op_SIMPLEPLUS,$js$27);
                    return emit_seq_code(rl$1)}
                  else
                   {var exit$1=107}
                 }}
             else
              if($js$13==7)
               {var r$3=r[1];
                var $js$28=r$3;
                if(typeof $js$28=="number")
                 {"unknown block:r/1279"}
                else
                 {var $js$29=$js$28[0];
                  if($js$29==0)
                   {var exit$3=110}
                  else
                   if($js$29==2){var exit$3=110}else{var exit$1=107}}
                switch(exit$3)
                 {case 110:
                   var rl$2=param[2];
                   var $js$30=first(r$3);
                   var $js$31=first_seq(rl$2);
                   var $js$32=disjoint_modulo_case($js$30,$js$31);
                   if($js$32)
                    {var $js$33=charclass_of_regexp(fold_case$1,r$3);
                     var $js$34=cpool_index($js$33);
                     emit_instr(op_SIMPLEOPT,$js$34);
                     return emit_seq_code(rl$2)}
                   else
                    {var exit$1=107}
                  }}
              else
               {var exit$1=107}}
          switch(exit$1)
           {case 107:var rl$3=param[2];emit_code(r);return emit_seq_code(rl$3)
            }}
        else
         {return 0}};
    var
     disjoint_modulo_case=
      function(c1,c2)
       {var $js$11=fold_case$1;
        if($js$11)
         {var $js$12=Charset[8];
          var $js$13=Charset[11];
          var $js$14=$js$13(c1);
          var $js$15=Charset[11];
          var $js$16=$js$15(c2);
          return $js$12($js$14,$js$16)}
        else
         {var $js$17=Charset[8];return $js$17(c1,c2)}};
    emit_code(re);
    emit_instr(op_ACCEPT,0);
    var start=first(re);
    var $js$11=fold_case$1;
    if($js$11)
     {var $js$12=Charset[11];var start'=$js$12(start)}
    else
     {var start'=start}
    var $js$13="unknown primitive:caml_equal";
    if($js$13)
     {var start_pos=-1}
    else
     {var $js$14=Bytes["to_string"];
      var $js$15=Charset[10];
      var $js$16=$js$15(start');
      var $js$17=$js$14($js$16);
      var start_pos=cpool_index($js$17)}
    var constantpool="unknown primitive:caml_make_vect";
    var $js$18=StringMap[10];
    $js$18(function(str,idx){return constantpool[idx]=str,0},cpool[1]);
    var $js$19=Array["sub"];
    var $js$20=$js$19(prog[1],0,progpos[1]);
    var $js$21=fold_case$1;
    if($js$21){var $js$22=fold_case_table}else{var $js$22=""}
    return [0,$js$20,constantpool,$js$22,numgroups[1],numregs[1],start_pos]};
var
 create=
  function(param)
   {var $js$10=Buffer["create"];var $js$11=$js$10(16);return [0,$js$11,0]};
var
 flush=
  function(buf)
   {var $js$10=Buffer["contents"];
    var s=$js$10(buf[1]);
    var $js$11=Buffer["clear"];
    $js$11(buf[1]);
    var match=s["length"];
    var $js$12=match!=0;
    if($js$12)
     {var $js$13=match!=1;
      if($js$13)
       {return buf[2]=[0,[1,s],buf[2]],0}
      else
       {var $js$14=s[0];
        var $js$15=[0,$js$14];
        var $js$16=[0,$js$15,buf[2]];
        return buf[2]=$js$16,0}}
    else
     {return 0}};
var
 add$1=
  function(buf,re)
   {var $js$10=re;
    if(typeof $js$10=="number")
     {"unknown block:re/1300"}
    else
     {var $js$11=$js$10[0];
      if($js$11==0)
       {var c=re[1];var $js$12=Buffer["add_char"];return $js$12(buf[1],c)}
      else
       {var exit=79}}
    switch(exit){case 79:flush(buf);return buf[2]=[0,re,buf[2]],0}};
var
 extract=
  function(buf)
   {flush(buf);
    var $js$10=List["rev"];
    var $js$11=$js$10(buf[2]);
    return [3,$js$11]};
var SeqBuffer=[0,create,flush,add$1,extract];
var $js$10=Charset[6];
var $js$11=Charset[5];
var $js$12=$js$11(10);
var dotclass=$js$10($js$12);
var
 parse=
  function(s)
   {var len=s["length"];
    var group_counter=[0,1];
    var
     regexp0=
      function(i$1)
       {var match=regexp1(i$1);
        var j=match[2];
        var r=match[1];
        return regexp0cont(r,j)};
    var
     regexp0cont=
      function(r1,i$1)
       {var $js$13=s[i$1];
        var $js$14=$js$13=92;
        var $js$15=s[i$1+1];
        var $js$16=$js$15=124;
        var $js$17=$js$14&&$js$16;
        var $js$18=i$1+2<=len&&$js$17;
        if($js$18)
         {var match=regexp1(i$1+2);
          var j=match[2];
          var r2=match[1];
          return regexp0cont([4,r1,r2],j)}
        else
         {return [0,r1,i$1]}};
    var
     regexp1=
      function(i$1)
       {var $js$13=SeqBuffer[1];
        var $js$14=$js$13(0);
        return regexp1cont($js$14,i$1)};
    var
     regexp1cont=
      function(sb,i$1)
       {var $js$13=s[i$1];
        var $js$14=$js$13=92;
        var c=s[i$1+1];
        var $js$15=(c=124)||(c=41);
        var $js$16=$js$14&&$js$15;
        var $js$17=i$1+2<=len&&$js$16;
        var $js$18=i$1>=len||$js$17;
        if($js$18)
         {var $js$19=SeqBuffer[4];var $js$20=$js$19(sb);return [0,$js$20,i$1]}
        else
         {var match=regexp2(i$1);
          var j=match[2];
          var r=match[1];
          var $js$21=SeqBuffer[3];
          $js$21(sb,r);
          return regexp1cont(sb,j)}};
    var
     regexp2=
      function(i$1)
       {var match=regexp3(i$1);
        var j=match[2];
        var r=match[1];
        return regexp2cont(r,j)};
    var
     regexp2cont=
      function(r,i$1)
       {var $js$13=i$1>=len;
        if($js$13)
         {return [0,r,i$1]}
        else
         {var match=s[i$1];
          var switcher=-42+match;
          var $js$14=1<switcher>>>0;
          if($js$14)
           {var $js$15=switcher!=21;
            if($js$15){return [0,r,i$1]}else{return regexp2cont([7,r],i$1+1)}}
          else
           {var $js$16=switcher!=0;
            if($js$16)
             {return regexp2cont([6,r],i$1+1)}
            else
             {return regexp2cont([5,r],i$1+1)}}}};
    var
     regexp3=
      function(i$1)
       {var c=s[i$1];
        var $js$13=c!=36;
        if($js$13)
         {var $js$14=c>=91;
          if($js$14)
           {var $js$15=c>=95;
            if($js$15)
             {var exit=62}
            else
             {var switcher=-91+c;
              var $js$16=switcher;
              var $js$17=$js$16[0];
              if($js$17==0)
               {var match=regexpclass0(i$1+1);
                var j=match[3];
                var compl=match[2];
                var c$1=match[1];
                return [0,[2,c$1,compl],j]}
              else
               if($js$17==1)
                {return regexpbackslash(i$1+1)}
               else
                if($js$17==2)
                 {var exit=62}
                else
                 if($js$17==3){return [0,0,i$1+1]}}}
          else
           {var $js$18=c!=46;
            if($js$18){var exit=62}else{return [0,[2,dotclass,0],i$1+1]}}}
        else
         {return [0,1,i$1+1]}
        switch(exit){case 62:return [0,[0,c],i$1+1]}};
    var
     regexpbackslash=
      function(i$1)
       {var $js$13=i$1>=len;
        if($js$13)
         {return [0,[0,92],i$1]}
        else
         {var c=s[i$1];
          var $js$14=c<58;
          if($js$14)
           {var switcher=-40+c;
            var $js$15=1<switcher>>>0;
            if($js$15)
             {var $js$16=switcher>=9;
              if($js$16){return [0,[9,c-48],i$1+1]}else{var exit=67}}
            else
             {var $js$17=switcher!=0;
              if($js$17)
               {var exit=65}
              else
               {var group_no=group_counter[1];
                var $js$18=group_no<32;
                if($js$18){group_counter[0]++}else{}
                var match=regexp0(i$1+1);
                var j=match[2];
                var r=match[1];
                var $js$19=s[j];
                var $js$20=$js$19=92;
                var $js$21=s[j+1];
                var $js$22=$js$21=41;
                var $js$23=$js$20&&$js$22;
                var $js$24=j+1<len&&$js$23;
                if($js$24)
                 {var $js$25=group_no<32;
                  if($js$25)
                   {return [0,[8,group_no,r],j+2]}
                  else
                   {return [0,r,j+2]}}
                else
                 {var $js$26=Pervasives["failwith"];
                  return $js$26("\( group not closed by \)")}}}}
          else
           {var $js$27=c!=98;
            if($js$27)
             {var $js$28=c!=124;if($js$28){var exit=67}else{var exit=65}}
            else
             {return [0,2,i$1+1]}}
          switch(exit)
           {case 67:var c$1=c;return [0,[0,c$1],i$1+1];
            case 65:
             var $js$29=[0,Assert_failure,[0,"str.ml",511,10]];throw $js$29
            }}};
    var
     regexpclass0=
      function(i$1)
       {var $js$13=s[i$1];
        var $js$14=$js$13=94;
        var $js$15=i$1<len&&$js$14;
        if($js$15)
         {var match=regexpclass1(i$1+1);
          var j=match[2];
          var c=match[1];
          return [0,c,1,j]}
        else
         {var match$1=regexpclass1(i$1);
          var j$1=match$1[2];
          var c$1=match$1[1];
          return [0,c$1,0,j$1]}};
    var
     regexpclass1=
      function(i$1)
       {var $js$13=Charset[2];
        var c=$js$13(0);
        var j=regexpclass2(c,i$1,i$1);
        return [0,c,j]};
    var
     regexpclass2=
      function(c,start,i$1)
       {var $js$13=i$1>=len;
        if($js$13)
         {var $js$14=Pervasives["failwith"];$js$14("[ class not closed by ]")}
        else
         {}
        var $js$15=s[i$1];
        var $js$16=$js$15=93;
        var $js$17=$js$16&&i$1>start;
        if($js$17)
         {return i$1+1}
        else
         {var c1=s[i$1];
          var $js$18=s[i$1+1];
          var $js$19=$js$18=45;
          var $js$20=s[i$1+2];
          var $js$21=$js$20!=93;
          var $js$22=$js$19&&$js$21;
          var $js$23=i$1+2<len&&$js$22;
          if($js$23)
           {var c2=s[i$1+2];
            var $js$24=Charset[4];
            $js$24(c,c1,c2);
            return regexpclass2(c,start,i$1+3)}
          else
           {var $js$25=Charset[3];
            $js$25(c,c1);
            return regexpclass2(c,start,i$1+1)}}};
    var match=regexp0(0);
    var j=match[2];
    var r=match[1];
    var $js$13=j=len;
    if($js$13)
     {return r}
    else
     {var $js$14=Pervasives["failwith"];
      return $js$14("spurious \) in regular expression")}};
var regexp=function(e){var $js$13=parse(e);return compile(0,$js$13)};
var
 regexp_case_fold=
  function(e){var $js$13=parse(e);return compile(1,$js$13)};
var
 quote=
  function(s)
   {var len=s["length"];
    var buf="unknown primitive:caml_create_string";
    var pos=[0,0];
    var $js$13=0;
    var $js$14=len-1;
    for(var i$1=$js$13;i$1<=$js$14;i$1++)
     {var c=s[i$1];
      var switcher=-63+c;
      var $js$15=31<switcher>>>0;
      if($js$15)
       {var switcher$1=27+switcher;
        var $js$16=10<switcher$1>>>0;
        if($js$16)
         {var exit=47}
        else
         {var $js$17=switcher$1;
          var $js$18=$js$17[0];
          if($js$18==0)
           {var exit=46}
          else
           if($js$18==1)
            {var exit=47}
           else
            if($js$18==2)
             {var exit=47}
            else
             if($js$18==3)
              {var exit=47}
             else
              if($js$18==4)
               {var exit=47}
              else
               if($js$18==5)
                {var exit=47}
               else
                if($js$18==6)
                 {var exit=46}
                else
                 if($js$18==7)
                  {var exit=46}
                 else
                  if($js$18==8)
                   {var exit=47}
                  else
                   if($js$18==9){var exit=47}else if($js$18==10){var exit=46}}}
      else
       {var switcher$2=-1+switcher;
        var $js$19=26<switcher$2>>>0;
        if($js$19){var exit=46}else{var exit=47}}
      switch(exit)
       {case 47:var c$1=c;buf[pos[1]]=c$1,0;pos[1]=pos[1]+1,0;
        case 46:buf[pos[1]]=92,0;buf[pos[1]+1]=c,0;pos[1]=pos[1]+2,0
        }}
    var $js$20=Bytes["sub_string"];
    return $js$20(buf,0,pos[1])};
var regexp_string=function(s){return compile(0,[1,s])};
var regexp_string_case_fold=function(s){return compile(1,[1,s])};
var last_search_result=[0,[]];
var
 string_match=
  function(re,s,pos)
   {var res="unknown primitive:re_string_match";
    last_search_result[1]=res,0;
    return res["length"]>0};
var
 string_partial_match=
  function(re,s,pos)
   {var res="unknown primitive:re_partial_match";
    last_search_result[1]=res,0;
    return res["length"]>0};
var
 search_forward=
  function(re,s,pos)
   {var res="unknown primitive:re_search_forward";
    last_search_result[1]=res,0;
    var $js$13=res["length"]=0;
    if($js$13){var $js$14=Not_found;throw $js$14}else{return res[0]}};
var
 search_backward=
  function(re,s,pos)
   {var res="unknown primitive:re_search_backward";
    last_search_result[1]=res,0;
    var $js$13=res["length"]=0;
    if($js$13){var $js$14=Not_found;throw $js$14}else{return res[0]}};
var
 group_beginning=
  function(n)
   {var n2=n+n;
    var $js$13=n<0||n2>=last_search_result[1]["length"];
    if($js$13)
     {var $js$14=Pervasives["invalid_arg"];
      return $js$14("Str.group_beginning")}
    else
     {var pos=last_search_result[1][n2];
      var $js$15=pos=-1;
      if($js$15){var $js$16=Not_found;throw $js$16}else{return pos}}};
var
 group_end=
  function(n)
   {var n2=n+n;
    var $js$13=n<0||n2>=last_search_result[1]["length"];
    if($js$13)
     {var $js$14=Pervasives["invalid_arg"];return $js$14("Str.group_end")}
    else
     {var pos=last_search_result[1][n2+1];
      var $js$15=pos=-1;
      if($js$15){var $js$16=Not_found;throw $js$16}else{return pos}}};
var
 matched_group=
  function(n,txt)
   {var n2=n+n;
    var $js$13=n<0||n2>=last_search_result[1]["length"];
    if($js$13)
     {var $js$14=Pervasives["invalid_arg"];return $js$14("Str.matched_group")}
    else
     {var b=last_search_result[1][n2];
      var e=last_search_result[1][n2+1];
      var $js$15=b=-1;
      if($js$15)
       {var $js$16=Not_found;throw $js$16}
      else
       {var $js$17=String["sub"];return $js$17(txt,b,e-b)}}};
var match_beginning=function(param){return group_beginning(0)};
var match_end=function(param){return group_end(0)};
var matched_string=function(txt){return matched_group(0,txt)};
var
 replace_matched=
  function(repl,matched){return "unknown primitive:re_replacement_text"};
var
 substitute_first=
  function(expr,repl_fun,text)
   {try
     {var pos=search_forward(expr,text,0);
      var $js$13=String["concat"];
      var $js$14=string_before(text,pos);
      var $js$15=repl_fun(text);
      var $js$16=match_end(0);
      var $js$17=string_after(text,$js$16);
      var $js$18=[0,$js$17,0];
      var $js$19=[0,$js$15,$js$18];
      var $js$20=[0,$js$14,$js$19];
      return $js$13("",$js$20)}
    catch(exn)
     {var $js$21=exn=Not_found;
      if($js$21){return text}else{return "unknown primitive:reraise"}}};
var
 opt_search_forward=
  function(re,s,pos)
   {try
     {var $js$13=search_forward(re,s,pos);return [0,$js$13]}
    catch(exn)
     {var $js$14=exn=Not_found;
      if($js$14){return 0}else{return "unknown primitive:reraise"}}};
var
 global_substitute=
  function(expr,repl_fun,text)
   {var
     replace=
      function(accu,start,last_was_empty)
       {var $js$13=last_was_empty;
        if($js$13){var startpos=start+1}else{var startpos=start}
        var $js$14=startpos>text["length"];
        if($js$14)
         {var $js$15=string_after(text,start);return [0,$js$15,accu]}
        else
         {var match=opt_search_forward(expr,text,startpos);
          var $js$16=match;
          if($js$16)
           {var pos=match[1];
            var end_pos=match_end(0);
            var repl_text=repl_fun(text);
            var $js$17=String["sub"];
            var $js$18=$js$17(text,start,pos-start);
            var $js$19=[0,$js$18,accu];
            var $js$20=[0,repl_text,$js$19];
            return replace($js$20,end_pos,end_pos=pos)}
          else
           {var $js$21=string_after(text,start);return [0,$js$21,accu]}}};
    var $js$13=String["concat"];
    var $js$14=List["rev"];
    var $js$15=replace(0,0,0);
    var $js$16=$js$14($js$15);
    return $js$13("",$js$16)};
var
 global_replace=
  function(expr,repl,text)
   {var $js$13=replace_matched(repl);
    return global_substitute(expr,$js$13,text)};
var
 replace_first=
  function(expr,repl,text)
   {var $js$13=replace_matched(repl);
    return substitute_first(expr,$js$13,text)};
var
 opt_search_forward_progress=
  function(expr,text,start)
   {var match=opt_search_forward(expr,text,start);
    var $js$13=match;
    if($js$13)
     {var pos=match[1];
      var $js$14=match_end(0);
      var $js$15=$js$14>start;
      if($js$15)
       {return [0,pos]}
      else
       {var $js$16=start<text["length"];
        if($js$16){return opt_search_forward(expr,text,start+1)}else{return 0}}}
    else
     {return 0}};
var
 bounded_split=
  function(expr,text,num)
   {var $js$13=string_match(expr,text,0);
    if($js$13){var start=match_end(0)}else{var start=0}
    var
     split=
      function(accu,start$1,n)
       {var $js$14=start$1>=text["length"];
        if($js$14)
         {return accu}
        else
         {var $js$15=n=1;
          if($js$15)
           {var $js$16=string_after(text,start$1);return [0,$js$16,accu]}
          else
           {var match=opt_search_forward_progress(expr,text,start$1);
            var $js$17=match;
            if($js$17)
             {var pos=match[1];
              var $js$18=String["sub"];
              var $js$19=$js$18(text,start$1,pos-start$1);
              var $js$20=[0,$js$19,accu];
              var $js$21=match_end(0);
              return split($js$20,$js$21,n-1)}
            else
             {var $js$22=string_after(text,start$1);return [0,$js$22,accu]}}}};
    var $js$14=List["rev"];
    var $js$15=split(0,start,num);
    return $js$14($js$15)};
var split=function(expr,text){return bounded_split(expr,text,0)};
var
 bounded_split_delim=
  function(expr,text,num)
   {var
     split$1=
      function(accu,start,n)
       {var $js$13=start>text["length"];
        if($js$13)
         {return accu}
        else
         {var $js$14=n=1;
          if($js$14)
           {var $js$15=string_after(text,start);return [0,$js$15,accu]}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            var $js$16=match;
            if($js$16)
             {var pos=match[1];
              var $js$17=String["sub"];
              var $js$18=$js$17(text,start,pos-start);
              var $js$19=[0,$js$18,accu];
              var $js$20=match_end(0);
              return split$1($js$19,$js$20,n-1)}
            else
             {var $js$21=string_after(text,start);return [0,$js$21,accu]}}}};
    var $js$13="unknown primitive:caml_string_equal";
    if($js$13)
     {return 0}
    else
     {var $js$14=List["rev"];
      var $js$15=split$1(0,0,num);
      return $js$14($js$15)}};
var split_delim=function(expr,text){return bounded_split_delim(expr,text,0)};
var
 bounded_full_split=
  function(expr,text,num)
   {var
     split$1=
      function(accu,start,n)
       {var $js$13=start>=text["length"];
        if($js$13)
         {return accu}
        else
         {var $js$14=n=1;
          if($js$14)
           {var $js$15=string_after(text,start);
            var $js$16=[0,$js$15];
            return [0,$js$16,accu]}
          else
           {var match=opt_search_forward_progress(expr,text,start);
            var $js$17=match;
            if($js$17)
             {var pos=match[1];
              var s=matched_string(text);
              var $js$18=pos>start;
              if($js$18)
               {var $js$19=String["sub"];
                var $js$20=$js$19(text,start,pos-start);
                var $js$21=[0,$js$20];
                var $js$22=[0,$js$21,accu];
                var $js$23=[0,[1,s],$js$22];
                var $js$24=match_end(0);
                return split$1($js$23,$js$24,n-1)}
              else
               {var $js$25=match_end(0);
                return split$1([0,[1,s],accu],$js$25,n-1)}}
            else
             {var $js$26=string_after(text,start);
              var $js$27=[0,$js$26];
              return [0,$js$27,accu]}}}};
    var $js$13=List["rev"];
    var $js$14=split$1(0,0,num);
    return $js$13($js$14)};
var full_split=function(expr,text){return bounded_full_split(expr,text,0)};
module["exports"]=
{"regexp":regexp,
 "regexp_case_fold":regexp_case_fold,
 "quote":quote,
 "regexp_string":regexp_string,
 "regexp_string_case_fold":regexp_string_case_fold,
 "string_match":string_match,
 "search_forward":search_forward,
 "search_backward":search_backward,
 "string_partial_match":string_partial_match,
 "matched_string":matched_string,
 "match_beginning":match_beginning,
 "match_end":match_end,
 "matched_group":matched_group,
 "group_beginning":group_beginning,
 "group_end":group_end,
 "global_replace":global_replace,
 "replace_first":replace_first,
 "global_substitute":global_substitute,
 "substitute_first":substitute_first,
 "replace_matched":replace_matched,
 "split":split,
 "bounded_split":bounded_split,
 "split_delim":split_delim,
 "bounded_split_delim":bounded_split_delim,
 "full_split":full_split,
 "bounded_full_split":bounded_full_split,
 "string_before":string_before,
 "string_after":string_after,
 "first_chars":first_chars,
 "last_chars":last_chars};
