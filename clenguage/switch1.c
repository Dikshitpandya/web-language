// write a program to findout wether the user given alphabet is vowel or not using swith case.
// a , e , i , o , u , 

#include<stdio.h>
void main()
{
    char letter;
    
    printf("enter value of latter");
    scanf("%c",&letter);

    //check
    switch(letter)
    {
        case 'a':
          printf("that alphabet is vowel ");
          break;

        case 'e':
          printf("that alphabet is vowel");
          break;

        case 'i':
           printf("that alphabet is vowel");
           break;

        case 'o':
            printf("that alphabet is vowel");
            break;

        case 'u':
             printf("that alphabet is vowel");
             break;

        default:
            printf("that alphabet is not vowel");
    }   
        printf("\ngoodbye..");
}
