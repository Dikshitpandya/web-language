// write solve this 0 ,1,3,6,10,15,21,28,36,45,55,......1000
// solve them 

#include<stdio.h>
void main()
{

    int number=1 , answer =1;

    
        printf("0");
        printf("%d,", number);
        number =number +1;
        answer = number +1;
        printf("%d,", answer);
        number = number;
        answer = number + number + number;
        printf("%d,",answer);
        number = number + number;
        answer = answer + number;
        printf("%d,",answer);

        while( answer < 990)
        {
        number = number +1;
        answer = answer + number;
        printf("%d,",answer);
        }
        //number = number +1;
        //answer = answer + number;
        //printf("%d,",answer);
        //number = number +1;
        //answer = answer + number;
        //printf("%d,",answer);
        
}