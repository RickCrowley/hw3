function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  levelOfService = 'Pizza'

  let firstName1 = ride[0].passengerDetails.first
  let lastName1 = ride[0].passengerDetails.last

  passenger1Name = firstName1 +' '+ lastName1
    
  passenger1Phone = ride[0].passengerDetails.phoneNumber
  
  passenger1NumberOfPassengers = ride[0].passenger1NumberOfPassengers
  
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address

  passenger1PickupAddressLine2 = ride[0].pickupLocation.city +', '+ ride[0].pickupLocation.state +' '+ ride[0].pickupLocation.zip

  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address

  passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city +', '+ ride[0].dropoffLocation.state +' '+ ride[0].dropoffLocation.zip

  let firstName2 = ride[1].passengerDetails.first
  let lastName2 = ride[1].passengerDetails.last

  passenger2Name = firstName2 +' '+ lastName2
    
  passenger2Phone = ride[1].passengerDetails.phoneNumber
  
  passenger2NumberOfPassengers = ride[1].passenger2NumberOfPassengers
  
  passenger2PickupAddressLine1 = ride[1].pickupLocation.address

  passenger2PickupAddressLine2 = ride[1].pickupLocation.city +', '+ ride[1].pickupLocation.state +' '+ ride[1].pickupLocation.zip

  passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address

  passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city +', '+ ride[1].dropoffLocation.state +' '+ ride[1].dropoffLocation.zip

  let firstName3 = ride[2].passengerDetails.first
  let lastName3 = ride[2].passengerDetails.last

  passenger3Name = firstName3 +' '+ lastName3
    
  passenger3Phone = ride[2].passengerDetails.phoneNumber
  
  passenger3NumberOfPassengers = ride[2].passenger2NumberOfPassengers
  
  passenger3PickupAddressLine1 = ride[2].pickupLocation.address

  passenger3PickupAddressLine2 = ride[2].pickupLocation.city +', '+ ride[2].pickupLocation.state +' '+ ride[2].pickupLocation.zip

  passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address

  passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city +', '+ ride[2].dropoffLocation.state +' '+ ride[2].dropoffLocation.zip

  // levelOfService
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}