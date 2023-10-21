 // write a program to input rea of cyliender take input from user 
 // answer =2pi *( redius * height )+2 *pi *( redius * redius)


 #include<stdio.h>
 void main()

 { float pi = 3.14159265;
   float redius =0 ,height =0 ,answer =0;

   printf("Enter value of redius"); 
   scanf("%f",&redius);
   printf("enter value of height");
   scanf("%f",&height);

   printf("the value of redius is %f and value of height is %f",redius, height);

   answer = 2*pi*(redius*height)+2*pi*(redius*redius);
   printf("\nyour answer is %f",answer);
 }