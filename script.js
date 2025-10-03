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

            alert(`✅ হটলাইন নম্বর ${number} কপি করা হয়েছে!`);
            
            copyCount++;
            copyCountElement.innerText = copyCount;
        });
    });
}


// Call Button Feature
const callButtons = document.getElementsByClassName('call-btn');
for(const btn of callButtons){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        
        const serviceName = this.getAttribute('data-name');
        const serviceNumber = this.getAttribute('data-number');
        
        if(coinCount < 20){
            alert('❌ দুঃখিত! কল করার জন্য পর্যাপ্ত কয়েন নেই। ন্যূনতম ২০টি কয়েন প্রয়োজন।');
            return;
        }
        
        alert(`📞 ${serviceName} (${serviceNumber}) এ কল করা হচ্ছে...`);
        
        coinCount -= 20;
        coinCountElement.innerText = coinCount;
        
        const currentTime = new Date().toLocaleTimeString();
        
        const data = {
            name: serviceName,
            number: serviceNumber,
            time: currentTime
        };
        
        transactionData.push(data);
        
        updateHistoryDisplay();
    });
}


// Function to update history display
function updateHistoryDisplay(){
    historyContainer.innerHTML = '';
    
    if(transactionData.length === 0){
        historyContainer.innerHTML = '<p class="text-gray-400 text-center py-8 text-lg">No calls yet</p>';
        return;
    }
    
    for(const data of transactionData){
        const historyDiv = document.createElement('div');
        historyDiv.className = 'bg-gray-50 p-3 rounded-lg border-l-4 border-green-500';
        historyDiv.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-semibold text-gray-800 text-lg md:text-sm">${data.name}</h3>
                    <p class="text-lg md:text-sm text-gray-600">${data.number}</p>
                </div>
                <span class="text-lg md:text-sm text-gray-800">${data.time}</span>
            </div>
        `;
        historyContainer.appendChild(historyDiv);
    }
}


// Clear History Button Feature
clearHistoryBtn.addEventListener('click', function(){
    transactionData.length = 0;
    
    updateHistoryDisplay();
    
    alert('🗑️ কল ইতিহাস মুছে ফেলা হয়েছে!');
});