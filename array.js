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