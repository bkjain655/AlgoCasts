# AlgoCasts

New things which I learnt as part of Course 

Array.every method can be used to check whether each element in the array matches the condition. We used this for Palindrome check to compare 1st Char with Last Char, 2nd with Last - 1 char and so on.

Array.slice method can be used to generate a Chunk of array. Slice takes 2 arguments (Starting index, before index which should be added to new arr).

Math.sign method returns -1, 0, 1 depending on the argument passed 
e.g. : Math.sign(-112) === -1 // TRUE
Math.sign(100) === 1 // TRUE

Anagrams can also be checked by doing Array.sort and comparing as strings.

You can access specific char in a string either by using charAt or by using array notation e.g. str[1];

For Recursion, find out the base case through which you can exit from recursed function. Also in most of the cases thought process should be in top-down.