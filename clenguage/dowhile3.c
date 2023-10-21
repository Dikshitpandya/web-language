// write a program to creat a patten printer give option for following 
// 1,4,9,16,25,36,..........1000    square
// 1 8 27 64 .....10000   cube 
// 2,1 3 4 7 11 18 29 47 76 123 ......300     lucas series 
// 0 1 3 6 10 15 21 28 36 45 55 ......1000    triangul number 
 
#include<stdio.h>
void main()
{

    int number = 1, option,answer = 0,first =0, second =0 ,temp = 1 ,quation;

    do
    {
        printf("select any option ");
    
    printf("\nenter 1 for square patten");
    printf("\nenter 2 for cube patten ");
    printf("\nenter 3 for lucas series ");
    printf("\nenter 4 for triangual number");
    scanf("%d",&option);
    
    if (option == 1)
    {
        printf("1");
        while(answer < 9801)
        {
            number = number +1;
            answer = number * number;
            printf("%d ",answer);
        }
    }
    else if(option == 2)
    {
        answer = 1;
        while(answer < 10000)
        {
            printf("%d ",answer);
            number = number +1;
            answer = number *number *number;
        }
    }
    else if(option ==3)
    {
        first =2;
        second = 1;
        answer =0;
        printf("%d ", first);
        printf("%d",second);

        answer = first +second;
        first = answer;
        printf("%d ",answer);
        while(answer < 123)
        {
            answer = answer + second;
            second = answer ;
            printf("%d ",answer);

            answer = first + answer;
            first =answer;
            printf("%d ",answer);
        }

    }
    else if(option == 4)
    {
        number = 0;
        printf("%d ",number);
        while(answer < 990)
        {
            answer = answer + temp;
            printf("%d ",answer);
            temp = temp +1;
        }
    }
    
    printf("\npress 0 to exit any other number to continue");
    scanf("%d",quation);
    } while (quation != 0);
}