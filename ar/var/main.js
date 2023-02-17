/**
 * Created by Alan Wong 2023/2 
 * 
 */

console.log("main js run");

let searchParams = new URLSearchParams(window.location.search);
if(searchParams.has('id')){
    let id = searchParams.get('id');
    console.log("ID: \(id)");
}
