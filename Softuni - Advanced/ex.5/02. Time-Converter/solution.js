function attachEventsListeners() {


    let RATIOS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit){
        let inDays = value / RATIOS[unit];

        return{
            days: inDays,
            hours: inDays * RATIOS.hours,
            minutes: inDays * RATIOS.minutes,
            seconds: inDays * RATIOS.seconds,
        };
 
    }
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e){
        if(e.target.tagName === 'INPUT' && e.target.type === 'button'){
            let input = e.target.parentElement.querySelector('input[type = "text"]');

            let inputValue = Number(input.value);
            let time = convert(inputValue, input.id);

            days.value = time.days;
            hours.value = time.hours;
            min.value = time.minutes;
            sec.value = time.seconds;
        }
    }
}