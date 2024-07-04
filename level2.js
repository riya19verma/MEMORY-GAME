let cls = document.querySelectorAll(".cls");
let grid = document.querySelector(".grid");
let scoreboard = document.querySelector("#score");
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.width = "600px";
let i = 0;
let prev;
console.dir(grid);
let score = 4;
let len = 8;
let arr = ["apple","banana","cherry","grape","apple","banana","cherry","grape"];
function click (curr)
{
    i++;
    if(curr.id == "")
    {
        let index = Math.floor(Math.random() * len);
        curr.id = arr[index];
        curr.firstChild.alt = toString(arr[index]);
        arr.splice(index,1);
        len --;
    }
    curr.firstChild.src = curr.id+".jpg";
    if(i == 1)
    {
        prev = curr;
        console.dir(prev)
        console.log(i);
    }
    else if(i == 2 && prev.id == curr.id && prev != curr)
    {
        console.log(prev);
        setTimeout(() => 
        {
            curr.firstChild.src = " ";
            prev.firstChild.src = " ";
            curr.innerHTML = "DONE 😊";
            prev.innerHTML = "DONE 😊";
            i = 0;
            score = score + 2;
            scoreboard.innerHTML = `Score : ${score}`;
        }, 500);
    }   
    else if(i == 2 && prev.id != curr.id && prev != curr)
    {
        console.log(prev);
        setTimeout(() => 
        {
            curr.firstChild.src = "CLICK ME.JPG";
            prev.firstChild.src = "CLICK ME.JPG";
            i = 0;
        }, 500);
    }
    else if(i == 2 && prev == curr)
    {
        i = 1;
    }
}

cls[0].onclick = () => click(cls[0]);
cls[1].onclick = () => click(cls[1]);
cls[2].onclick = () => click(cls[2]);
cls[3].onclick = () => click(cls[3]);
cls[4].onclick = () => click(cls[4]);
cls[5].onclick = () => click(cls[5]);
cls[6].onclick = () => click(cls[6]);
cls[7].onclick = () => click(cls[7]);

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Initialize timer
  let seconds = 30;
  
  // Update timer every second
  setInterval(() => {
    seconds--;
    if(score == 12)
    {
        while(grid.firstChild)
            grid.removeChild(grid.firstChild)
        seconds = 0;
        grid.innerHTML = `CONGRATULATIONS 🥳 Your Score : ${score}`;
        grid.style.fontSize = "50px";
        grid.style.textAlign = "center";
        grid.style.alignItems = "center";
        grid.style.backgroundColor = "green";
        grid.style.color = "white";
        grid.style.display = "flex";
        grid.style.width = "100%";
        let anc = document.querySelector("a");
        if(anc != null)
        {body.removeChild(anc);}
        let anchor = document.createElement("a");
        anchor.setAttribute('href',"level3.html");
        anchor.setAttribute('id',"nextLevel");
        anchor.textContent = "Next Level";
        document.body.appendChild(anchor);
    }
    else if (seconds <= 0) {
        while(grid.firstChild)
            grid.removeChild(grid.firstChild)
        seconds = 0;
        grid.innerHTML = `GAME OVER 😞 Your Score : ${score}
        (reload the website to replay)`;
        grid.style.fontSize = "50px";
        grid.style.textAlign = "center";
        grid.style.alignItems = "center";
        grid.style.backgroundColor = "red";
        grid.style.color = "white";
        grid.style.display = "flex";
        grid.style.width = "100%";
    }
    else
        {
            document.getElementById('timer').textContent = formatTime(seconds);}
  }, 1000);