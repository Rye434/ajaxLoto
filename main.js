document.getElementById("btnSend").addEventListener("click", getData);
let pages = null;
pages=document.querySelectorAll(".page");
function getData(ev){
    let root = "https://griffis.edumedia.ca/mad9014/lotto/nums.php";
    let digits = document.querySelector("#digits").value;
    let max = document.querySelector("#max").value;
    let data = new FormData();
    data.append ("digits",digits);
    data.append ("max",max);
    let req = new Request(root, {method:"Post", body:data});
    console.log(req)
      fetch(req).then(function(response){
    return response.json();    
    }).then(function(data){
        data.numbers.forEach(function(item){
            let list= document.createElement("li");
            list.textContent=item;
            console.log(list);
            document.getElementById("num_list").appendChild(list);
            
        }) 
    })
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
};
    document.getElementById("btnBack").addEventListener("click",startAgain)
    function startAgain() {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
        document.getElementById("num_list").innerHTML=" "
    }