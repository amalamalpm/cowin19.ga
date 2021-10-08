/*
  Code for filter offers from wish.com
*/
function(){
    window.scrollTo(0,document.body.scrollHeight);
    divs = document.querySelectorAll(".FeedTile__UrgencyInventoryBySpec-sc-1jtmq9g-5"); // all elements
    limited = [];
    rowIndex = [];
    for(i = 0 ; i< divs.length;i++ ) {
        if("Limited Quantity Deal"===divs[i].innerText) {
            rowIndex.push(
                divs[i].parentElement.parentElement.parentElement .parentElement.parentElement.getAttribute("data-index")
            );
            limited.push(divs[i]);
        }
    }
    divs = document.querySelectorAll("div[data-index]");
    for (i = 0 ; i< divs.length;i++ ) {
        dataIndex = divs[i].getAttribute("data-index");
        arr_index = rowIndex.indexOf(dataIndex);
        if (arr_index === -1) {
            divs[i].setAttribute("style","display:none");
        } else {
            q = limited[arr_index].parentElement.parentElement.parentElement.parentElement.childNodes
            for(j = 0 ; j< q.length;j++ ) {
                if (q[j].innerText.indexOf("Limited Quantity Deal") !== -1) {
                    console.log(j +"==YES===>"+q[j])
                } else {
                    q[i].setAttribute("style","display:none");
                    console.log(j +"===NO===>"+q[j]) 
                }
            }
        }
    }

    if(document.querySelectorAll("div[role=progressbar]")[0].hidden == "true") {
        console.log("loaded now");
    }
}()
