// Report 9 
const moment = modules.moment;
const data = req.body

const startOfMonth = moment(data.month, 'M').startOf('month');
const endOfMonth = moment(data.month, 'M').endOf('month');

const startDate = startOfMonth.format('MM/DD/YY');
const endDate = endOfMonth.format('MM/DD/YY');

console.log(startDate); // Output: 2024-12-01
console.log(endDate); // Output: 2024-12-31

const currentMonth = moment(data.month, 'M/D/YY').format('M');

// console.log(currentMonth)

const FlightsAirlines = await entities.daily_otp.createQueryBuilder("alias")
    .select([
        'FlightDate',
        'FlightId',
        'FlightNumber',
        'Airport',
        'AOC',
        'Origin',
        'Destination',
        'STD',
        'EstimatedTimeDeparture',
        'ActualTimeDeparture',
        'EstimatedTimeOfArrival',
        'ActualTimeofArrival',
        'AdultPax',
        'InfantPax',
        'TotalPax',
        `(CASE WHEN IsDelayedDeparture = 1 THEN 'true' ELSE 'false' END) AS IsDelayedDeparture`,
         `(CASE WHEN IsDelayedArrival = 1 THEN 'true' ELSE 'false' END) AS IsDelayedArrival`,
         `(CASE WHEN IsCancelledDeparture = 1 THEN 'true' ELSE 'false' END) AS IsCancelledDeparture`,
         `(CASE WHEN IsCancelledArrival = 1 THEN 'true' ELSE 'false' END) AS IsCancelledArrival`,
         `(CASE WHEN IsOTPDeparture = 1 THEN 'true' ELSE 'false' END) AS IsOTPDeparture`,
        `(CASE WHEN IsOTPArrival = 1 THEN 'true' ELSE 'false' END) AS IsOTPArrival`
    ])
    .addSelect(currentMonth,'currentMonth')
    .where("isDeleted = :isDeleted", { isDeleted: 0 })
   .andWhere("FlightDate BETWEEN :startDate AND :endDate", {
        startDate: startDate,
        endDate: endDate,
    })
    .getRawMany();

    result = FlightsAirlines

console.log(FlightsAirlines);




// const moment = modules.moment;

// const data = '12/4/24';
// const currentMonth = moment(data, 'M/D/YY').format('M');

// const FlightsAirlines = await entities.daily_otp.createQueryBuilder("alias")
//     .select([
//         'FlightDate',
//         'FlightId',
//         'FlightNumber',
//         'Airport',
//         'AOC',
//         'Origin',
//         'Destination',
//         'STD',
//         'EstimatedTimeDeparture',
//         'ActualTimeDeparture',
//         'EstimatedTimeOfArrival',
//         'ActualTimeofArrival',
//         'AdultPax',
//         'InfantPax',
//         'TotalPax',
//         'IsDelayedDeparture',
//         'IsDelayedArrival',
//         'IsCancelledDeparture',
//         'IsOTPDeparture',
//         'OTPDeparture',
//         'IsOTPArrival',
//         'OTPArrival'
//     ])
//     .where("isDeleted = :isDeleted", { isDeleted: 0 })
//     .andWhere("FlightDate = :currentMonth", { currentMonth: currentMonth }) // Filter for December
//     .getRawMany();

// console.log(FlightsAirlines);





// const moment = modules.moment;

// const FlightsAirlines = await entities.daily_otp.createQueryBuilder("alias")
//     .select([
//         'FlightDate',
//         'FlightId',
//         'FlightNumber',
//         'Airport',
//         'AOC',
//         'Origin',
//         'Destination',
//         'STD',
//         'EstimatedTimeDeparture',
//         'ActualTimeDeparture',
//         'EstimatedTimeOfArrival',
//         'ActualTimeofArrival',
//         'AdultPax',
//         'InfantPax',
//         'TotalPax',
//         'IsDelayedDeparture',
//         'IsDelayedArrival',
//         'IsCancelledDeparture',
//         'IsOTPDeparture',
//         'OTPDeparture',
//         'IsOTPArrival',
//         'OTPArrival'
//     ])
//     .where("isDeleted = :isDeleted", { isDeleted: 0 })
//     .andWhere(new Raw((qb) => {
//         const formattedDate = moment('12/4/24', 'MM/DD/YY').format('YYYY-MM-DD');
//         qb.where("FlightDate = :currentMonth", { currentMonth: formattedDate });
//     }))
//     .getRawMany();

// console.log(FlightsAirlines);


