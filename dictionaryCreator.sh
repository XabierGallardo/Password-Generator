#!/bin/bash

# Type arrays
words=(A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z)
numbers=(0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9)
combined=("${words[@]}" "${numbers[@]}")

# Arrays to store characters and passwords 
new_character_array=()
new_password_array=()

# Path to dictionary file
dictionary=dictionaries/dictionary.txt


# Prompt to select number of passwords to generate
read -p "Select number of passwords to create: " passwords

# Prompt to select number of characters
read -p "Select number of characters: " characters

# Prompt to select type of passwords
read -p "Type: w words, n numbers or c combined: " selection


# Loop to generate a sequence of passwords
for (( y=0; y<passwords; y++ )); do


	# Loop to generate a sequence of characters
	for (( x=0; x<characters; x++ )); do


		# Words
		if [ "$selection" == "w" ] || [ "$selection" == "W" ]; then

			# Generate random number according to its array length
			array_length=${#words[*]}
			random_character=$((0 + RANDOM % array_length))
			
			# Create new character based on random location on the array
			new_character=( ${words[random_character]} )
			new_character_array+=($new_character)

		fi


		# Numbers
		if [ "$selection" == "n" ] || [ "$selection" == "N" ]; then
			
			array_length=${#numbers[*]}
			random_character=$((0 + RANDOM % array_length))
			
			new_character=( ${numbers[random_character]} )
			new_character_array+=($new_character)

		fi


		# Combined
		if [ "$selection" == "c" ] || [ "$selection" == "C" ]; then
			
			array_length=${#combined[*]}
			random_character=$((0 + RANDOM % array_length))
			
			new_character=( ${combined[random_character]} )
			new_character_array+=($new_character)

		fi


	done


	# Trim new block of characters, add it to password array and empty array of characters
	password_block=$(echo ${new_character_array[*]} | tr -d ' ')
	new_password_array+=($password_block)
	new_character_array=()
	

done


echo "Generated passwords:${new_password_array[*]}"

# Print our new set of passwords onto our dictionary file
printf '%s\n' ${new_password_array[*]} >> $dictionary