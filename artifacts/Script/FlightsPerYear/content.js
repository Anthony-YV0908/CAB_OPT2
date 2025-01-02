// Report 12
const moment = modules.moment;
const data = req.body


const currentYear = moment('2024', 'M/D/YY').format('YYYY');


// const startOfMonth = moment(data.month, 'M').startOf('month');
// const endOfMonth = moment(data.month, 'M').endOf('month');

const startDate = moment(`01/01/24`, 'MM/DD/YYYY').format('MM/DD/YY');
const endDate = moment(`12/31/24`, 'MM/DD/YYYY').format('MM/DD/YY');

const FlightsAirlines = await entities.daily_otp.createQueryBuilder("alias")
  .select([
        'alias.FlightDate AS FlightDate',
        'alias.FlightId AS FlightId',
        'alias.FlightNumber AS FlightNumber',
        'alias.Airport AS Airport',
        'alias.AOC AS AOC',
        'alias.Origin AS Origin',
        'alias.Destination AS Destination',
        'alias.STD AS STD',
        'alias.EstimatedTimeDeparture AS EstimatedTimeDeparture',
        'alias.ActualTimeDeparture AS ActualTimeDeparture',
        'alias.EstimatedTimeOfArrival AS EstimatedTimeOfArrival',
        'alias.ActualTimeofArrival AS ActualTimeofArrival',
        'alias.AdultPax AS AdultPax',
        'alias.InfantPax AS InfantPax',
        'alias.TotalPax AS TotalPax',
        `CASE WHEN alias.IsDelayedDeparture = 1 THEN 'true' ELSE 'false' END AS IsDelayedDeparture`,
        `CASE WHEN alias.IsDelayedArrival = 1 THEN 'true' ELSE 'false' END AS IsDelayedArrival`,
        `CASE WHEN alias.IsCancelledDeparture = 1 THEN 'true' ELSE 'false' END AS IsCancelledDeparture`,
        `CASE WHEN alias.IsCancelledArrival = 1 THEN 'true' ELSE 'false' END AS IsCancelledArrival`,
        `CASE WHEN alias.IsOTPDeparture = 1 THEN 'true' ELSE 'false' END AS IsOTPDeparture`,
        `CASE WHEN alias.IsOTPArrival = 1 THEN 'true' ELSE 'false' END AS IsOTPArrival`
    ])
    .addSelect(`'${currentYear}'`, 'currentYear') // Ensure currentYear is treated as a string
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: moment('01/01/24', 'MM/DD/YY').format('MM/DD/YY'),
        endDate: moment('12/31/24', 'MM/DD/YY').format('MM/DD/YY'),
    })
    .getRawMany();





    result = FlightsAirlines
console.log(FlightsAirlines);


