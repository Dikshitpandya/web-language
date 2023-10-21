// write a program to findout wether the given year is millium year or not
// 1000 2000 3000

#include<stdio.h>
void main()
{
int year;
int answer;

printf("enter vlue of year");
scanf("%d",&year);

answer = year % 1000;
//check

if(answer == 0)
{
    printf("it is millium year");
}
else
{
    printf("it is not millium year");
}
   printf("goodbye...");
}