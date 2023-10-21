// inverted half piramid
// * * * * * *  *

#include<stdio.h>
void main()
{
    int count = 0, flash = 0, temp = 5;
    printf("*");
    printf("*");
    printf("*");
    printf("*");
    printf("*");
    printf("*");
    printf("\n");

    while(flash < 6 )
    {
        while(count< temp)
        {
            printf("*");
            count = count + 1;
        }
        printf("\n");
        temp = temp - 1;
        count = 0;
        flash = flash + 1;
    }
}


    



