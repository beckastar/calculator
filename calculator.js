$( document ).ready(function() {

//refactoring to create a list of numbers instead of separate variables  
	var numbersArray = [];
	var operatorsArray =[];
	var current_num = "";
	//join
	//eval
	//clear array
	var currentOperator = "";
	var totalDiv = $("total");
	$('.calculator a').click(function(event) {
		console.log('blah');
		var currentOperator =  $(event.target).html();
		if ($(event.target).parent().hasClass('operators')) {
			console.log('operator clicked', currentOperator, "numbersArray", numbersArray);
		}
	})

	$(".numbers a").click(function(event){
		//while clicking number
		var val= $(event.target).html();
		console.log(val)
		current_num += val;
		console.log(current_num)
		$("div #total").text(current_num)
		})
		//if click operator, add number to array
	$(".operators a").click(function(event){
		if (current_num.length > 0){
			numbersArray.push(current_num);
			current_num = ""
			currentOperator += $(event.target).html();
			console.log(currentOperator)
			console.log("current_num"+current_num + ","+"numbersArray"+ numbersArray)

			}
	$(".equals a").click(function(event){
		numbersArray.push(current_num);
		console.log(numbersArray)
		operatorsArray.push(currentOperator);
		current_num = ""
		x = parseInt(numbersArray[0])
		y= parseInt(numbersArray[1])
		if (numbersArray.length==2 && currentOperator.length==1){
			switch(operatorsArray[operatorsArray.length-1]){
				case "+":
					$("div #total").html(x+y);
					break;
				case "-":
					$("div #total").html(x-y);
					break;
				case "*":
					$("div #total").html(x*y);
					break;
				case "/":
					$("div #total").html(x/y);
					break;
				default: $("div #total").text("NAN")
			}
		}
	})
		})
	

// $(".operators > a").click(function(){
// 		operator += $(this).html();  
// 		var result=0;
// 		console.log($(this).attr("id"))
// 		console.log(typeof(number))
// 		if (number.toString.length==0){
// 			$("#total").text("error")
// 		}
// 		else if (this.id = "add"){
// 			result = eval(number + secondNumber);
// 			console.log(result)
// 			$("#total").text(result)
// 		}
// 		else if (this.id ="subtract"){
			
// 		}
// 		result = result.toString();
// 		$("#total").text(result)
// 	});


	$("#clearall").click(function(){
		number = "";
		secondNumber = "";
		operator = "";
		$("#total").text(" ")
	})
	$("#clear").click(function(){

		$("#total").text()
	})

    //store operation
    // take another number
    // perform operation
    //display total
    // functionality for c and ac
});