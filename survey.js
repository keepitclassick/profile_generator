const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const survey = () => {
  rl.question('What is your name or nickname? ', (name) => {
  // TODO: Log the answer in a database
    console.log(`Nice to meet you, ${name}!`);

    rl.question('What activity do you enjoy? ', (act) => {
    // TODO: Log the answer in a database
      console.log(`${act}? That sounds fun!`);
 
      rl.question('What music are you into? ', (music) => {
      // TODO: Log the answer in a database
        console.log(`I love me some ${music}!`);
 
        rl.question('What is your favourite mealtime? ', (mealtime) => {
        // TODO: Log the answer in a database
          console.log(`${mealtime}? There is no other option in my mind.`);
      
          rl.question('What is your favourite meal? ', (meal) => {
          // TODO: Log the answer in a database
            console.log(`${meal}? *drools*`);
     
            rl.question('What sport is your favourite?', (sport) => {
            // TODO: Log the answer in a database
              console.log(`${sport}? I'm not really a sports person, but you do you!`);
         
              rl.question('What are you amazing at?', (talent) => {
                // TODO: Log the answer in a database
                console.log(`Wow I wish I was good at ${talent}.`);
                console.log(`${name} loves ${act} while listening to ${music}. Sitting down to ${mealtime} with a plate full of ${meal} and the tv turned to the ${sport} game is the peak of relaxation. ${name}'s biggest talent is ${talent}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

survey();




        
