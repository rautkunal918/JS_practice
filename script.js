//document.write("Hello")
// console.log("Hello")
// let head = document.getElementById("heading")
// console.dir(head)
// console.dir(document.body.lastChild)
// console.dir(div)

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText)

// h2.innerText = h2.innerText + " From Apna Collage"

// let divs = document.querySelectorAll(".box")
// console.dir(divs)
//     // divs[0].innerText = "Unique Value one ";
//     // divs[1].innerText = "Unique Value two";
//     // divs[2].innerText = "unique Value three"

// let idx = 1;
// for (div of divs) {
//     div.innerText = `Unique Value of ${idx}`;
//     idx++;

// }

// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id)

// let namee = div.getAttribute("name")
// console.log(namee)

// let ra = document.querySelector("p");
// console.log(ra.setAttribute("class", "newclasss"))
//     // console.log(para.getAttribute("class"))

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclasss"))


// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me ";
// console.log(newbtn)

// let div = document.querySelector("div")
// div.append(newbtn)
// div.prepend(newbtn)
// div.before(newbtn)
// div.after(newbtn)


// let btn = document.createElement("button")
// btn.innerText = "Click me";

// btn.style.color = "white"
// btn.style.backgroundColor = "red"
// let l = document.querySelector("body")
// l.append(btn)

// let p = document.querySelector("p");

// let e = p.getAttribute("class")
// console.log(e)

// p.classList.add("newclass");

// let btn = document.querySelector("#b1");
// btn.onclick = (evt) => {
//     console.log("button was click")
//     let a = 25;
//     a++;
//     console.log(a);

//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
//     console.log(evt.target)


// };

// let d = document.querySelector("div")
// d.onmouseover = () => {
//     console.log("Mouse cursiol on div")
// };

// btn.addEventListener("click", () => {
//     console.log("Button was click");
// });

// btn.addEventListener("click", () => {
//     console.log("Button was click handler 2");
// });

let tgb = document.querySelector("#mode");
let cm = "light"; // dark

tgb.addEventListener("click", () => {
    if (cm == "light") {
        cm = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        cm = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(cm)
});