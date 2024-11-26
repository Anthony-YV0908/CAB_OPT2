
const airports = await entities.daily_otp.createQueryBuilder("alias")
    .where("alias.isDeleted = :isDeleted", { isDeleted: 1 }) // Filter 
    .getMany();

console.log('this is airports',airports); // Output only the Airport values


result = airports

complete();