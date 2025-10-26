package main

import "fmt"

func Add(x, y int) (res int) {
	return x + y
}

func Subtract(x, y int) (res int) {
	return x - y
}

func main() {
	fmt.Println("Addition", Add(2, 3))
	fmt.Println("Subtract", Subtract(2, 3))
}
