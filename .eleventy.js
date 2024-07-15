module.exports = config => {
   // Add passthrough copy for img and css directories
   config.addPassthroughCopy("src/img");
   config.addPassthroughCopy("src/css");

   return {
     dir: {
       input: 'src',
       output: 'public'
     }
   }
}
