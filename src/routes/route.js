const express = require('express');
const ldash=require('lodash')
//const abc = require('../introduction/intro')
const router = express.Router();
//const externalModule = require('../logger/logger')
//const utilHelperModule=require('../util/helper')
//const validFormatter=require('../validator/formatter')

router.get('/test-me', function (req, res) {
    //console.log('My batch is', abc.name)
   // abc.printName()
    //externalModule.welcome()
    //utilHelperModule.printDate()
    //utilHelperModule.printMonth()
    //utilHelperModule.getBatchInfo()
    //console.log("string after triming: "+validFormatter.trimName)
    //console.log("string after lower case: "+validFormatter.toLower)
    //console.log("string after upper case: "+validFormatter.toUpper)
    //1.array of month chunk
    //const arr1=["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"]
    //console.log(ldash.chunk(arr1, [size=3]))
    //2.array of odd number tail
    //const arr2=[1,3,5,7,9,11,13,15,17,19]
    //console.log(ldash.tail(arr2))
    //3.five array merge using union
    //const a1=[1,7,56]
    //const a2=[60,7,1]
    //const a3=[89,9,10]
    //const a4=[6,4,3]
    //const a5=[1,4,60]
    //console.log(ldash.union(a1,a2,a3,a4,a5))
    //4. using fromPairs
   // const movie=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    //console.log(ldash.fromPairs(movie))
 res.send('My second ever api!')
});

// movies accessing solution
router.get("/movies", function (req, res) {
    // list of movie is response
    const movies = [
      "Rang de basanti",
      "The shining",
      "Lord of the rings",
      "Batman begins",
    ];
    
    res.send(movies);
  });


  router.get("/movies/:index", function (req, res) {
    // list of movie is response by index id
    const movie = [
      "Rang de basanti",
      "The shining",
      "Lord of the rings",
      "Batman begins",
    ];
    
    if (req.params.index>= movie.length) {
      console.log("use a valid index");
      res.send("use a valid index");
    }
    const i = req.params.index;
    res.send(movie[i]);
  });


  // films accessing solution
router.get("/films", function (req, res) {
   // fims accessing using /films
    const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  res.send(films);
});

// films accessing using filmid
router.get("/films/:filmid", function (req, res) {
     
    const films = [
      {
        id: 1,
        name: "The Shining",
      },
      {
        id: 2,
        name: "Incendies",
      },
      {
        id: 3,
        name: "Rang de Basanti",
      },
      {
        id: 4,
        name: "Finding Nemo",
      },
    ];
    if(req.params.filmid >=5){
           res.send("No movie exists with this id")
     }
    const i=req.params.filmid-1
     
    res.send(films[i]);
  });






router.get('/test-you', function(req, res){
    
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})


//Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this


//1. method 
router.get("/soln1", function (req, res) {
  //     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
      let arr= [1,2,3,5,6,7]
      let missingNumber
      
      let sumArr=0;
      ///LOGIC WILL GO HERE 
      let lastNumber=arr[arr.length-1]
      for (let i= 0; i < arr.length; i++) {
          sumArr = sumArr+arr[i]; 
      }
      missingNumber=(lastNumber*(lastNumber+1))/2-sumArr
  
      if(missingNumber==0){
          missingNumber="no any number is missing";
      }
      res.send(  { data: missingNumber  }  );
  });
  
  
  
  
  //Q2. 
  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  // Your route code will look like this
  router.get("/soln2", function (req, res) {
          //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
          let arr= [33, 34, 35,37, 38]
          let missingNumber1
          ///LOGIC WILL GO HERE 
          let totalNumber=(arr.length+1)*(arr[0]+arr[arr.length-1])/2
          console.log(totalNumber)
          let arrSum3=0;
          for (let i = 0; i <arr.length; i++) {
              arrSum3 =arrSum3+arr[i];
          }
          console.log(arrSum3);
          missingNumber1=totalNumber-arrSum3;
          res.send(  { data: missingNumber1  }  );
  });
module.exports = router;
// adding this comment for no reason