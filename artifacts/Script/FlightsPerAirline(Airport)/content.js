// Report 5
const data = req.body

const FlightsAirlines = await entities.daily_otp.createQueryBuilder("alias")
    .select([
        "FlightDate",
        "FlightId",
        "FlightNumber",
        "Airport",
        "AOC",
        "Origin",
        "Destination",
        "STD",
        "EstimatedTimeDeparture",
        "ActualTimeDeparture",
        "STA",
        "EstimatedTimeOfArrival",
        "ActualTimeOfArrival",
        "AdultPax",
        "InfantPax",
        "TotalPax",
        // Transform IsDelayedDeparture into a boolean with unique alias
        `(CASE WHEN IsDelayedDeparture = 1 THEN 'true' ELSE 'false' END) AS IsDelayedDeparture`,
        `(CASE WHEN IsDelayedArrival = 1 THEN 'true' ELSE 'false' END) AS IsDelayedArrival`,
        `(CASE WHEN IsCancelledDeparture = 1 THEN 'true' ELSE 'false' END) AS IsCancelledDeparture`,
        `(CASE WHEN IsCancelledArrival = 1 THEN 'true' ELSE 'false' END) AS IsCancelledArrival`,
        `(CASE WHEN IsOTPDeparture = 1 THEN 'true' ELSE 'false' END) AS IsOTPDeparture`,
        `(CASE WHEN IsOTPArrival = 1 THEN 'true' ELSE 'false' END) AS IsOTPArrival`,
    ])
    .where("isDeleted = :isDeleted", { isDeleted: 0 })
    .andWhere("FlightDate BETWEEN :startDate AND :endDate", {
        startDate: data.from, // Use ISO format
        endDate: data.to,
    })
    .andWhere("AOC = :AOC", { 
        AOC: data.airline,
    })
    .andWhere("Origin = :Origin", { 
        Origin: data.origin,
    })
    .andWhere("Destination = :Destination", { 
        Destination: data.destination, // Fix typo in 'Destination'
    })
    .getRawMany();
  result = FlightsAirlines
console.log(FlightsAirlines);
