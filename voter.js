class Voter {
    constructor() {}

    getCount() {
        var voterCountRef = database.ref('voterCount');
        voterCountRef.on("value",(data)=>{
            voterCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            voterCount: count
        });
    }
    update() {
        var voterIndex = "voter" + voterCount;
        database.ref(voterIndex).set({
            name:name
        });
    }
}
