// write a program to accept month number from user. display message "this month has 28 or 29 days" if month if february
// 

#include<stdio.h>
void main()
 
 {
    int month;

    printf("enter month number");
    scanf("%d",&month);

//check
if(month == 2)

{
    printf("this month has 28 or 29 days");

}
else
{
    printf("this month has not 28 or 29 days");
}
printf("\n goodbye..");    
 }