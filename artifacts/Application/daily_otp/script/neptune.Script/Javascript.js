var tableName 

// PDF format
function exportToPDF(tableName) {
    try {
        $(tableName).tableExport({
            type: "pdf",
            jspdf: { orientation: "p", margins: { left: 50, top: 10 }, autotable: false },
        });
        sap.m.MessageToast.show("Export File generated.");
    } catch (error) {
        console.error(error);
        sap.m.MessageToast.show("Add a Table Name (ID)");
    }
}

// Excel format
function exportToExcel(tableName) {
    try {
        $(tableName).tableExport({
            type: "excel",
            mso: { fileFormat: "xlsx", worksheetName: ["Table 1", "Table 2", "Table 3"] },
        });
        sap.m.MessageToast.show("Export File generated.");
    } catch (error) {
        console.error(error);
        sap.m.MessageToast.show("Add a Table Name (ID)");
    }
}

// CSV format
function exportToCSV(tableName) {
    try {
        $(tableName).tableExport({ type: "csv" });
        sap.m.MessageToast.show("Export File generated.");
    } catch (error) {
        console.error(error);
        sap.m.MessageToast.show("Add a Table Name (ID)");
    }
}

// // JSON format
// function exportToJSON(tableName) {
//     try {
//         $(tableName).tableExport({ type: "json" });
//         sap.m.MessageToast.show("Export File generated.");
//     } catch (error) {
//         console.error(error);
//         sap.m.MessageToast.show("Add a Table Name (ID)");
//     }
// }







function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}


function DeleteFlight(oEvent) {
    const context = oEvent.oSource.getBindingContext();

    // Get the entire data object bound to this context
    const data = context.getObject();
    
    console.log('data:', data);

    var aoc = data.AOC
    var atd = data.ActualTimeDeparture
    var ata = data.ActualTimeofArrival
    var adultpax = data.AdultPax
    var airport = data.Airport
    var dateissued = data.DateIssued
    var etd = data.EstimatedTimeDeparture
    var eta = data.EstimatedTimeofArrival
    var flight = data.FlightDate
    var flightid = data.FlightId
    var flightnumber = data.FlightNumber 
    var infantpax = data.InfantPax
    var isotparrival = data.IsOTPArrival
    var otpdeparture = data.OTPDeparture
    var origin = data.Origin
    var remarks = data.Remarks
    var sta = data.STA
    var std = data.STD
    var totalpax = data.TotalPax
    var id_daily = data.id 



    var isdeleted = data.isDeleted;


    // console.log('this is deleted' , isDeleted)

    // Construct the URL with the data.id parameter
    const normalizedUrl = `http://localhost:8080/api/entity/daily_otp_archive?where={"id":"${data.id}"}`;

    var Jsondata = {
         AOC:aoc,
         ActualTimeDeparture:atd, 
         ActualTimeofArrival:ata,
         AdultPax:adultpax,
         Airport:airport, 
         DateIssued:dateissued,
         EstimatedTimeDeparture:etd , 
         EstimatedTimeofArrival:eta, 
         FlightDate:flight,
        FlightId:flightid, 
        FlightNumber:flightnumber,
        InfantPax:infantpax,
        IsOTPArrival:isotparrival,
        OTPDeparture:otpdeparture,
        Origin:origin, 
        Remarks:remarks,
        STA:sta, 
        STD:std, 
        TotalPax:totalpax,
        isDeleted:1
    }

    console.log('json data', Jsondata)
    // // Perform the DELETE request
    fetch(normalizedUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(Jsondata)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log('Delete successful:', result);
        // Reload the window after successful delete
        // window.location.reload(); 
    })
    .catch(error => {
        console.error('Error deleting the flight:', error);
    });
}

let globalData = null  // Shared variable to store data
function SelectAOC(oEvent) {
    const context = oEvent.oSource.getBindingContext();
    if (!context) {
        console.error("No binding context available.");
        return;
    }

    const data = context.getObject();
    if (!data || !data.Code) {
        console.error("Invalid data or missing 'Code' property.");
        return;
    }

    App.to(CreatePage);  // Navigate to the CreatePage
    globalData = data;  // Store the data globally
    console.log("Selected Data:", globalData);  // Log the global data to verify
    CreateFlight()
}


async function CreateFlight() {


     if (!globalData) {
        console.error("No data available.");
        return;
    }

    const dataCode = globalData.Code;
    console.log("CreateFlight using data code:", dataCode);

    // console.log(data);


    var aoc = inSimpleFormAOC.getValue(dataCode);
    inSimpleFormAOC.setValue(dataCode);    

    // Retrieve form values
    var dateissued = inSimpleFormDateIssued.getValue();
    var airport = inSimpleFormAirport.getValue();
    var flightid = inSimpleFormFlightId.getValue();
    var flightdate = inSimpleFormFlightDate.getValue();
    var origin = inSimpleFormOrigin.getValue();
    var destination = inSimpleFormDestination.getValue();
    var std = inSimpleFormSTD.getValue();
    var sta = inSimpleFormSTA.getValue();
    var etd = inSimpleFormEstimatedTimeDeparture.getValue().trim();
    var atd = inSimpleFormActualTimeDeparture.getValue().trim();
    var eta = inSimpleFormEstimatedTimeofArrival.getValue().trim();
    var ata = inSimpleFormActualTimeofArrival.getValue().trim();
    var adult = inSimpleFormAdultPax.getValue();
    var infant = inSimpleFormInfantPax.getValue();
    var total = inSimpleFormTotalPax.getValue();
    var remarks = inSimpleFormRemarks.getValue();
    var isotpdeparture = inSimpleFormIsOTPDeparture.getValue();
    var otpdeparture = inSimpleFormOTPDeparture.getValue();
    var isotparrival = inSimpleFormIsOTPArrival.getValue();
    var otparrival = inSimpleFormOTPArrival.getValue();
    if(inSimpleFormDateIssued.getValue() === '')
        {
               sap.m.MessageToast.show(
                "No Date issue data"
            );
            return;
        }

        if(inSimpleFormAirport.getValue() === '') 
        { 
               sap.m.MessageToast.show(
                "No Airport Data"
            );
            return;
        }

        if(inSimpleFormAOC.getValue() === '') 
        { 
               sap.m.MessageToast.show(
                "No AOC data"
            );
            return;
        }

        if(inSimpleFormFlightId.getValue() === '') 
        { 
               sap.m.MessageToast.show(
                "No Flight Id data"
            );
            return;
        }

        if(inSimpleFormFlightDate.getValue() === '') 
        { 
               sap.m.MessageToast.show(
                "No FlightDate data"
            );
            return;
        }   

        if(inSimpleFormOrigin.getValue() === '') 
        {
               sap.m.MessageToast.show(
                "No Origin data"
            );
            return;
        } 

        if(inSimpleFormDestination.getValue() === '') 
        { 
               sap.m.MessageToast.show(
                "No Destination data"
            );
            return;
        }

       
        if(inSimpleFormSTD.getValue() ==='') 
        { 
          sap.m.MessageToast.show(
                "No STD data"
            );
            return;
        }

      if(inSimpleFormSTD.getValue() ==='') 
        { 
          sap.m.MessageToast.show(
                "No "
            );
            return;
        }

        if(inSimpleFormSTA.getValue() === '') 
        { 
            sap.m.MessageToast.show(
                "No STA value"
            );
            return;
        }

        // Validate time inputs
        const etdMinutes = timeToMinutes(etd);
        const atdMinutes = timeToMinutes(atd);
        const etaMinutes = timeToMinutes(eta);
        const ataMinutes = timeToMinutes(ata);

      
        const differenceDeparture = atdMinutes - etdMinutes;
        const differenceArrival = ataMinutes - etaMinutes;




          if (atdMinutes < etdMinutes) {
            sap.m.MessageToast.show(
                "Actual Time Departure (ATD) cannot be earlier than Estimated Time Departure (ETD)."
            );
            return;
        }

        if (ataMinutes < etaMinutes) {
            sap.m.MessageToast.show(
                "Actual Time of Arrival (ATA) cannot be earlier than Estimated Time of Arrival (ETA)."
            );
            return;
        }


        isotpdeparture = differenceDeparture > 15 ? 1 : 0;
        otpdeparture = differenceDeparture;
        delayeddeparture = differenceDeparture;


        isotparrival = differenceArrival > 15 ? 1 : 0;
        otparrival = differenceArrival;
        delayedarrival = differenceArrival;

    setTimeout(async () => {
        try {
            // Fetch service type for the carrier
            const apiUrl = `http://localhost:8080/api/entity/airportcode?where={"Code":"${aoc}"}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("Failed to fetch service type data.");
            }

            const data = await response.json();
            if (data.length === 0) {
                throw new Error("No matching data found for the AOC code.");
            }

            // Process the data and assign to carrier
            const carrier = data[0].Service_Type;

            // Create payload
            const flightData = {
                DateIssued: dateissued,
                Airport: airport,
                FlightId: flightid,
                AOC: aoc,
                Carrier: carrier,
                FlightDate: flightdate,
                Origin: origin,
                Destination: destination,
                STD: std,
                STA: sta,
                EstimatedTimeDeparture: etd,
                ActualTimeDeparture: atd,
                EstimatedTimeofArrival: eta,
                ActualTimeofArrival: ata,
                AdultPax: adult,
                InfantPax: infant,
                TotalPax: total,
                Remarks: remarks,
                IsOTPDeparture: isotpdeparture,
                OTPDeparture: otpdeparture,
                IsOTPArrival: isotparrival,
                OTPArrival: otparrival,
            };

            console.log("Flight Data:", flightData);

            // Send flight data to the API
            const createResponse = await fetch(
                "http://localhost:8080/api/entity/daily_otp",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(flightData),
                }
            );

            if (!createResponse.ok) {
                const errData = await createResponse.json();
                throw new Error(`Request failed: ${errData.message || createResponse.statusText}`);
            }

            const result = await createResponse.json();
            sap.m.MessageToast.show("Flight created successfully.");
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
            sap.m.MessageToast.show(`Error creating flight: ${error.message}`);
        }
    }, 2000); // Delay of 2000ms (2 seconds) before executing the fetch call
}




function UpdateFlight() {

    //  // Fetch service type for the carrier
    //     const apiUrl = `http://localhost:8080/api/entity/airportcode?where={"Code":"${aoc}"}`;
    //     const response = await fetch(apiUrl);

    //     if (!response.ok) {
    //         throw new Error("Failed to fetch service type data.");
    //     }

    //     const data = await response.json();
    //     if (data.length === 0) {
    //         throw new Error("No matching data found for the AOC code.");
    //     }

    //     carrier = data[0].Service_Type;

    let update_data = {}

    update_data.id = modelEditSimpleForm.getData().id


  
    var dateissued = update_data.DateIssued = inEditSimpleFormDateIssued.getValue()
    var aiport = update_data.Airport = inEditSimpleFormAirport.getValue()
    var flightid = update_data.FlightId = inEditSimpleFormFlightId.getValue()
    var aoc = update_data.AOC = inEditSimpleFormAOC.getValue()
    // var carrier = update_data.carrier = 
    var flightdate = update_data.FlightDate = inEditSimpleFormFlightDate.getValue()
    var origin = update_data.Origin = inEditSimpleFormOrigin.getValue()
    var destination = update_data.Destination = inEditSimpleFormDestination.getValue()
    var std = update_data.STD = inEditSimpleFormSTD.getValue()
    var etd = update_data.EstimatedTimeDeparture = inEditSimpleFormEstimatedTimeDeparture.getValue()
    var atd = update_data.ActualTimeDeparture = inEditSimpleFormActualTimeDeparture.getValue()
    var sta = update_data.STA = inEditSimpleFormSTA.getValue()
    var eta = update_data.EstimatedTimeofArrival = inEditSimpleFormEstimatedTimeofArrival.getValue()
    var ata = update_data.ActualTimeofArrival = inEditSimpleFormActualTimeofArrival.getValue()
    var adultpax = update_data.AdultPax = inEditSimpleFormAdultPax.getValue()
    var infantpax = update_data.InfantPax = inEditSimpleFormInfantPax.getValue()
    var remarks = update_data.Remarks = inEditSimpleFormRemarks.getValue()
    // update_data.DelayedArrival = inEditSimpleFormIsDelayedArrival.getValue() 
    // update_data.CancelledDeparture = inEditSimpleFormIsCancelledDeparture.getValue()
  update_data.IsOTPDeparture = inEditSimpleFormIsOTPDeparture.getValue()
   update_data.OTPDeparture = inEditSimpleFormOTPDeparture.getValue()
    update_data.IsOTPArrival = inEditSimpleFormIsOTPArrival.getValue()
     update_data.OTPArrival = inEditSimpleFormOTPArrival.getValue()
    // update_data.RecorcedInFlightCancel = inEditSimpleFormRecordedInFlightCancel.getValue()
    // update_data.RecordedInFlightDelay = inEditSimpleFormRecordedInFlightDelay.getValue()
    


    const etdMinutes = timeToMinutes(etd);
    const atdMinutes = timeToMinutes(atd);

    const etaMinutes = timeToMinutes(eta);
    const ataMinutes = timeToMinutes(ata);



    // Validate ATD against ETD
if (atdMinutes < etdMinutes) {

    sap.m.MessageToast.show("Actual Time Departure (ATD) cannot be earlier than Estimated Time Departure (ETD).")
    return; // Stop execution if invalid time
}

// Validate ATA against ETA
if (ataMinutes < etaMinutes) {
    sap.m.MessageToast.show("Actual Time of Arrival (ATA) cannot be earlier than Estimated Time of Arrival (ETA).")

    return; // Stop execution if invalid time
}


    const differenceDeparture = atdMinutes - etdMinutes;

    const differenceArrival = ataMinutes - etaMinutes ;


console.log('departure', differenceDeparture)

console.log('arrival ' , differenceArrival)

// Update `update_data` with OTP values for departure
if (differenceDeparture > 15) {
    console.log("The departure is late.");
    update_data.IsOTPDeparture = 1;
    update_data.OTPDeparture = differenceDeparture;
} else {
    console.log("The departure is on time.");
    update_data.IsOTPDeparture = 0;
    update_data.OTPDeparture = differenceDeparture;
}

// Update `update_data` with OTP values for arrival
if (differenceArrival > 15) {
    console.log("The arrival is late.");
    update_data.IsOTPArrival = 1;
    update_data.OTPArrival = differenceArrival;
} else {
    console.log("The arrival is on time.");
    update_data.IsOTPArrival = 0;
    update_data.OTPArrival = differenceArrival;
}

    var options = { 
        data:update_data, 
    }

    apiUpdateFlight(options)
   
}



function OnTimeFlights() {
    console.log('Pressed');
    var fromDate = OnTimeArrival.getFrom();
    var toDate = OnTimeArrival.getTo();
    
    // Format the start date
    const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');
    
    // Format the end date
    const formattedEndDate = toDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');
    
    // Log the formatted dates to the console
    console.log(formattedStartDate); // Output: 11/01/24
    console.log(formattedEndDate); // Output: 11/30/24
    
    var optionData = {  
        data: { 
            "from": formattedStartDate,
            "to": formattedEndDate
        }
    };
    
    console.log('this is ontime', optionData);
    
    setTimeout(function() {
        apiOnTimeFlight(optionData);
    }, 1000); // Delay the function call by 1 second (1000 milliseconds)
}


function DailyOTP() {
  // Get the selected date as a string
  const selectedDate = DatePicker.getValue();

  // Convert the selected date string into a Date object
  const dateObj = new Date(selectedDate);

  // Format the date as MM/DD/YY
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
  }).split('/').map(part => part.padStart(2, '0')).join('/');

  console.log(formattedDate);

  // Options and call the API
  const options = { data: { "monthly": formattedDate } };
  console.log(selectedDate);
  apiDailyOTP(options);
  // Log the formatted date
}

function ArrivalorDepartureTotal() 
{ 
    var fromDate = ArrivalorDeparture.getFrom()
    var toDate = ArrivalorDeparture.getTo()



   const formattedStartDate = fromDate.toLocaleDateString("en-US", {
  month: "numeric",
  day: "numeric",
  year: "2-digit"
}).split('/').map(part => part.padStart(2, '0')).join('/');

// Format the end date
const formattedEndDate = toDate.toLocaleDateString("en-US", {
  month: "numeric",
  day: "numeric",
  year: "2-digit"
}).split('/').map(part => part.padStart(2, '0')).join('/');


    // Log the formatted dates to the console
    console.log(formattedStartDate); // Output: 11/1/24
    console.log(formattedEndDate); // Output: 11/30/24

        var OnTimedata = {  
            data: { "from": formattedStartDate,
                    "to":formattedEndDate
                    }
            
        }

        console.log(OnTimedata)

        apiNumberFlightsOnTimeAPI(OnTimedata) 
}

function OnTimePercentArrivalDeparture() 
{ 
    console.log('pressed')
    var fromDate = PercentTotalArrivalDeparture.getFrom()
    var toDate = PercentTotalArrivalDeparture.getTo()

   const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    const formattedEndDate = toDate.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    // Log the formatted dates to the console
    console.log(formattedStartDate); // Output: 11/1/24
    console.log(formattedEndDate); // Output: 11/30/24

    var OnTimedata = {  
        data: { "from": formattedStartDate,
                "to":formattedEndDate
                 }
        
    }

    console.log(OnTimedata)

    apiPercentArrivalDeparture(OnTimedata) 

}



function ArrivalandDeparturePercent() 
{ 
    console.log('Pressed');

    var fromDate = TotalArrivalandDeparture.getFrom()
    var toDate = TotalArrivalandDeparture.getTo()

  const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    const formattedEndDate = toDate.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    console.log(formattedStartDate); // Output: 11/1/24
    console.log(formattedEndDate); // Output: 11/30/24

        var OnTimedata = {  
            data: { "from": formattedStartDate,
                    "to":formattedEndDate
                    }
            
        }

     apiPercentTotalArrivalandDeparture(OnTimedata);
}

function PerAirlinePerRouteFlights() 
{ 
    
    var fromDate = AirlineRoute.getFrom() 
    var toDate = AirlineRoute.getTo() 

    var airLine = AirlineInput.getValue()
    var destination = DestinationInput_1.getValue() 
    var origin = OriginInput_1.getValue()

    // var destination = Destination_1.getValue() 
    // var origin = Origin_1.getValue() 


     const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    const formattedEndDate = toDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');


    var OptionData = { 
        data:{
            "from":formattedStartDate,
            "to":formattedEndDate,
            "airline":airLine,
            "destination":destination,
            "origin":origin 
        }
    }

            console.log(OptionData)

       apiPerRoutePerAirline(OptionData)




}



function PerAirline() 
 { 
    var fromDate = DatePerAirline.getFrom()
    var toDate = DatePerAirline.getTo()
    var airlineinput = AirlineInput_1.getValue();



     const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    const formattedEndDate = toDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');


     var OnTimedata = {  
        data: { "from": formattedStartDate,
                "to":formattedEndDate,
                "airline":airlineinput,

               
            }
    }

    console.log(OnTimedata)

    apiPerAirline(OnTimedata)

 }






 function PerRoute() 
 { 
    var fromDate = DatePerRoute.getFrom();
    var toDate = DatePerRoute.getTo();
    var originInput = OriginInput_2.getValue(); 
    var destinationInput = DestinationInput_2.getValue();

     const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    const formattedEndDate = toDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');




    var OnTimedata = {  
        data: { "from": formattedStartDate,
                "to":formattedEndDate,
                "origin":originInput,
                "destination":destinationInput,
               
            }
    }


    console.log(OnTimedata)

    apiPerRoute(OnTimedata)

 }

function PerAirport() 
{ 

    var fromDate = DatePerAirport.getFrom()
    var toDate = DatePerAirport.getTo()
    var airportinput = AirportInput_1.getValue()


     const formattedStartDate = fromDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

    const formattedEndDate = toDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
    }).split('/').map(part => part.padStart(2, '0')).join('/');

// Log the formatted dates to the console
console.log(formattedStartDate); // Output: 11/1/24
console.log(formattedEndDate); // Output: 11/30/24




    var OnTimedata = {  
        data: { "from": formattedStartDate,
                "to":formattedEndDate,
                "airport":airportinput
                 }
        
    }

    console.log(OnTimedata)

    apiPerAirport(OnTimedata)

}



function PerDay() 
{   
    var perday = PerDayFlight.getValue()

  
     // Convert the selected date string into a Date object
  const dateObj = new Date(perday);

  // Format the date as MM/DD/YY
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
  }).split('/').map(part => part.padStart(2, '0')).join('/');

      console.log('this is perday',formattedDate)


      var Perday = { 
        data:{"day":formattedDate}
      }

      console.log(Perday) 

      apiFlightPerDay(Perday)
}



function PerQuarter() 
{ 
    
    var perQuarter = Select1.getSelectedKey() 

    console.log(perQuarter)


        var PerQuarter = { 
            data:{"quarter":perQuarter}
        }
        
        console.log(PerQuarter)


    apiFlightPerQuarter(PerQuarter)

}



function PerMonth()
{ 
    var permonth = PerMonthFlight.getValue(); 


//   // Convert the selected date string into a Date object
//     const dateObj = new Date(permonth);

//        const formattedStartDate = dateObj.toLocaleDateString("en-US", {
//         month: "numeric",
//         day: "numeric",
//         year: "2-digit"
//     }).split('/').map(part => part.padStart(2, '0')).join('/');

      console.log('this is permonth',permonth)


      var Flightmonth = { 
        data:{"month":permonth}
      }

      console.log(Flightmonth)

    apiFlightPerMonth(Flightmonth) 
}

function Peryear() 
{ 
    var yearflights = FlightsYear.getValue()

    var Flightyear = { 
        data:{"year":yearflights}
    }

      console.log(Flightyear)

    apiFlightPerYear(Flightyear) 
}


function PerformancePerAirline() 
{ 
    var month = OnTimePerformanceAirlineDate.getValue()
    var AirlineOnTime = OnTimePerformancePerAirlineInput.getValue()


    var OnTimePerformance = { 
        data:{ "Month":month,
                "Airline":AirlineOnTime}
    }

    console.log(OnTimePerformance )

    apiFlightOnTimePerformancePerAirline(OnTimePerformance)
}  

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
  }).split('/').map(part => part.padStart(2, '0')).join('/');
}

async function fetchServiceType(perairlineinput) {
  const apiUrl = `http://localhost:8080/api/entity/airportcode?where={"Code":"${perairlineinput}"}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch service type data.");
  }

  const data = await response.json();
  if (data.length === 0) {
    throw new Error("No matching data found for the AOC code.");
  }

  return data[0].Service_Type;
}

async function Monthly() { // Made the function async
  try {
    const monthlydate = new Date(PerMonthly.getValue());
    const airportinput = AirportMonthlyInput.getValue();
    const perairlineinput = PerMonthlyInput.getValue();

    const formattedStartDate = formatDate(monthlydate);

    const carrier = await fetchServiceType(perairlineinput); // Await the fetch

    const monthly = {
      data: {
        "Month": formattedStartDate,
        "Airline": perairlineinput,
        "Carrier": carrier,
        "Airport": airportinput
      }
    };

    console.log(monthly);

 setTimeout(() => {
      apiMonthly(monthly); // Call the API with the constructed object
      console.log("successfully fetched");
    }, 2000);

  } catch (error) {
    console.error("Error in Monthly function:", error);
  }
}




inSimpleFormOrigin.getModel().setSizeLimit(13000);
inSimpleFormDestination.getModel().setSizeLimit(13000);
Table18.getModel().setSizeLimit(4000);

// Origin_1.getModel().setSizeLimit(13000);
// Destination_1.getModel().setSizeLimit(13000);
// Airline_1.getModel().setSizeLimit(4000);
Table.getModel().setSizeLimit(4000);






