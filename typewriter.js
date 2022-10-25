/*
In this activity, we are going to take a sentence and display it as an animation.
 */

const sentence = "hello there from lighthouse labs";

const typewriter = (str) => {
  let delay = 0;
  
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  
  setTimeout(() => {
    console.log('\n');
  }, delay);
  
};

typewriter(sentence);