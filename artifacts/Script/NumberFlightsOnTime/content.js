// Report 2

const data = req.body;

const FlightsOnTime = await entities.daily_otp.createQueryBuilder("alias")
    .select("DISTINCT alias.FlightDate") // Select distinct FlightDate values
    .addSelect('COUNT(alias.EstimatedTimeDeparture) + COUNT(alias.ActualTimeDeparture) AS TotalFlightsFlown')
    .addSelect(`SUM(CASE WHEN alias.IsOTPDeparture = 0 THEN 1 ELSE 0 END) + SUM(CASE WHEN alias.IsOTPArrival = 0 THEN 1 ELSE 0 END) AS TotalOTP`)
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: data.from,
        endDate: data.to,
    })
    .groupBy("alias.FlightDate") // Group by FlightDate
    .getRawMany();

console.log("entity", FlightsOnTime);

log.info(data.from)
log.info(data.to)



result = FlightsOnTime;

// log.info(data.from);
// log.info(data.to)

// log.info(toDate);
complete();








