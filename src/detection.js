class KeyInputCounter{
    
    constructor(){
        this.keyInfoDict = new Map();
        this.rangeMs = 1000 * 5;
        this.threshold = 1000;
    }

    serialize(){ 
        let json = {
        }
        for(let [k, v] of this.keyInfoDict){
            json[k] = v;
        }
        return JSON.stringify(json);
    }

    deserialize(str){
        const json = JSON.parse(str);
        for(let item in json){
            this.keyInfoDict.set(item, json[item]);
        }
    }

    pushKey(){

        //const now = new Date(2018, 9, 1, 17, 10, 2);
        const now = Date.now();
        const key = this._makeKey(now);

        if(this.keyInfoDict.size > this.threshold){

            const minMs = key - this.rangeMs;
            let newDict = new Map();

            for(let [k, v] of this.keyInfoDict){
                if(minMs <= k){
                    newDict.set(k, v);
                }
            }

            this.keyInfoDict = newDict;
        } 

        if(!this.keyInfoDict.has(key)){
            this.keyInfoDict.set(key, 1);
        }
        else{
            const old = this.keyInfoDict.get(key);
            this.keyInfoDict.set(key, old + 1);
        }
    }

    getCount(ms){
        
        const minMs = ms - this.rangeMs;

        let count = 0;

        for(let [k, v] of this.keyInfoDict){
            if(minMs <= k){
                count += v;
            }
        }
        
        return count;
    }

    _makeKey(ms){
        return ms - (ms % 1000);
    }
}

var counter = null;
var recentCount = null;

function updateData(){
    if (counter) {
        const now = Date.now();
        const count = counter.getCount(now);
        console.log(recentCount);
        if(count != recentCount) {
            recentCount = count;
            localStorage.setItem('recent_count', recentCount);
        }
    }
}
setInterval(updateData, 1000);

// 키 눌렀을 때 이벤트
function detectKeyDown(){

    if(counter == null){
        counter = new KeyInputCounter();
        let counterStr = localStorage.getItem('counter');
        if(counterStr != null) {
            counter.deserialize(counterStr);
        }
    }

    counter.pushKey();

    const now = Date.now();
    recentCount = counter.getCount(now);

    localStorage.setItem('counter', counter.serialize());
    localStorage.setItem('recent_count', recentCount);
}