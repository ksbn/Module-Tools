Do not use any tools or programming to solve these problems. Work it out yourself by hand, and fill in the answers.

Do not convert any binary numbers to decimal when solving a question unless the question explicitly tells you to.

The goal of these exercises is for you to gain an intuition for binary numbers. Using tools to solve the problems defeats the point.

Convert the decimal number 14 to binary.
Answer: 1110

Convert the binary number 101101 to decimal:
Answer: 45

Which is larger: 1000 or 0111?
Answer: 1000 (because 1000 is converts to 8, 0111 is converts to 7, so 8>7)

Which is larger: 00100 or 01011?
Answer: 01011 (because 00100 is converts to 4, 01011 is converts to 11, 11>4)

What is 10101 + 01010?
Answer: 21 (16+0+4+0+1) + 10 (0+8+0+2+0)= 31

What is 10001 + 10001?
Answer: 17 (16+0+0+0+1) + 17 (16+0+0+0+1) = 34

What's the largest number you can store with 4 bits, if you want to be able to represent the number 0?
Answer: The number 0 is represented as 0000, and the largest number, 15, is represented as 1111 (8+4+2+1=15)

How many bits would you need in order to store the numbers between 0 and 255 inclusive?
Answer: 8 bits to store numbers between 0 and 255, inclusive. 

How many bits would you need in order to store the numbers between 0 and 3 inclusive?
Answer: 2 bits

How many bits would you need in order to store the numbers between 0 and 1000 inclusive?
Answer: 10 bits

How can you test if a binary number is a power of two (e.g. 1, 2, 4, 8, 16, ...)?
Answer: To test if a binary number is a power of two, use the bitwise logic (n > 0) && ((n & (n - 1)) == 0), which identifies if the number has exactly one set bit. 

Convert the decimal number 14 to hex.
Answer: E

Convert the decimal number 386 to hex.
Answer: The decimal number 386 is equal to 182 in hexadecimal. 

Convert the hex number 386 to decimal.
Answer: The hexadecimal number 386 is equal to 902 in decimal.

Convert the hex number B to decimal.
Answer: 11, because hexadecimal uses base-16, where letters represent values 10-15 (A=10, B=11)

If reading the byte 0x21 as a number, what decimal number would it mean?
Answer: The hexadecimal byte 0x21 represents the decimal number 33.

If reading the byte 0x21 as an ASCII character, what character would it mean?
Answer: The byte 0x21 (which is 33 in decimal) represents the exclamation mark (!)

If reading the byte 0x21 as a greyscale colour, as described in "Approaches for Representing Colors and Images", what colour would it mean?
Answer: In 8-bit greyscale imaging, the hexadecimal byte 0x21 converts to a decimal value of 33, representing a very dark grey color. On a scale from 0 (black) to 255 (white), this low value indicates a shade close to black.

If reading the bytes 0xAA00FF as an RGB colour, as described in "Approaches for Representing Colors and Images", what colour would it mean?
Answer: Interpreting the bytes 0xAA00FF (RGB 170, 0, 255) results in a vibrant, saturated violet or deep purple color. This hex code is frequently identified as a shade of magenta or electric purple. 

If reading the bytes 0xAA00FF as a sequence of three one-byte decimal numbers, what decimal numbers would they be?
Answer: Reading the bytes 0xAA00FF as a sequence of three one-byte decimal numbers results in 170, 0, and 255.


