

const dummyApiResponse = {
   showLightAndDarkMode : true,
   showTicTacToeBoard : true,
   showRandomColorGenerator: true,
   showAccordian : false
}

function featureFlagDataServiceCall(){
   return new Promise((resolve, reject) =>{
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject('Some error occured! Please try again.');
   });
}