var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {

    if(count < 1) {
        return "Number cannot be zero/negative"
    }
    for(var i=1; i<=count; i++) {

        chocolates.unshift(color);
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    var a=[];
    var len=chocolates.length;
    if(len<number)
    {
        return "Insufficient chocolates in the dispenser";

    }
    if(number<=0)
    {
      return   "Number cannot be zero/negative";
    }
    for(var i=0;i<number;i++)
    {
        a.push(chocolates.shift());
    }
    return a;
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    if(number<1) {
        return "Number cannot be zero/negative"
    }
    if(number > chocolates.length) {
        return "Insufficient chocolates in the dispenser"
    }
    var arr = chocolates.slice((chocolates.length - number), chocolates.length);
    return arr;
}



//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color)
{
    let a=[];
    var fav=0;
    if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    if(number<=0)
    return "Number cannot be zero/negative";
    for(var i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color)
        {
        a.push(chocolates.pop());
        fav ++;
        if(fav==number)
        return a;
        }
    }
    if(fav!=number)
    return "Insufficient chocolates in the dispenser";
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates)
{
    
    let a=[];
       for(var i=0;i<chocolates.length;i++)
       {
           if(chocolates[i]!==0)
           {
           var count=1;
           for(var j=i+1;j<chocolates.length;j++)
           {
               if(chocolates[i]==chocolates[j])
               {
               count ++;
               chocolates[j]=0;
               }
           }
           a.push(count);
        }
       }
       return a;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
{
     let color=[];
    let arr=[];
       for(var i=0;i<chocolates.length;i++)
      {
           if(chocolates[i]!=0)
        {
           var count=1;
           for(var j=i+1;j<chocolates.length;j++)
           {
               if(chocolates[i]==chocolates[j])
               {
               count ++;
               chocolates[j]=0;
               }
           }
           arr.push(count);
           color.push(chocolates[i]);
         }
      }
      for(var i=0;i<arr.length;i++)
      {
          for(var j=0;j<arr.length-1-i;j++)
          {
              if(arr[j]<arr[j+1])
              {
                var  temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                let tempo=color[j];
                color[j]=color[j+1];
                color[j+1]=tempo;

              }
          }
      }
      let sorted_color_array=[];
      for(var i=0;i<color.length;i++)
      {
          for(var j=0;j<arr[i];j++)
          {
              sorted_color_array.push(color[i]);
          }
      }
      return sorted_color_array;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
 function changeChocolateColor(chocolates,number, color, newColor)
 {
     var count=0;
     if(chocolates.length==0)
     return chocolates;
    if(number<=0)
    return "Number cannot be zero/negative";
    if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==newColor)
        return "Can't replace the same chocolates";
        if(chocolates[i]==color)
        {
            chocolates[i]=newColor;
            count ++;
            if(count==number)
            return chocolates;

        }
    }
    if(count<number)
    return "Insufficient chocolates in the dispenser";

 }


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, newColor)
{
    if(color == newColor) {
        return "Can't replace the same chocolates";
    }
    
    for(var i = chocolates.length;i>=0;i--)
    {
        if(chocolates[i]==color)
            chocolates[i] = newColor;
    }
    let ret = [chocolates.length,chocolates];
    return ret;
}
