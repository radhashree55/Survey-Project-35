class Question {
    constructor() {}
    
    display(){
        var question1 = createElement('h2');
        question1.html("1. Do you think we need to have free lunch in schools for kids who are very poor?"); question1.position(20,70);
        var ans1 = createButton("YES");  ans1.position(100,120);
        var ans2 = createButton("NO");   ans2.position(150,120);

        ans1.mousePressed(()=>{
            question1.hide(); ans1.hide(); ans2.hide();

            var question2 = createElement('h2');
            question2.html("2. Would you aid us by creating posters and posting on social media?"); question2.position(20,70);
            var ans3 = createButton("YES");  ans3.position(100,120);
            var ans4 = createButton("NO");   ans4.position(150,120);

        ans3.mousePressed(()=>{  
                question2.hide(); ans3.hide(); ans4.hide(); 

                var question3 = createElement('h2');
                question3.html("3. Will you help by writing to the district collector?");  question3.position(20,70);
                var ans5 = createButton("YES");  ans5.position(100,120);
                var ans6 = createButton("NO");   ans6.position(150,120);

        ans5.mousePressed(()=>{
               question3.hide(); ans5.hide(); ans6.hide();  

                var question4 = createElement('h2');
                question4.html("4. Would you be willing to contribute a small amount for this cause every month?"); question4.position(20,70);
                var ans7 = createButton("YES");  ans7.position(100,120);
                var ans8 = createButton("NO");   ans8.position(150,120);

        ans7.mousePressed(()=>{
                question4.hide(); ans7.hide(); ans8.hide(); 

                var question5 = createElement('h2');
                question5.html("5. Are you willing to pay Rs.500 every month for this cause?"); question5.position(20,70);
                var ans9 = createButton("YES");  ans9.position(100,120);
                var ans10 = createButton("NO");   ans10.position(150,120);

        ans9.mousePressed(()=>{
                question5.hide(); ans9.hide(); ans10.hide();

                var button = createButton("Submit");
                button.position(200,150);

                button.mousePressed(function(){
                    button.hide();

                    var greeting = createElement('h1');
                    greeting.html("Thank you for your support !!");
                    greeting.position(200,200);
                        })
                    })
                })      
            })
        }) 
    })
    ans2.mousePressed(()=>{
        question1.hide(); ans1.hide(); ans2.hide();

        var button = createButton("Submit");
        button.position(200,150);

        button.mousePressed(function(){
        button.hide();

        var greeting = createElement('h1');
        greeting.html("Thank you for your time !!");
        greeting.position(200,200);
        })
    })
    ans4.mousePressed(()=>{
        question2.hide(); ans3.hide(); ans4.hide(); 

        var question3 = createElement('h2');
        question3.html("3. Will you help by writing to the district collector?");  question3.position(20,70);
        var ans5 = createButton("YES");  ans5.position(100,120);
        var ans6 = createButton("NO");   ans6.position(150,120);

        ans6.mousePressed(()=>{
            question3.hide(); ans5.hide(); ans6.hide();  

            var question4 = createElement('h2');
            question4.html("4. Would you be willing to contribute a small amount for this cause every month?"); question4.position(20,70);
            var ans7 = createButton("YES");  ans7.position(100,120);
            var ans8 = createButton("NO");   ans8.position(150,120);
       
        ans8.mousePressed(()=>{
            var button = createButton("Submit");
        button.position(200,150);

        button.mousePressed(function(){
        button.hide();

        var greeting = createElement('h1');
        greeting.html("Thank you for your time !!");
        greeting.position(200,200);
     })
    })
   })
  })
 }
}
