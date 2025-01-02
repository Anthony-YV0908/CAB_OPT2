
const data = req.body

const dailyotp = await entities.daily_otp.createQueryBuilder("alias")
     .where("isDeleted = :isDeleted", { isDeleted: 0 })
    .getMany();

console.log('this is airports', dailyotp); 

result = dailyotp;


complete();






// log.info(data.monthly)

// complete()