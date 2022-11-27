//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('/html/StaticContent/nav.html'));
    console.log($('#footerPlaceholder').load('/html/StaticContent/footer.html'));
    console.log($('#addPlaceholder').load('/html/StaticContent/add.html'));
}
loadSkeleton();  //invoke the function