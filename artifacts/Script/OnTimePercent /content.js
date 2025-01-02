// Report 03
const data = req.body;
const FlightsOnTime = await entities.daily_otp.createQueryBuilder("alias")
    .select("FlightDate") // Select FlightDate values
    .addSelect("COUNT(alias.EstimatedTimeDeparture) AS Departure")
    .addSelect("COUNT(alias.ActualTimeDeparture) AS Arrival")
    .addSelect("COUNT(alias.EstimatedTimeDeparture) + COUNT(alias.ActualTimeDeparture) AS TotalFlightsFlown")
    .addSelect(
        `SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END) AS IsOTPDeparture`
    )
    .addSelect(
        `SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END) AS IsOTPArrival`
    )
    .addSelect(
        `SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END) + SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END) AS TotalOTP`
    )

    .addSelect(`
    CASE 
        WHEN COUNT(alias.ActualTimeOfArrival) > 0 THEN 
            (SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END) * 100.0) / COUNT(alias.ActualTimeOfArrival)
        ELSE 0 
    END AS PercentageArrival
`)
  .addSelect(`
    CASE 
        WHEN COUNT(alias.ActualTimeDeparture) > 0 THEN 
            (SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END) * 100.0) / COUNT(alias.ActualTimeDeparture)
        ELSE 0 
    END AS PercentageDeparture
`)

    .addSelect(
        `CASE WHEN COUNT(alias.ActualTimeDeparture) > 0 OR COUNT(alias.ActualTimeOfArrival) > 0 THEN 
            ROUND(
                (
                    (CASE WHEN COUNT(alias.ActualTimeDeparture) > 0 THEN 
                        SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END)  / COUNT(alias.ActualTimeDeparture) 
                        ELSE 0 END) 
                    + 
                    (CASE WHEN COUNT(alias.ActualTimeOfArrival) > 0 THEN 
                        SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END)  / COUNT(alias.ActualTimeOfArrival) 
                        ELSE 0 END)
                ) * 100, 2) 
            ELSE 0 END AS TotalPercentage`
    )
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
   .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: data.from,
        endDate: data.to,
        // startDate:'12/04/24',
        // endDate:'12/06/24'
    })
    .groupBy("FlightDate")
    .getRawMany();

    result = FlightsOnTime
// console.log('startdate' , data.from);
// console.log('endDate' , date.to);
console.log(FlightsOnTime);




