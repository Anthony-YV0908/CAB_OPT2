
const data = req.body

const airports = await entities.daily_otp.createQueryBuilder("alias")
    .where("alias.isDeleted = :isDeleted", { isDeleted: 0 }) // First condition
     .andWhere("alias.DateIssued = :DateIssued", { DateIssued: data.monthly }) // Second condition
    .getMany();

console.log('this is airports', airports); // Output only the Airport values

result = airports;

log.info(data.monthly)
complete();


// log.info(data.monthly)

// complete()