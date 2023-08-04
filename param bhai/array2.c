 //write a program to take 5 cicketer run and find total of all also find average.
 // average formula
 // average = total of number (a=  20 , b = 30 , c = 50 ) total = 100   /  total of this number exampal = 3
 //  average =  100 / 3

#include<stdio.h>
void main()
{
    int run[5];
    int count= 0;
    int total =0 , average = 0;
    while(count < 5)
    {
      printf("enter %d cricketers run",count+1);
      scanf("%d",&run[count]);
      count++;

    }
    
    for(count = 0;count < 5;count++)
      {
         printf("\n%d cricketers run is %d ",count +1, run[count]);
      }
       
       total = 0;
       count = 0;
    
      do
      {
       total = total + run[count];
       count++;
      } while (count < 5);
      printf("\nthe total is %d ",total);
      average = total / 5;

      printf("\nthe cricketars average is %d ",average);
      
      printf("\n \ngoodbye.. ");  
}
   