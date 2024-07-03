let apple = document.querySelectorAll("#apple");
let banana = document.querySelectorAll("#banana");
let cherry = document.querySelectorAll("#cherry");
let grape = document.querySelectorAll("#grape");
let mango = document.querySelectorAll("#mango");
let pear = document.querySelectorAll("#pear");
let pineapple = document.querySelectorAll("#pineapple");
let watermelon = document.querySelectorAll("#watermelon");
let grid = document.querySelector(".grid");
let scoreboard = document.querySelector("#score");
let i = 0;
let prev = apple[0];
console.dir(grid);
let score = 0;

function click (curr,id)
{
    i++;//console.log(i);console.dir(apple[0].firstChild.src);
    curr.firstChild.src = id+".jpg";
    if(i == 1)
    {
        prev = curr;
        console.dir(prev)
        console.log(i);
    }
    else if(i == 2 && prev.id == id && prev != curr)
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
    else if(i == 2 && prev.id != id && prev != curr)
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
apple[0].onclick = () => click(apple[0],"apple");
apple[1].onclick = () => click(apple[1],"apple");
banana[0].onclick = () => click(banana[0],"banana");
banana[1].onclick = () => click(banana[1],"banana");
cherry[0].onclick = () => click(cherry[0],"cherry");
cherry[1].onclick = () => click(cherry[1],"cherry");
grape[0].onclick = () => click(grape[0],"grape");
grape[1].onclick = () => click(grape[1],"grape");
mango[0].onclick = () => click(mango[0],"mango");
mango[1].onclick = () => click(mango[1],"mango");
pear[0].onclick = () => click(pear[0],"pear");
pear[1].onclick = () => click(pear[1],"pear");
pineapple[0].onclick = () => click(pineapple[0],"pineapple");
pineapple[1].onclick = () => click(pineapple[1],"pineapple");
watermelon[0].onclick = () => click(watermelon[0],"watermelon");
watermelon[1].onclick = () => click(watermelon[1],"watermelon");

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
    if(score == 8)
    {
        while(grid.firstChild)
            grid.removeChild(grid.firstChild)
        seconds = 0;
        grid.innerHTML = `CONGRATULATIONS 🥳 Your Score : ${score}
        (reload the website to replay)`;
        grid.style.fontSize = "50px";
        grid.style.textAlign = "center";
        grid.style.alignItems = "center";
        grid.style.backgroundColor = "green";
        grid.style.color = "white";
        grid.style.display = "flex";
    }
    else if (seconds < 0) {
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
    }
    else
        {document.getElementById('timer').textContent = formatTime(seconds);}
  }, 1000);
