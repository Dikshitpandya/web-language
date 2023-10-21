 //write a program to take 5 player score for football [goal] and find lowest score

 #include<stdio.h>
 void main()
 {
    int run[5];
    int flash = 0 ,count = 0 ,temp = 0;

     for(count = 0;count <5;count++)
     {
        printf("enter %d football player run ",count+1);
        scanf("%d",&run[count]);
      }
      for(count =0;count < 5;count++)
      {
        printf("\n %d football player run is %d",count+1 ,run[count]);
      }
    
    for(flash =0;flash < 5;flash++)
    {
        for (count = flash+1;count< 5;count++)
        {
            if(run[flash] > run[count])
            {
                temp = run[flash];
                run[flash] = run[count];
                run[count] =temp;
            }
        }
        
    }
     for(count =0;count <5;count++)
     {
        printf("\n %d football player run is %d",count +1,run[count]);
     }
 }