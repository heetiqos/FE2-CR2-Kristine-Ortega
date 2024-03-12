document.getElementById("banner").style.backgroundImage = "url('images/header1.jpg')";

document.body.style.backgroundImage = "url('images/bg_texture.jpg')";

let tasks = [];
class Task {
    taskName;
    image;
    description;
    priority;
    importance;
    deadline;
    constructor(taskName, image, description, priority, importance, deadline){
        this.taskName = taskName;
        this.image = image; 
        this.description = description;
        this.priority = priority;
        this.importance = importance;
        this.deadline = deadline;
        tasks.push(this);
    }
    printAllInfo(){
        return `
        <div>
            <div class="card">
                <div class="importanceLine">
                    <div class="importance fw-bold" style="width: fit-content">${this.importance}</div>
                    <div class="details">
                    <i class="fa fa-bookmark-o" style="font-size:18px"></i>
                    <i class="fa fa-ellipsis-v" style="font-size:18px"></i>
                    </div>
                </div>
                <img src="${this.image}" class="card-img-top" alt="image" style="margin-top:5px;">
                <div class="card-body">
                    <h5 class="card-title">${this.taskName}</h5>
                    <p class="card-text description">${this.description}</p>
                    <hr>
                    <div class="card-text priority">
                        <p id="level"><i style="font-size:16px" class="fa">&#xf071;</i>Priority level: <span class="priority2 bg-warning text-black rounded-circle" style="padding: 5px;">${this.priority}</span></p>
                        <div><button class="btn btn-primary" style="background-color: white; border-color: red; color: red">Decrease</button>
                        <button class="btn btn-primary increase" style="background-color: white; border-color: green; color: green">Increase</button>
                        </div>
                    </div>
                    <p class="card-text"><i class="fa fa-calendar" style="font-size:18px"></i>Deadline: ${this.deadline}</p>
                    <hr>
                    <div class="finish">
                        <button class="btn btn-primary" style="background-color: red; border-style: none;"><i class="fa fa-trash" style="font-size:18px; color: white"></i> Delete </button>
                        <button class="btn btn-primary" style="background-color: green; border-style: none;"><i class="fa fa-check" style="font-size:18px; color:white"></i> Done </button>
                    </div>
                </div>
            </div>
        </div>
        `
        };
}
let initialImportance = `<div class="bg-success text-black rounded">low importance</div>`;
let task1 = new Task("Cleaning", "images/cleaning.jpg", "We clean our beautiful home together.Deep cleaning is a must on weekend.", 0,initialImportance,"24.03.2024");
let task2 = new Task("Groceries", "images/groceries.jpg", "We buy food to nourish ourselves for a healthy life. Should do groceries in the morning.", 0,initialImportance,"12.03.2024");
let task3 = new Task("Learning", "images/learning.jpg", "We learn the code review for a better job in the future. Practice is important!", 0,initialImportance,"13.03.2024");
let task4 = new Task("Kindergarten Work", "images/kigawork.jpg", "Plan for children activities and do the documentations. Planning a project as well.", 0,initialImportance,"20.03.2024");
let task5 = new Task("Laundry", "images/laundry.jpg", "Start to do laundry early morning until afternoon. Wash also the bedsheet and duvet.", 0,initialImportance,"16.03.2024");
let task6 = new Task("Meal Prep", "images/mealprep.jpg", "Preparing the meal for the whole week. It should be nutritious and tasty.", 0,initialImportance,"18.03.2024");
let task7 = new Task("Calling the Parents", "images/parentscall.jpg", "Make sure to talk to the parents to check them and what's going on Philippines.", 0,initialImportance,"21.03.2024");
let task8 = new Task("Time Together", "images/timetogether.jpg", "It is important to have a quality time together. No gadgets allowed!", 0,initialImportance,"15.03.2024");
let task9 = new Task("Walking", "images/walking.jpg", "To be healthier and flexible, walking at night or morning is a good option.", 0,initialImportance,"16.03.2024")
function createHTML() {
    document.getElementById("result").innerHTML = "";
    tasks.forEach(element => {
        document.getElementById("result").innerHTML += element.printAllInfo() ;
    });
    increase();
    importance();
}
createHTML();
function increase() {
    let increaseButtons = document.querySelectorAll(".increase");
    increaseButtons.forEach((button, i) => {
        button.addEventListener("click", function () {
            if (tasks[i].priority != 5) {
                tasks[i].priority++;
                importance();
                document.querySelectorAll(".priority2")[i].innerHTML = tasks[i].priority;
            }
        });
    });
}
function sort(){
    let sortButton = document.getElementById("sort");
    sortButton.addEventListener("click", function () {
        tasks.sort((a,b) => b.priority - a.priority);
        createHTML();
    });
}
sort();
/*
Between 0 – 1 -> Green = (success) , Text -> "low importance"
Between 2 – 3 -> Yellow = (warning) , Text -> "moderate importance"
Between 4 – 5 -> Red = (danger) , Text -> "high importance"
The colors must change when clicking on the "Importance" button.
Make sure that every “Task” has an initial value 0 = Green.
*/
function importance() {
    tasks.forEach((element,i) => {
        if (tasks[i].priority < 2) {
            level = `<div class="bg-success text-black rounded" style="padding: 0 10px;">low importance</div>`;
            document.querySelectorAll(".importance")[i].innerHTML = level;
        } else if (tasks[i].priority < 4) {
            level = `<div class="bg-warning text-black rounded" style="padding: 0 10px;">moderate importance</div>`;
            document.querySelectorAll(".importance")[i].innerHTML = level;
        }
        else{
            level = `<div class="bg-danger text-black rounded" style="padding: 0 10px;">high importance</div>`;
            document.querySelectorAll(".importance")[i].innerHTML = level;
        }
    });
}























