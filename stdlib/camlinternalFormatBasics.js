// Generated CODE, PLEASE EDIT WITH CARE 



var
 erase_rel=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:return 0;}}
    else
     {switch(param[0])
       {case 0:var rest=param[1];return /* Char_ty */[0,erase_rel(rest)];
        case 1:
         var rest$1=param[1];return /* String_ty */[1,erase_rel(rest$1)];
        case 2:var rest$2=param[1];return /* Int_ty */[2,erase_rel(rest$2)];
        case 3:var rest$3=param[1];return /* Int32_ty */[3,erase_rel(rest$3)];
        case 4:
         var rest$4=param[1];return /* Nativeint_ty */[4,erase_rel(rest$4)];
        case 5:var rest$5=param[1];return /* Int64_ty */[5,erase_rel(rest$5)];
        case 6:var rest$6=param[1];return /* Float_ty */[6,erase_rel(rest$6)];
        case 7:var rest$7=param[1];return /* Bool_ty */[7,erase_rel(rest$7)];
        case 8:
         var rest$8=param[2];
         
         var ty=param[1];
         
         return /* Format_arg_ty */[8,ty,erase_rel(rest$8)];
         
        case 9:
         var rest$9=param[3];
         
         var ty1=param[1];
         
         return /* Format_subst_ty */[9,ty1,ty1,erase_rel(rest$9)];
         
        case 10:
         var rest$10=param[1];return /* Alpha_ty */[10,erase_rel(rest$10)];
        case 11:
         var rest$11=param[1];return /* Theta_ty */[11,erase_rel(rest$11)];
        case 12:
         var rest$12=param[1];return /* Any_ty */[12,erase_rel(rest$12)];
        case 13:
         var rest$13=param[1];return /* Reader_ty */[13,erase_rel(rest$13)];
        case 14:
         var rest$14=param[1];
         
         return /* Ignored_reader_ty */[14,erase_rel(rest$14)];
         
        }}
    };

var
 concat_fmtty=
  function(fmtty1,fmtty2)
   {if(typeof fmtty1=="number")
     {switch(fmtty1){case 0:return fmtty2;}}
    else
     {switch(fmtty1[0])
       {case 0:
         var rest=fmtty1[1];return /* Char_ty */[0,concat_fmtty(rest,fmtty2)];
        case 1:
         var rest$1=fmtty1[1];
         
         return /* String_ty */[1,concat_fmtty(rest$1,fmtty2)];
         
        case 2:
         var rest$2=fmtty1[1];
         
         return /* Int_ty */[2,concat_fmtty(rest$2,fmtty2)];
         
        case 3:
         var rest$3=fmtty1[1];
         
         return /* Int32_ty */[3,concat_fmtty(rest$3,fmtty2)];
         
        case 4:
         var rest$4=fmtty1[1];
         
         return /* Nativeint_ty */[4,concat_fmtty(rest$4,fmtty2)];
         
        case 5:
         var rest$5=fmtty1[1];
         
         return /* Int64_ty */[5,concat_fmtty(rest$5,fmtty2)];
         
        case 6:
         var rest$6=fmtty1[1];
         
         return /* Float_ty */[6,concat_fmtty(rest$6,fmtty2)];
         
        case 7:
         var rest$7=fmtty1[1];
         
         return /* Bool_ty */[7,concat_fmtty(rest$7,fmtty2)];
         
        case 8:
         var rest$8=fmtty1[2];
         
         var ty=fmtty1[1];
         
         return /* Format_arg_ty */[8,ty,concat_fmtty(rest$8,fmtty2)];
         
        case 9:
         var rest$9=fmtty1[3];
         
         var ty2=fmtty1[2];
         
         var ty1=fmtty1[1];
         
         return /* Format_subst_ty */[9,ty1,ty2,concat_fmtty(rest$9,fmtty2)];
         
        case 10:
         var rest$10=fmtty1[1];
         
         return /* Alpha_ty */[10,concat_fmtty(rest$10,fmtty2)];
         
        case 11:
         var rest$11=fmtty1[1];
         
         return /* Theta_ty */[11,concat_fmtty(rest$11,fmtty2)];
         
        case 12:
         var rest$12=fmtty1[1];
         
         return /* Any_ty */[12,concat_fmtty(rest$12,fmtty2)];
         
        case 13:
         var rest$13=fmtty1[1];
         
         return /* Reader_ty */[13,concat_fmtty(rest$13,fmtty2)];
         
        case 14:
         var rest$14=fmtty1[1];
         
         return /* Ignored_reader_ty */[14,concat_fmtty(rest$14,fmtty2)];
         
        }}
    };

var
 concat_fmt=
  function(fmt1,fmt2)
   {if(typeof fmt1=="number")
     {switch(fmt1){case 0:return fmt2;}}
    else
     {switch(fmt1[0])
       {case 0:var rest=fmt1[1];return /* Char */[0,concat_fmt(rest,fmt2)];
        case 1:
         var rest$1=fmt1[1];return /* Caml_char */[1,concat_fmt(rest$1,fmt2)];
        case 2:
         var rest$2=fmt1[2];
         
         var pad=fmt1[1];
         
         return /* String */[2,pad,concat_fmt(rest$2,fmt2)];
         
        case 3:
         var rest$3=fmt1[2];
         
         var pad$1=fmt1[1];
         
         return /* Caml_string */[3,pad$1,concat_fmt(rest$3,fmt2)];
         
        case 4:
         var rest$4=fmt1[4];
         
         var prec=fmt1[3];
         
         var pad$2=fmt1[2];
         
         var iconv=fmt1[1];
         
         return /* Int */[4,iconv,pad$2,prec,concat_fmt(rest$4,fmt2)];
         
        case 5:
         var rest$5=fmt1[4];
         
         var prec$1=fmt1[3];
         
         var pad$3=fmt1[2];
         
         var iconv$1=fmt1[1];
         
         return /* Int32 */[5,iconv$1,pad$3,prec$1,concat_fmt(rest$5,fmt2)];
         
        case 6:
         var rest$6=fmt1[4];
         
         var prec$2=fmt1[3];
         
         var pad$4=fmt1[2];
         
         var iconv$2=fmt1[1];
         
         return /* Nativeint */[6,
                 iconv$2,
                 pad$4,
                 prec$2,
                 concat_fmt(rest$6,fmt2)];
         
        case 7:
         var rest$7=fmt1[4];
         
         var prec$3=fmt1[3];
         
         var pad$5=fmt1[2];
         
         var iconv$3=fmt1[1];
         
         return /* Int64 */[7,iconv$3,pad$5,prec$3,concat_fmt(rest$7,fmt2)];
         
        case 8:
         var rest$8=fmt1[4];
         
         var prec$4=fmt1[3];
         
         var pad$6=fmt1[2];
         
         var fconv=fmt1[1];
         
         return /* Float */[8,fconv,pad$6,prec$4,concat_fmt(rest$8,fmt2)];
         
        case 9:
         var rest$9=fmt1[1];return /* Bool */[9,concat_fmt(rest$9,fmt2)];
        case 10:
         var rest$10=fmt1[1];return /* Flush */[10,concat_fmt(rest$10,fmt2)];
        case 11:
         var rest$11=fmt1[2];
         
         var str=fmt1[1];
         
         return /* String_literal */[11,str,concat_fmt(rest$11,fmt2)];
         
        case 12:
         var rest$12=fmt1[2];
         
         var chr=fmt1[1];
         
         return /* Char_literal */[12,chr,concat_fmt(rest$12,fmt2)];
         
        case 13:
         var rest$13=fmt1[3];
         
         var fmtty=fmt1[2];
         
         var pad$7=fmt1[1];
         
         return /* Format_arg */[13,pad$7,fmtty,concat_fmt(rest$13,fmt2)];
         
        case 14:
         var rest$14=fmt1[3];
         
         var fmtty$1=fmt1[2];
         
         var pad$8=fmt1[1];
         
         return /* Format_subst */[14,pad$8,fmtty$1,concat_fmt(rest$14,fmt2)];
         
        case 15:
         var rest$15=fmt1[1];return /* Alpha */[15,concat_fmt(rest$15,fmt2)];
        case 16:
         var rest$16=fmt1[1];return /* Theta */[16,concat_fmt(rest$16,fmt2)];
        case 17:
         var rest$17=fmt1[2];
         
         var fmting_lit=fmt1[1];
         
         return /* Formatting_lit */[17,fmting_lit,concat_fmt(rest$17,fmt2)];
         
        case 18:
         var rest$18=fmt1[2];
         
         var fmting_gen=fmt1[1];
         
         return /* Formatting_gen */[18,fmting_gen,concat_fmt(rest$18,fmt2)];
         
        case 19:
         var rest$19=fmt1[1];return /* Reader */[19,concat_fmt(rest$19,fmt2)];
        case 20:
         var rest$20=fmt1[3];
         
         var char_set=fmt1[2];
         
         var width_opt=fmt1[1];
         
         return /* Scan_char_set */[20,
                 width_opt,
                 char_set,
                 concat_fmt(rest$20,fmt2)];
         
        case 21:
         var rest$21=fmt1[2];
         
         var counter=fmt1[1];
         
         return /* Scan_get_counter */[21,counter,concat_fmt(rest$21,fmt2)];
         
        case 22:
         var rest$22=fmt1[1];
         
         return /* Scan_next_char */[22,concat_fmt(rest$22,fmt2)];
         
        case 23:
         var rest$23=fmt1[2];
         
         var ign=fmt1[1];
         
         return /* Ignored_param */[23,ign,concat_fmt(rest$23,fmt2)];
         
        case 24:
         var rest$24=fmt1[3];
         
         var f=fmt1[2];
         
         var arity=fmt1[1];
         
         return /* Custom */[24,arity,f,concat_fmt(rest$24,fmt2)];
         
        }}
    };

module["exports"]=
{"concat_fmtty":concat_fmtty,"erase_rel":erase_rel,"concat_fmt":concat_fmt};

