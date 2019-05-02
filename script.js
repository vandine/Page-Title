function makeHide(selector){
    var exec = "$('."+selector+"').hide();";
    return exec;
}

function makeShow(selector){
    var exec = "$('."+selector+"').show();";
    return exec;
}

function hide(selector){
    var F=new Function(makeHide(selector));
    return(F());
}

function show(selector){
    var F=new Function(makeShow(selector));
    return(F());
}

function click(selector, func){
    var exec = "$('."+selector+"').click(function(){"
    + func+ "});";
    var F=new Function(exec);
    return(F());   
}

click('hide', makeHide('pic'));
click('show', makeShow('pic'));


    







