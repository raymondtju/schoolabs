interface TimeLeft {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
}

export function CountDown(time: string) {
   let difference = +new Date(time) - +new Date();

   let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   };
   
   if (difference > 0) {
      timeLeft = {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
         minutes: Math.floor((difference / 1000 / 60) % 60),
         seconds: Math.floor((difference / 1000) % 60)
      };
   }
   return timeLeft;
}
