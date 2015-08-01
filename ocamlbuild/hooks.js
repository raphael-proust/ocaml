var hooks=[0,function(prim){return 0;}];

var setup_hooks=function(f){return hooks[1]=f,0;};

var call_hook=function(m){return hooks[1](m);};


module["exports"]={"setup_hooks":setup_hooks,"call_hook":call_hook};

