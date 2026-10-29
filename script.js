// var customer = {
//     Name : "Ajith",
//     Age : 24,
//     AccountType : "Savings",
//     Balance : 50000,
//     Transactions:[5000 , -2000,3000,-1500]
// }

// customer.Transactions.push(10000)
// customer.Balance = customer.Balance + 10000

// customer.Transactions.push(7000)
// customer.Balance = customer.Balance -7000


// customer.Transactions.pop()
// customer.Balance = customer.Balance +7000

// customer.Transactions.push(15000)
// customer.Balance = customer.Balance + 15000

// var totalDeposit = 10000 + 5000 + 15000 + 3000

// var totalWithdrawals = 2000  + 1500 

// var numberTransation = customer.Transactions.length 

// var netTranactionAmount = customer.Balance
// console.log()
// console.log(totalDeposit)
// console.log(totalWithdrawals)
// console.log(numberTransation)
// console.log(netTranactionAmount)

// var withdrawal = prompt("Enter the withdrawal amount")

// if(withdrawal >= 0){
//     if(withdrawal<=customer.Balance){
//         if(customer.Age>=18){
//             if(customer.Balance-withdrawal<10000){
//                 console.log("Warning Balance less then 10000")
//                 customer.Balance = customer.Balance-withdrawal
//                 totalWithdrawals = totalWithdrawals+withdrawal
//                 customer.Transactions.push(-withdrawal)
//                 console.log("Balance amount:",customer.Balance)
                
//             }else{
//                 customer.Balance = customer.Balance-withdrawal
//                  totalWithdrawals = totalWithdrawals+withdrawal
//                 customer.Transactions.push(-withdrawal)
//                 console.log("Balance amount:",customer.Balance)

//             }
//         }else{
//             console.log("Age Must be 18")
//         }

//     }else{
//         console.log("Balance is less than withdrawaal")
//     }
// }else{
//     console.log("enter a amount Greater than zero")
// }



// if (customer.Balance >= 75000){
//     console.log("Premium Customer")
//     customer.AccountStatus = "Premium Customer"
// }else if (customer.Balance >= 40000){
//     console.log("Standard Customer")
//     customer.AccountStatus = "Standard Customer"
// }else if (customer.Balance >= 10000){
//     console.log(" Basic Customer")
//     customer.AccountStatus = "Basic Customer"
// }else{
//     console.log(" Low Balance ")
// }



// if (customer.Balance >=50000 && customer.Age >= 21){
//     console.log("Customer have Premium Benefits")
// }else if (totalDeposit>=20000 || customer.Balance >=75000 ){
//     console.log(" Special Deposit Offer")}
//     else if (customer.Age < 18 || customer.Balance <0 ){
//     console.log("security alert")}


var customer={
        Name: "Ajith",
        Age: 27,
        membership:"Premium",
        RoomTypes: ["Deluxe", "Standard", "Suite"],
        RoomPrices:[3000, 2000, 5000],
        NumberofNights: [2, 3, 1],
        booked:[1,2,3,4,5]

}





customer.RoomTypes.push("Executive")
customer.RoomPrices.push(4000)
customer.NumberofNights.push(2)
customer.RoomTypes.push("Family")
customer.RoomPrices.push(6000)
customer.NumberofNights.push(2)
customer.RoomTypes.pop()
customer.RoomPrices.pop()
customer.NumberofNights.pop()
customer.RoomTypes.push("Lexuary")
customer.RoomPrices.push(8000)
customer.NumberofNights.push(3)

var roomd=(customer.RoomPrices[0] * customer.NumberofNights[0])
var rooms=(customer.RoomPrices[1] * customer.NumberofNights[1])
var roomsu=(customer.RoomPrices[2] * customer.NumberofNights[2])
var roome=(customer.RoomPrices[3] * customer.NumberofNights[3])
var rooml=(customer.RoomPrices[4] * customer.NumberofNights[4])

console.log(customer)
console.log(roomd)
console.log(rooms)
console.log(roomsu)
console.log(roome)
console.log(rooml)

var rcosts= roomd+rooms+roomsu+rooml
console.log(rcosts)
console.log(customer.booked[0]+customer.booked[1]+customer.booked[2]+customer.booked[3]+customer.booked[4])
var avg=(rcosts/5)
console.log(avg)
console.log(customer.NumberofNights[0]+customer.NumberofNights[1]+customer.NumberofNights[3]+customer.NumberofNights[4])

if(rcosts>30000&&customer.membership=="Premium"){
    console.log("20% discount")
    var discount =(rcosts*20)/100
    var fb=(rcosts-discount)
    console.log(fb)
}else if(rcosts>20000){
    console.log("15% discount")
    var discount =(rcosts*15)/100
    var fb=(rcosts-discount)
    console.log(fb)
}else if(rcosts>10000&&customer.membership=="Premium"){
    console.log("10% discount")
    var discount =(rcosts*10)/100
    var fb=(rcosts-discount)
    console.log(fb)
}else{
    console.log("No discount is applied")
}

var sc=(fb*5)/100
var fm=(fb+500)
var lastft=(sc+fm)
console.log(sc);
console.log(fm)
console.log(lastft);

if(customer.membership=="Premium"&&lastft>=25000){
    console.log("free breakfast eligibility")
}else if(customer.membership=="Premium"&&customer.NumberofNights>=4){
    console.log("free airport pickup")
}else if(customer.Age==25&&customer.NumberofNights>=6){
    console.log("special customer offer")
}else if(lastft>=40000||customer.RoomTypes=="Lexuary"){
    console.log("lexuary booking alert");
}





