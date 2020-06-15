class Survey {
    constructor() {}
    
    getState() {
        var surveyStateRef = database.ref('surveyState');
        surveyStateRef.on("value",function(data){
            surveyState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            surveyState: state
        })
    }
    async start() {
        if(surveyState==0) {
            voter = new Voter();
            var voterCountRef = await database.ref('voterCount').once("value");
            if(voterCountRef.exists()){
                voterCount = voterCountRef.val();
                voter.getCount();
            }
            form = new Form();
            form.display();
        }
    }
}
