var breakfastArray = [];
var lunchArray = [];
var dinnerArray = [];
var snacksArray = [];
var breakfastCalories = [];
var lunchCalories = [];
var dinnerCalories = [];
var snacksCalories = [];
var mealSelector = $("#mealSelector").val();
var breakfastCalItem = 0;
var lunchCalItem = 0;
var dinnerCalItem = 0;
var snacksCalItem = 0;

google.charts.load("current", { packages: ["corechart"] });

// Save user info to local storage 
function userInfo() {
}
// Call API to log food intake 
$("#searchBtn").click(foodLogger);
function foodLogger() {
    var foodSearch = $("#foodSearch").val().trim();
    var queryURL = "https://api.nutritionix.com/v1_1/search/" + foodSearch + "?results=0:20&fields=item_name,nf_calories&appId=ebe70e9f&appKey=fd53e313cdb8d5c240702e52977603c3";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //
        .then(function (response) {
            var results = response.hits;
            console.log(results)
            for (var i = 0; i < 7; i++) {
                console.log(results[i].fields.item_name)
                console.log(results[i].fields.nf_calories)
            }
            $(".hide").removeClass("hide");
            $("#foodBtn0").text(response.hits[0].fields.item_name);
            $("#foodBtn1").text(response.hits[1].fields.item_name);
            $("#foodBtn2").text(response.hits[2].fields.item_name);
            $("#foodBtn3").text(response.hits[3].fields.item_name);
            $("#foodBtn4").text(response.hits[4].fields.item_name);
            $("#foodBtn5").text(response.hits[5].fields.item_name);
            $("#foodBtn6").text(response.hits[6].fields.item_name);
            $("#foodBtn0").attr("data-food-name", response.hits[0].fields.item_name);
            $("#foodBtn0").attr("data-food-calories", response.hits[0].fields.nf_calories)
            $("#foodBtn1").attr("data-food-name", response.hits[1].fields.item_name);
            $("#foodBtn1").attr("data-food-calories", response.hits[1].fields.nf_calories)
            $("#foodBtn2").attr("data-food-name", response.hits[2].fields.item_name);
            $("#foodBtn2").attr("data-food-calories", response.hits[2].fields.nf_calories)
            $("#foodBtn3").attr("data-food-name", response.hits[3].fields.item_name);
            $("#foodBtn3").attr("data-food-calories", response.hits[3].fields.nf_calories)
            $("#foodBtn4").attr("data-food-name", response.hits[4].fields.item_name);
            $("#foodBtn4").attr("data-food-calories", response.hits[4].fields.nf_calories)
            $("#foodBtn5").attr("data-food-name", response.hits[5].fields.item_name);
            $("#foodBtn5").attr("data-food-calories", response.hits[5].fields.nf_calories)
            $("#foodBtn6").attr("data-food-name", response.hits[6].fields.item_name);
            $("#foodBtn6").attr("data-food-calories", response.hits[6].fields.nf_calories)
            // }
        });
};
function userInfo() {
}

$(".foodOption").click(saveFood);
// Save foods to local storage 
function saveFood() {
    var mealSelector = $("#mealSelector").val();
    var foodItem = $(this).attr("data-food-name");
    var foodCalories = $(this).attr("data-food-calories");
    if (mealSelector == "breakfast") {
        console.log(mealSelector);
        breakfastArray.push(foodItem);
        breakfastCalories.push(foodCalories);
        console.log(foodItem);
        console.log(foodCalories);
        $(".breakfastTableBody").empty();
        console.log(breakfastArray);
        for (i = 0; i < breakfastArray.length; i++) {
            // Create a new table row element
            var tRow = $("<tr>");
            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var food = $("<td>").text(breakfastArray[i]);
            var calories = $("<td>").text(breakfastCalories[i]);
            // Append the newly created table data to the table row
            tRow.append(food, calories);
            // Append the table row to the table body
            $(".breakfastTableBody").append(tRow);
            console.log(parseInt(breakfastCalories[i]))
        }

        breakfastCalItem += parseInt(foodCalories)

    }
    if (mealSelector == "lunch") {
        console.log(mealSelector);
        lunchArray.push(foodItem);
        lunchCalories.push(foodCalories);
        console.log(foodItem);
        console.log(foodCalories);
        $(".lunchTableBody").empty();
        console.log(lunchArray);
        for (i = 0; i < lunchArray.length; i++) {
            // Create a new table row element
            var tRow = $("<tr>");
            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var food = $("<td>").text(lunchArray[i]);
            var calories = $("<td>").text(lunchCalories[i]);
            // Append the newly created table data to the table row
            tRow.append(food, calories);
            // Append the table row to the table body
            $(".lunchTableBody").append(tRow);
        }
        lunchCalItem += parseInt(foodCalories)
    }
    if (mealSelector == "dinner") {
        console.log(mealSelector);
        dinnerArray.push(foodItem);
        dinnerCalories.push(foodCalories);
        console.log(foodItem);
        console.log(foodCalories);
        $(".dinnerTableBody").empty();
        console.log(dinnerArray);
        for (i = 0; i < dinnerArray.length; i++) {
            // Create a new table row element
            var tRow = $("<tr>");
            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var food = $("<td>").text(dinnerArray[i]);
            var calories = $("<td>").text(dinnerCalories[i]);
            // Append the newly created table data to the table row
            tRow.append(food, calories);
            // Append the table row to the table body
            $(".dinnerTableBody").append(tRow);
        }
        dinnerCalItem += parseInt(foodCalories)
    }
    if (mealSelector == "snack") {
        console.log(mealSelector);
        snacksArray.push(foodItem);
        snacksCalories.push(foodCalories);
        console.log(foodItem);
        console.log(foodCalories);
        $(".snacksTableBody").empty();
        console.log(snacksArray);
        for (i = 0; i < snacksArray.length; i++) {
            // Create a new table row element
            var tRow = $("<tr>");
            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var food = $("<td>").text(snacksArray[i]);
            var calories = $("<td>").text(snacksCalories[i]);
            // Append the newly created table data to the table row
            tRow.append(food, calories);
            // Append the table row to the table body
            $(".snacksTableBody").append(tRow);
        }
        snacksCalItem += parseInt(foodCalories)
    }




    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Calories per Meal'],
            ['Breakfast', breakfastCalItem],
            ['Lunch', lunchCalItem],
            ['Dinner', dinnerCalItem],
            ['Snacks', snacksCalItem],
        ]);

        var options = {
            fontName:'Unica One',
            fontSize: '25',
            title: 'Daily Calorie Breakdown',
            pieHole: 0.4,
            is3D: true,
            backgroundColor: { fill:'transparent' }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options)
    
}};
