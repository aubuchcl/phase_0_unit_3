// U3.W8-9: 
// class GroceryList
//   attr_reader  :list
//   def initialize
//       @list = []
//   end
  
//   def add_item(item)
//       @list << item
//   end
  
//   def remove_item(item)
//     @list.delete(item)
//   end
  
//   def display
//       puts "Your list includes #{@list.inject{|x,y| x+", "+y}}"   
//   end
  
//   def remove_all
//      @list=[] 
//   end
      
//   def include?(item)
//       if @list.include?(item)
//           puts "Your list includes #{item}."
//       else
//           puts "Your list doesn't include #{item}."
//       end
//   end
// end

// I worked on this challenge [by myself, with: ].

// 2. Pseudocode
// create all the variables with functions I might need
// test said functions to make sure they work
// create an empty array
// add them into the object list
// remove methods not needed for jscript
// test


// 3. Initial Solution
// var grocerylist = {}
// list = []
// var addItem = function(item){
// 	list.push(item)
// }

// var removeItem = function(item){
// 	delete list.item 
// }

// var display = function(){
// 	console.log(list)
// }

// var removeAll = function(){
// 	list = []
// }

// var search = function(item){
// 	if (list.indexOf(item) >= 0)
// 	 {newItem = list.indexOf(item)
// 	 console.log(list[newItem] + " is in your bag"}
// 	else
// 		{console.log("It doesnt look like you added that item yet")}
// }
// var grocerylist = {
// 	list: [], addItem: function(item){
// 	list.push(item)}, removeItem: function(item){
// 	delete list.item }, display: function(){
// 	console.log(list)}, removeAll: function(){
// 	list = []}, search: function(item){
// 	if (list.indexOf(item) >= 0)
// 	 {newItem = list.indexOf(item)
// 	 console.log(list[newItem] + " is in your bag"}
// 	else
// 		{console.log("It doesnt look like you added that item yet")}}
// }
// 4. Refactored Solution

groceryList = [];

var removeAll = function(list){
    list.splice(0, list.length)
    };

var list = {addItem: function(item){
    groceryList.push(item)}, removeItem: function(item)
    {groceryList.splice(item) }, 
    search: function(item){
	if (groceryList.indexOf(item) >= 0)
    {console.log("That item is in your bag")}
    else
	{console.log("It doesnt look like you added that item yet")}}};





// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

list.addItem("eggs")

list.removeItem("eggs")
list.addItem("eggs")
list.addItem("eggs")
console.log(groceryList[0])
list.addItem("eggs")
list.search("eggs")


removeAll(groceryList)
console.log(groceryList)




// 5. Reflection 

// This was an interesting assignment.  In javascript you dont really
// need a class to make it work like we did in ruby.  That was pretty enlightening.
// It seems as though script is really good at being non-discriminatory.  I mean 
// that it takes data as data and doesn't rely as healivy on structure as it does on 
// syntax.  I only say this because I can take a really basic class from ruby and basically
// make it a has with two variables outside and it has similar funcitonality.  On the other hand
// I would much rather work this data through ruby due to its flexibility.
// I learned a lot about how to get funcitons defined and inside of objects in script during this exercise.
// It was really fun to see this work.  It was hard to figure out splice properly.