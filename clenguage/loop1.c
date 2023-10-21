// write a program to print multipalication table of 5 using for loop
// 5 × 1 = 05

#include<stdio.h>
void main()
{
    int answer = 10,colume = 1;
    
    printf("5 * %d = 5 ", colume);
    for(colume =1;colume < 10;answer = answer + 5)
    {
    
    colume  = colume + 1;
    printf("\n5 * %d = %d ", colume, answer);
    }
   // colume = colume + 1; 
   // answer = answer + 5;
   // printf("\n 5 * %d = %d ",colume , answer);
}