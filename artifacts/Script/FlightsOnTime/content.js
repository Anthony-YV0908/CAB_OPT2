// Report 1


 const data = req.body;

const FlightsOnTime = await entities.daily_otp.createQueryBuilder("alias")
    .select("DISTINCT alias.FlightDate") // Select distinct FlightDate values
    .addSelect('COUNT(alias.EstimatedTimeDeparture) AS Departure')
    .addSelect('COUNT(alias.ActualTimeDeparture) AS Arrival')
    .addSelect('COUNT(alias.EstimatedTimeDeparture) + COUNT(ActualTimeDeparture) AS TotalFlightsFlown')
    .addSelect('COUNT(alias.IsOTPDeparture) AS OTPDeparture')
    .addSelect('COUNT(alias.IsOTPArrival) AS OTPArrival ')
    .addSelect('COUNT(alias.IsOTPDeparture) + COUNT(IsOTPArrival) TotalNoofOTP ')
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("alias.FlightDate BETWEEN :startDate AND :endDate", {
        startDate: data.from,
        endDate: data.to,
    })
    .groupBy("alias.FlightDate") // Group by FlightDate
    .getRawMany();


console.log('Flights' , FlightsOnTime)
    log.info(data.from);
    log.info(data.to);

result = FlightsOnTime

complete();



// const dailyotptoday = await entities.daily_otp.createQueryBuilder("alias")
//     .where("alias.isDeleted = :isDeleted", { isDeleted: 0 }) // First condition
//     //  .andWhere("alias.DateIssued = :DateIssued", { DateIssued:formattedDate }) // Second condition
//     .getMany();


// console.log(dailyotptoday)