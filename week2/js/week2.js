function footer_date(){
    let date = new Date()
    let year = date.getFullYear()
  
    document.getElementById('year').textContent = year;
  }
  
  footer_date()

function larger_num(input){
    let search_array = [1,2,2,3,4,5,6,7,8,9,10,20,25,30,35,40,45,50,75,100]
    let larger_num_array = []
    
    //This loop will simply compare if the input is small than the a given item in a list.
    for(let i = 0; i < search_array.length; i++){
        if (input <= search_array[i]){
            console.log(search_array[i])
            larger_num_array.push(search_array[i])
        }
    }

    console.log(larger_num_array)
}

larger_num(25)


function bubble_Sort(array_input){

    let array = array_input;

    //This loop will let us go through each item in the array one at a time
    for(let i = 0; i < array.length; i++)
    {
        //This loop will take the current item in the list, i, and compare it with the rest of the items in the list.
        for(let j = 0; j < ( array.length - i -1 ); j++)
        {
            if (array[i] > array[i + 1]){
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
            }
        }

    }
    //Sorted Array
    console.log(array)
}

bubble_Sort([3,5,1,2])
