function roadRadar(speed , area){
    let limit = 0;

    switch(area){
        case "motorway":
            limit = 130;
            if(speed <= limit){
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            else{
                let difference = speed - limit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                }
                else if (difference > 20 && difference <= 40){
                    status = 'excessive speeding';

                }
                else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
                );
            }

        break;
        case "interstate":
            limit = 90;
            if(speed <= limit){
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            else{
                let difference = speed - limit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                }
                else if (difference > 20 && difference <= 40){
                    status = 'excessive speeding';

                }
                else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
                );
            }

        break;
        case "city":
            limit = 50;
            if(speed <= limit){
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            else{
                let difference = speed - limit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                }
                else if (difference > 20 && difference <= 40){
                    status = 'excessive speeding';

                }
                else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
                );
            }

        break;
        case "residential":
            limit = 20;
            if(speed <= limit){
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            else{
                let difference = speed - limit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                }
                else if (difference > 20 && difference <= 40){
                    status = 'excessive speeding';

                }
                else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
                );
            }

        break;
    }

}
roadRadar(21, 'residential');