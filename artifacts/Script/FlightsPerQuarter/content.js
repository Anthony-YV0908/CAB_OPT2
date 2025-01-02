// Report 10 

const moment = modules.moment;

// const data = 4 // User input for the quarter

const data = req.body

log.info(data.quarter)

// const startMonth = moment().month((data - 1) * 3).startOf('month').format('MM');
// const endMonth = moment().month(data * 3 - 1).endOf('month').format('MM');

const year = moment().year(); // Get current year dynamically
const startDate = moment().year(year).month((data.quarter - 1) * 3).startOf('month').format('MM/DD/YYYY');
const endDate = moment().year(year).month(data.quarter * 3 - 1).endOf('month').format('MM/DD/YYYY');

console.log('startDate', startDate); // Start of the quarter
console.log('endDate', endDate);     // End of the quarter


// console.log('start', startMonth);
// console.log('end', endMonth);
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
    .where("isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("FlightDate BETWEEN :startDate AND :endDate", {
        startDate: startDate,
        endDate: endDate
    })
    .getRawMany();

    result = FlightsAirlines

console.log(FlightsAirlines);


