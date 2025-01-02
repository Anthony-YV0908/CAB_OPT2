const moment = modules.moment;
// const data = req.body
// log.info(data)

// // Extract the current month and year
// const currentMonth = moment(data.Month, 'M/D/YY').format('MMM');
// const currentYear = moment(data.Month, 'M/D/YY').format('YYYY');
// const startDate = moment(data.Month, 'M').startOf('month').format('MM/DD/YY');
// const endDate = moment(data.Month, 'M').endOf('month').format('MM/DD/YY');

// const aoc = data.Airline
// const airport = data.Airport
// const carrier = data.Carrier
const FlightsOnTime = await entities.daily_otp.createQueryBuilder("alias")
//    .select(`'${currentYear}'`, 'Year') // Static year
//     .addSelect(`'${currentMonth}'`, 'Month') // Add the current month as a static value
//     .addSelect(`'${data.Airline}'`, 'Airline')
//     .addSelect(`'${data.Airport}'`, 'Airport')
//     .addSelect(`'${data.carrier}'`, 'Carrier')
    .select(`COUNT(alias.EstimatedTimeDeparture)`, 'NoOfFlightsDeparture')
    .addSelect(`COUNT(alias.EstimatedTimeofArrival)`, 'NoOfFlightArrival')
    .addSelect('COUNT(alias.EstimatedTimeDeparture) + COUNT(alias.ActualTimeDeparture)', 'TotalFlightsFlown')
    .addSelect(`COUNT(alias.IsDelayedDeparture)`, 'NoOfDelayedDeparture')
    .addSelect(`COUNT(alias.IsDelayedArrival)`, 'NoOfDelayedArrival')
    .addSelect('COUNT(alias.IsDelayedDeparture) + COUNT(alias.IsDelayedArrival)', 'TotalFlightsDelayed')
    .addSelect(`COUNT(alias.IsCancelledDeparture)`, 'NoOfCancelledDeparture')
    .addSelect(`COUNT(alias.IsCancelledArrival)`, 'NoOfCancelledArrival')
    .addSelect('COUNT(alias.IsCancelledDeparture) + COUNT(alias.IsCancelledArrival)', 'TotalFlightsCancelled')
    .addSelect(`COUNT(alias.IsOTPDeparture)`, 'NoOfOTPDeparture')
    .addSelect(`COUNT(alias.IsOTPArrival)`, 'NoOfOTPArrival')
    .addSelect('COUNT(alias.IsOTPDeparture) + COUNT(alias.IsOTPArrival)', 'TotalFlightsOTP')
    .addSelect(
    `(COUNT(alias.IsOTPDeparture) *1.0  / COUNT(alias.EstimatedTimeDeparture)) * 100.0`,
    'DEP'
)

    .addSelect(
        `(COUNT(alias.IsOTPDeparture) *1.0  / COUNT(alias.EstimatedTimeofArrival)) * 100`,
        'ARR'
    )
    .addSelect(
        `((COUNT(alias.IsOTPDeparture) + COUNT(alias.IsOTPArrival)) / (COUNT(alias.EstimatedTimeDeparture) + COUNT(alias.ActualTimeDeparture))) * 100`,
        'TotalPercentage'
    )
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere('alias.FlightDate = :FlightDate', { FlightDate: "12/06/24" })
    .andWhere('alias.AOC = :AOC', { AOC: "2P" })
    .andWhere('alias.Origin = :Origin', { Origin: "NNB" })
    .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: "12/01/24",
        endDate: "12/31/24",
    })
    .getRawOne(); // Returns only the raw selected fields

result = FlightsOnTime;
// Output the result
console.log(FlightsOnTime);
