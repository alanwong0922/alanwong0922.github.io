
let searchParams = new URLSearchParams(window.location.search)
if(searchParams.has('id')){
    let id = searchParams.get('id');
    console.log("ID: \(id)");
}
