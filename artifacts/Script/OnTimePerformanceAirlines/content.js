const moment = modules.moment;
const data = req.body

// const data = '12/06/24'
log.info(data)
// Input date string
// const data = '12/4/24';
// Extract the current month and year
const currentMonth = moment(data.Month, 'M').format('M');
const currentYear = moment(data.Month, 'M').format('YYYY');
const startDate = moment(data.Month, 'M').startOf('month').format('MM/DD/YY');
const endDate = moment(data.Month, 'M').endOf('month').format('MM/DD/YY');


console.log(startDate)
console.log(endDate)
console.log(currentMonth)
console.log(currentYear)
// Query Builder
const FlightsOnTime = await entities.daily_otp.createQueryBuilder("alias")
    .select(`'${currentYear}'`, 'Year') // Static year
    .addSelect(`'${currentMonth}'`, 'Month') // Static month
    .addSelect(`'${data.Airline}'`, 'Airline') // Static airline
    .addSelect(`
        CASE WHEN (COUNT(alias.IsOTPDeparture) + COUNT(alias.IsOTPArrival)) > 0
        THEN ((COUNT(CASE WHEN alias.IsOTPDeparture = 1 THEN 1 END) + COUNT(CASE WHEN alias.IsOTPArrival = 1 THEN 1 END)) * 100.0 / (COUNT(alias.IsOTPDeparture) + COUNT(alias.IsOTPArrival)))
        ELSE 0 END
    `, 'OnTime')
    .addSelect(`
        CASE WHEN (COUNT(alias.IsDelayedDeparture) + COUNT(alias.IsDelayedArrival)) > 0
        THEN ((COUNT(CASE WHEN alias.IsDelayedDeparture = 1 THEN 1 END) + COUNT(CASE WHEN alias.IsDelayedArrival = 1 THEN 1 END)) * 100.0 / (COUNT(alias.IsDelayedDeparture) + COUNT(alias.IsDelayedArrival)))
        ELSE 0 END
    `, 'Late')
    .addSelect(`
        CASE WHEN (COUNT(alias.IsCancelledDeparture) + COUNT(alias.IsCancelledArrival)) > 0
        THEN ((COUNT(CASE WHEN alias.IsCancelledDeparture = 1 THEN 1 END) + COUNT(CASE WHEN alias.IsCancelledArrival = 1 THEN 1 END)) * 100.0 / (COUNT(alias.IsCancelledDeparture) + COUNT(alias.IsCancelledArrival)))
        ELSE 0 END
    `, 'Cancelled')
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("alias.AOC = :AOC", { AOC: data.Airline })
    .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: startDate,
        endDate: endDate,
    })
    .getRawOne();
    result = FlightsOnTime

console.log(FlightsOnTime);