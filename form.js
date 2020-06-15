class Form {
    constructor() {}
    
    display(){
        var title = createElement('h1');
        title.html("SURVEY");
        title.position(300,100);

        var input =createInput("                  NAME ");
        input.position(280,180);

        var button = createButton("Support");
        button.position(340,220);

        button.mousePressed(function(){
            title.hide();
            input.hide();
            button.hide();

            var name = input.value();
            voterCount +=1;
            voter.update(name);
            voter.updateCount(voterCount);

            var dear = createElement('h1');
            dear.html("Dear" + name);
            dear.position(30,10);

            question = new Question();
            question.display();
        }) 
    }
}