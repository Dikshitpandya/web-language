//write a program to peform spilit for 4 digit number
//  7658
//first =7
//second=6
//third=5
//forth=8

#include<stdio.h>
void main()
{
int number,first, second, third, forth;
printf("Enter value of number");
scanf("%d",&number);
//7658
first=number/1000;
second=number%1000;
second=second/100;
third=number%1000;
third=third%100;
third=third/10;
third=third%10;
forth=number%1000;
forth=forth%100;
forth=forth%10;
printf("your first is%d and your second is %d and\n your third is %d and your forth is %d",first,second,third,forth);
 }