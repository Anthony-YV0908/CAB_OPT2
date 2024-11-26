// const entity = await entities.daily_otp.createQueryBuilder("alias")
//     .where("alias.id = :id", {id: 1})
//     .getOne();

const entity = await entities.daily_otp.createQueryBuilder("alias")

    .getMany();


console.log('entity ' , entity)