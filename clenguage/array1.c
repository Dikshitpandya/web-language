// write a program to take 5 player score for football (goal ) and find higher scorer

#include<stdio.h>
void main()

    
{
    int goal[5];
    int count= 0;
    
    while(count < 5)
    {
      printf("enter %d football player goal",count+1);
      scanf("%d",&goal[count]);
      count++;

    }
    
    for(count = 0;count < 5;count++)
      {
         printf("\n%d football player goal is  %d ",count +1, goal[count]);
      }    

      if(goal[0] > goal[1]  && goal[0] > goal[2] && goal[0] > goal[3] && goal[0] > goal[4])
      {
        printf("\n1 football player score is higher");
      }
      if(goal[1] > goal[0] && goal[1] > goal[2] && goal[1] > goal[3] && goal[1] > goal[4])
      {
        printf("\n2 football player score is higher");
      }
      if(goal[2] > goal[0] && goal[2] > goal[1] && goal[2] > goal[3] && goal[2] > goal[4])
      {
        printf("\n3 football player score is higher");
      }
      if(goal[3] > goal[0] && goal[3] > goal[1] && goal[3] > goal[2] && goal[3] > goal[4])
      {
        printf("\n4 football player score is higher");
      }
      if(goal[4] > goal[0] && goal[4] > goal[1] && goal[4] > goal[2] && goal[4] > goal[3])
      {
        printf("\n5 football player score is higher");
      }
      else
      {
        printf("\nall player score are same");
      }
      printf("goodbye.. ");
}