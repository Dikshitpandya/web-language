// write a program to findout wether the given year is millanium year or not
// 1000 , 2000 , 3000 ,4000 , 5000;
#include<stdio.h>
void main()
{
    int year,answer,option;
    
    do
    {
         printf("enter value of year");
    scanf("%d",&year);

    answer = year %1000;

    //check
    if(answer == 0)
    {
        printf("it is milliem year");
    }
    printf("goodbye ");
    printf("press 0 to exit \n any other number to continue");
    scanf("%d",&option );
    } while(option != 0 );
    

}
