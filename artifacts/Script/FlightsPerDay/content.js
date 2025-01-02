// Report 8 
const data = req.body;
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
        // Transform IsDelayedDeparture into a boolean
       `(CASE WHEN IsDelayedDeparture = 1 THEN 'true' ELSE 'false' END) AS IsDelayedDeparture`,
         `(CASE WHEN IsDelayedArrival = 1 THEN 'true' ELSE 'false' END) AS IsDelayedArrival`,
         `(CASE WHEN IsCancelledDeparture = 1 THEN 'true' ELSE 'false' END) AS IsCancelledDeparture`,
         `(CASE WHEN IsCancelledArrival = 1 THEN 'true' ELSE 'false' END) AS IsCancelledArrival`,
         `(CASE WHEN IsOTPDeparture = 1 THEN 'true' ELSE 'false' END) AS IsOTPDeparture`,
        `(CASE WHEN IsOTPArrival = 1 THEN 'true' ELSE 'false' END) AS IsOTPArrival`
    ])
    .where("isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("FlightDate = :FlightDate",{FlightDate:data.day})
    .getRawMany();

    result = FlightsAirlines
console.log(FlightsAirlines);
