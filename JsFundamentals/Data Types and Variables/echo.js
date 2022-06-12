function echo(dataType){
    let type = typeof(dataType)
    console.log(type)
    if(type === "number" || type === "string"){
    console.log(dataType)
    }else{
        console.log("Parameter is not suitable for printing");
    }
}
echo(18)