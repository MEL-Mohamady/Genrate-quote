var qoutes = [
    {
        qoute :"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        speaker : "- Marilyn Monroe -"

    }
    ,
    {
        qoute :"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        speaker : "- Albert Einstein -"

    }

    ,
    {
        qoute :"A room without books is like a body without a sou.",
        speaker : "- Marcus Tullius Cicero -"

    }
    ,
    {
        qoute :"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        speaker : "- William W. Purkey -"

    }


    ,
    {
        qoute :"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        speaker : "- Maya Angelou -"

    }

    ,
    {
        qoute :"Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
        speaker : "- John Green -"

    }
    ,
    {
        qoute :"Life isn't about finding yourself. Life is about creating yourself.",
        speaker : "-  George Bernard Shaw -"

    }

    ,
    {
        qoute :"If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
        speaker : "- Oscar Wilde -"

    }
    ,
    {
        qoute :"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
        speaker : "- Bob Marley -"

    }

    ,
    {
        qoute :"The unhappiest people in this world, are those who care the most about what other people think.",
        speaker : "-  C. JoyBell C -"

    }

    
 ]
 


var quoteElement = document.getElementById("quote");
var speakerElement = document.getElementById("speaker");

function randomQuote() {
    var randomQuo = Math.floor(Math.random() * qoutes.length);
        
    quoteElement.innerHTML = qoutes[randomQuo].qoute;
    speakerElement.innerHTML = qoutes[randomQuo].speaker;
}





















