const printDate =function(){
    const d =new Date()
    console.log("Current Date:"+d.getDate())
}
const printMonth =function(){
    const d=new Date()
    console.log("Current Month:"+d.getMonth())
}
const getBatchInfo =function(){
    let bname ="plutonium"
    let bdetail="w3d5"

    console.log(bname +","+bdetail+","+"the topic for today is nodejs module system")
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo