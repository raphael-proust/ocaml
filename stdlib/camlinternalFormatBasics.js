// Generated CODE, PLEASE EDIT WITH CARE 



var
 erase_rel=
  function(param)
   {if(typeof param==="number")
     {switch(param){case 0:return /* End_of_fmtty */0}}
    else
     {switch(param[0])
       {case 0:return /* Char_ty */[0,erase_rel(param[1])];
        case 1:return /* String_ty */[1,erase_rel(param[1])];
        case 2:return /* Int_ty */[2,erase_rel(param[1])];
        case 3:return /* Int32_ty */[3,erase_rel(param[1])];
        case 4:return /* Nativeint_ty */[4,erase_rel(param[1])];
        case 5:return /* Int64_ty */[5,erase_rel(param[1])];
        case 6:return /* Float_ty */[6,erase_rel(param[1])];
        case 7:return /* Bool_ty */[7,erase_rel(param[1])];
        case 8:return /* Format_arg_ty */[8,param[1],erase_rel(param[2])];
        case 9:
         var ty1=param[1];
         
         return /* Format_subst_ty */[9,ty1,ty1,erase_rel(param[3])];
        case 10:return /* Alpha_ty */[10,erase_rel(param[1])];
        case 11:return /* Theta_ty */[11,erase_rel(param[1])];
        case 12:return /* Any_ty */[12,erase_rel(param[1])];
        case 13:return /* Reader_ty */[13,erase_rel(param[1])];
        case 14:return /* Ignored_reader_ty */[14,erase_rel(param[1])]
        }}
    };

var
 concat_fmtty=
  function(fmtty1,fmtty2)
   {if(typeof fmtty1==="number")
     {switch(fmtty1){case 0:return fmtty2}}
    else
     {switch(fmtty1[0])
       {case 0:return /* Char_ty */[0,concat_fmtty(fmtty1[1],fmtty2)];
        case 1:return /* String_ty */[1,concat_fmtty(fmtty1[1],fmtty2)];
        case 2:return /* Int_ty */[2,concat_fmtty(fmtty1[1],fmtty2)];
        case 3:return /* Int32_ty */[3,concat_fmtty(fmtty1[1],fmtty2)];
        case 4:return /* Nativeint_ty */[4,concat_fmtty(fmtty1[1],fmtty2)];
        case 5:return /* Int64_ty */[5,concat_fmtty(fmtty1[1],fmtty2)];
        case 6:return /* Float_ty */[6,concat_fmtty(fmtty1[1],fmtty2)];
        case 7:return /* Bool_ty */[7,concat_fmtty(fmtty1[1],fmtty2)];
        case 8:
         return /* Format_arg_ty */[8,
                 fmtty1[1],
                 concat_fmtty(fmtty1[2],fmtty2)];
        case 9:
         return /* Format_subst_ty */[9,
                 fmtty1[1],
                 fmtty1[2],
                 concat_fmtty(fmtty1[3],fmtty2)];
        case 10:return /* Alpha_ty */[10,concat_fmtty(fmtty1[1],fmtty2)];
        case 11:return /* Theta_ty */[11,concat_fmtty(fmtty1[1],fmtty2)];
        case 12:return /* Any_ty */[12,concat_fmtty(fmtty1[1],fmtty2)];
        case 13:return /* Reader_ty */[13,concat_fmtty(fmtty1[1],fmtty2)];
        case 14:
         return /* Ignored_reader_ty */[14,concat_fmtty(fmtty1[1],fmtty2)]
        }}
    };

var
 concat_fmt=
  function(fmt1,fmt2)
   {if(typeof fmt1==="number")
     {switch(fmt1){case 0:return fmt2}}
    else
     {switch(fmt1[0])
       {case 0:return /* Char */[0,concat_fmt(fmt1[1],fmt2)];
        case 1:return /* Caml_char */[1,concat_fmt(fmt1[1],fmt2)];
        case 2:return /* String */[2,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 3:return /* Caml_string */[3,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 4:
         return /* Int */[4,fmt1[1],fmt1[2],fmt1[3],concat_fmt(fmt1[4],fmt2)];
        case 5:
         return /* Int32 */[5,
                 fmt1[1],
                 fmt1[2],
                 fmt1[3],
                 concat_fmt(fmt1[4],fmt2)];
        case 6:
         return /* Nativeint */[6,
                 fmt1[1],
                 fmt1[2],
                 fmt1[3],
                 concat_fmt(fmt1[4],fmt2)];
        case 7:
         return /* Int64 */[7,
                 fmt1[1],
                 fmt1[2],
                 fmt1[3],
                 concat_fmt(fmt1[4],fmt2)];
        case 8:
         return /* Float */[8,
                 fmt1[1],
                 fmt1[2],
                 fmt1[3],
                 concat_fmt(fmt1[4],fmt2)];
        case 9:return /* Bool */[9,concat_fmt(fmt1[1],fmt2)];
        case 10:return /* Flush */[10,concat_fmt(fmt1[1],fmt2)];
        case 11:
         return /* String_literal */[11,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 12:
         return /* Char_literal */[12,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 13:
         return /* Format_arg */[13,fmt1[1],fmt1[2],concat_fmt(fmt1[3],fmt2)];
        case 14:
         return /* Format_subst */[14,
                 fmt1[1],
                 fmt1[2],
                 concat_fmt(fmt1[3],fmt2)];
        case 15:return /* Alpha */[15,concat_fmt(fmt1[1],fmt2)];
        case 16:return /* Theta */[16,concat_fmt(fmt1[1],fmt2)];
        case 17:
         return /* Formatting_lit */[17,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 18:
         return /* Formatting_gen */[18,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 19:return /* Reader */[19,concat_fmt(fmt1[1],fmt2)];
        case 20:
         return /* Scan_char_set */[20,
                 fmt1[1],
                 fmt1[2],
                 concat_fmt(fmt1[3],fmt2)];
        case 21:
         return /* Scan_get_counter */[21,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 22:return /* Scan_next_char */[22,concat_fmt(fmt1[1],fmt2)];
        case 23:
         return /* Ignored_param */[23,fmt1[1],concat_fmt(fmt1[2],fmt2)];
        case 24:
         return /* Custom */[24,fmt1[1],fmt1[2],concat_fmt(fmt1[3],fmt2)]
        }}
    };

module["exports"]=
{"concat_fmtty":concat_fmtty,"erase_rel":erase_rel,"concat_fmt":concat_fmt};

