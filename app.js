const CronJob = require('cron').CronJob;
const puppeteer = require('puppeteer');
const parse = require('./parse')

let work = new CronJob('*/1 * * * *',async function(){

 let  x  = await parse()

console.log(`tik: ${x.row1[0]}, open: ${x.row1[4]}, close: ${x.row1[2]}, per: ${x.row1[3]}% `)
console.log(`tik: ${x.row2[0]}, open: ${x.row2[4]}, close: ${x.row2[2]}, per: ${x.row2[3]}% `)
console.log(`tik: ${x.row3[0]}, open: ${x.row3[4]}, close: ${x.row3[2]}, per: ${x.row3[3]}% `)
console.log(`tik: ${x.row4[0]}, open: ${x.row4[4]}, close: ${x.row4[2]}, per: ${x.row4[3]}% `)
console.log(`tik: ${x.row5[0]}, open: ${x.row5[4]}, close: ${x.row5[2]}, per: ${x.row5[3]}% `)
console.log('начало новой строки')
     
})

work.start();