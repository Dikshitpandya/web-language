// write pentagonal numbers 
//1 5 12 22 35 51 70 92 117 145 176 ....300
// 4 7  10 13 16 19 22 25 
// 3 3 3 3 3 33 3 3 
// flash = 4 +temp

#include<stdio.h>
void main()
{
    int number = 1, flash = 4,answer = 0 ,temp =3 ;

    answer = number ;
    printf("%d ",answer);
    answer = answer + flash;
    printf("%d ",answer);
    while(answer < 287)
    {
     flash = flash + 3;
     answer = answer + flash;
     printf("%d ",answer);
    }
}