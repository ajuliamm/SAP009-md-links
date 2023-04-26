const statsFunction = (arrayLinks) => {
    return new Promise((resolve,reject)=>{
    let hrefList = [];
    let broken = 0;
    arrayLinks.forEach(element => {
        hrefList.push(element.href)
        if(element.ok === false){
            broken++;
        };
    });

    const uniqueLinks = new Set(hrefList);

    const objStats = {
        total: hrefList.length,
        unique: uniqueLinks.size,
        broken: broken,
    }
    resolve(objStats)
    })


}
module.exports = statsFunction;