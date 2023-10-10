export default function capitalizeFirstLetter(word: string) {
   // List of words to keep in lowercase
   const lowercaseWords = ["and", "or"];

   // Split the slug into words
   const words = word.split('-');

   // Capitalize the first letter of each word
   const capitalizedWords = words.map((w, index) => {
      // Convert to lowercase if it's not in the lowercaseWords list
      if (index === 0 || !lowercaseWords.includes(w.toLowerCase())) {
         return w.charAt(0).toUpperCase() + w.slice(1);
      } else {
         return w;
      }
   });

   // Join the words back together
   return capitalizedWords.join(' ');
}