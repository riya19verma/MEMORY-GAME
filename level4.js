let cls = document.querySelectorAll(".cls");
let grid = document.querySelector(".grid");
let scoreboard = document.querySelector("#score");
grid.style.gridTemplateColumns = "repeat(8, 1fr)";
let i = 0;
let prev;
console.dir(cls[0]);
let score = 24;
let len = 16;
let arr = ["apple","banana","cherry","grape","mango","pear","pineapple","watermelon","apple","banana","cherry","grape","mango","pear","pineapple","watermelon"];
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
            score++;
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
cls[8].onclick = () => click(cls[8]);
cls[9].onclick = () => click(cls[9]);
cls[10].onclick = () => click(cls[10]);
cls[11].onclick = () => click(cls[11]);
cls[12].onclick = () => click(cls[12]);
cls[13].onclick = () => click(cls[13]);
cls[14].onclick = () => click(cls[14]);
cls[15].onclick = () => click(cls[15]);

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Initialize timer
  let seconds = 60;
  
  // Update timer every second
  setInterval(() => {
    seconds--;
    if(score == 32)
    {
        while(grid.firstChild)
            grid.removeChild(grid.firstChild)
        seconds = 0;
        grid.innerHTML = `CONGRATULATIONS 🥳 Your Score : ${score}  YOU WON`;
        grid.style.fontSize = "50px";
        grid.style.textAlign = "center";
        grid.style.alignItems = "center";
        grid.style.backgroundColor = "green";
        grid.style.color = "white";
        grid.style.display = "flex";
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
        {document.getElementById('timer').textContent = formatTime(seconds);}
  }, 1000);