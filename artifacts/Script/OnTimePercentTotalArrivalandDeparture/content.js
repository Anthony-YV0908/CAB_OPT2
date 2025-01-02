// Report 4 
const data = req.body;



const FlightsOnTime = await entities.daily_otp.createQueryBuilder("alias")
    .select('FlightDate')
    .addSelect("COUNT(alias.EstimatedTimeDeparture) + COUNT(alias.ActualTimeDeparture) AS TotalFlights")
     .addSelect(
        `SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END) + SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END) AS TotalOTP`
    )
   .addSelect(`
    (COUNT(alias.EstimatedTimeDeparture) + COUNT(alias.ActualTimeDeparture)) /
    (SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END) + SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END)) 
    AS OTPTotalPercentage 
`)
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: data.from,
        endDate: data.to
    })
   
    .groupBy("alias.FlightDate") 
    .getRawMany();


    result = FlightsOnTime
// log.info(data.from)
// log.info(data.to)


    console.log(FlightsOnTime)
