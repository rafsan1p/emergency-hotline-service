let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
const transactionData = [];


const heartCountElement = document.getElementById('heart-count');
const coinCountElement = document.getElementById('coin-count');
const copyCountElement = document.getElementById('copy-count');
const historyContainer = document.getElementById('history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');


// Heart Icon Click Feature
const heartIcons = document.getElementsByClassName('heart-icon');
for(const icon of heartIcons){
    icon.addEventListener('click', function(){

        if(!this.classList.contains('fa-solid')){
            this.classList.remove('fa-regular', 'text-gray-400');
            this.classList.add('fa-solid', 'text-red-500');
            
            heartCount++;
            heartCountElement.innerText = heartCount;
        } 
        else{
            this.classList.remove('fa-solid', 'text-red-500');
            this.classList.add('fa-regular', 'text-gray-400');
            
            heartCount--;
            heartCountElement.innerText = heartCount;
        }
    });
}


// Copy Button Feature
const copyButtons = document.getElementsByClassName('copy-btn');
for(const btn of copyButtons){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        
        const number = this.getAttribute('data-number');
        
        navigator.clipboard.writeText(number).then(() => {

            alert(`হটলাইন নম্বর ${number} কপি করা হয়েছে!`);
            
            copyCount++;
            copyCountElement.innerText = copyCount;
        });
    });
}
