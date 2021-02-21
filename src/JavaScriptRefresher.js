// <!DOCTYPE html>
// function JavaScriptRefresher() {
//     const numbers= [0, 3.14, 9.81, 37, 98.6, 100]
//     const friuts = ['banana', 'orange', 'mango', 'lemon']
//     const vegatables = ['Tomoto', 'potato', 'Cabbage', 'Onion', 'Carrot']
//     const webTechs =['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']
//     const countries=['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
//     return (
//         <div>
    
//         {/* <title>30DaysOfScipt:Inline Script</title>
//         <script>console.log('Welcome to 30DaysOfJavaScript')</script>
    
    
//         {/* <button onclink="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button> */}
//         <script>console.log('Welcome to 30DaysOfJavaScript')</script>
//         <script>let firstName='Vaziuddin'
//         firstName='Eyob'
//         const PI=3.14</script> */}
//         <div>
//             <p>Array</p><script>
//             {/* const arr =Array()
//             console.log(arr)

//             const arr1=[]
//             console.log(arr1) */}
//             console.log('Numbers:',numbers);
//             console.log('Number of numbers:',numbers.length)
//             </script>
//         </div>
//     </div>
//     );
// }
// export default JavaScriptRefresher;
let firstName = 'Vaziuddin'
firstName='Mohammed'
const arr =Array()
console.log(arr)
const arr1 =[]
console.log(arr1)
const numbers=[1, 2, 3, 4, 5, 3, 1, 2]
const friuts =['banana', 'orange', 'mango', 'lemon']
const vegatables =['Tomato', 'orange', 'Cabbage', 'Onion', 'Carrot']
const animalProducts = ['milk', 'meat','butter', 'yoghurt']
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log('Numbers:', numbers)
console.log('Number of numbers:',numbers.length)
console.log('Friuts:', friuts)
console.log('Number of Friuts',friuts.length)
console.log('Vegatables',vegatables)
console.log('Number of  Vegatables:', vegatables.length)
console.log('Animals: ',animalProducts)
console.log('Number of Animal Product',animalProducts.length)
console.log('Web technologies:', webTechs)
console.log('Number of WebTechnologies', webTechs.length)
console.log('Countries:',countries)
console.log('Number of countries',countries.length)
const arr2 =[
  'vaziuddin', '250', true,
  {country:'Finland', city:'Helsinki'},
  {skills:['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(arr2)
let js ='JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies=companiesString.split(',')
console.log(companies)
let txt = 'I love tecahing and empowering people. I teach HTML, CSS, Js, React, Python.'
const words =txt.split('')
console.log(words)
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0]
console.log(firstFruit)
secondFruit = fruits[1]
//console.log(secondFruit)
let lastIndex = fruits.length-1
lastFruit =fruits[lastIndex]

console.log(numbers.length)
console.log(numbers)
console.log(numbers[0])
console.log(numbers[5])
let lastIndex1 = numbers.length-1
console.log(numbers[lastIndex1])

console.log(webTechs)
console.log(webTechs.length)
console.log(webTechs[0])
console.log(webTechs[6])
let lastIndex2 =webTechs.length-1
console.log(webTechs[lastIndex2])

const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
console.log(countries1)
console.log(countries1[0])
console.log(countries1[10])
let lastIndex3 =countries1.length-1
countries1[lastIndex3] ='korea'
console.log(countries1)
const eightEmptyValues = Array(8)
console.log(eightEmptyValues)

const eightXValues=Array(8).fill('X')
console.log(eightXValues)
const eight0Values = Array(8).fill(0)
console.log(eight0Values)
const four4Values = Array(4).fill(4)
console.log(four4Values)
const secondList =[4, 5, 6]
const thirdList = four4Values.concat(secondList)
console.log(thirdList)
console.log(friuts)
console.log(vegatables)
const friutsAndVegatables =friuts.concat(vegatables)
console.log(friutsAndVegatables)
console.log(numbers.length)
console.log(numbers)
console.log(numbers.indexOf(100))
console.log(numbers.indexOf(0))
console.log(numbers.indexOf(3.14))
console.log(numbers.indexOf(5))
let index = fruits.indexOf('banana')
if(index!=-1){
  console.log('This fruits does exist in the array')
} else{
  console.log('This fruits does not exist in the array')
}
let indexOfAvocado = fruits.indexOf('avocado')
if(index!=-1){
  console.log('This fruits does exist in the array')
} else{
  console.log('This fruits does not exist in the array')
}
index !=-1
? console.log('This  fruits does exist in the array')
: console.log('This fruits does not exist in the array')
console.log(numbers.lastIndexOf(2))
console.log(numbers.lastIndexOf(0))
console.log(numbers.lastIndexOf(1))
console.log(numbers.lastIndexOf(4))
console.log(numbers.lastIndexOf(6))
console.log(numbers.includes(5))
console.log(numbers.includes(0))
console.log(numbers.includes(1))
console.log(numbers.includes(6))
console.log(webTechs.includes('Node'))
console.log(webTechs.includes('C'))
console.log(numbers.toString())
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString())
console.log(names.join())
console.log(names.join(''))
console.log(names.join(','))
console.log(names.join(' '))
console.log(names.join(' # '))
console.log(webTechs.join())
console.log(webTechs.join(' # '))
console.log(numbers.slice())
console.log(numbers.slice(0))
console.log(numbers.slice(0, numbers.length))
console.log(numbers.slice(1, 4))
console.log(numbers.splice())
console.log(numbers.splice(0, 1))
console.log(numbers.splice(3, 3, 7, 8, 9))
numbers.push(6)
console.log(numbers)
numbers.push(10)
console.log(numbers)
numbers.pop()
console.log(numbers)
friuts.push('apple')
console.log(friuts)
fruits.push('lime')
console.log(fruits)
numbers.shift()
console.log(numbers)
numbers.reverse()
console.log(numbers)
numbers.reverse()
console.log(numbers)
webTechs.sort()
console.log(webTechs)
webTechs.reverse()
console.log(webTechs)
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
const arrayOfArray =[ [1, 2, 3], [1, 4 , 9]]
console.log(arrayOfArray[0])
const frontEnd = ['HTML', 'CSS',  'JS',  'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])
let num =3
if (num>0){
  console.log(`${num} is a positive number`)
}
let isRaining = true
if(isRaining){
  console.log('Remember to take your rain coat.')
}

if(num>0){
  console.log(`${num} is a positive number.`)
}else {
  console.log(`${num} is a negative number`)
}
if(isRaining){
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
isRaining = false
if(isRaining){
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
let a =0
if(a > 0){
  console.log(`${a} is a positive number`)
} else if(a< 0){
  console.log(`${a} is a negative number`)
} else if( a == 0){
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
let weather = 'sunny'
if(weather === 'rainy'){
  
  console.log('You need a rain coat.')
} else if(weather==='cloudy'){
  console.log('It might be cold, you need a jacket.')
}else if(weather==='sunny'){
  console.log('Go out freely.')
} else{
  console.log('No need for rain coat.')
}
let weather1 = 'cloudy'
switch(weather1){
  case 'rainy': console.log('You need a rain coat.') 
    break
  case 'cloudy': console.log('It might be cold, you need a jacket.') 
    break
  case 'sunny': console.log('Go out freely.') 
    break
  default: console.log('No need for rain coat.')
}
//let dayUserInput = prompt('What day is today ?')
dayUserInput='sunday'
let day = dayUserInput.toLowerCase()
switch(day){
  case 'monday': 
    console.log('Today is Monday')
    break
  case 'tuesday': 
    console.log('Today is tuesday')
    break
  case 'wednesday':  
    console.log('Today is Wenesday')
    break
  case 'thursday' : 
    console.log('Today is thursday.')
    break
  case 'friday': 
    console.log('Today is Friday')
    break
  case 'saturday': 
    console.log('Today is Saturday')
    break
  case 'sunday': 
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
// switch (true) {
//   case num> 0: console.log('Number is positive')
//     break
//   case num== 0: console.log('Number is  Zero')
//     break
//   case num < 0 : console.log('Number i s negative')
//     break
//     default :
//     console.log('Entered value was not a number')
// }

// isRaining 
//   ? console.log('You need a rain coat.')
// : console.log('No need for a rain coat.')

// for(let i=0; i<6;i++){
//   console.log(i)
// }

// let sum =0
// for(let i =0;i<10;i++){
//   sum +=i
// }
// console.log(sum)
// let sum2 =0
// for(let j=0;j<10; j += 2){
//   sum2 += j
// }
// console.log(sum2)
// let total = 0
// let k
// for( k=0; i<10;i++){
//   if(i%2==0){
//     total +=i
//   }
// }
// console.log(total)
// const nums1  = [1, 2, 3, 4, 5, 6]
// for(let in=1; in<6; in++){
//   console.log(nums1[in])
// }
// for(let i=5; i>=0;i--){
//   console.log(i)
// }
// const nums4  =[1, 2, 3, 4, 5]
// const lastIndex4 = nums4.length-1
// const newArray = []
// for( let i = lastIndex4; i>= 0;i--){
//   newArray.push(nums4[i])
// }
// console.log(newArray)
// let count =4
// while(count>0){
//   console.log(count)
//   count--
// }
// let count =0
// do{
//   console.log(count)
//   count++
// }while (count<11)
// const numbers2 = [1, 2, 3, 4, 5]
// for(const number of numbers2){
//   console.log(number)
// }