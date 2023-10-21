
// write a program to acept name from user and printf it in revers
// Write a programe to take name as an input from user
#include <stdio.h>
void main()
{
     char names[25];
     int count = 0;
     printf("Enter your name ");

     for (count = 0; count < 25; count++)
     {
          scanf("%c", &names[count]);
          if (names[count] == '\n')
          {
               break;
          }
     }
     printf("your name is ");
     for(count=0;count<25;count++)
     {
          if(names[count]=='\n')
          {
               break;
          }
          printf("%c", names[count]);
     }
}