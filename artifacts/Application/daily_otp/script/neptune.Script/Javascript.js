var tableName;

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



function CreateFlight(){ 
    // const normalizedUrl = "http://localhost:8080/api/entity/daily_otp";

    var dateissued = inSimpleFormDateIssued.getValue()
    var airport = inSimpleFormAirport.getValue()
    var flightid  = inSimpleFormFlightId.getValue()
    var aoc = inSimpleFormAOC.getValue()
    var flightdate = inSimpleFormFlightDate.getValue()
    var origin = inSimpleFormOrigin.getValue()
    var destination = inSimpleFormDestination.getValue()
    var std = inSimpleFormSTD.getValue()
    var etd =  inSimpleFormEstimatedTimeDeparture.getValue().trim()
    var atd = inSimpleFormActualTimeDeparture.getValue().trim()
    var eta = inSimpleFormEstimatedTimeofArrival.getValue().trim()
    var ata = inSimpleFormActualTimeofArrival.getValue().trim() 
    var adult = inSimpleFormAdultPax.getValue()
    var infant = inSimpleFormInfantPax.getValue()
    var total = inSimpleFormTotalPax.getValue()
    var remarks = inSimpleFormRemarks.getValue()
    var isotpdeparture = inSimpleFormIsOTPDeparture.getValue(); 
    var otpdeparture = inSimpleFormOTPDeparture.getValue();
    var isotparrival = inSimpleFormIsOTPArrival.getValue();
    var otparrival = inSimpleFormOTPArrival.getValue();


console.log('etd' , etd) 
console.log('atd' , atd) 

console.log('eta', eta) 
console.log('ata', ata)


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


if (differenceDeparture > 15) {
    console.log("The departure is late.");
    isotpdeparture = 1 
    otpdeparture = differenceDeparture
     
} else {
    console.log("The departure is on time.");
    isotpdeparture = 0 
    otpdeparture = differenceDeparture
}


if(differenceArrival > 15) 
{ 
    console.log('The arrival is late ') 
    isotparrival = 1 
    otparrival = differenceArrival
}
else 
{ 
    console.log('The departure is on time');
    isotparrival = 0 
    otparrival = differenceArrival;
}


    

    var data = { 
        DateIssued:dateissued,
        Airport:airport,
        FlightId:flightid,
        AOC:aoc,
        FlightDate:flightdate,
        Origin:origin,
        Destination:destination,
        STD:std,
        EstimatedTimeDeparture:etd,
        ActualTimeDeparture:atd,
        EstimatedTimeofArrival:eta,
        ActualTimeofArrival:ata,
        AdultPax:adult,
        InfantPax:infant,
        TotalPax:total,
        Remarks:remarks,
        IsOTPDeparture:isotpdeparture, 
        OTPDeparture:otpdeparture,
        IsOTPArrival:isotparrival,
        OTPArrival:otparrival,
    }


    try {
        fetch("http://localhost:8080/api/entity/daily_otp",{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        })
        .then(response => { 
            if(!response.ok) { 
                return response.json().then(errData => { 
                    throw new Error(`Request ${errData.message || response.statusText}`)
                })
                
            }
            return response.json();
        })
        .then(data=>{
            console.log('Success',data)
        })
    
    }catch(e){
        console.error('Error',error)
        
    }
}


function UpdateFlight() {

    let update_data = {}

    update_data.id = modelEditSimpleForm.getData().id


  
    var dateissued = update_data.DateIssued = inEditSimpleFormDateIssued.getValue()
    var aiport = update_data.Airport = inEditSimpleFormAirport.getValue()
    var flightid = update_data.FlightId = inEditSimpleFormFlightId.getValue()
    var aoc = update_data.AOC = inEditSimpleFormAOC.getValue()
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


// function apiMonthly(from, to) {
//   // Your API logic here
//   console.log("From:", from);
//   console.log("To:", to);
// }

function MonthlyOTP() {
     // const normalizedUrl = "http://localhost:8080/api/entity/daily_otp";
  var fromdate = DateRangeSelection.getFrom();
  var todate = DateRangeSelection.getTo();

  var Monthlydata = {
    from: fromdate,
    to: todate,
  };

  apiMonthly(Monthlydata);
}




function DailyOTP() 
{ 
    // Assuming you have a sap.m.DatePicker element with id "myDatePicker"
const datePicker = sap.ui.getCore().byId("DatePicker");
const selectedDate = datePicker.getDateValue();

const formattedDate = selectedDate.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

var options = { 
    data:{"monthly" :formattedDate}
}


apiDailyOTP(options);

console.log(formattedDate); // Output: the selected date as a JavaScript Date object

}
// var fromdate = DateRangeSelection.getFrom()


// var todate = DateRangeSelection.getTo()


// console.log(fromdate)


// console.log(todate)


