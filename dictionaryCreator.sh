#!/bin/bash

# Type arrays
words=(A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z)
numbers=(0 1 2 3 4 5 6 7 8 9)
combined=("${words[@]}" "${numbers[@]}")

# Read
for (( x=0; x<10; x++)); do

	# Generate random number according to its array length
	arrLength=${#combined[@]}
	randomChar=$((0 + RANDOM % arrLength))
	newPass=(x)
done

echo $newPass