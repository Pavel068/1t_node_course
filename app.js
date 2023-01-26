// ====================== Closure (Замыкание)

// function increment(initial = 0) {
//     let counter = initial;
//     return function () {
//         return ++counter;
//     }
// }

// const i = increment(5);
// console.log(i());
// console.log(i());
// console.log(i());
// console.log(i());
// console.log(i());

// ====================== Таймеры
// console.log(1);

// setTimeout(() => {
//     console.log(`Выполнится после 3с`);
// }, 3000);

// console.log(2);

// let a = setInterval(() => {
//     console.log(123);
// }, 2000);

// setImmediate(() => {
//     console.log(`Immediate`);
// });

// process.nextTick(() => {
//     console.log('Next tick');
// });

// setTimeout(() => {
//     clearInterval(a);
// }, 12000);

// ====================== Колбек

// function heavyOperation(limit, cb) {
//     queueMicrotask(() => {
//         let counter = 0;
//         for (i = 0; i < limit; i++) {
//             for (j = 0; j < limit; j++) {
//                 counter = j;
//             }
//         }
//         cb();
//     });
// }

// console.log('Operation 1');
// heavyOperation(20000, () => {
//     console.log('Heavy function complete!');
// })
// console.log('Operation 2');

// ====================== Promise

// function heavyOperationPromise(limit) {
//     return new Promise((resolve, reject) => {
//         heavyOperation(limit, () => {
//             resolve('Heavy operation complete');
//         })
//     });
// }

// console.log('Operation 1');
// heavyOperationPromise(20000).then(response => {
//     console.log(response);
// }).catch(err => {console.error(err);})
// console.log('Operation 2');


// ====================== Async / Await

// ;(async () => {
//     console.log('Operation 1');
//     console.log(await heavyOperationPromise(20000));
//     console.log('Operation 2');
// })();


// ====================== try ... catch

// try {
//     console.log(a + b);
// } catch (e) {
//     console.error(`Произошла ошибка`);
//     throw e;
// } finally {
//     console.log('Блок будет выполнен');
// }


// const task = async () => {
//     try {
//         op(1);
//         op(2);
//         op(3);
//         return result;
//     } catch (e) {
//         throw e;
//     }
// }
// app.get('/', async (req, res) => {
//     try {
//        await task();
//     } catch (e) {
//         console.error(e);
//         return res.status(400).send('error');
//     }
// })