
const data = req.body

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "2-digit",
  month: "numeric",
  day: "numeric"
});

console.log('this is formatted date', formattedDate); // Output: 12/4/24


console.log('this',currentDate)



const dailyotptoday = await entities.daily_otp.createQueryBuilder("alias")
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 }) // First condition
     .andWhere("alias.FlightDate = :FlightDate", { FlightDate:data.monthly }) // Second condition
    .getMany();

console.log('this is airports', dailyotptoday); // Output only the Airport values

result = dailyotptoday;


complete();

