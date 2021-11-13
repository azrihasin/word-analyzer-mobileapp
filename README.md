# Word Analyzer App
Muhammad Azri bin Hasin 1813785

* The app take text input and change the word state to the current input State.

* The Analyze button then activate count funtion that its functionalities is to count the vowel, consonent and total word.

# Vowels

```
var vowels = str.split('').filter(c => ['a','e','i', 'o','u'].includes(c)).join('');
```

The string passed will split into array which the passed to array filter function. Include araay function the will return only vowel character and joined into string again


# Consonant

```
 var consonant= str.split('').filter(c => !['a','e','i', 'o','u'].includes(c)).join('');
 ```
 The consonant are same with vowels except we use exclamation mark to include other than vowel characters.
 
 ```
 .length
 ```
 then used to count then length of word that has been passed and consonent/vowel value that has been produced.
 
 * Use state then used to update the state into our current consonent, vowel and character lenght value. 
 
