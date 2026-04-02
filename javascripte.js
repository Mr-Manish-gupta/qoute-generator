let quotes = [
     {text: " Stay hungry , stay foolish", author: " Stay Jobs"},
     {text : " Dream big and dare to fail", author : " Norman Vaghan"},
     {text : " Do somthing today for your future", author : " Unknown"},
     {text : " Succes is not final, failure is not fatal", author : " Winston Churchill"},
     {text : " Push yourself, becouse no one esle is going to do it for you. : ", wuthor:  " Unkonwn" },
     {text: "  Success doesn't come from what you do occasionally, it comes from what you do consistently  : ", author: " Mario Forleo"},
     {text: "  Your future is created by what you do today, not tomorrow : " , author: "  Rabert Kiyosaki"}
];

function newQoute(){
    let randomIndex = Math.floor(Math.random()* quotes.length);


    document.getElementById("qoute").innerText =  quotes[randomIndex].text;
    document.getElementById("author").innerText = '-' + quotes[randomIndex].author};


    document.getElementById("qoute").classList.add("fade");

    

    
    function copyQoute(){
        let text = document.getElementById("qoute").innerText;
        window.open('https://wa.me/?text=${text}');
    }

    qoute.classList.remove("fade");
    void qoute.offsetWidth;
    qoute.classList.add("fade");    


    let  colors = ["#6a11cb", "#ff6a00", "#00c6ff" , "#ff416c"];
        document.body.style.background = colors[Math.floor(Math.random()*colors.length)]
newQoute();