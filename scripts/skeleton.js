//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('/StaticContent/nav.html'));
    console.log($('#footerPlaceholder').load('/StaticContent/footer.html'));
    console.log($('#addPlaceholder').load('/StaticContent/add.html'));
}
loadSkeleton();  //invoke the function