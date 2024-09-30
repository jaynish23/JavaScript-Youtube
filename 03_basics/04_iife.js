// Immediate Invoke Function Expression (IIFE)

// global scope ke pollution se problem hoti hai kai bar aapde e pollution ne hatava mate iife no use karyo che 

(function chai() {
    // this is called named IIFE
    console.log(`DB connected`);
})();

(
    () =>{
        console.log(`chai aur code`);
        
    }
)();

(
    (name) =>{
        console.log(`chai aur code ${name}`);
        
    }
)("jaynish");