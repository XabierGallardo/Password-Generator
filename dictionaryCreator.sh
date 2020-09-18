#!/bin/bash

# Type arrays
words=(A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z)
numbers=(0 1 2 3 4 5 6 7 8 9)
combined=("${words[@]}" "${numbers[@]}")

# Array to store characters
new_character_array=()


# Path to dictionary file
# dictionary=/Dictionaries/dictionary.txt


# Prompt to select number of characters
read -p "Select number of characters: " characters

# Prompt to select number of passwords to generate
read -p "Select number of passwords to create: " passwords

# Prompt to select type of passwords
read -p "Type: w words, n numbers or c combined: " type



# Loop to generate a sequence of passwords
for (( y=0; y<passwords; y++ )); do


	# Loop to generate a sequence of characters
	for (( x=0; x<characters; x++ )); do


		# Words
		if [ "$type" == "w" ] || [ "$type" == "W" ]; then

			# Generate random number according to its array length
			array_length=${#words[@]}
			random_character=$((0 + RANDOM % array_length))
			
			# Create new character based on random location and add onto array
			new_character=( ${words[random_character]} )
			new_character_array+=($new_character)

		fi


		# Numbers
		if [ "$type" == "n" ] || [ "$type" == "N" ]; then
			
			array_length=${#numbers[@]}
			random_character=$((0 + RANDOM % array_length))
			
			new_character=( ${numbers[random_character]} )
			new_character_array+=($new_character)

		fi


		# Combined
		if [ "$type" == "c" ] || [ "$type" == "C" ]; then
			
			array_length=${#combined[@]}
			random_character=$((0 + RANDOM % array_length))
			
			new_character=( ${combined[random_character]} )
			new_character_array+=($new_character)

		fi


	done

done



# Copy array onto an string and remote spaces
printf -v new_password '%s' "${new_character_array[@]}"
new_password=${new_password:1}

# Print onto screen
echo $new_password



# Must divide each string sequence

# Must add condition to verify if file exists, if not, create it
# if [ -e "$dictionary" ]; then
	#echo $newPass >> test.txt
# fi