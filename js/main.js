let status = false;


let toggleNav = function() {
    let getMenuList = document.querySelector(".menu-list");
    let getMenuListUl = document.querySelector(".menu-list ul");
    let getMenuListUlDiv = document.querySelector(".menu-list ul div");
    let close = document.querySelector(".menu-close");
    let open = document.querySelector(".menu-open");

    if (status == false){
        open.style.display = "none";
        close.style.display = "block";

        getMenuList.style.visibility = "visible";
        getMenuListUl.style.visibility = "visible";

        getMenuListUl.style.height = "70vh";
        getMenuListUl.style.width = "60%";

        getMenuList.style.opacity = 1;
        getMenuListUl.style.opacity = 1;
        

        status = true;
    }
    else{   
        open.style.display = "block";
        close.style.display = "none";

        getMenuList.style.visibility = "hidden";
        getMenuListUl.style.visibility = "hidden";

        getMenuListUl.style.height = "0";
        getMenuListUl.style.width = "0";

        getMenuList.style.opacity = 0;
        getMenuListUl.style.opacity = 0;

        status = false;
    }
}
