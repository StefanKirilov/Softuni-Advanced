class Movie{
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfits = 0;
        this.totalTickets = 0;
    }
    newScreening(date, hall, description){
        if(this.screenings.length === 0){
            this.screenings.push({date, hall, description});
            return `New screening of ${this.movieName} is added.`;
        }
        else{
        for (const screen of this.screenings) {
            if (screen.date === date && screen.hall === hall){
                throw new Error (`Sorry, ${hall} hall is not available on ${date}`)
            }
            else{
                this.screenings.push({date, hall, description});
                return `New screening of ${this.movieName} is added.`;
            }
        }
    }
  }
  endScreening(date, hall, soldTickets){
    for (const screen of this.screenings) {
        if (screen.date === date && screen.hall === hall){
            let currentProfit = soldTickets * this.ticketPrice;
            this.totalProfits += currentProfit;
            this.totalTickets += soldTickets;
            let index = this.screenings.indexOf(screen);
            this.screenings.splice(index, 1);

            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
        }
        else{
            throw new Error (`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
    }
  }
  toString(){
    let result = [`${this.movieName} full information:`];
    result.push(`Total profit: ${this.totalProfits}$`);
    result.push(`Sold Tickets: ${this.totalTickets}`);
    if(this.screenings.length > 0){
        result.push("Remaining film screenings:");
        let sortedScreenings = this.screenings.sort((a,b) => a.hall.localeCompare(b.hall));
        for (const x of sortedScreenings) {
            result.push(`${x.hall} - ${x.date} - ${x.description}`);
        }
    }
    else{
        result.push("No more screenings!");
    }
return result.join('\n');
  }
}


